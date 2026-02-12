"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import { Menu, X, Globe, ChevronDown, Facebook, Linkedin } from "lucide-react";

// --- REMOVED "partners" FROM THIS LIST ---
const navItems = ["home", "services", "about", "clients", "contact"] as const;

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com", label: "X" },
];

export function Header({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (section: string) => void;
}) {
  const { locale, setLocale, t, dir } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm ${fontClass}`}
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 shrink-0"
        >
          <Image
            src="/logo.png"
            alt="ALIMDAD OIL COMPANY"
            width={48}
            height={48}
            className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-sm lg:text-base font-bold text-foreground leading-tight">
              {t.nav.brand_main}
            </p>
            <p className="text-[10px] lg:text-xs text-muted-foreground tracking-wider uppercase">
              {t.nav.brand_sub}
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === item
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {t.nav[item]}
            </button>
          ))}
        </nav>

        {/* Social Media + Language Switcher + Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center h-8 w-8 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <div className="hidden md:block w-px h-6 bg-border mx-1" />

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-md border border-border bg-transparent text-foreground hover:bg-muted transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{localeNames[locale]}</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            {langOpen && (
              <div className="absolute top-full mt-1 end-0 bg-card border border-border rounded-md shadow-lg py-1 min-w-[140px] z-50">
                {locales.map((l: Locale) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLocale(l);
                      setLangOpen(false);
                    }}
                    className={`w-full text-start px-4 py-2 text-sm transition-colors ${
                      locale === l
                        ? "text-primary bg-primary/10 font-medium"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted text-foreground"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border" dir={dir}>
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item);
                  setMobileOpen(false);
                }}
                className={`px-4 py-3 text-sm font-medium rounded-md text-start transition-colors ${
                  activeSection === item
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t.nav[item]}
              </button>
            ))}
          </nav>
          {/* Social Media Icons - Mobile */}
          <div className="flex items-center justify-center gap-3 px-4 pb-4 pt-2 border-t border-border">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center h-9 w-9 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}