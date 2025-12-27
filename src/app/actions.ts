"use server";

import * as z from "zod";
import { Resend } from "resend";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  reason: z.enum([
    "try-out",
    "private-lesson",
    "small-group",
    "technique-improvement",
    "abc-diploma",
    "other",
  ]),
  message: z.string().min(10, { message: "Please tell us a bit more in your message." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted about your request.",
  }),
  honeypot: z.string().optional(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);
  if (!parsed.success) return { success: false, message: "Invalid data provided." };

  if (parsed.data.honeypot) {
    return { success: true, message: "Message received — we’ll reply by email." };
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.warn("RESEND_API_KEY missing — logging submission only.");
    console.log("Contact submission:", parsed.data);
    return { success: true, message: "Message received — we’ll reply by email." };
  }

  const resend = new Resend(resendKey);

  const toEmail =
    process.env.CONTACT_FORM_RECIPIENT_EMAIL || "nabarrocoaching@gmail.com";

  const { name, email, phone, reason, message } = parsed.data;

  try {
    await resend.emails.send({
        from: "Nabarro Coaching <onboarding@resend.dev>", // works without domain
        to: toEmail,
        reply_to: email, // IMPORTANT so Nathalie can reply directly
        subject: `New inquiry (${reason}) — ${name}`,
        text: `New website inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Reason: ${reason}

Message:
${message}
`,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, message: "Could not send your message. Please try again later." };
  }
  

  return { success: true, message: "Message received — we’ll reply by email." };
}
