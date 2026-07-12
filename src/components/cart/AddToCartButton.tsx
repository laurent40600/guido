"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddToCartButton({
  guideSlug,
  offerId = "default",
  label = "Ajouter au panier",
  className,
}: {
  guideSlug: string;
  offerId?: string;
  label?: string;
  className: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);

    const response = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guideSlug, offerId }),
    });

    if (response.ok) {
      router.push("/panier");
      router.refresh();
      return;
    }

    const data = await response.json().catch(() => ({}));
    setError(data.error ?? "Une erreur est survenue.");
    setLoading(false);
  }

  return (
    <div>
      <button onClick={handleClick} disabled={loading} className={className}>
        {loading ? "Ajout…" : label}
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
