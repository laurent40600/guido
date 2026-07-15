import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Connexion — Guido",
  robots: { index: false, follow: false },
  alternates: { canonical: "/connexion" },
};

export default function ConnexionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-md px-6 py-24">
          <h1 className="text-3xl font-black text-navy-900">Connexion</h1>
          <p className="mt-3 text-stone-600">Accédez à vos guides achetés.</p>
          <LoginForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
