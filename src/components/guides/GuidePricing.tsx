import Link from "next/link";
import { Check } from "lucide-react";
import type { Guide } from "@/data/guides";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { resolveOfferPrice } from "@/lib/pricing";

function OfferAction({
  guide,
  offerId,
  isLoggedIn,
  purchased,
  inCart,
  className,
}: {
  guide: Guide;
  offerId: string;
  isLoggedIn: boolean;
  purchased: boolean;
  inCart: boolean;
  className: string;
}) {
  if (!guide.available) {
    return (
      <button disabled className={`${className} cursor-not-allowed bg-stone-200 text-stone-500`}>
        Bientôt disponible
      </button>
    );
  }

  if (purchased) {
    return (
      <Link href="/compte" className={`${className} border border-navy-900/20 bg-navy-900/5 text-center text-navy-900`}>
        Acheté — voir mon compte
      </Link>
    );
  }

  if (!isLoggedIn) {
    return (
      <Link href="/connexion" className={`${className} bg-navy-900 text-center text-white hover:bg-navy-900/90`}>
        Se connecter pour acheter
      </Link>
    );
  }

  if (inCart) {
    return (
      <Link href="/panier" className={`${className} border border-stone-200 bg-stone-100 text-center text-navy-900`}>
        Déjà dans le panier
      </Link>
    );
  }

  return (
    <AddToCartButton
      guideSlug={guide.slug}
      offerId={offerId}
      className={`${className} bg-gold-600 text-white hover:bg-gold-700`}
    />
  );
}

export default function GuidePricing({
  guide,
  isLoggedIn,
  purchasedOfferIds,
  cartOfferIds,
}: {
  guide: Guide;
  isLoggedIn: boolean;
  purchasedOfferIds: string[];
  cartOfferIds: string[];
}) {
  if (!guide.offers || guide.offers.length === 0) {
    return (
      <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-stone-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-stone-500">Pour qui</p>
          <p className="mt-1 font-semibold text-navy-900">{guide.audience}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-black text-navy-900">{guide.price}</span>
          <OfferAction
            guide={guide}
            offerId="default"
            isLoggedIn={isLoggedIn}
            purchased={purchasedOfferIds.includes("default")}
            inCart={cartOfferIds.includes("default")}
            className="rounded-xl px-6 py-3 font-semibold transition"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <p className="text-sm text-stone-500">
        Pour qui : <span className="font-semibold text-navy-900">{guide.audience}</span>
      </p>

      <div
        className={
          guide.offers.length === 1
            ? "mt-4 max-w-md"
            : "mt-4 grid gap-5 sm:grid-cols-2"
        }
      >
        {guide.offers.map((offer) => {
          const { displayPrice, strikePrice, promoActive } = resolveOfferPrice(offer);

          return (
            <div
              key={offer.id}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                offer.featured
                  ? "border-gold-600 bg-white shadow-lg shadow-gold-900/10"
                  : "border-stone-200 bg-white"
              }`}
            >
              {offer.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-gold-600 px-3 py-1 text-xs font-bold text-white">
                  Le plus choisi
                </span>
              )}

              <h3 className="text-lg font-bold text-navy-900">{offer.label}</h3>
              <p className="mt-1 text-sm text-stone-600">{offer.description}</p>

              <div className="mt-4 flex items-baseline gap-2">
                {strikePrice && (
                  <span className="text-lg font-semibold text-stone-400 line-through">
                    {strikePrice}
                  </span>
                )}
                <span className="text-3xl font-black text-navy-900">{displayPrice}</span>
              </div>
              {promoActive && (
                <span className="mt-1 text-xs font-semibold text-gold-700">
                  Offre de lancement, durée limitée
                </span>
              )}

              <ul className="mt-5 space-y-2 text-sm text-stone-600">
                {offer.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 shrink-0 text-gold-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <OfferAction
                guide={guide}
                offerId={offer.id}
                isLoggedIn={isLoggedIn}
                purchased={purchasedOfferIds.includes(offer.id)}
                inCart={cartOfferIds.includes(offer.id)}
                className="mt-6 rounded-xl px-6 py-3 font-semibold transition"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
