import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | XCLER",
  description:
    "XCLER privacy policy — how we collect, use, and protect your personal data.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "800px", paddingTop: "160px", paddingBottom: "80px" }}
      >
        <h1 className="font-display text-5xl text-[#EDEDED] uppercase">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-[#888888] mt-3 mb-12">
          Last updated: January 2025
        </p>

        <Section title="Who We Are">
          <p>
            XCLER (xcler.dev) is a web development and automation agency.
            Contact:{" "}
            <a
              href="mailto:hello@xcler.dev"
              className="text-[#E8FF00] hover:underline"
            >
              hello@xcler.dev
            </a>
          </p>
        </Section>

        <Section title="What Data We Collect">
          <ul className="list-disc list-inside space-y-2">
            <li>Name and email when you contact us</li>
            <li>Project details you voluntarily share</li>
            <li>WhatsApp number if provided</li>
            <li>Usage data via analytics (anonymous)</li>
          </ul>
        </Section>

        <Section title="How We Use Your Data">
          <ul className="list-disc list-inside space-y-2">
            <li>To respond to project inquiries</li>
            <li>To send project proposals</li>
            <li>To improve our services</li>
            <li>We never sell your data</li>
          </ul>
        </Section>

        <Section title="Data Storage">
          <p>
            Data is stored securely using Supabase (EU Frankfurt servers) and
            Resend for email delivery. Both are GDPR compliant.
          </p>
        </Section>

        <Section title="Your Rights (GDPR)">
          <ul className="list-disc list-inside space-y-2">
            <li>Right to access your data</li>
            <li>Right to delete your data</li>
            <li>Right to correct your data</li>
            <li>
              Contact:{" "}
              <a
                href="mailto:hello@xcler.dev"
                className="text-[#E8FF00] hover:underline"
              >
                hello@xcler.dev
              </a>
            </li>
          </ul>
        </Section>

        <Section title="Cookies">
          <p>
            We use minimal cookies for theme preference only. No tracking
            cookies. No advertising cookies.
          </p>
        </Section>

        <Section title="Third Party Services">
          <ul className="list-disc list-inside space-y-2">
            <li>Supabase (database)</li>
            <li>Resend (email)</li>
            <li>Vercel (hosting)</li>
          </ul>
        </Section>

        <Section title="Contact">
          <p>
            <a
              href="mailto:hello@xcler.dev"
              className="text-[#E8FF00] hover:underline"
            >
              hello@xcler.dev
            </a>
            <br />
            xcler.dev
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-3xl text-[#EDEDED] uppercase mb-4">
        {title}
      </h2>
      <div className="font-sans text-base text-[#888888] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
