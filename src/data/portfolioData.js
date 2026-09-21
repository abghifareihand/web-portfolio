/**
 * PORTFOLIO DATA - ABGHI FAREIHAN
 * Mobile Developer (Flutter)
 * Supports English ('en') and Indonesian ('id') localization
 */

export const personalDataI18n = {
  en: {
    name: "Abghi Fareihan",
    nickname: "Abghi",
    handle: "abghi.dev",
    role: "Mobile Developer (Flutter)",
    tagline: "Crafting fluid, high-performance cross-platform mobile apps with end-to-end backend integration.",
    location: "Jakarta Selatan, Indonesia",
    availability: "Available for Fulltime & Project Based",
    statusColor: "#10b981",
    email: "abghifareihand@gmail.com",
    github: "https://github.com/abghifareihand",
    linkedin: "https://www.linkedin.com/in/abghifareihand",
    resumeUrl: "https://drive.google.com/file/d/1E3yO_SLr5Zdg-fICt4NFPPSMRKAawK9N/view",

    bio: [
      "I am a Mobile Developer specializing in Flutter and Dart. I focus on building responsive, 60fps cross-platform mobile applications with clean architecture, robust state management, and reliable offline-first capabilities.",
      "In addition to mobile engineering, I regularly build the supporting backend ecosystem (including Laravel RESTful APIs and web admin dashboards), enabling me to deliver complete, production-ready solutions from database design to the mobile user interface."
    ],

    metrics: [
      { value: "2+", label: "Years Experience", detail: "Flutter & Mobile Ecosystem" },
      { value: "10+", label: "Mobile Apps & Systems", detail: "End-to-End Solutions Delivered" },
      { value: "1:1", label: "Pixel-Perfect UI", detail: "Precise Figma-to-Code Slicing" },
      { value: "Android & iOS", label: "Cross-Platform", detail: "Optimized Single Codebase" }
    ]
  },
  id: {
    name: "Abghi Fareihan",
    nickname: "Abghi",
    handle: "abghi.dev",
    role: "Mobile Developer (Flutter)",
    tagline: "Membangun aplikasi mobile cross-platform yang fluid dan berperforma tinggi dengan integrasi backend end-to-end.",
    location: "Jakarta Selatan, Indonesia",
    availability: "Tersedia untuk Fulltime & Berbasis Proyek",
    statusColor: "#10b981",
    email: "abghifareihand@gmail.com",
    github: "https://github.com/abghifareihand",
    linkedin: "https://www.linkedin.com/in/abghifareihand",
    resumeUrl: "https://drive.google.com/file/d/1E3yO_SLr5Zdg-fICt4NFPPSMRKAawK9N/view",

    bio: [
      "Saya adalah seorang Mobile Developer dengan spesialisasi Flutter dan Dart. Saya berfokus membangun aplikasi mobile cross-platform 60fps yang responsif dengan clean architecture, manajemen state yang kokoh, dan kapabilitas offline-first yang andal.",
      "Selain pengembangan mobile, saya juga terbiasa membangun ekosistem backend pendukung (termasuk RESTful API Laravel dan dashboard admin web), sehingga mampu menghadirkan solusi menyeluruh yang siap produksi dari perancangan database hingga antarmuka mobile."
    ],

    metrics: [
      { value: "2+", label: "Tahun Pengalaman", detail: "Ekosistem Flutter & Mobile" },
      { value: "10+", label: "Aplikasi Mobile & Sistem", detail: "Solusi Lengkap Diselesaikan" },
      { value: "1:1", label: "UI Pixel-Perfect", detail: "Slicing Presisi Figma ke Kode" },
      { value: "Android & iOS", label: "Lintas Platform", detail: "Single Codebase Teroptimasi" }
    ]
  }
};

export const getPersonalData = (lang = 'en') => personalDataI18n[lang] || personalDataI18n.en;
export const personalData = personalDataI18n.en;

export const projectCategoriesI18n = {
  en: [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "backend", label: "Fullstack" }
  ],
  id: [
    { id: "all", label: "Semua Proyek" },
    { id: "mobile", label: "Aplikasi Mobile" },
    { id: "backend", label: "Fullstack" }
  ]
};

export const getProjectCategories = (lang = 'en') => projectCategoriesI18n[lang] || projectCategoriesI18n.en;
export const projectCategories = projectCategoriesI18n.en;

