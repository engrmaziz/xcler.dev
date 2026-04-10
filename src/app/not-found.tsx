import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D0D0D] text-center px-4">
      <span className="font-display text-[clamp(6rem,20vw,16rem)] text-[#222222] leading-none">
        404
      </span>
      <h1 className="font-display text-2xl md:text-4xl text-[#EDEDED] uppercase mt-4 mb-6">
        Page Not Found
      </h1>
      <p className="text-[#888888] max-w-sm mb-10">
        This page doesn&apos;t exist. But your next project at XCLER does.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-8 py-4 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C8DC00] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
