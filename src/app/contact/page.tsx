import type { Metadata } from "next";
import { ContactPageClient } from "@/app/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact XCLER — Start Your Project Today",
  description:
    "Get in touch with XCLER to discuss your web development, app, or automation project. Response within 24 hours. Starting from €150. WhatsApp or email us today.",
  alternates: {
    canonical: "https://xcler.dev/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does web development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "XCLER projects start from €150 for simple automation or landing pages. Full web applications start from €500. We provide exact quotes after understanding your requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple websites take 1-2 weeks. Web applications take 4-8 weeks. Automations take 3-7 days. We give exact timelines in our proposal.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with clients outside Europe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! While we specialize in European businesses, we work globally. We have served clients in 8+ countries.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageClient />
    </>
  );
}
