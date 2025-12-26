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

export default function LessonsPage() {
  const detailImage = PlaceHolderImages.find((img) => img.id === "lessons-detail");

  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* TOP SECTION */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Our Method
            </div>

            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How The Lessons Work
            </h1>

            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Calm, clear, and supportive — built for adults. We start with safety and comfort,
              then build confidence and skills step-by-step.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {lessonDetails.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-lg">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex items-center justify-center">
            {detailImage && (
              <Image
                src={detailImage.imageUrl}
                alt={detailImage.description}
                data-ai-hint={detailImage.imageHint}
                width={1200}
                height={800}
                className="rounded-2xl object-cover shadow-lg"
              />
            )}
          </div>
        </div>

        {/* FOR YOU / NOT FOR YOU */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-headline text-2xl font-bold">Is this for you?</h2>
            <p className="mt-2 text-muted-foreground">
              These lessons are a good fit if you are:
            </p>
            <ul className="mt-4 space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-bold">
              This might not be for you if…
            </h2>
            <p className="mt-2 text-muted-foreground">
              This program may not be the best fit if you are looking for:
            </p>
            <ul className="mt-4 space-y-3">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA FORM */}
        <div className="mt-20 rounded-2xl border bg-card p-8 md:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-headline text-2xl font-bold sm:text-3xl">
              Not sure yet? Let’s talk.
            </h3>
            <p className="mt-2 text-muted-foreground">
              Leave your details and I’ll suggest a few options for a free 15-minute call.
              Calm, no pressure.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Calendly integration coming soon — for now, I’ll confirm by email.
            </p>
          </div>

          <form
            className="mx-auto mt-8 max-w-2xl space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: wire to backend / email routing
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="cta-name">Full name</Label>
                <Input id="cta-name" name="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cta-email">Email</Label>
                <Input
                  id="cta-email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
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
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
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
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
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
                className="min-h-[110px]"
              />
              <p className="text-xs text-muted-foreground">
                Tip: If English feels easier than Dutch, mention it here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button type="submit" size="lg" className="rounded-full">
                <Video className="mr-2 h-5 w-5" />
                Request a free 15-min call
              </Button>
              <p className="text-xs text-muted-foreground">
                You’ll get a reply by email with 2–3 options.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
