import type { Locale } from "@/lib/i18n";
import en from "./en";
import ar from "./ar";
import fr from "./fr";

const translations: Record<Locale, typeof en> = {
  en,
  ar,
  fr,
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export type Translations = typeof en;
