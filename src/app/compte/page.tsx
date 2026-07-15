import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Download, Lock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LogoutButton from "@/components/auth/LogoutButton";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { getGuide } from "@/data/guides";
import { DOWNLOAD_LIMIT_MESSAGE } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Mon compte — Guido",
  robots: { index: false, follow: false },
  alternates: { canonical: "/compte" },
};

export default async function ComptePage() {
  const session = await getSession();
  if (!session) {
    redirect("/connexion");
  }

  const user = await db.user.findUnique({ where: { id: session.userId } });
  if (!user) {
    redirect("/connexion");
  }

  const purchases = await db.purchase.findMany({
    where: { userId: session.userId },
    orderBy: { purchasedAt: "desc" },
    include: { downloadEvents: { orderBy: { downloadNumber: "asc" } } },
  });

  const purchasedGuides = purchases
    .map((purchase) => ({ purchase, guide: getGuide(purchase.guideSlug) }))
    .filter(
      (entry): entry is { purchase: (typeof purchases)[number]; guide: NonNullable<typeof entry.guide> } =>
        entry.guide !== undefined,
    );

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-navy-900">Mon compte</h1>
              <p className="mt-2 text-stone-600">{user.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/compte/parametres"
                className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-600 transition hover:border-gold-600 hover:text-gold-700"
              >
                Paramètres
              </Link>
              <LogoutButton />
            </div>
          </div>

          <h2 className="mt-14 text-xl font-bold text-navy-900">Mes guides achetés</h2>

          {purchasedGuides.length === 0 ? (
            <p className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 text-stone-600">
              Vous n&apos;avez pas encore de guide dans votre bibliothèque.
            </p>
          ) : (
            <ul className="mt-6 space-y-4">
              {purchasedGuides.map(({ purchase, guide }) => {
                const offer = guide.offers?.find((candidate) => candidate.id === purchase.offerId);
                const remaining = purchase.maxDownloads - purchase.downloadCount;
                const limitReached = remaining <= 0;

                return (
                  <li
                    key={purchase.id}
                    className="rounded-2xl border border-stone-200 bg-white p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-navy-900">{guide.title}</p>
                        <p className="mt-1 text-sm text-stone-500">
                          {offer ? `${offer.label} · ` : ""}
                          {guide.format}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-navy-900">
                          Téléchargements restants : {Math.max(remaining, 0)} / {purchase.maxDownloads}
                        </p>
                      </div>

                      {limitReached ? (
                        <button
                          disabled
                          className="flex cursor-not-allowed items-center gap-2 rounded-xl bg-stone-200 px-5 py-2.5 text-sm font-semibold text-stone-500"
                        >
                          <Lock size={16} />
                          Télécharger
                        </button>
                      ) : (
                        <a
                          href={`/api/download/${guide.slug}?offer=${purchase.offerId}`}
                          className="flex items-center gap-2 rounded-xl bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-700"
                        >
                          <Download size={16} />
                          Télécharger
                        </a>
                      )}
                    </div>

                    {limitReached && (
                      <p className="mt-4 rounded-xl bg-stone-50 p-3 text-sm text-stone-600">
                        {DOWNLOAD_LIMIT_MESSAGE}
                      </p>
                    )}

                    {purchase.downloadEvents.length > 0 && (
                      <div className="mt-4 border-t border-stone-100 pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
                          Historique
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-stone-600">
                          {purchase.downloadEvents.map((event) => (
                            <li key={event.id}>
                              • Téléchargement n°{event.downloadNumber} —{" "}
                              {event.downloadedAt.toLocaleDateString("fr-FR", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
