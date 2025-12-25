"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  reason: z.enum(
    [
      "try-out",
      "private-lesson",
      "small-group",
      "technique-improvement",
      "abc-diploma",
      "other",
    ],
    {
      required_error: "Please select a reason for your inquiry.",
    }
  ),
  message: z
    .string()
    .min(10, { message: "Please tell us a bit more in your message." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted about your request.",
  }),
  honeypot: z.string().optional(), // Anti-spam honeypot field
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
    const validatedFields = formSchema.safeParse(values);

    if (!validatedFields.success) {
        return { success: false, message: "Invalid data provided." };
    }

    if (validatedFields.data.honeypot) {
      // This is likely a bot, fail silently but log it.
      console.log("Honeypot field filled, likely spam:", validatedFields.data);
      return { success: true, message: "Message sent successfully!" };
    }

    // TODO: Replace with a real email sending service like Resend.
    // For now, we will just log the submission to the console.
    console.log("New contact form submission:", {
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      phone: validatedFields.data.phone,
      reason: validatedFields.data.reason,
      message: validatedFields.data.message,
    });
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would handle potential errors from your email service here.
    // For this example, we'll always return success.
    
    // If RESEND_API_KEY is not set up, we show a generic success message.
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Skipping email sending. Submissions are only logged.");
      return { success: true, message: "Message received — we’ll reply by email." };
    }

    // Example with Resend (if it were installed and configured)
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        await resend.emails.send({
            from: 'Your Site <onboarding@resend.dev>',
            to: process.env.CONTACT_FORM_RECIPIENT_EMAIL,
            subject: `New Inquiry: ${validatedFields.data.reason}`,
            react: EmailTemplate({ ...validatedFields.data }),
        });
        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, message: "Could not send your message. Please try again later." };
    }
    */
    
    return { success: true, message: "Message sent successfully! We'll be in touch soon." };
}