"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { SITE_CONFIG, getWhatsAppLink } from "@/lib/config";
import { MessageSquare, Mail, Send, Check, Copy, AlertCircle, Clock, Sparkles } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format alamat email tidak valid"),
  service: z.string().min(1, "Pilih layanan yang dibutuhkan"),
  message: z.string().min(10, "Detail pesan minimal 10 karakter"),
});

export function ContactSection() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: t.contact.serviceOptions[0] || "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: t.contact.serviceOptions[0] || "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 md:py-32 border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-brand-accent" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-brand-accent">
              {t.contact.badge}
            </span>
          </div>
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight"
          >
            {t.contact.title}
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* Dual Luxury Conversion Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: WhatsApp Fast Track Concierge Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-brand-border bg-brand-surface space-y-8 shadow-xl">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Respon Prioritas</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-text">
                  {t.contact.whatsappHeading}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {t.contact.whatsappDescription}
                </p>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={getWhatsAppLink(language)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl transition-all min-h-[48px]"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>{t.contact.whatsappButton}</span>
              </a>

              {/* Direct Email Box with 1-Click Copy */}
              <div className="pt-6 border-t border-brand-border space-y-2.5">
                <p className="text-[11px] font-mono text-brand-muted uppercase font-semibold tracking-wider">
                  Email Korespondensi:
                </p>
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-brand-bg border border-brand-border">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-brand-text truncate">
                    <Mail className="w-4 h-4 text-brand-accent shrink-0" aria-hidden="true" />
                    <span className="truncate">{SITE_CONFIG.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Salin alamat email"
                    className="p-2 rounded-xl text-brand-muted hover:text-brand-text hover:bg-brand-surface transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
                {emailCopied && (
                  <p className="text-xs text-emerald-500 flex items-center gap-1 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    <span>{t.contact.emailCopied}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right: Validated Executive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 sm:p-10 rounded-3xl border border-brand-border bg-brand-surface space-y-6 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-brand-text">
                {t.contact.formHeading}
              </h3>

              {status === "success" && (
                <div
                  role="alert"
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-sm flex items-start gap-3"
                >
                  <Check className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                  <p>{t.contact.successMessage}</p>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                  <p>{t.contact.errorMessage}</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-semibold text-brand-text uppercase tracking-wider"
                  >
                    {t.contact.nameLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-muted/40 focus:border-brand-accent focus:outline-none min-h-[48px]"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-semibold text-brand-text uppercase tracking-wider"
                  >
                    {t.contact.emailLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-muted/40 focus:border-brand-accent focus:outline-none min-h-[48px]"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-service"
                  className="block text-xs font-mono font-semibold text-brand-text uppercase tracking-wider"
                >
                  {t.contact.serviceLabel}
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-brand-border bg-brand-bg text-brand-text focus:border-brand-accent focus:outline-none min-h-[48px]"
                >
                  {t.contact.serviceOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono font-semibold text-brand-text uppercase tracking-wider"
                >
                  {t.contact.messageLabel} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-muted/40 focus:border-brand-accent focus:outline-none resize-y"
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-text text-brand-bg font-bold text-sm hover:opacity-90 disabled:opacity-50 transition-opacity min-h-[48px]"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>
                  {status === "submitting" ? t.contact.submitting : t.contact.submitButton}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
