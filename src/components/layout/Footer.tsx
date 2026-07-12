import Link from "next/link";
import Logo from "@/components/layout/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-base leading-relaxed text-stone-500">
            Des guides pratiques ultra-ciblés, sur des sujets précis que
            personne d&apos;autre ne traite en détail.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-base">
          <div>
            <h3 className="mb-4 font-semibold text-navy-900">Navigation</h3>
            <ul className="space-y-2 text-stone-500">
              <li><Link href="/guides" className="hover:text-gold-700">Tous les guides</Link></li>
              <li><Link href="/a-propos" className="hover:text-gold-700">À propos</Link></li>
              <li><Link href="/cgu" className="hover:text-gold-700">CGU</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-navy-900">Contact</h3>
            <ul className="space-y-2 text-stone-500">
              <li>
                <a href="mailto:contact@guido.fr" className="hover:text-gold-700">
                  contact@guido.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-200 py-6 text-center text-sm text-stone-400">
        © {new Date().getFullYear()} Guido — Tous droits réservés.
      </div>
    </footer>
  );
}
