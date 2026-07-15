import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuideCard from "@/components/guides/GuideCard";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Prompts ChatGPT prêts à l'emploi, classés par métier — Guido",
  description:
    "Des packs de prompts ChatGPT prêts à l'emploi, classés par usage (profs, images IA...), à copier-coller directement dans tes outils IA préférés du moment.",
  alternates: { canonical: "/prompts" },
};

export default async function PromptsPage() {
  const prompts = guides.filter(
    (guide) =>
      guide.category === "Prompts" || guide.crossListCategories?.includes("Prompts"),
  );

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <span className="rounded-full border border-violet-600/30 bg-violet-600/10 px-4 py-2 text-sm font-semibold text-violet-700">
              Prompts
            </span>
            <h1 className="mt-6 text-4xl font-black text-navy-900 md:text-5xl">
              Des prompts prêts à l&apos;emploi
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Des packs de prompts classés par usage, à copier-coller directement
              dans tes outils IA préférés pour avancer plus vite sur un sujet précis.
            </p>
          </div>

          {prompts.length > 0 ? (
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {prompts.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-16 max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center">
              <p className="font-semibold text-navy-900">
                Les premiers packs de prompts arrivent bientôt
              </p>
              <p className="mt-2 text-sm text-stone-500">
                En attendant, chaque guide Guido inclut déjà son propre pack de
                prompts en bonus.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
