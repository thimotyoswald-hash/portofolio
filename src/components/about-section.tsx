"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { SITE_CONFIG } from "@/lib/config";
import {
  Compass,
  Zap,
  MessageCircle,
  FileCode2,
  Palette,
  Server,
  Rocket,
  ShieldCheck,
  CheckCircle,
  Quote,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  const { t, language } = useLanguage();

  const principleIcons = [
    <Compass key="arch" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
    <Zap key="perf" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
    <MessageCircle key="collab" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
  ];

  const processIcons = [
    <FileCode2 key="disc" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
    <Palette key="proto" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
    <Server key="build" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
    <Rocket key="launch" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 md:py-32 border-b border-brand-border bg-brand-surface/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-brand-accent" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-brand-accent">
              {t.about.badge}
            </span>
          </div>
          <h2
            id="about-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight leading-[1.12]"
          >
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Narrative Chapter: The Story Behind the Engineer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Storytelling Text Body */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block font-mono text-xs font-bold text-brand-accent px-3 py-1 rounded-full bg-brand-accent-muted border border-brand-accent/20 uppercase tracking-wider">
              {t.about.storyChapterTitle}
            </span>

            <div className="space-y-5 text-base text-brand-text/90 leading-relaxed font-normal">
              {t.about.storyParagraphs.map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Core Commitments */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl border border-brand-border bg-brand-surface text-xs font-medium text-brand-text">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Next.js App Router & TypeScript</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl border border-brand-border bg-brand-surface text-xs font-medium text-brand-text">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Interaksi UI Halus & 60 FPS</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl border border-brand-border bg-brand-surface text-xs font-medium text-brand-text">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Prisma, PostgreSQL & Redis</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl border border-brand-border bg-brand-surface text-xs font-medium text-brand-text">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Aksesibilitas WCAG AA Standard</span>
              </div>
            </div>
          </div>

          {/* Luxury Studio Profile Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="relative p-8 sm:p-10 rounded-3xl border border-brand-border bg-brand-surface shadow-2xl space-y-6 overflow-hidden">
              {/* Subtle metallic sheen gradient */}
              <div
                className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-accent/15 via-transparent to-transparent pointer-events-none rounded-bl-full"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-brand-bg border border-brand-accent/40 text-brand-accent flex items-center justify-center font-mono text-xl font-extrabold shadow-sm">
                  OT
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active for Projects</span>
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-text">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-xs font-mono text-brand-accent tracking-wider uppercase mt-1">
                  {SITE_CONFIG.role}
                </p>
              </div>

              {/* Quotation / Personal Philosophy */}
              <div className="p-4 rounded-2xl bg-brand-bg/80 border border-brand-border/60 relative">
                <Quote className="w-4 h-4 text-brand-accent/40 absolute top-3 left-3" aria-hidden="true" />
                <p className="text-xs text-brand-muted pl-6 italic leading-relaxed">
                  {language === "id"
                    ? "Kode harus dijalankan dengan presisi matematis, sementara antarmukanya terasa alami dan menghargai manusia yang menggunakannya."
                    : "Code should execute with mathematical precision, while the interface feels effortless and respectful of the human using it."}
                </p>
              </div>

              {/* Practical Details */}
              <div className="space-y-3 pt-2 text-xs text-brand-muted border-t border-brand-border/60">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Lokasi & Basis:</span>
                  </span>
                  <span className="font-semibold text-brand-text">Indonesia (Remote Global)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Ketersediaan Waktu:</span>
                  </span>
                  <span className="font-semibold text-brand-text">Freelance & Kontrak Agensi</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Bahasa Komunikasi:</span>
                  </span>
                  <span className="font-semibold text-brand-text">Bahasa Indonesia & English</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Three Core Principles (The Manifesto) */}
        <div className="space-y-8 pt-8 border-t border-brand-border">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent">
              {t.about.principlesBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text">
              {t.about.principlesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.principles.map((principle, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-brand-border bg-brand-surface space-y-4 hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand-accent px-2.5 py-1 rounded-md bg-brand-accent-muted border border-brand-accent/20">
                    {principle.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center">
                    {principleIcons[idx % principleIcons.length]}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-brand-text">
                  {principle.title}
                </h4>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The 4-Step Engineering Journey (How We Work) */}
        <div className="space-y-8 pt-8 border-t border-brand-border">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent">
              {t.about.processBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text">
              {t.about.processTitle}
            </h3>
            <p className="text-sm text-brand-muted max-w-2xl">
              {t.about.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-7 rounded-3xl border border-brand-border bg-brand-surface space-y-4 flex flex-col justify-between hover:border-brand-accent/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-brand-accent uppercase tracking-wider">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center">
                      {processIcons[idx % processIcons.length]}
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-brand-text">
                    {step.title}
                  </h4>

                  <p className="text-xs text-brand-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Commitments / Guarantees Grid */}
        <div className="space-y-8 pt-8 border-t border-brand-border">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent">
              {t.about.guaranteesBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text">
              {t.about.guaranteesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.guarantees.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-brand-border bg-brand-surface space-y-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                </div>
                <h4 className="text-sm font-bold text-brand-text">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
