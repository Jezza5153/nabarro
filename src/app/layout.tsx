
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Shell } from "@/components/shell";
import { SiteHeader } from "@/components/site-header";
import { LanguageProvider } from "@/lib/language-provider";
import { LocaleMetadata } from "@/components/locale-metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Nabarro Coaching — Adult Swimming Lessons in English",
  description:
    "Private and small-group swimming lessons for adults in Zeeland. English-speaking coach, focused on confidence and water safety. For beginners, fearful swimmers, and technique improvement.",
  openGraph: {
    title: "Nabarro Coaching — Adult Swimming Lessons in English",
    description:
      "Calm, private, and pressure-free swimming lessons for adults in Zeeland.",
    url: "https://nabarro.vercel.app",
    siteName: "Nabarro Coaching",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nabarro Coaching",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, lexendDeca.variable)}>
      <body>
        <LanguageProvider>
          <LocaleMetadata />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-black focus:shadow-lg"
          >
            Skip to content
          </a>

          <Shell>
            <SiteHeader />
            <main id="main-content">
              {children}
            </main>
          </Shell>

          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
