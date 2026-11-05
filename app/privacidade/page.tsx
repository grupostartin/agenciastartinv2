import type { Metadata } from "next";
import Link from "next/link";
import { ContactLink, LegalPage, P, UL, type LegalSection } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/constants";

const url = `${siteConfig.url}/privacidade`;

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Agência Startin coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
  alternates: { canonical: url, languages: { "pt-BR": url } },
  openGraph: {
    title: "Política de Privacidade | Agência Startin",
    description: "Como a Agência Startin trata seus dados pessoais, em conformidade com a LGPD.",
    url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image.jpg", width: 1376, height: 768, alt: siteConfig.name }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image.jpg"] },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "quem-somos",
    title: "Quem somos",
    content: (
      <>
        <P>
          A <strong className="text-white">{siteConfig.name}</strong> (&quot;Startin&quot;, &quot;nós&quot;) é uma agência de marketing
          digital de {siteConfig.location}, que atua com landing pages, gestão de mídias sociais e produção de vídeo.
          Para fins da Lei Geral de Proteção de Dados (LGPD), somos a controladora dos dados pessoais tratados neste
          site ({siteConfig.url}).
        </P>
        <P>
          Para falar sobre privacidade, use o WhatsApp <ContactLink /> ou o Instagram{" "}
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
          >
            {siteConfig.instagramHandle}
          </a>
          .
        </P>
      </>
    ),
  },
  {
    id: "dados-coletados",
    title: "Quais dados coletamos",
    content: (
      <>
        <P>Este site não possui cadastro, login nem formulários. Os dados que tratamos chegam de três formas:</P>
        <UL>
          <li>
            <strong className="text-white">Dados que você nos envia ao chamar no WhatsApp.</strong> Ao clicar em um botão
            de contato, você é levado ao WhatsApp com uma mensagem pré-preenchida. A partir daí, tratamos seu nome, seu
            número de telefone e o conteúdo da conversa (incluindo arquivos que você enviar).
          </li>
          <li>
            <strong className="text-white">Dados de navegação.</strong> Endereço IP, tipo de dispositivo e navegador,
            páginas acessadas, tempo de visita e origem do acesso. Esses dados são registrados pela infraestrutura de
            hospedagem para o funcionamento e a segurança do site e, se você aceitar os cookies de medição, também pelo
            Google Analytics e pelo Meta Pixel.
          </li>
          <li>
            <strong className="text-white">Sua escolha sobre cookies.</strong> Guardamos no seu navegador (localStorage) um
            registro de que você aceitou ou recusou os cookies de medição, para não perguntar de novo a cada visita.
          </li>
        </UL>
        <P>Não coletamos dados pessoais sensíveis por este site e não pedimos documentos, dados bancários ou senhas.</P>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "Para que usamos e em qual base legal",
    content: (
      <UL>
        <li>
          <strong className="text-white">Atender seu contato e elaborar propostas</strong> — procedimentos preliminares a um
          contrato, a seu pedido (art. 7º, V, da LGPD).
        </li>
        <li>
          <strong className="text-white">Executar e acompanhar os serviços contratados</strong> — execução de contrato (art. 7º,
          V).
        </li>
        <li>
          <strong className="text-white">Manter o site seguro e funcionando</strong> — legítimo interesse (art. 7º, IX).
        </li>
        <li>
          <strong className="text-white">Medir audiência e a eficácia das nossas campanhas</strong> — seu consentimento (art. 7º,
          I), dado pelo banner de cookies e revogável a qualquer momento.
        </li>
        <li>
          <strong className="text-white">Cumprir obrigações legais e fiscais</strong> e exercer direitos em processos — art. 7º, II
          e VI.
        </li>
      </UL>
    ),
  },
  {
    id: "cookies",
    title: "Cookies e tecnologias de medição",
    content: (
      <>
        <P>
          Só carregamos ferramentas de medição depois que você clica em <em>Aceitar</em> no aviso de cookies. Se você clicar
          em <em>Recusar</em>, elas não são carregadas.
        </P>
        <UL>
          <li>
            <strong className="text-white">Google Analytics 4</strong> — estatísticas de uso do site (páginas vistas, origem do
            tráfego, cliques no botão de WhatsApp).
          </li>
          <li>
            <strong className="text-white">Meta Pixel</strong> — mede o resultado de anúncios no Facebook e no Instagram e
            registra a conversão &quot;clique no WhatsApp&quot;.
          </li>
        </UL>
        <P>
          Para mudar de ideia, apague os dados do site no seu navegador: o aviso voltará a aparecer. Você também pode
          bloquear cookies nas configurações do navegador, mas isso não afeta as funções essenciais do site.
        </P>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "Com quem compartilhamos",
    content: (
      <>
        <P>Não vendemos seus dados. Eles podem ser tratados por prestadores que nos ajudam a operar:</P>
        <UL>
          <li>
            <strong className="text-white">Meta Platforms</strong> (WhatsApp, Instagram, Facebook e Meta Pixel), quando você
            conversa conosco ou interage com anúncios;
          </li>
          <li>
            <strong className="text-white">Google</strong> (Analytics), se você aceitar os cookies de medição;
          </li>
          <li>
            <strong className="text-white">Provedores de hospedagem e infraestrutura</strong> do site;
          </li>
          <li>
            <strong className="text-white">Autoridades públicas</strong>, quando houver obrigação legal ou ordem judicial.
          </li>
        </UL>
        <P>
          Alguns desses prestadores armazenam dados em servidores fora do Brasil. Nesses casos, a transferência
          internacional ocorre com base no art. 33 da LGPD, e damos preferência a fornecedores com padrões adequados de
          proteção.
        </P>
      </>
    ),
  },
  {
    id: "retencao",
    title: "Por quanto tempo guardamos",
    content: (
      <P>
        Mantemos os dados pelo tempo necessário para cumprir as finalidades acima. Conversas de atendimento sem contratação
        são guardadas pelo período necessário para acompanhar o contato; dados de clientes ficam durante o contrato e pelo
        prazo exigido por lei (por exemplo, fiscal e para defesa em processos). Depois disso, eliminamos ou anonimizamos os
        dados.
      </P>
    ),
  },
  {
    id: "seguranca",
    title: "Como protegemos seus dados",
    content: (
      <P>
        Usamos medidas técnicas e organizacionais razoáveis, como conexão segura (HTTPS), acesso restrito às contas que
        guardam dados e uso de plataformas reconhecidas. Nenhum sistema é totalmente imune a falhas; se ocorrer um incidente
        que possa causar risco relevante a você, comunicaremos você e a ANPD, conforme a lei.
      </P>
    ),
  },
  {
    id: "direitos",
    title: "Seus direitos",
    content: (
      <>
        <P>Pela LGPD (art. 18), você pode pedir, a qualquer momento:</P>
        <UL>
          <li>confirmação de que tratamos seus dados e acesso a eles;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;</li>
          <li>portabilidade dos dados;</li>
          <li>eliminação dos dados tratados com base no seu consentimento;</li>
          <li>informação sobre com quem compartilhamos seus dados;</li>
          <li>revogação do consentimento e informação sobre as consequências de não consentir.</li>
        </UL>
        <P>
          Faça o pedido pelo WhatsApp <ContactLink /> ou pelo Instagram. Podemos pedir uma confirmação de identidade e
          respondemos em até 15 dias. Se achar que seus dados foram tratados de forma inadequada, você também pode
          reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
        </P>
      </>
    ),
  },
  {
    id: "menores",
    title: "Crianças e adolescentes",
    content: (
      <P>
        Nossos serviços são voltados a empresas e profissionais e este site não é direcionado a menores de 18 anos. Se você
        acredita que uma criança ou adolescente nos enviou dados sem a autorização de um responsável, fale conosco para
        que possamos eliminá-los.
      </P>
    ),
  },
  {
    id: "terceiros",
    title: "Links e serviços de terceiros",
    content: (
      <P>
        O site contém links para WhatsApp, Instagram e sites de clientes. Esses serviços têm políticas de privacidade
        próprias, pelas quais não somos responsáveis. Recomendamos que você as leia.
      </P>
    ),
  },
  {
    id: "alteracoes",
    title: "Mudanças nesta política",
    content: (
      <P>
        Podemos atualizar esta política para refletir mudanças no site, nos serviços ou na lei. A data no topo da página
        mostra a última revisão. Alterações relevantes serão destacadas no site. Veja também os{" "}
        <Link href="/termos" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">
          Termos de Uso
        </Link>
        .
      </P>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      intro={
        <p>
          Sua privacidade importa. Aqui explicamos, sem juridiquês, quais dados tratamos neste site, para quê, com quem
          compartilhamos e como você exerce seus direitos pela LGPD (Lei nº 13.709/2018).
        </p>
      }
      sections={sections}
      other={{ href: "/termos", label: "Termos de Uso" }}
    />
  );
}
