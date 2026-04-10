import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#0D0D0D] text-center px-4"
      style={{ paddingTop: "160px", paddingBottom: "80px" }}
    >
      {/* Giant 404 */}
      <div className="relative flex items-center justify-center">
        <span
          className="font-display leading-none select-none"
          style={{
            fontSize: "clamp(8rem, 25vw, 20rem)",
            color: "transparent",
            WebkitTextStroke: "2px #222222",
            lineHeight: 1,
            position: "relative",
            zIndex: 0,
          }}
        >
          404
        </span>
      </div>

      {/* Overlay heading */}
      <div className="relative z-10 -mt-8">
        <h1 className="font-display text-4xl lg:text-6xl text-[#EDEDED] uppercase leading-tight">
          This page got
          <br />
          <span className="text-[#E8FF00]">automated away.</span>
        </h1>

        <p className="mt-4 text-base text-[#888888] text-center font-sans">
          Even our bots couldn&apos;t find it.
          <br />
          Let&apos;s get you back on track.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-7 py-3 bg-[#E8FF00] text-[#0D0D0D] font-mono text-sm rounded-md transition-colors hover:bg-[#C8DC00]"
          >
            ← Back to Home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center px-7 py-3 border border-[#222222] text-[#888888] font-mono text-sm rounded-md transition-colors hover:border-[#E8FF00] hover:text-[#EDEDED]"
          >
            View Our Work ↗
          </Link>
        </div>

        {/* Helpful links */}
        <p className="mt-8 font-mono text-xs text-[#888888]">
          Looking for something specific?
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {[
            { label: "Services", href: "/services" },
            { label: "Work", href: "/work" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ].map((link, i, arr) => (
            <span key={link.href} className="flex items-center gap-2">
              <Link
                href={link.href}
                className="font-mono text-sm text-[#888888] hover:text-[#E8FF00] transition-colors"
              >
                {link.label}
              </Link>
              {i < arr.length - 1 && (
                <span className="text-[#222222] font-mono text-sm">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
