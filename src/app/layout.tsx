import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/ui/Cursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SITE_CONFIG } from "@/lib/constants";

const OG_TITLE = `${SITE_CONFIG.name} — Web Development & Automation Agency`;
const OG_DESCRIPTION = SITE_CONFIG.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Web Development & Automation Agency | Germany`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: OG_DESCRIPTION,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.founder }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "add_later",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      en: SITE_CONFIG.url,
      de: `${SITE_CONFIG.url}/de`,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  email: SITE_CONFIG.email,
  foundingDate: SITE_CONFIG.established,
  description: OG_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE_CONFIG.email,
    contactType: "customer service",
    availableLanguage: ["English", "German"],
  },
  sameAs: [SITE_CONFIG.facebook, SITE_CONFIG.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#0D0D0D] text-[#EDEDED]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#141414",
              color: "#EDEDED",
              border: "1px solid #222222",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
