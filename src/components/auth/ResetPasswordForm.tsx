"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function ResetPasswordFormInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Les deux mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        return;
      }

      router.push("/connexion?reset=1");
    } catch {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  if (!token) {
    return (
      <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
        <p className="font-semibold text-navy-900">Lien invalide</p>
        <p className="mt-2 text-sm text-stone-600">
          Ce lien de réinitialisation est incomplet.{" "}
          <Link href="/mot-de-passe-oublie" className="font-semibold text-gold-700 hover:text-gold-800">
            Demander un nouveau lien
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div>
        <label className="block text-sm font-semibold text-navy-900">Nouveau mot de passe</label>
        <input
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
        />
        <p className="mt-1 text-xs text-stone-500">8 caractères minimum</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-900">
          Confirmer le mot de passe
        </label>
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
        />
      </div>

      {error && <p className="text-sm font-medium text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-navy-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-gold-700 disabled:opacity-60"
      >
        {loading ? "Enregistrement..." : "Réinitialiser le mot de passe"}
      </button>
    </form>
  );
}

export default function ResetPasswordForm() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordFormInner />
    </Suspense>
  );
}
