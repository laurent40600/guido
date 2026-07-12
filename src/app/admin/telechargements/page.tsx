import type { Metadata } from "next";
import { db } from "@/lib/db";
import { getGuide } from "@/data/guides";

export const metadata: Metadata = {
  title: "Historique des téléchargements — Administration Guido",
};

export default async function AdminTelechargementsPage() {
  const events = await db.downloadEvent.findMany({
    orderBy: { downloadedAt: "desc" },
    include: { user: true, purchase: true },
    take: 200,
  });

  return (
    <div>
      <h1 className="text-2xl font-black text-navy-900">Historique des téléchargements</h1>
      <p className="mt-2 text-sm text-stone-500">
        {events.length} téléchargement(s) affiché(s) (200 plus récents maximum).
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-stone-500">
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Client</th>
              <th className="p-4 font-semibold">Guide</th>
              <th className="p-4 font-semibold">Commande</th>
              <th className="p-4 font-semibold">N°</th>
              <th className="p-4 font-semibold">ID unique</th>
              <th className="p-4 font-semibold">IP</th>
              <th className="p-4 font-semibold">Navigateur</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => {
              const guide = getGuide(event.guideSlug);
              return (
                <tr key={event.id} className="border-b border-stone-100 last:border-0">
                  <td className="p-4 align-top text-stone-600">
                    {event.downloadedAt.toLocaleString("fr-FR")}
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-navy-900">{event.user.firstName} {event.user.lastName}</p>
                    <p className="text-stone-500">{event.user.email}</p>
                  </td>
                  <td className="p-4 align-top text-navy-900">{guide?.title ?? event.guideSlug}</td>
                  <td className="p-4 align-top font-semibold text-navy-900">#{event.purchase.orderNumber}</td>
                  <td className="p-4 align-top text-navy-900">{event.downloadNumber}/{event.purchase.maxDownloads}</td>
                  <td className="p-4 align-top font-mono text-xs text-stone-500">{event.uniqueDownloadId}</td>
                  <td className="p-4 align-top text-stone-500">{event.ipAddress ?? "—"}</td>
                  <td className="p-4 align-top max-w-[240px] truncate text-stone-500" title={event.userAgent ?? undefined}>
                    {event.userAgent ?? "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
