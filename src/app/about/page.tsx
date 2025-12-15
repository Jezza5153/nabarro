// app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { project } from "@/content/project";
import { useLanguage } from "@/lib/language-provider";

export default function AboutPage() {
  const { content } = useLanguage();
  const t = content.about;
  const profileImage = PlaceHolderImages.find((img) => img.id === "nathalie-profile");
  const contact = project.contact;

  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Left */}
          <div className="flex flex-col items-start justify-center space-y-5">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              {t.kicker}
            </div>

            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t.title}
            </h1>

            {/* Main story */}
            <div className="space-y-4 text-muted-foreground md:text-lg whitespace-pre-line">
              <p>{t.story}</p>
            </div>

            {/* Scannable highlights */}
            <div className="w-full rounded-xl border bg-card p-5">
              <h2 className="font-headline text-lg font-semibold">{t.highlights_title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {t.highlights.map(item => (
                  <li key={item.label}>
                    <span className="font-medium text-foreground">{item.label}</span> {item.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="mt-1">
                <Link href="/contact">{t.cta_ask}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/aanmelden">{t.cta_apply}</Link>
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
