import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Waves } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#inleiding", label: "1. Inleiding" },
  { href: "#doelen", label: "2. Doelstellingen" },
  { href: "#werkwijze", label: "3. Werkwijze" },
  { href: "#doelgroep", label: "4. Doelgroep" },
  { href: "#betrokkenheid", label: "5. Betrokkenheid" },
  { href: "#organisaties", label: "6. Organisaties" },
  { href: "#gsb", label: "7. GSB" },
  { href: "#slot", label: "8. Slot" },
];

function PillLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className={cn(
        "whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold",
        "bg-white/70 text-[hsl(var(--foreground))] hover:bg-white",
        "border border-white/50 shadow-sm"
      )}
    >
      {label}
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/55 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
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

        {/* Desktop pill nav */}
        <nav className="hidden md:flex flex-1 items-center gap-2 overflow-x-auto px-2">
          {navLinks.map((l) => (
            <PillLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>

        {/* Right CTA + mobile menu */}
        <div className="ml-auto flex items-center gap-2">
          <Button
            asChild
            className="hidden md:inline-flex rounded-full bg-[hsl(var(--bright-yellow))] text-[hsl(var(--ink))] hover:bg-[hsl(var(--bright-yellow))]/90"
          >
            <a href="#aanmelden">Aanmelden</a>
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
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-base font-semibold hover:bg-muted"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <Separator className="my-5" />

              <Button
                asChild
                className="w-full rounded-full bg-[hsl(var(--bright-yellow))] text-[hsl(var(--ink))] hover:bg-[hsl(var(--bright-yellow))]/90"
              >
                <a href="#aanmelden">Aanmelden</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
