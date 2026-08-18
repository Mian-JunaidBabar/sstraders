import Link from "next/link";
import { ranges, board, pillars } from "@/data/products";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="hidden md:grid"
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: 0,
          gridTemplateColumns: "1.15fr .85fr",
        }}
      >
        <div style={{ padding: "64px 48px 56px" }}>
          <div
            style={{
              font: "600 10.5px/1 'Barlow',sans-serif",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--color-accent-400)",
              marginBottom: "20px",
            }}
          >
            Ferro alloys · Non-ferro alloys · Graphite crucibles
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "82px",
              lineHeight: ".9",
              letterSpacing: "-.015em",
              margin: "0 0 24px",
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
              font: "400 18px/1.5 'Barlow',sans-serif",
              color: "#d4d4d5",
              margin: "0 0 32px",
              maxWidth: "520px",
              textWrap: "pretty",
            }}
          >
            A Lahore-based trading company specialised in high-grade ferro
            alloys, non-ferro alloys and crucibles. We are the backbone for
            manufacturers across Pakistan — aluminium, iron, cast iron and
            copper casting.
          </p>
          <div style={{ display: "flex", gap: "12px", marginBottom: "40px" }}>
            <a
              href="https://wa.me/923009405230"
              style={{
                background: "#fff",
                color: "var(--color-accent)",
                font: "700 15px/1 'Barlow Condensed',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                padding: "17px 30px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              WhatsApp for today's rate
            </a>
            <a
              href="tel:+923009405230"
              style={{
                border: "1px solid var(--color-neutral-600)",
                color: "#fff",
                font: "700 15px/1 'Barlow Condensed',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                padding: "17px 26px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +92 300 9405230
            </a>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              borderTop: "1px solid var(--color-accent-700)",
              maxWidth: "560px",
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
            Warehouse, Lahore
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
          Lahore-based direct importers of high-grade ferro alloys, non-ferro
          alloys and graphite crucibles.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          <a
            href="https://wa.me/923009405230"
            style={{
              background: "#fff",
              color: "var(--color-accent)",
              font: "700 14px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              padding: "17px",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            WhatsApp +92 300 9405230
          </a>
          <a
            href="tel:+923009405230"
            style={{
              border: "1px solid var(--color-neutral-600)",
              color: "#fff",
              font: "700 14px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              padding: "16px",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Call now
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
        <div
          className="tickrow"
          style={{
            display: "flex",
            width: "max-content",
            animation: "tick 34s linear infinite",
          }}
        >
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

      {/* 01 RANGES */}
      <div
        className="hidden md:block"
        style={{ padding: "56px 40px", background: "var(--color-bg)" }}
      >
        <div
          style={{
            font: "600 10.5px/1 'Barlow',sans-serif",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--color-neutral-600)",
            marginBottom: "14px",
          }}
        >
          01 · Products we import
        </div>
        <h2
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "48px",
            lineHeight: "1",
            margin: "0 0 32px",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Our ranges
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "28px",
          }}
        >
          {ranges.map((r, i) => (
            <Link
              key={i}
              href={r.title.toLowerCase().replace(/ /g, "-")}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="blueprint duotone"
                style={{
                  height: "240px",
                  background: "#fff",
                  marginBottom: "20px",
                }}
              >
                <i className="corner tl"></i>
                <i className="corner tr"></i>
                <i className="corner bl"></i>
                <i className="corner br"></i>
                <img
                  src={r.photo}
                  alt={r.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "10px",
                }}
              >
                {r.kicker}
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  margin: "0 0 10px",
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  font: "400 15px/1.55 'Barlow',sans-serif",
                  color: "var(--color-text)",
                  opacity: 0.8,
                  margin: "0 0 18px",
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
                  marginBottom: "24px",
                }}
              >
                {r.chips.map((chip, j) => (
                  <span
                    key={j}
                    style={{
                      background: "#fff",
                      border: "1px solid var(--color-accent-300)",
                      padding: "4px 8px",
                      font: "500 11px/1 'Barlow',sans-serif",
                      color: "var(--color-text)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "auto" }}>
                <span
                  style={{
                    border: "1px solid var(--color-accent)",
                    color: "var(--color-accent)",
                    font: "700 12.5px/1 'Barlow Condensed',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    padding: "13px 16px",
                    textAlign: "center",
                    display: "inline-block",
                  }}
                >
                  Specs
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE RANGES */}
      <div
        className="md:hidden"
        style={{ padding: "48px 16px", background: "var(--color-bg)" }}
      >
        <div
          style={{
            font: "600 9.5px/1 'Barlow',sans-serif",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--color-neutral-600)",
            marginBottom: "12px",
          }}
        >
          01 · Products we import
        </div>
        <h2
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "38px",
            lineHeight: "1",
            margin: "0 0 26px",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Our ranges
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {ranges.map((r, i) => (
            <Link
              key={i}
              href={r.title.toLowerCase().replace(/ /g, "-")}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="blueprint duotone"
                style={{
                  height: "200px",
                  background: "#fff",
                  marginBottom: "18px",
                }}
              >
                <i className="corner tl"></i>
                <i className="corner tr"></i>
                <i className="corner bl"></i>
                <i className="corner br"></i>
                <img
                  src={r.photo}
                  alt={r.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "8px",
                }}
              >
                {r.kicker}
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700,
                  fontSize: "26px",
                  margin: "0 0 8px",
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  font: "400 14.5px/1.55 'Barlow',sans-serif",
                  color: "var(--color-text)",
                  opacity: 0.8,
                  margin: "0 0 16px",
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
                {r.chips.map((chip, j) => (
                  <span
                    key={j}
                    style={{
                      background: "#fff",
                      border: "1px solid var(--color-accent-300)",
                      padding: "4px 8px",
                      font: "500 10px/1 'Barlow',sans-serif",
                      color: "var(--color-text)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "auto" }}>
                <span
                  style={{
                    border: "1px solid var(--color-accent)",
                    color: "var(--color-accent)",
                    font: "700 12.5px/1 'Barlow Condensed',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    padding: "12px 16px",
                    textAlign: "center",
                    display: "inline-block",
                    width: "100%",
                  }}
                >
                  Specs
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 02 STOCK BOARD */}
      <div
        className="hidden md:block"
        style={{
          background: "var(--color-accent-100)",
          padding: "0 40px 56px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid var(--color-accent)",
            paddingTop: "14px",
            marginBottom: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
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
              02 · This week in the warehouse
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: "46px",
                lineHeight: "1",
                margin: "0",
                textTransform: "uppercase",
                color: "var(--color-accent)",
              }}
            >
              Stock board
            </h2>
          </div>
          <span
            style={{
              font: "400 12px/1.4 'Barlow',sans-serif",
              color: "var(--color-neutral-600)",
            }}
          >
            Rates on WhatsApp — they move weekly,
            <br />
            so we don't print them.
          </span>
        </div>
        <table
          style={{
            width: "100%",
            background: "#fff",
            border: "1px solid var(--color-accent-300)",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "var(--color-accent)", color: "#fff" }}>
              <th
                style={{
                  textAlign: "left",
                  color: "#fff",
                  font: "600 10.5px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  padding: "13px 16px",
                }}
              >
                Material
              </th>
              <th
                style={{
                  textAlign: "left",
                  color: "#fff",
                  font: "600 10.5px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  padding: "13px 16px",
                }}
              >
                Grade
              </th>
              <th
                style={{
                  textAlign: "left",
                  color: "#fff",
                  font: "600 10.5px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  padding: "13px 16px",
                }}
              >
                Size
              </th>
              <th
                style={{
                  textAlign: "left",
                  color: "#fff",
                  font: "600 10.5px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  padding: "13px 16px",
                }}
              >
                Packing
              </th>
              <th
                style={{
                  textAlign: "left",
                  color: "#fff",
                  font: "600 10.5px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  padding: "13px 16px",
                }}
              >
                Status
              </th>
              <th style={{ padding: "13px 16px" }}></th>
            </tr>
          </thead>
          <tbody>
            {board.map((b, i) => (
              <tr
                key={i}
                style={{ borderTop: "1px solid var(--color-accent-200)" }}
              >
                <td
                  style={{
                    font: "600 15px/1.2 'Barlow',sans-serif",
                    color: "var(--color-accent)",
                    padding: "14px 16px",
                  }}
                >
                  {b.name}
                </td>
                <td
                  style={{
                    font: "400 14px/1.2 'Barlow',sans-serif",
                    color: "var(--color-text)",
                    padding: "14px 16px",
                  }}
                >
                  {b.grade}
                </td>
                <td
                  style={{
                    font: "400 14px/1.2 'Barlow',sans-serif",
                    color: "var(--color-text)",
                    padding: "14px 16px",
                  }}
                >
                  {b.size}
                </td>
                <td
                  style={{
                    font: "400 14px/1.2 'Barlow',sans-serif",
                    color: "var(--color-text)",
                    padding: "14px 16px",
                  }}
                >
                  {b.pack}
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <span
                    style={{
                      font: "600 10.5px/1 'Barlow',sans-serif",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      border: "1px solid var(--color-accent)",
                      padding: "5px 8px",
                      color: "var(--color-accent)",
                    }}
                  >
                    {b.status}
                  </span>
                </td>
                <td style={{ padding: "14px 16px", textAlign: "right" }}>
                  <a
                    href={`https://wa.me/923009405230?text=Salam.%20Rate%20aur%20stock%20for%20${b.name}%20${b.grade}?`}
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
                    Ask rate
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 03 PILLARS */}
      <div
        className="hidden md:block"
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "56px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px",
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
                marginBottom: "14px",
              }}
            >
              03 · Why furnaces and foundries choose us
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: "52px",
                lineHeight: ".95",
                margin: "0 0 18px",
                textTransform: "uppercase",
              }}
            >
              Availability
              <br />
              is everything
            </h2>
            <p
              style={{
                font: "400 16px/1.55 'Barlow',sans-serif",
                color: "#d4d4d5",
                margin: "0 0 14px",
                maxWidth: "460px",
                textWrap: "pretty",
              }}
            >
              One bad batch of alloys can ruin your entire melt and damage your
              furnace. That is why we import directly, remove the middleman, and
              keep the warehouse full — so large quantities are there when you
              need them, at the rate we quote.
            </p>
            <p
              style={{
                font: "400 16px/1.55 'Barlow',sans-serif",
                color: "#d4d4d5",
                margin: 0,
                maxWidth: "460px",
              }}
            >
              Lahore · Gujranwala · Faisalabad · Karachi
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "var(--color-accent-700)",
              border: "1px solid var(--color-accent-700)",
            }}
          >
            {pillars.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "var(--color-accent)",
                  padding: "26px 22px",
                }}
              >
                <div
                  style={{
                    font: "800 22px/1 'Barlow Condensed',sans-serif",
                    color: "var(--color-neutral-600)",
                    marginBottom: "14px",
                  }}
                >
                  {p.n}
                </div>
                <h4
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    fontSize: "22px",
                    lineHeight: "1.05",
                    margin: "0 0 8px",
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  {p.t}
                </h4>
                <p
                  style={{
                    font: "400 13.5px/1.5 'Barlow',sans-serif",
                    color: "var(--color-accent-400)",
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
      </div>

      {/* 04 SEND THE GRADE */}
      <div
        className="hidden md:grid"
        style={{
          background: "var(--color-accent-100)",
          padding: "56px 40px",
          gridTemplateColumns: "1fr 1fr",
          gap: "44px",
          alignItems: "center",
          borderBottom: "1px solid var(--color-accent-300)",
        }}
      >
        <div>
          <div
            style={{
              font: "600 10.5px/1 'Barlow',sans-serif",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "14px",
            }}
          >
            04 · Order in a message
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "48px",
              lineHeight: ".98",
              margin: "0 0 16px",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            Send the grade,
            <br />
            get the rate.
          </h2>
          <p
            style={{
              font: "400 16px/1.55 'Barlow',sans-serif",
              color: "var(--color-text)",
              margin: "0 0 26px",
              maxWidth: "440px",
              textWrap: "pretty",
            }}
          >
            Tell us the material, grade and quantity. We reply with today's
            rate, stock position and delivery time to your factory. No forms, no
            waiting for an email.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="https://wa.me/923009405230"
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
              WhatsApp +92 300 9405230
            </a>
            <a
              href="tel:+923009405230"
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
          className="blueprint"
          style={{
            border: "1px solid var(--color-accent)",
            background: "#fff",
            padding: "22px",
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
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "16px",
            }}
          >
            Message preview
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                alignSelf: "flex-end",
                maxWidth: "78%",
                background: "var(--color-accent)",
                color: "#fff",
                padding: "12px 14px",
                font: "400 14px/1.45 'Barlow',sans-serif",
              }}
            >
              Salam. Ferro Silicon 75%, 5 ton chahiye. Aaj ka rate aur stock?
            </div>
            <div
              style={{
                alignSelf: "flex-start",
                maxWidth: "82%",
                border: "1px solid var(--color-accent-300)",
                color: "var(--color-accent)",
                padding: "12px 14px",
                font: "400 14px/1.45 'Barlow',sans-serif",
              }}
            >
              Walaikum salam. FeSi 75%, 10–50mm, jumbo bag — 5 ton ready in
              Lahore warehouse. COA attached. Rate WhatsApp par bhej raha hoon.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
