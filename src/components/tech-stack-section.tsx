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
      className="py-16 md:py-24 border-b border-brand-border bg-brand-surface/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent">
            {t.stack.badge}
          </span>
          <h2
            id="stack-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-text tracking-tight"
          >
            {t.stack.title}
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            {t.stack.description}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stack.categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-brand-border bg-brand-surface space-y-4 hover:border-brand-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent-muted border border-brand-accent/20 flex items-center justify-center">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <h3 className="text-base font-bold text-brand-text">
                  {cat.name}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-2 pt-2">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center gap-2 text-xs font-mono text-brand-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/60" aria-hidden="true" />
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
