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
