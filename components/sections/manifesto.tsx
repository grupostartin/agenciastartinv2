"use client";

import { motion } from "motion/react";
import { ScrollText } from "@/components/motion/scroll-text";
import { CountUp } from "@/components/motion/count-up";
import { EASE, stats } from "@/lib/constants";

/** 7.3 — Manifesto (branco). */
export function Manifesto() {
  return (
    <section
      id="sobre"
      data-theme="light"
      className="relative z-20 py-32 md:py-44 px-6 bg-white text-black rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-30px_70px_rgba(0,0,0,0.7)]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-black" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase">Sobre</span>
        </motion.div>

        <ScrollText
          text="Somos a Startin, agência de BH. Criamos páginas, conteúdo e vídeos que colocam sua marca na frente e transformam atenção em clientes."
          className="text-[clamp(1.9rem,4.6vw,4rem)] font-heading font-semibold leading-[1.1] tracking-tight"
        />

        <div className="mt-24 grid grid-cols-3 gap-4 md:gap-8 border-t border-black/10 pt-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
            >
              <CountUp
                to={s.value}
                suffix={s.suffix}
                className="block text-4xl md:text-7xl font-heading font-bold tracking-tight"
              />
              <p className="mt-2 text-xs md:text-sm text-gray-500 font-medium uppercase tracking-[0.15em]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
