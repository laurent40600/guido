"use client";

import { useState } from "react";

export default function EmailChangeForm() {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [devConfirmUrl, setDevConfirmUrl] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/account/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newEmail, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        return;
      }

      setDone(true);
      setDevConfirmUrl(data.devConfirmUrl ?? null);
    } catch {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="mt-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <p className="font-semibold text-navy-900">Vérifiez la nouvelle adresse</p>
        <p className="mt-2 text-sm text-stone-600">
          Un email de confirmation vient d&apos;être envoyé à <strong>{newEmail}</strong>. Votre
          adresse actuelle reste active tant que vous n&apos;avez pas cliqué sur ce lien.
        </p>
        {devConfirmUrl && (
          <div className="mt-4 rounded-xl bg-gold-50 p-4 text-sm">
            <p className="font-semibold text-gold-800">
              Mode test — aucun service d&apos;email n&apos;est encore branché
            </p>
            <p className="mt-1 text-stone-700">
              Cliquez directement sur ce lien pour confirmer le changement :
            </p>
            <a
              href={devConfirmUrl}
              className="mt-2 block break-all font-semibold text-gold-700 underline"
            >
              {devConfirmUrl}
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div>
        <label className="block text-sm font-semibold text-navy-900">Nouvelle adresse email</label>
        <input
          type="email"
          required
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-900">Mot de passe actuel</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
        />
        <p className="mt-1 text-xs text-stone-500">
          Requis pour confirmer que c&apos;est bien vous.
        </p>
      </div>

      {error && <p className="text-sm font-medium text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-700 disabled:opacity-60"
      >
        {loading ? "Envoi..." : "Changer d'email"}
      </button>
    </form>
  );
}
