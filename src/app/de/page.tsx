import type { Metadata } from "next";
import Link from "next/link";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Webentwicklung & Automatisierung Agentur | XCLER — Ab €150",
  description:
    "XCLER bietet professionelle Webentwicklung, App-Entwicklung und Workflow-Automatisierung für Unternehmen in Deutschland, Österreich und der Schweiz. Antwort innerhalb von 24 Stunden. Ab €150.",
  alternates: {
    canonical: "https://xcler.dev/de",
    languages: {
      de: "https://xcler.dev/de",
      en: "https://xcler.dev",
    },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "XCLER",
  url: "https://xcler.dev",
  email: "hello@xcler.dev",
  inLanguage: "de",
  serviceArea: {
    "@type": "Country",
    name: "Germany",
    alternateName: "Deutschland",
  },
};

const localBizJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "XCLER",
  description: "Webentwicklung und Automatisierung Agentur",
  url: "https://xcler.dev",
  email: "hello@xcler.dev",
  telephone: "+923154823517",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Bank Transfer",
  areaServed: ["Deutschland", "Österreich", "Schweiz"],
  hasMap: "https://xcler.dev/de",
  openingHours: "Mo-Sa 09:00-21:00",
  serviceType: [
    "Webentwicklung",
    "App-Entwicklung",
    "Workflow-Automatisierung",
    "KI-Chatbot-Entwicklung",
    "WordPress-Entwicklung",
    "Shopify-Entwicklung",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "de",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine Website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unsere Projekte beginnen ab €150 für einfache Automatisierungen oder Landing Pages. Vollständige Webanwendungen beginnen ab €500. Wir erstellen ein genaues Angebot nach Ihren Anforderungen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert ein Projekt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Einfache Websites: 1-2 Wochen. Webanwendungen: 4-8 Wochen. Automatisierungen: 3-7 Tage. Wir geben Ihnen einen genauen Zeitplan in unserem Angebot.",
      },
    },
    {
      "@type": "Question",
      name: "Arbeiten Sie mit deutschen Unternehmen zusammen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja! Wir sind spezialisiert auf europäische Unternehmen, insbesondere in Deutschland, Österreich und der Schweiz. Wir kommunizieren auf Englisch und können grundlegende Kommunikation auf Deutsch führen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie kann ich Sie kontaktieren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sie erreichen uns per E-Mail unter hello@xcler.dev oder über WhatsApp unter +92 315 482 3517. Wir antworten innerhalb von 24 Stunden.",
      },
    },
  ],
};

const DE_SERVICES = [
  {
    number: "01",
    title: "Webentwicklung",
    description:
      "Maßgeschneiderte Webanwendungen mit Next.js, React und Python APIs. Schnell, skalierbar und auf Conversions ausgelegt.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    number: "02",
    title: "App-Entwicklung",
    description:
      "Cross-Platform Mobile Apps für iOS und Android. Einmal entwickelt, überall verfügbar.",
    tags: ["React Native", "Expo", "Flutter"],
  },
  {
    number: "03",
    title: "Workflow-Automatisierung",
    description:
      "Wir automatisieren Ihre manuellen Prozesse mit n8n, Make.com und Zapier. Sparen Sie 20+ Stunden pro Woche.",
    tags: ["n8n", "Make.com", "Zapier", "GoHighLevel"],
  },
  {
    number: "04",
    title: "KI-Agenten & Chatbots",
    description:
      "Intelligente KI-Systeme für Kundensupport, Lead-Qualifizierung und automatisierte Geschäftsprozesse.",
    tags: ["OpenAI", "RAG", "LangChain", "Voice AI"],
  },
  {
    number: "05",
    title: "WordPress & CMS",
    description:
      "Schnelle, sichere WordPress-Websites die bei Google ranken und Besucher in Kunden verwandeln.",
    tags: ["WordPress", "WooCommerce", "PHP"],
  },
  {
    number: "06",
    title: "Shopify-Entwicklung",
    description:
      "Shopify-Stores für maximalen Umsatz. Custom Themes, Conversion-Optimierung und nahtlose Integrationen.",
    tags: ["Shopify", "Liquid", "JavaScript"],
  },
];

const DE_STATS = [
  { value: "50+", label: "Projekte geliefert" },
  { value: "€150", label: "Ab Preis" },
  { value: "3", label: "Experten" },
  { value: "24h", label: "Antwortzeit" },
];

const DE_REASONS = [
  {
    title: "Direkte Kommunikation",
    body: "Kein Account Manager. Sie sprechen direkt mit dem Entwickler, der Ihr Projekt umsetzt.",
  },
  {
    title: "Schnelle Lieferung",
    body: "Die meisten Projekte werden in 2-6 Wochen geliefert, nicht in Monaten. Wir arbeiten in fokussierten Sprints.",
  },
  {
    title: "Faire Preise",
    body: "Unternehmensqualität zum fairen Preis. Unsere Projekte beginnen ab €150. Transparente Preisgestaltung immer.",
  },
];

