// src/app/for-you/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-provider";
import { getCopy } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";

export default function ForYouPage() {
  const { locale } = useLanguage();
  const t = getCopy(locale).for_you;

  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <Badge variant="outline" className="rounded-full bg-white/55 backdrop-blur px-4 py-1">
            {t.kicker}
          </Badge>
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t.title}
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 pt-12 md:grid-cols-2 md:pt-16">
          <div className="space-y-6">
            <h2 className="font-headline text-2xl font-bold tracking-tight">{t.who_title}</h2>
            <ul className="space-y-4">
              {t.who_list.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-2xl font-bold tracking-tight">{t.reassurance_title}</h2>
            <div className="space-y-4">
              {t.reassurances.map((item: { title: string; description: string }) => (
                <Card key={item.title} className="bg-background/80">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <h3 className="font-headline text-2xl font-bold">{t.cta_title}</h3>
          <p className="max-w-prose text-muted-foreground">
            {t.cta_subtitle}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">{t.cta_button}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
