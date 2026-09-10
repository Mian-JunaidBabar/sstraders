import Link from "next/link";
import Image from "next/image";
import {
  siteInfo,
  ranges,
  board,
  promises,
  ferro,
  nonferro,
  masterAlloys,
  metals,
  fluxes,
  yearsInTrade,
} from "@/data/products";
import { getBreadcrumbSchema } from "@/lib/schema";
import HeroCarousel from "@/components/HeroCarousel";

// Title, description, canonical and OG/Twitter tags for "/" are inherited
// from the root layout's default metadata — no override needed here.

export default function HomePage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: "Home", url: "/" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* DESKTOP HERO */}
      <div className="hidden md:block">
        <div
          style={{
            background: "var(--color-accent)",
            color: "#fff",
            padding: "40px 40px 36px",
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: "36px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ marginBottom: "16px" }}>
                <span className="hero-logo-shine">SS Traders!</span>
              </div>
              <div
                style={{
                  font: "600 10.5px/1 'Barlow',sans-serif",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-400)",
                  marginBottom: "14px",
                }}
              >
                Ferro Alloys · Non-Ferro Alloys · Crucibles
              </div>
              <h1
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(42px, 5.2vw, 68px)",
                  lineHeight: ".92",
                  margin: "0 0 16px",
                  textTransform: "uppercase",
                  letterSpacing: "-.01em",
                }}
              >
                Pure materials
                <br />
                for perfect
                <br />
                casting.
              </h1>
              <p
                style={{
                  font: "400 16px/1.5 'Barlow',sans-serif",
                  color: "#d4d4d5",
                  margin: "0 0 20px",
                  maxWidth: "500px",
                  textWrap: "pretty",
                }}
              >
                A {siteInfo.address.city}-based trading company specialised in
                high-grade ferro alloys, non-ferro alloys and crucibles. We are
                the backbone for manufacturers across Pakistan — aluminium,
                iron, cast iron and copper casting.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                }}
              >
                <a
                  href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam,%20ma%20apki%20website%20dekh%20rha%20tha,%20muja%20rates%20bta%20dein.`}
                  className="btn btn-whatsapp"
                  style={{
                    padding: "14px 22px",
                    font: "700 13.5px/1 'Barlow Condensed',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    borderRadius: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="#ffffff"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  <span>WhatsApp for today&apos;s rate</span>
                </a>
                <a
                  href={`tel:${siteInfo.phoneRaw}`}
                  className="btn btn-secondary"
                  style={{
                    padding: "14px 18px",
                    font: "700 13px/1 'Barlow Condensed',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    borderRadius: 0,
                    color: "#fff",
                    borderColor: "var(--color-neutral-600)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {siteInfo.phone}
                </a>
              </div>
            </div>

            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t"
              style={{
                borderColor: "var(--color-accent-700)",
              }}
            >
              <div>
                <div
                  style={{
                    font: "800 26px/1 'Barlow Condensed',sans-serif",
                    color: "#fff",
                  }}
                >
                  {yearsInTrade}
                </div>
                <div
                  style={{
                    font: "400 10px/1.3 'Barlow',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-400)",
                    marginTop: "4px",
                  }}
                >
                  Years in trade
                </div>
              </div>
              <div>
                <div
                  style={{
                    font: "800 26px/1 'Barlow Condensed',sans-serif",
                    color: "#fff",
                  }}
                >
                  15
                </div>
                <div
                  style={{
                    font: "400 10px/1.3 'Barlow',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-400)",
                    marginTop: "4px",
                  }}
                >
                  Grades stocked
                </div>
              </div>
              <div>
                <div
                  style={{
                    font: "800 26px/1 'Barlow Condensed',sans-serif",
                    color: "#fff",
                  }}
                >
                  4
                </div>
                <div
                  style={{
                    font: "400 10px/1.3 'Barlow',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-400)",
                    marginTop: "4px",
                  }}
                >
                  Casting types served
                </div>
              </div>
              <div>
                <div
                  style={{
                    font: "800 26px/1 'Barlow Condensed',sans-serif",
                    color: "#fff",
                  }}
                >
                  COA
                </div>
                <div
                  style={{
                    font: "400 10px/1.3 'Barlow',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-400)",
                    marginTop: "4px",
                  }}
                >
                  With every lot
                </div>
              </div>
            </div>
          </div>

          <div
            className="blueprint plate"
            style={{
              border: "1px solid var(--color-accent-800)",
              position: "relative",
              height: "100%",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <i className="corner tl"></i>
            <i className="corner tr"></i>
            <i className="corner bl"></i>
            <i className="corner br"></i>
            <HeroCarousel
              slides={ranges.map((r) => ({
                photo: r.photo,
                title: r.title,
                kicker: r.kicker,
              }))}
            />
          </div>
        </div>
      </div>

      {/* MOBILE HERO */}
      <div
        className="md:hidden"
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "32px 16px 28px",
        }}
      >
        <div style={{ marginBottom: "14px" }}>
          <span className="hero-logo-shine hero-logo-shine-mobile">
            SS Traders!
          </span>
        </div>
        <div
          style={{
            font: "600 9.5px/1 'Barlow',sans-serif",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--color-accent-400)",
            marginBottom: "14px",
          }}
        >
          Ferro · Non-ferro · Crucibles
        </div>
        <h1
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "48px",
            lineHeight: ".92",
            margin: "0 0 16px",
            textTransform: "uppercase",
          }}
        >
          Pure materials
          <br />
          for perfect
          <br />
          casting.
        </h1>
        <p
          style={{
            font: "400 15px/1.5 'Barlow',sans-serif",
            color: "#d4d4d5",
            margin: "0 0 22px",
            textWrap: "pretty",
          }}
        >
          A {siteInfo.address.city}-based trading company specialised in
          high-grade ferro alloys, non-ferro alloys and crucibles. Serving
          manufacturers across Pakistan.
        </p>
        <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
          <a
            href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam,%20ma%20apki%20website%20dekh%20rha%20tha,%20muja%20rates%20bta%20dein.`}
            className="btn btn-whatsapp"
            style={{
              flex: 1,
              padding: "14px 12px",
              font: "700 14px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              borderRadius: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <svg width="17" height="17" viewBox="0 0 16 16" fill="#ffffff">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            <span>WhatsApp rates</span>
          </a>
          <a
            href={`tel:${siteInfo.phoneRaw}`}
            className="btn btn-secondary"
            style={{
              flex: "none",
              font: "700 14px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              padding: "14px 20px",
              borderRadius: 0,
              textDecoration: "none",
            }}
          >
            Call
          </a>
        </div>
      </div>

      {/* TICKER */}
      <div
        style={{
          background: "var(--color-accent-100)",
          borderBottom: "1px solid var(--color-accent)",
          padding: "18px 0",
          overflow: "hidden",
          display: "flex",
          whiteSpace: "nowrap",
        }}
      >
        <div className="tickrow">
          <div
            style={{
              display: "flex",
              gap: "48px",
              paddingRight: "48px",
              font: "700 18px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            <span>FeSi 72% — Stock updated</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
            <span>Silicon Metal 553 — Arrived</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
            <span>Crucibles #1 to #400 — Ready</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
            <span>AlSi 50/50 — Fresh arrival</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
            <span>FeMn 75% — In warehouse</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "48px",
              paddingRight: "48px",
              font: "700 18px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            <span>FeSi 72% — Stock updated</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
            <span>Silicon Metal 553 — Arrived</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
            <span>Crucibles #1 to #400 — Ready</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
            <span>AlSi 50/50 — Fresh arrival</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
            <span>FeMn 75% — In warehouse</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
          </div>
        </div>
      </div>

      {/* RANGES SECTION */}
      <div style={{ background: "var(--color-bg)", padding: "44px 40px 52px" }}>
        <div
          style={{
            font: "600 10.5px/1 'Barlow',sans-serif",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--color-neutral-700)",
            marginBottom: "8px",
          }}
        >
          01 · Products we import
        </div>
        <h2
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "44px",
            lineHeight: "1",
            margin: "0 0 28px",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Our ranges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ranges.map((r, i) => {
            const rangeHref =
              r.title === "Ferro Alloys"
                ? "/ferro-alloys"
                : r.title === "Non-Ferro Alloys"
                  ? "/non-ferro-alloys"
                  : r.title === "Master Alloys"
                    ? "/master-alloys"
                    : r.title === "Metals"
                      ? "/metals"
                      : r.title === "Fluxes"
                        ? "/fluxes"
                        : "/graphite-crucibles";

            return (
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
                <div
                  style={{
                    height: "220px",
                    overflow: "hidden",
                    borderBottom: "1px solid var(--color-accent-300)",
                    position: "relative",
                  }}
                >
                  <Image
                    src={r.photo}
                    alt={r.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                      background: "var(--color-accent)",
                      color: "#fff",
                      font: "600 10px/1 'Barlow',sans-serif",
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                      padding: "6px 10px",
                    }}
                  >
                    {r.kicker}
                  </span>
                </div>
                <div
                  style={{
                    padding: "24px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: "32px",
                      lineHeight: "1",
                      margin: "0 0 10px",
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      font: "400 14.5px/1.55 'Barlow',sans-serif",
                      color: "var(--color-text)",
                      margin: "0 0 18px",
                      flex: 1,
                      textWrap: "pretty",
                    }}
                  >
                    {r.body}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "20px",
                    }}
                  >
                    {r.chips.map((c, j) => (
                      <span
                        key={j}
                        style={{
                          border: "1px solid var(--color-accent-300)",
                          font: "600 10px/1 'Barlow',sans-serif",
                          letterSpacing: ".1em",
                          textTransform: "uppercase",
                          padding: "5px 8px",
                          color: "var(--color-neutral-700)",
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={rangeHref}
                    style={{
                      background: "var(--color-accent)",
                      color: "#fff",
                      font: "700 13px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: "14px",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    View full {r.title} range →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* READY STOCK BOARD */}
      <div
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "48px 40px",
        }}
      >
        <div
          style={{
            font: "600 10.5px/1 'Barlow',sans-serif",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--color-accent-400)",
            marginBottom: "8px",
          }}
        >
          02 · Live inventory position
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderBottom: "1px solid var(--color-accent-700)",
            paddingBottom: "16px",
            marginBottom: "28px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "44px",
              lineHeight: "1",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Ready stock in warehouse
          </h2>
          <span
            style={{
              font: "400 13.5px/1 'Barlow',sans-serif",
              color: "var(--color-accent-400)",
            }}
          >
            Updated weekly · Direct import
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {board.map((b, i) => {
            const foundFerro = ferro.find(
              (p) => p.name === b.name || p.name.startsWith(b.name),
            );
            const foundNonFerro = nonferro.find(
              (p) => p.name === b.name || p.name.startsWith(b.name),
            );
            const foundMaster = masterAlloys.find(
              (p) => p.name === b.name || p.name.startsWith(b.name),
            );
            const foundMetal = metals.find(
              (p) => p.name === b.name || p.name.startsWith(b.name),
            );
            const foundFlux = fluxes.find(
              (p) => p.name === b.name || p.name.startsWith(b.name),
            );
            const productUrl = foundFerro
              ? `/ferro-alloys/${foundFerro.slug}`
              : foundNonFerro
                ? `/non-ferro-alloys/${foundNonFerro.slug}`
                : foundMaster
                  ? `/master-alloys/${foundMaster.slug}`
                  : foundMetal
                    ? `/metals/${foundMetal.slug}`
                    : foundFlux
                      ? `/fluxes/${foundFlux.slug}`
                      : b.name.includes("Crucible")
                        ? "/graphite-crucibles"
                        : "#";

            return (
              <div
                key={i}
                style={{
                  border: "1px solid var(--color-accent-700)",
                  background: "var(--color-accent-800)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "10px",
                    }}
                  >
                    <Link
                      href={productUrl}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Barlow Condensed',sans-serif",
                          fontWeight: 700,
                          fontSize: "22px",
                          lineHeight: "1.05",
                          margin: 0,
                          textTransform: "uppercase",
                        }}
                      >
                        {b.name}
                      </h3>
                    </Link>
                    <span
                      style={{
                        background: "var(--color-accent-700)",
                        color: "#fff",
                        font: "600 9.5px/1 'Barlow',sans-serif",
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        padding: "4px 8px",
                      }}
                    >
                      {b.status}
                    </span>
                  </div>
                  <div
                    style={{
                      font: "600 13px/1.3 'Barlow',sans-serif",
                      color: "var(--color-accent-400)",
                      marginBottom: "4px",
                    }}
                  >
                    {b.grade}
                  </div>
                  <div
                    style={{
                      font: "400 12.5px/1.3 'Barlow',sans-serif",
                      color: "var(--color-accent-400)",
                    }}
                  >
                    Size: {b.size} · {b.pack}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <a
                    href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam,%20ma%20apki%20website%20pa%20${b.name}%20dekh%20rha%20tha,%20muja%20iska%20rate%20bta%20dein.`}
                    className="btn btn-white"
                    style={{
                      flex: 1,
                      font: "700 13px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      padding: "11px 10px",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    Check Rate
                  </a>
                  {productUrl !== "#" && (
                    <Link
                      href={productUrl}
                      className="btn btn-secondary"
                      style={{
                        font: "700 13px/1 'Barlow Condensed',sans-serif",
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        padding: "11px 14px",
                        textDecoration: "none",
                      }}
                    >
                      View Specs
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div style={{ background: "var(--color-surface)", padding: "48px 40px" }}>
        <div
          style={{
            font: "600 10.5px/1 'Barlow',sans-serif",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--color-neutral-700)",
            marginBottom: "8px",
          }}
        >
          03 · Guaranteed quality
        </div>
        <h2
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "44px",
            lineHeight: "1",
            margin: "0 0 28px",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Our commitments
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "12px",
          }}
        >
          {promises.map((p, i) => (
            <div
              key={i}
              style={{
                border: "1px solid var(--color-accent-300)",
                background: "#fff",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  font: "800 16px/1 'Barlow Condensed',sans-serif",
                  color: "var(--color-neutral-700)",
                }}
              >
                0{i + 1}
              </span>
              <span
                style={{
                  font: "600 13.5px/1.3 'Barlow',sans-serif",
                  color: "var(--color-accent)",
                }}
              >
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
