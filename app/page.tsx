import Link from "next/link";
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
} from "@/data/products";
import { getBreadcrumbSchema } from "@/lib/schema";

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
            padding: "52px 40px 48px",
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                font: "600 10.5px/1 'Barlow',sans-serif",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "var(--color-accent-400)",
                marginBottom: "20px",
              }}
            >
              Ferro Alloys · Non-Ferro Alloys · Crucibles
            </div>
            <h1
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: "76px",
                lineHeight: ".9",
                margin: "0 0 20px",
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
                font: "400 18px/1.5 'Barlow',sans-serif",
                color: "#d4d4d5",
                margin: "0 0 28px",
                maxWidth: "520px",
                textWrap: "pretty",
              }}
            >
              A {siteInfo.address.city}-based trading company specialised in
              high-grade ferro alloys, non-ferro alloys and crucibles. We are
              the backbone for manufacturers across Pakistan — aluminium, iron,
              cast iron and copper casting.
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                marginBottom: "36px",
              }}
            >
              <a
                href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam.%20Today's%20rates%20chahiye.`}
                className="btn btn-primary"
                style={{
                  padding: "16px 26px",
                  font: "700 14px/1 'Barlow Condensed',sans-serif",
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
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp for today's rate
              </a>
              <a
                href={`tel:${siteInfo.phoneRaw}`}
                className="btn btn-secondary"
                style={{
                  padding: "16px 22px",
                  font: "700 14px/1 'Barlow Condensed',sans-serif",
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
                  width="15"
                  height="15"
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
                borderTop: "1px solid var(--color-accent-700)",
                paddingTop: "24px",
              }}
            >
              <div style={{ padding: "16px 0" }}>
                <div
                  style={{
                    font: "800 30px/1 'Barlow Condensed',sans-serif",
                    color: "#fff",
                  }}
                >
                  [ ## ]
                </div>
                <div
                  style={{
                    font: "400 10.5px/1.3 'Barlow',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-400)",
                    marginTop: "6px",
                  }}
                >
                  Years in trade
                </div>
              </div>
              <div style={{ padding: "16px 0" }}>
                <div
                  style={{
                    font: "800 30px/1 'Barlow Condensed',sans-serif",
                    color: "#fff",
                  }}
                >
                  15
                </div>
                <div
                  style={{
                    font: "400 10.5px/1.3 'Barlow',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-400)",
                    marginTop: "6px",
                  }}
                >
                  Grades stocked
                </div>
              </div>
              <div style={{ padding: "16px 0" }}>
                <div
                  style={{
                    font: "800 30px/1 'Barlow Condensed',sans-serif",
                    color: "#fff",
                  }}
                >
                  4
                </div>
                <div
                  style={{
                    font: "400 10.5px/1.3 'Barlow',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-400)",
                    marginTop: "6px",
                  }}
                >
                  Casting types served
                </div>
              </div>
              <div style={{ padding: "16px 0" }}>
                <div
                  style={{
                    font: "800 30px/1 'Barlow Condensed',sans-serif",
                    color: "#fff",
                  }}
                >
                  COA
                </div>
                <div
                  style={{
                    font: "400 10.5px/1.3 'Barlow',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-400)",
                    marginTop: "6px",
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
              borderRight: "none",
              borderBottom: "none",
            }}
          >
            <i className="corner tl"></i>
            <i className="corner tr"></i>
            <i className="corner bl"></i>
            <i className="corner br"></i>
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "var(--color-accent)",
                color: "var(--color-accent-400)",
                padding: "4px 8px",
                font: "600 10px/1 'Barlow',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                zIndex: 10,
                border: "1px solid var(--color-accent-700)",
              }}
            >
              Warehouse, {siteInfo.address.city}
            </div>
            <img
              src="/assets/ferro-magnese.webp"
              alt="Warehouse"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                opacity: 0.8,
              }}
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
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
          <a
            href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam.%20Today's%20rates%20chahiye.`}
            style={{
              flex: 1,
              background: "#fff",
              color: "var(--color-accent)",
              font: "700 13px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              padding: "14px 10px",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            WhatsApp rates
          </a>
          <a
            href={`tel:${siteInfo.phoneRaw}`}
            style={{
              flex: "none",
              border: "1px solid var(--color-neutral-600)",
              color: "#fff",
              font: "700 13px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              padding: "14px 18px",
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
          padding: "12px 0",
          overflow: "hidden",
          display: "flex",
          whiteSpace: "nowrap",
        }}
      >
        <div className="tickrow">
          <div
            style={{
              display: "flex",
              gap: "40px",
              paddingRight: "40px",
              font: "600 13px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            <span>FeSi 75% — Stock updated</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
            <span>Silicon Metal 441 — Arrived</span>
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
              gap: "40px",
              paddingRight: "40px",
              font: "600 13px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            <span>FeSi 75% — Stock updated</span>
            <span style={{ color: "var(--color-accent-300)" }}>•</span>
            <span>Silicon Metal 441 — Arrived</span>
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
            color: "var(--color-neutral-600)",
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
                    height: "200px",
                    overflow: "hidden",
                    borderBottom: "1px solid var(--color-accent-300)",
                    position: "relative",
                    background: "var(--color-surface)",
                  }}
                >
                  <img
                    src={r.photo}
                    alt={r.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
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
                          color: "var(--color-neutral-600)",
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
            const foundFerro = ferro.find((p) => p.name === b.name);
            const foundNonFerro = nonferro.find((p) => p.name === b.name);
            const foundMaster = masterAlloys.find((p) => p.name === b.name);
            const foundMetal = metals.find((p) => p.name === b.name);
            const foundFlux = fluxes.find((p) => p.name === b.name);
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
                      <h4
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
                      </h4>
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
                    href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam.%20Rate%20aur%20stock%20for%20${b.name}%20${b.grade}?`}
                    style={{
                      flex: 1,
                      background: "#fff",
                      color: "var(--color-accent)",
                      font: "700 12.5px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      padding: "10px",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    Check Rate
                  </a>
                  {productUrl !== "#" && (
                    <Link
                      href={productUrl}
                      style={{
                        border: "1px solid var(--color-accent-700)",
                        color: "#fff",
                        font: "700 12.5px/1 'Barlow Condensed',sans-serif",
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        padding: "10px 14px",
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
            color: "var(--color-neutral-600)",
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
                  color: "var(--color-neutral-600)",
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
