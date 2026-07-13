import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getSession } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Commande confirmée — Guido",
};

export default async function PanierConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const session = await getSession();
  if (!session) {
    redirect("/connexion");
  }

  const { session_id: sessionId } = await searchParams;
  const checkoutSession = sessionId
    ? await stripe.checkout.sessions.retrieve(sessionId).catch(() => null)
    : null;
  const paid = checkoutSession?.payment_status === "paid";

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-24 text-center">
          {paid ? (
            <>
              <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
                Paiement confirmé
              </span>
              <h1 className="mt-6 text-3xl font-black text-navy-900 md:text-4xl">
                Merci pour ta commande !
              </h1>
              <p className="mt-4 text-stone-600">
                Tes guides sont maintenant disponibles dans ton espace
                personnel. Un instant peut être nécessaire pour qu&apos;ils
                apparaissent — recharge la page si besoin.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-black text-navy-900 md:text-4xl">
                Commande en cours de traitement
              </h1>
              <p className="mt-4 text-stone-600">
                Ton paiement est en cours de vérification. Tes guides
                apparaîtront dans ton espace personnel dès sa confirmation.
              </p>
            </>
          )}

          <Link
            href="/compte"
            className="mt-8 inline-block rounded-xl bg-navy-900 px-6 py-3 font-semibold text-white transition hover:bg-gold-700"
          >
            Voir mes guides
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
