"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/types";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "App", value: "app" },
  { label: "Automation", value: "automation" },
  { label: "AI", value: "ai" },
  { label: "WordPress", value: "wordpress" },
  { label: "Shopify", value: "shopify" },
];

function matchesFilter(project: Project, value: string) {
  if (value === "all") return true;
  const category = project.category.toLowerCase();
  if (value === "ai") return category === "ai" || category === "ai-agents";
  return category === value;
}

function getLayoutType(index: number) {
  const pattern = ["large", "small", "small", "large", "equal", "equal", "equal"] as const;
  return pattern[index % pattern.length];
}

export function WorkFilter({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [projects, activeFilter]
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "rounded border px-5 py-2 text-xs font-mono transition-colors",
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[#0D0D0D]"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const layoutType = getLayoutType(index);
            const isFeatured = layoutType === "large";
            const colSpan = isFeatured ? "lg:col-span-3" : "lg:col-span-2";

            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={colSpan}
              >
                <ProjectCard project={project} featured={isFeatured} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
