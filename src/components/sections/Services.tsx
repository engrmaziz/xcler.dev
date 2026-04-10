"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#0D0D0D]">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
              What We Do
            </span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-[#EDEDED] uppercase mt-2">
              Services
            </h2>
          </div>
          <p className="text-[#888888] max-w-sm leading-relaxed">
            Six specialized services. One focused team. Built to deliver extraordinary results for European businesses.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#222222] rounded-2xl overflow-hidden">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-[#141414] p-8 hover:bg-[#181818] transition-colors duration-300"
            >
              {/* Number */}
              <span className="font-display text-6xl text-[#222222] group-hover:text-[#2A2A2A] transition-colors duration-300 leading-none">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl text-[#EDEDED] uppercase mt-4 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#888888] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {service.tags.map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#888888]">
                  From{" "}
                  <span style={{ color: service.accent }} className="font-medium">
                    ${service.startingPrice}
                  </span>
                </span>
                <Link
                  href="/contact"
                  className="flex items-center gap-1 text-xs font-mono text-[#888888] hover:text-[#E8FF00] transition-colors group/link"
                >
                  Inquire
                  <ArrowRight
                    size={12}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: service.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
