import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog Guido : conseils pratiques et cas concrets",
  description:
    "Des articles pratiques pour aller plus loin sur l'IA, la productivité et le bien-être, avant de choisir le guide Guido qui te correspond.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <span className="rounded-full border border-gold-600/30 bg-gold-600/10 px-4 py-2 text-sm font-semibold text-gold-700">
              Blog
            </span>
            <h1 className="mt-6 text-4xl font-black text-navy-900 md:text-5xl">
              Des articles pratiques, pas du blabla
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Des cas concrets pour t&apos;aider à avancer tout de suite, et
              creuser plus loin avec un guide Guido si le sujet te concerne.
            </p>
          </div>

          {blogPosts.length > 0 ? (
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold-600 hover:shadow-xl hover:shadow-gold-900/10"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-900">
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-bold leading-snug text-navy-900">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-gold-700">
                      Lire l&apos;article
                      <ArrowRight
                        size={14}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-16 max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center">
              <p className="font-semibold text-navy-900">
                Le premier article arrive bientôt
              </p>
              <p className="mt-2 text-sm text-stone-500">
                En attendant, retrouve tous les guides Guido sur leur page
                dédiée.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
