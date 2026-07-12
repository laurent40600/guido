"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [devResetUrl, setDevResetUrl] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        return;
      }

      setDone(true);
      setDevResetUrl(data.devResetUrl ?? null);
    } catch {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
        <p className="font-semibold text-navy-900">Vérifiez votre boîte mail</p>
        <p className="mt-2 text-sm text-stone-600">
          Si un compte existe avec cette adresse, un email contenant un lien de
          réinitialisation vient de vous être envoyé.
        </p>
        {devResetUrl && (
          <div className="mt-4 rounded-xl bg-gold-50 p-4 text-sm">
            <p className="font-semibold text-gold-800">
              Mode test — aucun service d&apos;email n&apos;est encore branché
            </p>
            <p className="mt-1 text-stone-700">
              Cliquez directement sur ce lien pour réinitialiser le mot de passe :
            </p>
            <a
              href={devResetUrl}
              className="mt-2 block break-all font-semibold text-gold-700 underline"
            >
              {devResetUrl}
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div>
        <label className="block text-sm font-semibold text-navy-900">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
        />
      </div>

      {error && <p className="text-sm font-medium text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-navy-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-gold-700 disabled:opacity-60"
      >
        {loading ? "Envoi..." : "Recevoir le lien de réinitialisation"}
      </button>

      <p className="text-center text-sm text-stone-500">
        <Link href="/connexion" className="font-semibold text-gold-700 hover:text-gold-800">
          Retour à la connexion
        </Link>
      </p>
    </form>
  );
}
