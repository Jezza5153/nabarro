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
    trigger: 'Our Gentle Approach',
    content:
      "Our teaching philosophy is built on patience and trust. We understand that learning to swim as an adult is a unique journey. We start by helping you feel comfortable in the water, focusing on breathing and balance. There is no rush; every step is taken at a pace that feels right for you.",
  },
  {
    value: 'item-2',
    trigger: 'What to Expect in Your First Lesson',
    content:
      "Your first lesson is a gentle introduction. We'll talk about your goals and any concerns you may have. In the water, we'll begin in the shallow end, simply getting used to the sensation and learning how to control your breath. The focus is on safety and comfort, not performance.",
  },
  {
    value: 'item-3',
    trigger: 'Building Your Skills, Step by Step',
    content:
      "Once you feel secure, we slowly introduce fundamental swimming skills. This includes floating, gentle propulsion, and basic strokes. Each skill builds on the last, ensuring you develop a solid foundation and growing confidence with every lesson.",
  },
  {
    value: 'item-4',
    trigger: 'A Private, Focused Environment',
    content:
      "All lessons are conducted in a calm and private setting to ensure you can learn without distraction or self-consciousness. This allows for personalized attention and a curriculum tailored specifically to your needs and progress.",
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
      </div>
    </div>
  );
}
