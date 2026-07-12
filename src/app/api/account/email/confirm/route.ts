import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const appUrl = process.env.APP_URL ?? request.nextUrl.origin;

  if (!token) {
    return NextResponse.redirect(`${appUrl}/compte/parametres?email_error=lien-invalide`);
  }

  const changeToken = await db.emailChangeToken.findUnique({ where: { token } });

  if (!changeToken || changeToken.expiresAt < new Date()) {
    return NextResponse.redirect(`${appUrl}/compte/parametres?email_error=lien-expire`);
  }

  const existing = await db.user.findUnique({ where: { email: changeToken.newEmail } });
  if (existing && existing.id !== changeToken.userId) {
    await db.emailChangeToken.delete({ where: { token } });
    return NextResponse.redirect(`${appUrl}/compte/parametres?email_error=email-pris`);
  }

  await db.user.update({
    where: { id: changeToken.userId },
    data: { email: changeToken.newEmail, emailVerified: new Date() },
  });

  await db.emailChangeToken.deleteMany({ where: { userId: changeToken.userId } });

  return NextResponse.redirect(`${appUrl}/compte/parametres?email_updated=1`);
}
