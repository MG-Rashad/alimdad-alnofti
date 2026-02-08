"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { AnimatedSection } from "@/components/animated-section";

const clients = [
  {
    name: "Akakus Oil Operations",
    logo: "/Client 1.png",
  },
  {
    name: "Brega Petroleum Marketing Co.",
    logo: "/Client 2.png",
  },
];

export function ClientsSection() {
  const { t, locale } = useLocale();
  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";

  return (
    <section
      id="clients"
      className={`py-24 lg:py-32 bg-muted/50 ${fontClass}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.clients_section.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t.clients_section.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.clients_section.description}
          </p>
        </AnimatedSection>

        {/* Client logos grid - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {clients.map((client, index) => (
            <AnimatedSection key={client.name} delay={index * 150}>
              <div className="group flex items-center justify-center bg-card border border-border rounded-xl p-8 lg:p-10 hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-48 sm:h-56">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={280}
                  height={160}
                  className="max-h-32 sm:max-h-36 w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-center text-sm font-medium text-muted-foreground mt-3">
                {client.name}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
