import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Services — Web Development, Automation & AI | XCLER",
  description:
    "XCLER offers web development from €500, app development from €800, workflow automation from €150, AI chatbots from €400, WordPress from €150, and Shopify development from €300. Serving European businesses.",
  alternates: {
    canonical: "https://xcler.dev/services",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "XCLER Services",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "XCLER",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: service.startingPrice,
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: service.startingPrice,
            priceCurrency: "EUR",
          },
        },
      },
    })),
  };

  const comparisonRows = [
    ["Transparent Pricing", "✓", "Sometimes"],
    ["Fast Turnaround", "✓", "Rarely"],
    ["Direct Communication", "✓", "Never"],
    ["Automation Included", "✓", "Extra cost"],
    ["Source Code Yours", "✓", "Check TOS"],
    ["30-day Support", "✓", "Extra cost"],
    ["Starting from €150", "✓", "✗"],
  ];

  return (
    <PageWrapper>
      <div className="bg-[#0D0D0D]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="pt-40 pb-20">
          <div className="container-wide">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E8FF00]">
                  Services
                </span>
                <h1 className="mt-4 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] text-[#EDEDED]">
                  Every service.
                  <br />
                  One team.
                </h1>
              </div>
              <p className="max-w-sm text-base text-[var(--muted)]">
                We don&apos;t outsource. We don&apos;t use templates. Every project is
                handled by our 3-person specialist team from start to finish.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container-wide">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={service.id}>
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-10 lg:items-start">
                    <div
                      className={`order-1 lg:col-span-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="text-xs font-mono uppercase text-[var(--accent)]">
                        {service.number}
                      </div>
                      <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-[var(--text)]">
                        {service.title}
                      </h2>
                      <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
                        {service.description}
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-mono text-[var(--muted)]">
                        <span>Starting from</span>
                        <span className="text-[var(--accent)]">€{service.startingPrice}</span>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-[var(--border)] px-3 py-1 text-xs font-mono text-[var(--muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="group mt-6 inline-flex items-center gap-2 text-sm font-mono text-[var(--accent)]"
                      >
                        Get a Quote
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>

                    <div
                      className={`order-2 lg:col-span-4 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-9">
                        <div className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                          What&apos;s included
                        </div>
                        <div className="mt-6 space-y-3">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                              <span className="text-[var(--accent)]">✓</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 border-t border-[var(--border)] pt-5">
                          <span className="text-sm font-mono text-[var(--accent)]">
                            Start this service →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index !== SERVICES.length - 1 && (
                    <div className="my-20 border-t border-[var(--border)]" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-24">
          <div className="container-wide">
            <h2 className="mb-8 font-display text-4xl text-[var(--text)]">
              Why XCLER?
            </h2>
            <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              <div className="grid grid-cols-3 bg-[var(--card)] px-6 py-4 text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                <div>Feature</div>
                <div className="text-center">XCLER</div>
                <div className="text-right">Big Agency / Freelancer</div>
              </div>
              {comparisonRows.map((row, index) => (
                <div
                  key={row[0]}
                  className={`grid grid-cols-3 px-6 py-4 text-sm ${
                    index === comparisonRows.length - 1
                      ? ""
                      : "border-b border-[var(--border)]"
                  }`}
                >
                  <div className="text-[var(--text)]">{row[0]}</div>
                  <div className="text-center font-bold text-[var(--accent)]">
                    {row[1]}
                  </div>
                  <div className="text-right text-[var(--muted)]">{row[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 pb-24">
          <div className="container-wide">
            <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-8 py-16 text-center">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
                Ready to start?
              </span>
              <h2 className="mt-6 font-display text-[clamp(3rem,7vw,5rem)] leading-[0.9] text-[var(--text)]">
                Let&apos;s plan your
                <br />
                next build.
              </h2>
              <p className="mt-6 max-w-md text-base text-[var(--muted)]">
                Tell us about your project and we&apos;ll respond within 24 hours
                with a clear plan, timeline, and pricing.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-10 py-4 text-sm font-mono font-medium text-[#0D0D0D]"
              >
                Start Your Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
