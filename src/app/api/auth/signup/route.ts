import { NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { sendVerificationEmail } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VERIFICATION_DURATION_MS = 1000 * 60 * 60 * 24; // 24h

export async function POST(request: Request) {
  const { email, password, firstName, lastName, phone, address } = await request.json();

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }
  if (typeof password !== "string" || password.length < 8) {
    return NextResponse.json(
      { error: "Le mot de passe doit contenir au moins 8 caractères." },
      { status: 400 },
    );
  }
  if (typeof firstName !== "string" || firstName.trim().length === 0) {
    return NextResponse.json({ error: "Le prénom est obligatoire." }, { status: 400 });
  }
  if (typeof lastName !== "string" || lastName.trim().length === 0) {
    return NextResponse.json({ error: "Le nom est obligatoire." }, { status: 400 });
  }
  if (typeof phone !== "string" || phone.trim().length === 0) {
    return NextResponse.json({ error: "Le numéro de téléphone est obligatoire." }, { status: 400 });
  }
  if (typeof address !== "string" || address.trim().length === 0) {
    return NextResponse.json({ error: "L'adresse est obligatoire." }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();

  const existing = await db.user.findUnique({ where: { email: normalizedEmail } });
  if (existing) {
    return NextResponse.json(
      { error: "Un compte existe déjà avec cette adresse email." },
      { status: 409 },
    );
  }

  const passwordHash = await hashPassword(password);
  const user = await db.user.create({
    data: {
      email: normalizedEmail,
      passwordHash,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone.trim(),
      address: address.trim(),
    },
  });

  const token = crypto.randomBytes(32).toString("hex");
  await db.verificationToken.create({
    data: {
      token,
      userId: user.id,
      expiresAt: new Date(Date.now() + VERIFICATION_DURATION_MS),
    },
  });

  const verifyUrl = `${process.env.APP_URL}/api/auth/verify?token=${token}`;
  await sendVerificationEmail(normalizedEmail, verifyUrl);

  // Mode test : aucun service d'email n'est encore branché, donc on renvoie
  // aussi le lien directement dans la réponse pour pouvoir tester le parcours.
  // À retirer dès qu'un vrai service d'envoi d'email est en place.
  const devVerifyUrl = process.env.NODE_ENV !== "production" ? verifyUrl : undefined;

  return NextResponse.json({ success: true, devVerifyUrl });
}
