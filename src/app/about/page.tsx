import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEAM, SITE_CONFIG, STATS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "About XCLER — Web Development & Automation Team",
  description:
    "Meet the XCLER team — 3 specialists in web development, app development, workflow automation, and AI. Founded by Musharraf Aziz. Serving European businesses from €150.",
  alternates: {
    canonical: "https://xcler.dev/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About XCLER",
  url: "https://xcler.dev/about",
  description:
    "XCLER is a focused team of 3 specialists in web development, app development, workflow automation, and AI.",
  mainEntity: {
    "@type": "Organization",
    name: "XCLER",
    founder: {
      "@type": "Person",
      name: "Musharraf Aziz",
      jobTitle: "Founder & Automation Architect",
      worksFor: {
        "@type": "Organization",
        name: "XCLER",
      },
    },
    employee: [
      {
        "@type": "Person",
        name: "Abeel Mehr",
        jobTitle: "Lead Full-Stack Developer",
      },
      {
        "@type": "Person",
        name: "Mehru Seemab",
        jobTitle: "CMS & E-commerce Specialist",
      },
    ],
  },
};

const VALUES = [
  {
    number: "01",
    title: "Direct Communication",
    body: "No account managers. You talk directly to the person building your product. Always.",
  },
  {
    number: "02",
    title: "Fast Delivery",
    body: "We work in focused sprints. Most projects launch in 2-6 weeks, not months.",
  },
  {
    number: "03",
    title: "Long-term Thinking",
    body: "We build for your future, not just your deadline. Clean code, documented, maintainable.",
  },
];

const INDUSTRIES = [
  "Healthcare",
  "Restaurants",
  "E-commerce",
  "Dental",
  "Education",
  "FinTech",
  "Travel Tech",
  "Cybersecurity",
  "Real Estate",
  "SaaS",
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="bg-[#0D0D0D]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* SECTION 1 — Hero */}
        <section className="section-padding" style={{ paddingTop: "160px" }}>
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
              <div className="lg:w-1/2">
                <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
                  About Us
                </span>
                <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#EDEDED] uppercase mt-2 leading-[0.9]">
                  A small team.
                  <br />
                  <span className="text-[#888888]">Serious results.</span>
                </h1>
              </div>
              <div className="lg:w-1/2 mt-8 lg:mt-12">
                <p className="text-base text-[#888888] leading-relaxed">
                  XCLER was built on a simple idea — that small businesses and
                  startups deserve the same quality of digital work as enterprise
                  companies, without the enterprise price tag.
                </p>
                <p className="text-base text-[#888888] leading-relaxed mt-4">
                  We&apos;re a team of 3 specialists based in Pakistan, building
                  digital products and automations for businesses across Europe
                  and beyond.
                </p>
                <p className="text-base text-[#888888] leading-relaxed mt-4">
                  No bloated team. No account managers. No middlemen. Just the
                  people who actually build your product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Stats */}
        <section className="py-16 border-y border-[#222222]">
          <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
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

        {/* SECTION 3 — Team */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="mb-12">
              <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
                The People
              </span>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#EDEDED] uppercase mt-2">
                Who Builds It
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM.map((member) => (
                <div key={member.id} className="surface-card p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#222222] flex items-center justify-center mb-6">
                    <span className="font-display text-2xl text-[#E8FF00]">
                      {member.name[0]}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-[#EDEDED] uppercase">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-[#E8FF00] uppercase tracking-wide mt-1 mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#888888] leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="muted">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — Values */}
        <section className="section-padding border-t border-[#222222]">
          <div className="container-wide">
            <h2 className="font-display text-4xl text-[#EDEDED] uppercase mb-10">
              How we work.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VALUES.map((v) => (
                <div
                  key={v.number}
                  className="border border-[#222222] rounded-xl p-8 transition-colors duration-200 hover:border-[#E8FF00] bg-[#141414]"
                >
                  <p className="font-mono text-xs text-[#E8FF00] mb-4">
                    {v.number}
                  </p>
                  <h3 className="font-display text-2xl text-[#EDEDED] uppercase">
                    {v.title}
                  </h3>
                  <p className="font-sans text-sm text-[#888888] leading-relaxed mt-2">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Industries */}
        <section className="section-padding border-t border-[#222222]">
          <div className="container-wide">
            <p className="font-mono text-xs text-[#888888] uppercase tracking-[0.3em] mb-6">
              Industries we&apos;ve worked in.
            </p>
            <div className="flex flex-wrap gap-3">
              {INDUSTRIES.map((industry) => (
                <span
                  key={industry}
                  className="border border-[#222222] text-[#888888] font-sans text-sm px-5 py-2.5 rounded-md transition-colors duration-200 hover:border-[#E8FF00] hover:text-[#EDEDED] cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — CTA */}
        <section className="section-padding border-t border-[#222222]">
          <div className="container-wide text-center">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#EDEDED] uppercase mb-6">
              Ready to work together?
            </h2>
            <p className="text-base text-[#888888] mb-8">
              Let&apos;s build something great. Starting from €150.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C8DC00] transition-colors"
            >
              Start a Project
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
