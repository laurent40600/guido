import type { Metadata } from "next";
import { db } from "@/lib/db";
import { getGuide } from "@/data/guides";
import PurchaseActions from "@/components/admin/PurchaseActions";
import GrantGuideForm from "@/components/admin/GrantGuideForm";

export const metadata: Metadata = {
  title: "Commandes — Administration Guido",
};

export default async function AdminCommandesPage() {
  const purchases = await db.purchase.findMany({
    orderBy: { orderNumber: "desc" },
    include: { user: true },
  });

  return (
    <div>
      <h1 className="text-2xl font-black text-navy-900">Commandes</h1>
      <p className="mt-2 text-sm text-stone-500">{purchases.length} commande(s) au total.</p>

      <div className="mt-6">
        <GrantGuideForm />
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-stone-500">
              <th className="p-4 font-semibold">Commande</th>
              <th className="p-4 font-semibold">Client</th>
              <th className="p-4 font-semibold">Guide</th>
              <th className="p-4 font-semibold">Téléchargements</th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => {
              const guide = getGuide(purchase.guideSlug);
              const offer = guide?.offers?.find((candidate) => candidate.id === purchase.offerId);

              return (
                <tr key={purchase.id} className="border-b border-stone-100 last:border-0">
                  <td className="p-4 align-top font-semibold text-navy-900">#{purchase.orderNumber}</td>
                  <td className="p-4 align-top">
                    <p className="text-navy-900">{purchase.user.firstName} {purchase.user.lastName}</p>
                    <p className="text-stone-500">{purchase.user.email}</p>
                  </td>
                  <td className="p-4 align-top">
                    <p className="text-navy-900">{guide?.title ?? purchase.guideSlug}</p>
                    {offer && <p className="text-stone-500">{offer.label}</p>}
                  </td>
                  <td className="p-4 align-top font-semibold text-navy-900">
                    {purchase.downloadCount} / {purchase.maxDownloads}
                  </td>
                  <td className="p-4 align-top">
                    <PurchaseActions purchaseId={purchase.id} maxDownloads={purchase.maxDownloads} />
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
