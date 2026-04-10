import type { Service } from "@/types";

export const SITE_CONFIG = {
  name: "XCLER",
  domain: "xcler.dev",
  url: "https://xcler.dev",
  email: "hello@xcler.dev",
  whatsapp: "+923154823517",
  whatsappDisplay: "+92 315 482 3517",
  facebook: "https://facebook.com/xclerdev",
  instagram: "https://instagram.com/xclerdev",
  description:
    "XCLER is a full-service digital agency specializing in web development, app development, workflow automation, and AI-powered solutions. Starting from $150.",
  descriptionDe:
    "XCLER ist eine Full-Service-Digitalagentur spezialisiert auf Webentwicklung, App-Entwicklung, Workflow-Automatisierung und KI-Lösungen. Ab $150.",
  keywords: [
    "web development agency",
    "app development",
    "workflow automation",
    "AI chatbot",
    "RAG agent",
    "WordPress agency",
    "Shopify development",
    "n8n automation",
    "Make.com automation",
    "GoHighLevel",
    "Webentwicklung Agentur",
    "App Entwicklung",
    "Workflow Automatisierung",
    "KI Chatbot",
    "WordPress Agentur Deutschland",
    "Shopify Agentur",
    "günstige Webentwicklung",
    "call agent AI",
    "Next.js development",
    "Python development",
    "full stack development",
    "affordable web agency Europe",
    "web agency Germany",
    "digitalagentur",
  ],
  founder: "Musharraf Aziz",
  established: "2021",
  projectsCompleted: "50+",
  clientsSatisfied: "40+",
  countriesServed: "8+",
};

export const NAV_LINKS = [
  { label: "Work", labelDe: "Projekte", href: "/work" },
  { label: "Services", labelDe: "Leistungen", href: "/services" },
  { label: "About", labelDe: "Über uns", href: "/about" },
  { label: "Blog", labelDe: "Blog", href: "/blog" },
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development",
    titleDe: "Webentwicklung",
    description:
      "Custom web applications and platforms built for speed, scale, and conversions. No templates. No shortcuts. Your business deserves better.",
    descriptionDe:
      "Maßgeschneiderte Webanwendungen und Plattformen für Geschwindigkeit, Skalierung und Conversions.",
    features: [
      "Custom SaaS platforms",
      "E-commerce solutions",
      "Web applications",
      "API development",
      "Performance optimization",
      "Progressive Web Apps",
    ],
    accent: "#E8FF00",
    icon: "Monitor",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript"],
    startingPrice: 500,
  },
  {
    id: "app-dev",
    number: "02",
    title: "App Development",
    titleDe: "App-Entwicklung",
    description:
      "Mobile apps that feel native, perform flawlessly, and ship on time. iOS, Android, or both — we build for real users.",
    descriptionDe:
      "Mobile Apps, die sich nativ anfühlen, einwandfrei funktionieren und pünktlich geliefert werden.",
    features: [
      "React Native apps",
      "Cross-platform development",
      "Backend integration",
      "App Store deployment",
      "Push notifications",
      "Offline functionality",
    ],
    accent: "#FF3D00",
    icon: "Smartphone",
    tags: ["React Native", "Expo", "Flutter", "iOS", "Android"],
    startingPrice: 800,
  },
  {
    id: "automation",
    number: "03",
    title: "Workflow Automation",
    titleDe: "Workflow-Automatisierung",
    description:
      "Stop paying humans to do what software can. We build automations that run 24/7, make zero mistakes, and scale infinitely.",
    descriptionDe:
      "Hören Sie auf, Menschen für das zu bezahlen, was Software kann. Wir bauen Automatisierungen die rund um die Uhr laufen.",
    features: [
      "n8n & Make.com workflows",
      "CRM automation",
      "Lead nurturing pipelines",
      "Invoice automation",
      "Multi-system integrations",
      "GoHighLevel setups",
    ],
    accent: "#E8FF00",
    icon: "Zap",
    tags: ["n8n", "Make.com", "Zapier", "GoHighLevel", "APIs"],
    startingPrice: 300,
  },
  {
    id: "ai-agents",
    number: "04",
    title: "AI Agents & Chatbots",
    titleDe: "KI-Agenten & Chatbots",
    description:
      "Intelligent agents that handle customer support, qualify leads, book appointments, and work while you sleep. Not science fiction — we ship these.",
    descriptionDe:
      "Intelligente Agenten für Kundensupport, Lead-Qualifizierung, Terminbuchung — rund um die Uhr.",
    features: [
      "RAG AI agents",
      "AI call agents",
      "Customer support bots",
      "Lead qualification bots",
      "Multi-language chatbots",
      "Voice AI agents",
    ],
    accent: "#FF3D00",
    icon: "Bot",
    tags: ["OpenAI", "RAG", "LangChain", "Voice AI", "Python"],
    startingPrice: 400,
  },
  {
    id: "wordpress",
    number: "05",
    title: "WordPress & CMS",
    titleDe: "WordPress & CMS",
    description:
      "Fast, secure, beautifully designed WordPress sites that rank on Google and convert visitors into customers. No page builder garbage.",
    descriptionDe:
      "Schnelle, sichere, wunderschön gestaltete WordPress-Sites, die bei Google ranken und Besucher in Kunden umwandeln.",
    features: [
      "Custom WordPress themes",
      "WooCommerce stores",
      "Performance optimization",
      "SEO setup",
      "Security hardening",
      "Maintenance packages",
    ],
    accent: "#E8FF00",
    icon: "Globe",
    tags: ["WordPress", "WooCommerce", "PHP", "ACF", "Elementor"],
    startingPrice: 150,
  },
  {
    id: "shopify",
    number: "06",
    title: "Shopify Development",
    titleDe: "Shopify-Entwicklung",
    description:
      "Shopify stores engineered for maximum revenue. Custom themes, conversion optimization, and integrations that make your store a sales machine.",
    descriptionDe:
      "Shopify-Stores für maximalen Umsatz. Individuelle Themes, Conversion-Optimierung und Integrationen.",
    features: [
      "Custom Shopify themes",
      "Store migration",
      "App integrations",
      "Conversion optimization",
      "Multi-currency setup",
      "Subscription products",
    ],
    accent: "#FF3D00",
    icon: "ShoppingBag",
    tags: ["Shopify", "Liquid", "JavaScript", "Shopify Plus"],
    startingPrice: 300,
  },
];

