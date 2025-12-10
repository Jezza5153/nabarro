import ContactForm from "@/components/contact-form";

export default function ContactPage() {
    return (
        <div className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                        Contact
                    </div>
                    <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        Have a question? Wondering if this is right for you? Please send a message. There is no pressure to book anything.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-lg space-y-8 pt-12">
                   <ContactForm />
                </div>
            </div>
        </div>
    );
}
