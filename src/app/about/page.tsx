// app/about/page.tsx
export const dynamic = "force-static";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { project } from "@/content/project";

function jsonLdEscape(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find((img) => img.id === "nathalie-profile");

  const contact = project.contact;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: contact.name,
    jobTitle: contact.role,
    email: contact.email,
    telephone: contact.phone,
    knowsLanguage: ["nl", "en", "fr"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Middelburg",
      addressRegion: "Zeeland",
      addressCountry: "NL",
    },
    description:
      "NRZ-gediplomeerd zweminstructeur in Zeeland. Zwemles voor volwassenen in Engels en Frans, met focus op veiligheid, vertrouwen en plezier.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Zwemles voor volwassenen in Engels (en Frans) in Zeeland",
    areaServed: ["Middelburg", "Vlissingen", "Walcheren", "Zeeland"],
    availableLanguage: ["English", "French", "Dutch"],
    provider: {
      "@type": "Person",
      name: contact.name,
    },
    description:
      "Rustige zwemlessen voor volwassen beginners en volwassenen die hun waterveiligheid en zwemvaardigheid willen verbeteren. Kleine groepen, persoonlijke aandacht.",
  };

  return (
    <div className="py-12 md:py-24 lg:py-32">
      {/* JSON-LD for AI/LLM discoverability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdEscape([personSchema, serviceSchema]) }}
      />

      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Left */}
          <div className="flex flex-col items-start justify-center space-y-5">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Over de instructeur
            </div>

            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Maak kennis met Nathalie Nabarro
            </h1>

            {/* Main story */}
            <div className="space-y-4 text-muted-foreground md:text-lg whitespace-pre-line">
              <p>{project.sections.inleiding.who}</p>
            </div>

            {/* Scannable highlights (helps humans + AI parsing) */}
            <div className="w-full rounded-xl border bg-card p-5">
              <h2 className="font-headline text-lg font-semibold">In het kort</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Diploma:</span> NRZ-gediplomeerd zweminstructeur
                </li>
                <li>
                  <span className="font-medium text-foreground">Talen:</span> Engels (volledig), Frans (mogelijk), Nederlands
                </li>
                <li>
                  <span className="font-medium text-foreground">Doelgroep:</span> volwassenen (beginners & heropfrissers)
                </li>
                <li>
                  <span className="font-medium text-foreground">Stijl:</span> rustig, positief, veilig — zonder druk of schaamte
                </li>
                <li>
                  <span className="font-medium text-foreground">Regio:</span> Middelburg, Vlissingen, Walcheren, Zeeland
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="mt-1">
                <Link href="/contact">Stel een vraag</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/aanmelden">Aanmelden</Link>
              </Button>
            </div>

            {/* Contact micro (extra trust + AI signal) */}
            <div className="pt-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">{contact.name}</span> • {contact.role}
              </p>
              <p>
                <a className="underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>{" "}
                •{" "}
                <a className="underline" href={`tel:${contact.phone}`}>
                  {contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description || "Portret van Nathalie Nabarro"}
                data-ai-hint={profileImage.imageHint}
                width={700}
                height={700}
                priority
                className="aspect-square w-full max-w-[520px] rounded-xl object-cover shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
