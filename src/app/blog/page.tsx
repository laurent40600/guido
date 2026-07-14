import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogExplorer from "@/components/blog/BlogExplorer";
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
            <div className="mt-16">
              <BlogExplorer posts={blogPosts} />
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