const DE_FAQS = [
  {
    q: "Was kostet eine Website?",
    a: "Unsere Projekte beginnen ab €150 für einfache Automatisierungen oder Landing Pages. Vollständige Webanwendungen beginnen ab €500. Wir erstellen ein genaues Angebot nach Ihren Anforderungen.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "Einfache Websites: 1-2 Wochen. Webanwendungen: 4-8 Wochen. Automatisierungen: 3-7 Tage. Wir geben Ihnen einen genauen Zeitplan in unserem Angebot.",
  },
  {
    q: "Arbeiten Sie mit deutschen Unternehmen zusammen?",
    a: "Ja! Wir sind spezialisiert auf europäische Unternehmen, insbesondere in Deutschland, Österreich und der Schweiz. Wir kommunizieren auf Englisch und können grundlegende Kommunikation auf Deutsch führen.",
  },
  {
    q: "Wie kann ich Sie kontaktieren?",
    a: "Sie erreichen uns per E-Mail unter hello@xcler.dev oder über WhatsApp unter +92 315 482 3517. Wir antworten innerhalb von 24 Stunden.",
  },
];

export default function GermanPage() {
  return (
    <PageWrapper>
      <div className="bg-[#0D0D0D]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* HERO */}
        <section className="section-padding" style={{ paddingTop: "160px" }}>
          <div className="container-wide">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 border border-[#222222] rounded-full px-4 py-2 font-mono text-xs text-[#888888]">
                🇩🇪 Für deutsche Unternehmen · Ab €150 · Antwort in 24h
              </span>
            </div>

            <h1 className="font-display text-[clamp(3rem,10vw,8rem)] text-[#EDEDED] uppercase leading-[0.9] mb-8">
              WIR BAUEN.
              <br />
              WIR AUTOMATISIEREN.
              <br />
              <span className="text-[#E8FF00]">SIE WACHSEN.</span>
            </h1>

            <p className="text-base text-[#888888] max-w-2xl leading-relaxed mb-10">
              Professionelle Webentwicklung, App-Entwicklung und intelligente
              Workflow-Automatisierung für Unternehmen in Deutschland, Österreich
              und der Schweiz.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3 bg-[#E8FF00] text-[#0D0D0D] font-mono text-sm rounded-md hover:bg-[#C8DC00] transition-colors"
              >
                Projekt starten →
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center px-7 py-3 border border-[#222222] text-[#888888] font-mono text-sm rounded-md hover:border-[#E8FF00] hover:text-[#EDEDED] transition-colors"
              >
                Unsere Arbeiten ↗
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 border-y border-[#222222]">
          <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8">
            {DE_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-5xl text-[#E8FF00]">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-[#888888] uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="mb-12">
              <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
                Was wir machen
              </span>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#EDEDED] uppercase mt-2">
                Unsere Leistungen.
              </h2>
            </div>

            <div className="divide-y divide-[#222222]">
              {DE_SERVICES.map((service) => (
                <div
                  key={service.number}
                  className="py-8 flex flex-col md:flex-row md:items-start gap-6 group"
                >
                  <span className="font-mono text-xs text-[#E8FF00] md:w-12 shrink-0 pt-1">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-[#EDEDED] uppercase group-hover:text-[#E8FF00] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#888888] leading-relaxed mt-2 max-w-2xl">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#222222] text-[#888888] font-mono text-xs px-3 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY XCLER */}
        <section className="section-padding border-t border-[#222222]">
          <div className="container-wide">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#EDEDED] uppercase mb-10">
              Warum XCLER?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DE_REASONS.map((r) => (
                <div
                  key={r.title}
                  className="border border-[#222222] rounded-xl p-8 bg-[#141414] hover:border-[#E8FF00] transition-colors duration-200"
                >
                  <h3 className="font-display text-2xl text-[#EDEDED] uppercase mb-3">
                    {r.title}
                  </h3>
                  <p className="font-sans text-sm text-[#888888] leading-relaxed">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding border-t border-[#222222]">
          <div className="container-wide">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#EDEDED] uppercase mb-10">
              Häufige Fragen
            </h2>
            <div className="divide-y divide-[#222222] max-w-3xl">
              {DE_FAQS.map((faq) => (
                <div key={faq.q} className="py-8">
                  <h3 className="font-display text-xl text-[#EDEDED] uppercase mb-3">
                    {faq.q}
                  </h3>
                  <p className="font-sans text-base text-[#888888] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding border-t border-[#222222]">
          <div className="container-wide text-center">
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#EDEDED] uppercase leading-[0.9] mb-8">
              BEREIT LOS
              <br />
              ZU LEGEN?
              <br />
              <span className="text-[#E8FF00]">ETWAS GROSSES BAUEN?</span>
            </h2>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#E8FF00] text-[#0D0D0D] font-mono text-sm rounded-md hover:bg-[#C8DC00] transition-colors mb-10"
            >
              Projekt starten →
            </Link>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#888888]">
              <a
                href="mailto:hello@xcler.dev"
                className="hover:text-[#E8FF00] transition-colors"
              >
                📧 hello@xcler.dev
              </a>
              <a
                href="https://wa.me/923154823517"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8FF00] transition-colors"
              >
                💬 WhatsApp: +92 315 482 3517
              </a>
            </div>

            <p className="mt-8 font-mono text-xs text-[#888888]">
              Wir bedienen Unternehmen in ganz Europa.
              <br />
              Antwort garantiert innerhalb von 24 Stunden.
            </p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
