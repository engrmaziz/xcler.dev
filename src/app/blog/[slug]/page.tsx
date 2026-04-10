import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PageWrapper } from "@/components/layout/PageWrapper";

interface Props {
  params: Promise<{ slug: string }>;
}

const POSTS = [
  {
    slug: "why-automation-beats-hiring",
    title: "Why Workflow Automation Beats Hiring in 2024",
    excerpt: "The economics of automation have shifted dramatically.",
    content: `
The question used to be: "Should we automate or hire?" In 2024, that question is obsolete.

**The Math Has Changed**

A single automation workflow costs $300–$1,500 to build and runs forever. A full-time employee costs $30,000–$60,000 per year in Europe — and they don't run on weekends.

When we build n8n or Make.com workflows for European businesses, we typically see:
- 15–40 hours per week saved in the first month
- ROI within 30–60 days
- Zero sick days, zero vacation requests

**What Can Actually Be Automated**

The short list: lead nurturing, invoice generation, CRM updates, appointment booking, customer follow-ups, reporting, social posting, and email campaigns.

The longer answer: if it's repetitive and rule-based, we can automate it.

**The Human Element**

Automation doesn't replace humans. It removes the boring parts so your team can focus on what matters — strategy, relationships, creativity.

**The Bottom Line**

If you're paying humans to copy-paste data between tools, you're burning money. Let's fix that.
    `.trim(),
    category: "Automation",
    readTime: 5,
    author: "Musharraf Aziz",
    createdAt: "2024-10-01",
  },
  {
    slug: "nextjs-vs-wordpress-2024",
    title: "Next.js vs WordPress: Which One for Your Business?",
    excerpt: "An honest comparison based on 50+ projects.",
    content: `
We've built over 50 projects — some in WordPress, some in Next.js. Here's the honest answer.

**Choose WordPress If:**
- You need a simple brochure site or blog
- Your client wants to update content themselves
- Budget is under €500
- SEO is critical and you're not technical

**Choose Next.js If:**
- You need a web application
- Performance is non-negotiable
- You're building a SaaS or complex platform
- You want full control over everything

**The Performance Gap Is Real**

A well-built Next.js site will outperform a WordPress site on Core Web Vitals by default. Page Speed matters for SEO. It matters for conversions. It matters.

**The Maintenance Reality**

WordPress requires constant updates and security patching. Next.js on Vercel just works. That's a real business consideration.

**Our Recommendation**

If you're a European SMB with a simple website need: WordPress done right. If you're building something serious: Next.js, full stop.
    `.trim(),
    category: "Web Dev",
    readTime: 7,
    author: "Abeel Mehr",
    createdAt: "2024-09-15",
  },
  {
    slug: "rag-agents-explained",
    title: "RAG Agents Explained for Non-Technical Founders",
    excerpt: "Retrieval-Augmented Generation without the jargon.",
    content: `
You've heard the acronym. You've nodded in meetings. Here's what RAG actually means and why it matters for your business.

**The Problem With Standard AI**

ChatGPT knows everything up to its training date. It doesn't know your products, your policies, your pricing, or your customers.

**What RAG Does**

RAG (Retrieval-Augmented Generation) gives the AI access to your specific knowledge base before answering. You upload your docs, your FAQs, your product catalog — and the AI answers based on YOUR information.

**A Real Example**

A German software company we worked with had 500 pages of technical documentation. Their support team spent 30% of their time answering the same questions.

We built a RAG chatbot that:
1. Reads all 500 pages
2. Finds the relevant section for any question
3. Answers in German or English
4. Escalates to humans only when needed

Result: 60% reduction in support tickets in week one.

**When to Build a RAG Agent**

- You have large amounts of internal documentation
- You get repetitive customer questions
- You want 24/7 support without 24/7 staff
- Your knowledge base changes frequently

**The Investment**

A solid RAG implementation costs €400–€1,500 depending on complexity. It pays for itself in weeks.
    `.trim(),
    category: "AI Agents",
    readTime: 6,
    author: "Musharraf Aziz",
    createdAt: "2024-09-01",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageWrapper>
      <div className="pt-32 section-padding bg-[#0D0D0D]">
        <div className="container-wide max-w-3xl">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#EDEDED] transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            All Articles
          </Link>

          {/* Header */}
          <Badge variant="acid" className="mb-4">{post.category}</Badge>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#EDEDED] uppercase leading-[0.9] mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-xs font-mono text-[#888888] mb-12 pb-8 border-b border-[#222222]">
            <span>By {post.author}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readTime} min read
            </span>
            <span>{new Date(post.createdAt).toLocaleDateString("en-GB")}</span>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("**") && block.endsWith("**")) {
                return (
                  <h2 key={i} className="font-display text-2xl text-[#EDEDED] uppercase mt-10 mb-4">
                    {block.replace(/\*\*/g, "")}
                  </h2>
                );
              }
              if (block.startsWith("-")) {
                const items = block.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="space-y-2 my-6">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#888888]">
                        <span className="w-1 h-1 rounded-full bg-[#E8FF00] mt-2 flex-shrink-0" />
                        {item.replace(/^- /, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-[#888888] leading-relaxed my-4">
                  {block}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-[#222222]">
            <p className="text-[#888888] mb-6 text-center">
              Want to implement this for your business?
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C8DC00] transition-colors"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
