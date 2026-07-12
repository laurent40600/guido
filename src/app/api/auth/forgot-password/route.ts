import { NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/lib/db";
import { sendPasswordResetEmail } from "@/lib/mailer";

const RESET_DURATION_MS = 1000 * 60 * 60; // 1h

export async function POST(request: Request) {
  const { email } = await request.json();

  if (typeof email !== "string" || email.trim().length === 0) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const user = await db.user.findUnique({ where: { email: normalizedEmail } });

  // On ne révèle jamais si l'email existe ou non : réponse identique dans tous les cas.
  let devResetUrl: string | undefined;

  if (user) {
    const token = crypto.randomBytes(32).toString("hex");
    await db.passwordResetToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt: new Date(Date.now() + RESET_DURATION_MS),
      },
    });

    const resetUrl = `${process.env.APP_URL}/reinitialiser-mot-de-passe?token=${token}`;
    await sendPasswordResetEmail(normalizedEmail, resetUrl);

    devResetUrl = process.env.NODE_ENV !== "production" ? resetUrl : undefined;
  }

  return NextResponse.json({ success: true, devResetUrl });
}
