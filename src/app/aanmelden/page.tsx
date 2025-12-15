
"use client";

import { BlobCard } from "@/components/blob-card";
import { PillLabel } from "@/components/pill-label";
import Link from "next/link";
import { useLanguage } from "@/lib/language-provider";
import { getCopy } from "@/lib/i18n";
import { project } from "@/content/project";

export default function AanmeldenPage() {
  const { locale } = useLanguage();
  const t = getCopy(locale).aanmelden;
  
  const mailtoLink = `mailto:${project.contact.email}?subject=${encodeURIComponent(t.mailto_subject)}&body=${t.mailto_body}`;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <BlobCard variant="blue" className="max-w-xl w-full">
        <div className="text-center">
            <PillLabel className="bg-white text-black">{t.title}</PillLabel>
            <h1 className="text-3xl font-bold text-white mt-4">{t.heading}</h1>
            <p className="text-white/80 mt-2 mb-6">
                {t.subheading}
            </p>
        </div>
        
        <div className="bg-white/10 rounded-xl p-6 text-white text-lg space-y-4 text-center">
          <p>{t.body}</p>
          <a
            href={mailtoLink}
            className="inline-block rounded-full px-8 py-3 font-semibold bg-white text-[hsl(var(--ink))] hover:bg-white/90"
          >
            {t.button}
          </a>
        </div>
        
        <div className="text-center mt-6">
            <Link href="/" className="text-sm text-white/70 hover:underline">
                &larr; {t.back_link}
            </Link>
        </div>
      </BlobCard>
    </div>
  );
}
