// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake, ShieldCheck, Waves, MapPin, Languages, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { project } from "@/content/project";
import { useLanguage } from "@/lib/language-provider";
import { getCopy } from "@/lib/i18n";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  {
    icon: Waves,
    title: "Calm pace, real progress",
    description:
      "We work on breathing, balance, and simple skills first — so your body learns to relax in the water.",
  },
  {
    icon: ShieldCheck,
    title: "Safe and judgement-free",
    description:
      "No forcing, no shouting. You learn step-by-step, with clear guidance and zero embarrassment.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusive, adult-focused coaching",
    description:
      "For anyone who prefers English over Dutch — locals, expats, and visitors — beginners to technique work.",
  },
] as const;

export default function Home() {
  const { locale } = useLanguage();
  const t = getCopy(locale);

  /**
   * IMPORTANT:
   * Replace this placeholder selection with Nathalie’s real images.
   * Best practice: import a local image from /public or a content registry (not placeholder arrays).
   */
  const heroImage =
    PlaceHolderImages.find((img) => img.id === "hero-calm-water") ?? PlaceHolderImages[0];

  return (
    <div className="flex-1">
      {/* HERO */}
      <section className="watery-bg">
        <div className="container grid lg:grid-cols-2 gap-10 items-center py-12 md:py-24 lg:py-28">
          {/* Left */}
          <div className="flex flex-col items-start space-y-5">
            {/* Keep this calm: no loud yellow promo pill */}
            <Badge variant="outline" className="rounded-full px-4 py-1 bg-white/55 backdrop-blur">
              {t.hero.kicker}
            </Badge>

            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {t.hero.title}
            </h1>

            <p className="max-w-[650px] text-muted-foreground md:text-xl/relaxed">
              {t.hero.subtitle}
            </p>

            <div className="w-full space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Languages className="h-4 w-4 mt-0.5" />
                <span>Languages possible: English, Dutch, French, Spanish</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Location: Zeeland (exact pool location shared after registration)</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5" />
                <span>Small groups • Calm pace • 45 min per class</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Button asChild size="lg">
                <Link href="/contact">{t.hero.cta_main}</Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="bg-white/40 backdrop-blur">
                <Link href="/lessons">{t.hero.cta_secondary}</Link>
              </Button>
            </div>

            {/* Try-out highlight: must be explicit + non-negotiable */}
            <div className="mt-2 w-full rounded-2xl border bg-white/55 backdrop-blur p-4">
              <div className="text-sm">
                <div className="font-medium">Try-out lesson — €20 (45 min)</div>
                <div className="text-muted-foreground">Pre-registration is required.</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center">
            {heroImage ? (
              <div className="w-full max-w-xl">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description ?? "Adult swimming coaching in a calm setting"}
                  data-ai-hint={heroImage.imageHint}
                  width={1200}
                  height={900}
                  priority
                  className="rounded-2xl object-cover shadow-lg w-full aspect-[4/3]"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* APPROACH / FEATURES */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="outline" className="rounded-full px-4 py-1 bg-white/55 backdrop-blur">
              Our approach
            </Badge>

            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Calm coaching for adults who want to feel safe in the water
            </h2>

            <p className="max-w-[760px] text-muted-foreground md:text-xl/relaxed">
              We start with safety and comfort — breathing, balance, and simple control — and build from there.
              Step-by-step, at your pace.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="rounded-2xl bg-white/55 backdrop-blur border">
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

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="bg-white/40 backdrop-blur">
              <Link href="/lessons">
                Discover our approach <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-lg md:p-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to take the first step?
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/85">
              Try-out lesson €20 (45 min). Pre-registration required. Questions first? Send a message — you’ll get a clear reply.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="bg-white/15 text-primary-foreground border-white/30 hover:bg-white/20">
                <Link href="/contact">Ask a question</Link>
              </Button>

              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link href="/contact">
                  Sign up for a try-out <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 text-sm text-primary-foreground/75">
              {project.contact.email}
              {project.contact.phone ? ` • ${project.contact.phone}` : ""}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
