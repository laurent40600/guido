"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutConsent() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ consentGiven }),
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok || !data.url) {
      setError(data.error ?? "Une erreur est survenue, réessaie dans un instant.");
      setLoading(false);
      return;
    }

    window.location.href = data.url;
  }

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

      {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-stone-600">
          Paiement sécurisé par Stripe. Tu seras redirigé·e vers une page de paiement, puis reviens automatiquement ici une fois la commande validée.
        </p>
        <button
          type="button"
          onClick={handleCheckout}
          disabled={!consentGiven || loading}
          className="rounded-xl bg-gold-600 px-6 py-3 font-semibold text-white transition hover:bg-gold-700 disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-500"
        >
          {loading ? "Redirection..." : "Passer commande"}
        </button>
      </div>
    </div>
  );
}
