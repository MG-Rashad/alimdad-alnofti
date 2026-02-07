"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { type Locale, defaultLocale, localeDirection } from "@/lib/i18n";
import { getTranslations, type Translations } from "@/lib/translations";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  dir: "rtl" | "ltr";
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = localeDirection[newLocale];
  }, []);

  const t = getTranslations(locale);
  const dir = localeDirection[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
