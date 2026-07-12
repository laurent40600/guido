import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — Guido",
  description:
    "Conditions générales d'utilisation du site Guido : propriété intellectuelle, compte utilisateur, usage autorisé.",
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
              Conditions Générales d&apos;Utilisation
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

          <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6">
            <p className="font-semibold text-navy-900">Les autres documents légaux du Site :</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              <li><Link href="/mentions-legales" className="font-semibold text-gold-700 hover:text-gold-800">→ Mentions légales</Link></li>
              <li><Link href="/cgv" className="font-semibold text-gold-700 hover:text-gold-800">→ Conditions Générales de Vente</Link></li>
              <li><Link href="/politique-de-confidentialite" className="font-semibold text-gold-700 hover:text-gold-800">→ Politique de confidentialité</Link></li>
              <li><Link href="/politique-de-remboursement" className="font-semibold text-gold-700 hover:text-gold-800">→ Politique de remboursement</Link></li>
            </ul>
          </div>

          <div className="mt-12 space-y-12 text-base leading-relaxed text-stone-700">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                1. Objet
              </h2>
              <p className="mt-4">
                Les présentes Conditions Générales d&apos;Utilisation («
                CGU ») régissent l&apos;accès et l&apos;utilisation du site
                Guido (« le Site ») et de son contenu. L&apos;achat des
                guides numériques (« les Guides ») est en outre régi par
                les{" "}
                <Link href="/cgv" className="font-semibold text-gold-700 hover:text-gold-800">
                  Conditions Générales de Vente
                </Link>
                . Toute utilisation du Site implique l&apos;acceptation
                pleine et entière des présentes CGU.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                2. Propriété intellectuelle
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
                3. Compte utilisateur
              </h2>
              <p className="mt-4">
                La création d&apos;un compte est nécessaire pour acheter et
                accéder aux Guides. Vous vous engagez à fournir des
                informations exactes lors de votre inscription et à les
                maintenir à jour depuis votre espace{" "}
                <Link href="/compte/parametres" className="font-semibold text-gold-700 hover:text-gold-800">
                  Paramètres du compte
                </Link>
                . Vous êtes seul responsable de la confidentialité de votre
                mot de passe et de toute activité effectuée depuis votre
                compte. Un compte est strictement personnel et ne peut être
                partagé.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                4. Usage autorisé du site
              </h2>
              <p className="mt-4">
                Vous vous engagez à ne pas utiliser le Site d&apos;une
                manière susceptible d&apos;en perturber le fonctionnement,
                à ne pas tenter de contourner les mesures de protection des
                contenus, et à ne pas utiliser le Site à des fins illicites
                ou frauduleuses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                5. Responsabilité
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
                6. Modification des présentes conditions
              </h2>
              <p className="mt-4">
                L&apos;éditeur se réserve le droit de modifier les présentes
                CGU à tout moment. La version applicable est celle en
                vigueur sur le Site à la date de consultation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                7. Droit applicable et litiges
              </h2>
              <p className="mt-4">
                Les présentes CGU sont soumises au droit français. En cas
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
