"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/constants";

interface EchoTextProps {
  text: string;
  className?: string;
  containerClassName?: string;
  /** Número de cópias (eco) abaixo do texto principal. PRD: 5–6. */
  copies?: number;
  /** Distância entre cópias, em em. */
  gap?: number;
  /** Anima na montagem (hero) ou ao entrar na viewport (rodapé). */
  trigger?: "mount" | "inView";
  as?: "h1" | "p" | "div";
  /** Texto semântico adicional para leitores de tela e robôs de busca (SEO) */
  srText?: string;
}

/** A2 — Eco do título: cópias empilhadas descendo, opacidade 1 → 0.1, cascata + parallax. */
export function EchoText({
  text,
  className,
  containerClassName,
  copies = 5,
  gap = 0.08,
  trigger = "mount",
  as = "div",
  srText,
}: EchoTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const MainTag = motion[as];

  const animateProps =
    trigger === "mount"
      ? { animate: "visible" as const }
      : { whileInView: "visible" as const, viewport: { once: true, amount: 0.3 } };

  return (
    <motion.div
      ref={ref}
      className={cn("relative select-none", containerClassName)}
      initial="hidden"
      {...animateProps}
      style={{ paddingBottom: `${copies * gap * 1.2}em` }}
    >
      {/* Camadas de eco ficam em z-0, sempre atrás do texto principal e do conteúdo */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible" aria-hidden="true">
        {Array.from({ length: copies }, (_, i) => (
          <EchoLayer
            key={i}
            index={i + 1}
            total={copies}
            gap={gap}
            text={text}
            className={className}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <MainTag
        className={cn("relative z-10 whitespace-nowrap", className)}
        variants={{
          hidden: { opacity: 0, y: "0.2em" },
          visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
        }}
      >
        {text}
        {srText && <span className="sr-only"> — {srText}</span>}
      </MainTag>
    </motion.div>
  );
}

function EchoLayer({
  index,
  total,
  gap,
  text,
  className,
  progress,
}: {
  index: number;
  total: number;
  gap: number;
  text: string;
  className?: string;
  progress: MotionValue<number>;
}) {
  // Parallax sutil: as cópias se distanciam levemente no scroll
  const spread = useTransform(progress, [0.3, 1], [0, index * 4]);
  // Opacidade decrescente suave: a 1ª é ~0.35 e vai decaindo até ~0.04
  const targetOpacity = Math.max(0.04, Math.pow(1 - index / (total + 1), 1.6) * 0.45);

  return (
    <motion.div
      style={{ y: spread }}
      className="absolute inset-x-0 top-0 pointer-events-none flex items-center justify-center"
      aria-hidden="true"
    >
      <motion.div
        className={cn("whitespace-nowrap select-none", className)}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: {
            opacity: targetOpacity,
            y: `${index * gap}em`,
            transition: { duration: 1.1, delay: 0.2 + index * 0.07, ease: EASE },
          },
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}
