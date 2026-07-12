import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Guide } from "@/data/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white transition-all duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-105 hover:border-gold-600 hover:shadow-xl hover:shadow-gold-900/10"
    >
      {guide.cover && (
        <div className="relative h-24 w-full overflow-hidden bg-navy-900">
          <Image
            src={guide.cover}
            alt={guide.title}
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-2.5 pb-1.5 pt-5">
            <p className="line-clamp-2 text-[11px] font-bold leading-tight text-white">
              {guide.title}
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-gold-600/10 px-2 py-0.5 text-[11px] font-semibold text-gold-700">
            {guide.format}
          </span>
          {!guide.available && (
            <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[11px] font-semibold text-stone-500">
              Bientôt disponible
            </span>
          )}
        </div>

        <h3 className="mt-2 text-sm font-bold leading-snug text-navy-900">
          {guide.title}
        </h3>

        <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-1.5 text-xs font-medium text-gold-700">{guide.tagline}</p>
            <p className="mt-2 text-xs leading-relaxed text-stone-600">{guide.pitch}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-stone-100 pt-3">
          <span className="text-base font-black text-navy-900">{guide.price}</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-gold-700">
            Voir le guide
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
