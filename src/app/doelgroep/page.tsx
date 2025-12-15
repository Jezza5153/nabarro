import { project } from "@/content/project";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DoelgroepPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                Voor Wie & Wanneer
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Doelgroep, Periode & Omvang
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Onze lessen zijn ontworpen voor een diverse internationale gemeenschap in Zeeland.
            </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 pt-12 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Voor wie zijn de lessen?</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Doelgroep</TableHead>
                                <TableHead>Toelichting</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {project.sections.doelgroepRows.map((row) => (
                                <TableRow key={row.doelgroep}>
                                    <TableCell className="font-medium">{row.doelgroep}</TableCell>
                                    <TableCell>{row.toelichting}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card>
                 <CardHeader>
                    <CardTitle>Planning en Details</CardTitle>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Onderdeel</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                             {project.sections.planning.map((row) => (
                                <TableRow key={row.onderdeel}>
                                    <TableCell className="font-medium">{row.onderdeel}</TableCell>
                                    <TableCell>{row.details}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
