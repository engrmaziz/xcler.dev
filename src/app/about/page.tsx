import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEAM, SITE_CONFIG, STATS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the XCLER team — 3 specialists building world-class digital products for European businesses.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="bg-[#0D0D0D]">
        {/* Hero */}
        <section className="pt-32 section-padding">
          <div className="container-wide">
            <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
              About XCLER
            </span>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#EDEDED] uppercase mt-2 mb-8 leading-[0.9]">
              Three People.
              <br />
              <span className="text-[#E8FF00]">Zero Compromise.</span>
            </h1>
            <p className="text-lg text-[#888888] max-w-2xl leading-relaxed">
              XCLER was founded in {SITE_CONFIG.established} by {SITE_CONFIG.founder}.
              We&apos;re a focused team of three, built for precision and speed — not headcount.
              Every project gets our full attention.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-y border-[#222222]">
          <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-5xl text-[#E8FF00]">{stat.value}</div>
                <div className="text-xs font-mono text-[#888888] uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
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
                      <Badge key={skill} variant="muted">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding border-t border-[#222222]">
          <div className="container-wide text-center">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#EDEDED] uppercase mb-6">
              Ready to Work Together?
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C8DC00] transition-colors"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
