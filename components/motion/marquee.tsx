"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({ items, className, direction = "left", speed = 40 }: MarqueeProps) {
  const doubled = [...items, ...items];
  const duration = (items.length * 8000) / speed;

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: direction === "left" ? [0, `-50%`] : [`-50%`, 0] }}
        transition={{
          duration: duration / 1000,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm font-bold tracking-widest uppercase whitespace-nowrap flex items-center gap-12"
          >
            {item}
            <span className="inline-block w-2 h-2 rounded-full bg-current opacity-40" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
