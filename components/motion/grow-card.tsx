"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GrowCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function GrowCard({ children, className, index = 0 }: GrowCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.05, borderRadius: "999px", opacity: 0 }}
      whileInView={{ scale: 1, borderRadius: "1.5rem", opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );
}
