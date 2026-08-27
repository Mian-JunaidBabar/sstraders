import type { MetadataRoute } from "next";
import {
  siteInfo,
  ferro,
  nonferro,
  masterAlloys,
  metals,
  fluxes,
} from "@/data/products";

const categories = [
  { slug: "ferro-alloys", items: ferro },
  { slug: "non-ferro-alloys", items: nonferro },
  { slug: "master-alloys", items: masterAlloys },
  { slug: "metals", items: metals },
  { slug: "fluxes", items: fluxes },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteInfo.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteInfo.url}/graphite-crucibles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteInfo.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteInfo.url}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${siteInfo.url}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = categories.flatMap((c) =>
    c.items.map((p) => ({
      url: `${siteInfo.url}/${c.slug}/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...categoryPages, ...productPages];
}
