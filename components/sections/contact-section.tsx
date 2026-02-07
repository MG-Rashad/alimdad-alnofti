"use client";

import React from "react"

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { AnimatedSection } from "@/components/animated-section";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

export function ContactSection() {
  const { t, locale } = useLocale();
  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact_page.info.address_title,
      value: t.contact_page.info.address,
    },
    {
      icon: Mail,
      title: t.contact_page.info.email_title,
      value: t.contact_page.info.email,
    },
    {
      icon: Phone,
      title: t.contact_page.info.phone_title,
      value: t.contact_page.info.phone,
      dir: "ltr" as const,
    },
    {
      icon: Clock,
      title: t.contact_page.info.hours_title,
      value: t.contact_page.info.hours,
    },
  ];

  return (
    <section
      id="contact"
      className={`py-24 lg:py-32 bg-background ${fontClass}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.contact_page.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t.contact_page.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl"
                    >
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-0.5">
                          {info.title}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          dir={info.dir}
                        >
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={200}>
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-xl p-6 lg:p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      {t.contact_page.form.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      {t.contact_page.form.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      {t.contact_page.form.phone}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      {t.contact_page.form.subject}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    {t.contact_page.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-60 transition-colors text-sm"
                >
                  {sending ? (
                    t.contact_page.form.sending
                  ) : submitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      {t.contact_page.form.success}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t.contact_page.form.submit}
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
