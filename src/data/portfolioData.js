/**
 * PORTFOLIO DATA - ABGHI FAREIHAN
 * Mobile Developer (Flutter)
 */

export const personalData = {
  name: "Abghi Fareihan",
  nickname: "Abghi",
  handle: "abghi.dev",
  role: "Mobile Developer (Flutter)",
  tagline: "Crafting fluid, high-performance cross-platform mobile apps with end-to-end backend integration.",
  location: "Jakarta Selatan, Indonesia",
  availability: "Available for Fulltime & Project",
  statusColor: "#10b981", // Emerald active status
  email: "abghifareihand@gmail.com",
  github: "https://github.com/abghifareihand",
  linkedin: "https://www.linkedin.com/in/abghifareihand",
  resumeUrl: "#",

  bio: [
    "I am a Mobile Developer specializing in Flutter and Dart. I focus on building responsive, 60fps cross-platform mobile applications with clean architecture, robust state management, and reliable offline-first capabilities.",
    "In addition to mobile engineering, I regularly build the supporting backend ecosystem (including Laravel RESTful APIs and web admin dashboards), enabling me to deliver complete, production-ready solutions from database design to the mobile user interface."
  ],

  // Key metrics displayed in Hero section
  metrics: [
    { value: "2+", label: "Years Experience", detail: "Flutter & Mobile Ecosystem" },
    { value: "10+", label: "Mobile Apps & Systems", detail: "End-to-End Solutions Delivered" },
    { value: "1:1", label: "Pixel-Perfect UI", detail: "Precise Figma-to-Code Slicing" },
    { value: "Full-Stack", label: "Fullstack Systems", detail: "Flutter & Laravel REST API" }
  ]
};

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "backend", label: "Fullstack" }
];

// Common screenshots array for demonstration
const defaultScreenshots = [
  "/projects/union-getah/screen1.png",
  "/projects/union-getah/screen2.png",
  "/projects/union-getah/screen3.png"
];

