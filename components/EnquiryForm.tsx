"use client";

import { useState, type FormEvent } from "react";
import { siteInfo } from "@/data/products";

const fieldLabelStyle: React.CSSProperties = {
  font: "600 10px/1 'Barlow',sans-serif",
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "var(--color-accent-400)",
  marginBottom: "7px",
  display: "block",
};

const fieldInputStyle: React.CSSProperties = {
  border: "1px solid var(--color-neutral-600)",
  height: "44px",
  width: "100%",
  background: "transparent",
  color: "#fff",
  padding: "0 12px",
  outline: "none",
};

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (!name || !phone) {
      setStatus("error");
      return;
    }

    const email = String(data.get("email") || "").trim();
    const material = String(data.get("material") || "").trim();
    const quantity = String(data.get("quantity") || "").trim();
    const city = String(data.get("city") || "").trim();
    const message = String(data.get("message") || "").trim();

    const lines = [
      `Salam, my name is ${name}.`,
      material && `Material & grade: ${material}`,
      quantity && `Quantity: ${quantity}`,
      city && `Delivery city: ${city}`,
      email && `Email: ${email}`,
      message && `Message: ${message}`,
      `Phone: ${phone}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${siteInfo.whatsappRaw}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label htmlFor="enquiry-name" style={fieldLabelStyle}>
          Your name
        </label>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          style={fieldInputStyle}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        <div>
          <label htmlFor="enquiry-phone" style={fieldLabelStyle}>
            Phone
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            style={fieldInputStyle}
          />
        </div>
        <div>
          <label htmlFor="enquiry-email" style={fieldLabelStyle}>
            Email
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            style={fieldInputStyle}
          />
        </div>
      </div>
      <div>
        <label htmlFor="enquiry-material" style={fieldLabelStyle}>
          Material &amp; grade
        </label>
        <input
          id="enquiry-material"
          name="material"
          type="text"
          placeholder="e.g. Ferro Silicon 75%"
          style={fieldInputStyle}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        <div>
          <label htmlFor="enquiry-quantity" style={fieldLabelStyle}>
            Quantity
          </label>
          <input
            id="enquiry-quantity"
            name="quantity"
            type="text"
            placeholder="Tons"
            style={fieldInputStyle}
          />
        </div>
        <div>
          <label htmlFor="enquiry-city" style={fieldLabelStyle}>
            Delivery city
          </label>
          <input
            id="enquiry-city"
            name="city"
            type="text"
            placeholder="Lahore"
            style={fieldInputStyle}
          />
        </div>
      </div>
      <div>
        <label htmlFor="enquiry-message" style={fieldLabelStyle}>
          Message
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          style={{ ...fieldInputStyle, height: "84px", padding: "12px", resize: "none" }}
        ></textarea>
      </div>
      <button
        type="submit"
        style={{
          background: "#fff",
          color: "var(--color-accent)",
          font: "700 14px/1 'Barlow Condensed',sans-serif",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          padding: "17px",
          textAlign: "center",
          cursor: "pointer",
          border: "none",
        }}
      >
        Send enquiry on WhatsApp
      </button>
      {status === "sent" && (
        <p
          role="status"
          style={{
            font: "600 12.5px/1.4 'Barlow',sans-serif",
            color: "#4ade80",
            margin: 0,
          }}
        >
          WhatsApp opened in a new tab with your enquiry — hit send there and
          we&apos;ll reply with a quotation.
        </p>
      )}
      {status === "error" && (
        <p
          role="alert"
          style={{
            font: "600 12.5px/1.4 'Barlow',sans-serif",
            color: "#f87171",
            margin: 0,
          }}
        >
          Please add your name and phone number so we can get back to you.
        </p>
      )}
    </form>
  );
}
