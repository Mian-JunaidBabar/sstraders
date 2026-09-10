import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  cruciblePoints,
  crucibleSizes,
  crucibleSpecs,
  siteInfo,
} from "@/data/products";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = buildPageMetadata({
  title: `Graphite Crucibles Supplier in ${siteInfo.address.city}, Pakistan`,
  description: `Clay-graphite and silicon carbide crucibles, sizes #1 to #400, for aluminium, brass, copper and iron melting. Ready stock in ${siteInfo.address.city}, Pakistan.`,
  path: "/graphite-crucibles",
  image: "/products/graphite-crucible.webp",
});


const faqs = [
  {
    "question": "What materials are your crucibles made from?",
    "answer": "We supply clay graphite (up to 1400 °C for aluminium, brass, zinc) and silicon carbide (up to 1600 °C for copper, iron, steel)."
  },
  {
    "question": "What sizes are available?",
    "answer": "We stock sizes ranging from #4 (1.5 kg capacity) up to #500 (200 kg capacity)."
  }
];

export default function GraphiteCruciblesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Graphite Crucibles", url: "/graphite-crucibles" },
  ]);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteInfo.url}/graphite-crucibles/#product`,
    name: "Graphite Crucibles",
    description:
      "Clay-graphite and silicon carbide crucibles, sizes #1 to #400, built to bear extreme furnace heat without cracking.",
    image: `${siteInfo.url}/products/graphite-crucible.webp`,
    category: "Graphite Crucibles",
    brand: { "@type": "Brand", name: siteInfo.name },
    additionalProperty: crucibleSpecs.flatMap((g) =>
      g.rows.map((r) => ({
        "@type": "PropertyValue",
        name: `${g.title}: ${r.k}`,
        value: r.v,
      })),
    ),
    offers: {
      "@type": "AggregateOffer",
      url: `${siteInfo.url}/graphite-crucibles`,
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      offerCount: crucibleSizes.length,
      seller: { "@type": "Organization", name: siteInfo.name },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ borderBottom: "1px solid var(--color-accent)" }}
      >
        {/* HERO LEFT */}
        <div
          style={{
            background: "var(--color-accent)",
            color: "#fff",
            padding: "52px 40px 48px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              font: "400 11px/1 'Barlow',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--color-accent-400)",
              marginBottom: "20px",
            }}
          >
            <Link
              href="/"
              style={{
                color: "var(--color-accent-400)",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>Graphite Crucibles</span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "62px",
              lineHeight: ".92",
              margin: "0 0 18px",
              textTransform: "uppercase",
            }}
          >
            Graphite
            <br />
            crucibles
          </h1>
          <p
            style={{
              font: "400 17px/1.5 'Barlow',sans-serif",
              color: "#d4d4d5",
              margin: "0 0 24px",
              maxWidth: "480px",
              textWrap: "pretty",
            }}
          >
            Highest-grade crucibles designed to bear extreme furnace heat
            without cracking. Available in all sizes for your daily foundry and
            metal melting needs — small sizes for precious metals through heavy
            sizes for iron and aluminium foundries.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "9px",
              marginBottom: "28px",
              maxWidth: "420px",
            }}
          >
            {cruciblePoints.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "baseline",
                  borderBottom: "1px solid var(--color-accent-700)",
                  paddingBottom: "9px",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "none" }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span
                  style={{
                    font: "400 14.5px/1.35 'Barlow',sans-serif",
                    color: "#fff",
                  }}
                >
                  {c}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam.%20Crucibles%20size%20aur%20rate%20chahiye.`}
              style={{
                background: "#fff",
                color: "var(--color-accent)",
                font: "700 14px/1 'Barlow Condensed',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                padding: "16px 26px",
                textDecoration: "none",
              }}
            >
              WhatsApp for size &amp; price
            </a>
            <a
              href={`tel:${siteInfo.phoneRaw}`}
              style={{
                border: "1px solid var(--color-neutral-600)",
                color: "#fff",
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

        {/* HERO RIGHT */}
        <div
          className="relative flex items-center justify-center"
          style={{
            background: "#ffffff",
            overflow: "hidden",
            borderLeft: "1px solid var(--color-accent)",
            padding: "24px",
            minHeight: "400px",
          }}
        >
          <Image
            src="/products/graphite-crucibles-hero.webp"
            alt="Graphite Crucibles in all sizes - SS Traders"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              background: "var(--color-accent)",
              color: "#fff",
              padding: "7px 14px",
              font: "600 10.5px/1 'Barlow',sans-serif",
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            #1 – #400 Sizes in Stock
          </div>
        </div>
      </div>

      {/* TABLE AND SPECS */}
      <div style={{ background: "var(--color-bg)", padding: "44px 40px 52px" }}>
        <div
          style={{
            borderBottom: "1px solid var(--color-accent)",
            paddingBottom: "14px",
            marginBottom: "26px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                font: "600 10.5px/1 'Barlow',sans-serif",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "var(--color-neutral-600)",
                marginBottom: "10px",
              }}
            >
              Size chart
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: "42px",
                lineHeight: "1",
                margin: 0,
                textTransform: "uppercase",
                color: "var(--color-accent)",
              }}
            >
              Find your number
            </h2>
          </div>
          <p
            style={{
              font: "400 13.5px/1.5 'Barlow',sans-serif",
              color: "var(--color-text)",
              margin: 0,
              maxWidth: "420px",
              textAlign: "right",
            }}
          >
            Capacity is for aluminium at nominal fill. Multiply by roughly 2.6
            for brass and 3.0 for cast iron. Send us your furnace number and
            we&apos;ll confirm the fit.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              minWidth: "800px",
              background: "#fff",
              border: "1px solid var(--color-accent-300)",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ background: "var(--color-accent)", color: "#fff" }}>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    color: "#fff",
                    font: "600 10.5px/1 'Barlow',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "13px 16px",
                  }}
                >
                  Crucible no.
                </th>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    color: "#fff",
                    font: "600 10.5px/1 'Barlow',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "13px 16px",
                  }}
                >
                  Top dia.
                </th>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    color: "#fff",
                    font: "600 10.5px/1 'Barlow',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "13px 16px",
                  }}
                >
                  Height
                </th>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    color: "#fff",
                    font: "600 10.5px/1 'Barlow',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "13px 16px",
                  }}
                >
                  Aluminium capacity
                </th>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    color: "#fff",
                    font: "600 10.5px/1 'Barlow',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "13px 16px",
                  }}
                >
                  Typical use
                </th>
                <th
                  scope="col"
                  style={{
                    textAlign: "right",
                    color: "#fff",
                    font: "600 10.5px/1 'Barlow',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "13px 16px",
                  }}
                >
                  Order
                </th>
              </tr>
            </thead>
            <tbody>
              {crucibleSizes.map((c, i) => (
                <tr
                  key={i}
                  style={{ borderTop: "1px solid var(--color-surface)" }}
                >
                  <th
                    scope="row"
                    style={{
                      font: "700 17px/1 'Barlow Condensed',sans-serif",
                      color: "var(--color-accent)",
                      padding: "13px 16px",
                      textAlign: "left",
                      fontWeight: 700,
                    }}
                  >
                    {c.no}
                  </th>
                  <td
                    style={{
                      font: "400 14px/1.2 'Barlow',sans-serif",
                      color: "var(--color-text)",
                      padding: "13px 16px",
                    }}
                  >
                    {c.dia}
                  </td>
                  <td
                    style={{
                      font: "400 14px/1.2 'Barlow',sans-serif",
                      color: "var(--color-text)",
                      padding: "13px 16px",
                    }}
                  >
                    {c.h}
                  </td>
                  <td
                    style={{
                      font: "600 14px/1.2 'Barlow',sans-serif",
                      color: "var(--color-accent)",
                      padding: "13px 16px",
                    }}
                  >
                    {c.cap}
                  </td>
                  <td
                    style={{
                      font: "400 14px/1.2 'Barlow',sans-serif",
                      color: "var(--color-neutral-600)",
                      padding: "13px 16px",
                    }}
                  >
                    {c.use}
                  </td>
                  <td style={{ padding: "13px 16px", textAlign: "right" }}>
                    <a
                      href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam.%20Crucible%20No.%20${c.no}%20ka%20rate%20aur%20stock%20chahiye.`}
                      style={{
                        font: "700 11.5px/1 'Barlow Condensed',sans-serif",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--color-accent)",
                        borderBottom: "2px solid var(--color-accent)",
                        paddingBottom: "2px",
                        textDecoration: "none",
                      }}
                    >
                      Order
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{
            font: "400 12.5px/1.5 'Barlow',sans-serif",
            color: "var(--color-neutral-600)",
            margin: "14px 0 0",
          }}
        >
          Dimensions are typical for standard clay-graphite bilge shapes and
          vary by manufacturer — confirm on order. Sizes outside this chart, up
          to #400, are available.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[34px]"
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "34px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {crucibleSpecs.map((g, i) => (
            <div
              key={i}
              className="blueprint"
              style={{
                border: "1px solid var(--color-accent-300)",
                background: "#fff",
                padding: "20px",
                position: "relative",
              }}
            >
              <i className="corner tl"></i>
              <i className="corner tr"></i>
              <i className="corner bl"></i>
              <i className="corner br"></i>
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-600)",
                  marginBottom: "12px",
                }}
              >
                {g.kicker}
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  lineHeight: "1",
                  margin: "0 0 12px",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                {g.title}
              </h3>
              {g.rows.map((s, j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "8px 0",
                    borderBottom: "1px solid var(--color-bg)",
                  }}
                >
                  <span
                    style={{
                      font: "400 12.5px/1.3 'Barlow',sans-serif",
                      color: "var(--color-neutral-600)",
                    }}
                  >
                    {s.k}
                  </span>
                  <span
                    style={{
                      font: "600 13px/1.3 'Barlow',sans-serif",
                      color: "var(--color-accent)",
                      textAlign: "right",
                    }}
                  >
                    {s.v}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <FAQSection faqs={faqs} />
    </>
  );
}
