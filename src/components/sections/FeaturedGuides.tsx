import Link from "next/link";
import { guides } from "@/data/guides";
import GuideCard from "@/components/guides/GuideCard";

export default function FeaturedGuides() {
  const bestsellers = guides.filter((guide) => guide.bestseller);
  const displayedGuides = bestsellers.length > 0 ? bestsellers : guides;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
            {bestsellers.length > 0 ? "Meilleures ventes" : "Les derniers guides"}
          </span>
          <h2 className="mt-6 text-3xl font-black text-navy-900 md:text-4xl">
            Nos guides
          </h2>
        </div>

        <Link
          href="/guides"
          className="text-sm font-semibold text-gold-700 hover:text-gold-800"
        >
          Voir tous les guides →
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedGuides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </section>
  );
}
