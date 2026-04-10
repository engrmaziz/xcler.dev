"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { BlogPost } from "@/types";

const schema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  category: z.string().min(1),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  published: z.boolean(),
  language: z.enum(["en", "de"]),
});

type FormData = z.infer<typeof schema>;

interface Props {
  post?: Partial<BlogPost>;
  onSubmit: (data: FormData) => void;
}

export function BlogEditor({ post, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: post?.title ?? "",
      slug: post?.slug ?? "",
      excerpt: post?.excerpt ?? "",
      content: post?.content ?? "",
      category: post?.category ?? "",
      seoTitle: post?.seoTitle ?? "",
      seoDescription: post?.seoDescription ?? "",
      published: post?.published ?? false,
      language: post?.language ?? "en",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-3xl">
      <div>
        <label className="block text-xs font-mono text-[#888888] mb-1">Title</label>
        <input
          {...register("title")}
          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2 text-[#EDEDED] text-sm focus:outline-none focus:border-[#E8FF00]/50"
        />
      </div>
      <div>
        <label className="block text-xs font-mono text-[#888888] mb-1">Content (Markdown)</label>
        <textarea
          {...register("content")}
          rows={12}
          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2 text-[#EDEDED] text-sm font-mono focus:outline-none focus:border-[#E8FF00]/50 resize-none"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2.5 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-lg text-sm hover:bg-[#C8DC00] transition-colors"
      >
        Save Post
      </button>
    </form>
  );
}
