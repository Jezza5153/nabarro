import { project } from "@/content/project";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HandCoins, Share2, Handshake } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const gsbItems = [
    {
        icon: Share2,
        title: "Bekendheid",
        description: "Het project delen via nieuwsbrieven, wijkplatforms en regionale of lokale media."
    },
    {
        icon: Handshake,
        title: "Verbinding",
        description: "Introducties naar relevante partners, internationale groepen en gemeentelijke netwerken."
    },
    {
        icon: HandCoins,
        title: "Praktische Steun",
        description: "Toestemming om flyers via gemeentelijke kanalen zichtbaar te maken voor internationale inwoners."
    }
]

export default function GSBPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                Ondersteuning
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                De GSB: Gun & Support Budget
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Met de GSB vraag ik niet per se om een financiële bijdrage, maar om ondersteuning in zichtbaarheid en netwerk, zodat het project kan groeien.
            </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {gsbItems.map((item, index) => {
                const Icon = item.icon;
                return (
                <Card key={index} className="bg-background/80">
                    <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
                );
            })}
        </div>

        <Card className="max-w-4xl mx-auto mt-16 bg-accent/50">
            <CardHeader>
                <CardTitle>Een open uitnodiging</CardTitle>
                <CardDescription>
                    Ik laat de gemeente volledig vrij om een bijdrage te leveren aan de marketing, zoals het ontwerp en drukwerk van flyers. Dit zou enorm gewaardeerd worden.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">
                    Mijn vraag richt zich volledig op gunfactor, samenwerking en versterking van de gemeenschap. Ik bespreek dit graag in een persoonlijk gesprek om te onderzoeken welke vormen van ondersteuning passend en haalbaar zijn.
                </p>
                <Button asChild>
                    <Link href="/contact">Neem contact op</Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
