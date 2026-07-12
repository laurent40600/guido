import type { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Administration — Guido",
};

export default async function AdminDashboardPage() {
  const [purchaseCount, downloadCount, userCount] = await Promise.all([
    db.purchase.count(),
    db.downloadEvent.count(),
    db.user.count(),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-black text-navy-900">Tableau de bord</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-3xl font-black text-navy-900">{purchaseCount}</p>
          <p className="mt-1 text-sm text-stone-500">Commandes</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-3xl font-black text-navy-900">{downloadCount}</p>
          <p className="mt-1 text-sm text-stone-500">Téléchargements effectués</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-3xl font-black text-navy-900">{userCount}</p>
          <p className="mt-1 text-sm text-stone-500">Comptes</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/admin/commandes"
          className="rounded-xl bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-700"
        >
          Gérer les commandes
        </Link>
        <Link
          href="/admin/telechargements"
          className="rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-600 transition hover:border-gold-600 hover:text-gold-700"
        >
          Historique des téléchargements
        </Link>
        <Link
          href="/admin/utilisateurs"
          className="rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-600 transition hover:border-gold-600 hover:text-gold-700"
        >
          Utilisateurs
        </Link>
        <Link
          href="/admin/securite"
          className="rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-600 transition hover:border-gold-600 hover:text-gold-700"
        >
          Sécurité
        </Link>
      </div>
    </div>
  );
}
