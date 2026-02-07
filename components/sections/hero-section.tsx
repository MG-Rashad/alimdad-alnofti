"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { AnimatedSection } from "@/components/animated-section";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const heroImages = [
  { src: "/hero 1.jpg", alt: "Oil refinery at night with illuminated towers" },
  { src: "/hero 2.jpg", alt: "Industrial oil refinery complex at dusk" },
  { src: "/hero 3.jpg", alt: "Offshore oil platform in the ocean at twilight" },
];

export function HeroSection({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) {
  const { t, locale } = useLocale();
  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${fontClass}`}
    >
      {/* Background slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{
            opacity: index === currentSlide ? 1 : 0,
            animation: index === currentSlide
              ? "kenburns 6s ease-in-out forwards"
              : "none",
          }}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover brightness-125 contrast-[1.05]"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-teal-950/55" />

      {/* Geometric accent lines */}
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <div className="absolute top-1/4 start-0 w-1/3 h-px bg-teal-400/15" />
        <div className="absolute top-1/2 end-0 w-1/4 h-px bg-teal-400/15" />
        <div className="absolute bottom-1/3 start-1/4 w-1/5 h-px bg-teal-400/15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-32">
        <AnimatedSection delay={200}>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-teal-50 leading-tight text-balance mb-6 drop-shadow-lg">
            {t.hero.headline}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-lg lg:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed text-pretty mb-10 drop-shadow-md">
            {t.hero.subheading}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate("services")}
              className="px-8 py-3.5 bg-teal-50 text-teal-900 font-semibold rounded-lg hover:bg-teal-100 transition-colors text-sm lg:text-base"
            >
              {t.hero.cta_services}
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-3.5 border-2 border-teal-300 text-teal-100 font-semibold rounded-lg hover:bg-teal-800/50 transition-colors text-sm lg:text-base"
            >
              {t.hero.cta_contact}
            </button>
          </div>
        </AnimatedSection>

        {/* Slide indicators */}
        <AnimatedSection delay={800}>
          <div className="flex items-center justify-center gap-2 mt-10">
            {heroImages.map((_, index) => (
              <button
                key={`slide-indicator-${heroImages[index].src}`}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-8 bg-teal-300"
                    : "w-2 bg-teal-500/50 hover:bg-teal-400/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection delay={1000}>
          <button
            onClick={() => onNavigate("services")}
            className="mt-8 inline-flex flex-col items-center text-teal-400 hover:text-teal-200 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
