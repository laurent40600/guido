import type { GuideOffer } from "@/data/guides";

export function resolveOfferPrice(offer: GuideOffer) {
  const promoActive =
    !!offer.launchPromo && new Date(offer.launchPromo.expiresAt) > new Date();

  return {
    displayPrice: promoActive ? offer.launchPromo!.price : offer.price,
    strikePrice: promoActive ? offer.price : offer.originalPrice,
    promoActive,
  };
}

// Convertit un prix affiché ("14,90€", "29€") en centimes pour Stripe.
export function priceToCents(displayPrice: string): number {
  const normalized = displayPrice.replace(/[^\d,.-]/g, "").replace(",", ".");
  const euros = parseFloat(normalized);
  if (!Number.isFinite(euros)) {
    throw new Error(`Prix invalide : "${displayPrice}"`);
  }
  return Math.round(euros * 100);
}
