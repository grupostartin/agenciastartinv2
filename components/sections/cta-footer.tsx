"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EchoText } from "@/components/motion/echo-text";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { MaskTitle } from "@/components/motion/mask-reveal";
import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { navLinks, siteConfig } from "@/lib/constants";

/** 7.7 — CTA final + Rodapé (preto). */
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
            <WhatsappLink
              id="footer-cta-whatsapp"
              source="cta-final"
              className="group flex items-center gap-4 pl-10 pr-4 py-4 bg-white text-black rounded-full text-lg md:text-xl font-bold transition-transform duration-300 hover:scale-[1.02]"
            >
              Falar no WhatsApp
              <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-white overflow-hidden">
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </WhatsappLink>
          </MagneticButton>
        </div>
      </div>

      {/* Rodapé */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-t border-white/10 text-sm">
          <div>
            <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-4">Contato</p>
            <ul className="space-y-2">
              <li>
                <WhatsappLink id="footer-whatsapp" source="footer" className="hover:text-gray-500 transition-colors">
                  {siteConfig.whatsappDisplay}
                </WhatsappLink>
              </li>
              <li>
                <a
                  id="footer-instagram"
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-gray-500 transition-colors"
                >
                  {siteConfig.instagramHandle}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-4">Navegação</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gray-500 transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-4">Onde</p>
            <p>{siteConfig.location}</p>
          </div>
          <div className="md:text-right">
            <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-4">Serviços</p>
            <p>Landing Page · Social Media · Vídeo</p>
          </div>
        </div>
      </div>

      {/* STARTIN gigante com eco */}
      <div className="w-full flex justify-center py-6 select-none" aria-hidden="true">
        <EchoText
          text="STARTIN"
          trigger="inView"
          copies={5}
          gap={0.14}
          className="text-[clamp(3.5rem,17vw,20rem)] font-heading font-extrabold leading-[0.8] tracking-[-0.04em] text-center text-stroke-white"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-gray-500 border-t border-white/10">
        <p>© 2026 {siteConfig.name}. Todos os direitos reservados.</p>
        <p>Feito em BH.</p>
      </div>
    </footer>
  );
}
