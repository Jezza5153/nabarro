import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, HeartHandshake, ShieldCheck, Waves } from "lucide-react";

const features = [
    {
        icon: Waves,
        title: "Kalm en Geduldig",
        description: "Lessen in een rustig tempo, met focus op vertrouwen en comfort in het water."
    },
    {
        icon: ShieldCheck,
        title: "Veilig en Privé",
        description: "Een veilige omgeving waar u zonder oordeel en op uw eigen tempo kunt leren."
    },
    {
        icon: HeartHandshake,
        title: "Ondersteunend & Inclusief",
        description: "Een warme en gastvrije sfeer, speciaal voor de internationale gemeenschap."
    }
]

export default function Home() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-calm-water');
    return (
        <div className="flex-1">
            <section className="container grid lg:grid-cols-2 gap-10 items-center py-12 md:py-24 lg:py-32">
                <div className="flex flex-col items-start space-y-4">
                     <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                        Zwemles voor volwassenen in Engels
                    </div>
                    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Rustig leren zwemmen — met vertrouwen en veiligheid
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        Voor internationale studenten, expats en nieuwe inwoners in Zeeland die zich (nog) niet comfortabel voelen in het Nederlands.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg">
                            <Link href="/aanmelden">Meld u aan</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/about">Meer over de lessen</Link>
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            width={1200}
                            height={800}
                            className="rounded-xl object-cover shadow-lg"
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                </div>
            </section>

             <section className="py-12 md:py-24 lg:py-32 bg-white/40">
                <div className="container">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                            Onze Filosofie
                        </div>
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                            Een nieuwe benadering van zwemles voor volwassenen
                        </h2>
                         <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Wij geloven dat leren zwemmen een positieve en versterkende ervaring moet zijn, vrij van druk en angst.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
                       {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                            <Card key={index} className="bg-background/80">
                                <CardHeader className="flex flex-row items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

             <section className="py-12 md:py-24 lg:py-32">
                 <div className="container">
                    <div className="mx-auto max-w-4xl rounded-xl bg-primary p-8 text-center text-primary-foreground shadow-lg md:p-12">
                        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                            Klaar om de eerste stap te zetten?
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                            Heeft u vragen of wilt u zich aanmelden? Neem vrijblijvend contact op. Ik help u graag verder op uw reis naar watervrijheid.
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                                <Link href="/contact">Stel een vraag</Link>
                            </Button>
                             <Button asChild size="lg" variant="secondary">
                                <Link href="/aanmelden">Direct Aanmelden <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
