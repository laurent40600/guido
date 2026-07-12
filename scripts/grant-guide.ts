// Usage: npx tsx scripts/grant-guide.ts <email> <guideSlug> [offerId]
// Accorde manuellement l'accès à un guide (ou à une offre précise d'un guide à plusieurs
// offres, ex. "seul" ou "pack") à un utilisateur déjà inscrit et vérifié, en attendant
// que le vrai système de paiement soit en place.
//
// Ce script ne renseigne PAS withdrawalWaivedAt : cette date ne doit être
// enregistrée que lorsque l'acheteur coche lui-même la case de renonciation
// au droit de rétractation sur la page /panier, au moment d'un vrai paiement
// en ligne. Tant que l'accès est accordé manuellement via ce script, gardez
// une preuve écrite séparée (email, etc.) que le client a été informé.
import { db } from "../src/lib/db";
import { getNextOrderNumber } from "../src/lib/orders";

async function main() {
  const [email, guideSlug, offerId = "default"] = process.argv.slice(2);

  if (!email || !guideSlug) {
    console.error("Usage: npx tsx scripts/grant-guide.ts <email> <guideSlug> [offerId]");
    process.exit(1);
  }

  const user = await db.user.findUnique({ where: { email: email.toLowerCase() } });
  if (!user) {
    console.error(`Aucun compte trouvé pour ${email}. Créez d'abord le compte via /inscription.`);
    process.exit(1);
  }

  const existing = await db.purchase.findUnique({
    where: { userId_guideSlug_offerId: { userId: user.id, guideSlug, offerId } },
  });

  const purchase = existing ?? await db.purchase.create({
    data: { userId: user.id, guideSlug, offerId, orderNumber: await getNextOrderNumber() },
  });

  console.log(`Accès accordé : ${email} -> ${guideSlug} (offre: ${offerId}, commande #${purchase.orderNumber})`);
}

main().finally(() => db.$disconnect());
