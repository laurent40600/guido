import { Star } from "lucide-react";
import type { GuideReview } from "@/data/guides";

function Stars({ rating, size }: { rating: number; size: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={
            index < Math.round(rating)
              ? "fill-gold-500 text-gold-500"
              : "text-stone-300"
          }
        />
      ))}
    </div>
  );
}

export default function GuideReviews({ reviews }: { reviews?: GuideReview[] }) {
  if (!reviews || reviews.length === 0) return null;

  const average =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-navy-900">Avis clients</h2>
      <div className="mt-3 flex items-center gap-2" aria-label={`Note moyenne ${average.toFixed(1)} sur 5`}>
        <Stars rating={average} size={18} />
        <span className="text-sm font-semibold text-navy-900">
          {average.toFixed(1)}/5
        </span>
        <span className="text-sm text-stone-500">
          ({reviews.length} avis)
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-xl border border-stone-200 bg-white p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <Stars rating={review.rating} size={14} />
              <span className="text-xs text-stone-400">
                {new Date(review.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-stone-700">
              {review.comment}
            </p>
            <p className="mt-2 text-xs font-semibold text-stone-500">
              — {review.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
