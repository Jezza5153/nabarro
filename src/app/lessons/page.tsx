import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Video } from 'lucide-react';
import Image from 'next/image';

const lessonDetails = [
  {
    value: 'item-1',
    trigger: 'Our Gentle Approach',
    content:
      "Our teaching philosophy is built on patience and trust. We understand that learning to swim as an adult is a unique journey. We start by helping you feel comfortable in the water, focusing on breath control and balance. There’s no rush; every step is taken at a pace that feels right for you. Progress doesn't come from pushing harder, but from commitment and consistency. By coming regularly, especially in the beginning, trust grows and the fundamentals can gently take root.",
  },
  {
    value: 'item-2',
    trigger: 'What to Expect in Your First Lesson',
    content:
      "Your first lesson is a gentle introduction. We'll discuss your goals and any concerns you might have. In the water, we'll start in the shallow end, getting used to the sensation and learning how to control your breathing. The focus is on safety and comfort, not performance.",
  },
  {
    value: 'item-3',
    trigger: 'Building Your Skills Step-by-Step',
    content:
      "Once you feel secure, we slowly introduce fundamental swimming skills. This includes floating, gentle propulsion, and basic strokes. Each skill builds on the last, ensuring you develop a solid foundation and growing confidence with every lesson.",
  },
  {
    value: 'item-4',
    trigger: 'A Private, Focused Environment',
    content:
      "All lessons are conducted in a quiet and private setting to ensure you can learn without distraction. This allows for personalized attention and a curriculum tailored specifically to your needs and progress.",
  },
];

const forYou = [
    "Adults learning from zero",
    "Expats, tourists, and English speakers",
    "Anyone wanting their A/B/C Dutch diploma",
    "People returning to swimming after years",
    "Swimmers wanting to improve their technique or learn a new stroke"
];

const notForYou = [
    "Competitive swimmers seeking performance training",
    "Children's group lessons (we focus on adults)",
    "Drop-in classes without prior registration"
]

export default function LessonsPage() {
    const detailImage = PlaceHolderImages.find((img) => img.id === 'lessons-detail');
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Our Method
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How The Lessons Work
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Our lessons are designed to be a calm, clear, and supportive experience. We focus on building a foundation of trust and safety, allowing your confidence to grow naturally.
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

        <div className="mt-20 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
                <h2 className="font-headline text-2xl font-bold">Is this for you?</h2>
                <p className="mt-2 text-muted-foreground">These lessons are a good fit if you are:</p>
                <ul className="mt-4 space-y-2">
                    {forYou.map(item => (
                        <li key={item} className="flex items-start gap-3">
                            <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <div>
                <h2 className="font-headline text-2xl font-bold">This might not be for you if...</h2>
                <p className="mt-2 text-muted-foreground">This program may not be the best fit if you are looking for:</p>
                 <ul className="mt-4 space-y-2">
                    {notForYou.map(item => (
                        <li key={item} className="flex items-start gap-3">
                            <Check className="h-5 w-5 mt-1 text-destructive flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
        <div className="mt-20 text-center rounded-lg border bg-card p-8">
            <h3 className="font-headline text-2xl font-bold">Not sure yet? Let's talk.</h3>
            <p className="mt-2 text-muted-foreground max-w-prose mx-auto">A short, no-pressure video call is a great way to see if we're a good fit. <br/>(Calendly integration coming soon)</p>
            <div className="mt-6">
                <Button size="lg" disabled>
                    <Video className="mr-2 h-5 w-5" />
                    Book a free 15-min call
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
