"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Layers, Globe2, Cpu, Check } from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    fullstack: <Layers className="w-6 h-6 text-brand-accent" aria-hidden="true" />,
    corporate: <Globe2 className="w-6 h-6 text-brand-accent" aria-hidden="true" />,
    custom: <Cpu className="w-6 h-6 text-brand-accent" aria-hidden="true" />,
  };

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-16 md:py-24 border-b border-brand-border bg-brand-surface/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent">
            {t.services.badge}
          </span>
          <h2
            id="services-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-text tracking-tight"
          >
            {t.services.title}
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={service.id}
              className={`p-6 sm:p-8 rounded-2xl border border-brand-border bg-brand-surface hover:border-brand-accent/40 transition-all duration-200 flex flex-col justify-between ${
                index === 0 ? "md:border-brand-accent/30 shadow-sm" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Service Icon with soft accent container */}
                <div className="w-12 h-12 rounded-xl bg-brand-accent-muted border border-brand-accent/20 flex items-center justify-center">
                  {iconMap[service.id]}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-brand-text">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-brand-muted leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-6 pt-6 border-t border-brand-border space-y-2.5">
                <p className="text-xs font-semibold text-brand-text/90 tracking-wide uppercase">
                  Output Spesifik:
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-brand-muted">
                      <Check className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" aria-hidden="true" />
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
