import type { Guide } from "@/data/guides";
import { resolveOfferPrice, priceToCents } from "@/lib/pricing";
import { absoluteUrl } from "@/lib/site";

function euros(displayPrice: string): string {
  return (priceToCents(displayPrice) / 100).toFixed(2);
}

export function buildProductJsonLd(guide: Guide) {
  const availability = guide.available
    ? "https://schema.org/InStock"
    : "https://schema.org/PreOrder";
  const url = absoluteUrl(`/guides/${guide.slug}`);

  const offers =
    guide.offers && guide.offers.length > 0
      ? guide.offers.map((offer) => {
          const { displayPrice } = resolveOfferPrice(offer);
          return {
            "@type": "Offer" as const,
            name: offer.label,
            price: euros(displayPrice),
            priceCurrency: "EUR",
            availability,
            url,
          };
        })
      : [
          {
            "@type": "Offer" as const,
            price: euros(guide.price),
            priceCurrency: "EUR",
            availability,
            url,
          },
        ];

  const reviews = guide.reviews ?? [];
  const aggregateRating =
    reviews.length > 0
      ? {
          "@type": "AggregateRating" as const,
          ratingValue: (
            reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
          ).toFixed(1),
          reviewCount: reviews.length,
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: guide.title,
    description: guide.seoDescription ?? guide.pitch,
    ...(guide.cover ? { image: absoluteUrl(guide.cover) } : {}),
    url,
    ...(offers.length === 1 ? { offers: offers[0] } : { offers }),
    ...(aggregateRating ? { aggregateRating } : {}),
    ...(reviews.length > 0
      ? {
          review: reviews.map((review) => ({
            "@type": "Review",
            author: { "@type": "Person", name: review.author },
            datePublished: review.date,
            reviewBody: review.comment,
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.rating,
              bestRating: 5,
              worstRating: 1,
            },
          })),
        }
      : {}),
  };
}
