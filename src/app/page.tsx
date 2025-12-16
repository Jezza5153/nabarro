// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Waves,
  MapPin,
  Languages,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { project } from "@/content/project";
import { useLanguage } from "@/lib/language-provider";
import { getCopy } from "@/lib/i18n";

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
  const { locale } = useLanguage();
  const t = getCopy(locale);

  const firstLesson = t.firstLesson;
  const prices = t.prices;

  return (
    <div className="flex-1">
      {/* HERO */}
      <section className="container grid lg:grid-cols-2 gap-10 items-center py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-start space-y-5">
          <Badge variant="secondary" className="rounded-full px-4 py-1">
            {t.hero.kicker}
          </Badge>

          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="max-w-[650px] text-muted-foreground md:text-xl/relaxed">
            {t.hero.subtitle}
          </p>

          {/* Trust strip */}
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
              <Link href="/aanmelden">{t.hero.cta_main}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">{t.hero.cta_secondary}</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/docs/zwemles-aanvraag.pdf">{t.hero.cta_pdf}</Link>
            </Button>
          </div>

          {/* First lesson highlight */}
          <div className="mt-2 w-full rounded-xl border bg-background/70 p-4">
            <div className="text-sm">
              <div className="font-medium">{firstLesson.title}</div>
              <div className="text-muted-foreground">
                {firstLesson.date} • {firstLesson.time}
              </div>
              <div className="text-muted-foreground">
                {firstLesson.location}
              </div>
              <div className="text-muted-foreground">{firstLesson.note}</div>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="flex items-center justify-center">
          <Image
            src="/pics/home1.jpg"
            alt="Rustige zwemles voor volwassenen in Zeeland – leren zwemmen met vertrouwen, veiligheid en geduld"
            width={1200}
            height={800}
            priority
            className="rounded-2xl object-cover shadow-lg"
          />
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
              Leren zwemmen hoeft niet hard of spannend te zijn. We bouwen rustig
              op, met duidelijke uitleg en aandacht voor veiligheid.
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
                    <CardTitle className="text-lg">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prijzen" className="py-12 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              Prijzen
            </Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Simpel en transparant
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {prices.map((p) => (
              <Card key={p.product} className="rounded-2xl bg-background/80">
                <CardHeader>
                  <CardTitle className="text-base">{p.product}</CardTitle>
                  <CardDescription>
                    {p.validity ? `Geldigheid: ${p.validity}` : " "}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-2xl font-semibold">
                  {p.price}
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
              Heeft u vragen of wilt u zich aanmelden? Neem vrijblijvend contact
              op.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary">
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
