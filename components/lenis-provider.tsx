"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * A1 — Smooth scroll (Lenis, lerp 0.1) + âncoras suaves (RF03).
 * MotionConfig reducedMotion="user" desliga animações de transform
 * para quem tem prefers-reduced-motion ativo.
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: reduce ? 1 : 0.1,
        smoothWheel: !reduce,
        anchors: true,
      }}
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
}
