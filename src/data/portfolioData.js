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
 *   year: "2025", // Ditampilkan di badge kartu
 *   date: "2025-06", // Format "YYYY-MM" untuk sorting presisi (tidak tampil di kartu)
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
    id: "overtime-app",
    title: "Overtime Connect App",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2025",
    date: "2025-01",
    status: "Production",
    featured: true,
    summary: {
      en: "A Flutter mobile app designed to help workers record, calculate, and monitor overtime hours automatically, accurately, and transparently in accordance with labor regulations.",
      id: "Aplikasi mobile berbasis Flutter untuk membantu pekerja mencatat, menghitung, dan memantau jam kerja lembur secara otomatis, akurat, dan transparan sesuai regulasi ketenagakerjaan."
    },
    tags: ["Flutter", "Dart", "MVVM", "Provider", "Dio & Retrofit", "REST API", "Syncfusion Charts", "Table Calendar"],
    overview: {
      en: [
        "Overtime Connect solves manual overtime logging challenges prone to calculation errors and wage disputes. Built with structured MVVM architecture and Provider, it provides daily overtime attendance logging, real-time automated wage calculation, interactive weekly trend charts, monthly calendar overviews, and monthly earnings summaries.",
        "The app features secure authentication with Gmail OTP verification, a standalone tiered overtime wage calculator without requiring saved attendance, and flexible profile management for configuring base salary and working days."
      ],
      id: [
        "Overtime Connect menyelesaikan masalah pencatatan lembur manual yang sering kali rawan salah hitung upah. Dibangun dengan arsitektur MVVM yang terstruktur, aplikasi ini menyediakan fitur absensi lembur harian, kalkulasi otomatis upah lembur secara real-time, visualisasi tren lembur via grafik mingguan serta kalender bulanan interaktif, dan rekapitulasi estimasi pendapatan bulanan.",
        "Sistem dilengkapi autentikasi aman verifikasi OTP via Gmail, simulasi mandiri kalkulator upah lembur bertingkat tanpa harus menyimpan absensi, serta manajemen profil fleksibel untuk pembaruan foto profil dan konfigurasi gaji pokok serta hari kerja."
      ]
    },
    problem: {
      en: "Manual paper and spreadsheet overtime logging frequently leads to tiered rate calculation errors, missing attendance records, and disputes between employees and employers.",
      id: "Pencatatan lembur manual berbasis kertas atau spreadsheet sering memicu perselisihan upah akibat kesalahan kalkulasi bertingkat, hilangnya data absensi, dan ketiadaan transparansi antara pekerja dan pengawas."
    },
    solution: {
      en: "Engineered a Flutter mobile application using MVVM architecture with an automated labor-compliant wage calculation engine, Syncfusion trend visualization, interactive calendar, and Gmail OTP auth.",
      id: "Membangun aplikasi mobile Flutter dengan arsitektur MVVM dan Provider, menghadirkan engine kalkulasi upah lembur otomatis sesuai regulasi, kalender dan grafik tren interaktif, serta autentikasi OTP Gmail yang aman."
    },
    keyMetrics: {
      en: [
        "100% automated calculation accuracy for tiered overtime wages",
        "Fluid 60fps overtime trend analytics with Syncfusion Charts",
        "99% delivery rate for secure Gmail OTP authentication"
      ],
      id: [
        "Kalkulasi upah lembur bertingkat otomatis dengan akurasi 100%",
        "Visualisasi tren lembur 60fps dengan Syncfusion Charts",
        "Verifikasi autentikasi OTP Gmail aman dengan tingkat keberhasilan 99%"
      ]
    },
    architecturePoints: {
      en: [
        "Structured MVVM pattern cleanly decoupling business logic, viewmodels, and UI",
        "Centralized and reactive state management powered by Provider",
        "Structured REST API communication utilizing Dio and Retrofit with automatic serialization",
        "Local preferences and session caching via SharedPreferences",
        "Interactive data visualization with Syncfusion Charts & Table Calendar"
      ],
      id: [
        "Pola arsitektur MVVM memisahkan model data, logika viewmodel, dan antarmuka secara bersih",
        "State management terpusat dan reaktif menggunakan Provider",
        "Integrasi REST API terstruktur menggunakan Dio dan Retrofit dengan serialisasi otomatis",
        "Penyimpanan lokal preferensi dan sesi via SharedPreferences",
        "Visualisasi data dinamis dengan Syncfusion Charts dan Table Calendar"
      ]
    },
    coverImage: "/projects/overtime-app/screen1.png",
    screenshots: [
      "/projects/overtime-app/screen1.png",
      "/projects/overtime-app/screen2.png",
      "/projects/overtime-app/screen3.png"
    ],
    highlights: {
      en: [
        "Smart Overtime Attendance: Daily overtime logging with automatic calculation based on day type (regular workday vs holiday)",
        "Interactive Dashboard: Summary of total overtime hours & earnings with interactive weekly charts and monthly calendar",
        "Overtime Calculator: Standalone simulation to estimate tiered overtime wages without saving attendance",
        "Salary & Overtime Recap: Detailed overtime history and accumulated wage estimation with flexible date range filters",
        "Secure Auth & OTP via Gmail: Secure login, registration, and password recovery via one-time passwords sent to Gmail",
        "User Profile Management: Profile updates, photo upload (camera/gallery), and base salary & working day configuration"
      ],
      id: [
        "Smart Overtime Attendance: Pencatatan lembur harian dengan kalkulasi otomatis berdasarkan jenis hari (hari kerja biasa vs hari libur)",
        "Interactive Dashboard: Ringkasan total jam lembur & nominal pendapatan, dilengkapi grafik mingguan serta kalender bulanan interaktif",
        "Overtime Calculator: Simulasi mandiri untuk menghitung estimasi upah lembur bertingkat tanpa harus menyimpan absensi",
        "Salary & Overtime Recap: Riwayat detail lembur dan estimasi akumulasi gaji dengan filter rentang tanggal fleksibel",
        "Secure Auth & OTP via Gmail: Sistem login, registrasi, serta pemulihan akun yang aman menggunakan kode OTP yang dikirim langsung ke Gmail",
        "User Profile Management: Pembaruan profil, unggah foto (kamera/galeri), ganti email/password, serta konfigurasi gaji pokok dan jumlah hari kerja"
      ]
    },
    github: "#",
    liveDemo: "#"
  },
  {
    id: "rekalaba-ppob",
    title: "Rekalaba PPOB App",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2025",
    date: "2025-03",
    status: "Production",
    featured: true,
    summary: {
      en: "A Flutter digital financial services module enabling merchants and cashiers to process bill payments, digital products, and interbank transfers directly from the POS with thermal receipt printing.",
      id: "Modul layanan finansial digital berbasis Flutter yang memungkinkan merchant/kasir melayani berbagai transaksi pembayaran tagihan, pembelian produk digital, hingga transfer bank langsung dari aplikasi kasir dengan dukungan cetak struk via printer thermal."
    },
    tags: ["Flutter", "Dart", "MVVM", "Provider", "Nicepay", "Bluetooth ESC/POS", "Dio & Retrofit", "ScreenUtil"],
    overview: {
      en: [
        "Developed as an autonomous financial subsystem within the Rekalaba POS ecosystem. Utilizing structured MVVM architecture, it is engineered with responsive Portrait and Landscape orientation support for cashier smartphones and POS tablets.",
        "Key focal points include instant utility bill transactions, partner deposit top-ups via Nicepay payment gateway (Virtual Account, convenience stores, e-wallets), transactional PIN and OTP security, and seamless Bluetooth ESC/POS thermal printer hardware integration for official receipts with QR codes."
      ],
      id: [
        "Modul ini dikembangkan sebagai sub-sistem mandiri di dalam ekosistem Rekalaba POS. Mengadopsi arsitektur MVVM yang terstruktur rapi, modul ini dirancang responsif dengan dukungan tampilan Portrait & Landscape agar nyaman digunakan di smartphone kasir maupun tablet POS.",
        "Fokus modul ini mencakup transaksi pembayaran instan, top-up deposit mitra via payment gateway Nicepay, keamanan berbasis OTP & PIN transaksi, serta integrasi hardware printer Bluetooth ESC/POS untuk pencetakan struk resmi dengan QR code."
      ]
    },
    problem: {
      en: "Merchants previously had to juggle disparate third-party apps for digital product sales and bill payments without synchronized POS sales records or unified thermal printing.",
      id: "Merchant kasir kesulitan melayani transaksi produk digital dan tagihan karena harus berpindah-pindah aplikasi pihak ketiga tanpa pencatatan struk kasir yang tersinkronisasi."
    },
    solution: {
      en: "Built an integrated native PPOB module inside the POS application using MVVM, featuring Nicepay payment gateway, transactional PIN/OTP authorization, and ESC/POS Bluetooth thermal printing.",
      id: "Mengintegrasikan modul PPOB native berarsitektur MVVM langsung ke dalam aplikasi POS, lengkap dengan gateway Nicepay, verifikasi PIN/OTP, dan driver printer Bluetooth ESC/POS otomatis."
    },
    keyMetrics: {
      en: [
        "Instant Bluetooth ESC/POS thermal receipt printing in < 2 seconds",
        "Adaptive dual-orientation support across smartphone & tablet POS",
        "Multi-factor transaction security with SMS OTP and 6-digit PIN"
      ],
      id: [
        "Pencetakan struk transaksi termal Bluetooth instan < 2 detik",
        "Dukungan adaptif penuh untuk orientasi Layar Portrait & Landscape",
        "Validasi keamanan transaksi ganda dengan OTP SMS & PIN transaksi"
      ]
    },
    architecturePoints: {
      en: [
        "MVVM architecture with Provider for isolated transactional state flows",
        "Nicepay Gateway integration (Virtual Account, Retail Stores, E-Wallets)",
        "ESC/POS thermal printing engine with dynamic QR code rasterization",
        "Secure credential persistence via Flutter Secure Storage & UDID",
        "Adaptive Portrait & Landscape layout engine using Flutter ScreenUtil"
      ],
      id: [
        "Arsitektur MVVM dengan Provider untuk manajemen state transaksi terisolasi",
        "Integrasi Nicepay Gateway (Virtual Account, Minimarket, E-Wallet)",
        "Engine pencetakan thermal ESC/POS dengan encoding QR code dinamis",
        "Penyimpanan kredensial aman dengan Flutter Secure Storage, SharedPreferences, dan UDID",
        "Layout adaptif Portrait & Landscape memanfaatkan Flutter ScreenUtil"
      ]
    },
    coverImage: "/projects/rekalaba-ppob/screen1.png",
    screenshots: [
      "/projects/rekalaba-ppob/screen1.png",
      "/projects/rekalaba-ppob/screen2.png",
      "/projects/rekalaba-ppob/screen3.png"
    ],
    highlights: {
      en: [
        "Digital Products & Airtime: Mobile top-ups, data packages, SMS/voice bundles across all operators, and online gaming vouchers",
        "Utility Bill Payment: Routine utility payments including PLN (tokens & bills), PDAM water, BPJS Health, Telkom/Indihome, Cable TV, and multifinance",
        "E-Money & Digital Wallet Top-Up: Balance top-ups for GoPay, OVO, DANA, ShopeePay, LinkAja, Mandiri e-Money, TapCash, and more",
        "Interbank Fund Transfers: Real-time recipient bank account inquiry and instant interbank money transfers",
        "Deposit Management & Nicepay: Cashier deposit top-ups via Virtual Accounts, retail convenience stores, and digital wallets",
        "Thermal Receipt Printing (ESC/POS): Instant receipt printing to Bluetooth thermal printers using ESC/POS protocol with QR codes",
        "Security & Rapid Checkout: SMS OTP authentication, transactional PIN verification, and phonebook contact integration"
      ],
      id: [
        "Produk Digital & Pulsa: Pembelian pulsa, paket data internet, paket SMS/telepon semua operator, serta voucher game online",
        "Pembayaran Tagihan (Bill Payment): Pembayaran utilitas rutin seperti token & tagihan PLN, PDAM, BPJS Kesehatan, Telkom/Indihome, TV Kabel, dan cicilan multifinance",
        "Top-Up E-Money & Dompet Digital: Pengisian saldo GoPay, OVO, DANA, ShopeePay, LinkAja, Mandiri e-Money, TapCash, dan e-wallet lainnya",
        "Transfer Antar Bank: Cek rekening tujuan (account inquiry) dan transfer dana antar bank secara real-time",
        "Manajemen Deposit & Payment Gateway: Pengisian saldo deposit kasir melalui Virtual Account (VA), minimarket (Indomaret/Alfamart), dan E-Wallet via Nicepay",
        "Cetak Struk Thermal (ESC/POS): Fitur cetak bukti transaksi otomatis ke printer Bluetooth thermal dengan format struk resmi dan QR code",
        "Keamanan & Transaksi Cepat: Autentikasi via OTP SMS, verifikasi PIN saat transaksi, serta integrasi kontak ponsel untuk input nomor cepat"
      ]
    },
    github: "#",
    liveDemo: "#"
  },
  {
    id: "fondaco-app",
    title: "Fondaco App",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2025",
    date: "2025-05",
    status: "Production",
    featured: true,
    summary: {
      en: "A Flutter mobile e-commerce and loyalty platform for Fondaco Dental (fondacoshop.com), enabling dental clinics and practitioners across Indonesia to order medical equipment, enroll in seminars, and earn loyalty points.",
      id: "Aplikasi mobile e-commerce dan loyalty platform berbasis Flutter untuk Fondaco Dental (fondacoshop.com), yang memudahkan klinik dan dokter gigi di Indonesia dalam memesan peralatan medis, mendaftar seminar kedokteran gigi, dan mengumpulkan poin loyalitas."
    },
    tags: ["Flutter", "Dart", "Clean Architecture", "Flutter BLoC", "Dio", "GetIt", "WebView Flutter", "SharedPreferences"],
    overview: {
      en: [
        "Engineered utilizing Feature-First Clean Architecture paired with the BLoC state management pattern to cleanly isolate business logic and UI presentation for maximum scalability and maintainability.",
        "All feature modules integrate with RESTful backend APIs via Dio and utilize GetIt for Dependency Injection. Features an infinite-scroll dental product catalog, embedded in-app WebView payment gateway, dental workshop catalog, and real-time network connectivity monitoring."
      ],
      id: [
        "Aplikasi ini dibangun menggunakan arsitektur Clean Architecture (Feature-First) dengan pola BLoC untuk memisahkan logika bisnis dan antarmuka secara rapi, scalable, serta mudah dirawat.",
        "Seluruh modul fitur terintegrasi dengan REST API menggunakan Dio dan memanfaatkan GetIt untuk Dependency Injection. Menyediakan katalog produk dengan infinite scroll, integrasi pembayaran in-app WebView, katalog seminar medis, dan deteksi konektivitas real-time."
      ]
    },
    problem: {
      en: "Dentists and clinic procurement staff struggled with slow manual ordering of certified dental equipment and cumbersome workshop registrations without real-time inventory visibility.",
      id: "Dokter gigi dan staf klinik kesulitan memesan instrumen medis spesifik dan mendaftar workshop sertifikasi karena proses pemesanan manual yang lambat dan minimnya informasi stok resmi."
    },
    solution: {
      en: "Developed a comprehensive mobile commerce platform with Feature-First Clean Architecture and BLoC, integrating certified product catalogs, digital payments, seminar ticketing, and loyalty points.",
      id: "Mengembangkan aplikasi mobile e-commerce komprehensif dengan Clean Architecture + BLoC, mengintegrasikan katalog produk, pembayaran digital, pendaftaran seminar, dan loyalty points."
    },
    keyMetrics: {
      en: [
        "Modular Clean Architecture with 100% data and domain layer decoupling",
        "Smooth 60fps infinite-scroll catalog browsing with shimmer placeholders",
        "Real-time connectivity watchdog eliminating interrupted in-app payments"
      ],
      id: [
        "Arsitektur modular Clean Architecture dengan 100% pemisahan layer data & domain",
        "Pemuatan katalog produk infinite scroll mulus 60fps dengan shimmer loading",
        "Deteksi konektivitas real-time mencegah kegagalan transaksi in-app payment"
      ]
    },
    architecturePoints: {
      en: [
        "Feature-First Clean Architecture separating Data, Domain, and Presentation layers",
        "Flutter BLoC & Equatable for predictable, unidirectional event-driven state flow",
        "Structured Dependency Injection using GetIt service locator pattern",
        "Dio REST client with Pretty Dio Logger for transparent network inspection",
        "Local preferences and authentication token caching with SharedPreferences"
      ],
      id: [
        "Feature-First Clean Architecture memisahkan Data, Domain, dan Presentation layer",
        "Flutter BLoC & Equatable untuk state management berbasis event yang terprediksi",
        "Dependency Injection terstruktur menggunakan GetIt service locator",
        "Dio REST API client dengan Pretty Dio Logger untuk logging jaringan transparan",
        "Penyimpanan lokal preferensi dan caching dengan SharedPreferences"
      ]
    },
    coverImage: "/projects/fondaco-app/screen1.png",
    screenshots: [
      "/projects/fondaco-app/screen1.png",
      "/projects/fondaco-app/screen2.png",
      "/projects/fondaco-app/screen3.png",
      "/projects/fondaco-app/screen4.png",
      "/projects/fondaco-app/screen5.png"
    ],
    highlights: {
      en: [
        "Product Catalog & Advanced Filter: Fast product discovery, infinite scroll pagination, and filtering by dental categories and official brands",
        "Cart & Order Tracking: Cart management, shipping address book, automatic fee calculation, and invoice/order status tracking",
        "In-App Payment Gateway: Secure checkout and digital payment processing via embedded WebView integration",
        "Event & Seminar Registration: Dental workshop and webinar registration catalog with full schedule details and ticketing",
        "Education Points (Loyalty System): Customer loyalty point reward system accrued from orders and medical event participation",
        "User & Account Management: Registration, authentication, profile management, password updates, and wishlist synchronization",
        "Network Monitoring: Real-time internet connectivity monitoring to prevent transaction failures during network drops"
      ],
      id: [
        "Product Catalog & Advanced Filter: Pencarian produk cepat, infinite scroll pagination, dan filter berdasarkan kategori serta brand resmi",
        "Cart & Order Tracking: Manajemen keranjang belanja, integrasi buku alamat pengiriman, kalkulasi biaya, dan pelacakan riwayat pesanan/invoice",
        "In-App Payment Gateway: Proses checkout dan pembayaran online yang aman menggunakan embedded WebView",
        "Event & Seminar Registration: Katalog pendaftaran workshop/webinar kedokteran gigi dengan rincian jadwal dan tiket",
        "Education Points (Loyalty System): Sistem reward poin loyalitas bagi pengguna dari aktivitas transaksi dan partisipasi event",
        "User & Account Management: Registrasi, login, manajemen profil, ganti kata sandi, dan sinkronisasi produk favorit (wishlist)",
        "Network Monitoring: Deteksi konektivitas internet secara real-time untuk mencegah kegagalan transaksi saat offline"
      ]
    },
    github: "#",
    liveDemo: "#"
  },
  {
    id: "quickmark-app",
    title: "QuickMark App",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2025",
    date: "2025-07",
    status: "Production",
    featured: true,
    summary: {
      en: "A Flutter mobile application directly integrated with the Ministry of Forestry (KLHK / SIPUHH) API to verify and track the legality of timber documents (SKSHHK) and round logs (LOG) in real-time.",
      id: "Aplikasi mobile berbasis Flutter yang terintegrasi langsung dengan API Kementerian Kehutanan (KLHK / SIPUHH) untuk memverifikasi dan melacak (tracking) legalitas dokumen hasil hutan kayu (SKSHHK) serta identitas kayu bulat (LOG) secara real-time."
    },
    tags: ["Flutter", "Dart", "Provider", "Dio & Retrofit", "Hive NoSQL", "Mobile Scanner", "Excel Generator", "Safe Device"],
    overview: {
      en: [
        "QuickMark is a mission-critical digital solution for field forestry officers to validate the authenticity of timber transport permits and forestry supply chains quickly and accurately.",
        "Engineered with a modular MVVM architecture across Android & iOS, providing rapid QR/Barcode camera scanning, offline local data caching via Hive NoSQL database, multi-sheet Excel report generation, and anti-root/anti-jailbreak device security protections."
      ],
      id: [
        "QuickMark menjadi solusi digital bagi verifikator lapangan untuk memvalidasi keabsahan dokumen kayu dan rantai pasok logistik kehutanan secara cepat dan akurat.",
        "Dibangun dengan arsitektur MVVM modular untuk Android & iOS, aplikasi ini memfasilitasi verifikasi barcode/QR di lapangan, penyimpanan data lokal offline dengan database NoSQL Hive, ekspor spreadsheet Excel multi-sheet, dan proteksi perangkat anti-root/anti-jailbreak."
      ]
    },
    problem: {
      en: "Checkpost forestry inspectors frequently encountered forged physical timber documents and struggled to verify round log IDs in remote jungle locations without internet connectivity.",
      id: "Verifikator kehutanan di pos pemeriksaan sering menghadapi dokumen fisik palsu dan kesulitan memverifikasi identitas kayu bulat di area hutan terpencil dengan sinyal minim."
    },
    solution: {
      en: "Built QuickMark with direct KLHK SIPUHH API integration, instant camera barcode scanner, offline Hive NoSQL caching, automated Excel report generation, and anti-tamper device security.",
      id: "Mengembangkan QuickMark dengan integrasi API resmi KLHK SIPUHH, scanner barcode instan, cache offline NoSQL Hive, ekspor laporan Excel, dan pengamanan anti-tamper."
    },
    keyMetrics: {
      en: [
        "Instant real-time SKSHHK document and log ID validation in sub-seconds",
        "100% offline access to past inspection records via Hive NoSQL database",
        "Bank-grade anti-root and anti-jailbreak security shielding audit integrity"
      ],
      id: [
        "Verifikasi dokumen SKSHHK dan ID Log kayu instan dalam hitungan detik",
        "100% akses data riwayat verifikasi secara offline menggunakan NoSQL Hive",
        "Proteksi keamanan anti-root dan anti-jailbreak untuk integritas data audit"
      ]
    },
    architecturePoints: {
      en: [
        "Modular MVVM architectural pattern using Provider state management",
        "Official Ministry of Forestry REST API integration via Dio and Retrofit",
        "High-performance local NoSQL Hive database for persistent offline audit trail",
        "On-device multi-sheet Excel spreadsheet generation engine (.xlsx)",
        "Hardware security wrapper leveraging Safe Device and dynamic permission management"
      ],
      id: [
        "Pola arsitektur MVVM modular berbasis Provider",
        "Koneksi REST API resmi Kementerian Kehutanan menggunakan Dio dan Retrofit",
        "Database lokal NoSQL Hive berkecepatan tinggi untuk penyimpanan offline",
        "Engine pembuatan dokumen spreadsheet Excel (.xlsx) langsung di perangkat",
        "Proteksi keamanan perangkat keras via Mobile Scanner, Safe Device & Permission Handler"
      ]
    },
    coverImage: "/projects/quickmark-app/screen1.png",
    screenshots: [
      "/projects/quickmark-app/screen1.png",
      "/projects/quickmark-app/screen2.png",
      "/projects/quickmark-app/screen3.png",
      "/projects/quickmark-app/screen4.png"
    ],
    highlights: {
      en: [
        "SKSHHK Document Tracking: Legality verification, carrier data, transport permits, and payload volumes via document number or barcode scan",
        "Track LOG (Round Timber): Traceability of round timber history (Harvest Reports/LHC, measurement logs, and forest origin) via QR Code",
        "Integrated QR & Barcode Scanner: High-speed responsive camera scanner with dynamic torch/flash control and orientation handling",
        "Offline Storage & Caching: Resilient local search and scan history caching using Hive NoSQL database for zero-signal operation",
        "Export to Excel (.xlsx): Automated compilation and export of verification logs into multi-sheet Excel (.xlsx) spreadsheets",
        "Device Security Protection: Advanced security shielding against tampered devices (anti-root, anti-jailbreak, anti-emulator, and developer-mode detection)"
      ],
      id: [
        "Pelacakan Dokumen SKSHHK: Validasi legalitas, data pengangkut, izin edar, dan volume muatan melalui nomor dokumen atau scan barcode",
        "Pelacakan Batang Kayu (Track LOG): Penelusuran riwayat kayu bulat (Laporan Tebangan/LHC, data ukur, dan asal TPK hutan) berbasis QR Code",
        "Integrated QR & Barcode Scanner: Pemindai kamera responsif dengan dukungan kontrol flash dan orientasi dinamis",
        "Offline Storage & Caching: Penyimpanan data riwayat pencarian secara lokal menggunakan database NoSQL Hive agar dapat diakses tanpa koneksi internet",
        "Export to Excel (.xlsx): Rekap dan ekspor data SKSHHK/LOG ke format spreadsheet multi-sheet yang tersimpan otomatis di perangkat",
        "Device Security Protection: Proteksi aplikasi dari ancaman keamanan (anti-root, anti-jailbreak, anti-emulator, & developer-mode detection)"
      ]
    },
    github: "#",
    liveDemo: "#"
  },
  {
    id: "pion-app",
    title: "PION App & Web",
    category: "backend",
    categoryLabel: "Flutter & Laravel",
    year: "2025",
    date: "2025-09",
    status: "Production",
    featured: true,
    summary: {
      en: "An end-to-end labor union digitalization platform connecting thousands of union members with leadership transparently, securely, and in real-time through a mobile app and centralized web admin dashboard.",
      id: "Platform digitalisasi serikat pekerja end-to-end yang menghubungkan ribuan anggota serikat dengan pengurus secara transparan, aman, dan real-time melalui aplikasi mobile dan dashboard web administrasi terpusat."
    },
    tags: ["Flutter", "Laravel 12", "PHP 8.2+", "MySQL", "Tailwind CSS", "Firebase FCM", "Provider", "DomPDF"],
    overview: {
      en: [
        "Previously, labor union operations relied on manual paper records, one-way bulletin boards, and paper-based ballot voting prone to delays.",
        "PION transforms labor union governance into an end-to-end digital ecosystem—from self-service member onboarding, verifiable digital membership cards (KTA) with barcodes, financial transparency reporting, authenticated e-voting, to two-way grievance ticketing and FCM push broadcasts."
      ],
      id: [
        "Sebelumnya, operasional serikat pekerja masih mengandalkan pencatatan manual, penyebaran informasi satu arah, dan pemungutan suara konvensional.",
        "Sistem ini dibangun untuk mentransformasikan tata kelola serikat buruh menjadi serba digital—mulai dari pendaftaran keanggotaan otomatis, penerbitan KTA digital dengan barcode, transparansi laporan keuangan, voting digital yang terverifikasi, hingga kanal aspirasi/tiket pengaduan dua arah dan broadcast push notifikasi."
      ]
    },
    problem: {
      en: "Thousands of union workers suffered from non-transparent union financial reporting, delayed paper grievance channels, and insecure manual election balloting.",
      id: "Ribuan anggota serikat buruh kesulitan mengakses informasi kas keuangan, menyalurkan aspirasi secara aman, dan berpartisipasi dalam voting ketua secara transparan."
    },
    solution: {
      en: "Delivered a unified fullstack ecosystem: Flutter mobile app for members (digital ID, e-voting, ticketing) synchronized with a Laravel 12 REST API and centralized Web Admin Dashboard.",
      id: "Membangun ekosistem lengkap: Aplikasi Mobile Flutter untuk anggota (KTA digital, e-voting, ticketing) dipadukan dengan Backend REST API Laravel 12 & Web Dashboard Admin terpusat."
    },
    keyMetrics: {
      en: [
        "100% digitized member onboarding and instant barcode digital KTA issuance",
        "Tamper-proof e-voting system verified with PIN and Sanctum token auth",
        "Instant mass broadcast delivery across member devices via FCM"
      ],
      id: [
        "Transformasi 100% digitalisasi KTA dan registrasi anggota baru serikat",
        "E-voting transparan dan bebas manipulasi dengan autentikasi berbasis PIN/Sanctum",
        "Penyampaian pengumuman kilat via Firebase Cloud Messaging (FCM)"
      ]
    },
    architecturePoints: {
      en: [
        "Mobile Client: Flutter (Dart) with structured MVVM pattern & Provider",
        "Backend & REST API: Laravel 12, PHP 8.2+, Laravel Sanctum Token Authentication",
        "Web Admin Dashboard: Laravel Blade, Tailwind CSS, Vite responsive UI",
        "Cloud Integrations: Firebase Cloud Messaging (FCM) & automated DomPDF engine",
        "Mobile App Privacy: Hardened anti-screenshot protection and secure local session handling"
      ],
      id: [
        "Klien Mobile: Flutter (Dart) dengan arsitektur MVVM & Provider",
        "Backend & REST API: Laravel 12, PHP 8.2+, Laravel Sanctum Token Auth",
        "Dashboard Web Admin: Laravel Blade, Tailwind CSS, Vite",
        "Integrasi Layanan Cloud: Firebase Cloud Messaging (FCM) & DomPDF Generator",
        "Proteksi privasi aplikasi mobile dengan pencegahan anti-screenshot"
      ]
    },
    coverImage: "/projects/pion-app/screen1.png",
    screenshots: [
      "/projects/pion-app/screen1.png",
      "/projects/pion-app/screen2.png",
      "/projects/pion-app/screen3.png"
    ],
    highlights: {
      en: [
        "Digital KTA & Barcode Identification: Verifiable digital membership card (KTA) with dynamic barcode/QR code and instant PDF download",
        "Member Onboarding & Workflow Approval: Member onboarding with multi-tier admin approval and automated PDF deduction authorization forms",
        "E-Voting & Polling System: Cryptographically verified, transparent e-voting for union leadership elections and major policy decisions",
        "Ticketing & Aspirations (Helpdesk): Two-way member grievance ticketing system with threaded replies, resolution statuses, and PDF reports",
        "Financial Transparency & Reports: Scheduled union financial cashflow and balance sheet publications ensuring organizational accountability",
        "Push Notification & Broadcast (FCM): Instant priority announcements and emergency broadcasts sent directly to members via FCM",
        "Mobile Security Measures: Anti-screenshot protection, PIN/OTP authentication, and encrypted API sessions via Laravel Sanctum"
      ],
      id: [
        "Digital KTA & Barcode Identification: Pembuatan identitas keanggotaan digital terverifikasi dengan barcode/QR code dan fitur unduh berkas kartu tanda anggota",
        "Member Onboarding & Workflow Approval: Registrasi anggota baru secara mandiri via aplikasi dengan persetujuan admin dan cetak dokumen PDF surat kuasa potong iuran otomatis",
        "E-Voting & Polling System: Fasilitas pemungutan suara digital yang aman dan transparan untuk pengambilan keputusan atau pemilihan ketua serikat",
        "Ticketing & Aspirations (Helpdesk): Sistem pengaduan buruh dua arah dilengkapi thread reply, status penyelesaian, dan ekspor laporan PDF",
        "Financial Transparency & Reports: Publikasi laporan arus kas keuangan serikat secara berkala untuk akuntabilitas organisasi",
        "Push Notification & Broadcast (FCM): Pengiriman pengumuman penting secara instan langsung ke perangkat anggota melalui Firebase Cloud Messaging",
        "Mobile Security Measures: Pembatasan tangkapan layar (anti-screenshot), verifikasi PIN/OTP, dan tokenisasi sesi via Laravel Sanctum"
      ]
    },
    github: "#",
    liveDemo: "#"
  },
  {
    id: "hris-app",
    title: "HRIS App & Web",
    category: "backend",
    categoryLabel: "Flutter & Laravel",
    year: "2026",
    date: "2026-02",
    status: "Production",
    featured: true,
    summary: {
      en: "A multi-platform cloud HR management solution comprising a Web Admin Dashboard and Mobile App (Android & iOS). It automates real-time geofenced attendance via OpenStreetMap, shift scheduling, payroll, and Indonesian tax compliance.",
      id: "Solusi manajemen SDM multi-platform berbasis cloud yang terdiri dari Web Admin Dashboard dan Mobile App (Android & iOS). Mengotomatisasi absensi real-time berbasis radius lokasi peta OpenStreetMap, jadwal kerja, payroll, dan pajak Indonesia."
    },
    tags: ["Flutter", "Laravel 13", "PHP 8.3+", "OpenStreetMap", "Alpine.js", "Tailwind CSS v4", "MySQL", "DomPDF"],
    overview: {
      en: [
        "Engineered to centralize and automate enterprise HR operations. Featuring a multi-role architecture (Owner/HR Administrators and Employees), it delivers a web monitoring dashboard for company operations and an Employee Self-Service (ESS) mobile app.",
        "Employees log daily clock-in/out with OpenStreetMap geofencing and selfie camera verification, submit leave/overtime requests, request reimbursement/loans, and access automated digital payslips computed with Indonesian PPh 21 (TER & PTKP) and BPJS deductions."
      ],
      id: [
        "Project ini dirancang untuk mendigitalisasi dan menyederhanakan proses operasional HR perusahaan secara terpusat. Mengusung arsitektur multi-role (Owner/HR & Karyawan), sistem ini menyediakan dashboard web untuk memonitor data operasional dan keuangan, serta aplikasi mobile Employee Self-Service (ESS).",
        "Karyawan dapat mencatat kehadiran secara akurat dengan verifikasi peta OpenStreetMap dan foto selfie, mengajukan cuti dan lembur, meminta kasbon/klaim, serta menerima slip gaji digital otomatis dengan perhitungan PPh 21 (skema TER & PTKP) dan BPJS."
      ]
    },
    problem: {
      en: "Companies faced fraudulent attendance (fake GPS/proxy clock-ins) and spent days manually computing complex Indonesian PPh 21 tax tiers and BPJS healthcare deductions.",
      id: "Perusahaan kesulitan memvalidasi absensi karyawan di luar kantor (kecurangan lokasi GPS palsu/titip absen) dan memakan waktu berhari-hari untuk menghitung payroll PPh 21 dan BPJS manual."
    },
    solution: {
      en: "Delivered an integrated HRIS suite: Flutter mobile app enforcing selfie validation + OpenStreetMap geofencing, synchronized with a Laravel 13 backend featuring automated PPh 21 tax engines and Tailwind v4 admin.",
      id: "Membangun sistem HRIS terpadu: Aplikasi Mobile Flutter dengan presensi kamera selfie + geofencing OpenStreetMap terverifikasi, dipadukan Backend Laravel 13 dengan engine kalkulasi PPh 21 otomatis dan Web Admin Tailwind v4."
    },
    keyMetrics: {
      en: [
        "Sub-meter office geofencing accuracy with OpenStreetMap & mock location protection",
        "Automated payroll calculation reducing monthly payroll processing time by 80%",
        "Full Indonesian labor tax compliance (PPh 21 TER/PTKP & BPJS formulas)"
      ],
      id: [
        "Validasi radius presensi akurat dengan OpenStreetMap & deteksi lokasi mock",
        "Kalkulasi penggajian otomatis memangkas waktu proses payroll bulanan hingga 80%",
        "Kepatuhan regulasi pajak ketenagakerjaan Indonesia (PPh 21 TER/PTKP & BPJS)"
      ]
    },
    architecturePoints: {
      en: [
        "Backend & API: PHP 8.3+, Laravel 13, Laravel Sanctum token-based authentication",
        "Web Admin Frontend: Blade Templates, Alpine.js, modern Tailwind CSS v4, Vite",
        "Mobile Client: Flutter & Dart (Android & iOS) utilizing MVVM pattern & Provider",
        "Maps & Geolocation: OpenStreetMap (flutter_map), LatLong2 distance, Geolocator SDK",
        "Reporting & Export: DomPDF for automated payslips and Maatwebsite Excel for HR data audits"
      ],
      id: [
        "Backend & REST API: PHP 8.3+, Laravel 13, Laravel Sanctum (Token Auth)",
        "Web Admin Frontend: Blade Templates, Alpine.js, Tailwind CSS v4, Vite",
        "Aplikasi Mobile: Flutter & Dart (Android & iOS) dengan arsitektur MVVM & Provider",
        "Peta & Geolokasi: OpenStreetMap (OSM via flutter_map), LatLong2, Geolocator",
        "Pelaporan & Ekspor: DomPDF untuk slip gaji otomatis, Maatwebsite Excel untuk data rekap HR"
      ]
    },
    coverImage: "/projects/hris-app/screen1.png",
    screenshots: [
      "/projects/hris-app/screen1.png",
      "/projects/hris-app/screen2.png",
      "/projects/hris-app/screen3.png"
    ],
    highlights: {
      en: [
        "Geofencing & Selfie Attendance via OpenStreetMap: Real-time clock-in/out with office radius validation via OpenStreetMap (OSM) and live camera selfie capture",
        "Automated Payroll & Tax Compliance: Automated payroll engine calculating Indonesian PPh 21 tax (TER & PTKP rules), BPJS Health/Employment, and holiday allowances (THR)",
        "Leave & Overtime Management: Digital leave, sick, and overtime request workflows with automated quota deduction tracking",
        "Shift Scheduling & Shift Swap: Multi-shift scheduling with peer and team shift-swap request approval workflows",
        "Financial Claims & Kasbon: Expense reimbursement and salary advance (kasbon) management with automated payroll installment deductions",
        "Daily Reports & Announcements: Daily employee task progress submission and company-wide broadcast announcements"
      ],
      id: [
        "Geofencing & Selfie Attendance via OpenStreetMap: Presensi kehadiran real-time dengan validasi radius lokasi kantor menggunakan visualisasi peta OpenStreetMap (OSM) dan verifikasi foto selfie",
        "Automated Payroll & Tax Compliance: Penggajian otomatis terintegrasi kalkulasi PPh 21 (skema TER & PTKP), iuran BPJS Kesehatan/Ketenagakerjaan, dan tunjangan THR",
        "Leave & Overtime Management: Pengajuan serta approval cuti, izin, dan lembur dengan pelacakan kuota sisa cuti otomatis",
        "Shift Scheduling & Shift Swap: Manajemen jadwal kerja bergilir dengan fitur tukar shift (personal & tim)",
        "Financial Claims & Kasbon: Pengajuan klaim reimbursement dan pinjaman karyawan (loan) dengan pelunasan cicilan potong gaji otomatis",
        "Daily Reports & Announcements: Pengiriman laporan progres kerja harian karyawan dan pengumuman siaran (broadcast) perusahaan"
      ]
    },
    github: "#",
    liveDemo: "#"
  },
  {
    id: "sales-inventory-app",
    title: "Sales Inventory App & Web",
    category: "backend",
    categoryLabel: "Flutter & Laravel",
    year: "2025",
    date: "2025-11",
    status: "Production",
    featured: true,
    summary: {
      en: "An integrated Web & Mobile cross-platform inventory and sales management system automating multi-tier stock distribution (Headquarters -> Branch -> Field Sales -> Retail Outlets) and real-time field Point of Sale transactions.",
      id: "Sistem manajemen inventaris dan penjualan terintegrasi berbasis Web & Mobile (Cross-Platform) yang mengotomatisasi alur distribusi barang berjenjang (Pusat -> Cabang -> Sales Lapangan -> Toko/Outlet Mitra) serta pencatatan transaksi kasir lapangan (Point of Sale) secara real-time."
    },
    tags: ["Flutter", "Laravel 12", "PHP 8.3", "MySQL", "Bluetooth ESC/POS", "TailwindCSS", "Alpine.js", "ApexCharts"],
    overview: {
      en: [
        "Solves inefficiencies in manual recording of telecommunication vouchers and physical goods distribution across multiple geographical branches.",
        "Consists of two synchronized components: A Multi-Role Web Portal for Owners, Central Admins, and Branch Admins to orchestrate procurement, stock transfers, and financial analytics; and a Mobile Field Sales Assistant for roving agents to track on-hand stock, process retail outlet sales, print receipts via portable Bluetooth thermal printers, and process inventory returns."
      ],
      id: [
        "Aplikasi ini menyelesaikan inefisiensi pencatatan manual distribusi voucher telekomunikasi dan barang fisik lintas cabang.",
        "Sistem terbagi menjadi dua bagian utama: Web Portal (Multi-Role Dashboard) untuk Owner, Admin Pusat, dan Cabang dalam mengontrol stok, mutasi, dan audit analitik; serta Mobile App (Field Sales Assistant) bagi Sales Lapangan untuk mengelola sisa stok fisik, memproses transaksi kasir toko mitra, cetak struk nota langsung di tempat via Bluetooth thermal printer, dan alur retur barang."
      ]
    },
    problem: {
      en: "Distributing high-value telecom vouchers across branches suffered from stock shrinkage, reconciled field invoice discrepancies, and lack of physical receipts for retail shops.",
      id: "Distribusi produk bernilai tinggi (voucher fisik & pulsa) antar cabang rawan kebocoran stok, selisih nota di lapangan, dan ketiadaan struk cetak fisik saat sales bertransaksi di toko retail."
    },
    solution: {
      en: "Engineered an integrated solution: Laravel 12 multi-tier relational web portal with ApexCharts analytics, combined with a Flutter field agent mobile app equipped with ESC/POS Bluetooth thermal printing.",
      id: "Membangun sistem terintegrasi: Web Portal Laravel 12 dengan skema relasional multi-tier dan analitik grafik ApexCharts, dipadukan Aplikasi Mobile Flutter untuk sales lapangan dengan driver cetak Bluetooth ESC/POS 58mm."
    },
    keyMetrics: {
      en: [
        "Zero-discrepancy real-time stock tracking across Central, Branch, and Field tiers",
        "Sub-2s mobile receipt printing on portable 58mm Bluetooth thermal printers",
        "Interactive sales performance and inventory turnover analytics via ApexCharts"
      ],
      id: [
        "Pelacakan stok berjenjang real-time tanpa selisih (Pusat, Cabang, dan Sales)",
        "Pencetakan struk nota penjualan di printer thermal portable 58mm < 2 detik",
        "Dashboard analitik performa sales dan mutasi stok interaktif via ApexCharts"
      ]
    },
    architecturePoints: {
      en: [
        "Backend & API: Laravel 12 (PHP 8.3), Laravel Sanctum token auth, MySQL multi-tier relational schema",
        "Web Dashboard: Laravel Blade, Alpine.js, Tailwind CSS, Vite, and ApexCharts analytics",
        "Mobile Client: Flutter (Dart) with structured MVVM pattern & Provider state management",
        "Hardware Integration: Flutter Blue Plus / ESC/POS commands for portable 58mm thermal printers",
        "Networking & API: Retrofit & Dio REST client with network status resilience"
      ],
      id: [
        "Backend & REST API: Laravel 12 (PHP 8.3), Laravel Sanctum (Token-based Mobile Auth), MySQL Relational schema",
        "Web Dashboard: Laravel Blade & Alpine.js, TailwindCSS & Vite, ApexCharts (Analytics)",
        "Aplikasi Mobile: Flutter (Dart) dengan arsitektur MVVM & Provider State Management",
        "Integrasi Hardware: Flutter Blue Plus / ESC-POS (Bluetooth Thermal Printing 58mm)",
        "Networking & REST Client: Retrofit & Dio (REST Client)"
      ]
    },
    coverImage: "/projects/sales-inventory-app/screen1.png",
    screenshots: [
      "/projects/sales-inventory-app/screen1.png",
      "/projects/sales-inventory-app/screen2.png",
      "/projects/sales-inventory-app/screen3.png",
      "/projects/sales-inventory-app/screen4.png",
      "/projects/sales-inventory-app/screen5.png",
      "/projects/sales-inventory-app/screen6.png"
    ],
    highlights: {
      en: [
        "Multi-Tier Inventory & Stock Distribution: Transparent, traceable multi-tier stock distribution and transfer workflow from Central Warehouse to Branches and down to Field Sales agents",
        "Mobile POS & Order Cart: Dynamic mobile shopping cart for field sales with instant subtotal, tax calculation, and profit margin estimation",
        "Bluetooth Thermal Receipt Printing (58mm): Instant 58mm portable Bluetooth thermal receipt printing and test-print utilities via ESC/POS protocol",
        "Stock Return Management: Field stock return workflow with quantity validation, reason logging, and branch intake verification",
        "Transaction Edit Approval Workflow: Multi-level edit approval workflow requiring Central/Owner sign-off for transaction adjustments",
        "Role-Based Access Control (RBAC): Granular Role-Based Access Control across four user tiers (Owner, Central HQ, Branch Admin, and Field Sales)"
      ],
      id: [
        "Multi-Tier Inventory & Stock Distribution: Alur distribusi dan mutasi stok berjenjang dari Gudang Pusat ke Cabang hingga ke tangan Sales Lapangan secara transparan dan terlacak",
        "Mobile POS & Order Cart: Keranjang penjualan dinamis bagi sales lapangan untuk akumulasi pesanan berbagai produk, perhitungan subtotal otomatis, serta kalkulasi estimasi margin/profit",
        "Bluetooth Thermal Receipt Printing (58mm): Integrasi cetak struk nota penjualan dan test-print langsung ke printer thermal portable via Bluetooth ESC/POS",
        "Stock Return / Retur Manajemen: Fitur pengembalian sisa stok fisik sales kembali ke cabang dengan validasi kuantitas dan pencatatan alasan retur",
        "Transaction Edit Approval Workflow: Mekanisme penyesuaian nominal transaksi sales dengan sistem persetujuan (approval/rejection) bertingkat oleh Owner/Pusat",
        "Role-Based Access Control (RBAC): Pembatasan akses berjenjang untuk 4 peran (Owner, Pusat, Cabang, dan Sales)"
      ]
    },
    github: "#",
    liveDemo: "#"
  },
  {
    id: "nuset-app",
    title: "Nuset App",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2025",
    date: "2025-04",
    status: "Production",
    featured: false,
    summary: {
      en: "An offline-first mobile application designed to simplify recording, tracking, and managing enterprise asset inventories, operational tools, and circulation transactions efficiently.",
      id: "Nuset adalah aplikasi mobile berbasis offline-first yang dirancang untuk mempermudah pencatatan, pelacakan, dan pengelolaan inventaris aset, perkakas operasional (tools), serta sirkulasi transaksi barang secara efisien dan terstruktur."
    },
    tags: ["Flutter", "Dart", "MVVM", "Provider", "Hive NoSQL", "Sqflite", "Syncfusion XlsIO", "Image Picker"],
    overview: {
      en: [
        "Digitizes physical asset management and internal company logistics. Facilitates asset cataloging complete with physical photo documentation, real-time incoming/outgoing stock tracking, operational tool loan logs with historical audit trails, and instant on-device Excel report generation.",
        "Engineered with an offline-first architecture utilizing Hive NoSQL and Sqflite local databases, enabling seamless warehouse and facility inventory operations even in zero-connectivity environments."
      ],
      id: [
        "Aplikasi ini mendigitalkan proses manajemen aset fisik dan logistik internal perusahaan. Nuset memfasilitasi pencatatan data aset lengkap dengan dokumentasi foto, pemantauan transaksi arus barang (masuk/keluar), pelacakan peminjaman barang beserta riwayatnya, hingga pembuatan laporan rekapitulasi otomatis ke format Excel langsung dari perangkat mobile.",
        "Dengan arsitektur offline-first menggunakan database NoSQL Hive dan Sqflite, seluruh operasional gudang dan inventarisasi dapat berjalan tanpa gangguan meski di area tanpa koneksi internet."
      ]
    },
    problem: {
      en: "Manual paper logs for warehouse equipment and tool loans resulted in misplaced tools, untracked physical depreciation, and painful annual audit reconciliations.",
      id: "Pencatatan inventaris aset dan peminjaman perkakas kerja di gudang yang masih manual sering menyebabkan alat kerja hilang, kondisi fisik aset tidak terdokumentasi, dan proses audit tahunan memakan waktu lama."
    },
    solution: {
      en: "Developed an offline-first Flutter mobile solution powered by Hive NoSQL & Sqflite, equipped with camera photo attachments and on-device Excel (.xlsx) report generation.",
      id: "Membangun aplikasi mobile Flutter offline-first dengan database NoSQL Hive & Sqflite, dokumentasi kamera foto bukti fisik, dan engine ekspor Excel instan langsung di ponsel."
    },
    keyMetrics: {
      en: [
        "100% resilient offline operation in underground warehouses and remote sites",
        "Visual physical asset verification via in-app camera capture and photo compression",
        "Instant on-device export of full audit records to Excel (.xlsx) spreadsheets"
      ],
      id: [
        "100% kapabilitas operasional offline di gudang atau area terpencil",
        "Pencatatan bukti fisik aset dengan integrasi kamera dan kompresi foto",
        "Ekspor laporan audit aset lengkap ke format Excel (.xlsx) instan di perangkat"
      ]
    },
    architecturePoints: {
      en: [
        "MVVM architecture with Provider for predictable reactive state management",
        "Offline-first local persistence powered by Hive NoSQL and Sqflite engines",
        "Document generation pipeline using Syncfusion Flutter XlsIO and Excel packages",
        "Hardware media services via Image Picker (Camera/Gallery) and Permission Handler",
        "Modern UI component hierarchy featuring Table Calendar and Flutter SVG"
      ],
      id: [
        "Arsitektur & State Management: MVVM Architecture, Provider",
        "Penyimpanan Lokal: Hive (Offline-First NoSQL Database), Sqflite",
        "Reporting & Document Engine: Syncfusion Flutter XlsIO, Excel Package, Path Provider",
        "Device & Media Services: Image Picker (Kamera/Galeri), Permission Handler",
        "UI / UX Libraries: Flutter Material Design, Table Calendar, Flutter SVG"
      ]
    },
    coverImage: "/projects/nuset-app/screen1.png",
    screenshots: [
      "/projects/nuset-app/screen1.png",
      "/projects/nuset-app/screen2.png",
      "/projects/nuset-app/screen3.png"
    ],
    highlights: {
      en: [
        "Asset Catalog Management: Recording, updating, and specifying assets complete with camera photo attachments of physical items",
        "Transaction Recording (Stock In / Out): Monitoring flow of incoming and outgoing inventory items accompanied by complete historical logs",
        "Asset Loan Tracking: Managing borrowing workflows, return deadlines, condition statuses, and borrower histories",
        "Tools Management: Specialized cataloging and maintenance status tracking for heavy-duty operational tools",
        "Fast Search & Filter: Instant discovery of assets and transaction histories filtered by status, category, or condition",
        "Excel Report Export (.xlsx): On-device export of assets, loan logs, and transaction history into structured Excel spreadsheets"
      ],
      id: [
        "Manajemen Katalog Aset: Pencatatan, pembaruan, dan detail spesifikasi aset lengkap dengan lampiran foto bukti fisik",
        "Pencatatan Transaksi (Barang In / Out): Monitoring arus pergerakan stok barang masuk dan keluar yang disertai riwayat histori lengkap",
        "Pelacakan Peminjaman Aset: Pengelolaan alur peminjaman, batas waktu pengembalian, status unit, dan histori peminjam",
        "Kelola Perkakas (Tools Management): Inventarisasi dan pencatatan khusus untuk peralatan/tools kerja operasional",
        "Pencarian & Filter Cepat: Kemudahan menemukan aset dan histori transaksi secara instan berdasarkan kata kunci atau status",
        "Export Laporan ke Excel (.xlsx): Konversi data aset, transaksi, peminjaman, dan tools ke format spreadsheet untuk keperluan audit dan pelaporan"
      ]
    },
    github: "#",
    liveDemo: "#"
  },
  {
    id: "dual-screen-pos",
    title: "Dual Screen POS App",
    category: "mobile",
    categoryLabel: "Flutter",
    year: "2025",
    date: "2025-02",
    status: "Production",
    featured: false,
    summary: {
      en: "Implementation of Dual-Screen Customer-Facing Display on the Rekalaba POS Flutter application. Enables the secondary customer-facing display on Android POS terminals to render real-time order summaries, dynamic QRIS payment codes, and transaction status synchronized from the primary cashier screen.",
      id: "Implementasi fitur Dual-Screen Customer-Facing Display pada aplikasi POS (Rekalaba) berbasis Flutter. Memungkinkan layar sekunder pada perangkat Android POS menampilkan ringkasan pesanan, kode QRIS pembayaran, dan status transaksi secara real-time tersinkronisasi dari layar kasir utama."
    },
    tags: ["Flutter", "Dart", "Android Presentation API", "presentation_displays", "QRIS / qr_flutter", "JSON Serialization", "ScreenUtil"],
    overview: {
      en: [
        "On dual-screen enterprise Android POS terminals (such as Sunmi, iMin, and Pax devices), customers require immediate visibility of their itemized order and streamlined self-service QR payments.",
        "This project integrates native inter-display communication using an event-driven architecture (SecondaryDisplayService). Cashiers operate unimpeded on the primary terminal while the secondary display presents a specialized customer view with zero UI blocking or input interference."
      ],
      id: [
        "Pada perangkat POS dual-screen (seperti Sunmi, iMin, dsb.), pelanggan membutuhkan visibilitas terhadap detail belanja dan kemudahan proses pembayaran mandiri.",
        "Proyek ini mengintegrasikan komunikasi data native antar-layar menggunakan arsitektur event-driven service (SecondaryDisplayService), sehingga kasir dapat melayani pesanan di layar utama sementara layar kedua otomatis menampilkan antarmuka khusus pelanggan tanpa interferensi input."
      ]
    },
    problem: {
      en: "Dual-screen POS hardware features a secondary customer monitor, but cross-platform frameworks lack out-of-the-box native multi-display support for the Android Presentation API.",
      id: "Terminal POS modern memiliki layar kedua yang menghadap pelanggan, namun framework lintas-platform seperti Flutter tidak memiliki dukungan bawaan multi-display native di Android Presentation API."
    },
    solution: {
      en: "Engineered an event-driven display service bridging Flutter with the Android Presentation API, featuring decoupled JSON serialization, dynamic QRIS rendering, and adaptive orientation layouts.",
      id: "Membangun jembatan komunikasi event-driven dengan package presentation_displays, serializer JSON yang decoupled, perender kode QRIS dinamis, dan layout adaptif portrait/landscape."
    },
    keyMetrics: {
      en: [
        "Zero-latency real-time synchronization between cashier and customer displays",
        "Decoupled rendering maintaining consistent 60fps on primary cashier terminal",
        "Universal hardware compatibility across Android dual-screen terminals (Sunmi, iMin, etc.)"
      ],
      id: [
        "Sinkronisasi data antar-layar real-time tanpa latensi (zero perceived delay)",
        "Pemisahan total thread display: Layar pelanggan berjalan tanpa mempengaruhi 60fps layar kasir",
        "Dukungan fleksibel perangkat hardware POS dual-screen (Sunmi, iMin, dsb.)"
      ]
    },
    architecturePoints: {
      en: [
        "Hardware Bridge: presentation_displays (Android Presentation API native wrapper)",
        "Data Communication Layer: Event-driven SecondaryDisplayService with decoupled JSON messaging",
        "UI & QR Rendering: qr_flutter for dynamic QRIS codes and flutter_screenutil for layout scaling",
        "Local Persistence: SharedPreferences for orientation preferences and display configuration",
        "Target Platform: Enterprise Android Dual-Screen POS Terminals (Sunmi, iMin, Pax, etc.)"
      ],
      id: [
        "Integrasi Hardware: presentation_displays (Wrapper Android Presentation API)",
        "Layer Komunikasi Data: Event-driven SecondaryDisplayService dengan JSON serializable",
        "Rendering UI & QR: qr_flutter untuk QRIS dinamis dan flutter_screenutil untuk layout adaptif",
        "Penyimpanan Persisten: SharedPreferences untuk cache konfigurasi orientasi layar",
        "Target Platform: Terminal Android POS Dual-Screen (Sunmi, iMin, Pax, dsb.)"
      ]
    },
    coverImage: "/projects/dual-screen-pos/screen1.png",
    screenshots: [
      "/projects/dual-screen-pos/screen1.png",
      "/projects/dual-screen-pos/screen2.png",
      "/projects/dual-screen-pos/screen3.png"
    ],
    highlights: {
      en: [
        "Real-Time Order Summary Sync: Live order synchronization showing itemized cart, quantities, discounts, taxes, and grand totals in real-time",
        "Dynamic QRIS Display: Dynamic on-screen QRIS code rendering for rapid customer scanning via digital e-wallets and mobile banking",
        "Transaction Status & Success Screen: Visual transaction status animations (processing, success, failed) with automatic standby reset timers",
        "Adaptive Dual-Orientation (Portrait & Landscape): Adaptive responsive UI layout seamlessly catering to both portrait and landscape secondary monitor aspect ratios",
        "Decoupled Data Communication Layer: High-speed decoupled JSON message bridge ensuring zero UI jank or performance degradation on the primary cashier screen"
      ],
      id: [
        "Real-Time Order Summary Sync: Menampilkan daftar belanja, kuantitas, diskon, pajak, dan total tagihan secara live saat kasir menginput produk",
        "Dynamic QRIS Display: Men-generate dan menampilkan QR Code pembayaran (GoPay, DANA, ShopeePay, dll.) di layar pelanggan untuk langsung di-scan",
        "Transaction Status & Success Screen: Notifikasi visual status pembayaran (berhasil/gagal) dan auto-reset ke status standby setelah transaksi selesai",
        "Adaptive Dual-Orientation (Portrait & Landscape): Tampilan layar sekunder responsif menyesuaikan orientasi monitor perangkat (portrait/landscape)",
        "Decoupled Data Communication Layer: Komunikasi data antar-layar berbasis JSON messaging yang aman, cepat, dan tidak membebani performa UI layar utama"
      ]
    },
    github: "#",
    liveDemo: "#"
  }
];

export const getProjectsData = (lang = 'en') => {
  return rawProjectsData.map((project) => ({
    ...project,
    title: typeof project.title === 'object' ? (project.title[lang] || project.title.en) : project.title,
    categoryLabel: typeof project.categoryLabel === 'object' ? (project.categoryLabel[lang] || project.categoryLabel.en) : project.categoryLabel,
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
