
"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Waves } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-provider";
import { LanguageSwitcher } from "./language-switcher";
import { getCopy } from "@/lib/i18n";

const projectLinks = [
  { href: "/doelstellingen", labelKey: "objectives" },
  { href: "/werkwijze", labelKey: "method" },
  { href: "/doelgroep", labelKey: "audience" },
  { href: "/organisaties", labelKey: "partners" },
  { href: "/gsb", labelKey: "gsb" },
  { href: "/slot", labelKey: "closing" },
] as const;

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold",
        "text-foreground/80 hover:bg-white/70 hover:text-foreground",
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
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[hsl(var(--deep-blue))] text-white shadow-sm">
            <Waves className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[hsl(var(--foreground))]">
              Nabarro Coaching
            </div>
            <div className="text-xs text-[hsl(var(--muted-foreground))]">
              Zwemles voor volwassenen in Engels
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
          {navLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
           <div className="h-4 w-px bg-border mx-2" />
           {projectLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={t[l.labelKey]} />
          ))}
        </nav>

        {/* Right CTA + mobile menu */}
        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            asChild
            className="hidden md:inline-flex rounded-full bg-[hsl(var(--bright-yellow))] text-[hsl(var(--ink))] hover:bg-[hsl(var(--bright-yellow))]/90"
          >
            <Link href="/aanmelden">{t.apply}</Link>
          </Button>

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
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[hsl(var(--deep-blue))] text-white">
                  <Waves className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Nabarro Coaching</div>
                  <div className="text-sm text-muted-foreground">
                    Zwemles in het Engels
                  </div>
                </div>
              </div>

              <Separator className="my-5" />

              <div className="grid gap-2">
                <p className="px-3 text-xs font-semibold text-muted-foreground">MENU</p>
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
                <p className="px-3 text-xs font-semibold text-muted-foreground">{t.project_plan}</p>
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
