import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { getGuide } from "@/data/guides";
import { resolveOfferPrice, priceToCents } from "@/lib/pricing";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Vous devez être connecté." }, { status: 401 });
  }

  const { consentGiven } = await request.json().catch(() => ({}));
  if (consentGiven !== true) {
    return NextResponse.json(
      { error: "Merci de cocher la case de consentement avant de continuer." },
      { status: 400 },
    );
  }

  const [cartItems, user] = await Promise.all([
    db.cartItem.findMany({ where: { userId: session.userId } }),
    db.user.findUnique({ where: { id: session.userId } }),
  ]);
  if (cartItems.length === 0) {
    return NextResponse.json({ error: "Votre panier est vide." }, { status: 400 });
  }

  const lineItems: Array<{
    price_data: {
      currency: string;
      unit_amount: number;
      product_data: { name: string; metadata: Record<string, string> };
    };
    quantity: number;
  }> = [];

  for (const item of cartItems) {
    const guide = getGuide(item.guideSlug);
    const offer = guide?.offers?.find((o) => o.id === item.offerId);
    if (!guide || !offer) {
      return NextResponse.json(
        { error: `Un article de votre panier n'est plus disponible (${item.guideSlug}).` },
        { status: 409 },
      );
    }

    const { displayPrice } = resolveOfferPrice(offer);
    lineItems.push({
      price_data: {
        currency: "eur",
        unit_amount: priceToCents(displayPrice),
        product_data: {
          name: `${guide.title} — ${offer.label}`,
          metadata: { guideSlug: guide.slug, offerId: offer.id },
        },
      },
      quantity: 1,
    });
  }

  const appUrl = process.env.APP_URL ?? "http://localhost:3000";

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    client_reference_id: session.userId,
    metadata: { userId: session.userId },
    customer_email: user?.email,
    success_url: `${appUrl}/panier/confirmation?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/panier`,
  });

  if (!checkoutSession.url) {
    return NextResponse.json({ error: "Impossible de créer la session de paiement." }, { status: 500 });
  }

  return NextResponse.json({ url: checkoutSession.url });
}
