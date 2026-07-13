import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { getGuide } from "@/data/guides";
import { getNextOrderNumber } from "@/lib/orders";

async function requireAdmin() {
  const session = await getSession();
  if (!session) return null;
  const user = await db.user.findUnique({ where: { id: session.userId } });
  return user?.isAdmin ? user : null;
}

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Accès réservé aux administrateurs." }, { status: 403 });
  }

  const { email, guideSlug, offerId = "default" } = await request.json();

  if (typeof email !== "string" || typeof guideSlug !== "string") {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const buyer = await db.user.findUnique({ where: { email: email.toLowerCase() } });
  if (!buyer) {
    return NextResponse.json({ error: "Aucun compte trouvé pour cette adresse email." }, { status: 404 });
  }

  const guide = getGuide(guideSlug);
  if (!guide) {
    return NextResponse.json({ error: "Guide introuvable." }, { status: 404 });
  }
  if (guide.offers && guide.offers.length > 0 && !guide.offers.some((offer) => offer.id === offerId)) {
    return NextResponse.json({ error: "Offre introuvable pour ce guide." }, { status: 400 });
  }

  if (guide.bundleOf && guide.bundleOf.length > 0) {
    const purchases = [];
    for (const item of guide.bundleOf) {
      const existingItem = await db.purchase.findUnique({
        where: {
          userId_guideSlug_offerId: {
            userId: buyer.id,
            guideSlug: item.guideSlug,
            offerId: item.offerId,
          },
        },
      });
      const itemPurchase = existingItem ?? await db.purchase.create({
        data: {
          userId: buyer.id,
          guideSlug: item.guideSlug,
          offerId: item.offerId,
          orderNumber: await getNextOrderNumber(),
        },
      });
      purchases.push(itemPurchase);
    }

    return NextResponse.json({ success: true, purchase: purchases[0], purchases, bundle: true });
  }

  const existing = await db.purchase.findUnique({
    where: { userId_guideSlug_offerId: { userId: buyer.id, guideSlug, offerId } },
  });

  const purchase = existing ?? await db.purchase.create({
    data: { userId: buyer.id, guideSlug, offerId, orderNumber: await getNextOrderNumber() },
  });

  return NextResponse.json({ success: true, purchase });
}
