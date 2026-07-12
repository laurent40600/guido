"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutConsent() {
  const [consentGiven, setConsentGiven] = useState(false);

  return (
    <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6">
      <div className="rounded-xl bg-stone-50 p-4 text-sm leading-relaxed text-stone-600">
        Conformément à l&apos;article L.221-28, 13° du Code de la
        consommation, le droit de rétractation de 14 jours ne s&apos;applique
        pas à la fourniture d&apos;un contenu numérique non fourni sur un
        support matériel dont l&apos;exécution a commencé après accord
        préalable exprès du consommateur, qui a renoncé expressément à son
        droit de rétractation. Détails dans nos{" "}
        <Link href="/cgv#retractation" className="font-semibold text-gold-700 hover:text-gold-800">
          Conditions Générales de Vente
        </Link>
        .
      </div>

      <label className="mt-4 flex items-start gap-3 text-sm text-navy-900">
        <input
          type="checkbox"
          required
          checked={consentGiven}
          onChange={(event) => setConsentGiven(event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-stone-300 text-gold-600 focus:ring-gold-600"
        />
        <span>
          Je reconnais demander l&apos;accès immédiat au contenu numérique dès
          la confirmation de ma commande, et je renonce expressément à mon
          droit de rétractation de 14 jours applicable aux achats à distance.
        </span>
      </label>
      {!consentGiven && (
        <p className="mt-2 text-xs text-stone-500">
          Cette case devra être cochée pour valider votre commande dès que le paiement en ligne sera activé.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-stone-600">
          Le paiement en ligne arrive bientôt — cette étape ne débite rien pour le moment.
        </p>
        <button
          disabled
          className="cursor-not-allowed rounded-xl bg-stone-200 px-6 py-3 font-semibold text-stone-500"
        >
          Passer commande — bientôt disponible
        </button>
      </div>
    </div>
  );
}
