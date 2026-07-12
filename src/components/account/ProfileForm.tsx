"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileForm({
  initialFirstName,
  initialLastName,
  initialPhone,
  initialAddress,
}: {
  initialFirstName: string;
  initialLastName: string;
  initialPhone: string;
  initialAddress: string;
}) {
  const router = useRouter();
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [phone, setPhone] = useState(initialPhone);
  const [address, setAddress] = useState(initialAddress);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const res = await fetch("/api/account/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, phone, address }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        return;
      }

      setSuccess(true);
      router.refresh();
    } catch {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-navy-900">Prénom</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy-900">Nom</label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-900">Téléphone</label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-900">Adresse</label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
        />
      </div>

      {error && <p className="text-sm font-medium text-red-700">{error}</p>}
      {success && (
        <p className="text-sm font-medium text-green-700">Informations mises à jour.</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-700 disabled:opacity-60"
      >
        {loading ? "Enregistrement..." : "Enregistrer"}
      </button>
    </form>
  );
}
