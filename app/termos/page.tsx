import type { Metadata } from "next";
import Link from "next/link";
import { ContactLink, LegalPage, P, UL, type LegalSection } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/constants";

const url = `${siteConfig.url}/termos`;

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições de uso do site e de contratação dos serviços da Agência Startin: landing pages, gestão de mídias sociais e videomaker.",
  alternates: { canonical: url, languages: { "pt-BR": url } },
  openGraph: {
    title: "Termos de Uso | Agência Startin",
    description: "Condições de uso do site e de contratação dos serviços da Agência Startin.",
    url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image.jpg", width: 1376, height: 768, alt: siteConfig.name }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image.jpg"] },
  robots: { index: true, follow: true },
};

const link = "text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors";

const sections: LegalSection[] = [
  {
    id: "aceitacao",
    title: "Aceitação",
    content: (
      <P>
        Ao acessar {siteConfig.url} ou entrar em contato com a {siteConfig.name}, você concorda com estes Termos e com a{" "}
        <Link href="/privacidade" className={link}>
          Política de Privacidade
        </Link>
        . Se não concordar, não utilize o site.
      </P>
    ),
  },
  {
    id: "o-que-fazemos",
    title: "O que o site e a Startin oferecem",
    content: (
      <>
        <P>
          O site apresenta a {siteConfig.name}, agência de marketing digital de {siteConfig.location}, e seus serviços:
        </P>
        <UL>
          <li>criação de landing pages e sites;</li>
          <li>gestão de mídias sociais;</li>
          <li>videomaker para artistas e eventos.</li>
        </UL>
        <P>
          O conteúdo do site é informativo e não é uma oferta vinculante. Os serviços só são contratados depois que você e a
          Startin aceitam uma proposta, por escrito (inclusive por WhatsApp ou e-mail).
        </P>
      </>
    ),
  },
  {
    id: "contratacao",
    title: "Contratação, escopo e pagamento",
    content: (
      <>
        <P>
          O escopo, os prazos, o valor, a forma de pagamento e as condições de cancelamento de cada serviço ficam na
          proposta ou no contrato aceito por você. Em caso de divergência, o que foi acordado por escrito para aquele
          serviço prevalece sobre estes Termos.
        </P>
        <P>
          Pedidos fora do escopo combinado podem gerar novo orçamento e alterar o prazo. Prazos de entrega dependem do envio
          dos materiais e das aprovações pelo cliente nos tempos combinados.
        </P>
      </>
    ),
  },
  {
    id: "responsabilidades-cliente",
    title: "Responsabilidades do cliente",
    content: (
      <UL>
        <li>fornecer, no prazo, textos, imagens, vídeos, acessos e informações necessários ao projeto;</li>
        <li>
          garantir que tem direitos sobre o material enviado (imagens, músicas, marcas, depoimentos) e as autorizações de uso
          de imagem das pessoas que aparecem nele;
        </li>
        <li>revisar e aprovar as entregas nos prazos combinados;</li>
        <li>
          cumprir as regras da sua atividade e das plataformas utilizadas (por exemplo, normas de publicidade do seu
          setor, políticas do Instagram, do Facebook e do Google).
        </li>
      </UL>
    ),
  },
  {
    id: "propriedade-intelectual",
    title: "Propriedade intelectual",
    content: (
      <>
        <P>
          O site, a marca {siteConfig.name}, os textos, o layout e os materiais próprios da Startin são protegidos por lei e
          não podem ser copiados ou reutilizados sem autorização.
        </P>
        <P>
          Sobre os trabalhos feitos para clientes, os direitos de uso das entregas finais passam ao cliente depois da
          quitação integral dos valores, nos termos do contrato. A Startin mantém a titularidade de ferramentas, códigos,
          modelos e métodos próprios. Salvo combinação contrária, a Startin pode citar o projeto e exibir o resultado em seu
          portfólio e redes sociais; se você não quiser isso, avise antes da contratação.
        </P>
      </>
    ),
  },
  {
    id: "resultados",
    title: "Sem garantia de resultado específico",
    content: (
      <P>
        Trabalhamos para que páginas, conteúdos e vídeos tenham o melhor desempenho possível, mas resultados comerciais
        (vendas, seguidores, alcance, faturamento, agendamentos) dependem de fatores fora do nosso controle, como mercado,
        oferta, investimento em anúncios, concorrência e algoritmos de plataformas. Os cases e números exibidos no site são
        exemplos de projetos específicos e não garantem resultado igual para outros clientes.
      </P>
    ),
  },
  {
    id: "uso-adequado",
    title: "Uso adequado do site",
    content: (
      <>
        <P>Ao usar o site, você se compromete a não:</P>
        <UL>
          <li>tentar acessar áreas restritas, derrubar ou sobrecarregar o site, ou explorar falhas de segurança;</li>
          <li>usar robôs ou coletores automáticos de conteúdo sem autorização;</li>
          <li>usar o contato do WhatsApp para spam, ofensas ou conteúdo ilegal.</li>
        </UL>
      </>
    ),
  },
  {
    id: "responsabilidade",
    title: "Limites de responsabilidade",
    content: (
      <>
        <P>
          Nos esforçamos para manter o site no ar e as informações corretas, mas não garantimos que ele estará sempre
          disponível ou livre de erros. Não nos responsabilizamos por indisponibilidade, mudanças de regras ou bloqueios de
          plataformas de terceiros (Meta, Google, WhatsApp, redes de anúncios, hospedagens), nem pelo conteúdo de sites
          externos para os quais o site tenha links.
        </P>
        <P>
          Nada nestes Termos exclui direitos que a lei garanta a você, inclusive os previstos no Código de Defesa do
          Consumidor, quando aplicável.
        </P>
      </>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações destes Termos",
    content: (
      <P>
        Podemos atualizar estes Termos a qualquer momento. A versão vigente é a publicada nesta página, com a data da última
        revisão no topo. Contratos já firmados continuam regidos pelo que foi acordado neles.
      </P>
    ),
  },
  {
    id: "lei-e-foro",
    title: "Lei aplicável e foro",
    content: (
      <P>
        Estes Termos são regidos pelas leis do Brasil. Fica eleito o foro da comarca de Belo Horizonte, MG, para resolver
        eventuais conflitos, ressalvado o direito do consumidor de ajuizar ação no foro do seu domicílio, quando a lei
        assim garantir.
      </P>
    ),
  },
  {
    id: "contato",
    title: "Contato",
    content: (
      <P>
        Dúvidas sobre estes Termos? Fale com a gente pelo WhatsApp <ContactLink /> ou pelo Instagram{" "}
        <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className={link}>
          {siteConfig.instagramHandle}
        </a>
        .
      </P>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      intro={
        <p>
          Regras simples para usar o site e contratar a Startin: o que oferecemos, o que esperamos de você e como cuidamos de
          propriedade intelectual, resultados e responsabilidades.
        </p>
      }
      sections={sections}
      other={{ href: "/privacidade", label: "Política de Privacidade" }}
    />
  );
}
