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

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-24">
          <Link
            href="/blog"
            className="text-sm font-semibold text-gold-700 hover:text-gold-800"
          >
            ← Tous les articles
          </Link>

          <h1 className="mt-6 text-4xl font-black leading-tight text-navy-900 md:text-5xl">
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
                      Exemple de prompt
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
        </article>
      </main>
      <Footer />
    </>
  );
}
