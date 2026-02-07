"use client";

import { useLocale } from "@/lib/locale-context";
import { AnimatedSection } from "@/components/animated-section";
import { Handshake } from "lucide-react";

const partnerLogos = [
  "Schlumberger",
  "Halliburton",
  "Baker Hughes",
  "Weatherford",
  "NOV",
  "Cameron",
  "Honeywell",
  "Emerson",
  "ABB",
  "Siemens",
  "3M",
  "Dräger",
];

export function PartnersSection() {
  const { t, locale } = useLocale();
  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";

  return (
    <section
      id="partners"
      className={`py-24 lg:py-32 bg-muted ${fontClass}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.partners_section.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t.partners_section.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.partners_section.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
          {partnerLogos.map((name, index) => (
            <AnimatedSection key={name} delay={index * 80}>
              <div className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:shadow-md hover:border-primary/30 transition-all h-28">
                <Handshake className="h-6 w-6 text-primary/40 mb-2" />
                <span className="text-xs font-semibold text-muted-foreground text-center">
                  {name}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
