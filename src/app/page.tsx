import Image from 'next/image';
import Link from 'next/link';
import { HeartHandshake, ShieldCheck, Waves, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';


const features = [
    {
        icon: HeartHandshake,
        title: "Patient & Trust-Based",
        description: "Lessons are built on trust and patience. We go at your pace, ensuring you feel secure every step of the way.",
    },
    {
        icon: ShieldCheck,
        title: "Focus on Safety",
        description: "Your safety is our priority. Learn fundamental water safety skills in a controlled, supportive environment.",
    },
     {
        icon: Waves,
        title: "For Absolute Beginners",
        description: "Never had a lesson? No problem. We start with the basics, from getting comfortable in the water to your first strokes.",
    },
]

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-calm-water');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                    Adult Swimming Lessons in English
                  </div>
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Confidence in the Water
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Gentle, patient, and personalized swimming lessons for adults in Zeeland. It's never too late to learn.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/info">View Lesson Info</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/contact">Ask a Question</Link>
                  </Button>
                </div>
              </div>
               {heroImage && (
                <div className="relative mx-auto aspect-square max-w-[550px] overflow-hidden rounded-xl lg:order-last lg:max-w-none">
                    <Image
                      src={heroImage.imageUrl}
                      alt={heroImage.description}
                      data-ai-hint={heroImage.imageHint}
                      fill
                      className="object-cover"
                    />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                 <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                    Our Approach
                  </div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">A Calm & Safe Way to Learn</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We believe learning to swim should be a positive experience, free from pressure. Our method is designed for adults who may feel anxious or have had difficult experiences with water.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 pt-12">
              {features.map((feature) => (
                <Card key={feature.title} className="h-full bg-accent/30">
                  <CardHeader className="flex flex-col items-center text-center gap-4">
                     <div className="rounded-full bg-primary/10 p-4">
                        <feature.icon className="h-8 w-8 text-primary" />
                     </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-center">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-accent/50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Begin Your Swimming Journey?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Take the first step today. Explore our lesson options or get in touch with any questions you have.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex justify-center gap-4">
                 <Button asChild size="lg">
                    <Link href="/lessons">How It Works</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/about">About The Instructor</Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
