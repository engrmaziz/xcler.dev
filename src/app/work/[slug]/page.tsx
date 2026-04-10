import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { PageWrapper } from "@/components/layout/PageWrapper";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <PageWrapper>
      <div className="pt-32 section-padding bg-[#0D0D0D]">
        <div className="container-wide max-w-4xl">
          {/* Back */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#EDEDED] transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>

          {/* Header */}
          <Badge variant="acid" className="mb-4">
            {project.category}
          </Badge>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] text-[#EDEDED] uppercase leading-[0.9] mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-[#888888] max-w-2xl leading-relaxed mb-12">
            {project.fullDescription}
          </p>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pt-8 border-t border-[#222222]">
            <div>
              <h3 className="text-xs font-mono text-[#888888] uppercase tracking-widest mb-3">
                Industry
              </h3>
              <p className="text-[#EDEDED]">{project.clientIndustry}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono text-[#888888] uppercase tracking-widest mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1">
                {project.techStack.map((t) => (
                  <Badge key={t} variant="muted">{t}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-mono text-[#888888] uppercase tracking-widest mb-3">
                Results
              </h3>
              <ul className="space-y-1">
                {project.results.map((r) => (
                  <li key={r} className="text-sm text-[#888888] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#E8FF00] flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Problem / Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="surface-card p-8">
              <h3 className="font-display text-xl text-[#EDEDED] uppercase mb-4">The Problem</h3>
              <p className="text-sm text-[#888888] leading-relaxed">{project.problem}</p>
            </div>
            <div className="surface-card p-8">
              <h3 className="font-display text-xl text-[#E8FF00] uppercase mb-4">Our Solution</h3>
              <p className="text-sm text-[#888888] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-[#222222] text-center">
            <p className="text-[#888888] mb-6">Want something like this?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C8DC00] transition-colors"
            >
              Start a Project
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
