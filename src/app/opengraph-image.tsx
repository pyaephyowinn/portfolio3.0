import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pyae Phyo Win | Full Stack Developer";
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
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at 50% 60%, #1a0a2e 0%, #0d0515 50%, #050208 100%)",
          fontFamily: "serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold particle dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              borderRadius: "50%",
              background: "#d4a853",
              opacity: 0.4 + (i % 5) * 0.1,
              left: `${8 + i * 7.5}%`,
              top: `${15 + ((i * 37) % 70)}%`,
            }}
          />
        ))}

        {/* Top decorative line */}
        <div
          style={{
            width: "200px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #d4a853, transparent)",
            marginBottom: "40px",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#f59e0b",
            letterSpacing: "6px",
            textAlign: "center",
            textTransform: "uppercase",
            textShadow: "0 2px 20px rgba(245, 158, 11, 0.3)",
          }}
        >
          Pyae Phyo Win
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(232, 213, 176, 0.7)",
            marginTop: "16px",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Full Stack Developer
        </div>

        {/* Tech badges */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["React", "Next.js", "TypeScript", "Node.js", "AWS"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "6px 16px",
                border: "1px solid rgba(212, 168, 83, 0.4)",
                borderRadius: "4px",
                color: "rgba(232, 213, 176, 0.6)",
                fontSize: "14px",
                letterSpacing: "1px",
                background: "rgba(212, 168, 83, 0.08)",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div
          style={{
            width: "200px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #d4a853, transparent)",
            marginTop: "40px",
          }}
        />

        {/* URL */}
        <div
          style={{
            fontSize: "14px",
            color: "rgba(232, 213, 176, 0.3)",
            marginTop: "20px",
            letterSpacing: "2px",
          }}
        >
          pyaephyowin.com
        </div>
      </div>
    ),
    { ...size }
  );
}
