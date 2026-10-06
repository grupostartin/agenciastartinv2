import { CSSProperties, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number | string;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 350,
}) => {
  const widthVal = typeof shimmerWidth === "number" ? `${shimmerWidth}px` : shimmerWidth;

  return (
    <span
      style={
        {
          "--shiny-width": widthVal,
        } as CSSProperties
      }
      className={cn(
        // Cor base: tom cinza (como no exemplo Mishra Hub)
        "inline-block text-neutral-400/50",

        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat",
        "[background-position:0_0] [background-size:var(--shiny-width)_100%]",

        // Shine gradient: feixe branco iluminado que corre pelas letras
        "bg-gradient-to-r from-transparent via-white via-50% to-transparent",

        className,
      )}
    >
      {children}
    </span>
  );
};
