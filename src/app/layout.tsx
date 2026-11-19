import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/language-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: "Oswald Tito | Full-Stack Software Engineer & Web Developer",
  description:
    "Etalase profesional Oswald Tito: Pengembangan aplikasi web modern, website perusahaan, dan solusi software engineering terukur.",
  keywords: [
    "Oswald Tito",
    "Full-Stack Developer",
    "Web Developer Indonesia",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Jasa Pembuatan Website",
  ],
  authors: [{ name: "Oswald Tito" }],
  creator: "Oswald Tito",
  metadataBase: new URL("https://oswaldtito.com"),
  openGraph: {
    title: "Oswald Tito | Full-Stack Software Engineer & Web Developer",
    description:
      "Pengembangan aplikasi web modern, website perusahaan berkecepatan tinggi, dan solusi software terukur.",
    url: "https://oswaldtito.com",
    siteName: "Oswald Tito Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oswald Tito | Full-Stack Software Engineer & Web Developer",
    description:
      "Pengembangan aplikasi web modern, website perusahaan, dan solusi software terukur.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0D14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent/20 selection:text-brand-accent">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
              <FloatingWhatsApp />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
