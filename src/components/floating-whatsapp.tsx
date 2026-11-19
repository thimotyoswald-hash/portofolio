"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { getWhatsAppLink } from "@/lib/config";
import { MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  const { language } = useLanguage();

  return (
    <aside aria-label="Aksi Cepat WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={getWhatsAppLink(language)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat langsung dengan Oswald Tito via WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 min-h-[48px] min-w-[48px] group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquare className="w-5 h-5 text-white" aria-hidden="true" />
        <span className="hidden sm:inline font-medium">WhatsApp</span>
      </a>
    </aside>
  );
}
