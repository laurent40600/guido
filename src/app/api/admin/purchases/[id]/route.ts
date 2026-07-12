import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";

async function requireAdmin() {
  const session = await getSession();
  if (!session) return null;
  const user = await db.user.findUnique({ where: { id: session.userId } });
  return user?.isAdmin ? user : null;
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Accès réservé aux administrateurs." }, { status: 403 });
  }

  const { id } = await params;
  const purchase = await db.purchase.findUnique({ where: { id } });
  if (!purchase) {
    return NextResponse.json({ error: "Commande introuvable." }, { status: 404 });
  }

  const body = await request.json();

  if (body.action === "reset") {
    const updated = await db.purchase.update({
      where: { id },
      data: { downloadCount: 0 },
    });
    return NextResponse.json({ success: true, purchase: updated });
  }

  if (typeof body.maxDownloads === "number") {
    if (!Number.isInteger(body.maxDownloads) || body.maxDownloads < 0) {
      return NextResponse.json({ error: "maxDownloads doit être un entier positif." }, { status: 400 });
    }
    const updated = await db.purchase.update({
      where: { id },
      data: { maxDownloads: body.maxDownloads },
    });
    return NextResponse.json({ success: true, purchase: updated });
  }

  return NextResponse.json({ error: "Action inconnue." }, { status: 400 });
}
