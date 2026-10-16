import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => {
    const imageUrl = p.src.startsWith("http") ? p.src : `${baseUrl}${p.src}`;

    return {
      url: `${baseUrl}/projetos/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: [imageUrl],
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1.0,
      images: [`${baseUrl}/opengraph-image.jpg`],
    },
    ...projectRoutes,
  ];
}

