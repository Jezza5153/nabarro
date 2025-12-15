import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { project } from "@/content/project";
import { Clock, MapPin, Euro } from "lucide-react";
import Link from "next/link";


export default function InfoPage() {
    return (
        <div className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                        Details
                    </div>
                    <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Praktische Informatie
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        Hier vindt u alle details over prijzen, locatie en planning. Alles wordt duidelijk en transparant gepresenteerd.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-1 lg:grid-cols-3 md:pt-16">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Euro className="h-8 w-8" />
                            <CardTitle className="font-headline text-2xl">Prijzen</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <CardDescription>
                            Prijzen zijn inclusief BTW en toegang tot het zwembad. Pakketten zijn een beperkte tijd geldig.
                           </CardDescription>
                           <Table className="mt-4">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Geldigheid</TableHead>
                                    <TableHead className="text-right">Prijs</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {project.sections.inleiding.prices.map(p => (
                                    <TableRow key={p.product}>
                                        <TableCell className="font-medium">{p.product}</TableCell>
                                        <TableCell>{p.validity}</TableCell>
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
                            <CardTitle className="font-headline text-2xl">Locatie</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                           <CardDescription>
                             De lessen worden gegeven in een rustige en moderne zwemfaciliteit in de regio Zeeland, gemakkelijk bereikbaar vanuit Middelburg en Vlissingen. De exacte locatie wordt bij boeking verstrekt om de privacy te waarborgen.
                           </CardDescription>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Clock className="h-8 w-8" />
                            <CardTitle className="font-headline text-2xl">Planning</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                           <CardDescription>
                            De lessen zijn beschikbaar op weekdagen, met flexibele tijdslots in de ochtend en avond om aan verschillende schema's te voldoen. Neem contact op om een tijd te vinden die voor u werkt.
                           </CardDescription>
                             <div className="pt-4">
                                <Button asChild>
                                    <Link href="/contact">Informeer naar beschikbaarheid</Link>
                                </Button>
                           </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
