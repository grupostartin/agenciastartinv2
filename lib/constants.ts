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
  { name: "Processo", href: "#processo" },
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
 * ⚠️ PENDÊNCIA (PRD item 13): portfólio.
 * Imagens ilustrativas — trocar por trabalhos reais (com autorização dos clientes).
 */
export const projects = [
  { id: 1, name: "Landing de lançamento", type: "Landing Page", src: "/images/projeto-landing.jpg" },
  { id: 2, name: "Show ao vivo", type: "Videomaker", src: "/images/projeto-dj.jpg" },
  { id: 3, name: "Conteúdo mensal", type: "Social Media", src: "/images/projeto-social.jpg" },
  { id: 4, name: "Cobertura de evento", type: "Videomaker", src: "/images/projeto-video.jpg" },
];

export const EASE = [0.22, 1, 0.36, 1] as const;
