import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
                        Rustig leren zwemmen — met vertrouwen, humor en veiligheid
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        Voor internationale studenten, expats, arbeidsmigranten en nieuwe inwoners in Zeeland die (nog) niet comfortabel zijn in het Nederlands.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg">
                            <Link href="/aanmelden">Aanmelden</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/project">Bekijk Projectplan</Link>
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
        </div>
    );
}
