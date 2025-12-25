"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-provider";
import { LanguageSwitcher } from "./language-switcher";
import { getCopy } from "@/lib/i18n";
import { project } from "@/content/project";

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition-colors",
        isActive
          ? "bg-white/70 text-foreground"
          : "text-foreground/80 hover:bg-white/55 hover:text-foreground"
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const copy = getCopy(locale);
  const nav = copy.nav;

  // Safe fallbacks if you haven’t added these keys yet
  const mobileMenuLabel = (copy as any)?.header?.menu_label ?? "Menu";
  const mobileHomeLabel = nav.home ?? "Home";
  const mobileSubtitle =
    (copy as any)?.header?.subtitle ?? "Adult swim coaching — calm and private";

  const brand = project.meta.brand;

  const navLinks = [
    { href: "/lessons", label: nav.lessons },
    { href: "/for-you", label: nav.for_you },
    { href: "/info", label: nav.info },
    { href: "/about", label: nav.about },
  ];

  const ctaClass =
    "rounded-full bg-primary text-primary-foreground hover:bg-primary/90";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] bg-white/55 backdrop-blur">
      <div className="container flex h-16 items-center gap-3">
        {/* BRAND */}
        <Link href="/" className="flex items-center gap-2 mr-3">
          <Image
            src="/pics/nabarrocoaching.png"
            alt={`${brand} logo`}
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="hidden sm:inline text-sm font-semibold text-foreground">
            {brand}
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              label={l.label}
              isActive={pathname === l.href}
            />
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />

          {/* Desktop CTA */}
          <Button asChild className={cn("hidden md:inline-flex", ctaClass)}>
            <Link href="/contact">{nav.apply}</Link>
          </Button>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full bg-white/55 hover:bg-white/70 border border-[hsl(var(--border))]"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">{mobileMenuLabel}</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] watery-bg">
              {/* MOBILE BRAND */}
              <div className="flex items-center gap-3">
                <Image
                  src="/pics/nabarrocoaching.png"
                  alt={`${brand} logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <div>
                  <div className="font-semibold">{brand}</div>
                  <div className="text-sm text-muted-foreground">{mobileSubtitle}</div>
                </div>
              </div>

              <Separator className="my-5" />

              <div className="grid gap-2">
                <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {mobileMenuLabel}
                </p>

                <Link
                  href="/"
                  className={cn(
                    "rounded-xl px-3 py-2 text-base font-semibold transition-colors",
                    pathname === "/" ? "bg-white/70" : "hover:bg-white/55"
                  )}
                >
                  {mobileHomeLabel}
                </Link>

                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "rounded-xl px-3 py-2 text-base font-semibold transition-colors",
                      pathname === l.href ? "bg-white/70" : "hover:bg-white/55"
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <Separator className="my-5" />

              <Button asChild className={cn("w-full", ctaClass)}>
                <Link href="/contact">{nav.apply}</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
