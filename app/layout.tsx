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

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://agenciastartin.com.br"),
  title: "Agência Startin | Marketing Digital em Belo Horizonte",
  description:
    "Landing pages que vendem. Social media que cresce. Vídeo que marca. Agência de marketing digital em BH especializada em conversão.",
  keywords: [
    "agência de marketing BH",
    "landing page Belo Horizonte",
    "gestão de redes sociais BH",
    "videomaker BH",
    "marketing digital Belo Horizonte",
    "criação de site BH",
    "agência digital Belo Horizonte",
  ],
  openGraph: {
    title: "Agência Startin | Marketing Digital em Belo Horizonte",
    description:
      "Landing pages que vendem. Social media que cresce. Vídeo que marca. Agência de marketing digital em BH.",
    url: "https://agenciastartin.com.br",
    siteName: "Agência Startin",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "STARTIN — Landing Page, Videomaker e Gestão de Mídias Sociais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência Startin | Marketing Digital em Belo Horizonte",
    description:
      "Landing pages que vendem. Social media que cresce. Vídeo que marca.",
    images: ["/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://agenciastartin.com.br",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Agência Startin",
  url: "https://agenciastartin.com.br",
  telephone: "+55-31-98278-1618",
  sameAs: ["https://instagram.com/agenciastartin"],
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
  description:
    "Agência de marketing digital em Belo Horizonte especializada em landing pages, gestão de redes sociais e vídeos para artistas e eventos.",
  areaServed: {
    "@type": "City",
    name: "Belo Horizonte",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Marketing Digital",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Criação de Landing Page" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestão de Mídias Sociais" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Videomaker para Artistas e Eventos" } },
    ],
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
