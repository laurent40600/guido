import { db } from "@/lib/db";

const FIRST_ORDER_NUMBER = 1001;

/**
 * Numéro de commande lisible suivant, attribué séquentiellement.
 * À appeler juste avant de créer une nouvelle ligne Purchase.
 */
export async function getNextOrderNumber(): Promise<number> {
  const last = await db.purchase.findFirst({ orderBy: { orderNumber: "desc" } });
  return (last?.orderNumber ?? FIRST_ORDER_NUMBER - 1) + 1;
}