export const projectsData = [
  {
    id: "quickbite-ecosystem",
    title: "QuickBite - On-Demand Delivery System (App + API + Web Admin)",
    category: "backend",
    categoryLabel: "Flutter & Laravel",
    year: "2024",
    status: "Production",
    featured: true,
    summary: "Complete on-demand food delivery ecosystem comprising a fluid Flutter customer mobile app, real-time rider GPS tracking, a robust Laravel REST API backend, and a comprehensive web management dashboard.",
    tags: ["Flutter", "Dart", "Laravel API", "Web Admin Dashboard", "MySQL", "BLoC", "FCM", "Google Maps"],
    problem: "Coordinating instant order dispatches between customers, delivery riders, and restaurant operators required synchronizing mobile clients with an authoritative backend without race conditions.",
    solution: "Engineered the Flutter mobile app using BLoC and Google Maps marker interpolation, paired with a Laravel 11 REST API utilizing database transactions, Sanctum authentication, and automated FCM push notifications.",
    keyMetrics: [
      "Sub-200ms API response time under peak ordering hours",
      "Consistent 60fps smooth map rider tracking on mobile",
      "Processed 15,000+ monthly orders through the Laravel backend"
    ],
    architecturePoints: [
      "Flutter Mobile App (Clean Architecture + BLoC + Dio)",
      "Laravel RESTful API with Sanctum Token Authentication",
      "Web Admin Dashboard for menu, order, and driver management",
      "Firebase Cloud Messaging (FCM) high-priority notification dispatch"
    ],
    coverImage: "/projects/quickbite-ecosystem/screen1.png",
    screenshots: [
      "/projects/quickbite-ecosystem/screen1.png",
      "/projects/quickbite-ecosystem/screen2.png",
      "/projects/quickbite-ecosystem/screen3.png"
    ],
    highlights: [
      "Feature-First Clean Architecture separating data, domain, and presentation layers",
      "BLoC state management pattern with strict unidirectional event-driven data flow",
      "Google Maps SDK real-time rider GPS tracking with 60fps marker interpolation",
      "FCM Push Notifications with automated background order state machine updates",
      "Laravel 11 RESTful API backend utilizing database transactions & Sanctum authentication",
      "Comprehensive Web Admin dashboard for instant merchant order & revenue oversight"
    ],
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
    summary: "Specialized offline-first mobile application built for Perum Perhutani to record and compute forest resin harvests in zero-signal areas, featuring Bluetooth thermal receipt printing.",
    tags: ["Flutter", "Dart", "Bluetooth ESC/POS", "SQLite / Hive", "Offline-First", "REST API"],
    problem: "Forest rangers operating deep in remote forest reserves had zero cellular connectivity, preventing data entry and resulting in paper-based delays and manual calculation errors.",
    solution: "Designed an offline-first mobile workflow with initial online authentication, local offline harvest computation, on-site Bluetooth thermal printing for farmers, and automatic cloud synchronization upon reconnection.",
    keyMetrics: [
      "100% offline operational capability in remote deep forest zones",
      "Instant on-site Bluetooth receipt printing in < 2 seconds",
      "Eliminated manual paper calculation errors for resin yields"
    ],
    architecturePoints: [
      "Offline-first local state storage via SQLite & Hive",
      "Bluetooth thermal printer integration via ESC/POS commands",
      "Initial online token sync with resilient offline fallback",
      "Automated two-way batch sync upon restoring network connectivity"
    ],
    coverImage: "/projects/union-getah/screen1.png",
    screenshots: [
      "/projects/union-getah/screen1.png",
      "/projects/union-getah/screen2.png",
      "/projects/union-getah/screen3.png"
    ],
    highlights: [
      "100% Offline-first local database utilizing SQLite and Hive for zero-signal deep forest zones",
      "Bluetooth thermal printer integration streaming native ESC/POS commands in < 2s",
      "Automated two-way batch cloud synchronization with conflict resolution when online",
      "Biometric fingerprint authentication ensuring tamper-proof field officer validation",
      "Instant yield computation eliminating manual paper-based rubber harvest calculation errors",
      "Role-based operational authorization between field harvesters and Perhutani supervisors"
    ],
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
    summary: "Secure digital wallet app featuring biometric authentication, instant QRIS/peer-to-peer transfers, and interactive real-time spending analytics charts.",
    tags: ["Flutter", "Dart", "BLoC / Cubit", "Clean Architecture", "Biometrics", "REST API", "Dio"],
    problem: "Financial applications require strict state predictability, encrypted local token storage, and zero data race conditions during concurrent financial requests.",
    solution: "Implemented Clean Architecture with BLoC state management, Flutter Secure Storage for keychain/keystore tokens, and custom Dio interceptors for automated JWT refresh.",
    keyMetrics: [
      "99.9% crash-free sessions across 30k+ active users",
      "App cold start reduced to < 1.2s",
      "Passed OWASP Mobile Security verification"
    ],
    architecturePoints: [
      "Clean Architecture (Domain, Data, Presentation layers)",
      "Strict Event-State separation via Flutter BLoC",
      "Biometric local auth (FaceID / Fingerprint) fallback",
      "Custom Chart painter for smooth 60fps financial analytics"
    ],
    coverImage: "/projects/finpulse-wallet/screen1.png",
    screenshots: [
      "/projects/finpulse-wallet/screen1.png",
      "/projects/finpulse-wallet/screen2.png",
      "/projects/finpulse-wallet/screen3.png"
    ],
    highlights: [
      "Multi-currency digital wallet ledger with offline foreign exchange rate caching",
      "Hardware-backed biometric authentication (Face ID & Fingerprint) with secure enclave",
      "Interactive spending breakdown analytics powered by custom Flutter Canvas rendering",
      "Dynamic QRIS payment generation and real-time merchant QR camera scanner",
      "Optimistic UI state mutations for zero perceived transaction and transfer latency",
      "Encrypted SQLite transaction history with instant export to downloadable PDF receipts"
    ],
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
    summary: "Comprehensive healthcare mobile app enabling real-time doctor consultations, video/audio calls, prescription tracking, and appointment scheduling.",
    tags: ["Flutter", "Dart", "Riverpod", "WebRTC", "Firebase Cloud Messaging", "WebSockets"],
    problem: "Unstable cellular connections in remote areas caused call dropouts and missing emergency doctor message notifications.",
    solution: "Engineered a resilient WebSocket auto-reconnect engine paired with high-priority FCM push notifications and adaptive WebRTC bitrate fallback.",
    keyMetrics: [
      "Zero missed notification rate for urgent doctor updates",
      "Sub-200ms chat latency over 3G/4G networks",
      "4.8/5.0 rating on Play Store"
    ],
    architecturePoints: [
      "Riverpod for state management & dependency injection",
      "WebRTC audio/video call integration with PIP support",
      "Background service handling for push incoming calls",
      "Encrypted medical history caching via Hive"
    ],
    coverImage: "/projects/mediconnect-app/screen1.png",
    screenshots: [
      "/projects/mediconnect-app/screen1.png",
      "/projects/mediconnect-app/screen2.png",
      "/projects/mediconnect-app/screen3.png"
    ],
    highlights: [
      "Real-time doctor appointment booking with conflict-free calendar slot reservations",
      "Secure in-app telemedicine consultation room with live presence indicators",
      "Electronic Medical Record (EMR) viewer with encrypted prescription history",
      "Background local medication reminders and automated dosage countdown notifications",
      "Interactive clinic geolocation maps with turn-by-turn navigation intents",
      "Cashless consultation checkout integrated with midtrans payment gateways"
    ],
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
    summary: "Clean developer news aggregator and podcast audio player with background playback, lock screen media controls, and syntax-highlighted code snippets.",
    tags: ["Flutter", "Dart", "Just Audio", "Audio Service", "Hive", "Provider"],
    problem: "Standard audio packages pause when the mobile device screen locks or when user switches to other applications.",
    solution: "Integrated Android foreground media services and iOS AVAudioSession with lock screen notifications and persistent local caching.",
    keyMetrics: [
      "Continuous background audio playback with 0% termination",
      "Instant offline article reading via Hive key-value store",
      "Lightweight app bundle size (< 14MB)"
    ],
    architecturePoints: [
      "Native lock screen media control integration",
      "Offline markdown parsing with syntax highlighting",
      "Dynamic audio cache management with size quotas",
      "Light and dark mode synced with system preferences"
    ],
    coverImage: "/projects/devpulse-offline/screen1.png",
    screenshots: [
      "/projects/devpulse-offline/screen1.png",
      "/projects/devpulse-offline/screen2.png",
      "/projects/devpulse-offline/screen3.png"
    ],
    highlights: [
      "Full offline article caching with automated markdown syntax rendering engine",
      "Background audio podcast playback engine with native OS lockscreen controls",
      "Custom typography reader with dynamic line-height and eye-care night mode",
      "Cross-device bookmark and reading progress synchronization via cloud DB",
      "SQLite full-text search indexing across cached developer publications",
      "Zero-latency audio scrubbing and dynamic variable playback speed"
    ],
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
    summary: "Open-source Flutter package providing adaptive Cupertino (iOS) and Material 3 (Android) UI components with automatic device breakpoint scaling.",
    tags: ["Flutter", "Dart", "Open Source", "Material 3", "Cupertino", "Unit Testing"],
    problem: "Developers frequently duplicate layout logic when targeting both iOS and Android platforms to match native design guidelines.",
    solution: "Crafted unified wrapper widgets that dynamically evaluate platform target and render platform-authentic dialogs, sheets, buttons, and switches.",
    keyMetrics: [
      "400+ GitHub Stars & pub.dev package points: 140/140",
      "98% automated test coverage (Goldens & Unit tests)",
      "Reduces cross-platform boilerplate code by 45%"
    ],
    architecturePoints: [
      "Polymorphic platform widget abstraction layer",
      "Zero third-party runtime dependencies",
      "Golden UI tests across multiple device screen ratios",
      "Automated CI/CD release workflow via GitHub Actions"
    ],
    coverImage: "/projects/flutter-adaptive-ui/screen1.png",
    screenshots: [
      "/projects/flutter-adaptive-ui/screen1.png",
      "/projects/flutter-adaptive-ui/screen2.png",
      "/projects/flutter-adaptive-ui/screen3.png"
    ],
    highlights: [
      "Universal responsive layout engine adapting smoothly across mobile, tablet, and desktop",
      "Dynamic dual-pane Master-Detail navigation on wide screens",
      "Platform-adaptive UI widgets (Cupertino on iOS, Material 3 on Android/Web)",
      "Design system token architecture for instant dark/light and white-label theming",
      "Full accessibility compliance with dynamic screen-reader label bindings",
      "Comprehensive widget and integration test suite guaranteeing fluid 60fps"
    ],
    github: "https://github.com/abghifareihand/flutter-adaptive-kit",
    liveDemo: "https://github.com/abghifareihand/flutter-adaptive-kit"
  }
];

