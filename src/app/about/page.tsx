
// app/about/page.tsx
"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import { project } from "@/content/project";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import { Check, ShieldCheck, Waves, HeartHandshake, Star, Languages, MapPin, Users, Activity } from "lucide-react";
import { submitContactForm } from "../actions";

const PORTRAIT_POSITION = "50% 35%"; // tweak later once real photo is in
const PORTRAIT_ASPECT = "1088/992"; // your current image ratio (almost square)

function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-white/35 bg-white/18 shadow-2xl backdrop-blur",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-transparent" />
      {children}
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-white/18 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
      <Check className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function MiniCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/35 bg-white/18 p-6 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/14 via-transparent to-transparent" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="rounded-full border border-white/35 bg-white/20 p-2.5">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="font-semibold">{title}</div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

function InfoListItem({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <Icon className="mt-1 h-4 w-4 shrink-0 text-primary" />
      <div>
        <span className="font-semibold text-foreground/90">{label}:</span>{" "}
        <span className="text-muted-foreground">{value}</span>
      </div>
    </div>
  );
}


export default function AboutPage() {
  const t = project.i18n.en.about;

  const profileImage = PlaceHolderImages.find((img) => img.id === "nathalie-profile");

  const askTitle = t.ask_title;
  const askSubtitle = t.ask_subtitle;

  const story = (t.story ?? "").trim();
  const parts = story.split("\n\n").filter(Boolean);
  const lead = parts[0] ?? story;
  const rest = parts.slice(1).join("\n\n");

  return (
    <div className="pb-16">
      {/* HERO STAGE */}
      <section className="relative">
        <div className="watery-bg relative">
          {/* Caustics overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
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

          <div className="container relative px-4 pb-12 pt-24 md:px-6 md:pb-16 md:pt-28">
            <Surface className="p-8 md:p-12">
              {/* baseline-aligned layout */}
              <div className="grid gap-10 md:grid-cols-12 md:gap-12 items-start">
                {/* LEFT: COPY */}
                <div className="md:col-span-7 lg:col-span-7">
                  <Badge
                    variant="outline"
                    className="rounded-full border-white/40 bg-white/30 px-4 py-1"
                  >
                    {t.kicker}
                  </Badge>

                  <h1 className="mt-5 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                    {t.title}
                  </h1>

                  <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground/85 md:text-lg">
                    {lead}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Chip>Patient, adult-focused</Chip>
                    <Chip>No pressure, step-by-step</Chip>
                    <Chip>Zeeland</Chip>
                  </div>

                  {rest ? (
                    <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/35 bg-white/14 p-6 backdrop-blur md:p-7">
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-transparent" />
                      <div className="relative max-w-prose whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base">
                        {rest}
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* RIGHT: PORTRAIT */}
                <div className="md:col-span-5 lg:col-span-5">
                  {/* keep alignment with H1 baseline */}
                  <div className="md:mt-[3.75rem] lg:mt-[4rem]">
                    <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/15 shadow-2xl backdrop-blur">
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />

                      {/* IMPORTANT: use inline aspectRatio (Tailwind can't compile dynamic aspect-[...]) */}
                      <div className="relative w-full" style={{ aspectRatio: PORTRAIT_ASPECT }}>
                        {profileImage ? (
                          <>
                            {/* MELT LAYER (blurred cover behind) */}
                            <Image
                              src={profileImage.imageUrl}
                              alt=""
                              fill
                              sizes="(min-width: 768px) 420px, 100vw"
                              className="object-cover scale-[1.05] blur-[18px] opacity-35"
                              style={{ objectPosition: PORTRAIT_POSITION }}
                              aria-hidden
                            />

                            {/* MAIN LAYER (shows full instructor image) */}
                            <Image
                              src={profileImage.imageUrl}
                              alt={
                                profileImage.description ??
                                "Nathalie, adult swimming coach in Zeeland"
                              }
                              data-ai-hint={profileImage.imageHint}
                              fill
                              priority
                              sizes="(min-width: 768px) 420px, 100vw"
                              className="object-cover"
                            />
                          </>
                        ) : (
                          // premium placeholder
                          <div
                            className="h-full w-full"
                            style={{
                              backgroundImage:
                                "linear-gradient(180deg, rgba(255,255,255,.22), rgba(255,255,255,.06)), url(/pics/water-caustics.jpg)",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div className="flex h-full w-full items-end p-5">
                              <div className="rounded-2xl border border-white/35 bg-white/20 px-4 py-3 text-xs text-foreground/80 backdrop-blur">
                                Add portrait photo later (public/…)
                              </div>
                            </div>
                          </div>
                        )}

                        {/* vignette = keeps it premium */}
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_18%,transparent,rgba(0,0,0,0.18))]" />

                        {/* subtle inner rim so it feels “built-in” */}
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/20" />
                      </div>

                      <div className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/35 bg-white/18 px-3 py-1 text-[11px] text-foreground/80 backdrop-blur">
                        Swimcoaching
                      </div>
                    </div>

                    <p className="mt-3 text-xs italic text-muted-foreground">
                      “Progress doesn't come from pushing harder, but from commitment and
                      consistency. By coming regularly, especially in the beginning, trust grows
                      and the fundamentals can gently take root.”
                    </p>

                    {/* IN SHORT BLOCK */}
                    <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/35 bg-white/18 p-5 backdrop-blur">
                       <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/14 via-transparent to-transparent" />
                       <div className="relative space-y-3">
                          <h3 className="font-headline text-lg font-semibold">In short</h3>
                          <InfoListItem icon={Star} label="Certification" value="NRZ-certified swimming instructor" />
                          <InfoListItem icon={Languages} label="Languages" value="English" />
                          <InfoListItem icon={Users} label="For" value="Adults (beginners & refreshers)" />
                          <InfoListItem icon={Activity} label="Approach" value="Supportive, positive, safe. No pressure, no shame." />
                          <InfoListItem icon={MapPin} label="Region" value="Middelburg, Vlissingen, Walcheren, Zeeland" />
                       </div>
                    </div>

                  </div>
                </div>
              </div>
            </Surface>
          </div>
        </div>
      </section>

      {/* EXPECTATIONS STRIP */}
      <section className="container px-4 pt-10 md:px-6 md:pt-14">
        <div className="grid gap-4 md:grid-cols-3">
          <MiniCard
            icon={Waves}
            title="Comfort first"
            body="We start with breathing, balance, and gentle control, so you feel safe before pushing skills."
          />
          <MiniCard
            icon={ShieldCheck}
            title="No judgement"
            body="Adults learn differently. We go at your pace, with clear steps and zero embarrassment."
          />
          <MiniCard
            icon={HeartHandshake}
            title="Personal coaching"
            body="1:1 and small groups, focused attention, a quiet setting, all built around you."
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="container px-4 pt-12 md:px-6 md:pt-16">
        <Surface className="p-8 md:p-12">
          <div className="relative mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mx-auto w-fit rounded-full border-white/40 bg-white/30 px-4 py-1"
            >
              Contact
            </Badge>

            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              {askTitle}
            </h2>

            <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
              {askSubtitle}
            </p>

            <p className="mt-2 text-xs text-muted-foreground">
              Typical reply time: within 24 hours (weekdays).
            </p>
          </div>

          <div className="relative mx-auto mt-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/40 bg-white/26 p-6 shadow-xl backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/16 via-transparent to-transparent" />
            <div className="relative">
              <ContactForm action={submitContactForm} />
            </div>
          </div>
        </Surface>
      </section>
    </div>
  );
}
