// Usage: npx tsx scripts/backup-db.ts
// Sauvegarde horodatée de la base SQLite locale (dev.db) vers backups/.
// Garde les 30 dernières sauvegardes, supprime les plus anciennes.
//
// IMPORTANT : ce script est adapté à la base SQLite locale de développement.
// En production, ne pas s'appuyer sur ce script — utiliser une base gérée
// (ex. Postgres) avec sauvegardes automatiques et point-in-time recovery
// fournies par l'hébergeur.
import fs from "fs";
import path from "path";

const DB_PATH = path.resolve(process.cwd(), "dev.db");
const BACKUP_DIR = path.resolve(process.cwd(), "backups");
const MAX_BACKUPS = 30;

function main() {
  if (!fs.existsSync(DB_PATH)) {
    console.error(`Base introuvable : ${DB_PATH}`);
    process.exit(1);
  }

  fs.mkdirSync(BACKUP_DIR, { recursive: true });

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(BACKUP_DIR, `dev-${timestamp}.db`);
  fs.copyFileSync(DB_PATH, backupPath);
  console.log(`Sauvegarde créée : ${backupPath}`);

  const backups = fs
    .readdirSync(BACKUP_DIR)
    .filter((file) => file.startsWith("dev-") && file.endsWith(".db"))
    .sort();

  const excess = backups.length - MAX_BACKUPS;
  if (excess > 0) {
    for (const file of backups.slice(0, excess)) {
      fs.unlinkSync(path.join(BACKUP_DIR, file));
      console.log(`Ancienne sauvegarde supprimée : ${file}`);
    }
  }
}

main();
