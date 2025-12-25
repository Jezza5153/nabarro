import "./globals.css";
import type { Metadata, Viewport } from "next";
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
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nabarro.vercel.app"),
  title: {
    default: "Nabarro Coaching — Adult Swimming Lessons in English",
    template: "%s — Nabarro Coaching",
  },
  description:
    "Private and small-group swimming lessons for adults in Zeeland. English-speaking coach focused on confidence, water safety, and stroke improvement.",
  alternates: {
    canonical: "/",
    // If you support locales, wire these to real routes.
    // If you DON'T have locale routes, remove this.
    languages: {
      "en": "/",
      "nl": "/nl",
      "fr": "/fr",
      "es": "/es",
    },
  },
  openGraph: {
    title: "Nabarro Coaching — Adult Swimming Lessons in English",
    description: "Calm, private, and pressure-free swimming lessons for adults in Zeeland.",
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
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B1022", // use your deep-blue equivalent if you want browser chrome to match
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth", inter.variable, lexendDeca.variable)}
    >
      <body className={cn("min-h-screen font-sans antialiased")}>
        <LanguageProvider>
          <LocaleMetadata />

          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground focus:shadow-lg"
          >
            Skip to content
          </a>

          <Shell>
            <SiteHeader />
            <main id="main-content">{children}</main>
          </Shell>

          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
