"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { EchoText } from "@/components/motion/echo-text";
import { CountUp } from "@/components/motion/count-up";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { GlassSurface } from "@/components/ui/glass-surface";
import { EASE, stats } from "@/lib/constants";

const chips = [
  { label: "Landing Page", className: "top-[16%] left-[4%] md:left-[8%]", duration: 5, offset: -8 },
  { label: "Social Media", className: "top-[18%] right-[4%] md:right-[8%]", duration: 6, offset: 8 },
  { label: "Vídeo", className: "bottom-[20%] left-[6%] md:left-[12%]", duration: 4.5, offset: -8 },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Imagem de fundo: parallax e zoom suave e gradual
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.7, 0.2]);

  // Conteúdo principal (STARTIN + CTAs): leve e elegante expansão 3D
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-2%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.8, 0]);

  // Chips flutuantes: movimento suave e dissipação elegante
  const chipsScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const chipsOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Indicador de scroll: dissolve suavemente no início do movimento
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const projects = stats[1];

  return (
    <div
      ref={containerRef}
      id="inicio"
      className="relative h-[160vh] bg-black"
    >
      <section
        data-theme="dark"
        className="sticky top-0 h-[100svh] w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden pt-28 pb-20 select-none"
      >
        {/* Visual de apoio P&B com parallax e zoom 3D */}
        <motion.div
          style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
        >
          <div className="relative w-[110vw] max-w-[950px] aspect-square opacity-20 md:opacity-30">
            <Image
              src="/images/hero-shape.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 950px"
              className="object-contain grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#000_75%)]" />
        </motion.div>

        {/* A10 — Chips flutuantes */}
        <motion.div
          style={{ scale: chipsScale, opacity: chipsOpacity }}
          className="absolute inset-0 pointer-events-none z-10"
        >
          {chips.map((chip, i) => (
            <motion.div
              key={chip.label}
              className={`absolute ${chip.className} pointer-events-none select-none`}
              {...fadeUp(1 + i * 0.15)}
            >
              <motion.span
                animate={{ y: [0, chip.offset, 0] }}
                transition={{ duration: chip.duration, repeat: Infinity, ease: "easeInOut" }}
                className="block px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase"
              >
                {chip.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center origin-center"
        >
          <EchoText
            as="h1"
            text="STARTIN"
            copies={4}
            gap={0.06}
            containerClassName="flex flex-col items-center justify-center w-full"
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-heading font-extrabold leading-[0.9] tracking-[-0.03em] text-stroke-white uppercase text-center"
          />

          <div className="relative z-20 flex flex-col items-center mt-6 md:mt-10">
            <motion.p
              {...fadeUp(0.5)}
              className="max-w-xl text-base md:text-xl text-gray-400 font-medium leading-relaxed drop-shadow-sm"
            >
              Landing pages que <span className="text-white font-semibold">vendem</span>. Social media que{" "}
              <span className="text-white font-semibold">cresce</span>. Vídeo que <span className="text-white font-semibold">marca</span>.
            </motion.p>

            <motion.div {...fadeUp(0.7)} className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4">
              <MagneticButton>
                <GlassSurface
                  variant="primary"
                  borderRadius={999}
                  className="group cursor-pointer"
                >
                  <WhatsappLink
                    id="hero-cta-main"
                    source="hero"
                    className="flex items-center gap-3 px-8 py-4 text-white font-semibold transition-colors"
                  >
                    <span>Iniciar meu projeto</span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </WhatsappLink>
                </GlassSurface>
              </MagneticButton>
              <GlassSurface
                borderRadius={999}
                className="group cursor-pointer"
              >
                <a
                  id="hero-cta-services"
                  href="#servicos"
                  className="px-8 py-4 text-zinc-300 font-semibold transition-colors hover:text-white block"
                >
                  Ver serviços
                </a>
              </GlassSurface>
            </motion.div>

            <motion.div {...fadeUp(0.9)} className="mt-12 md:mt-14 flex flex-col items-center">
              <CountUp
                to={projects.value}
                suffix={projects.suffix}
                className="text-4xl md:text-5xl font-heading font-bold"
              />
              <span className="text-xs text-gray-500 mt-2 uppercase tracking-[0.2em]">{projects.label}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.a
          href="#sobre"
          id="hero-scroll-indicator"
          aria-label="Rolar para a próxima seção"
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="w-4 h-4" />
          </motion.span>
          Scroll
        </motion.a>
      </section>
    </div>
  );
}
