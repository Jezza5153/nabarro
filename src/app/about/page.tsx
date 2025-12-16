// app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { project } from "@/content/project";
import { useLanguage } from "@/lib/language-provider";
import { getCopy } from "@/lib/i18n";

export default function AboutPage() {
  const { locale } = useLanguage();
  const t = getCopy(locale).about;
  const contact = project.contact;

  return (
    <div className="py-12 md:py-24 lg:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-start">
          
          {/* LEFT — TEXT */}
          <div className="flex flex-col space-y-6">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground w-fit">
              {t.kicker}
            </div>

            <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.title}
            </h1>

            {/* Story */}
            <div className="space-y-4 text-muted-foreground md:text-lg whitespace-pre-line max-w-prose">
              {t.story}
            </div>

            {/* Highlights */}
            <div className="w-full rounded-xl border bg-card p-5">
              <h2 className="font-headline text-lg font-semibold">
                {t.highlights_title}
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {t.highlights.map((item) => (
                  <li key={item.label}>
                    <span className="font-medium text-foreground">
                      {item.label}
                    </span>{" "}
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <Button asChild size="lg">
                <Link href="/contact">{t.cta_ask}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/aanmelden">{t.cta_apply}</Link>
              </Button>
            </div>

            {/* Contact micro */}
            <div className="pt-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">
                  {contact.name}
                </span>{" "}
                • {contact.role}
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

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[420px]">
              <Image
                src="/pics/nathalie.jpg"
                alt="Nathalie Nabarro – zweminstructeur voor volwassenen in Zeeland"
                width={600}
                height={750}
                priority
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
// 