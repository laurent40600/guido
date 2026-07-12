// Usage: npx tsx scripts/grant-guide.ts <email> <guideSlug> [offerId]
// Accorde manuellement l'accès à un guide (ou à une offre précise d'un guide à plusieurs
// offres, ex. "seul" ou "pack") à un utilisateur déjà inscrit et vérifié, en attendant
// que le vrai système de paiement soit en place.
import { db } from "../src/lib/db";

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

  const purchase = await db.purchase.upsert({
    where: { userId_guideSlug_offerId: { userId: user.id, guideSlug, offerId } },
    update: {},
    create: { userId: user.id, guideSlug, offerId },
  });

  console.log(`Accès accordé : ${email} -> ${guideSlug} (offre: ${offerId}, purchase id: ${purchase.id})`);
}

main().finally(() => db.$disconnect());
