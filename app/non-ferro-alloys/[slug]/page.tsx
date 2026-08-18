import Link from "next/link";
import { notFound } from "next/navigation";
import {
  nonferro,
  fesiChem,
  fesiSupply,
  fesiUses,
  related,
} from "@/data/products";

export function generateStaticParams() {
  return nonferro.map((p) => ({
    slug: p.slug,
  }));
}

export default async function NonFerroProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = nonferro.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:block">
        <div
          style={{
            background: "var(--color-bg)",
            padding: "22px 40px 0",
            font: "400 11.5px/1 'Barlow',sans-serif",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "var(--color-neutral-600)",
          }}
        >
          Home / Non-Ferro Alloys /{" "}
          <span style={{ color: "var(--color-accent)" }}>{product.name}</span>
        </div>
        <div
          style={{
            background: "var(--color-bg)",
            padding: "24px 40px 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          <div>
            <div
              className="blueprint"
              style={{
                border: "1px solid var(--color-accent)",
                background: "var(--color-surface)",
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <i className="corner tl"></i>
              <i className="corner tr"></i>
              <i className="corner bl"></i>
              <i className="corner br"></i>
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
                {product.name}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  border: "1px solid var(--color-accent)",
                  aspectRatio: "1/1",
                  overflow: "hidden",
                  background: "var(--color-surface)",
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
                  Product photo
                </div>
              </div>
              <div
                style={{
                  border: "1px solid var(--color-accent-300)",
                  aspectRatio: "1/1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "repeating-linear-gradient(45deg, #e9e9ea 0 6px, #f2f2f3 6px 12px)",
                  font: "600 8.5px/1.3 'Barlow',sans-serif",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-500)",
                  textAlign: "center",
                  padding: "6px",
                }}
              >
                Jumbo bag photo
              </div>
              <div
                style={{
                  border: "1px solid var(--color-accent-300)",
                  aspectRatio: "1/1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "repeating-linear-gradient(45deg, #e9e9ea 0 6px, #f2f2f3 6px 12px)",
                  font: "600 8.5px/1.3 'Barlow',sans-serif",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-500)",
                  textAlign: "center",
                  padding: "6px",
                }}
              >
                Warehouse photo
              </div>
              <div
                style={{
                  border: "1px solid var(--color-accent-300)",
                  aspectRatio: "1/1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "repeating-linear-gradient(45deg, #e9e9ea 0 6px, #f2f2f3 6px 12px)",
                  font: "600 8.5px/1.3 'Barlow',sans-serif",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-500)",
                  textAlign: "center",
                  padding: "6px",
                }}
              >
                COA scan
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <span
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  background: "var(--color-accent)",
                  color: "#fff",
                  padding: "7px 9px",
                }}
              >
                Ready stock
              </span>
              <span
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  border: "1px solid var(--color-accent)",
                  color: "var(--color-accent)",
                  padding: "7px 9px",
                }}
              >
                Iron &amp; steel casting
              </span>
              <span
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  border: "1px solid var(--color-accent)",
                  color: "var(--color-accent)",
                  padding: "7px 9px",
                }}
              >
                Direct import
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800,
                fontSize: "60px",
                lineHeight: ".92",
                margin: "0 0 6px",
                textTransform: "uppercase",
                color: "var(--color-accent)",
              }}
            >
              {product.name}
            </h1>
            <div
              style={{
                font: "400 16px/1.4 'Barlow',sans-serif",
                color: "var(--color-neutral-600)",
                marginBottom: "20px",
              }}
            >
              {product.use} · Origin: China
            </div>
            <p
              style={{
                font: "400 16px/1.55 'Barlow',sans-serif",
                color: "var(--color-text)",
                margin: "0 0 26px",
                textWrap: "pretty",
              }}
            >
              {product.note}
            </p>
            <div
              className="blueprint"
              style={{
                border: "1px solid var(--color-accent)",
                background: "#fff",
                position: "relative",
                marginBottom: "20px",
              }}
            >
              <i className="corner tl"></i>
              <i className="corner tr"></i>
              <i className="corner bl"></i>
              <i className="corner br"></i>
              <div
                style={{
                  background: "var(--color-accent)",
                  color: "#fff",
                  font: "600 10.5px/1 'Barlow',sans-serif",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  padding: "11px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Typical chemical analysis</span>
                <span style={{ color: "var(--color-accent-400)" }}>
                  % by weight
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {fesiChem.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "11px 16px",
                      borderBottom: "1px solid var(--color-bg)",
                      borderRight: "1px solid var(--color-bg)",
                    }}
                  >
                    <span
                      style={{
                        font: "400 13.5px/1.3 'Barlow',sans-serif",
                        color: "var(--color-neutral-600)",
                      }}
                    >
                      {s.k}
                    </span>
                    <span
                      style={{
                        font: "600 14px/1.3 'Barlow',sans-serif",
                        color: "var(--color-accent)",
                      }}
                    >
                      {s.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="blueprint"
              style={{
                border: "1px solid var(--color-accent-300)",
                background: "#fff",
                position: "relative",
                marginBottom: "24px",
              }}
            >
              <i className="corner tl"></i>
              <i className="corner tr"></i>
              <i className="corner bl"></i>
              <i className="corner br"></i>
              <div
                style={{
                  font: "600 10.5px/1 'Barlow',sans-serif",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  padding: "11px 16px",
                  borderBottom: "1px solid var(--color-accent-300)",
                  color: "var(--color-accent)",
                }}
              >
                Supply &amp; packing
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {fesiSupply.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "11px 16px",
                      borderBottom: "1px solid var(--color-bg)",
                      borderRight: "1px solid var(--color-bg)",
                    }}
                  >
                    <span
                      style={{
                        font: "400 13.5px/1.3 'Barlow',sans-serif",
                        color: "var(--color-neutral-600)",
                      }}
                    >
                      {s.k}
                    </span>
                    <span
                      style={{
                        font: "600 14px/1.3 'Barlow',sans-serif",
                        color: "var(--color-accent)",
                        textAlign: "right",
                      }}
                    >
                      {s.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
              <a
                href={`https://wa.me/923009405230?text=Salam.%20${product.name}%20ka%20rate%20chahiye.`}
                style={{
                  flex: 1,
                  background: "var(--color-accent)",
                  color: "#fff",
                  font: "700 15px/1 'Barlow Condensed',sans-serif",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  padding: "19px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Order {product.name} on WhatsApp
              </a>
              <a
                href="tel:+923009405230"
                style={{
                  flex: "none",
                  border: "1px solid var(--color-accent)",
                  color: "var(--color-accent)",
                  font: "700 15px/1 'Barlow Condensed',sans-serif",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  padding: "19px 24px",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Call
              </a>
            </div>
            <p
              style={{
                font: "400 12.5px/1.5 'Barlow',sans-serif",
                color: "var(--color-neutral-600)",
                margin: 0,
              }}
            >
              Message opens pre-filled with the grade above. Analysis shown is
              typical commercial specification — the certificate of analysis for
              your specific lot is sent with the quotation.
            </p>
          </div>
        </div>
        <div
          style={{
            background: "var(--color-accent)",
            color: "#fff",
            padding: "44px 40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
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
                Where it is used
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1px",
                  background: "var(--color-accent-700)",
                  border: "1px solid var(--color-accent-700)",
                }}
              >
                {fesiUses.map((u, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--color-accent)",
                      padding: "16px 18px",
                      display: "flex",
                      gap: "14px",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        font: "800 15px/1 'Barlow Condensed',sans-serif",
                        color: "var(--color-neutral-600)",
                        flex: "none",
                      }}
                    >
                      {u.n}
                    </span>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed',sans-serif",
                          fontWeight: 700,
                          fontSize: "19px",
                          lineHeight: "1",
                          textTransform: "uppercase",
                          marginBottom: "5px",
                        }}
                      >
                        {u.t}
                      </div>
                      <div
                        style={{
                          font: "400 13.5px/1.45 'Barlow',sans-serif",
                          color: "var(--color-accent-400)",
                        }}
                      >
                        {u.b}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                Buy with it
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                {related.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      border: "1px solid var(--color-accent-700)",
                      padding: 0,
                    }}
                  >
                    <div
                      style={{
                        height: "78px",
                        overflow: "hidden",
                        borderBottom: "1px solid var(--color-accent-700)",
                        background: "var(--color-accent-800)",
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
                      >
                        {r.name}
                      </div>
                    </div>
                    <div style={{ padding: "12px 14px" }}>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed',sans-serif",
                          fontWeight: 700,
                          fontSize: "17px",
                          lineHeight: "1.05",
                          textTransform: "uppercase",
                          marginBottom: "4px",
                        }}
                      >
                        {r.name}
                      </div>
                      <div
                        style={{
                          font: "400 12px/1.3 'Barlow',sans-serif",
                          color: "var(--color-accent-400)",
                        }}
                      >
                        {r.grade}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden">
        <div
          style={{
            background: "var(--color-surface)",
            borderBottom: "1px solid var(--color-accent)",
            aspectRatio: "4/3",
            overflow: "hidden",
            position: "relative",
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
            {product.name}
          </div>
          <span
            style={{
              position: "absolute",
              left: "12px",
              top: "12px",
              font: "600 9.5px/1 'Barlow',sans-serif",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              background: "var(--color-accent)",
              color: "#fff",
              padding: "7px 9px",
            }}
          >
            Ready stock
          </span>
        </div>
        <div
          style={{ background: "var(--color-bg)", padding: "20px 16px 24px" }}
        >
          <div
            style={{
              font: "400 10px/1 'Barlow',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "12px",
            }}
          >
            Non-Ferro Alloys /{" "}
            <span style={{ color: "var(--color-accent)" }}>{product.name}</span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "40px",
              lineHeight: ".94",
              margin: "0 0 6px",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            {product.name}
          </h1>
          <div
            style={{
              font: "400 14px/1.4 'Barlow',sans-serif",
              color: "var(--color-neutral-600)",
              marginBottom: "16px",
            }}
          >
            {product.use} · Origin: China
          </div>
          <p
            style={{
              font: "400 14.5px/1.55 'Barlow',sans-serif",
              color: "var(--color-text)",
              margin: "0 0 20px",
              textWrap: "pretty",
            }}
          >
            {product.note}
          </p>
          <div
            className="blueprint"
            style={{
              border: "1px solid var(--color-accent)",
              background: "#fff",
              position: "relative",
              marginBottom: "14px",
            }}
          >
            <i className="corner tl"></i>
            <i className="corner tr"></i>
            <i className="corner bl"></i>
            <i className="corner br"></i>
            <div
              style={{
                background: "var(--color-accent)",
                color: "#fff",
                font: "600 10px/1 'Barlow',sans-serif",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                padding: "11px 14px",
              }}
            >
              Typical analysis · % wt
            </div>
            {fesiChem.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  padding: "11px 14px",
                  borderBottom: "1px solid var(--color-bg)",
                }}
              >
                <span
                  style={{
                    font: "400 13px/1.3 'Barlow',sans-serif",
                    color: "var(--color-neutral-600)",
                  }}
                >
                  {s.k}
                </span>
                <span
                  style={{
                    font: "600 13.5px/1.3 'Barlow',sans-serif",
                    color: "var(--color-accent)",
                  }}
                >
                  {s.v}
                </span>
              </div>
            ))}
          </div>
          <div
            className="blueprint"
            style={{
              border: "1px solid var(--color-accent-300)",
              background: "#fff",
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
                letterSpacing: ".14em",
                textTransform: "uppercase",
                padding: "11px 14px",
                borderBottom: "1px solid var(--color-accent-300)",
                color: "var(--color-accent)",
              }}
            >
              Supply &amp; packing
            </div>
            {fesiSupply.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  padding: "11px 14px",
                  borderBottom: "1px solid var(--color-bg)",
                }}
              >
                <span
                  style={{
                    font: "400 13px/1.3 'Barlow',sans-serif",
                    color: "var(--color-neutral-600)",
                  }}
                >
                  {s.k}
                </span>
                <span
                  style={{
                    font: "600 13.5px/1.3 'Barlow',sans-serif",
                    color: "var(--color-accent)",
                    textAlign: "right",
                  }}
                >
                  {s.v}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              font: "400 12px/1.5 'Barlow',sans-serif",
              color: "var(--color-neutral-600)",
              margin: "14px 0 0",
            }}
          >
            COA for your lot is sent with the quotation.
          </p>
        </div>
        <div
          style={{
            position: "sticky",
            bottom: 0,
            background: "var(--color-accent)",
            padding: "10px 12px",
            display: "flex",
            gap: "8px",
            zIndex: 50,
          }}
        >
          <a
            href={`https://wa.me/923009405230?text=Salam.%20${product.name}%20ka%20rate%20chahiye.`}
            style={{
              flex: 1,
              background: "#fff",
              color: "var(--color-accent)",
              font: "700 13px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              padding: "15px",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Order {product.name}
          </a>
          <a
            href="tel:+923009405230"
            style={{
              flex: "none",
              border: "1px solid var(--color-neutral-600)",
              color: "#fff",
              font: "700 13px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              padding: "15px 20px",
              textDecoration: "none",
            }}
          >
            Call
          </a>
        </div>
      </div>
    </>
  );
}
