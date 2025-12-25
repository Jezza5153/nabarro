import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Shell } from "@/components/shell";
import { SiteHeader } from "@/components/site-header";
import { LanguageProvider } from "@/lib/language-provider";
import { LocaleMetadata } from "@/components/locale-metadata";
import { project } from "@/content/project";

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

const BRAND = project.meta.brand;

export const metadata: Metadata = {
  metadataBase: new URL("https://nabarro.vercel.app"),
  title: {
    default: `${BRAND} — Adult Swimming Coaching in English (Zeeland)`,
    template: `%s — ${BRAND}`,
  },
  description:
    "Calm, private swimming coaching for adults in Zeeland. English-speaking coach focused on confidence, water safety, and technique.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BRAND} — Adult Swimming Coaching in English (Zeeland)`,
    description:
      "Calm, private, judgement-free adult swimming lessons in Zeeland. Build confidence, safety, and technique step-by-step.",
    url: "https://nabarro.vercel.app",
    siteName: BRAND,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: BRAND,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} — Adult Swimming Coaching in English (Zeeland)`,
    description:
      "Calm, private adult swimming coaching in Zeeland. Confidence, water safety, and technique — step-by-step.",
    images: ["/og-image.png"],
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
  themeColor: "#0B1022",
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
