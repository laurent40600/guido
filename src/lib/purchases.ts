import { db } from "@/lib/db";
import { getGuide } from "@/data/guides";
import { getNextOrderNumber } from "@/lib/orders";

export class GuideNotFoundError extends Error {}
export class OfferNotFoundError extends Error {}

type GrantExtra = {
  withdrawalWaivedAt?: Date;
  stripeCheckoutSessionId?: string;
};

/**
 * Crédite un utilisateur pour un guide/offre, en gérant les bundles :
 * pour un guide bundle (`bundleOf`), crédite directement les guides réels
 * qui le composent au lieu du bundle lui-même (voir Guide.bundleOf).
 * Idempotent : ne duplique jamais un achat déjà existant.
 */
export async function grantPurchase(
  userId: string,
  guideSlug: string,
  offerId: string,
  extra: GrantExtra = {},
) {
  const guide = getGuide(guideSlug);
  if (!guide) {
    throw new GuideNotFoundError(`Guide introuvable : ${guideSlug}`);
  }
  if (guide.offers && guide.offers.length > 0 && !guide.offers.some((offer) => offer.id === offerId)) {
    throw new OfferNotFoundError(`Offre introuvable pour le guide ${guideSlug} : ${offerId}`);
  }

  const targets = guide.bundleOf && guide.bundleOf.length > 0 ? guide.bundleOf : [{ guideSlug, offerId }];

  const purchases = [];
  for (const item of targets) {
    const existing = await db.purchase.findUnique({
      where: {
        userId_guideSlug_offerId: { userId, guideSlug: item.guideSlug, offerId: item.offerId },
      },
    });
    const purchase = existing ?? await db.purchase.create({
      data: {
        userId,
        guideSlug: item.guideSlug,
        offerId: item.offerId,
        orderNumber: await getNextOrderNumber(),
        ...extra,
      },
    });
    purchases.push(purchase);
  }

  return { purchases, bundle: purchases.length > 1 || (guide.bundleOf?.length ?? 0) > 0 };
}
