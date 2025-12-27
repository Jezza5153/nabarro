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
  debug?: string; // only useful while testing
};


export async function submitContactForm(
  values: z.infer<typeof formSchema>
): Promise<ActionResult> {
  const parsed = formSchema.safeParse(values);
  if (!parsed.success) return { success: false, message: "Invalid data." };

  if (parsed.data.honeypot) {
    // bot: pretend success
    return { success: true, message: "Message received — we’ll reply by email." };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return {
      success: false,
      message: "Server missing RESEND_API_KEY.",
      debug: "Add RESEND_API_KEY in your project's environment variables.",
    };
  }

  const resend = new Resend(key);

  const to =
    process.env.CONTACT_FORM_RECIPIENT_EMAIL || "nabarrocoaching@gmail.com";

  // No-domain “from” address (works for testing, may have limits)
  const from = "Nabarro Coaching <onboarding@resend.dev>";

  const { name, email, phone, reason, message } = parsed.data;

  const subject = `New inquiry (${reason}) — ${name}`;

  const text = `New website inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Reason: ${reason}

Message:
${message}
`;

  try {
    const result = await resend.emails.send({
      from,
      to,
      subject,
      reply_to: email, // IMPORTANT: correct field name for Resend SDK
      text,
    });
    
    console.log("RESEND OK:", result.data);

    return { success: true, message: "Message received — we’ll reply by email." };

  } catch (error: any) {
    console.error("RESEND SEND ERROR:", error);

    return {
      success: false,
      message: "Email failed to send. Please try again.",
      debug: error?.message || JSON.stringify(error),
    };
  }
}