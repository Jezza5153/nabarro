import { project } from "@/content/project";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SlotPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                Afsluiting
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Een Waardevolle Bijdrage
            </h1>
        </div>

        <div className="mx-auto max-w-3xl space-y-8 pt-12">
            <div>
                <h2 className="font-headline text-2xl font-bold mb-4">Dit project levert een bijdrage aan:</h2>
                <ul className="space-y-4">
                    {project.sections.slot.bullets.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground">
                <p>{project.sections.slot.closing}</p>
            </div>
            
            <div className="text-center pt-8">
                 <h3 className="font-headline text-2xl font-bold">Laten we samen investeren in een inclusieve, gezonde en veilige samenleving.</h3>
                <div className="mt-6">
                    <Button asChild size="lg">
                        <Link href="/contact">Neem contact op</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
