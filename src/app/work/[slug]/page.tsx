import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PROJECTS, SITE_CONFIG } from "@/lib/constants";
import { getSupabaseClient } from "@/lib/supabase";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getProject(slug: string): Promise<Project | undefined> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return PROJECTS.find((project) => project.slug === slug);
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error || !data) {
    return PROJECTS.find((project) => project.slug === slug);
  }

  return data as Project;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const imageUrl = project.imageUrl
    ? project.imageUrl.startsWith("http")
      ? project.imageUrl
      : `${SITE_CONFIG.url}${project.imageUrl}`
    : undefined;

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/work/${project.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.fullDescription,
    creator: {
      "@type": "Organization",
      name: "XCLER",
      url: SITE_CONFIG.url,
    },
    keywords: (project.techStack ?? []).join(", "),
    genre: project.category,
    url: project.liveUrl || `${SITE_CONFIG.url}/work/${slug}`,
  };

  const relatedProjects = PROJECTS.filter(
    (item) => item.category === project.category && item.slug !== project.slug
  ).slice(0, 2);

  const techStack = project.techStack ?? [];
  const results = project.results ?? [];
  const categoryLabel = project.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <PageWrapper>
      <div className="bg-[#0D0D0D]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="pt-32">
          <div className="container-wide">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-mono text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              <ArrowLeft size={16} />
              Back to Work
            </Link>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <span className="inline-flex items-center rounded border border-[var(--border)] px-3 py-1 text-xs font-mono uppercase tracking-wide text-[var(--muted)]">
                  {categoryLabel}
                </span>
                <h1 className="mt-4 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-[var(--text)]">
                  {project.title}
                </h1>
                <p className="mt-4 text-xl text-[var(--muted)]">
                  {project.shortDescription}
                </p>
                <div className="mt-6 inline-flex items-center rounded border border-[var(--border)] px-3 py-1 text-xs font-mono text-[var(--muted)]">
                  {project.clientIndustry}
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm font-mono">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--accent)]"
                    >
                      Live Site ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--accent)]"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7">
                  {[
                    ["Category", project.category],
                    ["Industry", project.clientIndustry],
                    ["Tech Stack", `${techStack.length} technologies`],
                    ["Status", project.liveUrl ? "Live" : "In Development"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-[var(--border)] py-3 last:border-b-0"
                    >
                      <span className="text-xs font-mono uppercase text-[var(--muted)]">
                        {label}
                      </span>
                      <span className="text-sm font-mono text-[var(--text)]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              {project.imageUrl ? (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/9] items-center justify-center">
                  <span className="font-display text-3xl text-[var(--muted)]">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-9">
                <div className="mb-4 text-xs font-mono uppercase text-[var(--accent)]">
                  The Challenge
                </div>
                <p className="text-base leading-relaxed text-[var(--muted)]">
                  {project.problem}
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-9">
                <div className="mb-4 text-xs font-mono uppercase text-[var(--text)]">
                  Our Solution
                </div>
                <p className="text-base leading-relaxed text-[var(--muted)]">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-[var(--accent)] p-12 text-[#0D0D0D]">
              <h2 className="font-display text-4xl">Results</h2>
              <ul className="mt-6 space-y-4">
                {results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-base">
                    <span className="mt-1 text-xl">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="mb-6 font-display text-3xl text-[var(--text)]">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-[var(--border)] px-4 py-2 text-sm font-mono text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {relatedProjects.length > 0 && (
              <div className="mt-12">
                <h3 className="mb-6 font-display text-3xl text-[var(--text)]">
                  More Projects
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {relatedProjects.map((item) => (
                    <ProjectCard key={item.slug} project={item} />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 border-t border-[var(--border)] pt-16 text-center">
              <p className="text-[var(--muted)]">Got a similar project in mind?</p>
              <h3 className="mt-4 font-display text-4xl text-[var(--text)]">
                Let&apos;s build yours.
              </h3>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-3 text-sm font-mono font-medium text-[#0D0D0D]"
                >
                  Start Your Project
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
