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
  const body = await request.json();

  if (body.action === "verify-email") {
    const updated = await db.user.update({
      where: { id },
      data: { emailVerified: new Date() },
      select: { id: true, email: true, emailVerified: true },
    });
    return NextResponse.json({ success: true, user: updated });
  }

  return NextResponse.json({ error: "Action inconnue." }, { status: 400 });
}
