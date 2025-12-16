"use client";

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-provider";
import { LanguageSwitcher } from "./language-switcher";
import { getCopy } from "@/lib/i18n";

const projectLinks = [
  { href: "/doelstellingen", labelKey: "objectives" },
  { href: "/werkwijze", labelKey: "method" },
  { href: "/doelgroep", labelKey: "audience" },
] as const;

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold",
        "text-foreground/80 hover:bg-white/70 hover:text-foreground"
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const { locale } = useLanguage();
  const t = getCopy(locale).nav;

  const navLinks = [
    { href: "/about", label: t.about },
    { href: "/lessons", label: t.lessons },
    { href: "/for-you", label: t.for_you },
    { href: "/info", label: t.info },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/55 backdrop-blur">
      <div className="container flex h-16 items-center gap-3">
        {/* BRAND */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image
              src="/pics/nabarrocoaching.jpg"
              alt="Nabarro Coaching logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold text-[hsl(var(--foreground))]">
              Nabarro Coaching
            </div>
            <div className="text-xs text-[hsl(var(--muted-foreground))]">
              Zwemles voor volwassenen • Engels & Frans
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
          {navLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
          <div className="mx-2 h-4 w-px bg-border" />
          {projectLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={t[l.labelKey]} />
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />

          <Button
            asChild
            className="hidden md:inline-flex rounded-full bg-[hsl(var(--bright-yellow))] text-[hsl(var(--ink))] hover:bg-[hsl(var(--bright-yellow))]/90"
          >
            <Link href="/aanmelden">{t.apply}</Link>
          </Button>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full bg-white/70 hover:bg-white border border-white/50"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px]">
              {/* MOBILE BRAND */}
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/pics/nabarrocoaching.jpg"
                    alt="Nabarro Coaching logo"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">Nabarro Coaching</div>
                  <div className="text-sm text-muted-foreground">
                    Zwemles voor volwassenen
                  </div>
                </div>
              </div>

              <Separator className="my-5" />

              <div className="grid gap-2">
                <p className="px-3 text-xs font-semibold text-muted-foreground">
                  MENU
                </p>
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-base font-semibold hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <Separator className="my-5" />

              <div className="grid gap-2">
                <p className="px-3 text-xs font-semibold text-muted-foreground">
                  {t.project_plan}
                </p>
                {projectLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-base font-semibold hover:bg-muted"
                  >
                    {t[l.labelKey]}
                  </Link>
                ))}
              </div>

              <Separator className="my-5" />

              <Button
                asChild
                className="w-full rounded-full bg-[hsl(var(--bright-yellow))] text-[hsl(var(--ink))] hover:bg-[hsl(var(--bright-yellow))]/90"
              >
                <Link href="/aanmelden">{t.apply}</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
