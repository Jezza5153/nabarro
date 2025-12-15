import { project } from "@/content/project";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Droplet, Languages, Smile, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Users, Droplet, Languages, Smile, ArrowRight];

export default function WerkwijzePage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                Onze Aanpak
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Onze Werkwijze
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Wij geloven in een persoonlijke en stapsgewijze aanpak, gericht op vertrouwen en plezier.
            </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {project.sections.werkwijze.map((item, index) => {
            const Icon = icons[index] || Smile;
            return (
              <Card key={index} className="bg-background/80">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Stap {index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
