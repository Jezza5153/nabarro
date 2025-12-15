import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const whoItIsFor = [
    "Volledige beginners die nog nooit zwemles hebben gehad.",
    "Volwassenen die zich angstig of bang voelen in het water.",
    "Expats, studenten of nieuwkomers in Nederland.",
    "Iedereen die wil leren in een privé, niet-oordelende omgeving.",
    "Zwemmers die hun ademhaling en techniek willen verbeteren."
];

const reassurances = [
    {
        title: "U heeft geen ervaring nodig.",
        description: "Onze lessen beginnen helemaal bij het begin. We gaan nergens van uit en leren alles."
    },
    {
        title: "Nerveus zijn is oké.",
        description: "Veel volwassenen voelen hetzelfde. Ons eerste doel is om u te helpen zich veilig en comfortabel te voelen."
    },
    {
        title: "Taal is geen barrière.",
        description: "De lessen zijn in eenvoudig Engels. De nadruk ligt op duidelijke, rustige instructie."
    },
    {
        title: "Er is geen 'juiste' tijdlijn.",
        description: "U zult vooruitgang boeken op uw eigen tempo. Er is geen druk om te presteren."
    }
]

export default function ForYouPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            Een Plek Voor U
          </div>
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Is dit de juiste plek voor u?
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Deze lessen zijn gemaakt voor volwassenen van alle achtergronden die comfort en veiligheid in het water willen vinden. Kijk of iets hiervan bekend klinkt.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 pt-12 md:grid-cols-2 md:pt-16">
            <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight">Deze lessen zijn voor...</h2>
                <ul className="space-y-4">
                    {whoItIsFor.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight">U denkt misschien...</h2>
                 <div className="space-y-4">
                    {reassurances.map((item) => (
                         <Card key={item.title} className="bg-background/80">
                            <CardHeader>
                               <CardTitle className="text-lg">{item.title}</CardTitle> 
                            </CardHeader>
                            <CardContent>
                               <p className="text-muted-foreground">{item.description}</p> 
                            </CardContent>
                         </Card>
                    ))}
                </div>
            </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <h3 className="font-headline text-2xl font-bold">Uw reis begint met een eenvoudig gesprek.</h3>
            <p className="max-w-prose text-muted-foreground">
                Als u vragen heeft, of gewoon wilt weten of dit iets voor u is, neem dan contact op. Er is geen enkele verplichting.
            </p>
            <Button asChild size="lg">
                <Link href="/contact">Stel een vraag</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
