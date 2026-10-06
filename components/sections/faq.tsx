"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HelpCircle,
  ChevronDown,
  LayoutTemplate,
  Megaphone,
  Clapperboard,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { MaskTitle } from "@/components/motion/mask-reveal";
import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { EASE, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FAQCategory = "todos" | "sites" | "social" | "video" | "geral";

interface FAQItem {
  id: string;
  category: FAQCategory;
  categoryLabel: string;
  question: string;
  answer: {
    intro: string;
    points?: { title: string; desc: string }[];
    conclusion?: string;
  };
}

const faqData: FAQItem[] = [
  {
    id: "lp-vs-site",
    category: "sites",
    categoryLabel: "Landing Pages & Sites",
    question: "Qual a diferença entre Landing Page e Site Institucional? Vocês fazem os dois?",
    answer: {
      intro:
        "Sim! Desenvolvemos tanto Landing Pages de alta conversão quanto Sites Institucionais completos e plataformas sob medida. A escolha ideal depende do momento e objetivo do seu negócio:",
      points: [
        {
          title: "Landing Page (Página Única de Conversão):",
          desc: "Desenhada estrategicamente com foco em um único objetivo direto — seja vender um produto, capturar leads qualificados ou levar o visitante direto para o WhatsApp. Sem distrações ou menus dispersivos, é a ferramenta ideal para campanhas de tráfego pago (Meta Ads e Google Ads) e lançamentos.",
        },
        {
          title: "Site Institucional (Múltiplas Páginas):",
          desc: "A sede digital completa da sua marca, com páginas dedicadas (Início, Quem Somos, Catálogo de Serviços, Blog, Contato). Perfeito para empresas que precisam apresentar portfólio amplo, transmitir autoridade corporativa e construir posicionamento orgânico de longo prazo no Google (SEO).",
        },
      ],
      conclusion:
        "Nossa equipe avalia o seu modelo de vendas e recomenda o formato exato que trará o melhor retorno sobre o investimento.",
    },
  },
  {
    id: "prazos-sites",
    category: "sites",
    categoryLabel: "Landing Pages & Sites",
    question: "Qual o prazo de entrega de uma Landing Page ou Site e o que vem incluso?",
    answer: {
      intro:
        "Nosso prazo padrão para uma Landing Page de alta performance é de 7 a 15 dias úteis. Para Sites Institucionais mais robustos, o prazo costuma ser de 15 a 25 dias úteis.",
      points: [
        {
          title: "Design Exclusivo:",
          desc: "Criado do zero, sem templates prontos, respeitando a identidade da sua marca.",
        },
        {
          title: "Código de Alta Velocidade:",
          desc: "Desenvolvimento moderno com Next.js, otimizado para carregar em menos de 2 segundos.",
        },
        {
          title: "Mobile First & Copywriting:",
          desc: "Adaptação impecável para celulares e textos persuasivos focados em converter visitantes em clientes.",
        },
        {
          title: "Integrações & Rastreamento:",
          desc: "Conexão direta com WhatsApp, formulários e instalação dos pixels de anúncio (Meta e Google).",
        },
      ],
    },
  },
  {
    id: "gestao-social-media",
    category: "social",
    categoryLabel: "Social Media",
    question: "Como funciona a Gestão de Mídias Sociais no dia a dia da Startin?",
    answer: {
      intro:
        "Cuidamos de toda a presença da sua marca no Instagram com estratégia, estética refinada e constância profissional:",
      points: [
        {
          title: "Planejamento Mensal:",
          desc: "Cronograma de postagens alinhado aos seus lançamentos, produtos e serviços em destaque.",
        },
        {
          title: "Design & Copywriting:",
          desc: "Artes visuais de alto padrão (carrosséis, estáticos) e legendas inteligentes que estimulam a interação.",
        },
        {
          title: "Direcionamento Estratégico:",
          desc: "Orientação de temas virais, áudios em alta e formatos de Reels que geram autoridade e alcance.",
        },
        {
          title: "Relatórios & Métricas:",
          desc: "Acompanhamento mensal com dados reais de novos seguidores, alcance e leads atraídos.",
        },
      ],
      conclusion:
        "Você para de se preocupar com 'o que postar hoje' e passa a ter um canal profissional focado em atrair clientes.",
    },
  },
  {
    id: "videomaker-eventos",
    category: "video",
    categoryLabel: "Videomaker",
    question: "Como funcionam os projetos de Videomaker para artistas, shows e eventos?",
    answer: {
      intro:
        "Atuamos com cobertura audiovisual cinematográfica pensada para as redes sociais modernas:",
      points: [
        {
          title: "Captação Multicâmera 4K:",
          desc: "Gravação dinâmica no palco, bastidores, camarim e na pista com estabilização e lentes de cinema.",
        },
        {
          title: "Edição Expressa de Impacto:",
          desc: "Entregamos cortes dinâmicos e teasers para Reels/TikTok com agilidade máxima (inclusive nas primeiras 24h para surfar o engajamento do evento).",
        },
        {
          title: "Aftermovies & Videoclipes:",
          desc: "Filmes completos com color grading exclusivo e sound design imersivo que eternizam o show.",
        },
      ],
      conclusion:
        "Somos referência em produções audiovisuais para artistas em Belo Horizonte e em grandes festivais.",
    },
  },
  {
    id: "regiao-atendimento",
    category: "geral",
    categoryLabel: "Geral",
    question: "A Startin atende apenas clientes de Belo Horizonte ou de qualquer lugar do Brasil?",
    answer: {
      intro:
        "Nossa base física fica em Belo Horizonte (MG), onde realizamos captações presenciais de vídeo, gravações e reuniões estratégicas. Porém, para Criação de Landing Pages, Sites Institucionais e Gestão de Redes Sociais, atendemos clientes em todo o Brasil e no exterior.",
      conclusion:
        "Nosso fluxo de trabalho é 100% digital, transparente e próximo, com reuniões online de alinhamento e suporte contínuo via WhatsApp.",
    },
  },
  {
    id: "orcamento-inicio",
    category: "geral",
    categoryLabel: "Geral",
    question: "Como faço para solicitar um orçamento e iniciar meu projeto com a agência?",
    answer: {
      intro:
        "O processo é rápido, direto e sem burocracia:",
      points: [
        {
          title: "1. Contato Inicial:",
          desc: "Clique no botão de WhatsApp aqui no site ou chame nossa equipe.",
        },
        {
          title: "2. Diagnóstico Rápido:",
          desc: "Conversamos para entender seu nicho, metas e o serviço ideal para o seu momento.",
        },
        {
          title: "3. Proposta Personalizada:",
          desc: "Apresentamos o escopo detalhado, prazos e condições sob medida para sua empresa.",
        },
        {
          title: "4. Execução Ágil:",
          desc: "Com o contrato assinado, iniciamos o briefing e a criação imediatamente.",
        },
      ],
    },
  },
];

const categoryTabs = [
  { id: "todos", label: "Todas as Dúvidas", icon: HelpCircle },
  { id: "sites", label: "Landing Pages & Sites", icon: LayoutTemplate },
  { id: "social", label: "Social Media", icon: Megaphone },
  { id: "video", label: "Videomaker", icon: Clapperboard },
  { id: "geral", label: "Geral & Contratação", icon: Layers },
] as const;

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("todos");
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs =
    activeCategory === "todos"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Structured Data (FAQPage Schema) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${item.answer.intro} ${item.answer.points
            ? item.answer.points.map((p) => `${p.title} ${p.desc}`).join(" ")
            : ""
          } ${item.answer.conclusion ?? ""}`,
      },
    })),
  };

  return (
    <section
      id="faq"
      data-theme="dark"
      className="py-28 md:py-36 px-6 bg-black text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Schema.org FAQPage for Google Search Engine */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14 md:mb-18 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
              <span>Tire Suas Dúvidas</span>
            </div>
            <MaskTitle
              lines={["Perguntas", "frequentes."]}
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-heading font-bold leading-none tracking-tight"
            />
          </div>

          <p className="text-sm text-zinc-400 max-w-sm md:text-right">
            Respostas transparentes sobre nossos processos, prazos e formatos de trabalho.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as FAQCategory)}
                className={cn(
                  "relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300",
                  isActive
                    ? "text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.2)] font-semibold"
                    : "text-zinc-400 bg-zinc-950/80 border border-white/10 hover:text-white hover:border-white/20"
                )}
                aria-pressed={isActive}
              >
                <Icon className={cn("w-3.5 h-3.5", isActive ? "text-black" : "text-zinc-400")} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: EASE }}
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "bg-zinc-950/90 border-white/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                      : "bg-zinc-950/40 border-white/10 hover:border-white/20 hover:bg-zinc-950/70"
                  )}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-6 md:p-7 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <h3
                        className={cn(
                          "text-base md:text-lg font-heading font-semibold leading-snug transition-colors",
                          isOpen ? "text-white" : "text-zinc-200 group-hover:text-white"
                        )}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300",
                        isOpen
                          ? "bg-white text-black border-white rotate-180"
                          : "bg-zinc-900 text-zinc-400 border-white/10 hover:text-white"
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-7 pb-6 md:pb-7 pt-2 border-t border-white/10 text-sm md:text-base text-zinc-300 leading-relaxed space-y-4">
                          <p>{faq.answer.intro}</p>

                          {faq.answer.points && (
                            <ul className="space-y-3 pt-1">
                              {faq.answer.points.map((pt, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                  <span>
                                    <strong className="text-white font-medium">
                                      {pt.title}
                                    </strong>{" "}
                                    {pt.desc}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {faq.answer.conclusion && (
                            <p className="pt-2 text-zinc-400 font-medium">
                              {faq.answer.conclusion}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base md:text-lg font-heading font-bold text-white mb-1">
              Ainda tem alguma dúvida específica sobre o seu projeto?
            </h4>
            <p className="text-xs md:text-sm text-zinc-400">
              Fale direto com nossos estrategistas. Respondemos em poucos minutos no WhatsApp.
            </p>
          </div>

          <WhatsappLink
            source="faq_footer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shrink-0 shadow-lg"
          >
            <span>Conversar no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </WhatsappLink>
        </div>
      </div>
    </section>
  );
}
