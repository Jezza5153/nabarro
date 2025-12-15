
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
  title: "Nabarro Coaching — Zwemles voor volwassenen in Engels",
  description:
    "Veilige, rustige en toegankelijke zwemlessen voor volwassenen in het Engels (en Frans) in Zeeland.",
  openGraph: {
    title: "Nabarro Coaching — Zwemles voor volwassenen in Engels",
    description:
      "Veilige, rustige en toegankelijke zwemlessen voor volwassenen in Zeeland.",
    url: "https://nabarrocoaching.com",
    siteName: "Nabarro Coaching",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nabarro Coaching",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={cn("scroll-smooth", inter.variable, lexendDeca.variable)}>
      <body>
        <LanguageProvider>
          <LocaleMetadata />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-black focus:shadow-lg"
          >
            Ga naar inhoud
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
