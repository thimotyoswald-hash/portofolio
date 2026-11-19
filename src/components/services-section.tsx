"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Layers, Globe2, Cpu, CheckCircle } from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    fullstack: <Layers className="w-6 h-6 text-brand-accent" aria-hidden="true" />,
    corporate: <Globe2 className="w-6 h-6 text-brand-accent" aria-hidden="true" />,
    custom: <Cpu className="w-6 h-6 text-brand-accent" aria-hidden="true" />,
  };

  const serviceNumbers = ["01", "02", "03"];

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-20 md:py-32 border-b border-brand-border bg-brand-surface/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-brand-accent" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-brand-accent">
              {t.services.badge}
            </span>
          </div>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight"
          >
            {t.services.title}
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Luxury Studio Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-3xl border border-brand-border bg-brand-surface hover:border-brand-accent/50 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand-accent px-2.5 py-1 rounded-md bg-brand-accent-muted border border-brand-accent/20">
                    {serviceNumbers[index]}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center group-hover:border-brand-accent/40 transition-colors">
                    {iconMap[service.id]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-muted leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-8 pt-6 border-t border-brand-border/60 space-y-3">
                <p className="text-[11px] font-mono font-semibold text-brand-muted uppercase tracking-wider">
                  Deliverables:
                </p>
                <ul className="space-y-2.5">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-text/90">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
