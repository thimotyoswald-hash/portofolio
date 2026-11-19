export const SITE_CONFIG = {
  name: "Oswald Tito",
  role: "Full-Stack Software Engineer & Web Developer",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "oswaldtito.dev@gmail.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890", // Ganti dengan nomor WhatsApp aktif (format internasional tanpa +)
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/oswaldtito",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/oswaldtito",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://oswaldtito.com",
};

export function getWhatsAppLink(language: "id" | "en", customMessage?: string) {
  const defaultText =
    language === "en"
      ? "Hi Oswald, I came across your portfolio and would like to discuss a web/software development project."
      : "Halo Oswald, saya melihat portofolio Anda dan ingin berkonsultasi mengenai proyek pengembangan website/software.";
  const message = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
}
