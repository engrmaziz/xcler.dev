"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "1",
    name: "Thomas Weber",
    company: "Weber Solutions GmbH",
    role: "CEO",
    content:
      "XCLER built our automation system in 3 weeks. Our team saves 20 hours per week. Worth every cent.",
    rating: 5,
    industry: "Business Services",
  },
  {
    id: "2",
    name: "Anna Müller",
    company: "München E-Commerce",
    role: "Founder",
    content:
      "Best Shopify development agency I've worked with. Clean code, fast delivery, and they actually understand conversion.",
    rating: 5,
    industry: "E-commerce",
  },
  {
    id: "3",
    name: "Jan de Vries",
    company: "TechStart Amsterdam",
    role: "CTO",
    content:
      "Their AI chatbot reduced our customer support load by 60%. The RAG implementation was flawless.",
    rating: 5,
    industry: "SaaS",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#0D0D0D]">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
            Social Proof
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#EDEDED] uppercase mt-2">
            Client Results
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="surface-card p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#E8FF00] fill-[#E8FF00]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base text-[#EDEDED] leading-relaxed mb-8">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-[#222222] pt-6">
                <div className="font-medium text-[#EDEDED]">{t.name}</div>
                <div className="text-xs text-[#888888] mt-0.5">
                  {t.role}, {t.company}
                </div>
                <div className="text-xs font-mono text-[#E8FF00] mt-1">
                  {t.industry}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
