import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  FolderOpen,
  CheckCircle2,
  User,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";
import { projects, siteConfig, getWhatsappLink } from "@/lib/constants";
import { WhatsappLink } from "@/components/ui/whatsapp-link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | Agência Startin",
    };
  }

  return {
    title: `${project.name} | Portfólio Agência Startin`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | Case de Sucesso Startin`,
      description: project.summary,
      images: [
        {
          url: project.src,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Top sticky navigation bar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/#projetos"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Voltar aos Projetos</span>
          </Link>

          <Link
            href="/"
            className="font-heading font-extrabold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            STARTIN
          </Link>

          <WhatsappLink
            service={project.type}
            source="project_header"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-colors"
          >
            <span>Orçamento</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </WhatsappLink>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Breadcrumb & Case Code */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Início</Link>
          <ChevronRight className="w-3 h-3 text-zinc-600" />
          <Link href="/#projetos" className="hover:text-white transition-colors">Projetos</Link>
          <ChevronRight className="w-3 h-3 text-zinc-600" />
          <span className="text-white flex items-center gap-1.5 font-mono">
            <FolderOpen className="w-3.5 h-3.5 text-zinc-300" />
            {project.folderCode}
          </span>
        </div>

        {/* Hero title area */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.type}
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-950 border border-white/20 text-zinc-200 hover:text-white hover:border-white/40 transition-colors"
              >
                <span>{project.displayUrl}</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
            {project.name}
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed mb-6">
            {project.summary}
          </p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <span>Acessar site ao vivo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 mb-12">
          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">Cliente</span>
            <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-zinc-400" />
              {project.client}
            </span>
          </div>
          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">Serviço</span>
            <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              {project.type}
            </span>
          </div>
          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">Status</span>
            <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Entregue & Validado
            </span>
          </div>
        </div>

        {/* Featured Project Visual */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 mb-16 shadow-2xl bg-zinc-900">
          <Image
            src={project.src}
            alt={project.name}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md border border-white/10 text-white"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 mb-20">
          {/* Main Content (Challenge & Solution) */}
          <div className="lg:col-span-7 space-y-10">
            <section className="p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <h2 className="text-xs font-semibold text-zinc-400 tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                O Desafio
              </h2>
              <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                {project.challenge}
              </p>
            </section>

            <section className="p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <h2 className="text-xs font-semibold text-zinc-400 tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                A Solução da Agência Startin
              </h2>
              <p className="text-zinc-300 leading-relaxed text-base md:text-lg mb-6">
                {project.solution}
              </p>
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Escopo e Entregas:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar (Results & CTA) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Results card */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 tracking-[0.2em] uppercase mb-6">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Impacto & Resultados
              </div>
              <div className="space-y-4">
                {project.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/60 border border-white/5 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold text-white">
                      0{idx + 1}
                    </div>
                    <span className="text-sm font-medium text-white">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/15 text-center">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Quer um resultado como esse?
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Fale agora com nosso time e descubra como podemos aplicar a mesma estratégia para você.
              </p>
              <WhatsappLink
                service={project.type}
                source="project_detail_sidebar"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10"
              >
                <span>Solicitar projeto similar</span>
                <ArrowUpRight className="w-4 h-4" />
              </WhatsappLink>
            </div>
          </div>
        </div>

        {/* Browse Other Projects */}
        <section className="pt-12 border-t border-zinc-800">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-white">
              Outros Casos Arquivados
            </h2>
            <Link
              href="/#projetos"
              className="text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Ver todos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((item) => (
              <Link
                key={item.id}
                href={`/projetos/${item.slug}`}
                className="group relative rounded-2xl border border-white/10 bg-zinc-950 p-4 transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-zinc-900">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-black/70 backdrop-blur-sm border border-white/10 text-white">
                    {item.folderCode}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest block">
                      {item.type}
                    </span>
                    <h3 className="font-heading font-semibold text-sm text-white group-hover:text-zinc-200">
                      {item.name}
                    </h3>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Mini Footer */}
      <footer className="border-t border-zinc-900 py-10 mt-20 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
