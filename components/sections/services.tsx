"use client";

import { ArrowRight, Check, LayoutTemplate, Megaphone, Clapperboard } from "lucide-react";
import { motion } from "motion/react";
import { Typewriter } from "@/components/motion/typewriter";
import { GrowCard } from "@/components/motion/grow-card";
import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { GlassSurface } from "@/components/ui/glass-surface";
import { cn } from "@/lib/utils";
import { services } from "@/lib/constants";

const icons = {
  "landing-page": LayoutTemplate,
  "social-media": Megaphone,
  videomaker: Clapperboard,
} as const;

/** Recorte (notch) no canto superior direito — linguagem do vídeo de referência. */
const NOTCH = "polygon(0 0, calc(100% - 72px) 0, 100% 72px, 100% 100%, 0 100%)";

/** 7.4 — Serviços. Landing Page em destaque total. */
export function Services() {
  return (
    <section id="servicos" data-theme="dark" className="py-32 md:py-44 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Typewriter
            text="O que fazemos."
            className="text-[clamp(2.5rem,6vw,5rem)] font-heading font-bold leading-none tracking-tight"
          />
          <p className="text-gray-500 max-w-xs">Três serviços. Um objetivo: mais clientes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map((svc, i) => {
            const Icon = icons[svc.id];
            return (
              <GrowCard key={svc.id} index={i} className={cn("relative", svc.featured && "md:col-span-2")}>
                {/* Ícone flutuando dentro do recorte (notch) */}
                <motion.div
                  aria-hidden="true"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 z-10 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
                <article
                  id={`servico-${svc.id}`}
                  style={{ clipPath: NOTCH }}
                  className={cn(
                    "group relative h-full rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-colors duration-500",
                    svc.featured
                      ? "bg-white text-black md:min-h-[520px]"
                      : "bg-gray-800 text-white md:min-h-[460px] hover:bg-[#222]"
                  )}
                >
                  <div className={cn(svc.featured && "md:grid md:grid-cols-2 md:gap-12 md:items-end")}>
                    <div>
                      {svc.featured && (
                        <span className="inline-block mb-6 px-3 py-1 rounded-full border border-black/15 text-[10px] font-semibold tracking-[0.25em] uppercase">
                          Principal
                        </span>
                      )}
                      <h3
                        className={cn(
                          "font-heading font-bold leading-[0.95] tracking-tight mb-5 pr-12",
                          svc.featured ? "text-5xl md:text-8xl" : "text-3xl md:text-5xl"
                        )}
                      >
                        {svc.title}
                      </h3>
                      <p className={cn("text-lg md:text-xl max-w-md", svc.featured ? "text-black/60" : "text-gray-500")}>
                        {svc.desc}
                      </p>
                    </div>

                    <ul className="mt-8 md:mt-0 flex flex-wrap gap-2">
                      {svc.features.map((f) => (
                        <li
                          key={f}
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-full border text-sm",
                            svc.featured ? "border-black/15" : "border-white/12"
                          )}
                        >
                          <Check className="w-4 h-4" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-12">
                    <GlassSurface
                      variant={svc.featured ? "primary" : "default"}
                      borderRadius={999}
                      className="cursor-pointer"
                    >
                      <WhatsappLink
                        id={`cta-${svc.id}`}
                        source={`servico-${svc.id}`}
                        service={svc.whatsappService}
                        className={cn(
                          "inline-flex items-center gap-3 font-semibold transition-colors",
                          svc.featured
                            ? "px-8 py-4 text-white text-base md:text-lg"
                            : "px-6 py-3 text-zinc-200 hover:text-white text-sm md:text-base"
                        )}
                      >
                        {svc.cta}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </WhatsappLink>
                    </GlassSurface>
                  </div>
                </article>
              </GrowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
