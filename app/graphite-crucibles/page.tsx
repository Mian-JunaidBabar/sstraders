import { cruciblePoints, crucibleSizes, crucibleSpecs } from "@/data/products";

export default function GraphiteCruciblesPage() {
  return (
    <>
      <div
        className="md:grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
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
              font: "400 11px/1 'Barlow',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "20px",
            }}
          >
            Home / <span style={{ color: "#fff" }}>Graphite Crucibles</span>
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
            Premium
            <br />
            graphite
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
              href="https://wa.me/923009405230"
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
              href="tel:+923009405230"
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
          className="hidden md:block"
          style={{
            background: "var(--color-surface)",
            overflow: "hidden",
            borderLeft: "1px solid var(--color-accent)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "78px",
              background:
                "repeating-linear-gradient(45deg, #e4e4e5 0 8px, #eeeeef 8px 16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "10px",
              font: "600 9px/1.35 'Barlow',sans-serif",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--color-neutral-500)",
            }}
          >
            Graphite crucibles in all sizes
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
            we'll confirm the fit.
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
                <th style={{ padding: "13px 16px" }}></th>
              </tr>
            </thead>
            <tbody>
              {crucibleSizes.map((c, i) => (
                <tr
                  key={i}
                  style={{ borderTop: "1px solid var(--color-surface)" }}
                >
                  <td
                    style={{
                      font: "700 17px/1 'Barlow Condensed',sans-serif",
                      color: "var(--color-accent)",
                      padding: "13px 16px",
                    }}
                  >
                    {c.no}
                  </td>
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
                      href={`https://wa.me/923009405230?text=Salam.%20Crucible%20No.%20${c.no}%20ka%20rate%20aur%20stock%20chahiye.`}
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
    </>
  );
}
