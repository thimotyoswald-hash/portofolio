# Portofolio Oswald Tito

Website portofolio profesional untuk **Oswald Tito** (Full-Stack Software Engineer & Web Developer) yang dibangun dengan Next.js 14 (App Router), TypeScript, Tailwind CSS, Three.js (Interactive 3D WebGL), next-themes, dan standar Anti-Slop UI/UX.

---

## Fitur Utama

- **Interactive 3D Architectural Core (Three.js)**:
  - Model 3D WebGL interaktif di Hero Section yang merespon gerakan kursor mouse dan sentuhan layar ponsel (drag to rotate).
  - Dilengkapi tombol toggle mode Wireframe vs Shaded.
  - Ramah baterai: Render loop otomatis berhenti (`IntersectionObserver`) saat canvas berada di luar layar.
  - Mendukung preferensi aksesibilitas `prefers-reduced-motion: reduce`.
- **Bilingual Instan (ID & EN)**:
  - Switcher bahasa instan antara Bahasa Indonesia dan Bahasa Inggris untuk seluruh konten situs tanpa reload halaman.
  - Tersimpan di `localStorage` dan mendeteksi preferensi browser pengguna.
- **Dark & Light Mode (next-themes)**:
  - Toggle tema gelap dan terang dengan kontras warna yang diverifikasi memenuhi standar aksesibilitas WCAG AA (kontras minimal 4.5:1 untuk teks biasa, >9:1 untuk mode gelap).
- **Dual Conversion (WhatsApp & Formulir Kontak)**:
  - Tombol WhatsApp cepat di Navbar, Hero, dan Floating Action Button dengan pesan pembuka otomatis (*pre-filled message*).
  - Formulir kontak terintegrasi dengan Route Handler `/api/contact` dan validasi skema Zod.
  - Fitur salin email sekali klik dengan notifikasi toast.
- **Portofolio Proyek & Modal Studi Kasus**:
  - Grid proyek lengkap dengan mockup visual SVG arsitektural, tag teknologi, link demo, dan repository GitHub.
  - Modal studi kasus interaktif untuk membedah tantangan teknis (*challenge*) dan solusi rekayasa (*solution*), dapat ditutup dengan tombol `Escape`.
- **Tech Stack & Skills Matrix**:
  - Pengelompokan keahlian terstruktur (Frontend, Backend, Database, dan Tools & DevOps).
- **SEO & Performa**:
  - Prerendering SSG/SSR cepat, konfigurasi Open Graph, Twitter Cards, `robots.txt`, dan `sitemap.xml`.

---

## Struktur Folder

```text
portofolio-oswald/
├── DESIGN.md                        # Panduan arah desain & sistem token warna (R-37, R-31)
├── package.json                     # Konfigurasi dependensi dan skrip proyek
├── tailwind.config.ts               # Konfigurasi Tailwind & token warna semantik
├── tsconfig.json                    # Konfigurasi TypeScript
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts     # Route handler API pengiriman pesan
│   │   ├── globals.css              # Reset CSS, token tema, cursor pointer, & focus ring
│   │   ├── layout.tsx               # Root layout, metadata SEO, & provider wrapping
│   │   ├── page.tsx                 # Halaman utama merangkum seluruh section
│   │   ├── robots.ts                # Generator robots.txt otomatis
│   │   └── sitemap.ts               # Generator sitemap.xml otomatis
│   ├── components/
│   │   ├── contact-section.tsx      # Formulir kontak & kartu WhatsApp
│   │   ├── floating-whatsapp.tsx    # Tombol aksi mengambang WhatsApp
│   │   ├── footer.tsx               # Footer terstruktur
│   │   ├── hero-3d-scene.tsx        # Scene WebGL 3D interaktif (Three.js)
│   │   ├── hero-section.tsx         # Hero section dengan value proposition & CTAs
│   │   ├── navbar.tsx               # Sticky navbar dengan drawer menu mobile
│   │   ├── projects-section.tsx     # Grid proyek & modal studi kasus
│   │   ├── services-section.tsx     # Layanan utama dengan checklist output
│   │   ├── tech-stack-section.tsx   # Matriks keahlian & perkakas teknis
│   │   └── theme-provider.tsx       # Wrapper next-themes
│   ├── context/
│   │   └── language-context.tsx     # Provider context bahasa dwibahasa (ID/EN)
│   ├── content/locales/
│   │   ├── id.json                  # Kamus teks Bahasa Indonesia (anti-slop verified)
│   │   └── en.json                  # Kamus teks Bahasa Inggris (anti-slop verified)
│   └── lib/
│       └── config.ts                # Konfigurasi kontak, WhatsApp, dan URL eksternal
```

---

## Konfigurasi Kontak & Lingkungan (.env)

Buat file `.env.local` di root proyek untuk menyesuaikan nomor WhatsApp dan email pribadi Anda:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=oswaldtito.dev@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_GITHUB_URL=https://github.com/oswaldtito
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/oswaldtito
NEXT_PUBLIC_SITE_URL=https://oswaldtito.com
```

*Catatan: Masukkan nomor WhatsApp dalam format internasional tanpa tanda `+` (contoh: `6281234567890`).*

---

## Menjalankan Proyek Secara Lokal

1. **Jalankan Mode Pengembangan:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

2. **Build Produksi:**
   ```bash
   npm run build
   ```

3. **Jalankan Server Produksi:**
   ```bash
   npm run start
   ```

---

## Standar Kualitas Desain (Anti-Slop Compliance)

Proyek ini dibangun dengan mematuhi protokol **Anti-Slop**:
- **Bebas Karakter Em Dash (`—`)**: Seluruh teks menggunakan tanda baca standar yang humanis.
- **Bebas Buzzword AI**: Tidak ada klaim kosong seperti *"seamless"*, *"cutting-edge"*, atau *"revolutionary"*.
- **Kontras WCAG AA**: Rasio kontras teks terverifikasi di atas 4.5:1 pada Dark Mode dan Light Mode.
- **Mobile-First & Touch Targets**: Setiap tombol dan elemen interaktif memiliki area sentuh minimal 44x44px.
- **Zero Dead Controls**: Semua link, tombol modal, switch tema, dan formulir memiliki aksi nyata dan feedback yang jelas.
