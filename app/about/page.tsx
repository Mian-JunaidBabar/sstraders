import Link from "next/link";
import type { Metadata } from "next";
import { pillars, proof, siteInfo, yearsInTrade } from "@/data/products";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: `About Us — Metal Trading Company in ${siteInfo.address.city}`,
  description: `${siteInfo.name} has supplied ferro alloys, non-ferro alloys and crucibles to foundries across Pakistan since ${siteInfo.foundingYear}. Direct importers, lab-tested stock, documentation with every quotation.`,
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "56px 40px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            font: "600 10.5px/1 'Barlow',sans-serif",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--color-accent-400)",
            marginBottom: "22px",
          }}
        >
          <Link
            href="/"
            style={{ color: "var(--color-accent-400)", textDecoration: "none" }}
          >
            Home
          </Link>
          <span>/</span>
          <span style={{ color: "#fff" }}>About us</span>
        </div>
        <h1
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "72px",
            lineHeight: ".92",
            margin: "0 0 20px",
            textTransform: "uppercase",
            maxWidth: "900px",
          }}
        >
          A name you can trust in the metal industry
        </h1>
        <p
          style={{
            font: "400 18px/1.5 'Barlow',sans-serif",
            color: "#d4d4d5",
            margin: 0,
            maxWidth: "720px",
            textWrap: "pretty",
          }}
        >
          A {siteInfo.address.city}-based trading company specialised in
          high-grade ferro alloys, non-ferro alloys and crucibles. We serve as
          the backbone for manufacturers across Pakistan — from small casting
          units to large-scale factories, we fulfil the casting needs of all.
        </p>
      </div>

      <div
        style={{
          background: "var(--color-surface)",
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          borderBottom: "1px solid var(--color-accent-300)",
        }}
      >
        <div
          style={{
            padding: "26px 30px",
            borderRight: "1px solid var(--color-accent-300)",
          }}
        >
          <div
            style={{
              font: "800 42px/1 'Barlow Condensed',sans-serif",
              color: "var(--color-accent)",
            }}
          >
            {yearsInTrade}
          </div>
          <div
            style={{
              font: "400 10.5px/1.3 'Barlow',sans-serif",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginTop: "8px",
            }}
          >
            Years in the trade
          </div>
        </div>
        <div
          style={{
            padding: "26px 30px",
            borderRight: "1px solid var(--color-accent-300)",
          }}
        >
          <div
            style={{
              font: "800 42px/1 'Barlow Condensed',sans-serif",
              color: "var(--color-accent)",
            }}
          >
            15
          </div>
          <div
            style={{
              font: "400 10.5px/1.3 'Barlow',sans-serif",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginTop: "8px",
            }}
          >
            Grades held in stock
          </div>
        </div>
        <div
          style={{
            padding: "26px 30px",
            borderRight: "1px solid var(--color-accent-300)",
          }}
        >
          <div
            style={{
              font: "800 42px/1 'Barlow Condensed',sans-serif",
              color: "var(--color-accent)",
            }}
          >
            4
          </div>
          <div
            style={{
              font: "400 10.5px/1.3 'Barlow',sans-serif",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginTop: "8px",
            }}
          >
            Casting types served
          </div>
        </div>
        <div style={{ padding: "26px 30px" }}>
          <div
            style={{
              font: "800 42px/1 'Barlow Condensed',sans-serif",
              color: "var(--color-accent)",
            }}
          >
            COA
          </div>
          <div
            style={{
              font: "400 10.5px/1.3 'Barlow',sans-serif",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginTop: "8px",
            }}
          >
            With every lot
          </div>
        </div>
      </div>

      <div
        style={{ background: "var(--color-surface)", padding: "48px 40px" }}
        className="md:grid md:grid-cols-2 md:gap-12 flex flex-col gap-8"
      >
        <div>
          <div
            style={{
              font: "600 10.5px/1 'Barlow',sans-serif",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "12px",
            }}
          >
            Why furnaces and foundries choose {siteInfo.name}
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "46px",
              lineHeight: ".98",
              margin: "0 0 16px",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            Availability is everything
          </h2>
          <p
            style={{
              font: "400 16px/1.55 'Barlow',sans-serif",
              color: "var(--color-text)",
              margin: "0 0 14px",
              textWrap: "pretty",
            }}
          >
            In the metal trade, availability is everything. We are direct
            importers and traders, which lets us offer the most competitive
            wholesale rates in the market and on-time availability of large
            quantities.
          </p>
          <p
            style={{
              font: "400 16px/1.55 'Barlow',sans-serif",
              color: "var(--color-text)",
              margin: "0 0 24px",
              textWrap: "pretty",
            }}
          >
            We know one bad batch of alloys can ruin your entire melt and damage
            your furnace. That is why quality is the priority: 100% purity, zero
            impurities, lab tested.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam,%20ma%20apki%20website%20dekh%20rha%20tha,%20muja%20rates%20bta%20dein.`}
              style={{
                background: "var(--color-accent)",
                color: "#fff",
                font: "700 14px/1 'Barlow Condensed',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                padding: "16px 26px",
                textDecoration: "none",
              }}
            >
              WhatsApp us
            </a>
            <a
              href={`tel:${siteInfo.phoneRaw}`}
              style={{
                border: "1px solid var(--color-accent)",
                color: "var(--color-accent)",
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
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}
          className="md:grid-cols-2"
        >
          {pillars.map((p, i) => (
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
                  font: "800 20px/1 'Barlow Condensed',sans-serif",
                  color: "var(--color-neutral-600)",
                  marginBottom: "12px",
                }}
              >
                {p.n}
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700,
                  fontSize: "21px",
                  lineHeight: "1.05",
                  margin: "0 0 8px",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                {p.t}
              </h3>
              <p
                style={{
                  font: "400 13.5px/1.5 'Barlow',sans-serif",
                  color: "var(--color-text)",
                  opacity: 0.8,
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                {p.b}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "48px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderBottom: "1px solid var(--color-accent-700)",
            paddingBottom: "14px",
            marginBottom: "26px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "40px",
              lineHeight: "1",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Paper you can check
          </h2>
          <span
            style={{
              font: "400 13px/1.4 'Barlow',sans-serif",
              color: "var(--color-accent-400)",
              maxWidth: "420px",
              textAlign: "right",
            }}
          >
            Documentation issued with every quotation.
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {proof.map((d, i) => (
            <div
              key={i}
              style={{
                border: "1px solid var(--color-neutral-600)",
                background:
                  "repeating-linear-gradient(45deg, var(--color-accent-800) 0 8px, var(--color-accent) 8px 16px)",
                aspectRatio: "4/3",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "16px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700,
                  fontSize: "19px",
                  lineHeight: "1.05",
                  textTransform: "uppercase",
                  marginBottom: "5px",
                }}
                dangerouslySetInnerHTML={{ __html: d.t }}
              ></div>
              <div
                style={{
                  font: "400 12.5px/1.4 'Barlow',sans-serif",
                  color: "var(--color-neutral-500)",
                }}
              >
                {d.b}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "var(--color-surface)",
          padding: "44px 40px 20px",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid var(--color-accent-300)",
            paddingBottom: "26px",
            marginBottom: "26px",
          }}
        >
          <div
            style={{
              font: "600 10.5px/1 'Barlow',sans-serif",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "16px",
            }}
          >
            What we supply for
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1px",
              background: "var(--color-accent-300)",
              border: "1px solid var(--color-accent-300)",
            }}
          >
            <div style={{ background: "#fff", padding: "22px" }}>
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: "26px",
                  lineHeight: "1",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                Aluminium casting
              </div>
            </div>
            <div style={{ background: "#fff", padding: "22px" }}>
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: "26px",
                  lineHeight: "1",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                Iron casting
              </div>
            </div>
            <div style={{ background: "#fff", padding: "22px" }}>
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: "26px",
                  lineHeight: "1",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                Cast iron
              </div>
            </div>
            <div style={{ background: "#fff", padding: "22px" }}>
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: "26px",
                  lineHeight: "1",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                Copper casting
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
