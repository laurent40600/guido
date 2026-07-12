export async function sendVerificationEmail(email: string, verifyUrl: string) {
  // MODE TEST : aucun email n'est réellement envoyé pour l'instant.
  // Une fois un service d'envoi choisi (ex. Resend), remplacer ce bloc par un vrai appel API.
  console.log("\n=== EMAIL DE VÉRIFICATION (mode test, non envoyé) ===");
  console.log(`À : ${email}`);
  console.log(`Lien de vérification : ${verifyUrl}`);
  console.log("=======================================================\n");
}

export async function sendPasswordResetEmail(email: string, resetUrl: string) {
  // MODE TEST : aucun email n'est réellement envoyé pour l'instant.
  console.log("\n=== EMAIL DE RÉINITIALISATION DE MOT DE PASSE (mode test, non envoyé) ===");
  console.log(`À : ${email}`);
  console.log(`Lien de réinitialisation : ${resetUrl}`);
  console.log("===========================================================================\n");
}

export async function sendEmailChangeVerification(newEmail: string, verifyUrl: string) {
  // MODE TEST : aucun email n'est réellement envoyé pour l'instant.
  console.log("\n=== EMAIL DE CONFIRMATION DE CHANGEMENT D'ADRESSE (mode test, non envoyé) ===");
  console.log(`À : ${newEmail}`);
  console.log(`Lien de confirmation : ${verifyUrl}`);
  console.log("===============================================================================\n");
}
