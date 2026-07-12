import type { Metadata } from "next";
import { db } from "@/lib/db";
import VerifyEmailButton from "@/components/admin/VerifyEmailButton";

export const metadata: Metadata = {
  title: "Utilisateurs — Administration Guido",
};

export default async function AdminUtilisateursPage() {
  // On ne sélectionne jamais passwordHash : cette page ne doit jamais pouvoir
  // exposer un mot de passe, même haché.
  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      emailVerified: true,
      isAdmin: true,
      createdAt: true,
      _count: { select: { purchases: true } },
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-black text-navy-900">Utilisateurs</h1>
      <p className="mt-2 text-sm text-stone-500">
        {users.length} compte(s). Les mots de passe ne sont jamais accessibles, même ici — ils sont
        hachés de façon irréversible.
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-stone-500">
              <th className="p-4 font-semibold">Client</th>
              <th className="p-4 font-semibold">Téléphone</th>
              <th className="p-4 font-semibold">Inscrit le</th>
              <th className="p-4 font-semibold">Statut</th>
              <th className="p-4 font-semibold">Achats</th>
              <th className="p-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-stone-100 last:border-0">
                <td className="p-4 align-top">
                  <p className="text-navy-900">{user.firstName} {user.lastName}</p>
                  <p className="text-stone-500">{user.email}</p>
                </td>
                <td className="p-4 align-top text-stone-600">{user.phone || "—"}</td>
                <td className="p-4 align-top text-stone-600">
                  {user.createdAt.toLocaleDateString("fr-FR")}
                </td>
                <td className="p-4 align-top">
                  <div className="flex flex-wrap gap-1.5">
                    {user.isAdmin && (
                      <span className="rounded-full bg-navy-900 px-2 py-0.5 text-xs font-semibold text-white">
                        Admin
                      </span>
                    )}
                    <span
                      className={
                        user.emailVerified
                          ? "rounded-full bg-gold-600/10 px-2 py-0.5 text-xs font-semibold text-gold-700"
                          : "rounded-full bg-stone-100 px-2 py-0.5 text-xs font-semibold text-stone-500"
                      }
                    >
                      {user.emailVerified ? "Email vérifié" : "Email non vérifié"}
                    </span>
                  </div>
                </td>
                <td className="p-4 align-top font-semibold text-navy-900">{user._count.purchases}</td>
                <td className="p-4 align-top">
                  {!user.emailVerified && <VerifyEmailButton userId={user.id} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-stone-400">
        Pour donner ou retirer les droits administrateur, utilisez{" "}
        <code className="rounded bg-stone-100 px-1.5 py-0.5">npx tsx scripts/make-admin.ts &lt;email&gt;</code>{" "}
        en ligne de commande — volontairement non accessible depuis cette interface pour éviter
        qu&apos;une session compromise ne puisse créer d&apos;autres administrateurs.
      </p>
    </div>
  );
}
