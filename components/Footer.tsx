import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/data/products";

export default function Footer() {
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
            <Image
              src="/logo.webp"
              alt={siteInfo.name}
              width={117}
              height={30}
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
              {siteInfo.description}
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
              <Link href="/master-alloys" className="hover:text-black">
                Master Alloys
              </Link>
              <Link href="/metals" className="hover:text-black">
                Metals
              </Link>
              <Link href="/fluxes" className="hover:text-black">
                Fluxes
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
              <a href={`tel:${siteInfo.phoneRaw}`} className="hover:text-black">
                {siteInfo.phone}
              </a>
              <a href={`mailto:${siteInfo.email}`} className="hover:text-black">
                {siteInfo.email}
              </a>
              <span>{siteInfo.address.full}</span>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--color-accent-300)",
            marginTop: "26px",
            paddingTop: "14px",
            font: "400 12px/1 'Barlow',sans-serif",
            color: "var(--color-neutral-700)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Copyright © 2026 {siteInfo.name} · All rights reserved</span>
          <span>Metal Industry Suppliers · NTN: {siteInfo.ntn}</span>
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
            <Image
              src="/logo.webp"
              alt={siteInfo.name}
              width={101}
              height={26}
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
                <Link href="/master-alloys">Master Alloys</Link>
                <Link href="/metals">Metals</Link>
                <Link href="/fluxes">Fluxes</Link>
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
                <a href={`tel:${siteInfo.phoneRaw}`}>{siteInfo.phone}</a>
                <span>{siteInfo.address.city}</span>
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
            color: "var(--color-neutral-700)",
            textAlign: "center",
          }}
        >
          Copyright © 2026 {siteInfo.name}
          <br />
          All rights reserved
        </div>
      </div>
    </footer>
  );
}
