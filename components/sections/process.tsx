"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { MaskTitle } from "@/components/motion/mask-reveal";
import { EASE } from "@/lib/constants";

const steps = [
  { num: "01", title: "Conversa", desc: "Entendemos seu negócio e seu objetivo." },
  { num: "02", title: "Criação", desc: "Design e conteúdo feitos para converter." },
  { num: "03", title: "Entrega", desc: "No ar, rápido e pronto para vender." },
];

/** 7.5 — Processo (branco). A9: linha vertical desenhada pelo scroll (pathLength 0 → 1). */
export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="processo" data-theme="light" className="py-32 md:py-44 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <MaskTitle
          lines={["Simples assim."]}
          className="text-[clamp(2.5rem,6vw,5rem)] font-heading font-bold leading-none tracking-tight mb-20 md:mb-28"
        />

        <div ref={ref} className="relative">
          <svg
            aria-hidden="true"
            className="absolute left-6 md:left-8 top-0 h-full w-px overflow-visible -translate-x-1/2"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <line x1="1" y1="0" x2="1" y2="100" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          </svg>

          <ol className="space-y-20 md:space-y-32">
            {steps.map((step, i) => (
              <motion.li
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: EASE }}
                className="relative grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_1fr] items-start gap-6 md:gap-12"
              >
                <span className="relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-black text-sm md:text-base font-heading font-bold">
                  {step.num}
                </span>
                <h3 className="pt-1 md:pt-2 text-4xl md:text-7xl font-heading font-bold tracking-tight leading-none">
                  {step.title}
                </h3>
                <p className="col-start-2 md:col-start-3 text-gray-500 text-lg md:text-xl md:pt-4 max-w-sm">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
