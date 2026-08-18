import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "SS Traders",
  description:
    "Direct importers of high-grade ferro alloys, non-ferro alloys and premium crucibles in Lahore, Pakistan.",
};

function Nav() {
  return (
    <nav>
      {/* Desktop Nav */}
      <div className="hidden md:block">
        <div
          style={{
            background: "var(--color-accent)",
            color: "#fff",
            font: "500 11.5px/1 'Barlow',sans-serif",
            letterSpacing: ".04em",
            padding: "9px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            Lahore · Direct importers · Ready stock in warehouse today
          </span>
          <span style={{ display: "flex", gap: "22px" }}>
            <span>Rates updated weekly</span>
            <span style={{ fontWeight: 600 }}>+92 300 9405230</span>
          </span>
        </div>
        <div
          style={{
            background: "var(--color-accent-100)",
            borderBottom: "1px solid var(--color-accent)",
            padding: "16px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <img
              src="/assets/ss-traders-logo.png"
              alt="SS Traders — Metal Industry Suppliers"
              style={{ height: "34px", width: "auto", display: "block" }}
            />
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              font: "600 12.5px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <Link href="/ferro-alloys" className="hover:text-black">
              Ferro Alloys
            </Link>
            <Link href="/non-ferro-alloys" className="hover:text-black">
              Non-Ferro Alloys
            </Link>
            <Link href="/graphite-crucibles" className="hover:text-black">
              Graphite Crucibles
            </Link>
            <Link href="/about" className="hover:text-black">
              About
            </Link>
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>
            <a
              href="https://wa.me/923009405230"
              className="btn btn-primary"
              style={{
                borderRadius: 0,
                fontFamily: "'Barlow Condensed',sans-serif",
                letterSpacing: ".08em",
                padding: "11px 18px",
              }}
            >
              WhatsApp order
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <div
          style={{
            background: "var(--color-accent)",
            color: "#fff",
            font: "500 10px/1 'Barlow',sans-serif",
            letterSpacing: ".04em",
            padding: "8px 16px",
            textAlign: "center",
          }}
        >
          Ready stock in Lahore · Rates updated weekly
        </div>
        <div
          style={{
            background: "var(--color-accent-100)",
            borderBottom: "1px solid var(--color-accent)",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <img
              src="/assets/ss-traders-logo.png"
              alt="SS Traders"
              style={{ height: "26px", width: "auto", display: "block" }}
            />
          </Link>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "22px",
            }}
          >
            <span
              style={{ height: "2px", background: "var(--color-accent)" }}
            ></span>
            <span
              style={{ height: "2px", background: "var(--color-accent)" }}
            ></span>
            <span
              style={{ height: "2px", background: "var(--color-accent)" }}
            ></span>
          </span>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      {/* Desktop Footer */}
      <div
        className="hidden md:block"
        style={{
          background: "var(--color-accent-100)",
          padding: "40px 40px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: "40px",
            borderTop: "1px solid var(--color-accent)",
            paddingTop: "26px",
          }}
        >
          <div>
            <img
              src="/assets/ss-traders-logo.png"
              alt="SS Traders"
              style={{
                height: "30px",
                width: "auto",
                display: "block",
                marginBottom: "16px",
              }}
            />
            <p
              style={{
                font: "400 14px/1.55 'Barlow',sans-serif",
                color: "var(--color-text)",
                opacity: 0.8,
                margin: 0,
                maxWidth: "340px",
                textWrap: "pretty",
              }}
            >
              Direct importers and trusted suppliers of high-grade ferro alloys,
              non-ferro alloys and premium crucibles. Serving foundries and
              factories across Pakistan with ready stock and honest rates.
            </p>
          </div>
          <div>
            <div
              style={{
                font: "600 10.5px/1 'Barlow',sans-serif",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "14px",
              }}
            >
              Our products
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                font: "400 14px/1.3 'Barlow',sans-serif",
                color: "var(--color-text)",
                opacity: 0.8,
              }}
            >
              <Link href="/ferro-alloys" className="hover:text-black">
                Ferro Alloys
              </Link>
              <Link href="/non-ferro-alloys" className="hover:text-black">
                Non-Ferro Alloys
              </Link>
              <Link href="/graphite-crucibles" className="hover:text-black">
                Graphite Crucibles
              </Link>
            </div>
          </div>
          <div>
            <div
              style={{
                font: "600 10.5px/1 'Barlow',sans-serif",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "14px",
              }}
            >
              Contact us
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                font: "400 14px/1.3 'Barlow',sans-serif",
                color: "var(--color-text)",
                opacity: 0.8,
              }}
            >
              <a href="tel:+923009405230" className="hover:text-black">
                +92 300 9405230
              </a>
              <a
                href="mailto:sstraders03009405230@gmail.com"
                className="hover:text-black"
              >
                sstraders03009405230@gmail.com
              </a>
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--color-accent-300)",
            marginTop: "26px",
            paddingTop: "14px",
            font: "400 12px/1 'Barlow',sans-serif",
            color: "var(--color-neutral-600)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Copyright © 2026 SS Traders · All rights reserved</span>
          <span>Metal Industry Suppliers</span>
        </div>
      </div>

      {/* Mobile Footer */}
      <div
        className="md:hidden"
        style={{
          background: "var(--color-accent-100)",
          padding: "40px 24px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "36px",
            borderTop: "1px solid var(--color-accent)",
            paddingTop: "26px",
          }}
        >
          <div>
            <img
              src="/assets/ss-traders-logo.png"
              alt="SS Traders"
              style={{
                height: "26px",
                width: "auto",
                display: "block",
                marginBottom: "16px",
              }}
            />
            <p
              style={{
                font: "400 14px/1.55 'Barlow',sans-serif",
                color: "var(--color-text)",
                opacity: 0.8,
                margin: 0,
                textWrap: "pretty",
              }}
            >
              Direct importers and trusted suppliers of high-grade ferro alloys,
              non-ferro alloys and premium crucibles.
            </p>
          </div>
          <div style={{ display: "flex", gap: "36px" }}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "14px",
                }}
              >
                Products
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  font: "400 14px/1.3 'Barlow',sans-serif",
                  color: "var(--color-text)",
                  opacity: 0.8,
                }}
              >
                <Link href="/ferro-alloys">Ferro Alloys</Link>
                <Link href="/non-ferro-alloys">Non-Ferro</Link>
                <Link href="/graphite-crucibles">Crucibles</Link>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  font: "600 10px/1 'Barlow',sans-serif",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "14px",
                }}
              >
                Contact
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  font: "400 14px/1.3 'Barlow',sans-serif",
                  color: "var(--color-text)",
                  opacity: 0.8,
                }}
              >
                <a href="tel:+923009405230">+92 300 9405230</a>
                <span>Lahore</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--color-accent-300)",
            marginTop: "32px",
            paddingTop: "20px",
            font: "400 11px/1.4 'Barlow',sans-serif",
            color: "var(--color-neutral-600)",
            textAlign: "center",
          }}
        >
          Copyright © 2026 SS Traders
          <br />
          All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="min-h-full flex flex-col"
        style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
