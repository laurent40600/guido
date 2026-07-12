import { NextResponse } from "next/server";
import crypto from "crypto";
import { getSession, verifyPassword } from "@/lib/auth";
import { db } from "@/lib/db";
import { sendEmailChangeVerification } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CHANGE_DURATION_MS = 1000 * 60 * 60; // 1h

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Vous devez être connecté." }, { status: 401 });
  }

  const { newEmail, password } = await request.json();

  if (typeof newEmail !== "string" || !EMAIL_RE.test(newEmail)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }
  if (typeof password !== "string" || password.length === 0) {
    return NextResponse.json({ error: "Mot de passe requis." }, { status: 400 });
  }

  const user = await db.user.findUnique({ where: { id: session.userId } });
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: "Mot de passe incorrect." }, { status: 401 });
  }

  const normalizedEmail = newEmail.trim().toLowerCase();

  if (normalizedEmail === user.email) {
    return NextResponse.json(
      { error: "C'est déjà votre adresse email actuelle." },
      { status: 400 },
    );
  }

  const existing = await db.user.findUnique({ where: { email: normalizedEmail } });
  if (existing) {
    return NextResponse.json(
      { error: "Un compte existe déjà avec cette adresse email." },
      { status: 409 },
    );
  }

  // On retire les demandes de changement précédentes non abouties pour cet utilisateur.
  await db.emailChangeToken.deleteMany({ where: { userId: user.id } });

  const token = crypto.randomBytes(32).toString("hex");
  await db.emailChangeToken.create({
    data: {
      token,
      userId: user.id,
      newEmail: normalizedEmail,
      expiresAt: new Date(Date.now() + CHANGE_DURATION_MS),
    },
  });

  const verifyUrl = `${process.env.APP_URL}/api/account/email/confirm?token=${token}`;
  await sendEmailChangeVerification(normalizedEmail, verifyUrl);

  const devConfirmUrl = process.env.NODE_ENV !== "production" ? verifyUrl : undefined;

  return NextResponse.json({ success: true, devConfirmUrl });
}
