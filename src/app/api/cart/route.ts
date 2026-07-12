import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { getGuide } from "@/data/guides";

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Vous devez être connecté." }, { status: 401 });
  }

  const { guideSlug, offerId = "default" } = await request.json();

  if (typeof guideSlug !== "string" || typeof offerId !== "string") {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const guide = getGuide(guideSlug);
  if (!guide) {
    return NextResponse.json({ error: "Guide introuvable." }, { status: 404 });
  }
  if (guide.offers && guide.offers.length > 0 && !guide.offers.some((offer) => offer.id === offerId)) {
    return NextResponse.json({ error: "Offre introuvable." }, { status: 404 });
  }

  const alreadyPurchased = await db.purchase.findUnique({
    where: { userId_guideSlug_offerId: { userId: session.userId, guideSlug, offerId } },
  });
  if (alreadyPurchased) {
    return NextResponse.json({ error: "Vous possédez déjà ce guide." }, { status: 409 });
  }

  const cartItem = await db.cartItem.upsert({
    where: { userId_guideSlug_offerId: { userId: session.userId, guideSlug, offerId } },
    update: {},
    create: { userId: session.userId, guideSlug, offerId },
  });

  return NextResponse.json({ success: true, cartItem });
}
