import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/schema";
import { siteInfo } from "@/data/products";

const defaultTitle =
  "SS Traders — High-Grade Ferro Alloys, Non-Ferro Alloys & Crucibles";
const defaultDescription = `Direct importers of high-grade ferro alloys, non-ferro alloys, master alloys, pure metals and graphite crucibles in ${siteInfo.address.city}, Pakistan. Ready stock in warehouse, lab-tested with COA on every lot.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteInfo.name}`,
  },
  description: defaultDescription,
  keywords: [
    "ferro alloys Pakistan",
    "ferro alloys supplier Lahore",
    "non-ferro alloys Pakistan",
    "master alloys supplier",
    "graphite crucibles Pakistan",
    "foundry raw materials Lahore",
    "metal trading company Pakistan",
  ],
  applicationName: siteInfo.name,
  authors: [{ name: siteInfo.name, url: siteInfo.url }],
  category: "Foundry & Metal Trading",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: siteInfo.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  appleWebApp: {
    title: "SSTraders",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
      >
        <HeaderNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
