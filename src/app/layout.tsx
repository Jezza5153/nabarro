import "./globals.css";
import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "swimwith ease — Zwemles voor volwassenen in Engels",
  description: "Veilige, rustige en toegankelijke zwemlessen voor volwassenen in het Engels (en Frans) in Zeeland.",
   openGraph: {
    title: "swimwith ease — Zwemles voor volwassenen in Engels",
    description: "Veilige, rustige en toegankelijke zwemlessen voor volwassenen in Zeeland.",
    url: "https://swimwithease.com", // Replace with your actual domain
    siteName: "swimwith ease",
    // images: [ // Add a link to your OG image
    //   {
    //     url: 'https://swimwithease.com/og-image.png',
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={cn(inter.variable, "font-sans")}>
         <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:z-50 top-4 left-4 bg-white text-black p-3 rounded-lg shadow-lg">
          Skip to main content
        </a>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
