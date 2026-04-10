import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { ExternalLink, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#222222] mt-auto">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-4xl tracking-widest text-[#EDEDED]">
              XCLER
            </span>
            <p className="mt-4 text-sm text-[#888888] max-w-xs leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#222222] text-[#888888] hover:text-[#E8FF00] hover:border-[#E8FF00]/30 transition-colors text-xs font-mono"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#222222] text-[#888888] hover:text-[#E8FF00] hover:border-[#E8FF00]/30 transition-colors text-xs font-mono"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#222222] text-[#888888] hover:text-[#E8FF00] hover:border-[#E8FF00]/30 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#222222] text-[#888888] hover:text-[#E8FF00] hover:border-[#E8FF00]/30 transition-colors"
                aria-label="WhatsApp"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-mono font-medium text-[#888888] uppercase tracking-widest mb-4">
              Pages
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888888] hover:text-[#EDEDED] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#888888] hover:text-[#EDEDED] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono font-medium text-[#888888] uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-[#888888] hover:text-[#EDEDED] transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#888888] hover:text-[#EDEDED] transition-colors"
                >
                  {SITE_CONFIG.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#888888]">
            © {new Date().getFullYear()} XCLER. All rights reserved.
          </p>
          <p className="text-xs text-[#888888]">
            Built by{" "}
            <span className="text-[#E8FF00]">{SITE_CONFIG.founder}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}


