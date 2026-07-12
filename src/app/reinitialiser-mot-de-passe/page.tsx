import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ReinitialiserMotDePassePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-md px-6 py-24">
          <h1 className="text-3xl font-black text-navy-900">Réinitialiser le mot de passe</h1>
          <p className="mt-3 text-stone-600">Choisissez un nouveau mot de passe.</p>
          <ResetPasswordForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
