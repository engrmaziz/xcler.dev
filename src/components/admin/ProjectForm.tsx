"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Project } from "@/types";

const schema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  category: z.enum(["web", "app", "automation", "wordpress", "shopify", "ai"]),
  shortDescription: z.string().min(1),
  fullDescription: z.string().min(1),
  problem: z.string().min(1),
  solution: z.string().min(1),
  clientIndustry: z.string().min(1),
  featured: z.boolean(),
  order: z.number(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  project?: Partial<Project>;
  onSubmit: (data: FormData) => void;
}

export function ProjectForm({ project, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: project?.title ?? "",
      slug: project?.slug ?? "",
      category: project?.category ?? "web",
      shortDescription: project?.shortDescription ?? "",
      fullDescription: project?.fullDescription ?? "",
      problem: project?.problem ?? "",
      solution: project?.solution ?? "",
      clientIndustry: project?.clientIndustry ?? "",
      featured: project?.featured ?? false,
      order: project?.order ?? 0,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-[#888888] mb-1">Title</label>
          <input
            {...register("title")}
            className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2 text-[#EDEDED] text-sm focus:outline-none focus:border-[#E8FF00]/50"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-[#888888] mb-1">Slug</label>
          <input
            {...register("slug")}
            className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2 text-[#EDEDED] text-sm focus:outline-none focus:border-[#E8FF00]/50"
          />
        </div>
      </div>
      <button
        type="submit"
        className="px-6 py-2.5 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-lg text-sm hover:bg-[#C8DC00] transition-colors"
      >
        Save Project
      </button>
    </form>
  );
}
