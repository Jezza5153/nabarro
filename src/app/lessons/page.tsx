import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const lessonDetails = [
  {
    value: 'item-1',
    trigger: 'Onze Zachte Aanpak',
    content:
      "Onze onderwijsfilosofie is gebaseerd op geduld en vertrouwen. We begrijpen dat leren zwemmen als volwassene een unieke reis is. We beginnen met u te helpen zich comfortabel in het water te voelen, met de nadruk op ademhaling en balans. Er is geen haast; elke stap wordt gezet in een tempo dat voor u goed voelt.",
  },
  {
    value: 'item-2',
    trigger: 'Wat te verwachten in uw eerste les',
    content:
      "Uw eerste les is een zachte kennismaking. We bespreken uw doelen en eventuele zorgen. In het water beginnen we in het ondiepe gedeelte, wennen we aan het gevoel en leren we hoe u uw ademhaling onder controle kunt houden. De focus ligt op veiligheid en comfort, niet op prestaties.",
  },
  {
    value: 'item-3',
    trigger: 'Bouw uw vaardigheden stapsgewijs op',
    content:
      "Zodra u zich zeker voelt, introduceren we langzaam fundamentele zwemvaardigheden. Dit omvat drijven, zachte voortstuwing en basiszwemslagen. Elke vaardigheid bouwt voort op de vorige, zodat u bij elke les een solide basis en groeiend zelfvertrouwen ontwikkelt.",
  },
  {
    value: 'item-4',
    trigger: 'Een privé, gerichte omgeving',
    content:
      "Alle lessen worden gegeven in een rustige en privé-omgeving om ervoor te zorgen dat u kunt leren zonder afleiding of zelfbewustzijn. Dit zorgt voor persoonlijke aandacht en een lesprogramma dat specifiek is afgestemd op uw behoeften en vooruitgang.",
  },
];

export default function LessonsPage() {
    const detailImage = PlaceHolderImages.find((img) => img.id === 'lessons-detail');
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Onze Methode
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Hoe de lessen werken
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Onze lessen zijn ontworpen om een kalme, duidelijke en ondersteunende ervaring te zijn. We richten ons op het opbouwen van een basis van vertrouwen en veiligheid, waardoor uw zelfvertrouwen op natuurlijke wijze kan groeien.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {lessonDetails.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-lg">{item.trigger}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex items-center justify-center">
             {detailImage && (
              <Image
                src={detailImage.imageUrl}
                alt={detailImage.description}
                data-ai-hint={detailImage.imageHint}
                width={1200}
                height={800}
                className="rounded-xl object-cover shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