export const TEAM = [
  {
    id: "musharraf",
    name: "Musharraf Aziz",
    role: "Founder & Automation Architect",
    bio: "Musharraf leads XCLER with a sharp focus on workflow automation and AI-powered systems. He designs the intelligent infrastructure that saves clients hundreds of hours every month.",
    skills: [
      "n8n",
      "Make.com",
      "GoHighLevel",
      "AI Agents",
      "RAG",
      "Zapier",
      "Call Agents",
      "ChatBots",
    ],
    order: 1,
  },
  {
    id: "abeel",
    name: "Abeel Mehr",
    role: "Lead Full-Stack Developer",
    bio: "Abeel architects and ships full-stack applications with precision. From Next.js frontends to Python APIs, she builds the technical backbone of every product we deliver.",
    skills: [
      "Next.js",
      "Python",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "CI/CD",
      "Docker",
      "TypeScript",
    ],
    order: 2,
  },
  {
    id: "mehru",
    name: "Mehru Seemab",
    role: "CMS & E-commerce Specialist",
    bio: "Mehru transforms businesses online through powerful WordPress and Shopify builds. She combines deep CMS expertise with frontend precision to create stores that actually sell.",
    skills: [
      "WordPress",
      "Shopify",
      "WooCommerce",
      "PHP",
      "Liquid",
      "Elementor",
      "ACF",
      "SEO",
    ],
    order: 3,
  },
];

export const STATS = [
  { value: "50+", label: "Projects Delivered", labelDe: "Projekte geliefert" },
  { value: "$150", label: "Starting Price", labelDe: "Ab Preis" },
  {
    value: "3yrs",
    label: "Industry Experience",
    labelDe: "Branchenerfahrung",
  },
  { value: "8+", label: "Countries Served", labelDe: "Länder bedient" },
];

export const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "Flask",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "React Native",
  "Expo",
  "WordPress",
  "Shopify",
  "WooCommerce",
  "n8n",
  "Make.com",
  "Zapier",
  "GoHighLevel",
  "OpenAI",
  "LangChain",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Vercel",
  "Git",
  "Figma",
  "Stripe",
  "REST APIs",
  "GraphQL",
];

