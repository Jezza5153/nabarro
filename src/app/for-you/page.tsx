import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const whoItIsFor = [
    "Complete beginners who have never had a swimming lesson.",
    "Adults who feel anxious or fearful in the water.",
    "Expats, students, or newcomers to the Netherlands.",
    "Anyone who wants to learn in a private, non-judgmental setting.",
    "Swimmers who want to improve their breathing and technique."
];

const reassurances = [
    {
        title: "You don't need any experience.",
        description: "Our lessons start from the very beginning. We assume nothing and teach everything."
    },
    {
        title: "Feeling nervous is okay.",
        description: "Many adults feel the same. Our first goal is to help you feel safe and comfortable."
    },
    {
        title: "Language is not a barrier.",
        description: "Lessons are in simple English. The focus is on clear, calm instruction."
    },
    {
        title: "There is no 'right' timeline.",
        description: "You will progress at your own speed. There is no pressure to perform."
    }
]

export default function ForYouPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            A Place For You
          </div>
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Is this the right place for you?
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            These lessons are created for adults from all backgrounds who wish to find comfort and safety in the water. See if any of this sounds familiar.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 pt-12 md:grid-cols-2 md:pt-16">
            <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight">These lessons are for...</h2>
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
                <h2 className="font-headline text-2xl font-bold tracking-tight">You may be thinking...</h2>
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
            <h3 className="font-headline text-2xl font-bold">Your journey starts with a simple conversation.</h3>
            <p className="max-w-prose text-muted-foreground">
                If you have any questions, or just want to see if this is a good fit, please get in touch. There is no commitment.
            </p>
            <Button asChild size="lg">
                <Link href="/contact">Ask a question</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
