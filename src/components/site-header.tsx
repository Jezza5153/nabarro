import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Waves } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/about", label: "Over Mij" },
    { href: "/lessons", label: "De Lessen" },
    { href: "/for-you", label: "Voor Wie?" },
    { href: "/info", label: "Praktische Info" },
];

const projectLinks = [
  { href: "/doelstellingen", label: "Doelstellingen" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/doelgroep", label: "Doelgroep" },
  { href: "/organisaties", label: "Partners" },
  { href: "/gsb", label: "GSB" },
  { href: "/slot", label: "Slot" },
]

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
              Swim with Ease
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
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>

        {/* Right CTA + mobile menu */}
        <div className="ml-auto flex items-center gap-2">
          <Button
            asChild
            className="hidden md:inline-flex rounded-full bg-[hsl(var(--bright-yellow))] text-[hsl(var(--ink))] hover:bg-[hsl(var(--bright-yellow))]/90"
          >
            <Link href="/aanmelden">Aanmelden</Link>
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
                  <div className="font-semibold">Swim with Ease</div>
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
                <p className="px-3 text-xs font-semibold text-muted-foreground">PROJECTPLAN</p>
                {projectLinks.map((l) => (
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

              <Button
                asChild
                className="w-full rounded-full bg-[hsl(var(--bright-yellow))] text-[hsl(var(--ink))] hover:bg-[hsl(var(--bright-yellow))]/90"
              >
                <Link href="/aanmelden">Aanmelden</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
