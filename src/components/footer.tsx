"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { SITE_CONFIG } from "@/lib/config";
import { Github, Linkedin, Mail, CheckCircle2 } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-surface py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Studio Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="font-extrabold text-lg text-brand-text tracking-tight">
                {SITE_CONFIG.name}
              </span>
              <span className="text-xs text-brand-accent">•</span>
              <span className="text-xs font-mono text-brand-muted tracking-wider uppercase">
                {SITE_CONFIG.role}
              </span>
            </div>
            <p className="text-xs text-brand-muted max-w-md leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social Profiles & WCAG Verification */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-emerald-500 font-mono font-medium px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.footer.verifiedContrast}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub Oswald Tito"
                className="p-3 rounded-xl border border-brand-border bg-brand-bg text-brand-muted hover:text-brand-text hover:border-brand-accent/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn Oswald Tito"
                className="p-3 rounded-xl border border-brand-border bg-brand-bg text-brand-muted hover:text-brand-text hover:border-brand-accent/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Kirim Email ke Oswald Tito"
                className="p-3 rounded-xl border border-brand-border bg-brand-bg text-brand-muted hover:text-brand-text hover:border-brand-accent/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-border/60 text-center text-xs text-brand-muted font-mono">
          <p>
            © {currentYear} {SITE_CONFIG.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
