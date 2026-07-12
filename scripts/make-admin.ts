// Usage: npx tsx scripts/make-admin.ts <email>
// Donne l'accès au panneau d'administration (/admin) à un compte existant.
// Volontairement réservé à la ligne de commande : aucune interface publique
// ne doit jamais permettre de s'auto-promouvoir administrateur.
import { db } from "../src/lib/db";

async function main() {
  const [email] = process.argv.slice(2);

  if (!email) {
    console.error("Usage: npx tsx scripts/make-admin.ts <email>");
    process.exit(1);
  }

  const user = await db.user.update({
    where: { email: email.toLowerCase() },
    data: { isAdmin: true },
  });

  console.log(`${user.email} est maintenant administrateur.`);
}

main().finally(() => db.$disconnect());
