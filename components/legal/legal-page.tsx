import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { WhatsappLink } from "@/components/ui/whatsapp-link";
import { legalUpdatedAt, siteConfig } from "@/lib/constants";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

/** Parágrafo padrão das páginas legais. */
export function P({ children }: { children: ReactNode }) {
  return <p className="text-zinc-400 leading-relaxed">{children}</p>;
}

/** Lista padrão das páginas legais. */
export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2 text-zinc-400 leading-relaxed list-disc pl-5 marker:text-zinc-600">
      {children}
    </ul>
  );
}

/** Link de contato (WhatsApp) com rastreamento. */
export function ContactLink({ children }: { children?: ReactNode }) {
  return (
    <WhatsappLink
      source="legal"
      className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
    >
      {children ?? siteConfig.whatsappDisplay}
    </WhatsappLink>
  );
}

interface LegalPageProps {
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
  /** Link para a outra página legal, exibido no final. */
  other: { href: string; label: string };
}

export function LegalPage({ title, intro, sections, other }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Voltar ao site</span>
          </Link>
          <Link
            href="/"
            className="font-heading font-extrabold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            STARTIN
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24 md:pt-24">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-zinc-500">
          Atualizado em {legalUpdatedAt}
        </p>
        <h1 className="mt-4 font-heading font-extrabold tracking-tight text-[clamp(2.2rem,6vw,4rem)] leading-[1.05]">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-lg text-zinc-300 leading-relaxed">{intro}</div>

        <nav aria-label="Índice" className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500">Nesta página</p>
          <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-zinc-400 hover:text-white transition-colors">
                  <span className="text-zinc-600 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ml-3">{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-16 space-y-14">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight">
                <span className="mr-3 text-zinc-600 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              {s.content}
            </section>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <Link href={other.href} className="text-zinc-300 hover:text-white transition-colors">
            {other.label} →
          </Link>
        </div>
      </main>
    </div>
  );
}
