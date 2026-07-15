import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Guido",
  description:
    "Politique de confidentialité du site Guido : données collectées, finalités, durée de conservation, droits RGPD.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center">
            <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
              Vos données
            </span>
            <h1 className="mt-6 text-4xl font-black text-navy-900 md:text-5xl">
              Politique de confidentialité
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-stone-600">
              Dernière mise à jour : 12 juillet 2026
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-gold-600/30 bg-gold-50 p-6 text-base leading-relaxed text-navy-900">
            <strong>Modèle à personnaliser :</strong> les champs entre
            crochets (identité de l&apos;éditeur, sous-traitants réels)
            doivent être complétés avant publication. Cette politique
            reflète les traitements de données réellement effectués par le
            Site à ce jour et doit être mise à jour dès qu&apos;un nouveau
            traitement est ajouté (paiement en ligne, emailing, mesure
            d&apos;audience…).
          </div>

          <div className="mt-12 space-y-12 text-base leading-relaxed text-stone-700">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                1. Responsable du traitement
              </h2>
              <p className="mt-4">
                Le responsable du traitement des données personnelles
                collectées sur le site Guido est [Nom / raison sociale de
                l&apos;éditeur], dont les coordonnées complètes figurent
                dans les{" "}
                <Link href="/mentions-legales" className="font-semibold text-gold-700 hover:text-gold-800">
                  mentions légales
                </Link>
                . Pour toute question relative à vos données, vous pouvez
                nous écrire à{" "}
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
                2. Données que nous collectons
              </h2>
              <p className="mt-4">
                Nous collectons uniquement les données que vous nous
                transmettez directement, lors de la création de votre
                compte ou de son utilisation :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Identité : prénom, nom ;</li>
                <li>Coordonnées : adresse email, numéro de téléphone, adresse postale ;</li>
                <li>Identifiants de connexion : mot de passe (stocké de façon irréversible par hachage, jamais en clair) ;</li>
                <li>Historique des guides achetés et de vos articles en attente dans le panier ;</li>
                <li>Un cookie technique de session, nécessaire pour rester connecté à votre compte.</li>
              </ul>
              <p className="mt-4">
                Nous ne collectons ni ne stockons vos données bancaires : le
                paiement est traité directement par notre prestataire Stripe,
                sur une page sécurisée gérée par ses soins. Nous recevons
                uniquement la confirmation du paiement et un identifiant de
                transaction, nécessaires pour vous donner accès aux guides
                achetés.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                3. Pourquoi nous utilisons ces données
              </h2>
              <table className="mt-4 w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-stone-200 text-left">
                    <th className="py-2 pr-4 font-semibold text-navy-900">Finalité</th>
                    <th className="py-2 font-semibold text-navy-900">Base légale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="py-2 pr-4">Créer et gérer votre compte</td>
                    <td className="py-2">Exécution du contrat</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-2 pr-4">Vous donner accès aux guides achetés</td>
                    <td className="py-2">Exécution du contrat</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-2 pr-4">Vous envoyer un email de vérification ou de réinitialisation de mot de passe</td>
                    <td className="py-2">Exécution du contrat / intérêt légitime (sécurité du compte)</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-2 pr-4">Répondre à vos demandes envoyées par email</td>
                    <td className="py-2">Intérêt légitime</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Respecter nos obligations comptables et fiscales</td>
                    <td className="py-2">Obligation légale</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                4. Destinataires de vos données
              </h2>
              <p className="mt-4">
                Vos données ne sont ni vendues ni louées à des tiers. Elles
                sont accessibles uniquement à l&apos;équipe de l&apos;éditeur
                et, le cas échéant, à ses sous-traitants techniques
                strictement nécessaires au fonctionnement du Site
                (notamment l&apos;hébergeur mentionné dans les{" "}
                <Link href="/mentions-legales" className="font-semibold text-gold-700 hover:text-gold-800">
                  mentions légales
                </Link>
                ), ainsi qu&apos;à notre prestataire de paiement Stripe, qui
                traite les transactions en votre nom. Lorsqu&apos;un
                prestataire d&apos;emailing sera intégré au Site, il sera
                ajouté à cette liste avant sa mise en service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                5. Durée de conservation
              </h2>
              <p className="mt-4">
                Vos données sont conservées tant que votre compte est actif.
                Si vous demandez la suppression de votre compte, vos
                données d&apos;identité et de contact sont supprimées sous
                un délai raisonnable, à l&apos;exception des informations
                que nous sommes légalement tenus de conserver plus
                longtemps (ex. données de facturation, à des fins
                comptables et fiscales).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                6. Sécurité de vos données
              </h2>
              <p className="mt-4">
                Votre mot de passe n&apos;est jamais stocké en clair : il
                est protégé par un algorithme de hachage à sens unique.
                Les échanges avec le Site sont chiffrés (HTTPS). L&apos;accès
                aux données est limité aux personnes qui en ont
                strictement besoin pour faire fonctionner le service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                7. Cookies
              </h2>
              <p className="mt-4">
                Le Site utilise uniquement un cookie strictement
                nécessaire à son fonctionnement (maintien de votre session
                de connexion). Ce cookie ne nécessite pas de consentement
                préalable au titre de la réglementation applicable, car il
                est indispensable au service que vous demandez
                explicitement (rester connecté à votre compte). Le Site
                n&apos;utilise à ce jour aucun cookie de mesure
                d&apos;audience ni aucun cookie publicitaire.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                8. Vos droits
              </h2>
              <p className="mt-4">
                Conformément au Règlement Général sur la Protection des
                Données (RGPD) et à la loi Informatique et Libertés, vous
                disposez des droits suivants sur vos données :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Droit d&apos;accès à vos données ;</li>
                <li>Droit de rectification, directement depuis votre espace{" "}
                  <Link href="/compte/parametres" className="font-semibold text-gold-700 hover:text-gold-800">
                    Paramètres du compte
                  </Link>{" "}
                  pour votre prénom, nom, téléphone, adresse et email ;
                </li>
                <li>Droit à l&apos;effacement de vos données ;</li>
                <li>Droit à la portabilité de vos données ;</li>
                <li>Droit d&apos;opposition et de limitation du traitement.</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, écrivez-nous à{" "}
                <a
                  href="mailto:contact@guido.fr"
                  className="font-semibold text-gold-700 hover:text-gold-800"
                >
                  contact@guido.fr
                </a>
                . Nous répondons à toute demande dans un délai maximum d&apos;un mois.
              </p>
              <p className="mt-4">
                Vous disposez également du droit d&apos;introduire une
                réclamation auprès de la Commission Nationale de
                l&apos;Informatique et des Libertés (CNIL), autorité de
                contrôle française, si vous estimez que le traitement de
                vos données ne respecte pas la réglementation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                9. Modification de cette politique
              </h2>
              <p className="mt-4">
                Cette politique de confidentialité peut être mise à jour à
                tout moment, notamment pour refléter l&apos;ajout de
                nouveaux traitements (paiement en ligne, emailing). La
                version applicable est celle en vigueur sur le Site à la
                date de votre consultation.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
