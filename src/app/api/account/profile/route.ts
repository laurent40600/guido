import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";

export async function PATCH(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Vous devez être connecté." }, { status: 401 });
  }

  const { firstName, lastName, phone, address } = await request.json();

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

  const user = await db.user.update({
    where: { id: session.userId },
    data: {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone.trim(),
      address: address.trim(),
    },
  });

  return NextResponse.json({
    success: true,
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      address: user.address,
    },
  });
}
