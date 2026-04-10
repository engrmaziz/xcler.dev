"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Send, MessageCircle } from "lucide-react";
import { BUDGET_OPTIONS, SERVICE_OPTIONS, TIMELINE_OPTIONS, SITE_CONFIG } from "@/lib/constants";
import { PageWrapper } from "@/components/layout/PageWrapper";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  whatsapp: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget"),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().min(20, "Please describe your project (min 20 characters)"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success("Message sent! We'll reply within 24 hours.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <div className="bg-[#0D0D0D] pt-32 section-padding">
        <div className="container-wide max-w-5xl">
          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-mono text-[#E8FF00] uppercase tracking-[0.3em]">
              Get in Touch
            </span>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#EDEDED] uppercase mt-2 leading-[0.9]">
              Start a
              <br />
              <span className="text-[#E8FF00]">Project</span>
            </h1>
            <p className="text-[#888888] max-w-md mt-4 leading-relaxed">
              Tell us what you&apos;re building. We&apos;ll respond within 24 hours with a clear proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#888888] uppercase tracking-widest mb-2">
                      Name *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      className="w-full bg-[#141414] border border-[#222222] rounded-xl px-4 py-3 text-[#EDEDED] placeholder-[#444444] focus:outline-none focus:border-[#E8FF00]/50 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-[#FF3D00] mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#888888] uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-[#141414] border border-[#222222] rounded-xl px-4 py-3 text-[#EDEDED] placeholder-[#444444] focus:outline-none focus:border-[#E8FF00]/50 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-[#FF3D00] mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Company + Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#888888] uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      {...register("company")}
                      placeholder="Company name"
                      className="w-full bg-[#141414] border border-[#222222] rounded-xl px-4 py-3 text-[#EDEDED] placeholder-[#444444] focus:outline-none focus:border-[#E8FF00]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#888888] uppercase tracking-widest mb-2">
                      WhatsApp
                    </label>
                    <input
                      {...register("whatsapp")}
                      placeholder="+49 ..."
                      className="w-full bg-[#141414] border border-[#222222] rounded-xl px-4 py-3 text-[#EDEDED] placeholder-[#444444] focus:outline-none focus:border-[#E8FF00]/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-mono text-[#888888] uppercase tracking-widest mb-2">
                    Service *
                  </label>
                  <select
                    {...register("service")}
                    className="w-full bg-[#141414] border border-[#222222] rounded-xl px-4 py-3 text-[#EDEDED] focus:outline-none focus:border-[#E8FF00]/50 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-[#FF3D00] mt-1">{errors.service.message}</p>
                  )}
                </div>

                {/* Budget + Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#888888] uppercase tracking-widest mb-2">
                      Budget *
                    </label>
                    <select
                      {...register("budget")}
                      className="w-full bg-[#141414] border border-[#222222] rounded-xl px-4 py-3 text-[#EDEDED] focus:outline-none focus:border-[#E8FF00]/50 transition-colors"
                    >
                      <option value="">Select budget</option>
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="text-xs text-[#FF3D00] mt-1">{errors.budget.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#888888] uppercase tracking-widest mb-2">
                      Timeline *
                    </label>
                    <select
                      {...register("timeline")}
                      className="w-full bg-[#141414] border border-[#222222] rounded-xl px-4 py-3 text-[#EDEDED] focus:outline-none focus:border-[#E8FF00]/50 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {TIMELINE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="text-xs text-[#FF3D00] mt-1">{errors.timeline.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-[#888888] uppercase tracking-widest mb-2">
                    Project Description *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#141414] border border-[#222222] rounded-xl px-4 py-3 text-[#EDEDED] placeholder-[#444444] focus:outline-none focus:border-[#E8FF00]/50 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-[#FF3D00] mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C8DC00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-mono text-[#888888] uppercase tracking-widest mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="block text-[#EDEDED] hover:text-[#E8FF00] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#EDEDED] hover:text-[#E8FF00] transition-colors"
                  >
                    <MessageCircle size={16} />
                    {SITE_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono text-[#888888] uppercase tracking-widest mb-4">
                  Response Time
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">
                  We reply to all inquiries within{" "}
                  <span className="text-[#E8FF00]">24 hours</span>. Usually much faster.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono text-[#888888] uppercase tracking-widest mb-4">
                  What Happens Next
                </h3>
                <ol className="space-y-3 text-sm text-[#888888]">
                  {[
                    "We review your inquiry",
                    "Schedule a discovery call",
                    "Send a clear proposal",
                    "Start building",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-mono text-[#E8FF00] flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
