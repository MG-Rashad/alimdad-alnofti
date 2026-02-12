"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";

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

export function Footer({ onNavigate }: { onNavigate: (section: string) => void }) {
  const { t, dir, locale } = useLocale();
  const fontClass = locale === "ar" ? "font-arabic" : "font-sans";

  return (
    <footer
      className={`bg-teal-900 text-teal-100 ${fontClass}`}
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="ALIMDAD ALNOFTI"
                width={40}
                height={40}
                className="h-10 w-10 object-contain brightness-200"
              />
              <div>
                <p className="font-bold text-teal-50">ALIMDAD ALNOFTI</p>
                <p className="text-xs text-teal-300 tracking-wider uppercase">
                  For Oil Services
                </p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm text-teal-300 leading-relaxed">
              {t.footer.description}
            </p>

            {/* Separator Line */}
            <div className="my-4 border-b border-teal-800"></div>

            {/* New: Statistical Code & Legal Name */}
            <div className="text-xs text-teal-400 space-y-1 mb-5">
              <p>
                <span className="font-semibold text-teal-200">{t.footer.stat_code_label}: </span>
                {t.footer.stat_code}
              </p>
              <p>
                <span className="font-semibold text-teal-200">{t.footer.legal_name_label}: </span>
                {t.footer.legal_name}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-teal-50 mb-4">
              {t.footer.quick_links}
            </h3>
            <ul className="flex flex-col gap-2">
              {(["home", "services", "about", "clients", "partners", "contact"] as const).map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(item)}
                      className="text-sm text-teal-300 hover:text-teal-50 transition-colors"
                    >
                      {t.nav[item]}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-teal-50 mb-4">
              {t.footer.our_services}
            </h3>
            <ul className="flex flex-col gap-2">
              {(
                ["procurement", "logistics", "equipment", "safety"] as const
              ).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => onNavigate("services")}
                    className="text-sm text-teal-300 hover:text-teal-50 transition-colors text-start"
                  >
                    {t.services[key].title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Social Media */}
          <div>
            <h3 className="font-semibold text-teal-50 mb-4">
              {t.footer.contact_info}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-teal-300">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {t.contact_page.info.address}
              </li>
              <li className="flex items-start gap-2 text-sm text-teal-300">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                {t.contact_page.info.email}
              </li>
              <li className="flex items-start gap-2 text-sm text-teal-300">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span dir="ltr">{t.contact_page.info.phone}</span>
              </li>
            </ul>

            {/* Moved: Social Media Icons */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center h-9 w-9 rounded-lg bg-teal-100 text-teal-900 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-teal-800 text-center">
          <p className="text-sm text-teal-400">
            &copy; {new Date().getFullYear()} {t.footer.company}.{" "}
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}