import { CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";

const BULLETS = [
  "Strategy before execution — we define the blueprint before writing a single ad",
  "Creative backed by real-time conversion and behavioral data",
  "Long-term transparent growth partnership over short-term vanity metrics",
  "Dedicated senior specialists across design, ads, and technical SEO",
];

export default function AboutStory() {
  return (
    <section style={{ background: "#070d18" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "96px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="about-story-grid"
      >
        <Reveal variant="scale">
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85"
              alt="Strategy session"
              style={{
                width: "100%",
                aspectRatio: "4/3",
                objectFit: "cover",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-15px",
                right: "-15px",
                background: "rgba(11,23,40,0.85)",
                border: "1px solid rgba(34,211,238,0.3)",
                backdropFilter: "blur(12px)",
                padding: "12px 18px",
                borderRadius: "12px",
                color: "#22d3ee",
                fontSize: "0.85rem",
                fontWeight: 700,
              }}
            >
              🚀 3x Industry Avg. Retention
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal variant="up">
            <div className="section-badge" style={{ marginBottom: "1.25rem" }}>
              Our Story & Philosophy
            </div>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h2
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 900,
                color: "#f1f5f9",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Marketing should create <br />
              <span className="grad-text">momentum, not noise.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "1rem" }}>
              We started Ascend Digital with one conviction: businesses shouldn't have to choose between stunning brand aesthetics and measurable bottom-line performance.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Today, our strategists, copywriters, media buyers, and analytics engineers work together to connect every marketing dollar to real pipeline velocity and customer lifetime value.
            </p>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {BULLETS.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.92rem", color: "#cbd5e1" }}>
                  <CheckCircle2 size={18} color="#22d3ee" style={{ flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
