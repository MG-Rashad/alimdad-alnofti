import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "ALIMDAD ALNOFTI - For Oil Services",
  description:
    "ALIMDAD ALNOFTI - Integrated oil and gas services - Procurement, Logistics, Equipment Supply & HSE Solutions",
};

export const viewport: Viewport = {
  themeColor: "#1a6b66",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} ${cairo.variable} font-sans antialiased`}
      >
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
