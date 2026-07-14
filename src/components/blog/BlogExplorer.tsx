"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

export default function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [series, setSeries] = useState<string | null>(null);

  const allSeries = useMemo(
    () => Array.from(new Set(posts.map((post) => post.series))),
    [posts],
  );

  const filtered = useMemo(
    () => (series ? posts.filter((post) => post.series === series) : posts),
    [posts, series],
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setSeries(null)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            series === null
              ? "bg-navy-900 text-white"
              : "bg-white text-stone-600 hover:text-gold-700"
          }`}
        >
          Tous
        </button>
        {allSeries.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSeries(s)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              series === s
                ? "bg-navy-900 text-white"
                : "bg-white text-stone-600 hover:text-gold-700"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold-600 hover:shadow-xl hover:shadow-gold-900/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-900">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-navy-900/85 px-3 py-1 text-[11px] font-semibold text-gold-400 backdrop-blur">
                  {post.series}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-bold leading-snug text-navy-900">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {post.excerpt}
                </p>
                <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-gold-700">
                  Lire l&apos;article
                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-stone-500">
          Aucun article dans cette série pour l&apos;instant.
        </p>
      )}
    </div>
  );
}
