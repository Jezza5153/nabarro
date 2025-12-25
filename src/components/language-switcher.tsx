// src/components/language-switcher.tsx
"use client";

import { Check, Languages } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Locale } from "@/content/project";

const languageOptions: { value: Locale; label: string }[] = [
  { value: "en", label: "English" },
  { value: "nl", label: "Nederlands" },
  { value: "fr", label: "Français" },
  { value: "es", label: "Español" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/70 hover:bg-white border border-white/50"
        >
          <Languages className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            className="flex items-center justify-between"
            onSelect={() => setLocale(option.value)}
          >
            <span>{option.label}</span>
            {locale === option.value && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
