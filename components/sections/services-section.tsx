"use client";

import { useLocale } from "@/lib/locale-context";
import { AnimatedSection } from "@/components/animated-section";
import {
  Package,
  Truck,
  Wrench,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const serviceIcons = {
  procurement: Package,
  logistics: Truck,
  equipment: Wrench,
  safety: ShieldCheck,
};

const serviceKeys = ["procurement", "logistics", "equipment", "safety"] as const;

export function ServicesSection() {
  const { t, locale } = useLocale();
  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";

  return (
    <section
      id="services"
      className={`py-24 lg:py-32 bg-background ${fontClass}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.services_section.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t.services_section.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key];
            const service = t.services[key];
            return (
              <AnimatedSection key={key} delay={index * 150}>
                <div className="group relative bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2 ms-16 flex-1">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
