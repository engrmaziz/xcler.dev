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

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — Digital Agency`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.founder }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Digital Agency`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Digital Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Digital Agency`,
    description: SITE_CONFIG.description,
    creator: "@xclerdev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#0D0D0D] text-[#EDEDED]">
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
