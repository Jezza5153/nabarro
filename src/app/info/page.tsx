// app/info/page.tsx

import Link from "next/link";
import {
  Clock,
  MapPin,
  Euro,
  ShieldCheck,
  Check,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PriceRow = {
  id: "tryout" | "private" | "group";
  title: string;
  duration: string;
  price: string;
  note?: string;
  highlight?: boolean;
};

function Surface({
  children,
  className = "",
}: {
  children: React.ReactNode;
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

function InfoRow({
  icon: Icon,
  title,
  body,
}: {
  icon: any;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 rounded-full border border-white/35 bg-white/20 p-2 backdrop-blur">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</div>
      </div>
    </div>
  );
}

function PriceItem({ row }: { row: PriceRow }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-white/35 bg-white/18 p-5 backdrop-blur",
        row.highlight ? "ring-1 ring-primary/25 bg-white/24" : "",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/14 via-transparent to-transparent" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="font-semibold">{row.title}</div>
            {row.highlight ? (
              <span className="inline-flex items-center rounded-full border border-white/35 bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold text-foreground/80">
                Best first step
              </span>
            ) : null}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">{row.duration}</div>
          {row.note ? (
            <div className="mt-2 text-sm text-muted-foreground">{row.note}</div>
          ) : null}
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold tracking-tight">{row.price}</div>
          <div className="mt-0.5 text-xs text-muted-foreground">per person</div>
        </div>
      </div>
    </div>
  );
}

export default function InfoPage() {
  const prices: PriceRow[] = [
    {
      id: "tryout",
      title: "Try-out lesson",
      duration: "45 minutes, one time",
      price: "€20",
      note: "A supportive introduction. We start with comfort, breathing, and safety.",
      highlight: true,
    },
    {
      id: "private",
      title: "Private lesson",
      duration: "45 minutes, 1-to-1 coaching",
      price: "€80",
      note: "Personal pace, maximum focus. Ideal for fear of water or fast progress.",
    },
    {
      id: "group",
      title: "Small group class",
      duration: "45 minutes, small group",
      price: "€30",
      note: "Supportive and relaxed. Great if you prefer learning with others.",
    },
  ];

  return (
    <div className="pb-16">
      {/* STAGE / HERO */}
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
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/35 to-transparent"
          />

          <div className="container relative px-4 py-10 md:px-6 md:py-14">
            <Surface className="p-8 md:p-12">
              <div className="relative">
                <Badge
                  variant="outline"
                  className="rounded-full border-white/40 bg-white/30 px-4 py-1"
                >
                  Practical info
                </Badge>

                <h1 className="mt-5 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                  Pricing, location, and scheduling, clearly.
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Supportive adult swim coaching in Zeeland. Everything is upfront so you know what to expect before you
                  reach out.
                </p>

                {/* Trust strip */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-white/18 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                    <Clock className="h-3.5 w-3.5" /> 45 minutes per lesson
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-white/18 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                    <ShieldCheck className="h-3.5 w-3.5" /> no-judgement, patient pace
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-white/18 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                    <MapPin className="h-3.5 w-3.5" /> Zeeland (exact pool after registration)
                  </span>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/contact">
                      <CalendarDays className="mr-2 h-5 w-5" />
                      Book a try-out
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-white/25 backdrop-blur border-white/40"
                  >
                    <Link href="/contact">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Ask a question
                    </Link>
                  </Button>
                </div>
              </div>
            </Surface>
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="container px-4 pt-10 md:px-6 md:pt-14">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* PRICING (featured) */}
          <Card className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/18 shadow-2xl backdrop-blur lg:col-span-2">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/16 via-transparent to-transparent" />
            <CardHeader className="relative pb-0">
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-white/35 bg-white/20 p-2.5 backdrop-blur">
                  <Euro className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-2xl">Pricing</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Start with a try-out. Then choose a 1:1 or small group format.
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative pt-6">
              <div className="grid gap-4">
                {prices.map((row) => (
                  <PriceItem key={row.id} row={row} />
                ))}
              </div>

              {/* Included / notes */}
              <div className="mt-8 grid gap-4 rounded-2xl border border-white/35 bg-white/14 p-6 backdrop-blur">
                <div className="font-semibold">What’s included</div>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    Gentle, step-by-step coaching for adults (beginner to technique).
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    Clear guidance on breathing, balance, and safety.
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    Confirmation by email with location and time options.
                  </li>
                </ul>

                <p className="text-xs text-muted-foreground">
                  Pool access and facility fees depend on the chosen location, confirmed clearly when you book.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full sm:flex-1">
                  <Link href="/contact">Book a try-out</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-white/25 backdrop-blur border-white/40 sm:flex-1"
                >
                  <Link href="/contact">Help me choose</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* RIGHT COLUMN: LOCATION + SCHEDULING */}
          <div className="grid gap-8">
            <Card className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/18 shadow-2xl backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/16 via-transparent to-transparent" />
              <CardHeader className="relative pb-0">
                <CardTitle className="font-headline text-2xl">Location</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  Zeeland. A discreet facility, details shared after registration.
                </p>
              </CardHeader>
              <CardContent className="relative pt-6 space-y-5">
                <InfoRow
                  icon={MapPin}
                  title="Discreet setting"
                  body="Exact pool location is confirmed after registration to keep the environment relaxed and focused."
                />
                <InfoRow
                  icon={ShieldCheck}
                  title="Quiet environment"
                  body="We choose time slots and locations that reduce stress, distractions, and crowded lanes."
                />
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full bg-white/25 backdrop-blur border-white/40"
                >
                  <Link href="/contact">Ask what’s nearest</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/18 shadow-2xl backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/16 via-transparent to-transparent" />
              <CardHeader className="relative pb-0">
                <CardTitle className="font-headline text-2xl">Scheduling</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  Weekdays and flexible slots (morning/evening).
                </p>
              </CardHeader>
              <CardContent className="relative pt-6 space-y-5">
                <InfoRow
                  icon={Clock}
                  title="Flexible times"
                  body="Send 2–3 preferred options and we’ll reply with what’s possible."
                />
                <InfoRow
                  icon={CalendarDays}
                  title="Simple booking"
                  body="We are currently expanding availability. You can join the no-obligation waitlist and share your preferred days and times."
                />
                <Button asChild size="lg" className="w-full rounded-full">
                  <Link href="/contact">Check availability</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
