import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RemoveFromCartButton from "@/components/cart/RemoveFromCartButton";
import CheckoutConsent from "@/components/cart/CheckoutConsent";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { getGuide } from "@/data/guides";
import { resolveOfferPrice } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Mon panier — Guido",
};

export default async function PanierPage() {
  const session = await getSession();
  if (!session) {
    redirect("/connexion");
  }

  const cartItems = await db.cartItem.findMany({
    where: { userId: session.userId },
    orderBy: { addedAt: "desc" },
  });

  const items = cartItems
    .map((item) => {
      const guide = getGuide(item.guideSlug);
      if (!guide) return null;
      const offer = guide.offers?.find((candidate) => candidate.id === item.offerId);
      const price = offer ? resolveOfferPrice(offer).displayPrice : guide.price;
      return { item, guide, offer, price };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <h1 className="text-3xl font-black text-navy-900">Mon panier</h1>

          {items.length === 0 ? (
            <p className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 text-stone-600">
              Votre panier est vide.{" "}
              <Link href="/guides" className="font-semibold text-gold-700 hover:text-gold-800">
                Découvrir les guides
              </Link>
            </p>
          ) : (
            <>
              <ul className="mt-6 space-y-4">
                {items.map(({ item, guide, offer, price }) => (
                  <li
                    key={item.id}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-5"
                  >
                    <div>
                      <p className="font-semibold text-navy-900">{guide.title}</p>
                      <p className="mt-1 text-sm text-stone-500">
                        {offer ? `${offer.label} · ` : ""}
                        {price}
                      </p>
                    </div>
                    <RemoveFromCartButton cartItemId={item.id} />
                  </li>
                ))}
              </ul>

              <CheckoutConsent />
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
