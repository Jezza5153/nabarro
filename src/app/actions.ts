// src/app/actions.ts (or wherever your server action lives)
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

type ActionResult = {
  success: boolean;
  message: string;
  debugId?: string; // optional, dev-only
};

export async function submitContactForm(
  values: z.infer<typeof formSchema>
): Promise<ActionResult> {
  const parsed = formSchema.safeParse(values);
  if (!parsed.success) return { success: false, message: "Invalid data provided." };

  // Honeypot = bot → pretend success
  if (parsed.data.honeypot) {
    return { success: true, message: "Message received — we’ll reply by email." };
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.warn("RESEND_API_KEY missing — logging submission only.");
    console.log("Contact submission:", parsed.data);
    return { success: true, message: "Message received — we’ll reply by email." };
  }

  // ✅ OPTION A: force deliver to your Hotmail for testing
  const toEmail = "j.arrascaeta@hotmail.com";

  const resend = new Resend(resendKey);
  const { name, email, phone, reason, message } = parsed.data;

  // Resend “from” when you have no domain verified
  const fromEmail = process.env.CONTACT_FORM_FROM || "onboarding@resend.dev";

  try {
    const { data, error } = await resend.emails.send({
      from: `SwimCoaching <${fromEmail}>`,
      to: [toEmail],
      subject: `New inquiry (${reason}) — ${name}`,
      // ✅ IMPORTANT: Resend uses replyTo (camelCase), not reply_to
      replyTo: email,
      text: `New website inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "-" }
Reason: ${reason}

Message:
${message}
`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "Could not send your message right now. Please try again in a moment.",
        debugId: process.env.NODE_ENV !== "production" ? String((error as any)?.message ?? error) : undefined,
      };
    }

    console.log("Resend sent OK:", data);
    return {
      success: true,
      message: "Message received — we’ll reply by email.",
      debugId: process.env.NODE_ENV !== "production" ? String((data as any)?.id ?? "") : undefined,
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
