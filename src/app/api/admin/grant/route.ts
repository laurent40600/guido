import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { grantPurchase, GuideNotFoundError, OfferNotFoundError } from "@/lib/purchases";

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

  try {
    const { purchases, bundle } = await grantPurchase(buyer.id, guideSlug, offerId);
    return NextResponse.json({ success: true, purchase: purchases[0], purchases, bundle });
  } catch (error) {
    if (error instanceof GuideNotFoundError) {
      return NextResponse.json({ error: "Guide introuvable." }, { status: 404 });
    }
    if (error instanceof OfferNotFoundError) {
      return NextResponse.json({ error: "Offre introuvable pour ce guide." }, { status: 400 });
    }
    throw error;
  }
}