/**
 * ============================================================================
 * TEMPLATE UNTUK MENAMBAH PROJECT BARU
 * Copy template object di bawah ini dan paste ke dalam array rawProjectsData.
 * ============================================================================
 * {
 *   id: "nama-project-unik", // Digunakan untuk URL: /#case-study/nama-project-unik
 *   title: "Nama Project - Subtitle / Tagline",
 *   category: "mobile", // Pilihan: "mobile" atau "backend"
 *   categoryLabel: "Flutter", // Label singkat yang tampil di badge
 *   year: "2024",
 *   status: "Production", // Contoh: "Production", "In Development", atau "Open Source"
 *   featured: true, // true jika ingin tampil paling depan
 *   summary: {
 *     en: "Brief English overview of the project and what it does.",
 *     id: "Ringkasan singkat tentang proyek dan apa kegunaannya dalam Bahasa Indonesia."
 *   },
 *   tags: ["Flutter", "Dart", "BLoC", "REST API"], // Tag teknologi
 *   overview: {
 *     en: [
 *       "Paragraph 1: Background, user needs, and architectural problem solved.",
 *       "Paragraph 2: Implementation details, Flutter state management, and backend synergy."
 *     ],
 *     id: [
 *       "Paragraf 1: Latar belakang, kebutuhan pengguna, dan masalah arsitektur yang diselesaikan.",
 *       "Paragraf 2: Detail implementasi, manajemen state Flutter, dan sinergi backend."
 *     ]
 *   },
 *   keyMetrics: {
 *     en: [
 *       "Metric 1 (e.g. 60fps smooth animation)",
 *       "Metric 2 (e.g. Sub-200ms response time)"
 *     ],
 *     id: [
 *       "Metrik 1 (contoh: Animasi 60fps mulus)",
 *       "Metrik 2 (contoh: Waktu respon di bawah 200ms)"
 *     ]
 *   },
 *   architecturePoints: {
 *     en: [
 *       "Core architectural pillar 1",
 *       "Core architectural pillar 2"
 *     ],
 *     id: [
 *       "Pilar arsitektur utama 1",
 *       "Pilar arsitektur utama 2"
 *     ]
 *   },
 *   coverImage: "/projects/nama-project-unik/screen1.png",
 *   screenshots: [
 *     "/projects/nama-project-unik/screen1.png",
 *     "/projects/nama-project-unik/screen2.png",
 *     "/projects/nama-project-unik/screen3.png"
 *   ],
 *   highlights: {
 *     en: [
 *       "Key feature / technical highlight 1",
 *       "Key feature / technical highlight 2"
 *     ],
 *     id: [
 *       "Fitur unggulan / sorotan teknis 1",
 *       "Fitur unggulan / sorotan teknis 2"
 *     ]
 *   },
 *   github: "https://github.com/abghifareihand/repo-name", // Isi null atau '#' jika private NDA
 *   liveDemo: "https://link-preview-atau-demo.com" // Isi null jika belum ada preview
 * },
 * ============================================================================
 */

