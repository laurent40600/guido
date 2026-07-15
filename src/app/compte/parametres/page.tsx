import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProfileForm from "@/components/account/ProfileForm";
import EmailChangeForm from "@/components/account/EmailChangeForm";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Paramètres du compte — Guido",
  robots: { index: false, follow: false },
  alternates: { canonical: "/compte/parametres" },
};

const EMAIL_ERROR_MESSAGES: Record<string, string> = {
  "lien-invalide": "Ce lien de confirmation n'est pas valide.",
  "lien-expire": "Ce lien de confirmation a expiré. Relancez le changement d'email.",
  "email-pris": "Cette adresse email est désormais utilisée par un autre compte.",
};

export default async function ParametresPage({
  searchParams,
}: {
  searchParams: Promise<{ email_updated?: string; email_error?: string }>;
}) {
  const session = await getSession();
  if (!session) {
    redirect("/connexion");
  }

  const { email_updated, email_error } = await searchParams;

  const user = await db.user.findUnique({ where: { id: session.userId } });
  if (!user) {
    redirect("/connexion");
  }

  const pendingEmailChange = await db.emailChangeToken.findFirst({
    where: { userId: session.userId, expiresAt: { gt: new Date() } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-black text-navy-900">Paramètres du compte</h1>
            <Link
              href="/compte"
              className="text-sm font-semibold text-gold-700 hover:text-gold-800"
            >
              ← Mes guides achetés
            </Link>
          </div>

          {email_updated === "1" && (
            <p className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
              Votre adresse email a bien été mise à jour.
            </p>
          )}
          {email_error && EMAIL_ERROR_MESSAGES[email_error] && (
            <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {EMAIL_ERROR_MESSAGES[email_error]}
            </p>
          )}

          <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-bold text-navy-900">Mes informations</h2>
            <ProfileForm
              initialFirstName={user.firstName}
              initialLastName={user.lastName}
              initialPhone={user.phone}
              initialAddress={user.address}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-bold text-navy-900">Adresse email</h2>
            <p className="mt-2 text-sm text-stone-600">
              Adresse actuelle : <span className="font-semibold text-navy-900">{user.email}</span>
            </p>
            {pendingEmailChange && (
              <p className="mt-2 rounded-xl bg-gold-50 px-4 py-3 text-sm font-medium text-gold-800">
                Changement vers <strong>{pendingEmailChange.newEmail}</strong> en attente de
                confirmation — vérifiez la boîte mail de cette nouvelle adresse.
              </p>
            )}
            <EmailChangeForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
