import crypto from "crypto";
import { db } from "@/lib/db";

export const DOWNLOAD_LIMIT_MESSAGE =
  "Vous avez atteint le nombre maximal de téléchargements autorisés. Si vous avez changé d'appareil ou rencontré un problème, contactez le support.";

export class DownloadLimitReachedError extends Error {
  constructor() {
    super(DOWNLOAD_LIMIT_MESSAGE);
    this.name = "DownloadLimitReachedError";
  }
}

/**
 * Réserve atomiquement un créneau de téléchargement pour cette commande et
 * retourne le numéro de téléchargement attribué (1, 2, ...). La comparaison
 * downloadCount < maxDownloads est faite dans la requête SQL elle-même (pas
 * en deux temps lecture/écriture) pour rester correcte même si deux
 * téléchargements sont déclenchés au même instant.
 */
async function reserveDownloadSlot(purchaseId: string): Promise<number> {
  const affected = await db.$executeRaw`
    UPDATE "Purchase"
    SET "downloadCount" = "downloadCount" + 1
    WHERE "id" = ${purchaseId} AND "downloadCount" < "maxDownloads"
  `;

  if (affected === 0) {
    throw new DownloadLimitReachedError();
  }

  const updated = await db.purchase.findUniqueOrThrow({ where: { id: purchaseId } });
  return updated.downloadCount;
}

function getClientIp(request: Request): string | null {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip");
}

/**
 * Consomme un créneau de téléchargement pour cette commande et historise
 * l'événement. À n'appeler qu'une fois le fichier prêt à être envoyé : le
 * compteur ne doit diminuer que pour un téléchargement réellement effectué.
 */
export async function recordDownload(purchaseId: string, userId: string, guideSlug: string, request: Request) {
  const downloadNumber = await reserveDownloadSlot(purchaseId);
  const uniqueDownloadId = crypto.randomUUID();

  await db.downloadEvent.create({
    data: {
      purchaseId,
      userId,
      guideSlug,
      downloadNumber,
      uniqueDownloadId,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get("user-agent"),
    },
  });

  return { downloadNumber, uniqueDownloadId };
}
