"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { MaskTitle } from "@/components/motion/mask-reveal";
import { cn } from "@/lib/utils";
import { EASE, projects } from "@/lib/constants";

type Project = (typeof projects)[number];

/** Formas alternadas: arco (topo redondo) e cápsula. */
const shapes = ["rounded-t-[999px] rounded-b-3xl", "rounded-[999px]", "rounded-[999px]", "rounded-t-[999px] rounded-b-3xl"];
const heights = ["aspect-[3/4]", "aspect-[3/5]", "aspect-[3/5]", "aspect-[3/4]"];

/** 7.6 — Portfólio (preto). A8: stagger + colunas com velocidades diferentes. */
export function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const slow = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const fast = useTransform(scrollYProgress, [0, 1], [160, -160]);

  const left = projects.filter((_, i) => i % 2 === 0);
  const right = projects.filter((_, i) => i % 2 === 1);

  return (
    <section ref={ref} id="projetos" data-theme="dark" className="py-32 md:py-44 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24 flex items-end justify-between gap-6">
          <MaskTitle
            lines={["Projetos."]}
            className="text-[clamp(2.5rem,6vw,5rem)] font-heading font-bold leading-none tracking-tight"
          />
          <span className="text-xs text-gray-500 tracking-[0.2em] uppercase pb-2">
            {String(projects.length).padStart(2, "0")} trabalhos
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-10">
          <Column items={left} offset={slow} startIndex={0} />
          <Column items={right} offset={fast} startIndex={1} className="mt-24 md:mt-40" />
        </div>
      </div>
    </section>
  );
}

function Column({
  items,
  offset,
  startIndex,
  className,
}: {
  items: Project[];
  offset: MotionValue<number>;
  startIndex: number;
  className?: string;
}) {
  return (
    <motion.div style={{ y: offset }} className={cn("flex flex-col gap-4 md:gap-10", className)}>
      {items.map((p, j) => {
        const i = startIndex + j * 2;
        return (
          <motion.figure
            key={p.id}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
            className={cn("group relative w-full overflow-hidden bg-gray-800", shapes[i], heights[i])}
          >
            <Image
              src={p.src}
              alt={`${p.name} — ${p.type}`}
              fill
              sizes="(max-width: 768px) 50vw, 540px"
              className="object-cover grayscale transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
            {/* Hover revela nome + serviço (sempre visível no mobile) */}
            <figcaption className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 md:p-10 bg-gradient-to-t from-black/85 via-black/10 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-300 md:translate-y-3 md:group-hover:translate-y-0 transition-transform duration-500">
                {p.type}
              </span>
              <span className="mt-2 text-base md:text-3xl font-heading font-bold leading-tight md:translate-y-3 md:group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {p.name}
              </span>
            </figcaption>
          </motion.figure>
        );
      })}
    </motion.div>
  );
}
