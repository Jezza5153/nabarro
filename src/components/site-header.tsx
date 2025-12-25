
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

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        active
          ? "bg-white/70 text-foreground shadow-sm"
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
  const header = (copy as any).header; // REMOVE THIS once you type your i18n; see note below.
  // Strict version should be: const header = copy.header;

  const brand = project.meta.brand;

  const links = [
    { href: "/lessons", label: nav.lessons },
    { href: "/for-you", label: nav.for_you },
    { href: "/info", label: nav.info },
    { href: "/about", label: nav.about },
  ];

  const contactActive = isActivePath(pathname, "/contact");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/50 backdrop-blur">
      <div className="container flex h-16 items-center gap-3">
        {/* BRAND */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2.5 rounded-full pr-3",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          )}
        >
          <Image
            src="/pics/nabarrocoaching.png"
            alt={`${brand} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
            priority
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-foreground">{brand}</div>
            <div className="text-xs text-muted-foreground hidden sm:block">
              {header.subtitle}
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              label={l.label}
              active={isActivePath(pathname, l.href)}
            />
          ))}
        </nav>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />

          <Button
            asChild
            className={cn(
              "hidden md:inline-flex rounded-full",
              contactActive ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            <Link href="/contact">{nav.apply}</Link>
          </Button>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full bg-white/55 hover:bg-white/70 border border-white/40"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">{header.menu_label}</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] watery-bg border-l border-white/40"
            >
              {/* MOBILE HEADER */}
              <div className="flex items-center gap-3">
                <Image
                  src="/pics/nabarrocoaching.png"
                  alt={`${brand} logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <div className="font-semibold">{brand}</div>
                  <div className="text-sm text-muted-foreground">
                    {header.subtitle}
                  </div>
                </div>
              </div>

              <Separator className="my-5" />

              {/* NAV */}
              <div className="grid gap-2">
                <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {header.menu_label}
                </p>

                <Link
                  href="/"
                  className={cn(
                    "rounded-2xl px-3.5 py-2.5 text-base font-semibold transition-colors",
                    isActivePath(pathname, "/") ? "bg-white/70 shadow-sm" : "hover:bg-white/55"
                  )}
                >
                  {header.home_label}
                </Link>

                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "rounded-2xl px-3.5 py-2.5 text-base font-semibold transition-colors",
                      isActivePath(pathname, l.href) ? "bg-white/70 shadow-sm" : "hover:bg-white/55"
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <Separator className="my-5" />

              {/* CTA */}
              <div className="space-y-2">
                <Button asChild className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">{nav.apply}</Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  {header.cta_hint}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
