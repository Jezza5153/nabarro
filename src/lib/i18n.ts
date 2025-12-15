import { project, Locale } from "@/content/project";

/**
 * Returns the correct language dictionary (nl/en/fr)
 * Falls back to "nl" if locale is missing/invalid.
 */
export function getCopy(locale: Locale) {
  return project.i18n[locale] ?? project.i18n.nl;
}
