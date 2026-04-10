import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import { getSupabaseClient } from "@/lib/supabase";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { WorkFilter } from "@/components/work/WorkFilter";
import type { Project } from "@/types";

export const metadata: Metadata = {
  title: "Our Work — Web & App Development Portfolio | XCLER",
  description:
    "Browse XCLER portfolio of web apps, mobile apps, WordPress sites, Shopify stores, and automation projects built for businesses across Europe and beyond.",
  alternates: {
    canonical: "https://xcler.dev/work",
  },
};

async function getProjects(): Promise<Project[]> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return PROJECTS;
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .order("order", { ascending: true });

  if (error || !data || data.length === 0) {
    return PROJECTS;
  }

  return data as Project[];
}

export default async function WorkPage() {
  const projects = await getProjects();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "XCLER Portfolio",
    description: "Web development and automation projects by XCLER",
    url: "https://xcler.dev/work",
    provider: {
      "@type": "Organization",
      name: "XCLER",
      url: "https://xcler.dev",
    },
  };

  return (
    <PageWrapper>
      <div className="bg-[#0D0D0D]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="pt-40 pb-20">
          <div className="container-wide">
            <div className="mb-12 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E8FF00]">
                Our Work
              </span>
              <h1 className="mt-4 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] text-[#EDEDED]">
                Work that speaks
                <br />
                <span className="text-[var(--muted)]">for itself.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-[var(--muted)]">
                Selected projects across web development, app development,
                automation, and AI.
              </p>
            </div>

            <WorkFilter projects={projects} />
          </div>
        </section>

        <section className="pb-24">
          <div className="container-wide">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-8 py-12 text-center">
              <p className="text-lg text-[var(--muted)]">Have a project in mind?</p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-3 text-sm font-mono font-medium text-[#0D0D0D] transition-colors hover:bg-[#C8DC00]"
                >
                  Start Your Project →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
