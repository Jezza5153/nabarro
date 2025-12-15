import { project } from "@/content/project";
import { CheckCircle2 } from "lucide-react";

export default function DoelstellingenPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                Onze Doelen
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Doelstellingen van het Project
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Onze missie is om waterveiligheid, zelfvertrouwen en integratie te bevorderen door middel van toegankelijke zwemlessen.
            </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:max-w-6xl lg:grid-cols-3">
          {project.sections.doelen.map((doel, index) => (
            <div key={index} className="grid gap-1">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-bold">Doel #{index + 1}</h3>
                </div>
              <p className="text-muted-foreground">
                {doel}
              </p>
            </div>
          ))}
        </div>
         <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>De lessen worden verzorgd door een gediplomeerd NRZ-zweminstructeur.</p>
        </div>
      </div>
    </div>
  );
}
