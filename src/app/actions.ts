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
  debugId?: string; // show only in dev if you want
};

function getDebugId() {
  try {
    return crypto.randomUUID();
  } catch {
    return String(Date.now());
  }
}

export async function submitContactForm(
  values: z.infer<typeof formSchema>
): Promise<ActionResult> {
  const debugId = getDebugId();

  const parsed = formSchema.safeParse(values);
  if (!parsed.success) {
    console.warn(`[contact:${debugId}] Invalid form payload`, parsed.error?.flatten?.());
    return { success: false, message: "Invalid data provided.", debugId };
  }

  // Honeypot: silently accept
  if (parsed.data.honeypot) {
    console.log(`[contact:${debugId}] Honeypot triggered (likely bot).`);
    return { success: true, message: "Message received — we’ll reply by email." };
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL || "nabarrocoaching@gmail.com";

  // IMPORTANT:
  // If you do not have a domain yet, Resend lets you test using onboarding@resend.dev.
  // For best deliverability later, you’ll want a real domain sender.
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL || "onboarding@resend.dev";
  const from = `Nabarro Coaching <${fromEmail}>`;

  if (!resendKey) {
    console.error(`[contact:${debugId}] Missing RESEND_API_KEY. Check .env.local and hosting env vars.`);
    console.log(`[contact:${debugId}] Submission (not emailed):`, parsed.data);
    return {
      success: false,
      message: "Email service is not configured yet. Please try again later.",
      debugId,
    };
  }

  const resend = new Resend(resendKey);
  const { name, email, phone, reason, message } = parsed.data;

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: [toEmail],
      subject: `New inquiry (${reason}) — ${name}`,
      replyTo: email, // ✅ Resend Node SDK uses replyTo (camelCase)
      text: `New website inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Reason: ${reason}

Message:
${message}
`,
    });

    // ✅ hard “did it send?” check
    if (error) {
      console.error(`[contact:${debugId}] Resend error:`, error);
      return {
        success: false,
        message: "Could not send your message right now. Please try again.",
        debugId,
      };
    }

    console.log(`[contact:${debugId}] Resend sent OK:`, data);
    return {
      success: true,
      message: "Message received — we’ll reply by email.",
      debugId: process.env.NODE_ENV !== "production" ? (data as any)?.id || debugId : undefined,
    };
  } catch (err) {
    console.error(`[contact:${debugId}] Resend exception:`, err);
    return {
      success: false,
      message: "Could not send your message. Please try again later.",
      debugId,
    };
  }
}
