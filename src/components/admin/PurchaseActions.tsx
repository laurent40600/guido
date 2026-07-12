"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PurchaseActions({
  purchaseId,
  maxDownloads,
}: {
  purchaseId: string;
  maxDownloads: number;
}) {
  const router = useRouter();
  const [maxValue, setMaxValue] = useState(String(maxDownloads));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function callApi(body: Record<string, unknown>) {
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/admin/purchases/${purchaseId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Une erreur est survenue.");
      return;
    }
    router.refresh();
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => callApi({ action: "reset" })}
        disabled={loading}
        className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-600 transition hover:border-gold-600 hover:text-gold-700 disabled:opacity-60"
      >
        Réinitialiser le compteur
      </button>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const value = Number(maxValue);
          if (Number.isInteger(value) && value >= 0) callApi({ maxDownloads: value });
        }}
        className="flex items-center gap-1"
      >
        <input
          type="number"
          min={0}
          value={maxValue}
          onChange={(event) => setMaxValue(event.target.value)}
          className="w-16 rounded-lg border border-stone-200 px-2 py-1.5 text-xs"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-gold-700 disabled:opacity-60"
        >
          Définir le max
        </button>
      </form>

      {error && <p className="w-full text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
