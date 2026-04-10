import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore XCLER's portfolio of web, app, automation, and AI projects built for European businesses.",
};

export default function WorkPage() {
  return (
    <PageWrapper>
      <div className="pt-32 section-padding bg-[#0D0D0D]">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
              Portfolio
            </span>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#EDEDED] uppercase mt-2">
              Selected Work
            </h1>
            <p className="text-[#888888] max-w-xl mt-4 leading-relaxed">
              {PROJECTS.length}+ projects delivered. Every one of them built with precision and intent.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="group surface-card overflow-hidden hover:border-[#333333] transition-colors duration-300"
              >
                {/* Image placeholder */}
                <div className="relative h-52 bg-[#222222] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl text-[#333333]">
                      {project.title[0]}
                    </span>
                  </div>
                  <Link
                    href={`/work/${project.slug}`}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#E8FF00] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <ArrowUpRight size={14} className="text-[#0D0D0D]" />
                  </Link>
                </div>

                {/* Content */}
                <div className="p-6">
                  <Badge variant="acid" className="mb-3">
                    {project.category}
                  </Badge>
                  <h2 className="font-display text-xl text-[#EDEDED] uppercase mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#888888] leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
