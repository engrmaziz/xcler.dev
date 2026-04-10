"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TECH_STACK } from "@/lib/constants";

export function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#141414]">
      <div className="container-wide">
        <div className="mb-12">
          <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
            Technology
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#EDEDED] uppercase mt-2">
            Our Stack
          </h2>
        </div>

        {/* Marquee rows */}
        <div className="overflow-hidden space-y-4">
          {/* Row 1 — forward */}
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <motion.div
                key={`${tech}-${i}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
                className="flex-shrink-0 px-5 py-2.5 bg-[#181818] border border-[#222222] rounded-xl font-mono text-sm text-[#888888]"
              >
                {tech}
              </motion.div>
            ))}
          </div>
          {/* Row 2 — reverse */}
          <div className="flex gap-4 animate-marquee-rev whitespace-nowrap">
            {[...TECH_STACK.slice().reverse(), ...TECH_STACK.slice().reverse()].map(
              (tech, i) => (
                <motion.div
                  key={`${tech}-rev-${i}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="flex-shrink-0 px-5 py-2.5 bg-[#181818] border border-[#222222] rounded-xl font-mono text-sm text-[#888888]"
                >
                  {tech}
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
