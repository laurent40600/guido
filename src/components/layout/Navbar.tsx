import Link from "next/link";
import Form from "next/form";
import { Search, ShoppingCart } from "lucide-react";
import Logo from "@/components/layout/Logo";
import LogoutButton from "@/components/auth/LogoutButton";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";

const navLinks = [
  { label: "Guides", href: "/guides" },
  { label: "Prompts", href: "/prompts" },
  { label: "À propos", href: "/a-propos" },
];

export default async function Navbar() {
  const session = await getSession();
  const cartCount = session
    ? await db.cartItem.count({ where: { userId: session.userId } })
    : 0;

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fdfbf7]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="shrink-0">
          <Logo className="h-14" />
        </Link>

        <Form
          action="/guides"
          className="hidden max-w-xs flex-1 items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2.5 lg:flex"
        >
          <Search size={18} className="shrink-0 text-stone-400" />
          <input
            type="search"
            name="q"
            placeholder="Rechercher un guide…"
            aria-label="Rechercher un guide"
            className="w-full bg-transparent text-base text-navy-900 outline-none placeholder:text-stone-400"
          />
        </Form>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-stone-600 transition hover:text-gold-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {session ? (
            <>
              <Link
                href="/panier"
                className="relative text-stone-600 transition hover:text-gold-700"
                aria-label="Mon panier"
              >
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-600 px-1 text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link
                href="/compte"
                className="hidden text-base font-semibold text-stone-600 transition hover:text-gold-700 sm:block"
              >
                Mon compte
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/connexion"
                className="hidden text-base font-semibold text-stone-600 transition hover:text-gold-700 sm:block"
              >
                Connexion
              </Link>
              <Link
                href="/inscription"
                className="rounded-xl bg-navy-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-gold-700"
              >
                S&apos;inscrire
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
