// src/lib/language-provider.tsx
"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { project, Locale } from '@/content/project';

// Define the shape of the context
interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: typeof project.i18n.nl; // Use one language as the shape for the content type
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('nl');

  const value = {
    locale,
    setLocale,
    content: project.i18n[locale],
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
