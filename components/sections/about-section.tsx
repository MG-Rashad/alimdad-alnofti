"use client";

import { useLocale } from "@/lib/locale-context";
import { AnimatedSection } from "@/components/animated-section";
import {
  Award,
  Shield,
  TrendingUp,
  Target,
  Users,
  Globe2,
  BadgeCheck,
  Clock,
  Gem,
  Zap,
} from "lucide-react";

export function AboutSection() {
  const { t, locale } = useLocale();
  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";

  const highlights = [
    { icon: Award, title: t.about_section.quality, desc: t.about_section.quality_desc },
    { icon: Shield, title: t.about_section.safety, desc: t.about_section.safety_desc },
    { icon: TrendingUp, title: t.about_section.performance, desc: t.about_section.performance_desc },
  ];

  const whyUsIcons = [Target, Users, BadgeCheck, Gem, Zap, Clock];

  return (
    <section
      id="about"
      className={`py-24 lg:py-32 ${fontClass}`}
    >
      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.about_section.title}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              {t.about_section.description}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="text-center p-6 lg:p-8 bg-card border border-border rounded-xl">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.why_us.title}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why_us.items.map((item, index) => {
            const Icon = whyUsIcons[index] || Globe2;
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
