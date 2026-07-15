import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Guido",
  description: "Mentions légales du site Guido : éditeur, hébergeur, directeur de publication.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center">
            <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
              Mentions légales
            </span>
            <h1 className="mt-6 text-4xl font-black text-navy-900 md:text-5xl">
              Mentions légales
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-stone-600">
              Dernière mise à jour : 12 juillet 2026
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-gold-600/30 bg-gold-50 p-6 text-base leading-relaxed text-navy-900">
            <strong>Modèle à personnaliser :</strong> les champs entre
            crochets (raison sociale, SIRET, adresse, hébergeur…) doivent
            être complétés avec les informations réelles de l&apos;éditeur
            avant publication. Il est recommandé de faire valider ce
            document par un professionnel du droit avant sa mise en ligne
            définitive.
          </div>

          <div className="mt-12 space-y-12 text-base leading-relaxed text-stone-700">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                1. Éditeur du site
              </h2>
              <p className="mt-4">
                Le site Guido, accessible à l&apos;adresse [URL du site]
                (ci-après « le Site »), est édité par [Nom / raison sociale
                de l&apos;éditeur], [statut juridique, ex. entreprise
                individuelle / SASU], [le cas échéant : au capital de
                [montant] €], immatriculé sous le numéro SIREN/SIRET
                [numéro], dont le siège est situé [adresse complète].
              </p>
              <p className="mt-4">
                Numéro de TVA intracommunautaire : [numéro, si applicable].
              </p>
              <p className="mt-4">
                Directeur de la publication : [Nom du directeur de
                publication].
              </p>
              <p className="mt-4">
                Contact :{" "}
                <a
                  href="mailto:contact@guido.fr"
                  className="font-semibold text-gold-700 hover:text-gold-800"
                >
                  contact@guido.fr
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                2. Hébergement du site
              </h2>
              <p className="mt-4">
                Le Site est hébergé par [Nom de l&apos;hébergeur], [adresse
                complète de l&apos;hébergeur], [numéro de téléphone ou
                contact de l&apos;hébergeur].
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                3. Propriété intellectuelle
              </h2>
              <p className="mt-4">
                L&apos;ensemble des contenus du Site et des guides numériques
                vendus (textes, mise en forme, visuels, logo, nom «
                Guido ») sont protégés par le droit d&apos;auteur et
                réservés à l&apos;éditeur. Les règles complètes d&apos;usage
                et de reproduction sont détaillées dans les{" "}
                <Link href="/cgu" className="font-semibold text-gold-700 hover:text-gold-800">
                  Conditions Générales d&apos;Utilisation
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                4. Données personnelles
              </h2>
              <p className="mt-4">
                Le traitement des données personnelles collectées sur le
                Site est décrit dans la{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="font-semibold text-gold-700 hover:text-gold-800"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                5. Médiation de la consommation
              </h2>
              <p className="mt-4">
                Conformément aux articles L.616-1 et R.616-1 du Code de la
                consommation, l&apos;éditeur propose un dispositif de
                médiation de la consommation. En cas de litige non résolu à
                l&apos;amiable, le consommateur peut recourir gratuitement au
                service de médiation [Nom du médiateur à désigner], joignable
                à [coordonnées du médiateur].
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
