import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { getGuide } from "@/data/guides";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const offerId = new URL(request.url).searchParams.get("offer") ?? "default";

  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Vous devez être connecté." }, { status: 401 });
  }

  const purchase = await db.purchase.findUnique({
    where: { userId_guideSlug_offerId: { userId: session.userId, guideSlug: slug, offerId } },
  });
  if (!purchase) {
    return NextResponse.json({ error: "Vous n'avez pas accès à ce guide." }, { status: 403 });
  }

  const guide = getGuide(slug);
  if (!guide) {
    return NextResponse.json({ error: "Guide introuvable." }, { status: 404 });
  }

  const offer = guide.offers?.find((candidate) => candidate.id === offerId);
  const pdfFile = offer?.pdfFile ?? slug;

  const filePath = path.join(process.cwd(), "content", "guides", `${pdfFile}.pdf`);

  let fileBuffer: Buffer;
  try {
    fileBuffer = await readFile(filePath);
  } catch {
    return NextResponse.json(
      { error: "Le fichier PDF de ce guide n'est pas encore disponible." },
      { status: 404 },
    );
  }

  return new NextResponse(new Uint8Array(fileBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${pdfFile}.pdf"`,
    },
  });
}