const rawProjectsData = [
  {
    id: "quickbite-ecosystem",
    title: "QuickBite - On-Demand Delivery System (App + API + Web Admin)",
    category: "backend",
    categoryLabel: "Flutter & Laravel",
    year: "2024",
    status: "Production",
    featured: true,
    summary: {
      en: "Complete on-demand food delivery ecosystem comprising a fluid Flutter customer mobile app, real-time rider GPS tracking, a robust Laravel REST API backend, and a comprehensive web management dashboard.",
      id: "Ekosistem pesan-antar makanan lengkap terdiri dari aplikasi mobile Flutter yang fluid, pelacakan GPS kurir real-time, backend REST API Laravel yang tangguh, serta dashboard web manajemen admin."
    },
    tags: ["Flutter", "Dart", "Laravel API", "Web Admin Dashboard", "MySQL", "BLoC", "FCM", "Google Maps"],
    overview: {
      en: [
        "Coordinating instant order dispatches between customers, delivery riders, and restaurant operators required synchronizing mobile clients with an authoritative backend without race conditions.",
        "Engineered the Flutter mobile app using BLoC and Google Maps marker interpolation, paired with a Laravel 11 REST API utilizing database transactions, Sanctum authentication, and automated FCM push notifications."
      ],
      id: [
        "Koordinasi pengiriman pesanan instan antara pelanggan, kurir, dan restoran memerlukan sinkronisasi klien mobile dengan backend secara konsisten tanpa race condition.",
        "Membangun aplikasi mobile Flutter menggunakan BLoC dan interpolasi marker Google Maps, dipadukan dengan REST API Laravel 11 berbasis transaksi database, autentikasi Sanctum, dan push notifikasi FCM otomatis."
      ]
    },
    keyMetrics: {
      en: [
        "Sub-200ms API response time under peak ordering hours",
        "Consistent 60fps smooth map rider tracking on mobile",
        "Processed 15,000+ monthly orders through the Laravel backend"
      ],
      id: [
        "Waktu respon API di bawah 200ms pada jam sibuk pemesanan",
        "Pelacakan kurir peta mulus konsisten 60fps di mobile",
        "Memproses lebih dari 15.000 pesanan per bulan melalui backend Laravel"
      ]
    },
    architecturePoints: {
      en: [
        "Flutter Mobile App (Clean Architecture + BLoC + Dio)",
        "Laravel RESTful API with Sanctum Token Authentication",
        "Web Admin Dashboard for menu, order, and driver management",
        "Firebase Cloud Messaging (FCM) high-priority notification dispatch"
      ],
      id: [
        "Aplikasi Mobile Flutter (Clean Architecture + BLoC + Dio)",
        "RESTful API Laravel dengan Autentikasi Token Sanctum",
        "Dashboard Web Admin untuk manajemen menu, pesanan, dan driver",
        "Pengiriman notifikasi prioritas tinggi Firebase Cloud Messaging (FCM)"
      ]
    },
    coverImage: "/projects/quickbite-ecosystem/screen1.png",
    screenshots: [
      "/projects/quickbite-ecosystem/screen1.png",
      "/projects/quickbite-ecosystem/screen2.png",
      "/projects/quickbite-ecosystem/screen3.png"
    ],
    highlights: {
      en: [
        "Feature-First Clean Architecture separating data, domain, and presentation layers",
        "BLoC state management pattern with strict unidirectional event-driven data flow",
        "Google Maps SDK real-time rider GPS tracking with 60fps marker interpolation",
        "FCM Push Notifications with automated background order state machine updates",
        "Laravel 11 RESTful API backend utilizing database transactions & Sanctum authentication",
        "Comprehensive Web Admin dashboard for instant merchant order & revenue oversight"
      ],
      id: [
        "Feature-First Clean Architecture memisahkan layer data, domain, dan presentation",
        "Pola manajemen state BLoC dengan aliran data satu arah berbasis event yang ketat",
        "Pelacakan GPS kurir real-time Google Maps SDK dengan interpolasi marker 60fps",
        "Notifikasi FCM Push dengan pembaruan state machine pesanan di latar belakang",
        "Backend RESTful API Laravel 11 memanfaatkan transaksi database & autentikasi Sanctum",
        "Dashboard Web Admin lengkap untuk pemantauan pesanan & pendapatan merchant secara instan"
      ]
    },
    github: "https://github.com/abghifareihand/quickbite-delivery-ecosystem",
    liveDemo: "https://github.com/abghifareihand/quickbite-delivery-ecosystem#preview"
  },
  {
    id: "union-getah",
    title: "Union Getah - Offline Harvest App & Bluetooth Print (Perhutani)",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2024",
    status: "Production",
    featured: true,
    summary: {
      en: "Specialized offline-first mobile application built for Perum Perhutani to record and compute forest resin harvests in zero-signal areas, featuring Bluetooth thermal receipt printing.",
      id: "Aplikasi mobile offline-first khusus yang dibangun untuk Perum Perhutani untuk mencatat dan menghitung hasil panen getah di area tanpa sinyal, dilengkapi cetak struk termal via Bluetooth."
    },
    tags: ["Flutter", "Dart", "Bluetooth ESC/POS", "SQLite / Hive", "Offline-First", "REST API"],
    overview: {
      en: [
        "Forest rangers operating deep in remote forest reserves had zero cellular connectivity, preventing data entry and resulting in paper-based delays and manual calculation errors.",
        "Designed an offline-first mobile workflow with initial online authentication, local offline harvest computation, on-site Bluetooth thermal printing for farmers, and automatic cloud synchronization upon reconnection."
      ],
      id: [
        "Petugas mandor di pedalaman hutan lindung sama sekali tidak memiliki jaringan seluler, menghambat input data sehingga menimbulkan keterlambatan dan risiko kesalahan hitung manual.",
        "Merancang alur kerja mobile offline-first dengan autentikasi online awal, komputasi panen lokal secara offline, cetak struk termal Bluetooth langsung di lapangan untuk penyadap, dan sinkronisasi otomatis ke cloud saat terhubung kembali."
      ]
    },
    keyMetrics: {
      en: [
        "100% offline operational capability in remote deep forest zones",
        "Instant on-site Bluetooth receipt printing in < 2 seconds",
        "Eliminated manual paper calculation errors for resin yields"
      ],
      id: [
        "100% kemampuan operasional offline di zona pedalaman hutan tanpa sinyal",
        "Pencetakan struk fisik instan di tempat via Bluetooth dalam waktu < 2 detik",
        "Menghilangkan kesalahan perhitungan getah manual berbasis kertas"
      ]
    },
    architecturePoints: {
      en: [
        "Offline-first local state storage via SQLite & Hive",
        "Bluetooth thermal printer integration via ESC/POS commands",
        "Initial online token sync with resilient offline fallback",
        "Automated two-way batch sync upon restoring network connectivity"
      ],
      id: [
        "Penyimpanan state lokal offline-first via SQLite & Hive",
        "Integrasi printer termal Bluetooth via perintah ESC/POS",
        "Sinkronisasi token online awal dengan fallback offline yang andal",
        "Sinkronisasi batch dua arah otomatis saat jaringan pulih"
      ]
    },
    coverImage: "/projects/union-getah/screen1.png",
    screenshots: [
      "/projects/union-getah/screen1.png",
      "/projects/union-getah/screen2.png",
      "/projects/union-getah/screen3.png"
    ],
    highlights: {
      en: [
        "100% Offline-first local database utilizing SQLite and Hive for zero-signal deep forest zones",
        "Bluetooth thermal printer integration streaming native ESC/POS commands in < 2s",
        "Automated two-way batch cloud synchronization with conflict resolution when online",
        "Biometric fingerprint authentication ensuring tamper-proof field officer validation",
        "Instant yield computation eliminating manual paper-based rubber harvest calculation errors",
        "Role-based operational authorization between field harvesters and Perhutani supervisors"
      ],
      id: [
        "Database lokal 100% offline-first menggunakan SQLite dan Hive untuk area hutan tanpa sinyal",
        "Integrasi printer termal Bluetooth dengan pengiriman perintah native ESC/POS < 2 detik",
        "Sinkronisasi batch cloud dua arah otomatis dengan resolusi konflik saat kembali online",
        "Autentikasi sidik jari biometrik untuk memastikan validasi petugas lapangan yang aman",
        "Komputasi hasil panen instan menghilangkan kesalahan hitung manual berbasis kertas",
        "Otorisasi operasional berbasis peran antara penyadap lapangan dan supervisor Perhutani"
      ]
    },
    github: "https://github.com/abghifareihand/union-getah-mobile",
    liveDemo: "https://github.com/abghifareihand/union-getah-mobile"
  },
  {
    id: "finpulse-wallet",
    title: "FinPulse - Digital Banking & Multi-Currency Wallet",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2024",
    status: "Production",
    featured: true,
    summary: {
      en: "Secure digital wallet app featuring biometric authentication, instant QRIS/peer-to-peer transfers, and interactive real-time spending analytics charts.",
      id: "Aplikasi dompet digital aman dengan autentikasi biometrik, transfer instan QRIS/peer-to-peer, dan grafik analitik pengeluaran real-time yang interaktif."
    },
    tags: ["Flutter", "Dart", "BLoC / Cubit", "Clean Architecture", "Biometrics", "REST API", "Dio"],
    overview: {
      en: [
        "Financial applications require strict state predictability, encrypted local token storage, and zero data race conditions during concurrent financial requests.",
        "Implemented Clean Architecture with BLoC state management, Flutter Secure Storage for keychain/keystore tokens, and custom Dio interceptors for automated JWT refresh."
      ],
      id: [
        "Aplikasi finansial memerlukan prediktabilitas state yang ketat, penyimpanan token lokal terenkripsi, dan pencegahan race condition data saat transaksi bersamaan.",
        "Menerapkan Clean Architecture dengan manajemen state BLoC, Flutter Secure Storage untuk keychain/keystore token, dan custom interceptor Dio untuk auto-refresh JWT."
      ]
    },
    keyMetrics: {
      en: [
        "99.9% crash-free sessions across 30k+ active users",
        "App cold start reduced to < 1.2s",
        "Passed OWASP Mobile Security verification"
      ],
      id: [
        "99,9% sesi bebas crash di lebih dari 30 ribu pengguna aktif",
        "Cold start aplikasi berkurang hingga < 1,2 detik",
        "Lolos verifikasi keamanan OWASP Mobile Security"
      ]
    },
    architecturePoints: {
      en: [
        "Clean Architecture (Domain, Data, Presentation layers)",
        "Strict Event-State separation via Flutter BLoC",
        "Biometric local auth (FaceID / Fingerprint) fallback",
        "Custom Chart painter for smooth 60fps financial analytics"
      ],
      id: [
        "Clean Architecture (Layer Domain, Data, Presentation)",
        "Pemisahan Event-State yang ketat melalui Flutter BLoC",
        "Fallback autentikasi lokal biometrik (FaceID / Sidik Jari)",
        "Custom Chart painter untuk visualisasi analitik finansial 60fps mulus"
      ]
    },
    coverImage: "/projects/finpulse-wallet/screen1.png",
    screenshots: [
      "/projects/finpulse-wallet/screen1.png",
      "/projects/finpulse-wallet/screen2.png",
      "/projects/finpulse-wallet/screen3.png"
    ],
    highlights: {
      en: [
        "Multi-currency digital wallet ledger with offline foreign exchange rate caching",
        "Hardware-backed biometric authentication (Face ID & Fingerprint) with secure enclave",
        "Interactive spending breakdown analytics powered by custom Flutter Canvas rendering",
        "Dynamic QRIS payment generation and real-time merchant QR camera scanner",
        "Optimistic UI state mutations for zero perceived transaction and transfer latency",
        "Encrypted SQLite transaction history with instant export to downloadable PDF receipts"
      ],
      id: [
        "Buku besar dompet digital multi-mata uang dengan cache kurs valuta asing offline",
        "Autentikasi biometrik berbasis hardware (Face ID & Sidik Jari) dengan secure enclave",
        "Analitik rincian pengeluaran interaktif dengan rendering custom Flutter Canvas",
        "Pembuatan pembayaran QRIS dinamis dan pemindai kamera QR merchant real-time",
        "Mutasi state UI optimistik untuk menghilangkan persepsi latensi saat transaksi",
        "Riwayat transaksi SQLite terenkripsi dengan ekspor instan ke struk PDF yang dapat diunduh"
      ]
    },
    github: "https://github.com/abghifareihand/finpulse-wallet",
    liveDemo: "https://github.com/abghifareihand/finpulse-wallet#preview"
  },
  {
    id: "mediconnect-app",
    title: "MediConnect - Telemedicine & Clinic Booking App",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2024",
    status: "Production",
    featured: false,
    summary: {
      en: "Comprehensive healthcare mobile app enabling real-time doctor consultations, video/audio calls, prescription tracking, and appointment scheduling.",
      id: "Aplikasi mobile layanan kesehatan komprehensif untuk konsultasi dokter real-time, panggilan video/audio, pelacakan resep, dan penjadwalan janji temu."
    },
    tags: ["Flutter", "Dart", "Riverpod", "WebRTC", "Firebase Cloud Messaging", "WebSockets"],
    overview: {
      en: [
        "Unstable cellular connections in remote areas caused call dropouts and missing emergency doctor message notifications.",
        "Engineered a resilient WebSocket auto-reconnect engine paired with high-priority FCM push notifications and adaptive WebRTC bitrate fallback."
      ],
      id: [
        "Koneksi seluler yang tidak stabil di area terpencil kerap memutus panggilan dan menghilangkan notifikasi pesan darurat dokter.",
        "Merancang mesin auto-reconnect WebSocket yang tangguh dipadukan dengan notifikasi push FCM prioritas tinggi dan adaptasi bitrate WebRTC."
      ]
    },
    keyMetrics: {
      en: [
        "Zero missed notification rate for urgent doctor updates",
        "Sub-200ms chat latency over 3G/4G networks",
        "4.8/5.0 rating on Play Store"
      ],
      id: [
        "0% notifikasi terlewat untuk pembaruan medis darurat dari dokter",
        "Latensi obrolan di bawah 200ms melalui jaringan 3G/4G",
        "Rating 4.8/5.0 di Google Play Store"
      ]
    },
    architecturePoints: {
      en: [
        "Riverpod for state management & dependency injection",
        "WebRTC audio/video call integration with PIP support",
        "Background service handling for push incoming calls",
        "Encrypted medical history caching via Hive"
      ],
      id: [
        "Riverpod untuk manajemen state & dependency injection",
        "Integrasi panggilan audio/video WebRTC dengan dukungan PIP",
        "Penanganan background service untuk panggilan masuk",
        "Penyimpanan riwayat medis terenkripsi via Hive"
      ]
    },
    coverImage: "/projects/mediconnect-app/screen1.png",
    screenshots: [
      "/projects/mediconnect-app/screen1.png",
      "/projects/mediconnect-app/screen2.png",
      "/projects/mediconnect-app/screen3.png"
    ],
    highlights: {
      en: [
        "Real-time doctor appointment booking with conflict-free calendar slot reservations",
        "Secure in-app telemedicine consultation room with live presence indicators",
        "Electronic Medical Record (EMR) viewer with encrypted prescription history",
        "Background local medication reminders and automated dosage countdown notifications",
        "Interactive clinic geolocation maps with turn-by-turn navigation intents",
        "Cashless consultation checkout integrated with midtrans payment gateways"
      ],
      id: [
        "Pemesanan janji temu dokter real-time dengan reservasi slot kalender tanpa konflik",
        "Ruang konsultasi telemedisin dalam aplikasi yang aman dengan indikator kehadiran online",
        "Penampil Rekam Medis Elektronik (RME) dengan riwayat resep obat terenkripsi",
        "Pengingat obat lokal di latar belakang dengan hitung mundur waktu konsumsi otomatis",
        "Peta lokasi klinik interaktif dengan integrasi navigasi petunjuk arah",
        "Pembayaran konsultasi non-tunai terintegrasi dengan payment gateway Midtrans"
      ]
    },
    github: "https://github.com/abghifareihand/mediconnect-telemedicine",
    liveDemo: "https://github.com/abghifareihand/mediconnect-telemedicine#demo"
  },
  {
    id: "devpulse-offline",
    title: "DevPulse - Offline Tech Reader & Audio Player",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2023",
    status: "Open Source",
    featured: false,
    summary: {
      en: "Clean developer news aggregator and podcast audio player with background playback, lock screen media controls, and syntax-highlighted code snippets.",
      id: "Agregator berita developer dan pemutar audio podcast dengan pemutaran di latar belakang, kontrol layar kunci, dan penyorot sintaks kode."
    },
    tags: ["Flutter", "Dart", "Just Audio", "Audio Service", "Hive", "Provider"],
    overview: {
      en: [
        "Standard audio packages pause when the mobile device screen locks or when user switches to other applications.",
        "Integrated Android foreground media services and iOS AVAudioSession with lock screen notifications and persistent local caching."
      ],
      id: [
        "Paket audio standar sering terhenti saat layar ponsel terkunci atau pengguna berpindah ke aplikasi lain.",
        "Mengintegrasikan media service foreground Android dan AVAudioSession iOS dengan notifikasi layar kunci dan penyimpanan cache lokal persisten."
      ]
    },
    keyMetrics: {
      en: [
        "Continuous background audio playback with 0% termination",
        "Instant offline article reading via Hive key-value store",
        "Lightweight app bundle size (< 14MB)"
      ],
      id: [
        "Pemutaran audio latar belakang kontinu tanpa terputus",
        "Membaca artikel offline secara instan melalui key-value store Hive",
        "Ukuran bundle aplikasi sangat ringan (< 14MB)"
      ]
    },
    architecturePoints: {
      en: [
        "Native lock screen media control integration",
        "Offline markdown parsing with syntax highlighting",
        "Dynamic audio cache management with size quotas",
        "Light and dark mode synced with system preferences"
      ],
      id: [
        "Integrasi kontrol media native layar kunci",
        "Parsing markdown offline dengan penyorotan sintaks",
        "Manajemen cache audio dinamis dengan kuota ukuran",
        "Sinkronisasi mode gelap dan terang sesuai sistem perangkat"
      ]
    },
    coverImage: "/projects/devpulse-offline/screen1.png",
    screenshots: [
      "/projects/devpulse-offline/screen1.png",
      "/projects/devpulse-offline/screen2.png",
      "/projects/devpulse-offline/screen3.png"
    ],
    highlights: {
      en: [
        "Full offline article caching with automated markdown syntax rendering engine",
        "Background audio podcast playback engine with native OS lockscreen controls",
        "Custom typography reader with dynamic line-height and eye-care night mode",
        "Cross-device bookmark and reading progress synchronization via cloud DB",
        "SQLite full-text search indexing across cached developer publications",
        "Zero-latency audio scrubbing and dynamic variable playback speed"
      ],
      id: [
        "Penyimpanan artikel offline penuh dengan engine rendering sintaks markdown otomatis",
        "Engine pemutaran podcast audio di latar belakang dengan kontrol layar kunci native",
        "Pembaca tipografi kustom dengan line-height dinamis dan mode malam ramah mata",
        "Sinkronisasi bookmark dan progres baca antar perangkat melalui cloud database",
        "Pengindeksan pencarian full-text SQLite di seluruh publikasi developer yang tersimpan",
        "Scrubbing audio tanpa latensi dan pengaturan kecepatan pemutaran dinamis"
      ]
    },
    github: "https://github.com/abghifareihand/devpulse-reader",
    liveDemo: "https://github.com/abghifareihand/devpulse-reader"
  },
  {
    id: "flutter-adaptive-ui",
    title: "Flutter Adaptive Kit - Responsive Component System",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2024",
    status: "Open Source",
    featured: false,
    summary: {
      en: "Open-source Flutter package providing adaptive Cupertino (iOS) and Material 3 (Android) UI components with automatic device breakpoint scaling.",
      id: "Package open-source Flutter yang menyediakan komponen UI adaptif Cupertino (iOS) dan Material 3 (Android) dengan penskalaan breakpoint perangkat otomatis."
    },
    tags: ["Flutter", "Dart", "Open Source", "Material 3", "Cupertino", "Unit Testing"],
    overview: {
      en: [
        "Developers frequently duplicate layout logic when targeting both iOS and Android platforms to match native design guidelines.",
        "Crafted unified wrapper widgets that dynamically evaluate platform target and render platform-authentic dialogs, sheets, buttons, and switches."
      ],
      id: [
        "Developer sering menduplikasi logika layout saat menargetkan platform iOS dan Android agar sesuai dengan pedoman desain native.",
        "Membangun widget pembungkus terpadu yang mengevaluasi target platform secara dinamis dan me-render dialog, sheet, button, dan switch sesuai platform native."
      ]
    },
    keyMetrics: {
      en: [
        "400+ GitHub Stars & pub.dev package points: 140/140",
        "98% automated test coverage (Goldens & Unit tests)",
        "Reduces cross-platform boilerplate code by 45%"
      ],
      id: [
        "400+ Bintang GitHub & poin paket pub.dev: 140/140",
        "Cakupan uji otomatis 98% (Golden tests & Unit tests)",
        "Mengurangi kode boilerplate lintas platform hingga 45%"
      ]
    },
    architecturePoints: {
      en: [
        "Polymorphic platform widget abstraction layer",
        "Zero third-party runtime dependencies",
        "Golden UI tests across multiple device screen ratios",
        "Automated CI/CD release workflow via GitHub Actions"
      ],
      id: [
        "Lapisan abstraksi widget platform polimorfik",
        "Nol ketergantungan runtime pihak ketiga",
        "Pengujian Golden UI di berbagai rasio layar perangkat",
        "Alur kerja rilis otomatis CI/CD melalui GitHub Actions"
      ]
    },
    coverImage: "/projects/flutter-adaptive-ui/screen1.png",
    screenshots: [
      "/projects/flutter-adaptive-ui/screen1.png",
      "/projects/flutter-adaptive-ui/screen2.png",
      "/projects/flutter-adaptive-ui/screen3.png"
    ],
    highlights: {
      en: [
        "Universal responsive layout engine adapting smoothly across mobile, tablet, and desktop",
        "Dynamic dual-pane Master-Detail navigation on wide screens",
        "Platform-adaptive UI widgets (Cupertino on iOS, Material 3 on Android/Web)",
        "Design system token architecture for instant dark/light and white-label theming",
        "Full accessibility compliance with dynamic screen-reader label bindings",
        "Comprehensive widget and integration test suite guaranteeing fluid 60fps"
      ],
      id: [
        "Engine layout responsif universal yang beradaptasi mulus di ponsel, tablet, dan desktop",
        "Navigasi dinamis dua panel Master-Detail pada layar lebar",
        "Widget UI adaptif platform (Cupertino di iOS, Material 3 di Android/Web)",
        "Arsitektur token sistem desain untuk tema gelap/terang dan white-label instan",
        "Kepatuhan aksesibilitas penuh dengan pengikatan label screen-reader dinamis",
        "Rangkaian uji widget dan integrasi menyeluruh yang menjamin performa 60fps"
      ]
    },
    github: "https://github.com/abghifareihand/flutter-adaptive-kit",
    liveDemo: "https://github.com/abghifareihand/flutter-adaptive-kit"
  }
];

