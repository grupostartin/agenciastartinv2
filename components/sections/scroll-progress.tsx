"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** 7.8 — Barra de progresso (1px). mix-blend-difference: branca no preto, preta no branco. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-px bg-white origin-left z-[60] mix-blend-difference"
      style={{ scaleX }}
    />
  );
}
