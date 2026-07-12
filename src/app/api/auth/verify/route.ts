import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const appUrl = process.env.APP_URL ?? request.nextUrl.origin;

  if (!token) {
    return NextResponse.redirect(`${appUrl}/connexion?error=lien-invalide`);
  }

  const verificationToken = await db.verificationToken.findUnique({
    where: { token },
  });

  if (!verificationToken || verificationToken.expiresAt < new Date()) {
    return NextResponse.redirect(`${appUrl}/connexion?error=lien-expire`);
  }

  await db.user.update({
    where: { id: verificationToken.userId },
    data: { emailVerified: new Date() },
  });

  await db.verificationToken.delete({ where: { token } });

  return NextResponse.redirect(`${appUrl}/connexion?verified=1`);
}
