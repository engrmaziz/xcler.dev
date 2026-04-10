"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NoiseTexture } from "@/components/ui/NoiseTexture";

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-[#0D0D0D]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative surface-card p-12 md:p-20 text-center overflow-hidden noise-texture"
        >
          <NoiseTexture />

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#E8FF00]/10 rounded-full blur-[60px]" />

          <div className="relative z-10">
            <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
              Ready to build?
            </span>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#EDEDED] uppercase mt-4 mb-6 leading-[0.9]">
              LET&apos;S BUILD
              <br />
              <span className="text-[#E8FF00]">SOMETHING</span>
              <br />
              REMARKABLE
            </h2>
            <p className="text-[#888888] max-w-md mx-auto mb-10 leading-relaxed">
              Tell us about your project. We&apos;ll respond within 24 hours
              with a clear proposal — no fluff, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-10 py-4 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C8DC00] transition-colors text-lg"
              >
                Start a Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href={`https://wa.me/923154823517?text=Hi%2C%20I%27m%20interested%20in%20working%20with%20XCLER.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 border border-[#222222] text-[#888888] hover:text-[#EDEDED] hover:border-[#444444] rounded-xl transition-colors text-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
