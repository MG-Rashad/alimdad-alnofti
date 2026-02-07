"use client";

import { useLocale } from "@/lib/locale-context";
import { AnimatedSection } from "@/components/animated-section";
import { ArrowRight } from "lucide-react";

export function CtaSection({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) {
  const { t, locale } = useLocale();
  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";

  return (
    <section className={`py-24 lg:py-32 bg-teal-900 ${fontClass}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-50 mb-4 text-balance">
            {t.cta.title}
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <p className="text-lg text-teal-200 mb-8 max-w-2xl mx-auto text-pretty">
            {t.cta.subtitle}
          </p>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-50 text-teal-900 font-semibold rounded-lg hover:bg-teal-100 transition-colors text-sm lg:text-base"
          >
            {t.cta.button}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
