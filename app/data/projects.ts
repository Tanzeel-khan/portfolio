export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  role: string;
  period: string;
  liveUrl?: string;
  image?: string;
  cardGradient: string;
  cardAccent: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tags: string[];
  metrics: { value: string; label: string }[];
  highlight: string;
};

export const projects: Project[] = [
  {
    slug: "customscape-ai",
    title: "Customscape AI",
    subtitle: "AI Landscaping Design Platform",
    category: "AI / Web App",
    client: "Small Business · USA",
    role: "Frontend Lead",
    period: "2025",
    liveUrl: "https://portal.customscape.ai/",
    image: "/projects/customscape.jpg",
    cardGradient: "from-[#0a1f0a] via-[#122912] to-[#0d1a0d]",
    cardAccent: "#4ade80",
    overview:
      "An AI-powered landscaping design platform that lets homeowners upload garden photos, select transformation zones, and receive three AI-generated design variations in seconds — turning vision into visual reality.",
    problem:
      "A landscaping firm struggled with lengthy client acquisition cycles. Prospective customers hesitated to commit to costly garden projects without seeing potential outcomes first. The team manually created design mockups for each prospect, creating bottlenecks and low conversion rates.",
    solution:
      "A self-serve web platform where users upload garden photos, highlight areas to transform, and choose from design themes (Formal, Beach, Mediterranean, Edible). Two custom ML models — META-SAM2 for image segmentation and SDXL for generation — run on AWS GPU infrastructure with Auto Scaling Groups and spot instances for cost efficiency.",
    features: [
      "Garden photo upload and zone-selection interface",
      "Polling-based async API communication for AI model responses",
      "3 design variation output per upload",
      "Image segmentation workflow (META-SAM2)",
      "Design theme picker (Formal, Beach, Mediterranean, Edible)",
      "AWS Cognito authentication",
      "Fully responsive, pixel-perfect UI",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "AWS S3",
      "AWS Cognito",
      "AWS Amplify",
      "Vercel",
    ],
    metrics: [
      { value: "100%", label: "Accurate image segmentation & masking" },
      { value: "3×", label: "Design variations per upload" },
      { value: "2", label: "ML models integration" },
      { value: "100%", label: "Automated acquisition flow" },
    ],
    highlight: "Real-time AI image generation",
  },
  {
    slug: "lucson",
    title: "Lucson",
    subtitle: "Financial Freelance Marketplace",
    category: "Fintech / SaaS",
    client: "Startup",
    role: "Senior Frontend Engineer",
    period: "2022 – 2023",
    image: "/projects/lucson.jpg",
    cardGradient: "from-[#050d1a] via-[#071425] to-[#050f1f]",
    cardAccent: "#60a5fa",
    overview:
      "A financial freelance marketplace connecting professionals with short-term finance projects. Built on Next.js with real-time data flow across transactions, job listings, and user authentication.",
    problem:
      "Financial professionals needed a dedicated platform to find specialized freelance work, while firms needed vetted talent quickly. Existing generic freelance platforms lacked domain-specific features for the finance sector.",
    solution:
      "A Next.js marketplace with role-based dashboards, job listing management, transaction tracking, and secure authentication. TanStack Query handles server-state and real-time sync; Redux Toolkit manages complex client state.",
    features: [
      "Role-based dashboards (client & freelancer)",
      "Job listing creation and application flow",
      "Real-time transaction tracking",
      "Secure authentication with JWT",
      "Complex filter/search for job listings",
      "Reusable MUI component system",
      "90%+ unit test coverage with Jest & RTL",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "MUI",
      "TanStack Query v5",
      "Jest",
      "RTL",
    ],
    metrics: [
      { value: "90%+", label: "Test coverage" },
      { value: "100%", label: "Type-safe codebase" },
      { value: "2", label: "User role dashboards" },
      { value: "Fast", label: "Server-state sync" },
    ],
    highlight: "90%+ test coverage · Jest & RTL",
  },
  {
    slug: "ecommerce-ai-chatbot",
    title: "E-Commerce AI Chatbot",
    subtitle: "Smart Shopping Assistant",
    category: "AI / Automation",
    client: "E-Commerce Business",
    role: "AI Automation Engineer",
    period: "2023",
    image: "/projects/dollhouse.png",
    cardGradient: "from-[#1a0a00] via-[#1f1000] to-[#150d00]",
    cardAccent: "#fb923c",
    overview:
      "An AI-powered e-commerce chatbot with intelligent product search, carousel UI, personalized recommendations, and seamless checkout redirection — built with Voiceflow and OpenAI.",
    problem:
      "An e-commerce store was losing customers due to poor product discovery. Users couldn't easily find relevant products, leading to high bounce rates and abandoned sessions.",
    solution:
      "A conversational AI chatbot using Voiceflow + OpenAI that understands natural language queries, searches product catalog, presents results in a carousel UI, and redirects to checkout. Google Sheets acts as a lightweight backend for analytics and user data.",
    features: [
      "Natural language product search",
      "Carousel UI for product presentation",
      "Smart recommendation engine (OpenAI)",
      "Direct checkout redirection",
      "Google Sheets user data & analytics",
      "Conversation flow management (Voiceflow)",
      "Easy embed on any storefront",
    ],
    tags: [
      "Voiceflow",
      "OpenAI",
      "JavaScript",
      "Google Sheets API",
    ],
    metrics: [
      { value: "5×", label: "Engagement increase" },
      { value: "80%", label: "Faster response time" },
      { value: "100%", label: "Automated product search" },
      { value: "0", label: "Manual catalog lookups" },
    ],
    highlight: "5× engagement increase",
  },
  {
    slug: "avetics",
    title: "Avetics",
    subtitle: "Drone-Based Inspection Platform for Industrial Safety",
    category: "AI / Web App",
    client: "Enterprise · Singapore",
    role: "Lead Frontend Engineer",
    period: "2023",
    liveUrl: "https://www.avetics.com/",
    image: "/projects/avetics.jpg",
    cardGradient: "from-[#050a14] via-[#081020] to-[#060c18]",
    cardAccent: "#38bdf8",
    overview:
      "Avetics delivers drone-powered inspection solutions for hazardous or hard-to-reach industrial environments across construction, oil & gas, and civil infrastructure sectors. The platform processes drone-captured imagery with computer vision to deliver real-time actionable insights.",
    problem:
      "Traditional inspection methods exposed personnel to dangerous conditions in oil & gas, construction, and civil infrastructure environments while limiting coverage. The company needed a scalable system to assess hazardous areas remotely without risking human safety.",
    solution:
      "Led the full frontend of a web platform that aggregates drone inspection data, visualizes computer vision analysis results, and delivers real-time insights to operators. The UI surfaces YOLO-powered defect detection results, manages inspection job workflows, and renders geospatial data from drone flights.",
    features: [
      "Drone inspection job scheduling and management dashboard",
      "Real-time defect detection results visualization (YOLO-powered)",
      "Geospatial data rendering from drone flight paths",
      "Inspection report generation and export",
      "Multi-industry support: construction, oil & gas, civil infrastructure",
      "Role-based access for operators and admins",
      "Responsive, accessible UI across field devices",
    ],
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Computer Vision",
      "YOLO",
      "MongoDB",
      "Python",
    ],
    metrics: [
      { value: "100%", label: "Remote inspection coverage" },
      { value: "0", label: "Human exposure to hazardous zones" },
      { value: "Multi", label: "Industry verticals supported" },
      { value: "Real-time", label: "Defect detection insights" },
    ],
    highlight: "100% remote inspection · zero human risk",
  },
  {
    slug: "famiglia-doro",
    title: "Famiglia Doro",
    subtitle: "Social, Entertainment & Events Platform for Families",
    category: "Mobile / Web App",
    client: "Large Company · USA",
    role: "Lead Frontend Engineer",
    period: "2022 – 2023",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.vws.famigilatv&hl=en",
    image: "/projects/famiglia-d.jpg",
    cardGradient: "from-[#1a0a0a] via-[#1f0f08] to-[#160c0a]",
    cardAccent: "#fbbf24",
    overview:
      "Famiglia Doro is a comprehensive social and entertainment application designed for families and community groups — combining social networking, family-safe content, and real-world event integration in one platform.",
    problem:
      "Families and community groups had no single digital space combining social connection, family-safe content, entertainment, and real-world events. Existing platforms lacked child-safe sections, parental controls, or community event integration that families needed.",
    solution:
      "Led frontend development of a Flutter + Node.js platform integrating social features (posts, reactions, videos, stories) with a dedicated kids section, creator monetization via subscriptions and affiliate programs, and Ticketmaster event integration. Firebase handles real-time notifications; Stripe manages payments.",
    features: [
      "Social posting, reactions, videos, and stories",
      "Dedicated child-safe kids section with parental controls",
      "Live event discovery and ticketing via Ticketmaster API",
      "Creator subscription and affiliate monetization",
      "Real-time push notifications via Firebase",
      "Community groups and institution support",
      "Cross-platform: iOS and Android (Flutter)",
    ],
    tags: [
      "Flutter",
      "Node.js",
      "MongoDB",
      "AWS",
      "Firebase",
      "Stripe",
      "Ticketmaster API",
    ],
    metrics: [
      { value: "USA", label: "Adopted across schools & communities" },
      { value: "2", label: "Platforms (iOS & Android)" },
      { value: "Multiple", label: "Monetization streams" },
      { value: "Real-time", label: "Notifications via Firebase" },
    ],
    highlight: "Family-safe social platform · USA schools & communities",
  },
  {
    slug: "lead-crm",
    title: "Lead Management CRM",
    subtitle: "Securing and Scaling a 100,000+ Lead Pipeline",
    category: "Web App",
    client: "Confidential · Pakistan",
    role: "Lead Frontend Engineer",
    period: "2023 – 2024",
    image: "/projects/crm.jpg",
    cardGradient: "from-[#020d0d] via-[#051414] to-[#031010]",
    cardAccent: "#2dd4bf",
    overview:
      "A purpose-built CRM platform replacing spreadsheet-based lead tracking for a software services company managing 100,000+ sales leads — with role-based access control, immutable audit logs, and zero data-export vulnerabilities.",
    problem:
      "The organization faced major operational risks with a spreadsheet-dependent system: scattered data, missed follow-ups, zero accountability, and critical security gaps. Employees could freely export the entire lead database, putting years of accumulated leads at risk.",
    solution:
      "Led the frontend of a role-based access controlled CRM with five distinct user roles and tightly scoped permissions. Key design decision: deliberate exclusion of data export functionality as a security measure. Features include a unified lead dashboard with advanced filtering, immutable activity logging for full auditability, a controlled partner portal, and secure email-based onboarding via Postmark.",
    features: [
      "Five-tier role-based access control (admin, manager, agent, partner, viewer)",
      "CSV bulk import and manual lead creation",
      "Paginated lead views with status, source, assignee, and credibility filters",
      "Full-text search across 100,000+ records",
      "Immutable action log — every change is tracked and auditable",
      "Partner collaboration portal with read-only access",
      "Tokenized secure invitation system via Postmark",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "RBAC",
      "Postmark",
      "Tailwind CSS",
    ],
    metrics: [
      { value: "10×", label: "Lead conversion increase" },
      { value: "100K+", label: "Leads managed" },
      { value: "100%", label: "Data export vulnerabilities eliminated" },
      { value: "5", label: "Role tiers with scoped permissions" },
    ],
    highlight: "10× lead conversion · 100K+ leads secured",
  },
  {
    slug: "marz",
    title: "Marz",
    subtitle: "The Anonymous Social Network Where You Can Share with the World",
    category: "Mobile",
    client: "Large Company · USA",
    role: "Frontend Engineer",
    period: "2021",
    liveUrl: "https://apps.apple.com/us/app/marz/id1545435256",
    image: "/projects/marz-v1.jpg",
    cardGradient: "from-[#0d0520] via-[#110830] to-[#0a0418]",
    cardAccent: "#a78bfa",
    overview:
      "Marz is an anonymous social platform designed to eliminate the pressure and self-censorship inherent in identity-tied social media. With broadcast modes, community channels, and a quality-based engagement system, it lets users share authentically without fear of judgment.",
    problem:
      "Mainstream social platforms create pressure through identity linkage, follower counts, and public judgment. Users self-censor and perform rather than authentically connecting — leading to anxiety and superficial engagement.",
    solution:
      "Two broadcast modes: Public (anonymous posting across channels) and Private (subscriber-only content). A 'Fires' scoring system rewards quality engagement without vanity metrics. Community channels organize discussions by topic interest, giving every voice equal footing.",
    features: [
      "Anonymous posting and commenting — no identity linkage",
      "Public and Private broadcast modes",
      "Topic-based community channels for organized discussions",
      "Fires scoring system — quality-based engagement metric",
      "Daily summary notifications",
      "Real-time push notifications",
      "Cross-platform: iOS (App Store)",
    ],
    tags: [
      "React Native",
      "Node.js",
      "MySQL",
      "AWS ECS",
      "AWS S3",
      "AWS Cognito",
      "AWS Lambda",
      "Docker",
    ],
    metrics: [
      { value: "100%", label: "Anonymous by design" },
      { value: "2", label: "Broadcast modes" },
      { value: "Fires", label: "Quality-based engagement system" },
      { value: "iOS", label: "Live on App Store" },
    ],
    highlight: "Anonymous social · quality-first engagement",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
