"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { EchoText } from "@/components/motion/echo-text";
import { CountUp } from "@/components/motion/count-up";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { EASE, stats } from "@/lib/constants";

const chips = [
  { label: "Landing Page", className: "top-[18%] left-[6%] md:left-[10%]", duration: 5, offset: -8 },
  { label: "Social Media", className: "top-[26%] right-[6%] md:right-[12%]", duration: 6, offset: 8 },
  { label: "Vídeo", className: "bottom-[22%] left-[10%] md:left-[18%]", duration: 4.5, offset: -8 },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const projects = stats[1];

  return (
    <section
      ref={ref}
      id="inicio"
      data-theme="dark"
      className="relative min-h-[100svh] bg-black text-white flex flex-col items-center justify-center overflow-hidden pt-28 pb-24"
    >
      {/* Visual de apoio P&B com parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
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
      {chips.map((chip, i) => (
        <motion.div
          key={chip.label}
          className={`absolute ${chip.className} z-10`}
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

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center"
      >
        <EchoText
          as="h1"
          text="STARTIN"
          copies={4}
          gap={0.06}
          className="text-[clamp(3.5rem,15vw,13.5rem)] font-heading font-extrabold leading-[0.85] tracking-[-0.04em]"
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
              <WhatsappLink
                id="hero-cta-landing"
                source="hero"
                service="Criação de Landing Page"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                Quero minha landing page
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </WhatsappLink>
            </MagneticButton>
            <a
              id="hero-cta-services"
              href="#servicos"
              className="px-8 py-4 border border-white/25 rounded-full font-semibold transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Ver serviços
            </a>
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
  );
}
