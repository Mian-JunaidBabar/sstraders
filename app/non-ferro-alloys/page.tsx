import Link from "next/link";
import { nonferro } from "@/data/products";

export default function NonFerroAlloysPage() {
  return (
    <>
      {/* DESKTOP HEADER */}
      <div
        className="hidden md:grid"
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "44px 40px 40px",
          gridTemplateColumns: "1.3fr .7fr",
          gap: "44px",
          alignItems: "end",
        }}
      >
        <div>
          <div
            style={{
              font: "400 11px/1 'Barlow',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "20px",
            }}
          >
            Home / <span style={{ color: "#fff" }}>Non-Ferro Alloys</span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "66px",
              lineHeight: ".92",
              margin: "0 0 18px",
              textTransform: "uppercase",
            }}
          >
            Non-Ferro Alloys
            <br />
            &amp; Casting Ingots
          </h1>
          <p
            style={{
              font: "400 17px/1.5 'Barlow',sans-serif",
              color: "#d4d4d5",
              margin: "0 0 26px",
              maxWidth: "620px",
              textWrap: "pretty",
            }}
          >
            Master alloys and ingots for alloy wheels, car pistons and special
            casting. Trusted by major foundries for perfect results. Wholesale
            rates and fast delivery across Pakistan.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
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
              WhatsApp for rate list
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
        <div
          style={{
            border: "1px solid var(--color-accent-700)",
            overflow: "hidden",
            aspectRatio: "1/1",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "78px",
              background:
                "repeating-linear-gradient(45deg, var(--color-accent-800) 0 8px, var(--color-accent) 8px 16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "10px",
              font: "600 9px/1.35 'Barlow',sans-serif",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
            }}
          ></div>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div
        className="md:hidden"
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "32px 16px 24px",
        }}
      >
        <div
          style={{
            font: "400 10.5px/1 'Barlow',sans-serif",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "var(--color-neutral-600)",
            marginBottom: "16px",
          }}
        >
          Home / <span style={{ color: "#fff" }}>Non-Ferro Alloys</span>
        </div>
        <h1
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "44px",
            lineHeight: ".92",
            margin: "0 0 16px",
            textTransform: "uppercase",
          }}
        >
          Non-Ferro Alloys &amp; Casting Ingots
        </h1>
        <p
          style={{
            font: "400 15px/1.5 'Barlow',sans-serif",
            color: "#d4d4d5",
            margin: "0 0 24px",
            textWrap: "pretty",
          }}
        >
          Master alloys and ingots for alloy wheels, car pistons and special
          casting. Trusted by major foundries for perfect results.
        </p>
        <div
          style={{
            border: "1px solid var(--color-accent-700)",
            overflow: "hidden",
            aspectRatio: "16/9",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "78px",
              background:
                "repeating-linear-gradient(45deg, var(--color-accent-800) 0 8px, var(--color-accent) 8px 16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "10px",
              font: "600 9px/1.35 'Barlow',sans-serif",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
            }}
          ></div>
        </div>
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
            WhatsApp for rate list
          </a>
        </div>
      </div>

      {/* FILTER BAR DESKTOP */}
      <div
        className="hidden md:block"
        style={{
          background: "var(--color-accent-100)",
          padding: "36px 40px 20px",
          borderBottom: "1px solid var(--color-accent-300)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "38px",
            lineHeight: "1",
            margin: "0 0 8px",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Wholesale rates for non-ferro alloys
        </h2>
        <p
          style={{
            font: "400 14.5px/1.5 'Barlow',sans-serif",
            color: "var(--color-text)",
            opacity: 0.8,
            margin: 0,
            maxWidth: "700px",
            textWrap: "pretty",
          }}
        >
          Silicon metal, aluminium silicon, aluminium copper and aluminium
          nickel. Special rates for bulk orders and regular customers. Typical
          commercial analysis shown — confirm against the COA on order.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div
        style={{ background: "var(--color-bg)", padding: "28px 40px 52px" }}
        className="hidden md:block"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {nonferro.map((p, i) => (
            <div
              key={i}
              className="blueprint"
              style={{
                border: "1px solid var(--color-accent-300)",
                background: "#fff",
                position: "relative",
                display: "grid",
                gridTemplateColumns: "180px 1fr",
              }}
            >
              <i className="corner tl"></i>
              <i className="corner tr"></i>
              <i className="corner bl"></i>
              <i className="corner br"></i>
              <div
                style={{
                  borderRight: "1px solid var(--color-accent-300)",
                  background: "var(--color-surface)",
                  overflow: "hidden",
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
                  {p.name}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    padding: "16px 18px 12px",
                    borderBottom: "1px solid var(--color-accent-100)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "7px",
                    }}
                  >
                    <span
                      style={{
                        font: "600 9.5px/1 'Barlow',sans-serif",
                        letterSpacing: ".16em",
                        textTransform: "uppercase",
                        color: "var(--color-neutral-600)",
                      }}
                    >
                      {p.use}
                    </span>
                    <span
                      style={{
                        font: "600 9px/1 'Barlow',sans-serif",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        border: "1px solid var(--color-accent)",
                        padding: "4px 6px",
                        color: "var(--color-accent)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: "26px",
                      lineHeight: "1",
                      margin: "0 0 7px",
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      font: "400 13px/1.45 'Barlow',sans-serif",
                      color: "var(--color-text)",
                      opacity: 0.8,
                      margin: 0,
                      textWrap: "pretty",
                    }}
                  >
                    {p.note}
                  </p>
                </div>
                {p.specs.map((s, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "9px 18px",
                      borderBottom: "1px solid var(--color-accent-100)",
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
                <div style={{ marginTop: "auto", display: "flex" }}>
                  <a
                    href={`https://wa.me/923009405230?text=Salam.%20${p.name}%20ka%20rate%20chahiye.`}
                    style={{
                      background: "var(--color-accent)",
                      color: "#fff",
                      font: "700 12px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: "14px",
                      flex: 1,
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    Order on WhatsApp
                  </a>
                  <Link
                    href={`/non-ferro-alloys/${p.slug}`}
                    style={{
                      borderLeft: "1px solid var(--color-accent)",
                      color: "var(--color-accent)",
                      font: "700 12px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: "14px 16px",
                      textDecoration: "none",
                    }}
                  >
                    Full sheet
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE PRODUCT GRID */}
      <div
        className="md:hidden"
        style={{ background: "var(--color-bg)", padding: "32px 16px 48px" }}
      >
        <h2
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
          Wholesale rates
        </h2>
        <p
          style={{
            font: "400 14px/1.5 'Barlow',sans-serif",
            color: "var(--color-text)",
            opacity: 0.8,
            margin: "0 0 24px",
            textWrap: "pretty",
          }}
        >
          Silicon metal, aluminium silicon, aluminium copper and aluminium
          nickel. Special rates for bulk orders.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {nonferro.map((p, i) => (
            <div
              key={i}
              className="blueprint"
              style={{
                border: "1px solid var(--color-accent-300)",
                background: "#fff",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <i className="corner tl"></i>
              <i className="corner tr"></i>
              <i className="corner bl"></i>
              <i className="corner br"></i>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    padding: "16px 16px 12px",
                    borderBottom: "1px solid var(--color-accent-100)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "7px",
                    }}
                  >
                    <span
                      style={{
                        font: "600 9.5px/1 'Barlow',sans-serif",
                        letterSpacing: ".16em",
                        textTransform: "uppercase",
                        color: "var(--color-neutral-600)",
                      }}
                    >
                      {p.use}
                    </span>
                    <span
                      style={{
                        font: "600 9px/1 'Barlow',sans-serif",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        border: "1px solid var(--color-accent)",
                        padding: "4px 6px",
                        color: "var(--color-accent)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: "24px",
                      lineHeight: "1",
                      margin: "0 0 7px",
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      font: "400 13px/1.45 'Barlow',sans-serif",
                      color: "var(--color-text)",
                      opacity: 0.8,
                      margin: 0,
                      textWrap: "pretty",
                    }}
                  >
                    {p.note}
                  </p>
                </div>
                {p.specs.map((s, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "9px 16px",
                      borderBottom: "1px solid var(--color-accent-100)",
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
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    gap: "8px",
                    padding: "12px 16px",
                  }}
                >
                  <a
                    href={`https://wa.me/923009405230?text=Salam.%20${p.name}%20ka%20rate%20chahiye.`}
                    style={{
                      background: "var(--color-accent)",
                      color: "#fff",
                      font: "700 12px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: "14px",
                      flex: 1,
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    WhatsApp
                  </a>
                  <Link
                    href={`/non-ferro-alloys/${p.slug}`}
                    style={{
                      border: "1px solid var(--color-accent)",
                      color: "var(--color-accent)",
                      font: "700 12px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: "14px 16px",
                      textDecoration: "none",
                    }}
                  >
                    Full sheet
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER BANNER */}
      <div
        className="hidden md:block"
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "44px 40px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: "40px",
            lineHeight: ".98",
            margin: "0 0 16px",
            textTransform: "uppercase",
            maxWidth: "700px",
          }}
        >
          Trusted supplier of non-ferro alloys &amp; ingots
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "44px",
          }}
        >
          <p
            style={{
              font: "400 15.5px/1.55 'Barlow',sans-serif",
              color: "#d4d4d5",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            Your casting quality depends on pure ingots and a regular supply. We
            help you source directly from the importer and ensure availability
            of materials — a complete range of silicon metal, aluminium silicon,
            aluminium nickel, aluminium copper and specialised aluminium alloys,
            held in Lahore.
          </p>
          <p
            style={{
              font: "400 15.5px/1.55 'Barlow',sans-serif",
              color: "#d4d4d5",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            If you are manufacturing alloy wheels, car pistons or aluminium
            engine parts, we have the fresh stock you need — materials that give
            a perfect finish and high strength in the final casting. Fast
            delivery to your factory doorstep, from Lahore and Gujranwala to
            Karachi.
          </p>
        </div>
      </div>
    </>
  );
}
