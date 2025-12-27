import { project, Locale } from "@/content/project";

/**
 * Returns the correct language dictionary.
 * As the project is now single-language, it always returns English.
 */
export function getCopy() {
  return project.i18n.en;
}
