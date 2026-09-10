import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { metals, siteInfo } from "@/data/products";
import { getBreadcrumbSchema, getItemListSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = buildPageMetadata({
  title: `Pure Metals Supplier in ${siteInfo.address.city}, Pakistan`,
  description: `Pure elemental ingots for foundry alloying and electroplating — Silicon Metal 553, Nickel, Tin, Zinc, Magnesium, Cadmium. Ready stock in ${siteInfo.address.city}.`,
  path: "/metals",
  image: metals[0].photo,
});

const faqs = [
  {
    question: "What materials are available in your Metals range?",
    answer:
      "Pure elemental ingots and lumps for foundry alloying and electroplating. Silicon Metal 553, Nickel, Tin, Zinc, Magnesium, Cadmium.",
  },
  {
    question: "What is the current availability for Metals?",
    answer: "6 pure elements in stock.",
  },
];

export default function MetalsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Metals", url: "/metals" },
  ]);
  const itemListSchema = getItemListSchema(
    metals.map((p) => ({ name: p.name, url: `/metals/${p.slug}` })),
    "Metals",
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* HERO SECTION */}
      <div
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "52px 40px 44px",
        }}
      >
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <Link
            href="/"
            style={{
              font: "600 10px/1 'Barlow',sans-serif",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--color-accent-400)",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <span
            style={{
              color: "var(--color-accent-400)",
              font: "10px/1 'Barlow',sans-serif",
            }}
          >
            /
          </span>
          <span
            style={{
              font: "600 10px/1 'Barlow',sans-serif",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            Metals
          </span>
        </div>
        <h1
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "64px",
            lineHeight: ".92",
            margin: "0 0 18px",
            textTransform: "uppercase",
          }}
        >
          Pure metal
          <br />
          ingots &amp; elements
        </h1>
        <p
          style={{
            font: "400 17px/1.5 'Barlow',sans-serif",
            color: "#d4d4d5",
            margin: "0 0 28px",
            maxWidth: "600px",
            textWrap: "pretty",
          }}
        >
          Pure element ingots and lumps for foundry alloying, electroplating,
          and chemical formulations. Silicon Metal 553, Nickel, Tin, Zinc,
          Magnesium, and Cadmium.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam,%20ma%20apki%20website%20pa%20Pure%20metals%20dekh%20rha%20tha,%20muja%20iska%20rate%20bta%20dein.`}
            className="btn btn-white"
            style={{
              font: "700 14px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              padding: "16px 26px",
              textDecoration: "none",
            }}
          >
            WhatsApp for rates
          </a>
          <a
            href={`tel:${siteInfo.phoneRaw}`}
            className="btn btn-secondary"
            style={{
              font: "700 14px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              padding: "16px 24px",
              textDecoration: "none",
            }}
          >
            Call now
          </a>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div style={{ background: "var(--color-bg)", padding: "44px 40px 52px" }}>
        <div
          style={{
            font: "600 10.5px/1 'Barlow',sans-serif",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--color-neutral-600)",
            marginBottom: "8px",
          }}
        >
          {metals.length} elemental metals available
        </div>
        <h2
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "42px",
            lineHeight: "1",
            margin: "0 0 28px",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Pure Metal Products
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {metals.map((p, i) => (
            <div
              key={i}
              className="blueprint"
              style={{
                border: "1px solid var(--color-accent-300)",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <i className="corner tl"></i>
              <i className="corner tr"></i>
              <i className="corner bl"></i>
              <i className="corner br"></i>
              <Link
                href={`/metals/${p.slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    borderBottom: "1px solid var(--color-accent-300)",
                    position: "relative",
                  }}
                >
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: p.status.includes("[confirm]")
                        ? "#d97706"
                        : "var(--color-accent)",
                      color: "#fff",
                      font: "600 10px/1 'Barlow',sans-serif",
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                      padding: "6px 10px",
                    }}
                  >
                    {p.status}
                  </span>
                </div>
              </Link>
              <div
                style={{
                  padding: "20px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Link
                    href={`/metals/${p.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontWeight: 800,
                        fontSize: "26px",
                        lineHeight: "1.05",
                        margin: "0 0 6px",
                        textTransform: "uppercase",
                        color: "var(--color-accent)",
                      }}
                    >
                      {p.name}
                    </h3>
                  </Link>
                  <div
                    style={{
                      font: "400 13.5px/1.4 'Barlow',sans-serif",
                      color: "var(--color-neutral-600)",
                      marginBottom: "14px",
                    }}
                  >
                    {p.use}
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid var(--color-bg)",
                      borderBottom: "1px solid var(--color-bg)",
                      padding: "10px 0",
                      marginBottom: "16px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                    }}
                  >
                    {p.specs.map((s, j) => (
                      <div key={j}>
                        <div
                          style={{
                            font: "400 11px/1 'Barlow',sans-serif",
                            color: "var(--color-neutral-600)",
                          }}
                        >
                          {s.k}
                        </div>
                        <div
                          style={{
                            font: "600 13px/1.2 'Barlow',sans-serif",
                            color: s.v.includes("[confirm]")
                              ? "#d97706"
                              : "var(--color-accent)",
                          }}
                        >
                          {s.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <a
                    href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam,%20ma%20apki%20website%20pa%20${p.name}%20dekh%20rha%20tha,%20muja%20iska%20rate%20bta%20dein.`}
                    style={{
                      flex: 1,
                      background: "var(--color-accent)",
                      color: "#fff",
                      font: "700 13px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      padding: "12px",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    Order on WhatsApp
                  </a>
                  <Link
                    href={`/metals/${p.slug}`}
                    style={{
                      border: "1px solid var(--color-accent)",
                      color: "var(--color-accent)",
                      font: "700 13px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      padding: "12px 14px",
                      textDecoration: "none",
                    }}
                  >
                    View Specs
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQSection faqs={faqs} />
    </>
  );
}
