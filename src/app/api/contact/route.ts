
import { NextResponse } from "next/server";
import * as z from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  reason: z.enum([
    "try-out",
    "private-lesson",
    "small-group",
    "technique-improvement",
    "abc-diploma",
    "other",
  ]),
  message: z.string().min(10),
  consent: z.boolean(),
  honeypot: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = formSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid data provided." },
        { status: 400 }
      );
    }

    // Honeypot: silently accept
    if (parsed.data.honeypot) {
      return NextResponse.json({ success: true, message: "Message received — we’ll reply by email." });
    }

    if (!parsed.data.consent) {
      return NextResponse.json(
        { success: false, message: "Consent required." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("RESEND_API_KEY missing");
      return NextResponse.json(
        { success: false, message: "Email service not configured." },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL || "nabarrocoaching@gmail.com";
    const fromEmail = process.env.CONTACT_FORM_FROM || "onboarding@resend.dev";

    const resend = new Resend(resendKey);
    const { name, email, phone, reason, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: `Nabarro Coaching <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
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

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Could not send your message. Try again later." },
        { status: 502 }
      );
    }

    console.log("Email sent OK:", data?.id);
    return NextResponse.json({ success: true, message: "Message received — we’ll reply by email." });
  } catch (err) {
    console.error("API /api/contact exception:", err);
    return NextResponse.json(
      { success: false, message: "Server error. Try again later." },
      { status: 500 }
    );
  }
}
