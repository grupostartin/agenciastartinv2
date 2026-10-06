"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Folder, FolderOpen, ArrowUpRight, Sparkles } from "lucide-react";
import { MaskTitle } from "@/components/motion/mask-reveal";
import { EASE, projects } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Project = (typeof projects)[number];

export function Portfolio() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="projetos"
      data-theme="dark"
      className="py-28 md:py-36 px-6 bg-black text-white relative overflow-hidden"
    >
      {/* Background subtle ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 mb-3">
              <FolderOpen className="w-3.5 h-3.5 text-zinc-400" />
              <span>Arquivo de Cases Selecionados</span>
            </div>
            <MaskTitle
              lines={["Projetos."]}
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-heading font-bold leading-none tracking-tight"
            />
          </div>

          <div className="flex flex-col md:items-end gap-1">
            <span className="text-xs text-zinc-500 tracking-[0.2em] uppercase font-mono">
              {String(projects.length).padStart(2, "0")} PASTAS ARQUIVADAS
            </span>
            <p className="text-sm text-zinc-400 max-w-xs md:text-right">
              Passe o mouse para abrir cada pasta e clique para conferir o case completo.
            </p>
          </div>
        </div>

        {/* Project Folders Grid — grid 2x2 perfeitamente equilibrado e alinhado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectFolderCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectFolderCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
      className="w-full"
    >
      <Link
        href={`/projetos/${project.slug}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl"
        aria-label={`Ver projeto: ${project.name}`}
      >
        {/* Pasta Externa / Container com silhueta de pasta */}
        <div className="relative pt-6">
          {/* Aba da Pasta (Folder Tab) no canto superior esquerdo */}
          <div className="absolute top-0 left-0 flex items-center gap-2 px-4 py-2 bg-zinc-900 border-t border-l border-r border-white/15 rounded-t-xl z-20 transition-all duration-300 group-hover:bg-zinc-800 group-hover:border-white/30">
            <div className="text-zinc-400 group-hover:text-white transition-colors">
              {isHovered ? (
                <FolderOpen className="w-4 h-4 text-white transition-transform scale-110" />
              ) : (
                <Folder className="w-4 h-4 transition-transform" />
              )}
            </div>
            <span className="text-xs font-mono font-semibold tracking-wider text-zinc-300 group-hover:text-white">
              {project.folderCode}
            </span>
          </div>

          {/* Tag de Categoria na barra superior direita */}
          <div className="absolute top-1 right-0 flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            <span>{project.type}</span>
          </div>

          {/* Corpo Principal da Pasta (Folder Shell) */}
          <div className="relative overflow-hidden rounded-2xl rounded-tl-none border border-white/15 bg-zinc-950 shadow-2xl transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_10px_40px_rgba(255,255,255,0.06)]">
            
            {/* Altura equilibrada para o conteúdo interno */}
            <div className="relative h-[380px] md:h-[420px] w-full overflow-hidden bg-zinc-950">
              
              {/* DOCUMENTO / FICHA INTERNA QUE DESLIZA PARA FORA AO PASSAR O MOUSE (HOVER: ABRIR A PASTA) */}
              <div
                className={cn(
                  "absolute inset-x-3 top-3 h-[250px] md:h-[280px] rounded-xl overflow-hidden bg-zinc-900 transition-all duration-500 ease-out shadow-lg",
                  // No hover: sobe suavemente simulando a saída da pasta
                  isHovered ? "-translate-y-3 md:-translate-y-4 scale-[1.01]" : "translate-y-2 scale-100"
                )}
              >
                {/* Imagem do Projeto */}
                <Image
                  src={project.src}
                  alt={`${project.name} — ${project.type}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className={cn(
                    "object-cover transition-all duration-700 ease-out",
                    isHovered ? "scale-105 filter-none" : "grayscale-[40%] contrast-105"
                  )}
                />

                {/* Gradiente interno na foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badge de Destaque / Métrica no topo da ficha */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-black/70 backdrop-blur-md border border-white/15 text-white">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    {project.results[0] ?? project.client}
                  </span>
                </div>
              </div>

              {/* ABA FRONTAL / BOLSO DA PASTA (FOLDER POCKET LIP) */}
              {/* Fica na frente do documento, criando a sensação tridimensional de pasta aberta */}
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/80 backdrop-blur-md border-t border-white/15 p-5 md:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[10px] md:text-xs font-mono font-medium tracking-wider text-zinc-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {project.displayUrl}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                      Case Verificado
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-heading font-bold text-white leading-snug group-hover:text-zinc-100 transition-colors">
                    {project.name}
                  </h3>

                  <p className="mt-1.5 text-xs md:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Rodapé da Pasta com Chamada para Ação */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 font-mono">
                      #{project.tags[0]}
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span className="text-xs text-zinc-500 font-mono">
                      #{project.tags[1]}
                    </span>
                  </div>

                  {/* Indicador de Abrir Pasta */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      Abrir pasta
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
