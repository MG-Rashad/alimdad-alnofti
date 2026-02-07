"use client";

import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";

const sections = ["home", "services", "about", "clients", "partners", "contact"];

export default function Page() {
  const { dir, locale } = useLocale();
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = useCallback((section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [dir, locale]);

  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";

  return (
    <div className={fontClass} dir={dir}>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <ServicesSection />
        <AboutSection />
        <ClientsSection />
        <PartnersSection />
        <CtaSection onNavigate={handleNavigate} />
        <ContactSection />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
