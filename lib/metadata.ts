import type { Metadata } from "next";
import { Product, siteInfo } from "@/data/products";

const CATEGORY_LABELS: Record<Product["category"], string> = {
  ferro: "Ferro Alloys",
  "non-ferro": "Non-Ferro Alloys",
  "master-alloys": "Master Alloys",
  metals: "Metals",
  fluxes: "Fluxes",
};

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 40 ? lastSpace : max)}…`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const ogImage = image ?? "/opengraph-image";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteInfo.name,
      type: "website",
      locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function buildProductMetadata(
  product: Product,
  categorySlug: string
): Metadata {
  const categoryLabel = CATEGORY_LABELS[product.category];
  const path = `/${categorySlug}/${product.slug}`;
  const title = `${product.name} — Buy in ${siteInfo.address.city}, Pakistan`;
  const description = truncate(
    `${product.note} Ready stock in ${siteInfo.address.city}, lab-tested with COA.`,
    160
  );
  const keywords = [
    product.name,
    categoryLabel,
    product.use,
    `${product.name} price in Pakistan`,
    `${product.name} supplier ${siteInfo.address.city}`,
    siteInfo.address.city,
    "Pakistan",
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${product.name} | ${siteInfo.name}`,
      description,
      url: path,
      siteName: siteInfo.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: product.photo,
          width: 800,
          height: 800,
          alt: `${product.name} — ${siteInfo.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${siteInfo.name}`,
      description,
      images: [product.photo],
    },
  };
}
