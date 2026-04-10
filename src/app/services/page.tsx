import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, app development, workflow automation, AI agents, WordPress, and Shopify — starting from $150.",
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="pt-32 section-padding bg-[#0D0D0D]">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
              What We Offer
            </span>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#EDEDED] uppercase mt-2">
              Services
            </h1>
            <p className="text-[#888888] max-w-xl mt-4 leading-relaxed">
              Six specialized services engineered for European businesses. Starting from $150.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-px bg-[#222222] rounded-2xl overflow-hidden">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group bg-[#141414] hover:bg-[#181818] transition-colors duration-300 p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-3xl text-[#333333] leading-none">
                        {service.number}
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl text-[#EDEDED] uppercase">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-[#888888] max-w-2xl leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <Badge key={tag} variant="muted">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
                    <div>
                      <div className="text-xs font-mono text-[#888888] mb-1">Starting from</div>
                      <div
                        className="font-display text-3xl"
                        style={{ color: service.accent }}
                      >
                        ${service.startingPrice}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C8DC00] transition-colors text-sm"
                    >
                      Get Quote
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-8 pt-6 border-t border-[#222222] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-xs text-[#888888] flex items-center gap-2"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.accent }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
