"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/language-context";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/config";
import { Sun, Moon, Globe, Menu, X, MessageSquare } from "lucide-react";

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
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#stack", label: t.nav.stack },
    { href: "#contact", label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-bold text-lg text-brand-text tracking-tight group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg p-1"
        >
          <span className="w-8 h-8 rounded-lg bg-brand-accent/15 text-brand-accent border border-brand-accent/30 flex items-center justify-center font-mono text-sm font-extrabold group-hover:scale-105 transition-transform">
            OT
          </span>
          <span className="hidden sm:inline font-semibold">{SITE_CONFIG.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Lang, Theme, WhatsApp CTA */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={`Ubah bahasa ke ${language === "id" ? "English" : "Bahasa Indonesia"}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-brand-border bg-brand-surface text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover transition-colors min-h-[44px] min-w-[44px] justify-center"
          >
            <Globe className="w-4 h-4 text-brand-accent" aria-hidden="true" />
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
              className="p-2 rounded-lg border border-brand-border bg-brand-surface text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-brand-accent" aria-hidden="true" />
              )}
            </button>
          )}

          {/* Desktop Direct WhatsApp CTA */}
          <a
            href={getWhatsAppLink(language)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-lg bg-brand-accent text-white hover:opacity-95 shadow-sm transition-all min-h-[44px]"
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
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="md:hidden p-2 rounded-lg border border-brand-border bg-brand-surface text-brand-text hover:bg-brand-surface-hover min-h-[44px] min-w-[44px] flex items-center justify-center"
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
          className="md:hidden border-t border-brand-border bg-brand-surface px-4 py-4 space-y-2 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-brand-text hover:bg-brand-surface-hover transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-brand-border">
            <a
              href={getWhatsAppLink(language)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-brand-accent text-white font-semibold text-sm min-h-[44px]"
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
