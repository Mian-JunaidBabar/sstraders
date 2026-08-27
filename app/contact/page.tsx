import Link from "next/link";
import type { Metadata } from "next";
import { siteInfo } from "@/data/products";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us — Rates, Stock & Enquiries",
  description: `Reach ${siteInfo.name} on WhatsApp, phone or email for today's rates and stock position. Warehouse in ${siteInfo.address.full}.`,
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
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
          padding: "52px 40px 44px",
        }}
        className="md:grid md:grid-cols-2 md:gap-12 flex flex-col gap-12"
      >
        <div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              font: "600 10.5px/1 'Barlow',sans-serif",
              letterSpacing: ".2em",
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
            <span style={{ color: "#fff" }}>Contact us</span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "64px",
              lineHeight: ".92",
              margin: "0 0 18px",
              textTransform: "uppercase",
            }}
          >
            Aaj ka rate
            <br />
            chahiye?
          </h1>
          <p
            style={{
              font: "400 17px/1.5 'Barlow',sans-serif",
              color: "#d4d4d5",
              margin: "0 0 30px",
              maxWidth: "520px",
              textWrap: "pretty",
            }}
          >
            Questions about stock or today&apos;s market rates? Message us on
            WhatsApp — that is where we are fastest. Send the material, grade
            and quantity and you&apos;ll have a rate, stock position and delivery
            time back.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              background: "var(--color-accent-700)",
              border: "1px solid var(--color-accent-700)",
              maxWidth: "520px",
            }}
          >
            <div
              style={{
                background: "var(--color-accent)",
                padding: "20px 22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    font: "600 10px/1 'Barlow',sans-serif",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-400)",
                    marginBottom: "8px",
                  }}
                >
                  WhatsApp · fastest
                </div>
                <div
                  style={{ font: "800 30px/1 'Barlow Condensed',sans-serif" }}
                >
                  {siteInfo.whatsapp}
                </div>
              </div>
              <a
                href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam.%20Today's%20rates%20chahiye.`}
                style={{
                  background: "#fff",
                  color: "var(--color-accent)",
                  font: "700 13px/1 'Barlow Condensed',sans-serif",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  padding: "15px 20px",
                  textDecoration: "none",
                }}
              >
                Message
              </a>
            </div>
            <div
              style={{
                background: "var(--color-accent)",
                padding: "20px 22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    font: "600 10px/1 'Barlow',sans-serif",
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-400)",
                    marginBottom: "8px",
                  }}
                >
                  Phone
                </div>
                <div
                  style={{ font: "800 30px/1 'Barlow Condensed',sans-serif" }}
                >
                  {siteInfo.phone}
                </div>
              </div>
              <a
                href={`tel:${siteInfo.phoneRaw}`}
                style={{
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
            <div
              style={{
                background: "var(--color-accent)",
                padding: "20px 22px",
              }}
            >
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-400)",
                  marginBottom: "8px",
                }}
              >
                Email
              </div>
              <div style={{ font: "400 16px/1.3 'Barlow',sans-serif" }}>
                <a
                  href={`mailto:${siteInfo.email}`}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {siteInfo.email}
                </a>
              </div>
            </div>
            <div
              style={{
                background: "var(--color-accent)",
                padding: "20px 22px",
              }}
            >
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-400)",
                  marginBottom: "8px",
                }}
              >
                Warehouse &amp; office
              </div>
              <div style={{ font: "400 16px/1.4 'Barlow',sans-serif" }}>
                {siteInfo.address.full}
                <br />
                <span
                  style={{
                    color: "var(--color-accent-400)",
                    fontSize: "14px",
                  }}
                >
                  {siteInfo.address.street} · NTN: {siteInfo.ntn}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="blueprint"
          style={{
            border: "1px solid var(--color-neutral-600)",
            background: "var(--color-accent)",
            padding: "26px",
            position: "relative",
          }}
        >
          <i className="corner tl"></i>
          <i className="corner tr"></i>
          <i className="corner bl"></i>
          <i className="corner br"></i>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "30px",
              lineHeight: "1",
              margin: "0 0 6px",
              textTransform: "uppercase",
            }}
          >
            Send your enquiry
          </h2>
          <p
            style={{
              font: "400 13.5px/1.5 'Barlow',sans-serif",
              color: "var(--color-accent-400)",
              margin: "0 0 22px",
            }}
          >
            Prefer email? Fill this and we&apos;ll reply with a quotation.
          </p>
          <EnquiryForm />
        </div>
      </div>

      <div
        style={{ background: "var(--color-surface)", padding: 0 }}
        className="md:grid md:grid-cols-2 flex flex-col"
      >
        <div style={{ padding: "36px 40px" }}>
          <div
            style={{
              font: "600 10.5px/1 'Barlow',sans-serif",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "12px",
            }}
          >
            Our location
          </div>
          <h3
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 800,
              fontSize: "32px",
              lineHeight: "1",
              margin: "0 0 12px",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            Come and see the stock
          </h3>
          <p
            style={{
              font: "400 14.5px/1.55 'Barlow',sans-serif",
              color: "var(--color-text)",
              margin: "0 0 18px",
              textWrap: "pretty",
            }}
          >
            Buyers are welcome at the warehouse. Call before you come and
            we&apos;ll have the grades you want laid out.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <div
              style={{
                font: "400 10.5px/1 'Barlow',sans-serif",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "var(--color-neutral-600)",
              }}
            >
              Hours
            </div>
            <div
              style={{
                font: "400 14.5px/1.5 'Barlow',sans-serif",
                color: "var(--color-accent)",
              }}
            >
              {siteInfo.hours}
            </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "1px solid var(--color-accent-300)",
            minHeight: "300px",
          }}
        >
          <iframe
            title={`${siteInfo.name} warehouse location on Google Maps`}
            src={`https://www.google.com/maps?q=${siteInfo.geo.latitude},${siteInfo.geo.longitude}&z=15&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: "300px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
