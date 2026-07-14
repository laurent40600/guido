import type { ReactNode } from "react";
import Link from "next/link";

type BundlePromoProps = {
  label?: string;
  description: ReactNode;
  displayPrice: string;
  strikePrice?: string;
  href: string;
};

export default function BundlePromo({
  label = "Pack complet disponible",
  description,
  displayPrice,
  strikePrice,
  href,
}: BundlePromoProps) {
  return (
    <div className="mt-6 rounded-2xl border border-navy-900/15 bg-navy-900 p-6 text-white">
      <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
        {label}
      </p>
      <p className="mt-2 text-base leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <span className="flex items-baseline gap-2">
          {strikePrice && (
            <span className="text-base font-semibold text-white/50 line-through">
              {strikePrice}
            </span>
          )}
          <span className="text-2xl font-black text-white">{displayPrice}</span>
        </span>
        <Link
          href={href}
          className="rounded-xl bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-700"
        >
          Voir le pack complet →
        </Link>
      </div>
    </div>
  );
}
