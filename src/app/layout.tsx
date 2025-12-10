import type { Metadata } from 'next';
import { PT_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'SwimSafe Coaching | Calm Adult Swimming Lessons in Zeeland',
  description:
    'A calm, welcoming, and low-pressure place to learn how to swim as an adult. Serving international adults in the Middelburg and Vlissingen region.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          ptSans.variable,
          playfair.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
