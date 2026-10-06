import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

import { siteConfig } from "@/lib/constants";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Agência Startin | Marketing Digital, Landing Pages e Vídeo em BH",
    template: "%s | Agência Startin",
  },
  description:
    "Agência de marketing digital em Belo Horizonte especializada em landing pages de alta conversão, gestão de redes sociais e produção audiovisual para artistas e marcas.",
  keywords: [
    "agência de marketing BH",
    "landing page Belo Horizonte",
    "criação de landing page BH",
    "gestão de redes sociais BH",
    "videomaker BH",
    "marketing digital Belo Horizonte",
    "criação de site BH",
    "desenvolvimento de sites BH",
    "agência digital Belo Horizonte",
    "produtora de vídeo BH",
    "otimização de conversão CRO",
    "tráfego e conversão BH",
  ],
  authors: [{ name: "Agência Startin", url: siteConfig.url }],
  creator: "Agência Startin",
  publisher: "Agência Startin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Agência Startin | Marketing Digital, Landing Pages e Vídeo em BH",
    description:
      "Landing pages que vendem. Social media que cresce. Vídeo que marca. Agência de marketing digital em BH com foco em conversão e autoridade.",
    url: siteConfig.url,
    siteName: "Agência Startin",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agência Startin — Landing Pages, Videomaker e Gestão de Mídias Sociais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência Startin | Marketing Digital em Belo Horizonte",
    description:
      "Landing pages que vendem. Social media que cresce. Vídeo que marca. Agência de marketing digital em BH.",
    images: ["/opengraph-image.jpg"],
    creator: "@agenciastartin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "Marketing Digital & Tecnologia",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "Agência Startin",
      description: "Agência de marketing digital em Belo Horizonte especializada em conversão.",
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": ["MarketingAgency", "ProfessionalService"],
      "@id": `${siteConfig.url}/#organization`,
      name: "Agência Startin",
      alternateName: ["Startin", "Grupo Startin"],
      url: siteConfig.url,
      logo: `${siteConfig.url}/opengraph-image.jpg`,
      image: `${siteConfig.url}/opengraph-image.jpg`,
      telephone: `+${siteConfig.whatsapp}`,
      sameAs: [siteConfig.instagram],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belo Horizonte",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -19.9167,
        longitude: -43.9345,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$",
      currenciesAccepted: "BRL",
      paymentAccepted: "Pix, Cartão de Crédito, Transferência Bancária",
      description:
        "Agência de marketing digital em Belo Horizonte especializada em landing pages de alta conversão, gestão de redes sociais e produção de vídeos dinâmicos.",
      areaServed: [
        {
          "@type": "City",
          name: "Belo Horizonte",
        },
        {
          "@type": "Country",
          name: "Brasil",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Marketing Digital",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Criação de Landing Page",
              description: "Páginas sob medida de alta velocidade e foco em conversão.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gestão de Mídias Sociais",
              description: "Planejamento, design de conteúdo e crescimento contínuo de audiência.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Videomaker para Artistas e Eventos",
              description: "Captação dinâmica, cobertura de shows e edição rítmica de alto impacto.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-black selection:bg-white selection:text-black">
        <LenisProvider>
          {children}
          <CustomCursor />
          <Analytics />
        </LenisProvider>
      </body>
    </html>
  );
}
