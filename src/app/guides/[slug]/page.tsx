import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GuidePricing from "@/components/guides/GuidePricing";
import GuideCard from "@/components/guides/GuideCard";
import { guides, getGuide } from "@/data/guides";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title} — Guido`,
    description: guide.pitch,
  };
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const session = await getSession();

  const [purchases, cartItems] = session
    ? await Promise.all([
        db.purchase.findMany({ where: { userId: session.userId, guideSlug: slug } }),
        db.cartItem.findMany({ where: { userId: session.userId, guideSlug: slug } }),
      ])
    : [[], []];

  const purchasedOfferIds = purchases.map((purchase) => purchase.offerId);
  const cartOfferIds = cartItems.map((item) => item.offerId);

  const crossSellGuides = (guide.crossSell ?? [])
    .map((crossSlug) => getGuide(crossSlug))
    .filter(
      (crossGuide): crossGuide is NonNullable<typeof crossGuide> =>
        crossGuide !== undefined && crossGuide.slug !== guide.slug,
    );

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <Link
            href="/guides"
            className="text-sm font-semibold text-gold-700 hover:text-gold-800"
          >
            ← Tous les guides
          </Link>

          {guide.cover && (
            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy-900 shadow-lg">
              <Image
                src={guide.cover}
                alt={guide.title}
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gold-600/10 px-3 py-1 text-xs font-semibold text-gold-700">
              {guide.format}
            </span>
            <span
              className={
                guide.available
                  ? "rounded-full bg-gold-600/10 px-3 py-1 text-xs font-semibold text-gold-700"
                  : "rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-500"
              }
            >
              {guide.available ? "Disponible" : "Bientôt disponible"}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-black leading-tight text-navy-900 md:text-5xl">
            {guide.title}
          </h1>

          <p className="mt-4 text-lg font-medium text-gold-700">
            {guide.tagline}
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            {guide.pitch}
          </p>

          {guide.promptPreview && guide.promptPreview.length > 0 && (
            <div className="mt-8 space-y-3">
              {guide.promptPreview.map((prompt, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-violet-600/25 bg-violet-50 p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-violet-700">
                    {prompt.title}
                  </p>
                  <p className="mt-1.5 font-mono text-sm leading-relaxed text-navy-900">
                    {prompt.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          <GuidePricing
            guide={guide}
            isLoggedIn={!!session}
            purchasedOfferIds={purchasedOfferIds}
            cartOfferIds={cartOfferIds}
          />

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-navy-900">
              Ce que vous allez apprendre
            </h2>
            <ul className="mt-6 space-y-4">
              {guide.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-600/10 text-gold-700">
                    <Check size={14} />
                  </span>
                  <span className="text-stone-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-navy-900">
              Questions fréquentes
            </h2>
            <div className="mt-6 space-y-6">
              {guide.faq.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-stone-200 pb-6 last:border-0"
                >
                  <p className="font-semibold text-navy-900">
                    {item.question}
                  </p>
                  <p className="mt-2 leading-relaxed text-stone-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {crossSellGuides.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-navy-900">
                Tu pourrais aussi aimer
              </h2>
              <p className="mt-2 text-stone-600">
                Tu utilises déjà l&apos;IA pour ton business, tu pourrais aussi
                aimer ce pack de prompts.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {crossSellGuides.map((crossGuide) => (
                  <GuideCard key={crossGuide.slug} guide={crossGuide} />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
