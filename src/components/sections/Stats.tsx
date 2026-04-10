"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/constants";

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-[#0D0D0D] border-y border-[#222222]">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[#222222]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center md:px-8"
            >
              <div className="font-display text-5xl md:text-6xl text-[#E8FF00]">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-[#888888] uppercase tracking-widest mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
