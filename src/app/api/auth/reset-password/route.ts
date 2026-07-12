import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const { token, password } = await request.json();

  if (typeof token !== "string" || token.length === 0) {
    return NextResponse.json({ error: "Lien invalide." }, { status: 400 });
  }
  if (typeof password !== "string" || password.length < 8) {
    return NextResponse.json(
      { error: "Le mot de passe doit contenir au moins 8 caractères." },
      { status: 400 },
    );
  }

  const resetToken = await db.passwordResetToken.findUnique({ where: { token } });
  if (!resetToken || resetToken.expiresAt < new Date()) {
    return NextResponse.json(
      { error: "Ce lien de réinitialisation est invalide ou a expiré." },
      { status: 400 },
    );
  }

  const passwordHash = await hashPassword(password);
  await db.user.update({
    where: { id: resetToken.userId },
    data: { passwordHash },
  });

  await db.passwordResetToken.deleteMany({ where: { userId: resetToken.userId } });

  return NextResponse.json({ success: true });
}
