import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export interface WatermarkInfo {
  buyerName: string;
  buyerEmail: string;
  orderNumber: number;
  downloadNumber: number;
  maxDownloads: number;
  /** UUID complet (stocké tel quel en base) ; seule une version courte est affichée sur la page. */
  uniqueDownloadId: string;
}

const NAVY = rgb(0x1e / 255, 0x2a / 255, 0x4a / 255);

/** Dérive un code court et lisible (ex. "3F8A-92BC-7D11") à partir d'un UUID complet. */
export function shortDownloadCode(uuid: string): string {
  const hex = uuid.replace(/-/g, "").toUpperCase().slice(0, 12);
  return hex.match(/.{1,4}/g)!.join("-");
}

/**
 * Ajoute une ligne discrète en bas de chaque page d'un PDF, identifiant
 * l'acheteur et ce téléchargement précis (nom, email, commande, numéro de
 * téléchargement, identifiant unique). Permet de retrouver l'origine d'une
 * copie diffusée sans autorisation. Le fichier source n'est jamais modifié :
 * cette fonction retourne toujours une nouvelle copie en mémoire.
 */
export async function watermarkPdf(pdfBytes: Buffer | Uint8Array, info: WatermarkInfo): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const code = shortDownloadCode(info.uniqueDownloadId);
  const line =
    `Acheté par : ${info.buyerName}  •  Email : ${info.buyerEmail}  •  Commande : #${info.orderNumber}  •  ` +
    `Téléchargement : ${info.downloadNumber}/${info.maxDownloads}  •  ID : ${code}  •  Interdiction de redistribution`;

  const fontSize = 6;

  for (const page of pdfDoc.getPages()) {
    const { width } = page.getSize();
    const textWidth = font.widthOfTextAtSize(line, fontSize);
    page.drawText(line, {
      x: Math.max((width - textWidth) / 2, 14),
      y: 5,
      size: fontSize,
      font,
      color: NAVY,
    });
  }

  return pdfDoc.save();
}
