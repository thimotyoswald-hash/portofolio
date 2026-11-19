"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { ExternalLink, Github, ArrowUpRight, X, Layers, Cpu, Database } from "lucide-react";

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeModalProject, setActiveModalProject] = useState<any | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeModalProject) {
        setActiveModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalProject]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-20 md:py-32 border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-brand-accent" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-brand-accent">
              {t.projects.badge}
            </span>
          </div>
          <h2
            id="projects-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight"
          >
            {t.projects.title}
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            {t.projects.description}
          </p>
        </div>

        {/* Gallery-Style Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => (
            <article
              key={project.id}
              className="group rounded-3xl border border-brand-border bg-brand-surface overflow-hidden flex flex-col justify-between hover:border-brand-accent/60 hover:shadow-2xl hover:shadow-black/25 transition-all duration-300"
            >
              <div>
                {/* Visual Exhibit Preview */}
                <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-brand-bg via-brand-surface to-brand-bg border-b border-brand-border p-5 flex flex-col justify-between overflow-hidden">
                  {/* Top Bar with Status Monogram */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-brand-accent px-2 py-0.5 rounded bg-brand-accent-muted border border-brand-accent/20">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono text-brand-muted uppercase tracking-wider">
                      Case Study
                    </span>
                  </div>

                  {/* Curated Architectural UI Graphic */}
                  <div className="my-auto py-3 flex items-center justify-center">
                    <div className="w-full max-w-[240px] p-4 rounded-xl border border-brand-border/70 bg-brand-bg/90 backdrop-blur-md space-y-2.5 shadow-lg group-hover:scale-[1.02] transition-transform">
                      <div className="flex items-center justify-between">
                        <div className="h-2 w-20 bg-brand-accent/50 rounded-full" />
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 pt-1">
                        <div className="h-10 bg-brand-surface rounded-lg border border-brand-border/60" />
                        <div className="h-10 bg-brand-surface rounded-lg border border-brand-border/60" />
                        <div className="h-10 bg-brand-surface rounded-lg border border-brand-border/60" />
                      </div>
                      <div className="h-1.5 w-32 bg-brand-muted/20 rounded-full" />
                    </div>
                  </div>

                  {/* Tech Stack Strip */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-brand-bg text-brand-muted border border-brand-border/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-brand-muted font-semibold">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-7 space-y-3">
                  <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-muted line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-7 pt-0 border-t border-brand-border/50 mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1 text-xs font-bold text-brand-accent hover:underline min-h-[44px]"
                >
                  <span>{t.projects.details}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Repository GitHub untuk ${project.title}`}
                    className="p-2.5 rounded-xl border border-brand-border bg-brand-bg text-brand-muted hover:text-brand-text hover:border-brand-accent/40 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live Demo untuk ${project.title}`}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-text text-brand-bg font-bold text-xs hover:opacity-90 min-h-[44px] transition-opacity"
                  >
                    <span>{t.projects.liveDemo}</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Luxury Case Study Modal Dialog */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl border border-brand-border bg-brand-surface p-7 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-semibold text-brand-accent uppercase tracking-widest">
                  Architecture Case Study
                </span>
                <h3
                  id="modal-project-title"
                  className="text-2xl sm:text-3xl font-extrabold text-brand-text mt-1.5"
                >
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Tutup dialog studi kasus"
                className="p-2.5 rounded-xl border border-brand-border text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Summary */}
            <p className="text-sm text-brand-muted leading-relaxed">
              {activeModalProject.summary}
            </p>

            {/* Challenge & Solution Architecture Boxes */}
            <div className="space-y-4 pt-4 border-t border-brand-border">
              <div className="p-5 rounded-2xl bg-brand-bg border border-brand-border space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  {t.projects.challengeLabel}
                </span>
                <p className="text-sm text-brand-text leading-relaxed">
                  {activeModalProject.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-brand-bg border border-brand-border space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  {t.projects.solutionLabel}
                </span>
                <p className="text-sm text-brand-text leading-relaxed">
                  {activeModalProject.solution}
                </p>
              </div>
            </div>

            {/* Architecture Stack */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono font-semibold text-brand-muted uppercase tracking-wider">
                Tech Stack Architecture:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tech.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono rounded-xl border border-brand-border bg-brand-bg text-brand-text"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-brand-border flex items-center justify-end gap-3">
              <a
                href={activeModalProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-brand-border text-sm font-semibold text-brand-text hover:bg-brand-surface-hover min-h-[44px]"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>{t.projects.viewCode}</span>
              </a>
              <a
                href={activeModalProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-accent text-white text-sm font-bold hover:opacity-90 min-h-[44px]"
              >
                <span>{t.projects.liveDemo}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
