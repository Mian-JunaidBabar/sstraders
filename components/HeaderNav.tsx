"use client";

import { useState } from "react";
import Link from "next/link";
import { siteInfo } from "@/data/products";

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

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
            {siteInfo.address.city} · Direct importers · Ready stock in
            warehouse today
          </span>
          <span style={{ display: "flex", gap: "22px" }}>
            <span>Rates updated weekly</span>
            <span style={{ fontWeight: 600 }}>{siteInfo.phone}</span>
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
              src="/logo.webp"
              alt={`${siteInfo.name} — Metal Industry Suppliers`}
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
              Non-Ferro
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
              Crucibles
            </Link>
            <Link href="/about" className="hover:text-black">
              About
            </Link>
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>
            <a
              href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam.%20Stock%20aur%20rates%20chahiye.`}
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

      {/* Mobile Nav Header */}
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
          Ready stock in {siteInfo.address.city} · Rates updated weekly
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
          <Link href="/" onClick={closeMenu}>
            <img
              src="/logo.webp"
              alt={siteInfo.name}
              style={{ height: "26px", width: "auto", display: "block" }}
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "32px",
            }}
          >
            <span
              style={{
                height: "2px",
                width: "100%",
                background: "var(--color-accent)",
                transition: "transform 0.2s",
                transform: mobileMenuOpen
                  ? "rotate(45deg) translate(4px, 4px)"
                  : "none",
              }}
            ></span>
            <span
              style={{
                height: "2px",
                width: "100%",
                background: "var(--color-accent)",
                opacity: mobileMenuOpen ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            ></span>
            <span
              style={{
                height: "2px",
                width: "100%",
                background: "var(--color-accent)",
                transition: "transform 0.2s",
                transform: mobileMenuOpen
                  ? "rotate(-45deg) translate(4px, -4px)"
                  : "none",
              }}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "var(--color-accent-100)",
              borderBottom: "1px solid var(--color-accent)",
              padding: "20px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              font: "700 16px/1 'Barlow Condensed',sans-serif",
              letterSpacing: ".1em",
              textTransform: "uppercase",
            }}
          >
            <Link
              href="/"
              onClick={closeMenu}
              style={{ color: "var(--color-accent)" }}
            >
              Home
            </Link>
            <Link
              href="/ferro-alloys"
              onClick={closeMenu}
              style={{ color: "var(--color-accent)" }}
            >
              Ferro Alloys
            </Link>
            <Link
              href="/non-ferro-alloys"
              onClick={closeMenu}
              style={{ color: "var(--color-accent)" }}
            >
              Non-Ferro Alloys
            </Link>
            <Link
              href="/master-alloys"
              onClick={closeMenu}
              style={{ color: "var(--color-accent)" }}
            >
              Master Alloys
            </Link>
            <Link
              href="/metals"
              onClick={closeMenu}
              style={{ color: "var(--color-accent)" }}
            >
              Metals
            </Link>
            <Link
              href="/fluxes"
              onClick={closeMenu}
              style={{ color: "var(--color-accent)" }}
            >
              Fluxes
            </Link>
            <Link
              href="/graphite-crucibles"
              onClick={closeMenu}
              style={{ color: "var(--color-accent)" }}
            >
              Graphite Crucibles
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              style={{ color: "var(--color-accent)" }}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              style={{ color: "var(--color-accent)" }}
            >
              Contact
            </Link>
            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
              <a
                href={`https://wa.me/${siteInfo.whatsappRaw}?text=Salam.%20Stock%20aur%20rates%20chahiye.`}
                style={{
                  flex: 1,
                  background: "var(--color-accent)",
                  color: "#fff",
                  padding: "14px",
                  textAlign: "center",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                WhatsApp Order
              </a>
              <a
                href={`tel:${siteInfo.phoneRaw}`}
                style={{
                  border: "1px solid var(--color-accent)",
                  color: "var(--color-accent)",
                  padding: "14px 20px",
                  textAlign: "center",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
