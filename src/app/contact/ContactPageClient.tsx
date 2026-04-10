"use client";

import { type ReactElement, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {
  Bot,
  Clock,
  Globe,
  Loader2,
  Mail,
  MessageCircle,
  Monitor,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";
import {
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
  SITE_CONFIG,
  TIMELINE_OPTIONS,
} from "@/lib/constants";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { cn } from "@/lib/utils";

interface ContactFormValues {
  name: string;
  email: string;
  company?: string;
  website?: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  whatsapp?: string;
  source?: string;
}

const SERVICE_ICON_MAP: Record<string, ReactElement> = {
  web: <Monitor size={20} />,
  app: <Smartphone size={20} />,
  automation: <Zap size={20} />,
  "ai-agents": <Bot size={20} />,
  wordpress: <Globe size={20} />,
  shopify: <ShoppingBag size={20} />,
};

const FAQS = [
  {
    question: "How much does web development cost?",
    answer:
      "XCLER projects start from €150 for simple automation or landing pages. Full web applications start from €500. We provide exact quotes after understanding your requirements.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Simple websites take 1-2 weeks. Web applications take 4-8 weeks. Automations take 3-7 days. We give exact timelines in our proposal.",
  },
  {
    question: "Do you work with clients outside Europe?",
    answer:
      "Yes! While we specialize in European businesses, we work globally. We have served clients in 8+ countries.",
  },
];

const FORM_INPUT_CLASSES =
  "w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-mono text-[var(--text)] placeholder-[var(--muted)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,255,0,0.08)]";

export function ContactPageClient() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const controls = useAnimation();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      service: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });

  const messageValue = watch("message") ?? "";
  const messageLength = messageValue.length;

  const handleNext = async () => {
    const fields = step === 1 ? ["name", "email"] : ["service", "budget", "timeline"];
    const isValid = await trigger(fields as Array<keyof ContactFormValues>);
    if (!isValid) {
      await controls.start({
        x: [0, -8, 8, -6, 6, 0],
        transition: { duration: 0.3 },
      });
      return;
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const toggleService = (value: string) => {
    const nextServices = selectedServices.includes(value)
      ? selectedServices.filter((item) => item !== value)
      : [...selectedServices, value];

    setSelectedServices(nextServices);
    setValue("service", nextServices.join(", "), { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to send");
      }
      setSuccess(true);
      reset();
      setSelectedServices([]);
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or contact us directly on WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <PageWrapper>
        <div className="bg-[#0D0D0D] pt-36 pb-24">
          <div className="container-wide max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-8 py-12 text-center"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#22C55E] text-[#22C55E]">
                ✓
              </div>
              <h2 className="mt-6 font-display text-4xl text-[var(--text)]">
                Brief Received!
              </h2>
              <p className="mt-3 text-base text-[var(--muted)]">
                We&apos;ll reach out within 24 hours. Check your email for
                confirmation.
              </p>
              <div className="mt-6 text-sm text-[var(--muted)]">
                Need faster response?{" "}
                <a
                  href="https://wa.me/923154823517"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)]"
                >
                  WhatsApp us
                </a>
              </div>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-mono text-[var(--accent)]"
                >
                  Back to Homepage →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="bg-[#0D0D0D] pt-36 pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] text-[var(--text)]">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-[var(--accent)]">great.</span>
              </h1>
              <p className="mt-4 text-base text-[var(--muted)]">
                Tell us about your project. We respond within 24 hours — usually
                much faster.
              </p>

              <div className="mt-10 space-y-3">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--accent)]"
                >
                  <Mail size={20} className="text-[var(--accent)]" />
                  <div>
                    <div className="text-sm font-mono text-[var(--text)]">
                      {SITE_CONFIG.email}
                    </div>
                    <div className="text-xs text-[var(--muted)]">
                      For detailed project briefs
                    </div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(
                    "+",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--accent)]"
                >
                  <MessageCircle size={20} className="text-[#25D366]" />
                  <div>
                    <div className="text-sm font-mono text-[var(--text)]">
                      {SITE_CONFIG.whatsappDisplay}
                    </div>
                    <div className="text-xs text-[var(--muted)]">
                      For quick questions
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs font-mono text-[#22C55E]">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#22C55E]" />
                      Usually replies in 1 hour
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
                  <Clock size={20} className="text-[var(--muted)]" />
                  <div>
                    <div className="text-sm font-mono text-[var(--text)]">
                      Within 24 hours
                    </div>
                    <div className="text-xs text-[var(--muted)]">
                      Monday – Saturday
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                {FAQS.map((faq, index) => (
                  <FaqItem
                    key={faq.question}
                    faq={faq}
                    isOpen={openFaq === index}
                    onToggle={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                  />
                ))}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-10">
                  <div className="mb-6">
                    <div className="text-xs font-mono uppercase text-[var(--muted)]">
                      Step {step} of 3
                    </div>
                    <div className="mt-3 flex gap-2">
                      {[1, 2, 3].map((segment) => (
                        <div
                          key={segment}
                          className={cn(
                            "h-[3px] flex-1 rounded",
                            segment <= step
                              ? "bg-[var(--accent)]"
                              : "bg-[var(--border)]"
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <motion.div animate={controls}>
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step-1"
                          initial={{ x: 40, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -40, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-6"
                        >
                          <div>
                            <div className="text-xs font-mono uppercase text-[var(--accent)]">
                              01 — About You
                            </div>
                            <h2 className="mt-2 font-display text-3xl text-[var(--text)]">
                              Tell us who you are
                            </h2>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                                Full Name <span className="text-[var(--fire)]">*</span>
                              </label>
                              <input
                                {...register("name", { required: "Full name is required" })}
                                placeholder="Your full name"
                                className={cn(
                                  FORM_INPUT_CLASSES,
                                  errors.name &&
                                    "border-[var(--fire)] shadow-[0_0_0_3px_rgba(255,61,0,0.08)]"
                                )}
                              />
                              {errors.name && (
                                <p className="mt-1 text-xs font-mono text-[var(--fire)]">
                                  {errors.name.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                                Email Address <span className="text-[var(--fire)]">*</span>
                              </label>
                              <input
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email",
                                  },
                                })}
                                type="email"
                                placeholder="your@email.com"
                                className={cn(
                                  FORM_INPUT_CLASSES,
                                  errors.email &&
                                    "border-[var(--fire)] shadow-[0_0_0_3px_rgba(255,61,0,0.08)]"
                                )}
                              />
                              {errors.email && (
                                <p className="mt-1 text-xs font-mono text-[var(--fire)]">
                                  {errors.email.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                                Company / Business
                              </label>
                              <input
                                {...register("company")}
                                placeholder="Your company name"
                                className={FORM_INPUT_CLASSES}
                              />
                            </div>

                            <div>
                              <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                                Website
                              </label>
                              <input
                                {...register("website", {
                                  pattern: {
                                    value:
                                      /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i,
                                    message: "Enter a valid URL",
                                  },
                                })}
                                placeholder="https://yoursite.com"
                                className={cn(
                                  FORM_INPUT_CLASSES,
                                  errors.website &&
                                    "border-[var(--fire)] shadow-[0_0_0_3px_rgba(255,61,0,0.08)]"
                                )}
                              />
                              {errors.website && (
                                <p className="mt-1 text-xs font-mono text-[var(--fire)]">
                                  {errors.website.message}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={handleNext}
                              className="rounded-md bg-[var(--accent)] px-7 py-3 text-sm font-mono font-medium text-[#0D0D0D]"
                            >
                              Continue →
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step-2"
                          initial={{ x: 40, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -40, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-6"
                        >
                          <div>
                            <div className="text-xs font-mono uppercase text-[var(--accent)]">
                              02 — Your Project
                            </div>
                            <h2 className="mt-2 font-display text-3xl text-[var(--text)]">
                              What do you need?
                            </h2>
                          </div>

                          <input
                            type="hidden"
                            {...register("service", { required: "Select at least one service" })}
                          />

                          <div className="grid grid-cols-2 gap-3">
                            {SERVICE_OPTIONS.filter(
                              (option) => option.value !== "other"
                            ).map((option) => {
                              const isSelected = selectedServices.includes(option.value);
                              return (
                                <button
                                  key={option.value}
                                  type="button"
                                  onClick={() => toggleService(option.value)}
                                  className={cn(
                                    "flex flex-col items-start gap-2 rounded-lg border px-4 py-4 text-left transition-colors",
                                    isSelected
                                      ? "border-[var(--accent)] bg-[rgba(232,255,0,0.08)] text-[var(--accent)]"
                                      : "border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:border-[rgba(232,255,0,0.4)]"
                                  )}
                                >
                                  <span
                                    className={cn(
                                      "text-[var(--muted)]",
                                      isSelected && "text-[var(--accent)]"
                                    )}
                                  >
                                    {SERVICE_ICON_MAP[option.value]}
                                  </span>
                                  <span className="text-sm">{option.label}</span>
                                </button>
                              );
                            })}
                          </div>
                          {errors.service && (
                            <p className="text-xs font-mono text-[var(--fire)]">
                              {errors.service.message}
                            </p>
                          )}

                          <div>
                            <div className="mb-2 text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                              Budget Range
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {BUDGET_OPTIONS.map((option) => {
                                const isSelected = watch("budget") === option.value;
                                return (
                                  <button
                                    key={option.value}
                                    type="button"
                                    onClick={() =>
                                      setValue("budget", option.value, {
                                        shouldValidate: true,
                                      })
                                    }
                                    className={cn(
                                      "rounded border px-4 py-2 text-xs font-mono transition-colors",
                                      isSelected
                                        ? "border-[var(--accent)] bg-[var(--accent)] text-[#0D0D0D]"
                                        : "border-[var(--border)] text-[var(--muted)]"
                                    )}
                                  >
                                    {option.label}
                                  </button>
                                );
                              })}
                            </div>
                            {errors.budget && (
                              <p className="mt-2 text-xs font-mono text-[var(--fire)]">
                                {errors.budget.message}
                              </p>
                            )}
                            <input
                              type="hidden"
                              {...register("budget", { required: "Select a budget" })}
                            />
                          </div>

                          <div>
                            <div className="mb-2 text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                              Timeline
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {TIMELINE_OPTIONS.map((option) => {
                                const isSelected = watch("timeline") === option.value;
                                return (
                                  <button
                                    key={option.value}
                                    type="button"
                                    onClick={() =>
                                      setValue("timeline", option.value, {
                                        shouldValidate: true,
                                      })
                                    }
                                    className={cn(
                                      "rounded border px-4 py-2 text-xs font-mono transition-colors",
                                      isSelected
                                        ? "border-[var(--accent)] bg-[var(--accent)] text-[#0D0D0D]"
                                        : "border-[var(--border)] text-[var(--muted)]"
                                    )}
                                  >
                                    {option.label}
                                  </button>
                                );
                              })}
                            </div>
                            {errors.timeline && (
                              <p className="mt-2 text-xs font-mono text-[var(--fire)]">
                                {errors.timeline.message}
                              </p>
                            )}
                            <input
                              type="hidden"
                              {...register("timeline", { required: "Select a timeline" })}
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="rounded-md border border-[var(--border)] px-5 py-2 text-sm font-mono text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
                            >
                              ← Back
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="rounded-md bg-[var(--accent)] px-7 py-3 text-sm font-mono font-medium text-[#0D0D0D]"
                            >
                              Continue →
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step-3"
                          initial={{ x: 40, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -40, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-6"
                        >
                          <div>
                            <div className="text-xs font-mono uppercase text-[var(--accent)]">
                              03 — Project Details
                            </div>
                            <h2 className="mt-2 font-display text-3xl text-[var(--text)]">
                              Tell us more
                            </h2>
                          </div>

                          <div>
                            <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                              Project Description <span className="text-[var(--fire)]">*</span>
                            </label>
                            <textarea
                              {...register("message", {
                                required: "Project details are required",
                                minLength: {
                                  value: 30,
                                  message: "Please enter at least 30 characters",
                                },
                              })}
                              rows={6}
                              placeholder="Describe your project, the problem you&apos;re solving, who your users are, and any specific requirements you have..."
                              className={cn(
                                FORM_INPUT_CLASSES,
                                "resize-none",
                                errors.message &&
                                  "border-[var(--fire)] shadow-[0_0_0_3px_rgba(255,61,0,0.08)]"
                              )}
                            />
                            <div className="mt-2 flex items-center justify-between text-xs font-mono">
                              <span className="text-[var(--muted)]">Minimum 30 characters</span>
                              <span
                                className={cn(
                                  messageLength < 30
                                    ? "text-[var(--fire)]"
                                    : "text-[var(--accent)]"
                                )}
                              >
                                {messageLength} characters
                              </span>
                            </div>
                            {errors.message && (
                              <p className="mt-1 text-xs font-mono text-[var(--fire)]">
                                {errors.message.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                              WhatsApp (optional)
                            </label>
                            <input
                              {...register("whatsapp")}
                              placeholder="+49 (your German number or international)"
                              className={FORM_INPUT_CLASSES}
                            />
                            <p className="mt-2 text-xs font-mono text-[var(--muted)]">
                              We&apos;ll reach out here for quick updates
                            </p>
                          </div>

                          <div>
                            <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                              How did you find us?
                            </label>
                            <select
                              {...register("source")}
                              className={cn(FORM_INPUT_CLASSES, "appearance-none")}
                              style={{
                                backgroundImage:
                                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23888888'><path d='M7 10l5 5 5-5H7z'/></svg>\")",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 16px center",
                                backgroundSize: "16px",
                              }}
                            >
                              <option value="">Select an option</option>
                              <option value="Google Search">Google Search</option>
                              <option value="LinkedIn">LinkedIn</option>
                              <option value="Facebook">Facebook</option>
                              <option value="Instagram">Instagram</option>
                              <option value="WhatsApp / Referral">WhatsApp / Referral</option>
                              <option value="ChatGPT / AI recommendation">
                                ChatGPT / AI recommendation
                              </option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          {submitError && (
                            <div className="rounded-lg border border-[rgba(255,61,0,0.3)] bg-[rgba(255,61,0,0.08)] px-4 py-3 text-sm font-mono text-[var(--fire)]">
                              {submitError}
                            </div>
                          )}

                          <div className="flex flex-col gap-4">
                            <button
                              type="submit"
                              disabled={submitting}
                              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-4 text-base font-mono font-medium text-[#0D0D0D]"
                            >
                              {submitting ? (
                                <span className="flex items-center gap-2">
                                  <Loader2 className="animate-spin" size={16} />
                                  Sending...
                                </span>
                              ) : (
                                "Send Project Brief →"
                              )}
                            </button>

                            <button
                              type="button"
                              onClick={handleBack}
                              className="rounded-md border border-[var(--border)] px-5 py-2 text-sm font-mono text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
                            >
                              ← Back
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[var(--border)] py-4">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left text-sm font-medium text-[var(--text)]"
      >
        {faq.question}
        <span className="text-lg">{isOpen ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 pb-4 text-sm leading-relaxed text-[var(--muted)]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
