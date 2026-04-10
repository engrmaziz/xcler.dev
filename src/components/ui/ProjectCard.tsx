"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  web: "var(--accent)",
  app: "var(--fire)",
  automation: "var(--accent)",
  ai: "var(--fire)",
  "ai-agents": "var(--fire)",
  wordpress: "var(--accent)",
  shopify: "var(--accent)",
};

function formatCategory(category: string) {
  return category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  const categoryColor = CATEGORY_COLORS[project.category] ?? "var(--accent)";
  const categoryLabel = formatCategory(project.category);
  const techStack = Array.isArray(project.techStack) ? project.techStack : [];

  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="View"
      className={cn(
        "group relative block cursor-pointer overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[var(--accent)]",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          featured ? "aspect-[16/9]" : "aspect-[4/3]"
        )}
      >
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
            className="object-cover transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--surface)]">
            <span
              className="mb-3 h-2 w-2 rounded-full"
              style={{ backgroundColor: categoryColor }}
            />
            <span className="font-display text-3xl text-[var(--muted)]">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded bg-[rgba(13,13,13,0.8)] px-3 py-1 text-xs font-mono text-[var(--muted)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.1)]">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: categoryColor }} />
        {categoryLabel}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(13,13,13,0.95)_0%,rgba(13,13,13,0.4)_50%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 z-10 px-7 pb-7 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="space-y-2">
          <h3 className="translate-y-5 font-display text-3xl text-[#EDEDED] opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 translate-y-4 opacity-0 transition-all duration-300 ease-out delay-[50ms] group-hover:translate-y-0 group-hover:opacity-100">
            {techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded border border-[rgba(255,255,255,0.2)] px-2 py-0.5 text-xs font-mono text-[rgba(255,255,255,0.7)]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="pt-2 font-mono text-sm text-[var(--accent)] translate-y-3 opacity-0 transition-all duration-300 ease-out delay-[100ms] group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2">
              View Project
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
