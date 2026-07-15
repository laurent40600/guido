import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Guido",
  description:
    "Conditions générales de vente du site Guido : produits, prix, commande, paiement, livraison numérique.",
  alternates: { canonical: "/cgv" },
};

export default function CgvPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center">
            <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
              Avant d&apos;acheter
            </span>
            <h1 className="mt-6 text-4xl font-black text-navy-900 md:text-5xl">
              Conditions Générales de Vente
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-stone-600">
              Dernière mise à jour : 12 juillet 2026
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-gold-600/30 bg-gold-50 p-6 text-base leading-relaxed text-navy-900">
            <strong>Modèle à personnaliser :</strong> les champs entre
            crochets doivent être complétés avec les informations réelles
            de l&apos;éditeur avant publication. Il est recommandé de faire
            valider ce document par un professionnel du droit.
          </div>

          <div className="mt-12 space-y-12 text-base leading-relaxed text-stone-700">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                1. Objet
              </h2>
              <p className="mt-4">
                Les présentes Conditions Générales de Vente (« CGV »)
                s&apos;appliquent à toute commande de guide numérique («
                Guide ») passée sur le site Guido (« le Site »), édité par
                [Nom / raison sociale de l&apos;éditeur] (voir les{" "}
                <Link href="/mentions-legales" className="font-semibold text-gold-700 hover:text-gold-800">
                  mentions légales
                </Link>
                ). Toute commande implique l&apos;acceptation pleine et
                entière des présentes CGV.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                2. Produits
              </h2>
              <p className="mt-4">
                Les Guides sont des contenus numériques au format PDF,
                vendus par téléchargement, sans support physique. Chaque
                fiche produit précise le contenu du Guide, son format
                (nombre de pages indicatif) et, le cas échéant, les
                différentes offres disponibles (ex. guide seul, guide avec
                contenu bonus).
              </p>
              <p className="mt-4">
                Les droits d&apos;auteur sur l&apos;ensemble des Guides
                vendus appartiennent à l&apos;éditeur ; leur achat n&apos;emporte
                aucune cession de ces droits (voir les{" "}
                <Link href="/cgu" className="font-semibold text-gold-700 hover:text-gold-800">
                  Conditions Générales d&apos;Utilisation
                </Link>
                ).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                3. Prix
              </h2>
              <p className="mt-4">
                Les prix des Guides sont indiqués en euros, toutes taxes
                comprises. L&apos;éditeur se réserve le droit de modifier
                ses prix à tout moment ; le Guide est facturé sur la base du
                tarif affiché au moment de la validation de la commande.
                Les éventuelles offres de lancement ou promotions sont
                valables pour la durée indiquée sur la fiche du Guide
                concerné.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                4. Commande et création de compte
              </h2>
              <p className="mt-4">
                L&apos;achat d&apos;un Guide nécessite la création d&apos;un
                compte sur le Site. Vous êtes responsable de
                l&apos;exactitude des informations fournies lors de
                l&apos;inscription et de la confidentialité de vos
                identifiants de connexion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                5. Paiement
              </h2>
              <p className="mt-4">
                Le paiement est exigible immédiatement à la commande. La
                commande n&apos;est considérée comme définitive
                qu&apos;après confirmation du paiement par le prestataire de
                paiement utilisé par le Site.
              </p>
              <p className="mt-4">
                Le paiement en ligne est traité par notre prestataire de
                paiement Stripe. Le Site ne stocke à aucun moment vos
                coordonnées bancaires complètes, qui sont saisies directement
                sur une page sécurisée gérée par Stripe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                6. Livraison
              </h2>
              <p className="mt-4">
                Les Guides étant des contenus numériques, la « livraison »
                consiste en la mise à disposition immédiate du fichier PDF
                au téléchargement depuis votre espace{" "}
                <Link href="/compte" className="font-semibold text-gold-700 hover:text-gold-800">
                  Mon compte
                </Link>
                , dès que votre achat est confirmé. Aucun envoi postal
                n&apos;est effectué.
              </p>
            </div>

            <div id="telechargement">
              <h2 className="text-2xl font-bold text-navy-900">
                7. Limite de téléchargements et personnalisation du fichier
              </h2>
              <p className="mt-4">
                Chaque commande donne droit à{" "}
                <strong>2 téléchargements maximum</strong> du Guide, sans
                limite de durée. Le nombre de téléchargements restants est
                consultable à tout moment depuis votre espace{" "}
                <Link href="/compte" className="font-semibold text-gold-700 hover:text-gold-800">
                  Mon compte
                </Link>
                . Une fois les 2 téléchargements utilisés, l&apos;accès au
                fichier est bloqué ; contactez le support en cas de
                changement d&apos;appareil ou de problème technique
                justifiant un déblocage exceptionnel.
              </p>
              <p className="mt-4">
                Chaque exemplaire téléchargé est généré individuellement et
                comporte un filigrane discret identifiant l&apos;acheteur
                (nom, email, numéro de commande, numéro de téléchargement et
                identifiant unique). Ce filigrane permet d&apos;identifier
                l&apos;origine d&apos;un Guide en cas de diffusion non
                autorisée, conformément à l&apos;interdiction de
                redistribution rappelée dans les{" "}
                <Link href="/cgu" className="font-semibold text-gold-700 hover:text-gold-800">
                  Conditions Générales d&apos;Utilisation
                </Link>
                .
              </p>
            </div>

            <div id="retractation">
              <h2 className="text-2xl font-bold text-navy-900">
                8. Absence de droit de rétractation
              </h2>
              <p className="mt-4">
                Conformément à l&apos;article L.221-28, 13° du Code de la
                consommation, le droit de rétractation de 14 jours ne
                s&apos;applique pas à la fourniture d&apos;un contenu
                numérique non fourni sur un support matériel dont
                l&apos;exécution a commencé après accord préalable exprès
                du consommateur, qui a renoncé expressément à son droit de
                rétractation.
              </p>
              <p className="mt-4">
                En validant sa commande, l&apos;acheteur reconnaît
                expressément demander l&apos;accès immédiat au Guide dès
                confirmation du paiement, et renonce en conséquence à son
                droit de rétractation.
              </p>
              <p className="mt-4">
                Des remboursements restent toutefois possibles dans des cas
                précis et limités, décrits dans notre{" "}
                <Link
                  href="/politique-de-remboursement"
                  className="font-semibold text-gold-700 hover:text-gold-800"
                >
                  Politique de remboursement
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                9. Responsabilité
              </h2>
              <p className="mt-4">
                Les Guides ont une vocation informative et pratique. Ils ne
                sauraient se substituer à l&apos;avis d&apos;un
                professionnel qualifié pour les situations qui
                l&apos;exigent. L&apos;éditeur ne saurait être tenu
                responsable des conséquences directes ou indirectes
                résultant de l&apos;application des conseils contenus dans
                un Guide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                10. Droit applicable et litiges
              </h2>
              <p className="mt-4">
                Les présentes CGV sont soumises au droit français. En cas
                de litige, une solution amiable sera recherchée en
                priorité, y compris via le dispositif de médiation de la
                consommation décrit dans les{" "}
                <Link href="/mentions-legales" className="font-semibold text-gold-700 hover:text-gold-800">
                  mentions légales
                </Link>
                . À défaut d&apos;accord, les tribunaux français compétents
                seront seuls saisis du litige.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
