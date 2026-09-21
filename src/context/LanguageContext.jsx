import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      switchToLight: "Switch to Light Mode",
      switchToDark: "Switch to Dark Mode",
      switchToId: "Ganti ke Bahasa Indonesia",
      switchToEn: "Switch to English"
    },
    // Hero
    hero: {
      headlinePart1: "Building Fluid, Scalable &",
      headlinePart2: "High-Performance Mobile Apps.",
      greeting: "Hi, I am",
      role: "Mobile Developer (Flutter)",
      viewResume: "View Resume",
      copiedEmail: "Email copied: ",
      resumeNotLinked: "Resume file not linked yet (set in portfolioData.js)"
    },
    // Projects Section
    projects: {
      tag: "Mobile Engineering & Production",
      title: "Featured Mobile Applications",
      desc: "Production-grade cross-platform apps, offline-first systems, and architecture case studies built with Flutter and clean code principles.",
      searchPlaceholder: "Search project by tech, title or tags...",
      showing: "Showing",
      of: "of",
      projectsText: "projects",
      noResultsTitle: "No projects match your query",
      noResultsMatching: "No mobile projects found matching",
      noResults: "No projects match your current filters.",
      resetFilters: "Reset Filters & Search",
      btnPreview: "PREVIEW",
      btnCaseStudy: "CASE STUDY",
      catAll: "ALL PROJECTS",
      catMobile: "MOBILE APPS",
      catFullstack: "CROSS-PLATFORM & BACKEND"
    },
    // Specs Preview Modal
    specsModal: {
      summaryOverview: "PROJECT SUMMARY & OVERVIEW",
      archHighlights: "KEY ARCHITECTURAL HIGHLIGHTS",
      techStackTags: "TECHNOLOGY STACK & TAGS",
      btnGithub: "GITHUB",
      btnFullCaseStudy: "FULL CASE STUDY"
    },
    // Case Study Page
    caseStudy: {
      backBtn: "ALL PORTFOLIO PROJECTS",
      projectOverview: "PROJECT OVERVIEW",
      theChallenge: "The Engineering Challenge",
      theSolution: "The Architectural Solution",
      keyFeatures: "KEY FEATURES",
      challengeProblem: "CHALLENGE & PROBLEM STATEMENT",
      architecturalSolution: "ARCHITECTURAL SOLUTION & IMPLEMENTATION",
      keyMetricsImpact: "KEY METRICS & TECHNICAL IMPACT",
      keyArchitecturePoints: "CORE ARCHITECTURAL PILLARS",
      technicalHighlights: "TECHNICAL HIGHLIGHTS & BEST PRACTICES",
      projectLinks: "PROJECT LINKS",
      sourceCode: "SOURCE CODE",
      privateCode: "Private Client Code (Under NDA)",
      livePreview: "LIVE PREVIEW",
      techStack: "TECH STACK",
      projectInfo: "PROJECT INFO",
      category: "Category",
      year: "Year",
      screenshotsPreviews: "SCREENSHOTS & PREVIEWS",
      inspectFullscreen: "Inspect Fullscreen HD"
    },
    // Experience & Education
    experience: {
      tag: "Career Journey & Background",
      title: "Work Experience & Education",
      desc: "Professional mobile engineering track record across production POS apps, offline-first systems, and a formal Computer Science degree.",
      educationHeading: "Formal Education",
      graduated: "Graduated"
    },
    // Contact Section
    contact: {
      tag: "Connect & Collaborate",
      title: "Let's Connect & Work Together",
      desc: "Interested in discussing mobile app engineering opportunities, Flutter consulting, or project collaborations? Reach out through the channels below.",
      directChannels: "DIRECT CONTACT CHANNELS",
      emailDispatch: "EMAIL DISPATCH",
      copiedEmailToast: "Email copied: ",
      copied: "Copied!",
      copyEmail: "Copy email address",
      openGithub: "Open GitHub Profile in new tab",
      openLinkedin: "Open LinkedIn Profile in new tab",
      directRedirect: "Direct Redirect",
      sendViaGmail: "Send via Gmail",
      formSubtitle: "Fill in your message below to open directly in Gmail compose with details prefilled.",
      fullName: "Full Name",
      namePlaceholder: "e.g. John Doe",
      emailAddress: "Email Address",
      emailPlaceholder: "john@company.com",
      messageDetails: "Message Details",
      messagePlaceholder: "Describe your mobile app requirements, Flutter role, or project scope...",
      btnSend: "Send Message",
      redirectingToast: "Redirecting to Gmail with prefilled message..."
    },
    // Footer
    footer: {
      statusOperational: "All systems operational",
      rightsReserved: "All rights reserved.",
      backToTop: "Back to Top"
    }
  },
  id: {
    // Navbar
    nav: {
      about: "Tentang",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
      switchToLight: "Beralih ke Mode Terang",
      switchToDark: "Beralih ke Mode Gelap",
      switchToId: "Ganti ke Bahasa Indonesia",
      switchToEn: "Switch to English"
    },
    // Hero
    hero: {
      headlinePart1: "Membangun Aplikasi Mobile",
      headlinePart2: "Fluid, Terukur & Berperforma Tinggi.",
      greeting: "Halo, saya",
      role: "Mobile Developer (Flutter)",
      viewResume: "Lihat Resume",
      copiedEmail: "Email berhasil disalin: ",
      resumeNotLinked: "File Resume/CV belum ditautkan (atur di portfolioData.js)"
    },
    // Projects Section
    projects: {
      tag: "Rekayasa Perangkat Lunak Mobile",
      title: "Proyek Aplikasi Mobile Pilihan",
      desc: "Aplikasi cross-platform tingkat produksi, sistem offline-first, dan studi kasus arsitektur dibangun dengan Flutter dan prinsip clean code.",
      searchPlaceholder: "Cari proyek berdasarkan teknologi, judul, atau tag...",
      showing: "Menampilkan",
      of: "dari",
      projectsText: "proyek",
      noResultsTitle: "Tidak ada proyek yang cocok dengan pencarian Anda",
      noResultsMatching: "Tidak ditemukan proyek mobile yang sesuai dengan",
      noResults: "Tidak ada proyek yang cocok dengan filter pencarian Anda.",
      resetFilters: "Reset Filter & Pencarian",
      btnPreview: "PRATINJAU",
      btnCaseStudy: "STUDI KASUS",
      catAll: "SEMUA PROYEK",
      catMobile: "APLIKASI MOBILE",
      catFullstack: "CROSS-PLATFORM & BACKEND"
    },
    // Specs Preview Modal
    specsModal: {
      summaryOverview: "RINGKASAN & GAMBARAN PROYEK",
      archHighlights: "SOROTAN ARSITEKTUR UTAMA",
      techStackTags: "TEKNOLOGI & TAG",
      btnGithub: "GITHUB",
      btnFullCaseStudy: "STUDI KASUS LENGKAP"
    },
    // Case Study Page
    caseStudy: {
      backBtn: "KEMBALI KE SEMUA PROYEK",
      projectOverview: "GAMBARAN PROYEK",
      theChallenge: "Tantangan Rekayasa",
      theSolution: "Solusi Arsitektur",
      keyFeatures: "FITUR UTAMA",
      challengeProblem: "TANTANGAN & MASALAH",
      architecturalSolution: "SOLUSI ARSITEKTUR & IMPLEMENTASI",
      keyMetricsImpact: "METRIK UTAMA & DAMPAK TEKNIS",
      keyArchitecturePoints: "PILAR ARSITEKTUR UTAMA",
      technicalHighlights: "SOROTAN TEKNIS & PRAKTIK TERBAIK",
      projectLinks: "TAUTAN PROYEK",
      sourceCode: "KODE SUMBER",
      privateCode: "Kode Klien Privat (Terikat NDA)",
      livePreview: "PREVIEW LANGSUNG",
      techStack: "TEKNOLOGI",
      projectInfo: "INFO PROYEK",
      category: "Kategori",
      year: "Tahun",
      screenshotsPreviews: "TANGKAPAN LAYAR & PRATINJAU",
      inspectFullscreen: "Lihat Layar Penuh HD"
    },
    // Experience & Education
    experience: {
      tag: "Perjalanan Karier & Latar Belakang",
      title: "Pengalaman Kerja & Pendidikan",
      desc: "Rekam jejak rekayasa aplikasi mobile di sistem kasir POS produksi, aplikasi offline-first, dan gelar formal Ilmu Komputer.",
      educationHeading: "Pendidikan Formal",
      graduated: "Lulus"
    },
    // Contact Section
    contact: {
      tag: "Terhubung & Kolaborasi",
      title: "Mari Terhubung & Bekerja Sama",
      desc: "Tertarik mendiskusikan peluang kerja mobile developer, konsultasi Flutter, atau kolaborasi proyek? Hubungi saya melalui saluran di bawah ini.",
      directChannels: "SALURAN KONTAK LANGSUNG",
      emailDispatch: "PENGIRIMAN EMAIL",
      copiedEmailToast: "Email berhasil disalin: ",
      copied: "Tersalin!",
      copyEmail: "Salin alamat email",
      openGithub: "Buka Profil GitHub di tab baru",
      openLinkedin: "Buka Profil LinkedIn di tab baru",
      directRedirect: "Pengalihan Langsung",
      sendViaGmail: "Kirim via Gmail",
      formSubtitle: "Isi pesan Anda di bawah untuk langsung membuka Gmail dengan data yang telah terisi otomatis.",
      fullName: "Nama Lengkap",
      namePlaceholder: "contoh: Budi Santoso",
      emailAddress: "Alamat Email",
      emailPlaceholder: "budi@perusahaan.com",
      messageDetails: "Detail Pesan",
      messagePlaceholder: "Jelaskan kebutuhan aplikasi mobile Anda, tawaran posisi Flutter, atau cakupan proyek...",
      btnSend: "Kirim Pesan",
      redirectingToast: "Mengarahkan ke Gmail dengan pesan terisi otomatis..."
    },
    // Footer
    footer: {
      statusOperational: "Semua sistem beroperasi normal",
      rightsReserved: "Hak cipta dilindungi undang-undang.",
      backToTop: "Kembali ke Atas"
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  // Translation helper: t('nav.about') -> "About" or "Tentang"
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang] || translations.en;
    for (const k of keys) {
      if (!current || current[k] === undefined) {
        // Fallback to English
        let fallback = translations.en;
        for (const fbKey of keys) {
          if (!fallback || fallback[fbKey] === undefined) return path;
          fallback = fallback[fbKey];
        }
        return fallback;
      }
      current = current[k];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
