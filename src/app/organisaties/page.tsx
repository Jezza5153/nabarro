import { project } from "@/content/project";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Building2, Megaphone, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const partnerIcons: Record<string, LucideIcon> = {
    'Gemeente Middelburg': Handshake,
    'Taalcentra en onderwijsinstellingen': Building2,
    'Regionale Media (De Bode, PZC, Omroep Zeeland, ...)': Megaphone,
    'Integratie- en participatieprojecten': Globe,
    'Internationale bedrijven (Dow, Yara, Lineage Logistics, Katoen natie, Ravago, Sligro, Vopak, Lamb Weston, Limagrain, Damen shipbuilding)': Building2,
};

export default function OrganisatiesPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 space-y-16">
        <div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                    Samenwerking
                </div>
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Betrokken Organisaties & Partners
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    We werken samen met diverse organisaties om ons bereik te vergroten en de gemeenschap te dienen.
                </p>
            </div>

            <Card className="mt-12 max-w-5xl mx-auto">
                <CardHeader>
                    <CardTitle>Status van Samenwerkingen</CardTitle>
                    <CardDescription>Overzicht van contacten en lopende gesprekken.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Organisatie</TableHead>
                                <TableHead>Status / Opmerking</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {project.sections.betrokkenOrganisaties.map((org) => (
                                <TableRow key={org.organisatie}>
                                    <TableCell className="font-medium">{org.organisatie}</TableCell>
                                    <TableCell>{org.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>

        <div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                 <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                    Potentiële Partners
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    {project.sections.partners.intro}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
                {project.sections.partners.items.map((partner, index) => {
                    const Icon = partnerIcons[partner.title] || Building2;
                    return (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                     <div className="bg-primary/10 p-3 rounded-full">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{partner.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{partner.description}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
}
