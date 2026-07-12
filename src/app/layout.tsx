import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guido — Des guides ultra-précis pour des questions ultra-précises",
  description:
    "Guido publie des guides pratiques ultra-ciblés sur des sujets précis que personne d'autre ne traite en détail. Pas de blabla, des réponses concrètes.",
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
        {children}
      </body>
    </html>
  );
}
