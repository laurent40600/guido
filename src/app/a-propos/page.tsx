import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos — Guido",
  description:
    "Pourquoi Guido publie des guides ultra-spécifiques plutôt que du contenu généraliste.",
  alternates: { canonical: "/a-propos" },
};

// Person Schema : les valeurs entre crochets sont des placeholders à
// remplacer par de vraies informations avant que ce balisage ait une valeur
// SEO réelle — voir le récapitulatif final pour le suivi de cette action.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Laurent",
  url: absoluteUrl("/a-propos"),
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <JsonLd data={personJsonLd} />
          <Breadcrumbs
            items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
          />

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
              Le catalogue Guido couvre aujourd&apos;hui l&apos;entrepreneuriat,
              l&apos;IA appliquée à des métiers précis, la reconversion
              professionnelle, la santé et le bien-être, ainsi que des packs
              de prompts prêts à l&apos;emploi. De nouveaux sujets
              ultra-ciblés sont ajoutés régulièrement — n&apos;hésitez pas à
              nous écrire si vous avez une question très précise à laquelle
              personne n&apos;a encore vraiment répondu.
            </p>
          </div>

          <div className="mt-20 border-t border-stone-200 pt-16">
            <h2 className="text-2xl font-bold text-navy-900">
              Qui est derrière Guido
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Je m&apos;appelle <strong>Laurent</strong>. J&apos;ai créé
                Guido après avoir constaté, encore et encore, le même
                problème en cherchant des réponses à des questions très
                précises sur le web : soit rien de sérieux n&apos;existait,
                soit l&apos;information était noyée dans des articles
                généralistes qui tournaient autour du sujet sans jamais vraiment
                y répondre. Guido est né de l&apos;envie de faire l&apos;inverse
                — traiter un sujet précis jusqu&apos;au bout, plutôt que
                d&apos;en effleurer dix à la fois.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-navy-900">
              Pourquoi ce site
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Le contenu généraliste a un problème structurel : pour
                plaire au plus grand nombre, il reste forcément vague. Un
                article « bien utiliser l&apos;IA au travail » ne peut pas
                aller aussi loin qu&apos;un guide entièrement dédié à
                l&apos;usage de l&apos;IA pour un métier précis, avec ses
                contraintes, son vocabulaire et ses cas particuliers. Guido
                fait le pari inverse : des sujets plus étroits, mais traités
                à fond, avec des exemples concrets plutôt que des
                généralités.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-navy-900">
              Mon approche du contenu
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Chaque guide part d&apos;une question réelle, la même que
                celle que se pose son lecteur avant de chercher une réponse.
                Je recherche, je teste les méthodes et les prompts proposés
                avant de les inclure, et je vérifie les informations
                sensibles (chiffres, obligations légales, données de santé)
                plutôt que de me fier à une seule source. Le contenu est
                mis à jour quand la réglementation ou les outils évoluent,
                et chaque guide indique clairement ses limites — ce
                qu&apos;il couvre, et ce pour quoi il ne remplace pas un
                professionnel (comptable, médecin, avocat) quand c&apos;est
                le cas.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
