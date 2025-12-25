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
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  {
    icon: Waves,
    title: "Calm & Patient",
    description:
      "Lessons at a relaxed pace, with a focus on confidence, breathing, and comfort in the water.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Judgement-Free",
    description:
      "A secure environment where you build skills step-by-step—without pressure and without shame.",
  },
  {
    icon: HeartHandshake,
    title: "Warm & Inclusive",
    description:
      "Especially for the international community in Zeeland: clear, friendly, and accessible.",
  },
] as const;

export default function Home() {
  const { locale } = useLanguage();
  const t = getCopy(locale);
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-calm-water');

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

          <div className="w-full space-y-4 text-sm text-muted-foreground">
             <div className="flex items-center gap-2">
              <Languages className="h-4 w-4" />
              <span>Languages possible: English, Dutch, French, Spanish</span>
            </div>
             <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Location: Zeeland (exact pool location shared after registration)</span>
            </div>
             <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Small groups • Calm pace • 45 min per class</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <Button asChild size="lg">
              <Link href="/contact">{t.hero.cta_main}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/lessons">{t.hero.cta_secondary}</Link>
            </Button>
          </div>

          {/* First lesson highlight */}
          <div className="mt-2 w-full rounded-xl border bg-background/70 p-4">
            <div className="text-sm">
              <div className="font-medium">{t.firstLesson.title}</div>
              <div className="text-muted-foreground">
                {t.firstLesson.note}
              </div>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="flex items-center justify-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              width={1200}
              height={800}
              priority
              className="rounded-2xl object-cover shadow-lg"
            />
          )}
        </div>
      </section>

      {/* PHILOSOPHY / FEATURES */}
      <section className="py-12 md:py-24 lg:py-32 bg-white/40">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              Our Approach
            </Badge>

            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Learn to swim in a way that feels good
            </h2>

            <p className="max-w-[760px] text-muted-foreground md:text-xl/relaxed">
              Learning to swim doesn't have to be intimidating. We build up your skills calmly, with clear explanations and a focus on safety.
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
           <div className="mt-12 text-center">
              <Button asChild variant="link" size="lg">
                  <Link href="/lessons">Discover our approach <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-lg md:p-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to take the first step?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              Have questions or want to sign up? Get in touch, no strings attached.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Ask a question</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Sign up for a try-out <ArrowRight className="ml-2 h-5 w-5" />
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
