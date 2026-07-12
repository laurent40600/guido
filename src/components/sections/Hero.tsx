import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
        Pas un blog de plus sur « comment devenir riche »
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight text-navy-900 md:text-6xl">
        Des guides{" "}
        <span className="text-gold-600">ultra-précis</span>, pour des
        questions ultra-précises.
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-600">
        Pas de conseils vagues noyés dans du contenu générique. Chaque guide
        Guido répond à une seule question très concrète, en profondeur, avec
        un plan d&apos;action que vous pouvez suivre dès aujourd&apos;hui.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/guides"
          className="group flex items-center gap-3 rounded-2xl bg-navy-900 px-8 py-4 font-semibold text-white transition hover:bg-gold-700"
        >
          Découvrir les guides
          <ArrowRight size={20} className="transition group-hover:translate-x-1" />
        </Link>

        <Link
          href="/a-propos"
          className="flex items-center gap-3 rounded-2xl border border-stone-300 bg-white px-8 py-4 font-semibold text-stone-700 transition hover:border-gold-600 hover:text-gold-700"
        >
          Pourquoi Guido ?
        </Link>
      </div>
    </section>
  );
}
