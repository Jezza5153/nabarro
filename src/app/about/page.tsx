import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'nathalie-profile');

  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              About Your Instructor
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Nathalie Nabarro
            </h1>
            <div className="space-y-4 text-muted-foreground md:text-lg">
              <p>
                Hello, I'm Nathalie. For many years, I've had the privilege of guiding adults on their journey to becoming comfortable and confident swimmers. My own experience taught me that learning to swim as an adult is not about speed or technique alone—it's about building trust, first with your instructor, and then with the water itself.
              </p>
              <p>
                My mission is to create a calm, patient, and encouraging space for everyone, especially those who feel anxious or have had difficult experiences with water in the past. I believe that with the right guidance, anyone can find joy and safety in swimming.
              </p>
              <p>
                As a certified instructor living in Zeeland, I understand the needs of our international community. Lessons are provided in clear, simple English, and I'm happy to communicate in French as well. There is no pressure here, only support.
              </p>
            </div>
             <Button asChild size="lg" className="mt-4">
                <Link href="/contact">Ask a question</Link>
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
