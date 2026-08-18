import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import { getOrganizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SS Traders — High-Grade Ferro Alloys, Non-Ferro Alloys & Crucibles",
  description:
    "Direct importers of high-grade ferro alloys, non-ferro alloys and premium crucibles in Lahore, Pakistan. Ready stock in warehouse.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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
