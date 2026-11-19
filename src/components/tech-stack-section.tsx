"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Code, Server, Database, Wrench } from "lucide-react";

export function TechStackSection() {
  const { t } = useLanguage();

  const categoryIcons = [
    <Code key="frontend" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
    <Server key="backend" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
    <Database key="db" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
    <Wrench key="tools" className="w-5 h-5 text-brand-accent" aria-hidden="true" />,
  ];

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="py-20 md:py-32 border-b border-brand-border bg-brand-surface/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-brand-accent" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-brand-accent">
              {t.stack.badge}
            </span>
          </div>
          <h2
            id="stack-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight"
          >
            {t.stack.title}
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            {t.stack.description}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stack.categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl border border-brand-border bg-brand-surface hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300 space-y-6"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <h3 className="text-base font-bold text-brand-text">
                  {cat.name}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-2.5 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center gap-2.5 text-xs font-mono text-brand-muted hover:text-brand-text transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/70" aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
