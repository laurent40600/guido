import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts, getBlogPost } from "@/data/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = "https://guido.fr";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: [post.coverImage],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Guido",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Guido",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-mark-512.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
  };

  const relatedPosts = (post.relatedPosts ?? [])
    .map((relatedSlug) => getBlogPost(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => related !== undefined);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-24">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
            }}
          />

          <Link
            href="/blog"
            className="text-sm font-semibold text-gold-700 hover:text-gold-800"
          >
            ← Tous les articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-gold-400">
              {post.series}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-black leading-tight text-navy-900 md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-sm font-medium text-stone-500">
            Publié le{" "}
            {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-navy-900 shadow-lg sm:aspect-[2/1]">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-10 text-lg leading-relaxed text-stone-700">
            {post.body.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="mt-10 text-2xl font-bold text-navy-900"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="mt-4 list-disc space-y-2 pl-6">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "prompt") {
                return (
                  <div
                    key={index}
                    className="mt-4 rounded-xl border border-gold-600/40 bg-gold-50 p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-wide text-gold-700">
                      {block.label ?? "Exemple de prompt"}
                    </p>
                    <p className="mt-1.5 font-mono text-base leading-relaxed text-navy-900">
                      {block.text}
                    </p>
                  </div>
                );
              }
              return (
                <p key={index} className="mt-4">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-navy-900/15 bg-navy-900 p-6 text-white">
            <p className="text-base leading-relaxed">{post.cta.text}</p>
            <Link
              href={post.cta.href}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-700"
            >
              {post.cta.linkLabel}
              <ArrowRight size={16} />
            </Link>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16 border-t border-stone-200 pt-10">
              <h2 className="text-2xl font-bold text-navy-900">
                À lire aussi
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white transition hover:border-gold-600 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-900">
                      <Image
                        src={related.coverImage}
                        alt={related.coverAlt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-bold leading-snug text-navy-900">
                        {related.title}
                      </p>
                      <span className="mt-2 flex items-center gap-1 text-xs font-semibold text-gold-700">
                        Lire l&apos;article
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
