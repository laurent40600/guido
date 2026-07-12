"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Guide } from "@/data/guides";
import { searchGuides } from "@/lib/search";
import GuideCard from "@/components/guides/GuideCard";

export default function GuidesExplorer({
  guides,
  initialQuery = "",
}: {
  guides: Guide[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set([...guides.map((guide) => guide.category), "Prompts"])),
    [guides],
  );

  const guidesInCategory = useMemo(
    () => (category ? guides.filter((guide) => guide.category === category) : guides),
    [guides, category],
  );

  const results = useMemo(
    () => searchGuides(guidesInCategory, query),
    [guidesInCategory, query],
  );

  return (
    <div>
      <div className="relative mx-auto max-w-xl">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Un chat qui déménage, un statut d'auto-entrepreneur…"
          aria-label="Filtrer les guides affichés"
          className="w-full rounded-2xl border border-stone-200 bg-white py-3.5 pr-4 pl-11 text-base text-navy-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-gold-600"
        />
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setCategory(null)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            category === null
              ? "bg-navy-900 text-white"
              : "bg-white text-stone-600 hover:text-gold-700"
          }`}
        >
          Tous
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              category === cat
                ? "bg-navy-900 text-white"
                : "bg-white text-stone-600 hover:text-gold-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {results.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-stone-500">
          {query.trim()
            ? <>Aucun guide ne correspond à « {query} » pour l&apos;instant.</>
            : "Aucun guide dans cette catégorie pour l'instant."}
        </p>
      )}
    </div>
  );
}
