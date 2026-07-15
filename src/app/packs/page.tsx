import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuideCard from "@/components/guides/GuideCard";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Packs de guides et prompts ChatGPT à prix réduit — Guido",
  description:
    "Des packs qui regroupent plusieurs guides ou packs de prompts ChatGPT déjà en ligne sur Guido, pour aller plus vite et payer moins cher que séparément.",
  alternates: { canonical: "/packs" },
};

export default async function PacksPage() {
  const packs = guides.filter((guide) => guide.category === "Packs");

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
              Packs
            </span>
            <h1 className="mt-6 text-4xl font-black text-navy-900 md:text-5xl">
              Plusieurs guides, un seul prix réduit
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Des bundles qui regroupent plusieurs guides ou packs de prompts déjà en
              ligne, pour aller plus vite et payer moins cher que séparément.
            </p>
          </div>

          {packs.length > 0 ? (
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {packs.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-16 max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center">
              <p className="font-semibold text-navy-900">
                Les premiers packs arrivent bientôt
              </p>
              <p className="mt-2 text-sm text-stone-500">
                En attendant, retrouve tous les guides et packs de prompts sur leurs
                pages dédiées.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
