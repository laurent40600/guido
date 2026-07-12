import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "À propos — Guido",
  description:
    "Pourquoi Guido publie des guides ultra-spécifiques plutôt que du contenu généraliste.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center">
            <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
              Pourquoi Guido
            </span>
            <h1 className="mt-6 text-4xl font-black text-navy-900 md:text-5xl">
              Le contenu généraliste a déjà été écrit mille fois
            </h1>
          </div>

          <div className="mt-16 space-y-10 text-lg leading-relaxed text-stone-700">
            <p>
              Tapez « comment devenir riche » ou « bien manger » dans un
              moteur de recherche, et vous obtenez des millions de résultats,
              écrits par des milliers de sites qui se copient les uns les
              autres. Ce contenu est saturé, générique, et rarement utile au
              moment précis où vous en avez besoin.
            </p>

            <p>
              Guido fait l&apos;inverse. Chaque guide traite une seule
              question très précise — assez précise pour que peu de monde
              ait pris le temps de bien y répondre, mais assez fréquente pour
              qu&apos;un vrai public la cherche activement.
              &laquo;&nbsp;Comment préparer son chat à un déménagement&nbsp;&raquo;
              plutôt que &laquo;&nbsp;bien s&apos;occuper de son chat&nbsp;&raquo;.
              &laquo;&nbsp;Le guide fiscal auto-entrepreneur 2026&nbsp;&raquo;
              plutôt que &laquo;&nbsp;comment créer son entreprise&nbsp;&raquo;.
            </p>

            <p>
              Le résultat : des guides courts, denses, et directement
              actionnables. Pas de remplissage pour justifier un nombre de
              pages, pas de conseils vagues qui pourraient s&apos;appliquer à
              n&apos;importe qui. Juste la réponse à votre question, avec un
              plan que vous pouvez suivre dès aujourd&apos;hui.
            </p>

            <p>
              Guido est encore jeune : les premiers guides sont en cours de
              finalisation. De nouveaux sujets ultra-ciblés seront publiés
              régulièrement — n&apos;hésitez pas à nous écrire si vous avez
              une question très précise à laquelle personne n&apos;a encore
              vraiment répondu.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
