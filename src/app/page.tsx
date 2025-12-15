import Image from 'next/image';
import Link from 'next/link';
import { HeartHandshake, ShieldCheck, Waves } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import BlobCard from '@/components/blob-card';
import PillLabel from '@/components/pill-label';
import SectionTitle from '@/components/section-title';

const features = [
  {
    icon: <Waves className="h-10 w-10 text-primary" />,
    title: 'Calm & Patient Instruction',
    description:
      'Lessons are adapted to your pace. The goal is comfort and confidence, not speed. There is no pressure.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: 'Focus on Adult Learners',
    description:
      'Nathalie specializes in teaching adults, understanding the unique anxieties and challenges they may face.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Private & Safe Environment',
    description:
      'Learn in a quiet, supportive setting where you can feel at ease and focus on your progress without judgment.',
  },
];

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-calm-water');

  return (
    <div className="flex flex-col">
      <section id="home" className="relative w-full py-24 md:py-32 lg:py-48 min-h-[80vh] flex items-center justify-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <SectionTitle>
              Find Your Confidence in the Water
            </SectionTitle>
            <p className="mt-6 text-lg text-accent/90 md:text-xl max-w-3xl mx-auto">
              Welcome to swimwith ease — a calm, welcoming, and low-pressure place for adults to learn how to swim in the Zeeland region.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                <Link href="/#method">Learn About the Lessons</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link href="/#contact">Ask a Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
             <PillLabel>A New Approach</PillLabel>
            <h2 className="mt-6 font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl">
              Swimming is for Everyone
            </h2>
            <p className="mt-4 text-accent/80 md:text-lg">
             It's never too late to learn. Our method is built on trust, patience, and the belief that anyone can find joy in the water.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-3">
            {features.map((feature) => (
              <BlobCard key={feature.title} variant="white" className="flex flex-col items-center text-center">
                   <div className="rounded-full bg-secondary/20 p-4">
                    {feature.icon}
                   </div>
                  <h3 className="mt-6 text-xl font-bold font-headline">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </BlobCard>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder sections to allow anchor links to work */}
      <div id="about" className="h-1"></div>
      <div id="method" className="h-1"></div>
      <div id="for-you" className="h-1"></div>
      <div id="info" className="h-1"></div>
      <div id="contact" className="h-1"></div>
    </div>
  );
}
