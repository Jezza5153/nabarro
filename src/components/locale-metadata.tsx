"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/language-provider";
import { getCopy } from "@/lib/i18n";

export function LocaleMetadata() {
  const { locale } = useLanguage();
  const t = getCopy(locale);

  useEffect(() => {
    document.title = t.meta.pageTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [locale, t.meta.pageTitle, t.meta.description]);

  return null;
}
