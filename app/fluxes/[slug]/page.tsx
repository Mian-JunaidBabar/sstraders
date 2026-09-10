import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { fluxes, getRelatedProducts, siteInfo } from "@/data/products";
import { getProductSchema, getBreadcrumbSchema } from "@/lib/schema";
import { buildProductMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return fluxes.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = fluxes.find((p) => p.slug === slug);
  if (!product) return {};
  return buildProductMetadata(product, "fluxes");
}

export default async function FluxProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = fluxes.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);
  const productSchema = getProductSchema(product, "fluxes");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Fluxes", url: "/fluxes" },
    { name: product.name, url: `/fluxes/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            display: "flex",
            gap: "8px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "var(--color-neutral-600)",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/fluxes"
            style={{
              color: "var(--color-neutral-600)",
              textDecoration: "none",
            }}
          >
            Fluxes
          </Link>
          <span>/</span>
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
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <i className="corner tl"></i>
              <i className="corner tr"></i>
              <i className="corner bl"></i>
              <i className="corner br"></i>
              <Image
                src={product.photo}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>

          <div>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <span
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  background: product.status.includes("[confirm]")
                    ? "#d97706"
                    : "var(--color-accent)",
                  color: "#fff",
                  padding: "7px 9px",
                }}
              >
                {product.status}
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
                Foundry Fluxes
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
              {product.use} · Origin: {product.origin || "Imported"}
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

            {/* CHEMICAL ANALYSIS TABLE */}
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
                <span>Technical specification</span>
                <span style={{ color: "var(--color-accent-400)" }}>
                  Composition / Specs
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                {product.chem.map((s, i) => (
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
                        color: s.v.includes("[confirm]")
                          ? "#d97706"
                          : "var(--color-accent)",
                      }}
                    >
                      {s.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SUPPLY TABLE */}
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
                {product.supply.map((s, i) => (
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
                        color: s.v.includes("[confirm]")
                          ? "#d97706"
                          : "var(--color-accent)",
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
                href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam,%20ma%20apki%20website%20pa%20${product.name}%20dekh%20rha%20tha,%20muja%20iska%20rate%20bta%20dein.`}
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
                Order {product.name} on WhatsApp
              </a>
              <a
                href={`tel:${siteInfo.phoneRaw}`}
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
              Message opens pre-filled with the product above. Detailed dosage
              instructions and COA technical sheet are provided upon quotation.
            </p>
          </div>
        </div>

        {/* BOTTOM USES & RELATED PRODUCTS */}
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
                {product.uses.map((u, i) => (
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
                        color: "var(--color-accent-300)",
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
                  <Link
                    key={i}
                    href={r.href}
                    style={{
                      border: "1px solid var(--color-accent-700)",
                      background: "var(--color-accent-800)",
                      textDecoration: "none",
                      color: "#fff",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        height: "78px",
                        overflow: "hidden",
                        borderBottom: "1px solid var(--color-accent-700)",
                        background: "var(--color-accent-800)",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={r.photo}
                        alt={r.name}
                        fill
                        sizes="140px"
                        style={{
                          objectFit: "cover",
                        }}
                      />
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
                  </Link>
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
          <Image
            src={product.photo}
            alt={product.name}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <span
            style={{
              position: "absolute",
              left: "12px",
              top: "12px",
              font: "600 9.5px/1 'Barlow',sans-serif",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              background: product.status.includes("[confirm]")
                ? "#d97706"
                : "var(--color-accent)",
              color: "#fff",
              padding: "7px 9px",
            }}
          >
            {product.status}
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
              display: "flex",
              gap: "6px",
            }}
          >
            <Link
              href="/"
              style={{
                color: "var(--color-neutral-600)",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/fluxes"
              style={{
                color: "var(--color-neutral-600)",
                textDecoration: "none",
              }}
            >
              Fluxes
            </Link>
            <span>/</span>
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
            {product.use} · Origin: {product.origin || "Imported"}
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
              Technical specifications
            </div>
            {product.chem.map((s, i) => (
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
                    color: s.v.includes("[confirm]")
                      ? "#d97706"
                      : "var(--color-accent)",
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
            {product.supply.map((s, i) => (
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
                    color: s.v.includes("[confirm]")
                      ? "#d97706"
                      : "var(--color-accent)",
                    textAlign: "right",
                  }}
                >
                  {s.v}
                </span>
              </div>
            ))}
          </div>
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
            href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam,%20ma%20apki%20website%20pa%20${product.name}%20dekh%20rha%20tha,%20muja%20iska%20rate%20bta%20dein.`}
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
            href={`tel:${siteInfo.phoneRaw}`}
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
