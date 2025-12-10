import Link from 'next/link';
import Logo from '@/components/logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <div className="w-fit">
                <Logo />
            </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with calm and care.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-right">
          © {currentYear} swimwith ease. All rights reserved. {' '}
          <Link href="/contact" className="underline underline-offset-4 hover:text-primary">
            Get in touch
          </Link>.
        </p>
      </div>
    </footer>
  );
}
