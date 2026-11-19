"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import idTranslations from "@/content/locales/id.json";
import enTranslations from "@/content/locales/en.json";

export type Language = "id" | "en";
export type Translations = typeof idTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("preferred-language") as Language | null;
      if (stored === "id" || stored === "en") {
        setLanguageState(stored);
      } else {
        const browserLang = navigator.language?.toLowerCase();
        if (browserLang.startsWith("id")) {
          setLanguageState("id");
        } else {
          setLanguageState("en");
        }
      }
    } catch {
      // Ignore localStorage access failures
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("preferred-language", lang);
    } catch {
      // Ignore localStorage write failures
    }
  };

  const t = language === "en" ? enTranslations : idTranslations;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
