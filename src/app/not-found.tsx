import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuideCard from "@/components/guides/GuideCard";
import { guides } from "@/data/guides";

export default function NotFound() {
  const popularGuides = guides.filter((guide) => guide.bestseller).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
            Erreur 404
          </span>
          <h1 className="mt-6 text-4xl font-black text-navy-900 md:text-5xl">
            Cette page n&apos;existe pas (ou plus)
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-600">
            Le lien est peut-être obsolète, ou l&apos;adresse contient une
            erreur. Retourne à l&apos;accueil, ou jette un œil à nos guides
            les plus consultés ci-dessous.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-900/90"
          >
            Retour à l&apos;accueil
            <ArrowRight size={16} />
          </Link>
        </section>

        {popularGuides.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 pb-24">
            <h2 className="text-center text-2xl font-bold text-navy-900">
              Nos guides les plus consultés
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
