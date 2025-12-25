// app/about/page.tsx
"use client";

import Image from "next/image";
import ContactForm from "@/components/contact-form";
import { useLanguage } from "@/lib/language-provider";
import { getCopy } from "@/lib/i18n";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const { locale } = useLanguage();
  const copy = getCopy(locale);
  const t = copy.about;

  // IMPORTANT: Replace PlaceHolderImages with real Nathalie photos from /public ASAP.
  const profileImage =
    PlaceHolderImages.find((img) => img.id === "nathalie-profile") ?? PlaceHolderImages[0];

  // If you haven't added i18n keys for this section yet, we fallback to English.
  const askTitle =
    (copy as any)?.about?.ask_title ?? "Ask a question";
  const askSubtitle =
    (copy as any)?.about?.ask_subtitle ?? "Curious if this is right for you? Feel free to send a message.";

  return (
    <div className="py-12 md:py-24 lg:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-start">
          {/* LEFT — TEXT */}
          <div className="flex flex-col space-y-6">
            <Badge
              variant="outline"
              className="w-fit rounded-full bg-white/55 backdrop-blur px-4 py-1"
            >
              {t.kicker}
            </Badge>

            <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.title}
            </h1>

            <div className="max-w-prose whitespace-pre-line text-muted-foreground md:text-lg leading-relaxed">
              {t.story}
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center md:justify-end">
            {profileImage ? (
              <div className="w-full max-w-[420px]">
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description ?? "Nathalie, adult swimming coach in Zeeland"}
                  data-ai-hint={profileImage.imageHint}
                  width={720}
                  height={900}
                  priority
                  className="rounded-2xl object-cover shadow-lg w-full aspect-[4/5]"
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* ASK QUESTION */}
        <section className="mt-16 md:mt-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              {askTitle}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
              {askSubtitle}
            </p>
          </div>

          <div className="mx-auto mt-10 w-full max-w-lg">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
