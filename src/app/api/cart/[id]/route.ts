import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Vous devez être connecté." }, { status: 401 });
  }

  const cartItem = await db.cartItem.findUnique({ where: { id } });
  if (!cartItem || cartItem.userId !== session.userId) {
    return NextResponse.json({ error: "Article introuvable." }, { status: 404 });
  }

  await db.cartItem.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
