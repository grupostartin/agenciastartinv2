"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { MaskTitle } from "@/components/motion/mask-reveal";
import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { navLinks, siteConfig } from "@/lib/constants";

import { GlassSurface } from "@/components/ui/glass-surface";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/** 7.7 — CTA final + Rodapé minimalista com Instagram e WhatsApp. */
export function CTAFooter() {
  return (
    <footer id="contato" data-theme="dark" className="relative bg-black text-white overflow-hidden border-t border-white/10">
      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-44 pb-24 flex flex-col items-center text-center">
        <MaskTitle
          lines={["Vamos", "começar?"]}
          className="text-[clamp(3rem,10vw,9rem)] font-heading font-bold leading-[0.9] tracking-tight"
        />

        <div className="mt-14">
          <MagneticButton>
            <GlassSurface
              variant="primary"
              borderRadius={999}
              className="group cursor-pointer"
            >
              <WhatsappLink
                id="footer-cta-whatsapp"
                source="cta-final"
                className="flex items-center gap-4 pl-10 pr-4 py-4 text-white rounded-full text-lg md:text-xl font-bold transition-all"
              >
                <span>Falar no WhatsApp</span>
                <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black overflow-hidden transition-transform duration-300 group-hover:-rotate-45">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </WhatsappLink>
            </GlassSurface>
          </MagneticButton>
        </div>
      </div>

      {/* Rodapé — layout idêntico à referência */}
      <div className="max-w-7xl mx-auto px-6 pb-12 md:pb-16">
        {/* Topo do rodapé: Brand + Redes Sociais */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2.5">
            <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7 text-white stroke-[2.5]" />
            <span className="font-heading font-bold text-lg md:text-xl text-white tracking-tight">
              {siteConfig.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="footer-instagram"
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all flex items-center justify-center"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <WhatsappLink
              id="footer-whatsapp-icon"
              source="footer-icon"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all flex items-center justify-center"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </WhatsappLink>
          </div>
        </div>

        {/* Divisória fina */}
        <div className="w-full border-t border-zinc-800" />

        {/* Base do rodapé: Copyright e Links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1 text-xs text-zinc-400">
            <p>© {new Date().getFullYear()} {siteConfig.name}</p>
            <p className="text-zinc-500">Todos os direitos reservados</p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-xs">
            <nav className="flex flex-wrap items-center gap-6 text-zinc-300">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-white transition-colors"
                >
                  {l.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-5 text-zinc-500">
              <a href="#privacidade" className="hover:text-zinc-300 transition-colors">
                Privacidade
              </a>
              <a href="#termos" className="hover:text-zinc-300 transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
