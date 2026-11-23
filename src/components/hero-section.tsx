"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Hero3DScene } from "@/components/hero-3d-scene";
import { getWhatsAppLink } from "@/lib/config";
import { ArrowDown, MessageSquare, Sparkles, BookOpen } from "lucide-react";

export function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative pt-12 pb-20 md:pt-24 md:pb-32 border-b border-brand-border overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-accent/10 via-transparent to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-border bg-brand-surface/70 backdrop-blur-md text-xs font-medium text-brand-muted shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" aria-hidden="true" />
              <span className="tracking-wide uppercase text-[11px] font-semibold text-brand-text/90">
                {t.hero.status}
              </span>
            </div>

            {/* Main Headline - Bold Editorial Scale */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text leading-[1.08]"
            >
              {language === "id" ? (
                <>
                  Rekayasa Aplikasi Web & Solusi Software Berkinerja{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-brand-accent to-brand-text">
                    Tinggi.
                  </span>
                </>
              ) : (
                <>
                  Architecting Resilient Web Systems & Bespoke Software{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-brand-accent to-brand-text">
                    Solutions.
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl font-normal">
              {t.hero.subheadline}
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-text text-brand-bg font-bold text-sm hover:opacity-90 active:scale-[0.99] transition-all min-h-[48px] shadow-lg shadow-black/10"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-brand-border bg-brand-surface/80 backdrop-blur-sm font-semibold text-sm text-brand-text hover:bg-brand-surface-hover hover:border-brand-accent/50 active:scale-[0.99] transition-all min-h-[48px] shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-brand-accent" aria-hidden="true" />
                <span>{t.hero.ctaAbout}</span>
              </a>

              <a
                href={getWhatsAppLink(language)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-brand-accent/30 bg-brand-accent-muted font-semibold text-sm text-brand-text hover:bg-brand-accent/20 transition-all min-h-[48px] shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-brand-accent" aria-hidden="true" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>
            </div>

            {/* Studio Engineering Accreditations */}
            <div className="pt-8 border-t border-brand-border/70 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-brand-muted">
              <div className="space-y-1">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-brand-accent font-semibold">
                  Performance
                </span>
                <p className="font-semibold text-brand-text">Next.js App Router & SSR</p>
              </div>
              <div className="space-y-1">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-brand-accent font-semibold">
                  Reliability
                </span>
                <p className="font-semibold text-brand-text">Clean SQL & REST APIs</p>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-brand-accent font-semibold">
                  Accessibility
                </span>
                <p className="font-semibold text-brand-text">WCAG AA Standard</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Liquid Metallic Sculpture */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <Hero3DScene />
            <p className="mt-4 text-xs text-brand-muted text-center flex items-center justify-center gap-1.5 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" aria-hidden="true" />
              <span>{t.hero.canvasHint}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
