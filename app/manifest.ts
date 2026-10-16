import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Agência Startin | Marketing Digital em Belo Horizonte",
    short_name: "Startin",
    description:
      "Agência de marketing digital especializada em landing pages de alta conversão, gestão de redes sociais e produção audiovisual em Belo Horizonte.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/opengraph-image.jpg",
        sizes: "1200x630",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
