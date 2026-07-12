// Usage: npx tsx scripts/create-admin.ts <email> <password> [prenom] [nom]
// Crée un compte administrateur ou promeut un compte existant. Le mot de
// passe est haché comme pour tout compte normal. L'email est marqué vérifié
// automatiquement (un administrateur n'a pas besoin de cliquer un lien).
// Volontairement réservé à la ligne de commande — jamais accessible depuis
// une interface web, pour empêcher toute auto-promotion.
import { db } from "../src/lib/db";
import { hashPassword } from "../src/lib/auth";

async function main() {
  const [email, password, firstName = "", lastName = ""] = process.argv.slice(2);

  if (!email || !password) {
    console.error("Usage: npx tsx scripts/create-admin.ts <email> <password> [prenom] [nom]");
    process.exit(1);
  }
  if (password.length < 8) {
    console.error("Le mot de passe doit contenir au moins 8 caractères.");
    process.exit(1);
  }

  const normalizedEmail = email.trim().toLowerCase();
  const passwordHash = await hashPassword(password);

  const user = await db.user.upsert({
    where: { email: normalizedEmail },
    update: { passwordHash, isAdmin: true, emailVerified: new Date() },
    create: {
      email: normalizedEmail,
      passwordHash,
      firstName,
      lastName,
      isAdmin: true,
      emailVerified: new Date(),
    },
  });

  console.log(`Compte administrateur prêt : ${user.email} (isAdmin: ${user.isAdmin})`);
}

main().finally(() => db.$disconnect());