export const getProjectsData = (lang = 'en') => {
  return rawProjectsData.map((project) => ({
    ...project,
    summary: typeof project.summary === 'object' ? (project.summary[lang] || project.summary.en) : project.summary,
    overview: typeof project.overview === 'object' && !Array.isArray(project.overview) ? (project.overview[lang] || project.overview.en) : project.overview,
    problem: typeof project.problem === 'object' ? (project.problem[lang] || project.problem.en) : project.problem,
    solution: typeof project.solution === 'object' ? (project.solution[lang] || project.solution.en) : project.solution,
    keyMetrics: typeof project.keyMetrics === 'object' && !Array.isArray(project.keyMetrics) ? (project.keyMetrics[lang] || project.keyMetrics.en) : project.keyMetrics,
    architecturePoints: typeof project.architecturePoints === 'object' && !Array.isArray(project.architecturePoints) ? (project.architecturePoints[lang] || project.architecturePoints.en) : project.architecturePoints,
    highlights: typeof project.highlights === 'object' && !Array.isArray(project.highlights) ? (project.highlights[lang] || project.highlights.en) : project.highlights
  }));
};

export const projectsData = getProjectsData('en');

const rawExperienceData = [
  {
    period: "Sep 2024 - Present",
    role: "Mobile Developer",
    company: "Ignatia",
    location: "Remote",
    type: { en: "Fulltime", id: "Penuh Waktu" },
    description: {
      en: "Driving core mobile development, feature engineering, and hardware integrations for a flagship Point of Sale (POS) application and integrated merchant services.",
      id: "Memimpin pengembangan mobile utama, rekayasa fitur, dan integrasi perangkat keras untuk aplikasi kasir Point of Sale (POS) unggulan dan layanan merchant terintegrasi."
    },
    achievements: {
      en: [
        "Stabilized and optimized the production POS mobile application through systematic bug fixing, performance profiling, and refactoring.",
        "Engineered an integrated PPOB (Payment Point Online Bank) module within the main app for bill payments and digital top-ups.",
        "Implemented Dual-Screen presentation support for cashier terminals, enabling a synchronized real-time customer-facing display.",
        "Integrated responsive Mobile WebViews for the customer CRM portal and backoffice administration systems."
      ],
      id: [
        "Menstabilkan dan mengoptimalkan aplikasi mobile POS produksi melalui perbaikan bug sistematis, profiling performa, dan refaktor kode.",
        "Mengembangkan modul terintegrasi PPOB (Payment Point Online Bank) di aplikasi utama untuk pembayaran tagihan dan isi ulang digital.",
        "Menerapkan dukungan tampilan Dual-Screen untuk terminal kasir, memungkinkan layar display pelanggan tersinkronisasi real-time.",
        "Mengintegrasikan Mobile WebView responsif untuk portal CRM pelanggan dan sistem administrasi backoffice."
      ]
    },
    stack: ["Flutter", "Dart", "POS Terminal SDK", "Dual-Screen API", "Mobile WebViews", "REST API", "Git", "Postman", "Figma"]
  },
  {
    period: "Oct 2023 - Present",
    role: { en: "Freelance Mobile Developer", id: "Mobile Developer Lepas (Freelance)" },
    company: { en: "Self-Employed", id: "Mandiri / Freelance" },
    location: "Remote",
    type: { en: "Project Based", id: "Berbasis Proyek" },
    description: {
      en: "Delivering custom client applications on a project based milestone model, ranging from standalone cross-platform Flutter mobile apps to integrated full-stack solutions with Laravel backends.",
      id: "Mengirimkan aplikasi kustom untuk klien dengan model milestone berbasis proyek, mulai dari aplikasi mobile Flutter mandiri hingga solusi full-stack lengkap dengan backend Laravel."
    },
    achievements: {
      en: [
        "Shipped multiple custom mobile applications and end-to-end ecosystems (Flutter mobile client + Laravel REST API + Web Admin Dashboard).",
        "Managed the full product lifecycle: Figma UI slicing, database architecture (MySQL), secure authentication, and payment integrations.",
        "Consistently delivered clean, maintainable architecture with robust error handling and smooth, fluid mobile performance and responsiveness."
      ],
      id: [
        "Menyelesaikan berbagai aplikasi mobile kustom dan ekosistem menyeluruh (klien mobile Flutter + REST API Laravel + Dashboard Web Admin).",
        "Mengelola seluruh siklus produk: slicing desain Figma, perancangan arsitektur database (MySQL), autentikasi aman, dan integrasi payment gateway.",
        "Secara konsisten menghadirkan arsitektur bersih dan mudah dirawat dengan penanganan error yang andal serta performa mobile 60fps yang fluid."
      ]
    },
    stack: ["Flutter", "Dart", "Laravel", "MySQL", "Clean Architecture", "RESTful API", "Payment Gateways"]
  },
  {
    period: "Nov 2023 - Feb 2024",
    role: { en: "Mobile Developer Intern", id: "Magang Mobile Developer" },
    company: "Perum Perhutani",
    location: "Jakarta Selatan",
    type: { en: "Internship", id: "Magang" },
    description: {
      en: "Developed 'Union Getah', a specialized offline-first mobile application for field forest rangers and farmers to record, calculate, and invoice resin harvest yields directly in remote forests.",
      id: "Mengembangkan 'Union Getah', aplikasi mobile offline-first khusus untuk petugas mandor hutan dan penyadap untuk mencatat, menghitung, dan mencetak nota hasil panen getah langsung di hutan terpencil."
    },
    achievements: {
      en: [
        "Architected a resilient offline-first workflow allowing field operators to collect and compute harvest metrics with zero cellular connectivity in remote forests.",
        "Integrated Bluetooth thermal printer hardware (ESC/POS) for instant, on-site physical receipt and invoice printing for forest farmers.",
        "Implemented secure local caching with automated two-way cloud synchronization once workers returned to network coverage."
      ],
      id: [
        "Merancang alur kerja offline-first yang memungkinkan operator mengumpulkan dan menghitung metrik panen tanpa konektivitas seluler di hutan pedalaman.",
        "Mengintegrasikan perangkat keras printer termal Bluetooth (ESC/POS) untuk pencetakan nota fisik instan di tempat bagi petani penyadap.",
        "Menerapkan penyimpanan lokal yang aman dengan sinkronisasi batch dua arah otomatis begitu perangkat kembali mendapat sinyal."
      ]
    },
    stack: ["Flutter", "Dart", "Offline-First Architecture", "Bluetooth ESC/POS Printer", "SQLite / Hive", "REST API"]
  },
  {
    period: "Aug 2022 - Dec 2022",
    role: { en: "Mobile Development Trainee", id: "Peserta Pelatihan Mobile Development" },
    company: "Alterra Academy",
    location: "Remote",
    type: { en: "Intensive Bootcamp", id: "Bootcamp Intensif" },
    description: {
      en: "Completed an intensive professional Flutter engineering program mastering Dart fundamentals, OOP, state management, and full application testing.",
      id: "Menyelesaikan program pelatihan intensif Flutter profesional yang mencakup dasar pemrograman Dart, OOP, manajemen state, dan pengujian aplikasi komprehensif."
    },
    achievements: {
      en: [
        "Mastered Dart fundamentals, OOP principles, responsive UI slicing from Figma, and cloud integration with Firebase and REST APIs.",
        "Wrote comprehensive Unit and Widget Tests to ensure high code reliability and test-driven mobile architecture.",
        "Collaborated in an agile cross-functional squad (UI/UX Designers, React.js Frontend, Golang Backend, and QA Testers) for the Capstone Final Project."
      ],
      id: [
        "Menguasai dasar Dart, prinsip OOP, slicing UI responsif dari Figma, dan integrasi cloud dengan Firebase serta REST API.",
        "Menulis Unit dan Widget Test yang komprehensif untuk memastikan keandalan kode dan arsitektur mobile berbasis pengujian.",
        "Berkolaborasi dalam tim lintas fungsi agile (Desainer UI/UX, Frontend React.js, Backend Golang, dan QA Tester) untuk Proyek Akhir Capstone."
      ]
    },
    stack: ["Flutter", "Dart", "OOP", "Firebase", "REST API", "Unit Testing", "Widget Testing", "Scrum / Agile"]
  }
];

