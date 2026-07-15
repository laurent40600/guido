import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Mot de passe oublié — Guido",
  robots: { index: false, follow: false },
  alternates: { canonical: "/mot-de-passe-oublie" },
};

export default function MotDePasseOubliePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-md px-6 py-24">
          <h1 className="text-3xl font-black text-navy-900">Mot de passe oublié</h1>
          <p className="mt-3 text-stone-600">
            Indiquez votre email pour recevoir un lien de réinitialisation.
          </p>
          <ForgotPasswordForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
