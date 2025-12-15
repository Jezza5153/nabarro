import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { project } from '@/content/project';

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'nathalie-profile');

  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Over de Instructeur
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Maak kennis met Nathalie Nabarro
            </h1>
            <div className="space-y-4 text-muted-foreground md:text-lg whitespace-pre-line">
              <p>
                {project.sections.inleiding.who}
              </p>
            </div>
             <Button asChild size="lg" className="mt-4">
                <Link href="/contact">Stel een vraag</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={600}
                height={600}
                className="aspect-square rounded-xl object-cover shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
