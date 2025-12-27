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
  Check,
} from "lucide-react";

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
    title: "Gentle pace, real progress",
    description:
      "We start with breathing and balance so your body learns to relax in the water. Then we build skills.",
  },
  {
    icon: ShieldCheck,
    title: "Safe and judgement-free",
    description:
      "No forcing, no shouting. Just clear steps, supportive coaching, and zero embarrassment.",
  },
  {
    icon: HeartHandshake,
    title: "Adult-focused and inclusive",
    description:
      "For anyone who prefers English, including locals, expats, and visitors. Beginners to technique work.",
  },
] as const;

function Step({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/35 bg-white/18 p-6 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-transparent" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/20 px-3 py-1 text-xs font-semibold text-foreground/80">
          <span className="font-bold">{number}</span>
          <span>Step</span>
        </div>
        <div className="mt-3 font-headline text-lg font-bold">{title}</div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const { locale } = useLanguage();
  const t = getCopy(locale);

  const heroImage =
    PlaceHolderImages.find((img) => img.id === "hero-calm-water") ??
    PlaceHolderImages[0];

  const homeFacts = (t as any)?.homeFacts ?? {
    languages: "Languages possible: English, French, Spanish",
    location: "Location: Zeeland (exact pool location shared after registration)",
    format: "Small groups • At your own pace • 45 min per class",
  };

  return (
    <div className="flex-1">
      {/* HERO STAGE */}
      <section className="relative">
        <div className="watery-bg relative">
          {/* Caustics overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-soft-light"
            style={{
              backgroundImage: "url(/pics/water-caustics.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Top fade */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/35 to-transparent"
          />
          {/* Gentle vignette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(75%_65%_at_40%_10%,black,transparent)] bg-white/25"
          />

          <div className="container relative py-10 md:py-16 lg:py-20">
            <div className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/18 p-8 shadow-2xl backdrop-blur md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-transparent" />

              <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
                {/* LEFT */}
                <div className="flex flex-col items-start space-y-5">
                  <Badge
                    variant="outline"
                    className="rounded-full border-white/40 bg-white/30 px-4 py-1"
                  >
                    {t.hero.kicker}
                  </Badge>

                  <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    {t.hero.title}
                  </h1>

                  <p className="max-w-[650px] text-muted-foreground md:text-xl leading-relaxed">
                    {t.hero.subtitle}
                  </p>

                  {/* Facts */}
                  <div className="w-full space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <Languages className="h-4 w-4 mt-0.5" />
                      <span>{homeFacts.languages}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5" />
                      <span>{homeFacts.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 mt-0.5" />
                      <span>{homeFacts.format}</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <Button asChild size="lg" className="rounded-full">
                      <Link href="/contact">{t.hero.cta_main}</Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full bg-white/25 backdrop-blur border-white/40 hover:bg-white/35"
                    >
                      <Link href="/lessons">{t.hero.cta_secondary}</Link>
                    </Button>
                  </div>

                  {/* Try-out highlight */}
                  <div className="w-full rounded-2xl border border-white/40 bg-white/22 p-4 backdrop-blur">
                    <div className="text-sm">
                      <div className="font-semibold">
                        Try-out lesson: €20 (45 min)
                      </div>
                      <div className="text-muted-foreground">
                        Pre-registration is required.
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT — IMAGE (FULL IMAGE + MELT INTO BACKGROUND) */}
                <div className="flex items-center justify-center lg:justify-end">
                  {heroImage ? (
                    <div className="w-full max-w-[560px]">
                      {/* No “card/frame”. Just a soft melted image layer. */}
                      <div
                        className="relative w-full"
                        style={{
                          WebkitMaskImage:
                            "radial-gradient(85% 75% at 55% 45%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
                          maskImage:
                            "radial-gradient(85% 75% at 55% 45%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
                        }}
                      >
                        {/* Match your real image ratio: 1376x768 */}
                        <div className="relative w-full aspect-[1376/768]">
                          <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description ?? "Gentle adult swimming coaching"}
                            data-ai-hint={heroImage.imageHint}
                            fill
                            priority
                            sizes="(min-width: 1024px) 560px, 100vw"
                            className="object-contain"
                          />

                          {/* Soft “water haze” so it blends (kills the gallery feel) */}
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0"
                            style={{
                              background:
                                "radial-gradient(60% 55% at 40% 30%, rgba(255,255,255,0.20), transparent 65%), linear-gradient(to bottom, rgba(255,255,255,0.14), transparent 55%)",
                              mixBlendMode: "soft-light",
                            }}
                          />

                          {/* Slight edge vignette (premium + hides hard AI edges) */}
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0"
                            style={{
                              background:
                                "radial-gradient(80% 70% at 55% 40%, transparent 62%, rgba(0,0,0,0.18) 100%)",
                              opacity: 0.55,
                            }}
                          />
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-white/18 px-3 py-1 backdrop-blur">
                          <Check className="h-3.5 w-3.5" /> Gentle, individual attention
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-white/18 px-3 py-1 backdrop-blur">
                          <Check className="h-3.5 w-3.5" /> Adult-focused
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-white/18 px-3 py-1 backdrop-blur">
                          <Check className="h-3.5 w-3.5" /> Step-by-step
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* “How it works” strip */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Step
                number="01"
                title="Start with comfort"
                body="We begin shallow, focus on breathing and gentle control. No rush, no pressure."
              />
              <Step
                number="02"
                title="Build trust & basics"
                body="Floating, balance, and gentle propulsion. Your confidence grows with clarity."
              />
              <Step
                number="03"
                title="Improve technique"
                body="Once you feel safe and relaxed, we refine strokes and efficiency, at your pace."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1 bg-white/30 border-white/40 backdrop-blur"
            >
              Our approach
            </Badge>

            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Patient coaching for adults who want to feel safe in the water
            </h2>

            <p className="max-w-[760px] text-muted-foreground md:text-xl/relaxed">
              Safety and comfort first, then real progress. Clear steps, steady coaching,
              and a supportive environment.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="rounded-2xl border-white/35 bg-white/18 backdrop-blur transition hover:bg-white/24 hover:border-white/45 hover:-translate-y-[1px]"
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full border border-white/35 bg-white/20 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-white/22 border-white/40 backdrop-blur hover:bg-white/32"
            >
              <Link href="/lessons">
                Discover our approach <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/25 bg-primary p-8 text-center text-primary-foreground shadow-2xl md:p-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to take the first step?
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/85 leading-relaxed">
              A try-out lesson is €20 (45 min). Pre-registration required. Questions first? Send a message.
              You’ll get a clear reply.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-white/12 text-primary-foreground border-white/30 hover:bg-white/18"
              >
                <Link href="/contact">Ask a question</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full font-semibold"
              >
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
