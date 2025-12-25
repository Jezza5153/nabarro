import Link from "next/link";
import { Clock, MapPin, Euro, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type PriceRow = {
  id: "tryout" | "private" | "group";
  service: string;
  price: string;
};

export default function InfoPage() {
  const prices: PriceRow[] = [
    { id: "tryout", service: "Try-out lesson (45 min, one time)", price: "€20" },
    { id: "private", service: "Private lesson (45 min)", price: "€80" },
    { id: "group", service: "Small group class (45 min)", price: "€30" },
  ];

  return (
    <div className="py-12 md:py-24 lg:py-28">
      <div className="container px-4 md:px-6">
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline" className="rounded-full bg-white/55 backdrop-blur px-4 py-1">
            Practical info
          </Badge>

          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Practical Information
          </h1>

          <p className="max-w-[720px] text-muted-foreground md:text-xl/relaxed">
            Clear pricing, calm setting, and flexible scheduling — so you know exactly what to expect.
          </p>

          {/* Trust strip */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              45 minutes per lesson
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Calm, private, judgement-free
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Zeeland (exact location after registration)
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:pt-16 lg:grid-cols-3">
          {/* PRICING */}
          <Card className="rounded-2xl bg-white/55 backdrop-blur border">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Euro className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">Pricing</CardTitle>
                <CardDescription>Simple, upfront prices.</CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <div className="text-sm text-muted-foreground">
                Prices are per person. Pool access and VAT may vary by facility — confirmed when you book.
              </div>

              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {prices.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="font-medium">{p.service}</TableCell>
                      <TableCell className="text-right font-medium">{p.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="pt-4">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Book a try-out</Link>
                </Button>
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                Try-out lesson is a gentle introduction. Pre-registration is required.
              </p>
            </CardContent>
          </Card>

          {/* LOCATION */}
          <Card className="rounded-2xl bg-white/55 backdrop-blur border">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">Location</CardTitle>
                <CardDescription>Zeeland, calm and private.</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Lessons take place in a quiet swimming facility in Zeeland. Exact details are shared after registration
                to protect privacy and keep the environment calm.
              </p>

              <Button asChild variant="outline" className="bg-white/40 backdrop-blur w-full">
                <Link href="/contact">Ask about your nearest option</Link>
              </Button>
            </CardContent>
          </Card>

          {/* SCHEDULING */}
          <Card className="rounded-2xl bg-white/55 backdrop-blur border">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">Scheduling</CardTitle>
                <CardDescription>Weekdays + flexible slots.</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Lessons are typically available on weekdays, with options in the morning and evening. Send your
                preferred days/times and we’ll confirm what’s possible.
              </p>

              <Button asChild size="lg" className="w-full">
                <Link href="/contact">Check availability</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
