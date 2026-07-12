import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { getGuide } from "@/data/guides";
import { watermarkPdf } from "@/lib/watermark";
import { recordDownload, DownloadLimitReachedError, DOWNLOAD_LIMIT_MESSAGE } from "@/lib/downloads";

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

  if (purchase.downloadCount >= purchase.maxDownloads) {
    return NextResponse.json({ error: DOWNLOAD_LIMIT_MESSAGE }, { status: 403 });
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

  const buyer = await db.user.findUnique({ where: { id: session.userId } });
  if (!buyer) {
    return NextResponse.json({ error: "Compte introuvable." }, { status: 404 });
  }

  const buyerName = [buyer.firstName, buyer.lastName].filter(Boolean).join(" ") || "Client Guido";

  // Le compteur ne diminue qu'ici, une fois le fichier de base lu avec
  // succès — un téléchargement qui échoue avant ce point ne consomme rien.
  let downloadNumber: number;
  let uniqueDownloadId: string;
  try {
    ({ downloadNumber, uniqueDownloadId } = await recordDownload(purchase.id, session.userId, slug, request));
  } catch (error) {
    if (error instanceof DownloadLimitReachedError) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    throw error;
  }

  const watermarkedPdf = await watermarkPdf(fileBuffer, {
    buyerName,
    buyerEmail: buyer.email,
    orderNumber: purchase.orderNumber,
    downloadNumber,
    maxDownloads: purchase.maxDownloads,
    uniqueDownloadId,
  });

  return new NextResponse(new Uint8Array(watermarkedPdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${pdfFile}.pdf"`,
      "Cache-Control": "private, no-store, must-revalidate",
    },
  });
}
