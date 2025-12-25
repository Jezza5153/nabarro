import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { project } from "@/content/project";
import { Clock, MapPin, Euro } from "lucide-react";
import Link from "next/link";


export default function InfoPage() {
    const prices = [
        { product: "Try-out (45 min, one time)", price: "€20" },
        { product: "Private lesson (45 min)", price: "€80" },
        { product: "Small group class", price: "€30" },
    ];
    return (
        <div className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                        Details
                    </div>
                    <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Practical Information
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                       All the details on pricing, location, and scheduling, presented clearly and transparently.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-1 lg:grid-cols-3 md:pt-16">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Euro className="h-8 w-8" />
                            <CardTitle className="font-headline text-2xl">Pricing</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <CardDescription>
                            Prices include VAT and pool access.
                           </CardDescription>
                           <Table className="mt-4">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Service</TableHead>
                                    <TableHead className="text-right">Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {prices.map(p => (
                                    <TableRow key={p.product}>
                                        <TableCell className="font-medium">{p.product}</TableCell>
                                        <TableCell className="text-right font-medium">{p.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                           </Table>
                           <div className="pt-4">
                                <Button asChild>
                                    <Link href="/contact">Book a try-out</Link>
                                </Button>
                           </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <MapPin className="h-8 w-8" />
                            <CardTitle className="font-headline text-2xl">Location</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                           <CardDescription>
                             Lessons are held at a calm, modern swimming facility in Zeeland. The location is easy to reach, and exact details are shared after registration to ensure privacy.
                           </CardDescription>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Clock className="h-8 w-8" />
                            <CardTitle className="font-headline text-2xl">Scheduling</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                           <CardDescription>
                            Lessons are available on weekdays, with flexible time slots in the morning and evening to accommodate different schedules. Contact us to find a time that works for you.
                           </CardDescription>
                             <div className="pt-4">
                                <Button asChild>
                                    <Link href="/contact">Check availability</Link>
                                </Button>
                           </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
