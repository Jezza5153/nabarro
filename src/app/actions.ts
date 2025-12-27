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
  message: z
    .string()
    .min(10, { message: "Please tell us a bit more in your message." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted about your request.",
  }),
  honeypot: z.string().optional(),
});

type ActionResult = {
  success: boolean;
  message: string;
  // dev-only hint you can display if you want (or just read logs)
  debugId?: string;
};

export async function submitContactForm(
  values: z.infer<typeof formSchema>
): Promise<ActionResult> {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid data provided." };
  }

  // Honeypot: silently accept
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

  // Where Nathalie receives it
  const toEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL || "nabarrocoaching@gmail.com";

  const { name, email, phone, reason, message } = parsed.data;

  // NOTE:
  // - If you have NOT verified a domain in Resend, sending to arbitrary recipients may fail.
  // - Once you verify a domain, set `from` to something like: "SwimCoaching <[email protected]>"
  const from = process.env.CONTACT_FORM_FROM || "onboarding@resend.dev";

  try {
    const { data, error } = await resend.emails.send({
      from: `Nabarro Coaching <${from}>`,
      to: [toEmail],
      subject: `New inquiry (${reason}) — ${name}`,
      replyTo: email, // Nathalie can hit "Reply" straight to the client
      text: `New website inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Reason: ${reason}

Message:
${message}
`,
    });

    // ✅ THIS is the “did it actually send?” check
    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message:
          "Could not send your message right now. Please try again in a moment.",
        debugId: process.env.NODE_ENV !== "production" ? (error as any)?.message : undefined,
      };
    }

    console.log("Resend sent OK:", data);

    return {
      success: true,
      message: "Message received — we’ll reply by email.",
      debugId: process.env.NODE_ENV !== "production" ? (data as any)?.id : undefined,
    };
  } catch (err) {
    console.error("Resend exception:", err);
    return {
      success: false,
      message: "Could not send your message. Please try again later.",
      debugId: process.env.NODE_ENV !== "production" ? String(err) : undefined,
    };
  }
}
