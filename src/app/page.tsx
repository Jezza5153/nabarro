import Image from 'next/image';
import Link from 'next/link';
import { HeartHandshake, ShieldCheck, Waves } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <Waves className="h-10 w-10" />,
    title: 'Calm & Patient Instruction',
    description:
      'Lessons are adapted to your pace. The goal is comfort and confidence, not speed. There is no pressure.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10" />,
    title: 'Focus on Adult Learners',
    description:
      'Nathalie specializes in teaching adults, understanding the unique anxieties and challenges they may face.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: 'Private & Safe Environment',
    description:
      'Learn in a quiet, supportive setting where you can feel at ease and focus on your progress without judgment.',
  },
];

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-calm-water');

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-48">
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
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Confidence in the Water
            </h1>
            <p className="mt-6 text-lg text-foreground/80 md:text-xl">
              Welcome to swimwith ease — a calm, welcoming, and low-pressure place for adults to learn how to swim in the Zeeland region.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/lessons">Learn About the Lessons</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Ask a Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
             <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              A New Approach
            </div>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Swimming is for Everyone
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
             It's never too late to learn. Our method is built on trust, patience, and the belief that anyone can find joy in the water.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col items-center text-center">
                <CardHeader className="items-center">
                   <div className="rounded-full bg-primary/10 p-4 text-primary">
                    {feature.icon}
                   </div>
                  <CardTitle className="mt-4 text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6">{feature.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
