import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyPassword, setSessionCookie } from "@/lib/auth";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (typeof email !== "string" || typeof password !== "string") {
    return NextResponse.json({ error: "Identifiants invalides." }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const user = await db.user.findUnique({ where: { email: normalizedEmail } });

  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: "Email ou mot de passe incorrect." }, { status: 401 });
  }

  if (!user.emailVerified) {
    return NextResponse.json(
      { error: "Merci de vérifier votre adresse email avant de vous connecter." },
      { status: 403 },
    );
  }

  await setSessionCookie(user.id);

  return NextResponse.json({ success: true });
}
