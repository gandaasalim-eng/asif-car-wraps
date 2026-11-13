import { ImageResponse } from "next/og";

export const alt = "Asif Car Wraps — premium car wrapping, PPF, and custom styling";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#050507",
          padding: "64px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", width: "120px", height: "6px", background: "#FF006E" }} />
        <div style={{ display: "flex", marginTop: "28px", color: "#FF006E", fontSize: 22, letterSpacing: 6 }}>
          PREMIUM AUTOMOTIVE STYLING
        </div>
        <div style={{ display: "flex", marginTop: "16px", fontSize: 84, fontWeight: 700, letterSpacing: -1 }}>
          ASIF CAR WRAPS
        </div>
        <div style={{ display: "flex", marginTop: "18px", fontSize: 30, color: "#A5A5B0" }}>
          Car wrapping, paint protection film, and custom styling.
        </div>
      </div>
    ),
    size,
  );
}
