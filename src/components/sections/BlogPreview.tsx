"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const PREVIEW_POSTS = [
  {
    id: "1",
    slug: "why-automation-beats-hiring",
    title: "Why Workflow Automation Beats Hiring in 2024",
    excerpt:
      "The economics of automation have shifted dramatically. Here's why smart European businesses are choosing tools over headcount.",
    category: "Automation",
    readTime: 5,
    coverImage: "",
    createdAt: "2024-10-01",
  },
  {
    id: "2",
    slug: "nextjs-vs-wordpress-2024",
    title: "Next.js vs WordPress: Which One for Your Business?",
    excerpt:
      "An honest comparison based on 50+ projects. We're not selling anything — just telling you which actually performs.",
    category: "Web Dev",
    readTime: 7,
    coverImage: "",
    createdAt: "2024-09-15",
  },
  {
    id: "3",
    slug: "rag-agents-explained",
    title: "RAG Agents Explained for Non-Technical Founders",
    excerpt:
      "Retrieval-Augmented Generation without the jargon. What it is, what it can do, and when it's worth building.",
    category: "AI Agents",
    readTime: 6,
    coverImage: "",
    createdAt: "2024-09-01",
  },
];

export function BlogPreview() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#141414]">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
              Insights
            </span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#EDEDED] uppercase mt-2">
              From The Lab
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-sm text-[#888888] hover:text-[#E8FF00] transition-colors"
          >
            All articles
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREVIEW_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group surface-card p-8 hover:border-[#333333] transition-colors duration-300"
            >
              <Badge variant="acid" className="mb-4">
                {post.category}
              </Badge>
              <h3 className="font-display text-lg text-[#EDEDED] uppercase leading-tight mb-3 group-hover:text-[#E8FF00] transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-sm text-[#888888] leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-[#888888]">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime} min read
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
