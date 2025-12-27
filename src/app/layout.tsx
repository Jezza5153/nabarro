import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site-header";
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
const META = project.i18n.en.meta;

export const metadata: Metadata = {
  metadataBase: new URL("https://nabarro.vercel.app"),
  title: {
    default: META.pageTitle,
    template: `%s — ${BRAND}`,
  },
  description: META.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: META.pageTitle,
    description: META.description,
    url: "https://nabarro.vercel.app",
    siteName: BRAND,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: BRAND }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META.pageTitle,
    description: META.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
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
      <body className="min-h-screen font-sans antialiased">
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 watery-bg" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/10" />
          <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_20%,black,transparent)] bg-white/25" />
          <div className="relative flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground focus:shadow-lg"
            >
              Skip to content
            </a>
            <div className="sticky top-0 z-50">
              <SiteHeader />
            </div>
            <main id="main-content" className="flex-1">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
