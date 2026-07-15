import { ImageResponse } from "next/og";
import { getBlogPost } from "@/data/blog";

export const alt = "Guido";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#1e2a4a";
const NAVY_DARK = "#141d34";
const GOLD = "#e0a63c";
const GOLD_DARK = "#c98a2e";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post?.title ?? "Guido";
  const series = post?.series ?? "Guido";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: NAVY,
          backgroundImage: `radial-gradient(circle at 88% 8%, ${NAVY_DARK} 0%, ${NAVY} 55%)`,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: GOLD_DARK,
              color: NAVY,
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            G
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 800, color: "#ffffff", letterSpacing: 1 }}>
            GUIDO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 980 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: 999,
              border: `2px solid ${GOLD}`,
              color: GOLD,
              fontSize: 24,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {series}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            borderTop: `2px solid rgba(255,255,255,0.15)`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: GOLD }}>
            guido.fr
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
            — Guides pratiques ultra-ciblés
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
