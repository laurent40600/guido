import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Politique de remboursement — Guido",
  description:
    "Politique de remboursement des guides numériques Guido : cas éligibles et procédure de demande.",
};

export default function PolitiqueRemboursementPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center">
            <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
              En cas de problème
            </span>
            <h1 className="mt-6 text-4xl font-black text-navy-900 md:text-5xl">
              Politique de remboursement
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-stone-600">
              Dernière mise à jour : 12 juillet 2026
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-gold-600/30 bg-gold-50 p-6 text-base leading-relaxed text-navy-900">
            <strong>Modèle à personnaliser :</strong> les délais et
            l&apos;adresse de contact sont à ajuster selon l&apos;organisation
            réelle de l&apos;éditeur avant publication.
          </div>

          <div className="mt-12 space-y-12 text-base leading-relaxed text-stone-700">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                1. Principe général
              </h2>
              <p className="mt-4">
                Nos Guides sont des contenus numériques accessibles
                immédiatement après confirmation de l&apos;achat. Comme
                précisé dans nos{" "}
                <Link href="/cgv" className="font-semibold text-gold-700 hover:text-gold-800">
                  Conditions Générales de Vente
                </Link>
                , l&apos;acheteur renonce expressément à son droit de
                rétractation en demandant cet accès immédiat : un Guide
                numérique, une fois consulté ou téléchargé, ne peut pas
                être « rendu » comme un objet physique.
              </p>
              <p className="mt-4">
                <strong>
                  En conséquence, aucun remboursement n&apos;est accordé
                  au seul motif d&apos;un changement d&apos;avis.
                </strong>{" "}
                Un remboursement reste toutefois possible dans les cas
                précis décrits ci-dessous, à la condition que la demande
                soit justifiée et vérifiable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                2. Motifs valables de remboursement
              </h2>
              <p className="mt-4">
                Un remboursement peut être accordé dans les situations
                suivantes :
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <strong>Défaut technique avéré</strong> — le fichier PDF
                  livré est corrompu, illisible ou incomplet, et le
                  problème persiste après qu&apos;un nouvel envoi ou un
                  nouveau lien de téléchargement vous a été proposé ;
                </li>
                <li>
                  <strong>Erreur de livraison</strong> — vous avez reçu
                  l&apos;accès à un Guide différent de celui commandé, ou
                  votre achat confirmé (paiement validé) ne vous a donné
                  accès à aucun Guide en raison d&apos;un bug du Site ;
                </li>
                <li>
                  <strong>Achat en double</strong> — vous avez acheté par
                  erreur deux fois le même Guide ou la même offre ;
                </li>
                <li>
                  <strong>Non-conformité manifeste</strong> — le contenu
                  livré est substantiellement différent de sa description
                  publique sur la fiche du Guide (ex. thématique différente,
                  nombre de parties annoncées manquantes).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                3. Ce qui n&apos;est pas un motif de remboursement
              </h2>
              <p className="mt-4">
                Pour rester équitable envers l&apos;ensemble de nos
                acheteurs, les situations suivantes ne donnent pas droit à
                un remboursement :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Un simple changement d&apos;avis après l&apos;achat ;</li>
                <li>Le Guide ne correspondait pas à vos attentes personnelles alors qu&apos;il correspond fidèlement à sa description publique ;</li>
                <li>Vous n&apos;avez pas eu le temps de lire ou d&apos;appliquer le Guide ;</li>
                <li>Les conseils du Guide n&apos;ont pas produit le résultat espéré dans votre situation particulière ;</li>
                <li>Vous avez déjà téléchargé et consulté l&apos;intégralité du Guide sans signaler de problème technique.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                4. Comment faire une demande
              </h2>
              <p className="mt-4">
                Pour signaler un problème entrant dans l&apos;un des motifs
                valables ci-dessus, écrivez-nous à{" "}
                <a
                  href="mailto:contact@guido.fr"
                  className="font-semibold text-gold-700 hover:text-gold-800"
                >
                  contact@guido.fr
                </a>{" "}
                dans un délai de 14 jours suivant votre achat, en précisant :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Le Guide et l&apos;offre concernés ;</li>
                <li>La date d&apos;achat ;</li>
                <li>Une description précise du problème rencontré (et, si possible, une capture d&apos;écran).</li>
              </ul>
              <p className="mt-4">
                Nous examinons chaque demande individuellement et vous
                répondons sous 5 jours ouvrés. Si le remboursement est
                accordé, il est effectué par le même moyen de paiement que
                celui utilisé lors de l&apos;achat, sous un délai de 14
                jours à compter de notre accord.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                5. Vos droits restent préservés
              </h2>
              <p className="mt-4">
                Cette politique ne remet pas en cause vos droits légaux en
                tant que consommateur, notamment la garantie légale de
                conformité (articles L.217-3 et suivants du Code de la
                consommation) applicable si le contenu livré présente un
                défaut de conformité avéré par rapport à sa description.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
