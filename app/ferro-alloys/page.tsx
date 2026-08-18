import Link from "next/link";
import { ferro, promises } from "@/data/products";

export default function FerroAlloysPage() {
  return (
    <>
      {/* DESKTOP HEADER */}
      <div
        className="hidden md:grid"
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "44px 40px 40px",
          gridTemplateColumns: "1.25fr .75fr",
          gap: "48px",
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
            Home / <span style={{ color: "#fff" }}>Ferro Alloys</span>
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
            Ferro Alloys
          </h1>
          <p
            style={{
              font: "400 17px/1.5 'Barlow',sans-serif",
              color: "#d4d4d5",
              margin: "0 0 26px",
              maxWidth: "600px",
              textWrap: "pretty",
            }}
          >
            Ferro silicon, ferro manganese, silico manganese and chrome. Best
            quality materials for iron and stainless steel casting. Wholesale
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
            display: "flex",
            gap: "1px",
            background: "var(--color-accent-700)",
            border: "1px solid var(--color-accent-700)",
          }}
        >
          <div
            style={{
              background: "var(--color-accent)",
              padding: "18px 20px",
              flex: 1,
            }}
          >
            <div style={{ font: "800 34px/1 'Barlow Condensed',sans-serif" }}>
              9
            </div>
            <div
              style={{
                font: "400 10px/1.3 'Barlow',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--color-accent-400)",
                marginTop: "6px",
              }}
            >
              Grades listed
            </div>
          </div>
          <div
            style={{
              background: "var(--color-accent)",
              padding: "18px 20px",
              flex: 1,
            }}
          >
            <div style={{ font: "800 34px/1 'Barlow Condensed',sans-serif" }}>
              COA
            </div>
            <div
              style={{
                font: "400 10px/1.3 'Barlow',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--color-accent-400)",
                marginTop: "6px",
              }}
            >
              Per lot
            </div>
          </div>
          <div
            style={{
              background: "var(--color-accent)",
              padding: "18px 20px",
              flex: 1,
            }}
          >
            <div style={{ font: "800 34px/1 'Barlow Condensed',sans-serif" }}>
              1 MT
            </div>
            <div
              style={{
                font: "400 10px/1.3 'Barlow',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--color-accent-400)",
                marginTop: "6px",
              }}
            >
              Jumbo bags
            </div>
          </div>
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
          Home / <span style={{ color: "#fff" }}>Ferro Alloys</span>
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
          Ferro Alloys
        </h1>
        <p
          style={{
            font: "400 15px/1.5 'Barlow',sans-serif",
            color: "#d4d4d5",
            margin: "0 0 24px",
            textWrap: "pretty",
          }}
        >
          Best quality ferro silicon, ferro manganese, silico manganese and
          chrome for iron and stainless steel casting.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1px",
            background: "var(--color-accent-700)",
            border: "1px solid var(--color-accent-700)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              background: "var(--color-accent)",
              padding: "14px 16px",
              flex: 1,
              textAlign: "center",
            }}
          >
            <div style={{ font: "800 24px/1 'Barlow Condensed',sans-serif" }}>
              9
            </div>
            <div
              style={{
                font: "400 9px/1.3 'Barlow',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--color-accent-400)",
                marginTop: "4px",
              }}
            >
              Grades listed
            </div>
          </div>
          <div
            style={{
              background: "var(--color-accent)",
              padding: "14px 16px",
              flex: 1,
              textAlign: "center",
            }}
          >
            <div style={{ font: "800 24px/1 'Barlow Condensed',sans-serif" }}>
              COA
            </div>
            <div
              style={{
                font: "400 9px/1.3 'Barlow',sans-serif",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--color-accent-400)",
                marginTop: "4px",
              }}
            >
              Per lot
            </div>
          </div>
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
        className="hidden md:flex"
        style={{
          background: "var(--color-accent-100)",
          padding: "36px 40px 20px",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "32px",
          borderBottom: "1px solid var(--color-accent-300)",
        }}
      >
        <div>
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
            Wholesale rates for ferro alloys
          </h2>
          <p
            style={{
              font: "400 14.5px/1.5 'Barlow',sans-serif",
              color: "var(--color-text)",
              opacity: 0.8,
              margin: 0,
              maxWidth: "660px",
              textWrap: "pretty",
            }}
          >
            All types available in our warehouse right now. Special rates for
            bulk orders and regular customers. Figures below are typical
            commercial analysis — confirm against the COA on order.
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px", flex: "none" }}>
          <span
            style={{
              font: "600 11px/1 'Barlow',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              background: "var(--color-accent)",
              color: "#fff",
              padding: "10px 12px",
            }}
          >
            All
          </span>
          <span
            style={{
              font: "600 11px/1 'Barlow',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              border: "1px solid var(--color-accent-300)",
              color: "var(--color-text)",
              padding: "10px 12px",
            }}
          >
            Iron casting
          </span>
          <span
            style={{
              font: "600 11px/1 'Barlow',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              border: "1px solid var(--color-accent-300)",
              color: "var(--color-text)",
              padding: "10px 12px",
            }}
          >
            Steel
          </span>
          <span
            style={{
              font: "600 11px/1 'Barlow',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              border: "1px solid var(--color-accent-300)",
              color: "var(--color-text)",
              padding: "10px 12px",
            }}
          >
            Consumables
          </span>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div
        style={{ background: "var(--color-bg)", padding: "28px 40px 52px" }}
        className="hidden md:block"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {ferro.map((p, i) => (
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
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid var(--color-accent-300)",
                }}
              >
                <div
                  style={{
                    width: "96px",
                    flex: "none",
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
                      color: "var(--color-accent-400)",
                    }}
                  >
                    {p.name}
                  </div>
                </div>
                <div style={{ padding: "14px 14px 14px 16px", flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "8px",
                      marginBottom: "6px",
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
                      fontSize: "23px",
                      lineHeight: "1",
                      margin: 0,
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                    }}
                  >
                    {p.name}
                  </h3>
                </div>
              </div>
              <div style={{ padding: 0 }}>
                {p.specs.map((s, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "8px 16px",
                      borderBottom: "1px solid var(--color-accent-100)",
                    }}
                  >
                    <span
                      style={{
                        font: "400 12px/1.3 'Barlow',sans-serif",
                        color: "var(--color-neutral-600)",
                        letterSpacing: ".02em",
                      }}
                    >
                      {s.k}
                    </span>
                    <span
                      style={{
                        font: "600 12.5px/1.3 'Barlow',sans-serif",
                        color: "var(--color-accent)",
                        textAlign: "right",
                      }}
                    >
                      {s.v}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  padding: "12px 16px 14px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    font: "400 12.5px/1.45 'Barlow',sans-serif",
                    color: "var(--color-text)",
                    opacity: 0.8,
                    margin: "0 0 14px",
                    textWrap: "pretty",
                  }}
                >
                  {p.note}
                </p>
                <div style={{ marginTop: "auto", display: "flex", gap: "8px" }}>
                  <a
                    href={`https://wa.me/923009405230?text=Salam.%20${p.name}%20ka%20rate%20chahiye.`}
                    style={{
                      background: "var(--color-accent)",
                      color: "#fff",
                      font: "700 11.5px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: "12px",
                      flex: 1,
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    Order on WhatsApp
                  </a>
                  <Link
                    href={`/ferro-alloys/${p.slug}`}
                    style={{
                      border: "1px solid var(--color-accent)",
                      color: "var(--color-accent)",
                      font: "700 11.5px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: "12px 14px",
                      textAlign: "center",
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
            margin: "0 0 20px",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Wholesale rates
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {ferro.map((p, i) => (
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
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid var(--color-accent-300)",
                }}
              >
                <div style={{ padding: "14px 16px", flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "8px",
                      marginBottom: "6px",
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
                      fontSize: "22px",
                      lineHeight: "1",
                      margin: 0,
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                    }}
                  >
                    {p.name}
                  </h3>
                </div>
              </div>
              <div style={{ padding: 0 }}>
                {p.specs.map((s, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "8px 16px",
                      borderBottom: "1px solid var(--color-accent-100)",
                    }}
                  >
                    <span
                      style={{
                        font: "400 12px/1.3 'Barlow',sans-serif",
                        color: "var(--color-neutral-600)",
                        letterSpacing: ".02em",
                      }}
                    >
                      {s.k}
                    </span>
                    <span
                      style={{
                        font: "600 12.5px/1.3 'Barlow',sans-serif",
                        color: "var(--color-accent)",
                        textAlign: "right",
                      }}
                    >
                      {s.v}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  padding: "12px 16px 14px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ marginTop: "auto", display: "flex", gap: "8px" }}>
                  <a
                    href={`https://wa.me/923009405230?text=Salam.%20${p.name}%20ka%20rate%20chahiye.`}
                    style={{
                      background: "var(--color-accent)",
                      color: "#fff",
                      font: "700 11.5px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: "12px",
                      flex: 1,
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    WhatsApp
                  </a>
                  <Link
                    href={`/ferro-alloys/${p.slug}`}
                    style={{
                      border: "1px solid var(--color-accent)",
                      color: "var(--color-accent)",
                      font: "700 11.5px/1 'Barlow Condensed',sans-serif",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: "12px 14px",
                      textAlign: "center",
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

      {/* PROMISES BANNER */}
      <div
        className="hidden md:grid"
        style={{
          background: "var(--color-accent)",
          color: "#fff",
          padding: "44px 40px",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "40px",
              lineHeight: ".98",
              margin: "0 0 16px",
              textTransform: "uppercase",
            }}
          >
            Your trusted partner for foundry &amp; casting materials
          </h2>
          <p
            style={{
              font: "400 15.5px/1.55 'Barlow',sans-serif",
              color: "#d4d4d5",
              margin: "0 0 14px",
              textWrap: "pretty",
            }}
          >
            Finding a reliable ferro alloy supplier for your factory shouldn't
            be a headache. Your business depends on pure materials and on-time
            delivery, so we import directly and hold stock in Lahore.
          </p>
          <p
            style={{
              font: "400 15.5px/1.55 'Barlow',sans-serif",
              color: "#d4d4d5",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            Whether you are making alloy wheels, car pistons or heavy iron
            castings, we have the maal you need — from the markets of Lahore and
            Gujranwala to the industrial hubs of Karachi.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px 24px",
            alignContent: "start",
          }}
        >
          {promises.map((q, i) => (
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
                  font: "400 14px/1.35 'Barlow',sans-serif",
                  color: "#fff",
                }}
              >
                {q}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
