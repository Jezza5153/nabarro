// app/about/page.tsx
"use client";

import Image from "next/image";
import ContactForm from "@/components/contact-form";
import { project } from "@/content/project";
import { useLanguage } from "@/lib/language-provider";
import { getCopy } from "@/lib/i18n";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const { locale } = useLanguage();
  const t = getCopy(locale).about;
  const profileImage = PlaceHolderImages.find((img) => img.id === 'nathalie-profile');

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
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center md:justify-end">
             {profileImage && (
              <div className="relative w-full max-w-[420px]">
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  data-ai-hint={profileImage.imageHint}
                  width={600}
                  height={750}
                  priority
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 md:mt-24">
            <div className="mx-auto max-w-xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Ask a question</h2>
                 <p className="mt-4 text-muted-foreground md:text-lg">
                    Curious if this is right for you? Feel free to send a message.
                </p>
            </div>
            <div className="mx-auto mt-10 w-full max-w-lg space-y-8">
                <ContactForm />
            </div>
        </div>

      </div>
    </div>
  );
}
