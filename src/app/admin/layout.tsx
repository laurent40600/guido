import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getSession();
  if (!session) {
    redirect("/connexion");
  }

  const user = await db.user.findUnique({ where: { id: session.userId } });
  if (!user?.isAdmin) {
    redirect("/");
  }

  return (
    <div className="min-h-full bg-stone-50">
      <header className="border-b border-stone-200 bg-navy-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/admin" className="font-black text-white">
            Guido — Administration
          </Link>
          <nav className="flex items-center gap-6 text-sm font-semibold text-stone-300">
            <Link href="/admin/commandes" className="hover:text-white">Commandes</Link>
            <Link href="/admin/telechargements" className="hover:text-white">Téléchargements</Link>
            <Link href="/admin/utilisateurs" className="hover:text-white">Utilisateurs</Link>
            <Link href="/admin/securite" className="hover:text-white">Sécurité</Link>
            <Link href="/" className="hover:text-white">← Retour au site</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
    </div>
  );
}
