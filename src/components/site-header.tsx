import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Waves } from "lucide-react"
import { Separator } from "./ui/separator"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/doelstellingen", label: "Doelstellingen" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/doelgroep", label: "Doelgroep" },
  { href: "/organisaties", label: "Partners" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Waves className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              swimwith ease
            </span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild className="hidden md:inline-flex">
              <Link href="/aanmelden">Aanmelden</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                   <Link href="/" className="flex items-center space-x-2 mb-4">
                      <Waves className="h-6 w-6 text-primary" />
                      <span className="font-bold">swimwith ease</span>
                    </Link>
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                      {label}
                    </Link>
                  ))}
                   <Separator className="my-2" />
                   <Button asChild>
                    <Link href="/aanmelden">Aanmelden</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