export const BUDGET_OPTIONS = [
  { value: "150-500", label: "€150 – €500", labelDe: "€150 – €500" },
  { value: "500-1500", label: "€500 – €1,500", labelDe: "€500 – €1.500" },
  {
    value: "1500-5000",
    label: "€1,500 – €5,000",
    labelDe: "€1.500 – €5.000",
  },
  {
    value: "5000-10000",
    label: "€5,000 – €10,000",
    labelDe: "€5.000 – €10.000",
  },
  { value: "10000+", label: "€10,000+", labelDe: "€10.000+" },
];

export const SERVICE_OPTIONS = [
  { value: "web", label: "Web Development" },
  { value: "app", label: "App Development" },
  { value: "automation", label: "Workflow Automation" },
  { value: "ai-agents", label: "AI Agents & Chatbots" },
  { value: "wordpress", label: "WordPress / CMS" },
  { value: "shopify", label: "Shopify Development" },
  { value: "other", label: "Something else" },
];

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "ASAP — Let's move fast" },
  { value: "2-4weeks", label: "2–4 weeks" },
  { value: "1-3months", label: "1–3 months" },
  { value: "flexible", label: "Flexible — quality over speed" },
];

export const PROJECTS = [
  {
    id: "green-navigator",
    title: "GreenNavigator",
    slug: "green-navigator",
    category: "web" as const,
    shortDescription:
      "B2B SaaS for localized carbon reporting with AI-powered OCR",
    fullDescription:
      "A premium B2B SaaS platform for localized carbon reporting that utilizes Gemini 1.5 Flash OCR to transform unstructured utility bills into audit-ready environmental intelligence.",
    problem:
      "Businesses needed a streamlined way to track and report carbon emissions from utility bills, but existing solutions were expensive and complex.",
    solution:
      "Built a full-stack SaaS with AI OCR that automatically extracts data from utility bills and generates compliance-ready carbon reports.",
    results: [
      "90% reduction in manual data entry time",
      "Automated compliance reporting",
      "Real-time carbon footprint dashboard",
    ],
    techStack: ["Next.js", "Python", "Gemini AI", "PostgreSQL", "Tailwind CSS"],
    clientIndustry: "Environmental Tech / SaaS",
    featured: true,
    order: 1,
    imageUrl: "/projects/green-navigator.jpg",
    images: [],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "aegisflow",
    title: "AegisFlow",
    slug: "aegisflow",
    category: "web" as const,
    shortDescription:
      "Enterprise financial SaaS with LSTM neural networks for liquidity forecasting",
    fullDescription:
      "An enterprise-grade financial SaaS integrating LSTM neural networks and GANs to provide predictive liquidity forecasting and AI-driven risk management for the Pakistani market.",
    problem:
      "Pakistani financial institutions lacked accessible AI-powered tools for predicting liquidity crises before they occurred.",
    solution:
      "Developed an enterprise platform using machine learning models to forecast cash flow patterns and flag risk indicators in real-time.",
    results: [
      "Predictive accuracy of 87%",
      "Real-time risk dashboard",
      "Automated regulatory reporting",
    ],
    techStack: ["Next.js", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    clientIndustry: "FinTech / SaaS",
    featured: true,
    order: 2,
    imageUrl: "/projects/aegisflow.jpg",
    images: [],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "visa-path",
    title: "VisaPath",
    slug: "visa-path",
    category: "web" as const,
    shortDescription:
      "B2C SaaS for digital nomads to optimize visa strategies and travel routes",
    fullDescription:
      "A modern B2C SaaS platform that allows digital nomads, frequent travelers, and expats to optimize their visa strategies by calculating global access maps and AI-optimized travel routes.",
    problem:
      "Digital nomads waste enormous time manually researching visa requirements and optimizing travel routes across multiple countries.",
    solution:
      "Built an intelligent platform that maps global visa access based on passport, suggests optimized travel routes, and provides real-time visa requirement data.",
    results: [
      "Covers 195+ countries",
      "AI route optimization",
      "Real-time visa data",
    ],
    techStack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Redis"],
    clientIndustry: "Travel / SaaS",
    featured: true,
    order: 3,
    imageUrl: "/projects/visa-path.jpg",
    images: [],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
];
