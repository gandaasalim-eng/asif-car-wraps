import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050507",
          color: "#ffffff",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        A
        <div style={{ width: "3px", height: "16px", background: "#FF006E", marginLeft: "2px" }} />
      </div>
    ),
    size,
  );
}
