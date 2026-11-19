"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { SITE_CONFIG } from "@/lib/config";
import { Github, Linkedin, Mail, CheckCircle2 } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-base text-brand-text">
                {SITE_CONFIG.name}
              </span>
              <span className="text-xs text-brand-muted">•</span>
              <span className="text-xs text-brand-muted">
                {SITE_CONFIG.role}
              </span>
            </div>
            <p className="text-xs text-brand-muted">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social Profiles & WCAG Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              <span>{t.footer.verifiedContrast}</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub Oswald Tito"
                className="p-2.5 rounded-lg border border-brand-border bg-brand-bg text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn Oswald Tito"
                className="p-2.5 rounded-lg border border-brand-border bg-brand-bg text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Kirim Email ke Oswald Tito"
                className="p-2.5 rounded-lg border border-brand-border bg-brand-bg text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-8 border-t border-brand-border/60 text-center text-xs text-brand-muted">
          <p>
            © {currentYear} {SITE_CONFIG.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
