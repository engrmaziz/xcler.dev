"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { NoiseTexture } from "@/components/ui/NoiseTexture";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D0D0D] noise-texture">
      <NoiseTexture />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#E8FF00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#FF3D00]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-wide relative z-10 pt-24 pb-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="block w-8 h-[1px] bg-[#E8FF00]" />
          <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
            Digital Agency
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(4rem,13vw,12rem)] leading-[0.88] tracking-tight text-[#EDEDED] uppercase mb-8">
          <AnimatedText text="WE BUILD" delay={0.1} />
          <br />
          <span className="text-[#E8FF00]">
            <AnimatedText text="DIGITAL" delay={0.2} />
          </span>
          <br />
          <AnimatedText text="PRECISION" delay={0.3} />
        </h1>

        {/* Sub + CTA row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-[#888888] max-w-md leading-relaxed"
          >
            Web, app, automation & AI — engineered for European businesses.
            Starting from{" "}
            <span className="text-[#EDEDED] font-medium">$150</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C8DC00] transition-colors text-base"
            >
              Start a Project
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#222222] text-[#888888] hover:text-[#EDEDED] hover:border-[#444444] rounded-xl transition-colors text-base"
            >
              See Work
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-[#222222] grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: SITE_CONFIG.projectsCompleted, label: "Projects Delivered" },
            { value: "$150", label: "Starting Price" },
            { value: SITE_CONFIG.clientsSatisfied, label: "Satisfied Clients" },
            { value: SITE_CONFIG.countriesServed, label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl md:text-5xl text-[#E8FF00]">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-[#888888] uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-[#888888] uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#888888] to-transparent"
        />
      </motion.div>
    </section>
  );
}
