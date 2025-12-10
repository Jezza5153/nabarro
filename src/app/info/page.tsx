import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, MapPin, Euro } from "lucide-react";
import Link from "next/link";


const pricing = [
    {
        item: "Single Private Lesson",
        duration: "45 minutes",
        price: "€50"
    },
    {
        item: "Package of 5 Private Lessons",
        duration: "5 x 45 minutes",
        price: "€225"
    }
];

export default function InfoPage() {
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
                        Here you can find all the details about pricing, location, and scheduling. Everything is presented clearly and transparently.
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
                            Prices are inclusive of VAT and pool entrance fees. Packages are valid for 6 months.
                           </CardDescription>
                           <Table className="mt-4">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Lesson Type</TableHead>
                                    <TableHead className="text-right">Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {pricing.map(p => (
                                    <TableRow key={p.item}>
                                        <TableCell>
                                            <p className="font-medium">{p.item}</p>
                                            <p className="text-sm text-muted-foreground">{p.duration}</p>
                                        </TableCell>
                                        <TableCell className="text-right font-medium">{p.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                           </Table>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <MapPin className="h-8 w-8" />
                            <CardTitle className="font-headline text-2xl">Location</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                           <CardDescription>
                             Lessons are held at a calm and modern swimming facility in the Zeeland region, easily accessible from Middelburg and Vlissingen. The exact location is provided upon booking to ensure privacy.
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
                            Lessons are available on weekdays, with flexible time slots in the morning and evening to accommodate different schedules. To find a time that works for you, please get in touch.
                           </CardDescription>
                             <div className="pt-4">
                                <Button asChild>
                                    <Link href="/contact">Inquire about availability</Link>
                                </Button>
                           </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
