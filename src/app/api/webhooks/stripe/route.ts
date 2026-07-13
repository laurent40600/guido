import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { grantPurchase } from "@/lib/purchases";

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET manquant.");
    return NextResponse.json({ error: "Configuration serveur invalide." }, { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    if (!signature) throw new Error("Signature manquante.");
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("Signature webhook Stripe invalide :", error);
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    await handleCheckoutCompleted(session);
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.client_reference_id ?? session.metadata?.userId;
  if (!userId) {
    console.error("Checkout Session Stripe sans userId :", session.id);
    return;
  }

  const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["line_items.data.price.product"],
  });

  const lineItems = fullSession.line_items?.data ?? [];
  const withdrawalWaivedAt = new Date();
  const grantedItems: { guideSlug: string; offerId: string }[] = [];

  for (const lineItem of lineItems) {
    const product = lineItem.price?.product;
    const metadata =
      product && typeof product === "object" && "metadata" in product ? product.metadata : undefined;
    const guideSlug = metadata?.guideSlug;
    const offerId = metadata?.offerId;
    if (!guideSlug || !offerId) {
      console.error("Ligne de commande Stripe sans métadonnées guideSlug/offerId :", lineItem.id);
      continue;
    }

    await grantPurchase(userId, guideSlug, offerId, {
      withdrawalWaivedAt,
      stripeCheckoutSessionId: session.id,
    });
    grantedItems.push({ guideSlug, offerId });
  }

  // Retire du panier uniquement les articles réellement achetés dans cette session.
  for (const item of grantedItems) {
    await db.cartItem.deleteMany({
      where: { userId, guideSlug: item.guideSlug, offerId: item.offerId },
    });
  }
}
