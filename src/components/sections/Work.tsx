"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#141414]">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
              Portfolio
            </span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#EDEDED] uppercase mt-2">
              Selected Work
            </h2>
          </div>
          <Link
            href="/work"
            className="group flex items-center gap-2 text-sm text-[#888888] hover:text-[#E8FF00] transition-colors"
          >
            View all projects
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.filter((p) => p.featured).map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group surface-card overflow-hidden hover:border-[#333333] transition-colors duration-300"
            >
              {/* Image placeholder */}
              <div className="relative h-52 bg-[#222222] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl text-[#333333]">
                    {project.title[0]}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                <h3 className="font-display text-xl text-[#EDEDED] uppercase mb-2">
                  {project.title}
                </h3>
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
