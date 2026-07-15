import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultDescription =
  "Guido publie des guides pratiques ultra-ciblés sur des sujets précis que personne d'autre ne traite en détail. Pas de blabla, juste des réponses concrètes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Guides pratiques ultra-ciblés sur des sujets précis — Guido",
    template: `%s — ${SITE_NAME}`,
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Guides pratiques ultra-ciblés sur des sujets précis — Guido",
    description: defaultDescription,
    images: [{ url: absoluteUrl("/logo-mark-512.png"), width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides pratiques ultra-ciblés sur des sujets précis — Guido",
    description: defaultDescription,
    images: [absoluteUrl("/logo-mark-512.png")],
  },
};

// [LIEN PINTEREST] et [LIEN INSTAGRAM] : à remplacer par les vraies URLs des
// comptes Guido dès qu'ils existent (voir récapitulatif SEO pour le suivi).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/logo-mark-512.png"),
  sameAs: ["[LIEN PINTEREST]", "[LIEN INSTAGRAM]"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/guides?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#fdfbf7] text-navy-900">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
