import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, ShieldCheck, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'A Safe Space',
    description: 'We create a supportive environment where you can feel secure and progress without pressure.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Guidance You Can Trust',
    description: 'With an experienced instructor, you are in gentle, capable hands every step of the way.',
  },
  {
    icon: <Waves className="h-8 w-8 text-primary" />,
    title: 'Your Own Pace',
    description: 'There is no rush. Your journey is unique, and each lesson is adapted to your comfort and needs.',
  },
];

const guideSections = [
    {
        title: 'Meet Your Instructor',
        description: "Learn about Nathalie's experience and her mission to help adults swim with confidence.",
        href: "/about",
        linkText: "About Nathalie"
    },
    {
        title: 'How Lessons Work',
        description: 'Discover our calm, step-by-step approach designed for adult learners.',
        href: "/lessons",
        linkText: "See the approach"
    },
    {
        title: 'Who It\'s For',
        description: 'These lessons are for any adult who wants to feel safe and comfortable in the water.',
        href: "/for-you",
        linkText: "Is this for you?"
    },
]


export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-calm-water');

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-1 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                  It's never too late to learn to swim.
                </h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                  Welcome to Nabarrocoaching. A calm, respectful, and safe space for adults to discover comfort and confidence in the water. At your own pace.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/lessons">How Lessons Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">Reassurance</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">You are in a safe place.</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Feeling nervous or embarrassed is normal. Many adults feel the same. Our mission is to provide a supportive path to water confidence, free from judgment.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
            {features.map((feature) => (
              <div key={feature.title} className="grid gap-2 text-center">
                  <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {heroImage && (
        <section className="w-full">
            <div className="container px-0">
                <div className="aspect-[16/9] md:aspect-[2.4/1] overflow-hidden">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    width={1800}
                    height={750}
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
        </section>
      )}

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Your Journey to Water Confidence</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide clear, simple steps to help you feel comfortable and in control.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {guideSections.map((section) => (
                <Card key={section.title} className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <div className="mt-auto p-6 pt-0">
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={section.href}>
                        {section.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to take the first step?
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              There is no pressure to book. Ask a question or simply say hello. We are here to help.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                Ask a question
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
