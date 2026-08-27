import { ImageResponse } from "next/og";
import { siteInfo } from "@/data/products";

export const alt = siteInfo.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101112",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#9a9c9e",
            fontWeight: 600,
          }}
        >
          Ferro Alloys · Non-Ferro Alloys · Crucibles
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              fontWeight: 800,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            {siteInfo.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#d4d4d5",
              marginTop: 24,
              maxWidth: 900,
            }}
          >
            Direct importers of high-grade foundry alloys &amp; crucibles in{" "}
            {siteInfo.address.city}, Pakistan.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #2a2c2e",
            paddingTop: 28,
            fontSize: 22,
            color: "#9a9c9e",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          <div style={{ display: "flex" }}>{siteInfo.address.full}</div>
          <div style={{ display: "flex" }}>{siteInfo.phone}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
