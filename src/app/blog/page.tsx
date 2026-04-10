import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on web development, automation, AI, and digital strategy from the XCLER team.",
};

const POSTS = [
  {
    id: "1",
    slug: "why-automation-beats-hiring",
    title: "Why Workflow Automation Beats Hiring in 2024",
    excerpt: "The economics of automation have shifted dramatically. Here's why smart European businesses are choosing tools over headcount.",
    category: "Automation",
    readTime: 5,
    createdAt: "2024-10-01",
  },
  {
    id: "2",
    slug: "nextjs-vs-wordpress-2024",
    title: "Next.js vs WordPress: Which One for Your Business?",
    excerpt: "An honest comparison based on 50+ projects. We're not selling anything — just telling you which actually performs.",
    category: "Web Dev",
    readTime: 7,
    createdAt: "2024-09-15",
  },
  {
    id: "3",
    slug: "rag-agents-explained",
    title: "RAG Agents Explained for Non-Technical Founders",
    excerpt: "Retrieval-Augmented Generation without the jargon. What it is, what it can do, and when it's worth building.",
    category: "AI Agents",
    readTime: 6,
    createdAt: "2024-09-01",
  },
];

export default function BlogPage() {
  return (
    <PageWrapper>
      <div className="pt-32 section-padding bg-[#0D0D0D]">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
              Insights
            </span>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#EDEDED] uppercase mt-2">
              From The Lab
            </h1>
            <p className="text-[#888888] max-w-xl mt-4 leading-relaxed">
              Practical thinking on web, automation, and AI — from a team that ships.
            </p>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="group surface-card p-8 hover:border-[#333333] transition-colors"
              >
                <Badge variant="acid" className="mb-4">
                  {post.category}
                </Badge>
                <h2 className="font-display text-xl text-[#EDEDED] uppercase leading-tight mb-3 group-hover:text-[#E8FF00] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-[#888888] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-[#888888]">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime} min read
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 hover:text-[#E8FF00] transition-colors"
                  >
                    Read
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
