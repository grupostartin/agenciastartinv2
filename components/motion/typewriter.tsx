"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h2" | "h3" | "p";
}

const letter: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};

/** A5 — Letras aparecem uma a uma ao entrar na viewport, com cursor piscando. */
export function Typewriter({ text, className, delay = 0, as = "h2" }: TypewriterProps) {
  const Tag = motion[as];
  const words = text.split(" ");

  return (
    <Tag
      className={cn("relative", className)}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map((word, wi) => (
        <span key={wi} aria-hidden="true" className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, ci) => (
            <motion.span key={ci} variants={letter} className="inline-block">
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && (
            <motion.span variants={letter} className="inline-block">
              {"\u00A0"}
            </motion.span>
          )}
        </span>
      ))}
      <motion.span
        aria-hidden="true"
        className="inline-block w-[0.08em] h-[0.9em] ml-[0.06em] align-[-0.08em] bg-current"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </Tag>
  );
}
