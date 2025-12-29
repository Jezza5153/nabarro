import { NextResponse } from "next/server";
import * as z from "zod";
import { Resend } from "resend";

export const runtime = "nodejs"; // IMPORTANT: Resend should not run on Edge

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
  consent: z.boolean().refine((v) => v === true),
  honeypot: z.string().optional(),
});

function escapeText(s: string) {
  return s.replace(/[<>]/g, ""); // simple safety for headers/content
}

export async function POST(req: Request) {
  const debugId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : String(Date.now());

  try {
    const body = await req.json();
    const parsed = formSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid data provided.", debugId },
        { status: 400 }
      );
    }

    // Honeypot: silently accept
    if (parsed.data.honeypot) {
      return NextResponse.json(
        { success: true, message: "Message received — we’ll reply by email.", debugId },
        { status: 200 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("Missing RESEND_API_KEY", { debugId });
      return NextResponse.json(
        { success: false, message: "Email service is not configured yet.", debugId },
        { status: 500 }
      );
    }

    const toEmail =
      process.env.CONTACT_FORM_RECIPIENT_EMAIL || "nabarrocoaching@gmail.com";

    // MUST be on your verified domain (example: noreply@swimcoaching.nl)
    const fromEmail =
      process.env.CONTACT_FORM_FROM || "onboarding@resend.dev";

    const from = `Swimcoaching <${fromEmail}>`;

    const { name, email, phone, reason, message } = parsed.data;

    const resend = new Resend(resendKey);

    const { data, error } = await resend.emails.send({
      from,
      to: [toEmail],
      subject: `New inquiry (${reason}) — ${escapeText(name)}`,
      reply_to: email,
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
      console.error("Resend send error", { debugId, error });
      return NextResponse.json(
        { success: false, message: error.message || "Email send failed.", debugId },
        { status: 502 }
      );
    }

    console.log("Resend sent OK", { debugId, id: data?.id });
    return NextResponse.json(
      { success: true, message: "Message received — we’ll reply by email.", debugId },
      { status: 200 }
    );
  } catch (err) {
    console.error("API /api/contact crashed", { debugId, err });
    return NextResponse.json(
      { success: false, message: "Server error. Please try again later.", debugId },
      { status: 500 }
    );
  }
}
