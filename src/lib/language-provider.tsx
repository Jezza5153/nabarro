// src/lib/language-provider.tsx
"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { project, Locale } from '@/content/project';
import { getCopy } from './i18n';

// Define the shape of the context
type ContentType = (typeof project.i18n)[Locale];

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: ContentType;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const value: LanguageContextType = {
    locale,
    setLocale,
    content: getCopy(locale),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Create a custom hook for easy access to the context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
