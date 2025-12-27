"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { project } from "@/content/project";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function DesktopNavLink({
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
        "relative inline-flex items-center rounded-full px-3.5 py-2 text-sm font-semibold transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        active
          ? "text-foreground"
          : "text-foreground/80 hover:text-foreground"
      )}
    >
      {label}

      {/* active underline pill */}
      <span
        className={cn(
          "pointer-events-none absolute inset-x-2 -bottom-[2px] h-[2px] rounded-full transition-opacity",
          active ? "opacity-100 bg-primary/60" : "opacity-0 bg-primary/40"
        )}
      />
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "group flex items-center justify-between rounded-2xl border px-4 py-3 text-base font-semibold transition",
          "border-white/35 bg-white/18 backdrop-blur hover:bg-white/24",
          active && "bg-white/30 border-white/45 shadow-sm"
        )}
      >
        <span className={cn(active ? "text-foreground" : "text-foreground/90")}>{label}</span>
        <ArrowRight className={cn("h-4 w-4 opacity-60 transition group-hover:opacity-90")} />
      </Link>
    </SheetClose>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const copy = project.i18n.en;
  const nav = copy.nav;
  const header = copy.header;

  const brand = 'Swimcoaching';

  const links = [
    { href: "/lessons", label: nav.lessons },
    { href: "/for-you", label: nav.for_you },
    { href: "/info", label: nav.info },
    { href: "/about", label: nav.about },
  ];

  const contactActive = isActivePath(pathname, "/contact");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b border-white/30",
        "bg-white/35 backdrop-blur-xl",
        "shadow-[0_12px_30px_rgba(2,6,23,0.10)]"
      )}
    >
      <div className="container flex h-16 items-center gap-3">
        {/* BRAND */}
        <Link
          href="/"
          className={cn(
            "group flex items-center gap-3 rounded-2xl px-3 py-2",
            "border border-white/30 bg-white/20 backdrop-blur",
            "shadow-sm transition hover:bg-white/28",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          )}
        >
          {/* Logo: NOT a random avatar circle. Use a soft rounded frame. */}
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/35 bg-white/30">
            <Image
              src="/pics/nabarrocoaching.png?v=2"
              alt={`${brand} logo`}
              fill
              sizes="40px"
              className="object-contain p-1.5"
              priority
            />
          </div>

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
            <DesktopNavLink
              key={l.href}
              href={l.href}
              label={l.label}
              active={isActivePath(pathname, l.href)}
            />
          ))}
        </nav>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-2">
          {/* Desktop CTA */}
          <Button
            asChild
            className={cn(
              "hidden md:inline-flex rounded-full px-5",
              "shadow-sm",
              contactActive
                ? "bg-primary text-primary-foreground"
                : "bg-primary text-primary-foreground hover:bg-primary/92"
            )}
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              {nav.apply}
              <ArrowRight className="h-4 w-4 opacity-90" />
            </Link>
          </Button>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden rounded-full",
                  "bg-white/30 hover:bg-white/45",
                  "border border-white/35 backdrop-blur"
                )}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">{header.menu_label}</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className={cn(
                "w-[340px] p-0",
                "border-l border-white/30",
                "bg-white/20 backdrop-blur-xl"
              )}
            >
              {/* Mobile caustics overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
                style={{
                  backgroundImage: "url(/pics/water-caustics.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className="relative h-full p-5">
                {/* MOBILE HEADER */}
                <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/18 p-4 backdrop-blur">
                  <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/35 bg-white/30">
                    <Image
                      src="/pics/nabarrocoaching.png?v=2"
                      alt={`${brand} logo`}
                      fill
                      sizes="44px"
                      className="object-contain p-1.5"
                    />
                  </div>

                  <div>
                    <div className="font-semibold text-foreground">{brand}</div>
                    <div className="text-sm text-muted-foreground">
                      {header.subtitle}
                    </div>
                  </div>
                </div>

                <Separator className="my-5 bg-white/30" />

                {/* NAV */}
                <div className="grid gap-2">
                  <p className="px-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {header.menu_label}
                  </p>

                  <MobileNavLink
                    href="/"
                    label={header.home_label}
                    active={isActivePath(pathname, "/")}
                  />

                  {links.map((l) => (
                    <MobileNavLink
                      key={l.href}
                      href={l.href}
                      label={l.label}
                      active={isActivePath(pathname, l.href)}
                    />
                  ))}
                </div>

                <Separator className="my-5 bg-white/30" />

                {/* CTA */}
                <div className="space-y-2">
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/92"
                    >
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2">
                        {nav.apply}
                        <ArrowRight className="h-4 w-4 opacity-90" />
                      </Link>
                    </Button>
                  </SheetClose>

                  <p className="text-xs text-muted-foreground text-center">
                    {header.cta_hint}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