export const getExperienceData = (lang = 'en') => {
  return rawExperienceData.map((item) => ({
    ...item,
    role: typeof item.role === 'object' ? (item.role[lang] || item.role.en) : item.role,
    company: typeof item.company === 'object' ? (item.company[lang] || item.company.en) : item.company,
    type: typeof item.type === 'object' ? (item.type[lang] || item.type.en) : item.type,
    description: typeof item.description === 'object' ? (item.description[lang] || item.description.en) : item.description,
    achievements: typeof item.achievements === 'object' && !Array.isArray(item.achievements) ? (item.achievements[lang] || item.achievements.en) : item.achievements
  }));
};

export const experienceData = getExperienceData('en');

const rawEducationData = [
  {
    period: "2019 - 2023",
    degree: { en: "Bachelor of Computer Science (S.Kom)", id: "Sarjana Komputer (S.Kom)" },
    institution: "Universitas Nasional",
    major: { en: "Informatics", id: "Informatika" },
    location: "Jakarta, Indonesia",
    status: { en: "Graduated in 2023", id: "Lulus tahun 2023" },
    description: {
      en: "Completed undergraduate degree in Informatics with a strong focus on Software Engineering, Object-Oriented Programming (OOP), Algorithms & Data Structures, and Database Management Systems.",
      id: "Menyelesaikan studi sarjana di bidang Informatika dengan fokus mendalam pada Rekayasa Perangkat Lunak, Pemrograman Berorientasi Objek (OOP), Algoritma & Struktur Data, serta Sistem Manajemen Database."
    },
    highlights: {
      en: [
        "Software Engineering & Architecture",
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Database Systems (SQL / Relational)",
        "Mobile Computing Fundamentals"
      ],
      id: [
        "Rekayasa Perangkat Lunak & Arsitektur",
        "Pemrograman Berorientasi Objek (OOP)",
        "Struktur Data & Algoritma",
        "Sistem Database (SQL / Relasional)",
        "Dasar Komputasi Mobile"
      ]
    }
  }
];

export const getEducationData = (lang = 'en') => {
  return rawEducationData.map((edu) => ({
    ...edu,
    degree: typeof edu.degree === 'object' ? (edu.degree[lang] || edu.degree.en) : edu.degree,
    major: typeof edu.major === 'object' ? (edu.major[lang] || edu.major.en) : edu.major,
    status: typeof edu.status === 'object' ? (edu.status[lang] || edu.status.en) : edu.status,
    description: typeof edu.description === 'object' ? (edu.description[lang] || edu.description.en) : edu.description,
    highlights: typeof edu.highlights === 'object' && !Array.isArray(edu.highlights) ? (edu.highlights[lang] || edu.highlights.en) : edu.highlights
  }));
};

export const educationData = getEducationData('en');
