"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Hero3DScene } from "@/components/hero-3d-scene";
import { getWhatsAppLink } from "@/lib/config";
import { ArrowDown, MessageSquare, Terminal, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-brand-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Role & Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border bg-brand-surface text-xs font-medium text-brand-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>{t.hero.status}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-[1.15]"
            >
              {t.hero.headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Two Primary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* CTA 1: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-text text-brand-bg font-semibold text-sm hover:opacity-90 transition-opacity min-h-[44px] shadow-sm"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* CTA 2: WhatsApp Chat */}
              <a
                href={getWhatsAppLink(language)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-brand-border bg-brand-surface font-semibold text-sm text-brand-text hover:bg-brand-surface-hover hover:border-brand-accent/50 transition-all min-h-[44px] shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>
            </div>

            {/* Quick Proof Signals: Real engineering pillars */}
            <div className="pt-6 border-t border-brand-border grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-brand-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" aria-hidden="true" />
                <span>Next.js App Router & SSR</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" aria-hidden="true" />
                <span>Clean API & SQL Architecture</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" aria-hidden="true" />
                <span>Responsive & Accessible (WCAG AA)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Architectural Scene */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <Hero3DScene />
            <p className="mt-3 text-xs text-brand-muted/80 text-center flex items-center justify-center gap-1.5 font-mono">
              <Terminal className="w-3.5 h-3.5 text-brand-accent" aria-hidden="true" />
              <span>{t.hero.canvasHint}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
