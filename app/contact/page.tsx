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
            and quantity and you&apos;ll have a rate, stock position and
            delivery time back.
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
                href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam,%20ma%20apki%20website%20dekh%20rha%20tha,%20muja%20rates%20bta%20dein.`}
                className="btn btn-white"
                style={{
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
                className="btn btn-secondary"
                style={{
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
                  marginBottom: "12px",
                }}
              >
                Connect on Social Media
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.facebook.com/lahore.sstraders.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow SS Traders on Facebook"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-600/60 rounded text-sm font-medium text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 fill-current text-amber-500"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/ss.traders.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow SS Traders on Instagram"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-600/60 rounded text-sm font-medium text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 fill-current text-amber-500"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    />
                  </svg>
                  <span>Instagram</span>
                </a>
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
        className="md:grid md:grid-cols-2 flex flex-col items-stretch"
      >
        <div
          style={{
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
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
          className="w-full h-full min-h-[380px] md:min-h-full border-t md:border-t-0 md:border-l relative"
          style={{
            borderColor: "var(--color-accent-300)",
          }}
        >
          <iframe
            title={`${siteInfo.name} warehouse location on Google Maps`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.5130651255636!2d74.30339957533333!3d31.59239834358032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d58a7448091%3A0x3c2de03003d1b5dd!2sSS%20Traders%20%7C%20Ferro%20Alloys%20%26%20Non%20Ferro%20Alloys%20Supplier!5e0!3m2!1sen!2s!4v1789046611400!5m2!1sen!2s"
            className="w-full h-full md:absolute md:inset-0"
            style={{
              border: 0,
              width: "100%",
              height: "100%",
              minHeight: "380px",
              display: "block",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </>
  );
}
