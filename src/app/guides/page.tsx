import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuidesExplorer from "@/components/search/GuidesExplorer";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Tous les guides — Guido",
  description:
    "La liste complète des guides ultra-spécifiques publiés par Guido.",
};

export default async function GuidesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
              Le catalogue
            </span>
            <h1 className="mt-6 text-4xl font-black text-navy-900 md:text-5xl">
              Tous les guides
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Chaque guide répond à une seule question, en profondeur. De
              nouveaux sujets ultra-ciblés sont ajoutés régulièrement.
            </p>
          </div>

          <div className="mt-16">
            <GuidesExplorer guides={guides} initialQuery={q ?? ""} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
