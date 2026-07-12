"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginFormInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const justVerified = searchParams.get("verified") === "1";
  const justReset = searchParams.get("reset") === "1";
  const urlError = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        return;
      }

      router.push("/compte");
      router.refresh();
    } catch {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {justVerified && (
        <p className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          Votre email a bien été vérifié — vous pouvez maintenant vous connecter.
        </p>
      )}
      {justReset && (
        <p className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          Votre mot de passe a bien été réinitialisé — vous pouvez maintenant vous connecter.
        </p>
      )}
      {urlError === "lien-expire" && (
        <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Ce lien de vérification a expiré. Créez un nouveau compte pour en recevoir un autre.
        </p>
      )}
      {urlError === "lien-invalide" && (
        <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Ce lien de vérification n&apos;est pas valide.
        </p>
      )}

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

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-semibold text-navy-900">Mot de passe</label>
            <Link
              href="/mot-de-passe-oublie"
              className="text-sm font-semibold text-gold-700 hover:text-gold-800"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
          />
        </div>

        {error && <p className="text-sm font-medium text-red-700">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-navy-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-gold-700 disabled:opacity-60"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>

        <p className="text-center text-sm text-stone-500">
          Pas encore de compte ?{" "}
          <Link href="/inscription" className="font-semibold text-gold-700 hover:text-gold-800">
            S&apos;inscrire
          </Link>
        </p>
      </form>
    </>
  );
}

export default function LoginForm() {
  return (
    <Suspense fallback={null}>
      <LoginFormInner />
    </Suspense>
  );
}