export const experienceData = [
  {
    period: "Sep 2024 - Present",
    role: "Mobile Developer",
    company: "Ignatia",
    location: "Remote",
    type: "Fulltime",
    description: "Driving core mobile development, feature engineering, and hardware integrations for a flagship Point of Sale (POS) application and integrated merchant services.",
    achievements: [
      "Stabilized and optimized the production POS mobile application through systematic bug fixing, performance profiling, and refactoring.",
      "Engineered an integrated PPOB (Payment Point Online Bank) module within the main app for bill payments and digital top-ups.",
      "Implemented Dual-Screen presentation support for cashier terminals, enabling a synchronized real-time customer-facing display.",
      "Integrated responsive Mobile WebViews for the customer CRM portal and backoffice administration systems."
    ],
    stack: ["Flutter", "Dart", "POS Terminal SDK", "Dual-Screen API", "Mobile WebViews", "REST API", "Git"]
  },
  {
    period: "Jan 2023 - Present",
    role: "Freelance Mobile Developer",
    company: "Self-Employed",
    location: "Remote",
    type: "Project-Based",
    description: "Delivering custom client applications on a project-based milestone model, ranging from standalone cross-platform Flutter mobile apps to integrated full-stack solutions with Laravel backends.",
    achievements: [
      "Shipped multiple custom mobile applications and end-to-end ecosystems (Flutter mobile client + Laravel REST API + Web Admin Dashboard).",
      "Managed the full product lifecycle: Figma UI slicing, database architecture (MySQL), secure authentication, and payment integrations.",
      "Consistently delivered clean, maintainable architecture with robust error handling and smooth, fluid mobile performance and responsiveness."
    ],
    stack: ["Flutter", "Dart", "Laravel", "MySQL", "Clean Architecture", "RESTful API", "Payment Gateways"]
  },
  {
    period: "Nov 2023 - Feb 2024",
    role: "Mobile Developer Intern",
    company: "Perum Perhutani",
    location: "Jakarta Selatan",
    type: "Internship",
    description: "Developed 'Union Getah', a specialized offline-first mobile application for field forest rangers and farmers to record, calculate, and invoice resin harvest yields directly in remote forests.",
    achievements: [
      "Architected a resilient offline-first workflow allowing field operators to collect and compute harvest metrics with zero cellular connectivity in remote forests.",
      "Integrated Bluetooth thermal printer hardware (ESC/POS) for instant, on-site physical receipt and invoice printing for forest farmers.",
      "Implemented secure local caching with automated two-way cloud synchronization once workers returned to network coverage."
    ],
    stack: ["Flutter", "Dart", "Offline-First Architecture", "Bluetooth ESC/POS Printer", "SQLite / Hive", "REST API"]
  },
  {
    period: "Aug 2022 - Dec 2022",
    role: "Mobile Development Trainee",
    company: "Alterra Academy",
    location: "Remote",
    type: "Intensive Bootcamp",
    description: "Completed an intensive professional Flutter engineering program mastering Dart fundamentals, OOP, state management, and full application testing.",
    achievements: [
      "Mastered Dart fundamentals, OOP principles, responsive UI slicing from Figma, and cloud integration with Firebase and REST APIs.",
      "Wrote comprehensive Unit and Widget Tests to ensure high code reliability and test-driven mobile architecture.",
      "Collaborated in an agile cross-functional squad (UI/UX Designers, React.js Frontend, Golang Backend, and QA Testers) for the Capstone Final Project."
    ],
    stack: ["Flutter", "Dart", "OOP", "Firebase", "REST API", "Unit Testing", "Widget Testing", "Scrum / Agile"]
  }
];

