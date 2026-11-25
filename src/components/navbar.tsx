"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/language-context";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/config";
import { Sun, Moon, Globe, Menu, X, MessageSquare } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#services", label: t.nav.services },
    { href: "#contact", label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/80 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Studio Mark */}
        <a
          href="#"
          className="flex items-center gap-3 font-bold text-lg text-brand-text tracking-tight group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-xl p-1"
        >
          <span className="w-9 h-9 rounded-xl bg-brand-surface border border-brand-accent/40 text-brand-accent flex items-center justify-center font-mono text-sm font-extrabold group-hover:scale-105 group-hover:border-brand-accent transition-all shadow-sm overflow-hidden relative">
            <Image
              src="/4.jpeg"
              alt={SITE_CONFIG.name}
              fill
              sizes="36px"
              className="object-cover object-[50%_18%] rounded-xl"
            />
          </span>
          <div className="hidden sm:block leading-none">
            <span className="block font-bold text-sm tracking-tight">
              {SITE_CONFIG.name}
            </span>
            <span className="block font-mono text-[10px] text-brand-muted tracking-wider uppercase mt-0.5">
              Software Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-brand-surface/60 border border-brand-border/60"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-text hover:bg-brand-surface rounded-xl transition-all min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Lang, Theme, WhatsApp CTA */}
        <div className="flex items-center gap-2.5">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={`Ubah bahasa ke ${language === "id" ? "English" : "Bahasa Indonesia"}`}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold rounded-xl border border-brand-border bg-brand-surface text-brand-muted hover:text-brand-text hover:border-brand-accent/40 transition-colors min-h-[44px] min-w-[44px] justify-center"
          >
            <Globe
              className="w-3.5 h-3.5 text-brand-accent"
              aria-hidden="true"
            />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                resolvedTheme === "dark"
                  ? "Beralih ke mode terang (Light mode)"
                  : "Beralih ke mode gelap (Dark mode)"
              }
              className="p-2.5 rounded-xl border border-brand-border bg-brand-surface text-brand-muted hover:text-brand-text hover:border-brand-accent/40 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon
                  className="w-4 h-4 text-brand-accent"
                  aria-hidden="true"
                />
              )}
            </button>
          )}

          {/* Desktop Direct WhatsApp CTA */}
          <a
            href={getWhatsAppLink(language)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-brand-accent text-white hover:opacity-95 shadow-md shadow-brand-accent/20 transition-all min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>{t.nav.whatsappCta}</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={
              mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            }
            className="md:hidden p-2.5 rounded-xl border border-brand-border bg-brand-surface text-brand-text hover:bg-brand-surface-hover min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-t border-brand-border bg-brand-surface px-5 py-6 space-y-3 shadow-2xl animate-fade-in"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-brand-text hover:bg-brand-surface-hover transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-brand-border">
            <a
              href={getWhatsAppLink(language)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-accent text-white font-bold text-xs uppercase tracking-wider min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>{t.nav.whatsappCta}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
