// app/page.tsx
export const dynamic = "force-static";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake, ShieldCheck, Waves, MapPin, Languages, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { project } from "@/content/project";

function jsonLdEscape(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const features = [
  {
    icon: Waves,
    title: "Kalm & geduldig",
    description:
      "Lessen in een rustig tempo, met focus op vertrouwen, ademhaling en comfort in het water.",
  },
  {
    icon: ShieldCheck,
    title: "Veilig & zonder oordeel",
    description:
      "Een veilige omgeving waar u stap voor stap opbouwt — zonder druk en zonder schaamte.",
  },
  {
    icon: HeartHandshake,
    title: "Warm & inclusief",
    description:
      "Speciaal afgestemd op de internationale gemeenschap in Zeeland: duidelijk, vriendelijk en toegankelijk.",
  },
] as const;

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-calm-water");

  const firstLesson = project.sections.inleiding.firstLesson;
  const prices = project.sections.inleiding.prices;

  // Keep it short & high-intent: these are the questions AI + humans ask
  const faq = project.ai?.faq?.length
    ? project.ai.faq
    : [
        {
          q: "Kan ik zwemles volgen zonder Nederlands te spreken?",
          a: "Ja. De lessen zijn volledig Engelstalig. Frans is ook mogelijk. U hoeft dus niet eerst Nederlands te beheersen om te leren zwemmen.",
        },
        {
          q: "Voor wie zijn de lessen bedoeld?",
          a: "Voor volwassenen die (nog) niet kunnen zwemmen of hun waterveiligheid willen verbeteren: internationale studenten, expats, arbeidsmigranten en nieuwe inwoners in Zeeland.",
        },
        {
          q: "Hoe groot zijn de groepen?",
          a: "Kleine groepen van maximaal vijf volwassenen, ingedeeld op niveau.",
        },
      ];

  // Brand: user instruction
  const brandName = "Nabarro Coaching";

  // Structured data (AI-findable)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandName,
    email: project.contact.email,
    telephone: project.contact.phone,
    areaServed: project.meta?.locations ?? ["Middelburg", "Vlissingen", "Walcheren", "Zeeland"],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brandName,
    email: project.contact.email,
    telephone: project.contact.phone,
    areaServed: project.meta?.locations ?? ["Middelburg", "Vlissingen", "Walcheren", "Zeeland"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Middelburg",
      addressRegion: "Zeeland",
      addressCountry: "NL",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Zwemles voor volwassenen in Engels (en Frans) in Zeeland",
    provider: { "@type": "Organization", name: brandName },
    areaServed: project.meta?.locations ?? ["Middelburg", "Vlissingen", "Walcheren", "Zeeland"],
    availableLanguage: project.meta?.languagesOffered ?? ["English", "French", "Dutch"],
    description:
      project.ai?.primaryOffer ??
      "Rustige zwemlessen voor volwassenen in Zeeland — volledig in het Engels, Frans mogelijk. Kleine groepen, focus op waterveiligheid, vertrouwen en plezier.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="flex-1">
      {/* JSON-LD for AI/LLM discoverability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdEscape([orgSchema, localBusinessSchema, serviceSchema, faqSchema]),
        }}
      />

      {/* HERO */}
      <section className="container grid lg:grid-cols-2 gap-10 items-center py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-start space-y-5">
          <Badge variant="secondary" className="rounded-full px-4 py-1">
            {project.hero.kicker}
          </Badge>

          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {project.hero.title}
          </h1>

          <p className="max-w-[650px] text-muted-foreground md:text-xl/relaxed">
            {project.hero.subtitle}
          </p>

          {/* “Trust strip” */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4" />
              <span>Engels (volledig) • Frans mogelijk</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Middelburg • Vlissingen • Walcheren</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Kleine groepen • rustig tempo</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <Button asChild size="lg">
              <Link href={project.hero.ctas[0].href}>{project.hero.ctas[0].label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Meer over de lessen</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href={project.hero.ctas[1].href}>Download PDF</Link>
            </Button>
          </div>

          {/* First lesson highlight (soft, non-salesy) */}
          <div className="mt-2 w-full rounded-xl border bg-background/70 p-4">
            <div className="text-sm">
              <div className="font-medium">Eerstvolgende startles</div>
              <div className="text-muted-foreground">
                {firstLesson.date} • {firstLesson.time}
              </div>
              <div className="text-muted-foreground">{firstLesson.location}</div>
              <div className="text-muted-foreground">{firstLesson.note}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={1200}
              height={800}
              priority
              className="rounded-2xl object-cover shadow-lg"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </section>

      {/* PHILOSOPHY / FEATURES */}
      <section className="py-12 md:py-24 lg:py-32 bg-white/40">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              Onze aanpak
            </Badge>

            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Volwassenen leren zwemmen, op een manier die goed voelt
            </h2>

            <p className="max-w-[760px] text-muted-foreground md:text-xl/relaxed">
              Leren zwemmen hoeft niet hard of spannend te zijn. We bouwen rustig op, met duidelijke uitleg
              en aandacht voor veiligheid — zodat u stap voor stap vertrouwen krijgt.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-background/80 rounded-2xl">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick “who it’s for” */}
          <div className="mx-auto max-w-5xl pt-10">
            <Card className="rounded-2xl bg-background/80">
              <CardHeader>
                <CardTitle>Voor wie is dit?</CardTitle>
                <CardDescription>
                  Internationale studenten, expats, arbeidsmigranten en nieuwe inwoners in Zeeland — en iedereen die liever
                  in het Engels (of Frans) leert.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                U hoeft niet eerst perfect Nederlands te spreken om te leren zwemmen. Integreren kost tijd — het helpt als
                u ook iets kunt doen in een taal die u al beheerst.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PRICES (quiet, transparent) */}
      <section id="prijzen" className="py-12 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              Prijzen
            </Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Simpel en transparant
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Start klein, voel of het bij u past, en bouw daarna rustig verder.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {prices.map((p) => (
              <Card key={p.product} className="rounded-2xl bg-background/80">
                <CardHeader>
                  <CardTitle className="text-base">{p.product}</CardTitle>
                  <CardDescription>{p.validity ? `Geldigheid: ${p.validity}` : " "}</CardDescription>
                </CardHeader>
                <CardContent className="text-2xl font-semibold">{p.price}</CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/aanmelden">Aanmelden</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Eerst een vraag stellen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ (high intent + AI friendly) */}
      <section id="faq" className="py-12 md:py-24 lg:py-28 bg-white/40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              Veelgestelde vragen
            </Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Duidelijkheid geeft rust
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Hieronder staan de vragen die we het vaakst krijgen.
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid gap-6 pt-10 md:grid-cols-2">
            {faq.map((item) => (
              <Card key={item.q} className="rounded-2xl bg-background/80">
                <CardHeader>
                  <CardTitle className="text-base">{item.q}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-lg md:p-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Klaar om de eerste stap te zetten?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              Heeft u vragen of wilt u zich aanmelden? Neem vrijblijvend contact op. Ik help u graag op weg naar meer
              vertrouwen en waterveiligheid.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Stel een vraag</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/aanmelden">
                  Direct aanmelden <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-6 text-sm text-primary-foreground/75">
              {project.contact.email} • {project.contact.phone}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
