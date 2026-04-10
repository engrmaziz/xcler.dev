import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | XCLER",
  description: "XCLER terms of service — our agreement for digital services.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "800px", paddingTop: "160px", paddingBottom: "80px" }}
      >
        <h1 className="font-display text-5xl text-[#EDEDED] uppercase">
          Terms of Service
        </h1>
        <p className="font-mono text-xs text-[#888888] mt-3 mb-12">
          Last updated: January 2025
        </p>

        <Section title="Services">
          <p>
            XCLER provides digital services including web development, app
            development, workflow automation, and AI solutions.
          </p>
        </Section>

        <Section title="Payment Terms">
          <p>
            50% deposit required to begin work. 50% due on project completion.
            Payment via bank transfer or agreed method.
          </p>
        </Section>

        <Section title="Delivery">
          <p>
            Timelines are estimates provided in project proposals. We
            communicate proactively about any changes.
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p>
            Upon full payment, client owns all custom code and designs created
            for their project. XCLER retains the right to show work in portfolio
            unless agreed otherwise.
          </p>
        </Section>

        <Section title="Revisions">
          <p>
            Projects include revision rounds as specified in proposals.
            Additional revisions billed at hourly rate.
          </p>
        </Section>

        <Section title="Refunds">
          <p>
            Deposits are non-refundable once work has begun. We work to resolve
            any dissatisfaction before considering refunds.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            XCLER&apos;s liability is limited to the total amount paid for the
            specific project. We are not liable for indirect, incidental, or
            consequential damages arising from our services.
          </p>
        </Section>

        <Section title="Governing Law">
          <p>These terms are governed by applicable law.</p>
        </Section>

        <Section title="Contact">
          <p>
            <a
              href="mailto:hello@xcler.dev"
              className="text-[#E8FF00] hover:underline"
            >
              hello@xcler.dev
            </a>
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
