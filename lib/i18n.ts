export const locales = ["ar", "en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export const localeNames: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
  fr: "Français",
};

export const localeDirection: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
  fr: "ltr",
};
