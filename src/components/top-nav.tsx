'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Waves } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#method', label: 'Method' },
  { href: '/#for-you', label: "Who it's for" },
  { href: '/#info', label: 'Info' },
  { href: '/#contact', label: 'Contact' },
];

const NavLink = ({
  href,
  label,
  isMobile,
  onClose,
}: {
  href: string;
  label: string;
  isMobile?: boolean;
  onClose?: () => void;
}) => {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', updateHash);
    updateHash();
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);
  
  const fullPath = pathname + currentHash;
  const isActive = fullPath === href || (href === '/#home' && (fullPath === '/' || fullPath === '/#'));

  return (
    <Link
      href={href}
      onClick={onClose}
      className={cn(
        'transition-colors font-medium hover:text-accent-foreground/80',
        isActive ? 'text-accent-foreground font-bold' : 'text-accent-foreground/60',
        isMobile && 'text-xl py-2'
      )}
    >
      {label}
    </Link>
  );
};

const Logo = () => (
    <Link href="/#home" className="flex items-center gap-2 font-semibold group">
        <div className="bg-accent p-2 rounded-full group-hover:bg-secondary transition-colors">
            <Waves className="h-6 w-6 text-primary" />
        </div>
        <span className="font-headline text-xl tracking-wide text-accent-foreground group-hover:text-primary transition-colors">swimwith ease</span>
    </Link>
);


export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? 'bg-primary/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      )}>
      <div className="container flex h-20 items-center">
        <div className="mr-6 flex items-center space-x-2">
          <Logo />
        </div>
        <nav className="hidden items-center space-x-6 text-sm md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-accent" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-primary text-accent-foreground border-r-0">
              <div className="flex flex-col gap-8 p-6">
                <div onClick={() => setIsMenuOpen(false)}>
                  <Logo />
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      {...link}
                      isMobile
                      onClose={() => setIsMenuOpen(false)}
                    />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
