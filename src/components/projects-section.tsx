"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { ExternalLink, Github, BookOpen, X, Check, Code2 } from "lucide-react";

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
      className="py-16 md:py-24 border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent">
            {t.projects.badge}
          </span>
          <h2
            id="projects-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-text tracking-tight"
          >
            {t.projects.title}
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            {t.projects.description}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.projects.items.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-brand-border bg-brand-surface overflow-hidden flex flex-col justify-between hover:border-brand-accent/50 transition-all duration-200 group"
            >
              <div>
                {/* SVG Mockup / Graphical Preview Canvas */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-brand-bg to-brand-surface border-b border-brand-border p-4 flex flex-col justify-between overflow-hidden">
                  {/* Mock Window Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-muted/70 truncate max-w-[150px]">
                      {project.id}
                    </span>
                  </div>

                  {/* Stylized Architectural Wireframe Illustration */}
                  <div className="my-auto py-2 flex items-center justify-center">
                    <div className="w-full max-w-[220px] p-3 rounded-lg border border-brand-border/60 bg-brand-surface/80 space-y-2 shadow-sm">
                      <div className="h-2 w-3/4 bg-brand-accent/30 rounded" />
                      <div className="grid grid-cols-3 gap-1.5 pt-1">
                        <div className="h-8 bg-brand-border/60 rounded" />
                        <div className="h-8 bg-brand-border/60 rounded" />
                        <div className="h-8 bg-brand-border/60 rounded" />
                      </div>
                      <div className="h-2 w-1/2 bg-brand-muted/20 rounded" />
                    </div>
                  </div>

                  {/* Tech stack badge strip */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-brand-surface-hover text-brand-muted border border-brand-border"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-brand-muted">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-muted line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-brand-border/50 mt-4 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:underline min-h-[44px]"
                >
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t.projects.details}</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Repository GitHub untuk ${project.title}`}
                    className="p-2 rounded-lg border border-brand-border bg-brand-surface-hover text-brand-muted hover:text-brand-text min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live Demo untuk ${project.title}`}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg bg-brand-text text-brand-bg font-semibold text-xs hover:opacity-90 min-h-[44px] transition-opacity"
                  >
                    <span>{t.projects.liveDemo}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-brand-accent uppercase tracking-wider">
                  Case Study
                </span>
                <h3
                  id="modal-project-title"
                  className="text-xl sm:text-2xl font-bold text-brand-text mt-1"
                >
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Tutup dialog studi kasus"
                className="p-2 rounded-lg border border-brand-border text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Summary */}
            <p className="text-sm text-brand-muted leading-relaxed">
              {activeModalProject.summary}
            </p>

            {/* Challenge & Solution Grid */}
            <div className="space-y-4 pt-4 border-t border-brand-border">
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  {t.projects.challengeLabel}
                </h4>
                <p className="text-sm text-brand-text leading-relaxed">
                  {activeModalProject.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {t.projects.solutionLabel}
                </h4>
                <p className="text-sm text-brand-text leading-relaxed">
                  {activeModalProject.solution}
                </p>
              </div>
            </div>

            {/* Architecture Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                Tech Stack Digunakan:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tech.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg border border-brand-border bg-brand-surface-hover text-brand-text"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action Links */}
            <div className="pt-4 border-t border-brand-border flex items-center justify-end gap-3">
              <a
                href={activeModalProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-brand-border text-sm font-semibold text-brand-text hover:bg-brand-surface-hover min-h-[44px]"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>{t.projects.viewCode}</span>
              </a>
              <a
                href={activeModalProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-accent text-white text-sm font-semibold hover:opacity-90 min-h-[44px]"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span>{t.projects.liveDemo}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
