
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Video, XCircle } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const lessonDetails = [
  {
    value: "item-1",
    trigger: "Our Gentle Approach",
    content:
      "Our teaching philosophy is built on patience and trust. We understand that learning to swim as an adult is a unique journey. We start by helping you feel comfortable in the water, focusing on breath control and balance. There’s no rush; every step is taken at a pace that feels right for you. Progress doesn't come from pushing harder, but from commitment and consistency. By coming regularly, especially in the beginning, trust grows and the fundamentals can gently take root.",
  },
  {
    value: "item-2",
    trigger: "What to Expect in Your First Lesson",
    content:
      "Your first lesson is a gentle introduction. We'll discuss your goals and any concerns you might have. In the water, we'll start in the shallow end, getting used to the sensation and learning how to control your breathing. The focus is on safety and comfort, not performance.",
  },
  {
    value: "item-3",
    trigger: "Building Your Skills Step-by-Step",
    content:
      "Once you feel secure, we slowly introduce fundamental swimming skills. This includes floating, gentle propulsion, and basic strokes. Each skill builds on the last, ensuring you develop a solid foundation and growing confidence with every lesson.",
  },
  {
    value: "item-4",
    trigger: "A Private, Focused Environment",
    content:
      "All lessons are conducted in a quiet and private setting to ensure you can learn without distraction. This allows for personalized attention and a curriculum tailored specifically to your needs and progress.",
  },
];

const forYou = [
  "Adults learning from zero",
  "Expats, tourists, and English speakers",
  "Anyone wanting their A/B/C Dutch diploma",
  "People returning to swimming after years",
  "Swimmers wanting to improve their technique or learn a new stroke",
];

const notForYou = [
  "Competitive swimmers seeking performance training",
  "Children's group lessons (we focus on adults)",
  "Drop-in classes without prior registration",
];

function Chip({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/35 px-3 py-1 text-sm text-foreground/85 backdrop-blur">
      {icon}
      <span className="leading-none">{text}</span>
    </div>
  );
}

export default function LessonsPage() {
  const detailImage = PlaceHolderImages.find((img) => img.id === "lessons-detail");

  return (
    <div className="py-10 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        {/* HERO STAGE (this is what was missing) */}
        <section className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/18 p-8 backdrop-blur md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_30%_0%,black,transparent)] bg-white/25" />

          <div className="relative grid gap-10 md:grid-cols-2 md:gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-5">
              <Badge
                variant="outline"
                className="w-fit rounded-full bg-white/35 px-4 py-1 border-white/40"
              >
                Our Method
              </Badge>

              <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                How the lessons work
              </h1>

              <p className="max-w-[620px] text-muted-foreground md:text-lg leading-relaxed">
                Calm, clear, and adult-focused. We start with safety and comfort first — then build skills
                step-by-step at your pace.
              </p>

              {/* Accordion inside a glass panel (stops looking like docs) */}
              <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/25 p-4 backdrop-blur">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
                <div className="relative">
                  <Accordion type="single" collapsible className="w-full">
                    {lessonDetails.map((item) => (
                      <AccordionItem
                        key={item.value}
                        value={item.value}
                        className="border-white/25"
                      >
                        <AccordionTrigger className="text-base md:text-lg">
                          {item.trigger}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE (framed + controlled) */}
            <div className="flex items-center justify-center md:justify-end">
              {detailImage ? (
                <div className="w-full max-w-[520px]">
                  <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/15 shadow-2xl backdrop-blur">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent" />
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={detailImage.imageUrl}
                        alt={detailImage.description}
                        data-ai-hint={detailImage.imageHint}
                        fill
                        sizes="(min-width: 768px) 520px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-muted-foreground">
                    Calm environment • Private & small-group options • Zeeland
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-[520px] rounded-3xl border border-white/40 bg-white/15 p-12 text-center text-sm text-muted-foreground backdrop-blur">
                  Add your real pool image here to complete this section.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FOR YOU / NOT FOR YOU — chips (more premium + scannable) */}
        <section className="mt-10 md:mt-14 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/18 p-7 backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="font-headline text-xl md:text-2xl font-bold">A good fit if you are…</h2>
              <p className="mt-2 text-muted-foreground">
                These lessons are designed for adults who want calm progress.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {forYou.map((item) => (
                  <Chip
                    key={item}
                    icon={<Check className="h-4 w-4 text-primary" />}
                    text={item}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/18 p-7 backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="font-headline text-xl md:text-2xl font-bold">Not the best fit if you want…</h2>
              <p className="mt-2 text-muted-foreground">
                This is not performance training — it’s calm coaching.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {notForYou.map((item) => (
                  <Chip
                    key={item}
                    icon={<XCircle className="h-4 w-4 text-muted-foreground" />}
                    text={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA MODULE — designed layout (left reassurance, right form) */}
        <section className="mt-10 md:mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/18 p-8 shadow-2xl backdrop-blur md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_70%_0%,black,transparent)] bg-white/25" />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
              {/* LEFT */}
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="w-fit rounded-full bg-white/35 px-4 py-1 border-white/40"
                >
                  Free 15-min call
                </Badge>

                <h3 className="font-headline text-2xl font-bold sm:text-3xl">
                  Not sure yet? Let’s talk.
                </h3>

                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  Leave your details and I’ll suggest 2–3 options for a short call.
                  Calm, clear, no pressure.
                </p>

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-primary" />
                    <span>We’ll confirm by email (Calendly coming soon).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-primary" />
                    <span>We’ll focus on your goal: comfort, safety, or technique.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-primary" />
                    <span>You can mention if English feels easier than Dutch.</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — form card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/25 p-6 backdrop-blur">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/22 via-transparent to-transparent" />

                <form
                  className="relative space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: wire to backend / email routing
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="cta-name">Full name</Label>
                      <Input
                        id="cta-name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-white/70 backdrop-blur border-white/40 focus-visible:ring-2 focus-visible:ring-primary/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cta-email">Email</Label>
                      <Input
                        id="cta-email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        required
                        className="bg-white/70 backdrop-blur border-white/40 focus-visible:ring-2 focus-visible:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="cta-goal">What do you want help with?</Label>
                      <select
                        id="cta-goal"
                        name="goal"
                        defaultValue="beginner"
                        className="h-10 w-full rounded-md border border-white/40 bg-white/70 px-3 text-sm text-foreground backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="beginner">Learning from zero</option>
                        <option value="fear">Fear of water / anxiety</option>
                        <option value="returning">Returning after years</option>
                        <option value="technique">Technique / improve stroke</option>
                        <option value="diploma">Dutch A/B/C diploma</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cta-availability">Best time to call</Label>
                      <select
                        id="cta-availability"
                        name="availability"
                        defaultValue="evening"
                        className="h-10 w-full rounded-md border border-white/40 bg-white/70 px-3 text-sm text-foreground backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cta-message">Anything I should know?</Label>
                    <Textarea
                      id="cta-message"
                      name="message"
                      placeholder="Optional: fear level, goals, past experiences, preferred language..."
                      className="min-h-[110px] bg-white/70 backdrop-blur border-white/40 focus-visible:ring-2 focus-visible:ring-primary/30"
                    />
                  </div>

                  <div className="pt-1">
                    <Button type="submit" size="lg" className="w-full rounded-full">
                      <Video className="mr-2 h-5 w-5" />
                      Request a free 15-min call
                    </Button>
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      You’ll get a reply by email with 2–3 options.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
