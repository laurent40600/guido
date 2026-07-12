import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation et de Vente — Guido",
  description:
    "Conditions générales d'utilisation et de vente du site Guido : propriété intellectuelle, achat des guides, droit de rétractation.",
};

export default function CguPage() {
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
              Conditions Générales d&apos;Utilisation et de Vente
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-stone-600">
              Dernière mise à jour : 12 juillet 2026
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-gold-600/30 bg-gold-50 p-6 text-base leading-relaxed text-navy-900">
            <strong>Modèle à personnaliser :</strong> les champs entre
            crochets (identité de l&apos;éditeur, SIRET, adresse, hébergeur…)
            doivent être complétés avec vos informations réelles avant
            publication. Il est recommandé de faire valider ce document par
            un professionnel du droit avant sa mise en ligne définitive.
          </div>

          <div className="mt-12 space-y-12 text-base leading-relaxed text-stone-700">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                1. Éditeur du site
              </h2>
              <p className="mt-4">
                Le site Guido (ci-après « le Site ») est édité par
                [Nom / raison sociale de l&apos;éditeur], [statut juridique,
                ex. entreprise individuelle], immatriculé sous le numéro SIRET
                [numéro SIRET], dont le siège est situé [adresse complète].
              </p>
              <p className="mt-4">
                Responsable de la publication : [Nom du responsable].
                Contact :{" "}
                <a
                  href="mailto:contact@guido.fr"
                  className="font-semibold text-gold-700 hover:text-gold-800"
                >
                  contact@guido.fr
                </a>
                .
              </p>
              <p className="mt-4">
                Hébergeur du Site : [Nom de l&apos;hébergeur], [adresse de
                l&apos;hébergeur], [contact de l&apos;hébergeur].
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                2. Objet et champ d&apos;application
              </h2>
              <p className="mt-4">
                Les présentes Conditions Générales d&apos;Utilisation et de
                Vente (« CGU/CGV ») régissent l&apos;accès au Site, sa
                consultation, ainsi que l&apos;achat et l&apos;utilisation des
                guides numériques (« les Guides ») vendus sur le Site. Toute
                utilisation du Site ou tout achat d&apos;un Guide implique
                l&apos;acceptation pleine et entière des présentes CGU/CGV,
                sans réserve.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                3. Propriété intellectuelle
              </h2>
              <p className="mt-4">
                L&apos;ensemble des contenus présents sur le Site et dans les
                Guides — textes, structure, mise en forme, visuels, logo,
                nom « Guido » et éléments graphiques — sont protégés par le
                droit d&apos;auteur et, plus largement, par le Code de la
                propriété intellectuelle. Ils sont la propriété exclusive de
                l&apos;éditeur du Site, sauf mention contraire.
              </p>
              <p className="mt-4 font-semibold text-navy-900">
                Toute reproduction, représentation, diffusion, revente,
                modification ou mise à disposition de tout ou partie d&apos;un
                Guide ou du Site, par quelque procédé que ce soit et sur
                quelque support que ce soit, sans l&apos;autorisation écrite
                préalable de l&apos;éditeur, est strictement interdite.
              </p>
              <p className="mt-4">
                Une telle utilisation constitue un acte de contrefaçon au sens
                des articles L.335-2 et suivants du Code de la propriété
                intellectuelle, et est passible de poursuites judiciaires,
                civiles et pénales, pouvant entraîner des sanctions telles que
                des dommages et intérêts, ainsi que des peines d&apos;amende
                et d&apos;emprisonnement prévues par la loi. L&apos;éditeur se
                réserve le droit d&apos;engager toute action nécessaire, y
                compris judiciaire, à l&apos;encontre de toute personne
                physique ou morale ne respectant pas ces dispositions.
              </p>
              <p className="mt-4">
                Chaque Guide acheté est concédé à titre personnel, pour un
                usage strictement privé de l&apos;acheteur. Le partage,
                le prêt, la revente ou la mise à disposition à des tiers,
                gratuite ou payante, n&apos;est pas autorisé.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                4. Produits, commandes et paiement
              </h2>
              <p className="mt-4">
                Les Guides sont des contenus numériques au format PDF,
                téléchargeables après validation du paiement. Les prix sont
                indiqués en euros, toutes taxes comprises. L&apos;éditeur se
                réserve le droit de modifier ses prix à tout moment, les
                Guides étant facturés sur la base des tarifs en vigueur au
                moment de la validation de la commande.
              </p>
              <p className="mt-4">
                Le paiement est exigible immédiatement à la commande. La
                commande n&apos;est considérée comme définitive qu&apos;après
                confirmation du paiement par le prestataire de paiement
                utilisé par le Site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                5. Droit de rétractation
              </h2>
              <p className="mt-4">
                Conformément à l&apos;article L.221-28 du Code de la
                consommation, le droit de rétractation ne peut pas être
                exercé pour les contenus numériques non fournis sur un
                support matériel dont l&apos;exécution a commencé après
                accord préalable exprès du consommateur et renoncement
                exprès à son droit de rétractation.
              </p>
              <p className="mt-4">
                En conséquence, en validant sa commande, l&apos;acheteur
                reconnaît expressément demander l&apos;accès immédiat au
                Guide dès confirmation du paiement et renonce à son droit de
                rétractation de 14 jours applicable aux achats à distance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                6. Responsabilité
              </h2>
              <p className="mt-4">
                Les Guides ont une vocation informative et pratique. Ils ne
                sauraient se substituer à l&apos;avis d&apos;un professionnel
                qualifié (comptable, avocat, vétérinaire, etc.) pour les
                situations qui l&apos;exigent. L&apos;éditeur ne saurait être
                tenu responsable des conséquences directes ou indirectes
                résultant de l&apos;application des conseils contenus dans
                les Guides.
              </p>
              <p className="mt-4">
                L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude
                et la mise à jour des informations diffusées, sans garantie
                d&apos;exhaustivité. L&apos;éditeur ne peut être tenu
                responsable des interruptions temporaires d&apos;accès au
                Site, quelle qu&apos;en soit la cause.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                7. Données personnelles
              </h2>
              <p className="mt-4">
                Les données collectées lors d&apos;une commande (identité,
                e-mail, informations de paiement) sont traitées uniquement
                aux fins de gestion de la commande et de la relation client,
                conformément au Règlement Général sur la Protection des
                Données (RGPD). Elles ne sont ni cédées ni revendues à des
                tiers. Vous disposez d&apos;un droit d&apos;accès, de
                rectification et de suppression de vos données en écrivant à{" "}
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
                8. Modification des présentes conditions
              </h2>
              <p className="mt-4">
                L&apos;éditeur se réserve le droit de modifier les présentes
                CGU/CGV à tout moment. La version applicable est celle en
                vigueur sur le Site à la date de la commande ou de la
                consultation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                9. Droit applicable et litiges
              </h2>
              <p className="mt-4">
                Les présentes CGU/CGV sont soumises au droit français. En cas
                de litige, une solution amiable sera recherchée en priorité
                avant toute action judiciaire. À défaut d&apos;accord, les
                tribunaux français compétents seront seuls saisis du litige.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