export const skillsData = [
  {
    category: "Mobile & Core Languages",
    description: "Primary programming languages and core mobile development frameworks",
    skills: [
      { name: "Flutter Framework", level: "Expert", highlight: true },
      { name: "Dart", level: "Expert", highlight: true },
      { name: "Kotlin (Native Android)", level: "Intermediate", highlight: false },
      { name: "Java", level: "Intermediate", highlight: false },
      { name: "Swift / iOS Basics", level: "Working Knowledge", highlight: false }
    ]
  },
  {
    category: "State Management & Architecture",
    description: "Predictable mobile state architecture and clean software design patterns",
    skills: [
      { name: "BLoC & Cubit Pattern", level: "Expert", highlight: true },
      { name: "Riverpod 2.0", level: "Expert", highlight: true },
      { name: "Clean Architecture", level: "Expert", highlight: true },
      { name: "Provider & GetIt", level: "Advanced", highlight: true },
      { name: "Repository & Factory Pattern", level: "Expert", highlight: true },
      { name: "OOP & SOLID Principles", level: "Advanced", highlight: true }
    ]
  },
  {
    category: "Networking, APIs & Local Storage",
    description: "Client-server communication, local persistence, and backend API integration",
    skills: [
      { name: "RESTful APIs & Dio", level: "Expert", highlight: true },
      { name: "Offline-First Sync Engine", level: "Advanced", highlight: true },
      { name: "Isar / Hive / SQLite Storage", level: "Advanced", highlight: true },
      { name: "Laravel API Integration (Sanctum)", level: "Advanced", highlight: true },
      { name: "Firebase (FCM, Auth, Crashlytics)", level: "Advanced", highlight: true },
      { name: "Secure Storage & Biometrics", level: "Advanced", highlight: false }
    ]
  },
  {
    category: "Tooling, Testing & DevOps",
    description: "Mobile release automation, profiling, and app store deployment",
    skills: [
      { name: "Git & GitFlow Workflow", level: "Expert", highlight: true },
      { name: "Fastlane & CI/CD", level: "Advanced", highlight: true },
      { name: "Play Console & App Store Connect", level: "Advanced", highlight: true },
      { name: "Widget & Unit Testing", level: "Advanced", highlight: true },
      { name: "Flutter DevTools & Profiling", level: "Advanced", highlight: true },
      { name: "Figma to Pixel-Perfect UI", level: "Expert", highlight: true }
    ]
  }
];
export const educationData = [
  {
    period: "2019 - 2023",
    degree: "Bachelor of Computer Science (S.Kom)",
    institution: "Universitas Nasional",
    major: "Informatics (Teknik Informatika)",
    location: "Jakarta, Indonesia",
    status: "Graduated in 2023",
    description: "Completed undergraduate degree in Informatics with a strong focus on Software Engineering, Object-Oriented Programming (OOP), Algorithms & Data Structures, and Database Management Systems.",
    highlights: [
      "Software Engineering & Architecture",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Database Systems (SQL / Relational)",
      "Mobile Computing Fundamentals"
    ]
  }
];
