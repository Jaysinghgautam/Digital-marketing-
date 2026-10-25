import { Sparkles } from "lucide-react";
import Reveal from "../Reveal";

export default function ContactHero() {
  return (
    <section style={{ background: "#070d18", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Ambient background glows */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 24px 60px", position: "relative" }}>
        <Reveal variant="up" className="max-w-3xl">
          <div className="section-badge" style={{ marginBottom: "1.25rem" }}>
            <Sparkles size={14} />
            Let's Talk Growth
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#f1f5f9", margin: "0 0 1.25rem" }}>
            Let's build your next <br />
            <span className="grad-text">growth chapter.</span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#94a3b8", lineHeight: 1.75, maxWidth: "640px", margin: 0 }}>
            Tell us where you want to go, what's holding your revenue back, and what success looks like. We'll analyze your current marketing and send you a custom growth roadmap within 24 hours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
