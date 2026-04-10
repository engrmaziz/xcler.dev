"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TEAM } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export function Team() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#0D0D0D]">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
            The Team
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#EDEDED] uppercase mt-2">
            Who Builds It
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group surface-card p-8 hover:border-[#333333] transition-colors duration-300"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-[#222222] flex items-center justify-center mb-6">
                <span className="font-display text-2xl text-[#E8FF00]">
                  {member.name[0]}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl text-[#EDEDED] uppercase">
                {member.name}
              </h3>
              <p className="text-xs font-mono text-[#E8FF00] uppercase tracking-wide mt-1 mb-4">
                {member.role}
              </p>
              <p className="text-sm text-[#888888] leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((skill) => (
                  <Badge key={skill} variant="muted">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
