export const siteConfig = {
  name: "Agência Startin",
  url: "https://agenciastartin.com.br",
  whatsapp: "5531982781618",
  whatsappDisplay: "(31) 98278-1618",
  instagram: "https://instagram.com/agenciastartin",
  instagramHandle: "@agenciastartin",
  location: "Belo Horizonte, MG",
};

/** RF01 — mensagem pré-preenchida por serviço. */
export const getWhatsappLink = (service?: string) => {
  const message = service
    ? `Olá! Vim pelo site e quero saber mais sobre ${service}`
    : "Olá! Vim pelo site e quero saber mais";
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const navLinks = [
  { name: "Serviços", href: "#servicos" },
  { name: "Projetos", href: "#projetos" },
  { name: "Processo", href: "#processo" },
  { name: "FAQ", href: "#faq" },
  { name: "Contato", href: "#contato" },
];

/**
 * ⚠️ PENDÊNCIA (PRD item 13): números do manifesto e do hero.
 * Valores provisórios — substituir pelos dados reais da agência antes de publicar.
 * PRD: "Não inventar números".
 */
export const stats = [
  { value: 3, suffix: "", label: "Anos de atuação" },
  { value: 25, suffix: "+", label: "Projetos entregues" },
  { value: 60, suffix: "+", label: "Clientes atendidos" },
];

export const services = [
  {
    id: "landing-page",
    title: "Landing Page",
    whatsappService: "Criação de Landing Page",
    desc: "Páginas rápidas, bonitas e feitas para converter.",
    cta: "Quero minha landing page",
    features: ["Design sob medida", "Mobile first", "Integração WhatsApp"],
    featured: true,
  },
  {
    id: "social-media",
    title: "Gestão de Mídias Sociais",
    whatsappService: "Gestão de Mídias Sociais",
    desc: "Conteúdo, planejamento e presença todo mês.",
    cta: "Saber mais",
    features: ["Planejamento", "Design de posts", "Relatório mensal"],
    featured: false,
  },
  {
    id: "videomaker",
    title: "Videomaker",
    whatsappService: "Videomaker para Artistas e Eventos",
    desc: "Vídeos para artistas e eventos, do palco ao Instagram.",
    cta: "Saber mais",
    features: ["Captação", "Edição dinâmica", "Reels e aftermovie"],
    featured: false,
  },
] as const;

/**
 * Portfólio de cases com dados completos para páginas individuais
 */
export const projects = [
  {
    id: 1,
    slug: "dj-leo-lg",
    name: "DJ Leo LG",
    type: "Videomaker Exclusivo",
    url: "https://instagram.com/djleolg",
    displayUrl: "@djleolg",
    src: "/images/projeto-djleolg.jpg",
    client: "DJ Leo LG",
    folderCode: "CASE_01",
    summary: "Videomaker único e oficial do DJ Leo LG, um dos maiores e mais respeitados nomes do funk de Belo Horizonte, com hits estourados e turnês lotadas.",
    challenge: "Acompanhar a rotina intensa de apresentações e festivais de peso, transformando a vibração dos palcos e bastidores em conteúdos cinematográficos com agilidade máxima para viralização nas redes sociais.",
    solution: "Atuação como videomaker exclusivo: captação multicâmera no palco, no backstage e na pista, estabilização dinâmica, sound design imersivo, color grading exclusivo e edição rítmica em tempo recorde.",
    results: [
      "Milhões de visualizações acumuladas nas redes sociais",
      "Cobertura oficial de grandes turnês, festivais e shows de funk",
      "Posicionamento audiovisual de referência na cena de BH",
    ],
    deliverables: [
      "Captação cinematográfica 4K nos palcos e bastidores",
      "Edição expressa de Reels e TikTok em tempo recorde",
      "Aftermovies e teasers de impacto para lançamentos de shows",
      "Direção de imagem e identidade visual de palco",
    ],
    tags: ["Videomaker Exclusivo", "@djleolg", "Funk BH", "Shows & Turnês"],
  },
  {
    id: 2,
    slug: "nathan-relogios",
    name: "Nathan Relógios",
    type: "E-commerce & Vendas",
    url: "https://nathanrelogios.com.br",
    displayUrl: "nathanrelogios.com.br",
    src: "/images/projeto-nathan.jpg",
    client: "Nathan Relógios",
    folderCode: "CASE_02",
    summary: "Loja virtual no nicho de relógios com autoridade máxima de marca, alta taxa de conversão e mais de R$ 800 mil faturados.",
    challenge: "Escalar as vendas online de uma marca de relógios em um mercado altamente competitivo, exigindo confiança imediata, design refinado e checkout sem atrito.",
    solution: "Desenvolvimento de e-commerce de alto impacto visual, com vitrine de produtos refinada, prova social estratégica, gatilhos de segurança e velocidade extrema de navegação.",
    results: [
      "+R$ 800.000,00 em faturamento acumulado",
      "Taxa de recompra consistente e checkout otimizado",
      "Design de marca valorizado no segmento premium",
    ],
    deliverables: [
      "Estrutura completa de loja virtual de alta conversão",
      "Otimização de páginas de produto para vendas rápidas",
      "Gatilhos de prova social e escassez estratégica",
      "Integrações de pagamentos e logística ágil",
    ],
    tags: ["+800k Faturados", "E-commerce", "Loja Virtual", "CRO"],
  },
  {
    id: 3,
    slug: "isabella-franklin",
    name: "Isabella Franklin",
    type: "Lançamento & Cursos",
    url: "https://isabellafranklin.com.br",
    displayUrl: "isabellafranklin.com.br",
    src: "/images/projeto-isabella.jpg",
    client: "Isabella Franklin",
    folderCode: "CASE_03",
    summary: "Estruturação completa de ecossistema digital para lançamento de cursos online e captação de clientes para terapia e desenvolvimento.",
    challenge: "Necessidade de transmitir autoridade, acolhimento e sofisticação visual para atrair o público ideal para formações online e sessões de terapia com alta taxa de conversão.",
    solution: "Criação de landing page sob medida com narrativa envolvente, design acolhedor e elegante, storytelling persuasivo e checkout integrado sem atrito.",
    results: [
      "Aumento expressivo na taxa de conversão de leads",
      "Lançamento de cursos com vagas esgotadas",
      "Experiência 100% responsiva e veloz no mobile",
    ],
    deliverables: [
      "UI/UX Design exclusivo no Figma",
      "Desenvolvimento em alta performance",
      "Copywriting estratégico focado no público-alvo",
      "Integração com plataforma de cursos e WhatsApp",
    ],
    tags: ["Lançamento", "Cursos", "Terapia", "Landing Page"],
  },
  {
    id: 4,
    slug: "renovo-massagem",
    name: "Renovo Massagem",
    type: "Site & Agendamentos",
    url: "https://renovomassagem.com.br",
    displayUrl: "renovomassagem.com.br",
    src: "/images/projeto-renovo.jpg",
    client: "Estúdio Renovo Massagem",
    folderCode: "CASE_04",
    summary: "Site institucional e de conversão focado em acelerar o agendamento de sessões para estúdio especializado de massagem.",
    challenge: "O estúdio dependia de agendamentos manuais com perda recorrente de clientes que chegavam pelas redes sociais sem encontrar informações claras e rápidas sobre os procedimentos.",
    solution: "Desenvolvemos um site rápido e intuitivo com apresentação clara dos serviços, benefícios terapêuticos e botões estratégicos de agendamento direto pelo WhatsApp.",
    results: [
      "+140% no volume de agendamentos diretos",
      "Redução no tempo de atendimento pré-agendamento",
      "Posicionamento de estúdio de referência no segmento",
    ],
    deliverables: [
      "Arquitetura de informação orientada a conversão",
      "Design moderno focado em bem-estar e relaxamento",
      "Fluxo otimizado para chamada no WhatsApp",
      "Otimização para busca local (SEO local)",
    ],
    tags: ["Site Institucional", "Agendamentos", "SEO Local", "Conversão"],
  },
];

export const EASE = [0.22, 1, 0.36, 1] as const;
