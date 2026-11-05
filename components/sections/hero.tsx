"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clapperboard,
  Globe,
  LayoutTemplate,
  MessageCircle,
  Rocket,
} from "lucide-react";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { EASE, services, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Dados (tudo vem de lib/constants — nada inventado)                  */
/* ------------------------------------------------------------------ */

const weekContent = [
  { day: "Seg", label: "Reel" },
  { day: "Qua", label: "Carrossel" },
  { day: "Sex", label: "Aftermovie" },
];

const deliveries = [
  { n: 1, label: services[0].title, status: "No ar", progress: 100, Icon: LayoutTemplate },
  { n: 2, label: "Social Media", status: "Em andamento", progress: 68, Icon: MessageCircle },
  { n: 3, label: services[2].title, status: "Editando", progress: 82, Icon: Clapperboard },
];

/* ------------------------------------------------------------------ */
/* Peças visuais                                                       */
/* ------------------------------------------------------------------ */

const glass =
  "bg-[linear-gradient(145deg,rgba(255,255,255,0.10),rgba(255,255,255,0.025))] border border-white/10 backdrop-blur-xl " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_40px_70px_-30px_rgba(0,0,0,0.95)]";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Ícone de app em "vidro" — equivalente aos tiles 3D da referência. */
function Tile({
  children,
  className,
  invert = false,
}: {
  children: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[1.35rem]",
        invert
          ? "bg-[linear-gradient(160deg,#ffffff,#d9d9d9)] text-black shadow-[inset_0_-3px_6px_rgba(0,0,0,0.12),0_28px_50px_-18px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.4)]"
          : glass + " text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Item flutuante. Três camadas independentes:
 *  1. scroll  - "voo" para fora (deriva + zoom + fade) conforme a rolagem;
 *  2. entrada - fade/scale inicial;
 *  3. float   - flutuação contínua (desligada com prefers-reduced-motion).
 */
function Floating({
  progress,
  drift,
  zoom = 1.4,
  delay,
  float = 8,
  duration = 5,
  className,
  children,
}: {
  progress: MotionValue<number>;
  /** Para onde o item voa (px) quando a rolagem completa. */
  drift: { x: number; y: number };
  zoom?: number;
  delay: number;
  float?: number;
  duration?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const x = useTransform(progress, [0, 1], [0, drift.x]);
  const y = useTransform(progress, [0, 1], [0, drift.y]);
  const scale = useTransform(progress, [0, 1], [1, zoom]);
  const opacity = useTransform(progress, [0, 0.5, 1], [1, 0.85, 0.1]);

  return (
    <motion.div
      style={{ x, y, scale, opacity }}
      className={cn("absolute pointer-events-none", className)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -float, 0] }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: raw } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Suaviza a rolagem para o zoom parecer contínuo, sem degraus.
  const p = useSpring(raw, { stiffness: 110, damping: 26, mass: 0.4, restDelta: 0.0005, restSpeed: 0.0005 });

  // Painel: recua e arredonda, como se a câmera atravessasse a cena.
  const panelScale = useTransform(p, [0, 1], [1, 0.9]);
  const panelRadius = useTransform(p, [0, 1], [40, 72]);
  const panelOpacity = useTransform(p, [0, 0.7, 1], [1, 0.7, 0.35]);

  // Conteúdo: vem na direção do usuário (zoom-in) e dissolve com blur.
  const contentScale = useTransform(p, [0, 1], [1, 1.55]);
  const contentOpacity = useTransform(p, [0, 0.55, 1], [1, 0.6, 0.12]);
  const contentBlur = useTransform(p, [0, 1], [0, 10]);
  const contentFilter = useTransform(contentBlur, (v) => (v < 0.15 ? "none" : `blur(${v}px)`));

  return (
    <div ref={containerRef} id="inicio" className="relative h-[200vh] bg-black">
      <section
        data-theme="dark"
        className="sticky top-0 h-[100svh] w-full bg-black text-white overflow-hidden px-3 pb-3 pt-[4.5rem] md:px-4 md:pb-4 md:pt-[5rem] select-none"
      >
        <motion.div
          style={{ scale: panelScale, opacity: panelOpacity, borderRadius: panelRadius }}
          className="relative h-full w-full overflow-hidden border border-white/10 bg-[#0a0a0a]"
        >
          {/* Textura: pontilhado + brilho de topo */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_80%_75%_at_50%_45%,#000_30%,transparent_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]"
          />

          {/* ---------- Cards grandes (xl+) ---------- */}

          {/* Nota — topo esquerdo */}
          <Floating
            progress={p}
            drift={{ x: -260, y: -170 }}
            delay={0.9}
            duration={6}
            className="left-[3.5%] top-[5%] hidden xl:block"
          >
            <div className="relative h-[215px] w-[250px]">
              <div className="absolute left-0 top-0 w-[215px] -rotate-6 rounded-md bg-[#f2f2f2] p-5 pt-8 text-black shadow-[0_30px_50px_-20px_rgba(0,0,0,0.9)]">
                <span className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-black shadow-[0_2px_3px_rgba(0,0,0,0.4)]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/50">Briefing</p>
                <p className="mt-2 font-heading text-[1.05rem] font-semibold italic leading-snug">
                  Páginas rápidas, bonitas e feitas para converter.
                </p>
              </div>
              <Tile className="absolute bottom-0 right-0 h-[76px] w-[76px] rotate-3">
                <Check className="h-8 w-8" strokeWidth={2.6} />
              </Tile>
            </div>
          </Floating>

          {/* Conteúdo da semana - topo direito */}
          <Floating
            progress={p}
            drift={{ x: 260, y: -170 }}
            delay={1.05}
            duration={5.5}
            className="right-[3.5%] top-[5%] hidden xl:block"
          >
            <div className="relative h-[225px] w-[290px]">
              <div className={cn(glass, "absolute bottom-0 right-0 w-[260px] rotate-3 rounded-3xl p-5")}>
                <div className="flex items-center justify-between">
                  <p className="font-heading text-sm font-semibold">Conteúdo</p>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Esta semana</span>
                </div>
                <div className="mt-4 space-y-2">
                  {weekContent.map((c) => (
                    <div
                      key={c.day}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2"
                    >
                      <span className="w-8 rounded-md bg-white py-0.5 text-center text-[10px] font-bold uppercase text-black">
                        {c.day}
                      </span>
                      <span className="text-xs font-medium">{c.label}</span>
                      <Check className="ml-auto h-3.5 w-3.5 text-white/50" strokeWidth={2.4} />
                    </div>
                  ))}
                </div>
              </div>
              <Tile className="absolute -left-4 -top-3 h-[72px] w-[72px] -rotate-6">
                <CalendarDays className="h-8 w-8" strokeWidth={1.8} />
              </Tile>
            </div>
          </Floating>

          {/* Entregas — base esquerda */}
          <Floating
            progress={p}
            drift={{ x: -260, y: 170 }}
            delay={1.2}
            duration={6.5}
            className="bottom-[4%] left-[3%] hidden xl:block"
          >
            <div className={cn(glass, "w-[300px] -rotate-2 rounded-3xl p-5")}>
              <p className="font-heading text-sm font-semibold">Entregas</p>
              <div className="mt-4 space-y-2.5">
                {deliveries.map((d) => (
                  <div key={d.n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[11px] font-bold text-black">
                        {d.n}
                      </span>
                      <span className="text-xs font-medium">{d.label}</span>
                      <span className="ml-auto text-[10px] text-white/45">{d.status}</span>
                    </div>
                    <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${d.progress}%` }}
                        transition={{ duration: 1.4, delay: 1.6 + d.n * 0.15, ease: EASE }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Floating>

          {/* Canais — base direita */}
          <Floating
            progress={p}
            drift={{ x: 260, y: 170 }}
            delay={1.35}
            duration={5}
            className="bottom-[4%] right-[3.5%] hidden xl:block"
          >
            <div className={cn(glass, "relative h-[220px] w-[300px] rotate-2 rounded-3xl p-5")}>
              <p className="font-heading text-sm font-semibold">Do clique ao WhatsApp</p>
              <p className="mt-1 max-w-[150px] text-xs leading-snug text-white/45">
                Site, Instagram e atendimento conectados.
              </p>
              <Tile className="absolute -bottom-4 left-4 h-[82px] w-[82px] -rotate-6" invert>
                <Globe className="h-9 w-9" strokeWidth={1.7} />
              </Tile>
              <Tile className="absolute -bottom-7 left-[112px] h-[82px] w-[82px] rotate-3">
                <InstagramGlyph className="h-9 w-9" />
              </Tile>
              <Tile className="absolute -bottom-3 right-[-14px] h-[82px] w-[82px] rotate-6" invert>
                <MessageCircle className="h-9 w-9" strokeWidth={1.7} />
              </Tile>
            </div>
          </Floating>

          {/* ---------- Tiles pequenos (abaixo de xl) ---------- */}
          <Floating
            progress={p}
            drift={{ x: -140, y: -140 }}
            delay={1}
            duration={5}
            className="left-[7%] top-[7%] xl:hidden"
          >
            <Tile className="h-12 w-12 -rotate-6 md:h-16 md:w-16" invert>
              <Check className="h-5 w-5 md:h-7 md:w-7" strokeWidth={2.6} />
            </Tile>
          </Floating>
          <Floating
            progress={p}
            drift={{ x: 140, y: -140 }}
            delay={1.15}
            duration={6}
            className="right-[7%] top-[9%] xl:hidden"
          >
            <Tile className="h-12 w-12 rotate-6 md:h-16 md:w-16">
              <Rocket className="h-5 w-5 md:h-7 md:w-7" strokeWidth={1.8} />
            </Tile>
          </Floating>
          <Floating
            progress={p}
            drift={{ x: -140, y: 140 }}
            delay={1.3}
            duration={5.5}
            className="bottom-[7%] left-[8%] xl:hidden"
          >
            <Tile className="h-12 w-12 rotate-3 md:h-16 md:w-16">
              <InstagramGlyph className="h-5 w-5 md:h-7 md:w-7" />
            </Tile>
          </Floating>
          <Floating
            progress={p}
            drift={{ x: 140, y: 140 }}
            delay={1.45}
            duration={6.5}
            className="bottom-[9%] right-[8%] xl:hidden"
          >
            <Tile className="h-12 w-12 -rotate-3 md:h-16 md:w-16" invert>
              <MessageCircle className="h-5 w-5 md:h-7 md:w-7" strokeWidth={1.8} />
            </Tile>
          </Floating>

          {/* ---------- Conteúdo central ---------- */}
          <motion.div
            style={{ scale: contentScale, opacity: contentOpacity, filter: contentFilter }}
            className="relative z-10 flex h-full w-full origin-center flex-col items-center justify-center px-6 pt-[12vh] text-center"
          >
            <motion.h1
              {...fadeUp(0.3)}
              className="max-w-[16ch] text-balance font-heading text-[clamp(2rem,min(4.6vw,9vh),4.75rem)] font-extrabold leading-[1] tracking-[-0.035em] md:max-w-none md:whitespace-nowrap"
            >
              <span className="sr-only">
                Agência de Marketing Digital em Belo Horizonte: landing pages, social media e vídeo.{" "}
              </span>
              <span aria-hidden className="block text-white">
                Transforme atenção
              </span>
              <span aria-hidden className="block text-white/35">
                em clientes.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.5)}
              className="mt-6 max-w-md text-balance text-base font-medium leading-relaxed text-gray-400 md:mt-7 md:text-lg"
            >
              Landing pages que <span className="font-semibold text-white">vendem</span>. Social media que{" "}
              <span className="font-semibold text-white">cresce</span>. Vídeo que{" "}
              <span className="font-semibold text-white">marca</span>.
            </motion.p>

            <motion.div {...fadeUp(0.7)} className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:mt-10">
              <MagneticButton>
                <WhatsappLink
                  id="hero-cta-main"
                  source="hero"
                  className="group flex items-center gap-3 rounded-full bg-white py-3 pl-7 pr-3 font-semibold text-black shadow-[0_18px_40px_-12px_rgba(255,255,255,0.35)] transition-colors hover:bg-gray-100"
                >
                  <span>Iniciar meu projeto</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </WhatsappLink>
              </MagneticButton>
              <a
                id="hero-cta-services"
                href="#servicos"
                className="rounded-full px-5 py-3 font-semibold text-zinc-400 transition-colors hover:text-white"
              >
                Ver serviços
              </a>
            </motion.div>

            <motion.p {...fadeUp(0.9)} className="mt-8 text-[11px] uppercase tracking-[0.25em] text-gray-500 md:mt-10">
              {siteConfig.location}
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
