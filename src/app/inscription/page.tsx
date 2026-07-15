import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SignupForm from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Créer un compte — Guido",
  robots: { index: false, follow: false },
  alternates: { canonical: "/inscription" },
};

export default function InscriptionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-md px-6 py-24">
          <h1 className="text-3xl font-black text-navy-900">Créer un compte</h1>
          <p className="mt-3 text-stone-600">
            Retrouvez tous vos guides achetés depuis votre espace personnel.
          </p>
          <SignupForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
