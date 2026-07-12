"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { guides } from "@/data/guides";

export default function GrantGuideForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [guideSlug, setGuideSlug] = useState(guides[0]?.slug ?? "");
  const [offerId, setOfferId] = useState(guides[0]?.offers?.[0]?.id ?? "default");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const selectedGuide = guides.find((guide) => guide.slug === guideSlug);

  function handleGuideChange(slug: string) {
    setGuideSlug(slug);
    const guide = guides.find((candidate) => candidate.slug === slug);
    setOfferId(guide?.offers?.[0]?.id ?? "default");
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const res = await fetch("/api/admin/grant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, guideSlug, offerId }),
    });
    const data = await res.json().catch(() => ({}));
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? "Une erreur est survenue.");
      return;
    }

    setSuccess(`Accès accordé — commande #${data.purchase.orderNumber}.`);
    setEmail("");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-stone-200 bg-white p-6">
      <h2 className="font-bold text-navy-900">Accorder un guide manuellement</h2>
      <p className="mt-1 text-sm text-stone-500">
        À utiliser en attendant le paiement en ligne, ou pour un cas particulier (support client).
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <label className="block text-xs font-semibold text-navy-900">Email du client</label>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm"
            placeholder="client@example.com"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-900">Guide</label>
          <select
            value={guideSlug}
            onChange={(event) => handleGuideChange(event.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm"
          >
            {guides.map((guide) => (
              <option key={guide.slug} value={guide.slug}>{guide.title}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-900">Offre</label>
          <select
            value={offerId}
            onChange={(event) => setOfferId(event.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm"
          >
            {selectedGuide?.offers && selectedGuide.offers.length > 0 ? (
              selectedGuide.offers.map((offer) => (
                <option key={offer.id} value={offer.id}>{offer.label}</option>
              ))
            ) : (
              <option value="default">Standard</option>
            )}
          </select>
        </div>
      </div>

      {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}
      {success && <p className="mt-3 text-sm font-medium text-green-700">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 rounded-xl bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-700 disabled:opacity-60"
      >
        {loading ? "Envoi..." : "Accorder l'accès"}
      </button>
    </form>
  );
}
