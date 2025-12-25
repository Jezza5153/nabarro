"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.enum(["lessons", "catering", "consulting", "other"]),
  message: z.string().min(10),
  consent: z.boolean().refine((val) => val === true),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
    const validatedFields = formSchema.safeParse(values);

    if (!validatedFields.success) {
        return { success: false, message: "Invalid data provided." };
    }

    // Simulate sending an email or saving to a database
    console.log("New contact form submission:", validatedFields.data);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // You can add error handling for your email service here.
    // For this example, we'll always return success.
    
    return { success: true, message: "Message sent successfully!" };
}
