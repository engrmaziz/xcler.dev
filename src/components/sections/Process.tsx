"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn your business, goals, and technical requirements. No fluff — just the signal.",
  },
  {
    number: "02",
    title: "Proposal & Scope",
    description: "Exact deliverables, timeline, and price. No surprises, no scope creep.",
  },
  {
    number: "03",
    title: "Build Phase",
    description: "We ship in sprints with regular updates. You see progress, not promises.",
  },
  {
    number: "04",
    title: "Launch & Handoff",
    description: "Clean code, full documentation, and knowledge transfer. You own everything.",
  },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#141414]">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
            How We Work
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#EDEDED] uppercase mt-2">
            Our Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-[#222222] z-0" />
              )}

              <div className="relative z-10">
                <div className="font-display text-5xl text-[#222222] leading-none mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-xl text-[#EDEDED] uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
