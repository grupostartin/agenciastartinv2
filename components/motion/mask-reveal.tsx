"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/constants";

interface MaskRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** A3 — Bloco sobe de dentro de uma máscara (overflow hidden, y 100% → 0). */
export function MaskReveal({ children, className, delay = 0 }: MaskRevealProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface MaskTitleProps {
  /** Cada item do array vira uma linha mascarada (stagger de 80ms). */
  lines: string[];
  className?: string;
  as?: "h2" | "h3";
  delay?: number;
}

/** A3 — Título com reveal por linha. */
export function MaskTitle({ lines, className, as = "h2", delay = 0 }: MaskTitleProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
    >
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "105%" },
              visible: { y: 0, transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
