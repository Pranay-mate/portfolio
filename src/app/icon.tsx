import { ImageResponse } from "next/og";

export const dynamic = "force-static";
// Larger source = sharper at every browser-tab render size
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 55%, #d946ef 100%)",
          borderRadius: 14,
          color: "white",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontSize: 44,
          fontWeight: 800,
          letterSpacing: "-0.06em",
        }}
      >
        P
      </div>
    ),
    { ...size },
  );
}
