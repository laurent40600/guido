"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [devVerifyUrl, setDevVerifyUrl] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Les deux mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstName, lastName, phone, address }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        return;
      }

      setDone(true);
      setDevVerifyUrl(data.devVerifyUrl ?? null);
    } catch {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
        <p className="font-semibold text-navy-900">
          Compte créé — vérifiez votre boîte mail
        </p>
        <p className="mt-2 text-sm text-stone-600">
          Un email de vérification vient de vous être envoyé. Cliquez sur le lien
          qu&apos;il contient pour activer votre compte.
        </p>
        {devVerifyUrl && (
          <div className="mt-4 rounded-xl bg-gold-50 p-4 text-sm">
            <p className="font-semibold text-gold-800">
              Mode test — aucun service d&apos;email n&apos;est encore branché
            </p>
            <p className="mt-1 text-stone-700">
              Cliquez directement sur ce lien pour vérifier le compte :
            </p>
            <a
              href={devVerifyUrl}
              className="mt-2 block break-all font-semibold text-gold-700 underline"
            >
              {devVerifyUrl}
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div className="grid grid-cols-2 gap-4">
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
          placeholder="Numéro, rue, code postal, ville"
          className="mt-1 w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-base outline-none focus:border-gold-600"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-900">Mot de passe</label>
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
        {loading ? "Création..." : "Créer mon compte"}
      </button>

      <p className="text-center text-sm text-stone-500">
        Déjà inscrit ?{" "}
        <Link href="/connexion" className="font-semibold text-gold-700 hover:text-gold-800">
          Se connecter
        </Link>
      </p>
    </form>
  );
}
