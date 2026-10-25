import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "../Reveal";

const STATS = [
  ["10+", "Years Experience"],
  ["150+", "Projects Delivered"],
  ["3.2x", "Average ROAS"],
  ["92%", "Client Retention"],
];

export default function AboutHero() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section style={{ background: "#070d18", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-120px", right: "-120px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(34,211,238,0.07)", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(96,165,250,0.05)", filter: "blur(80px)" }} />

        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "96px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="about-hero-grid">
          <div>
            <Reveal variant="up">
              <div className="section-badge" style={{ marginBottom: "1.25rem" }}>
                <Sparkles size={13} />
                About Ascend Digital
              </div>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <h1 style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#f1f5f9", margin: "0 0 1.25rem" }}>
                We turn ambitious<br />
                <span className="grad-text">brands into growth stories.</span>
              </h1>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.75, maxWidth: "480px", marginBottom: "2rem" }}>
                We're a performance-focused digital marketing team combining strategy, creativity, technology, and analytics to build marketing engines that actually move businesses forward.
              </p>
            </Reveal>
            <Reveal variant="up" delay={300}>
              <Link to="/contact" className="btn-primary">
                Start a Conversation <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={150}>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Our team at work"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)" }}
              />
              <div style={{
                position: "absolute", bottom: "-20px", left: "-20px",
                background: "linear-gradient(135deg,#22d3ee,#2dd4bf)",
                color: "#070d18", borderRadius: "14px", padding: "16px 20px",
                boxShadow: "0 16px 48px rgba(34,211,238,0.3)",
              }}>
                <p style={{ fontSize: "2rem", fontWeight: 900, margin: 0, lineHeight: 1 }}>10+</p>
                <p style={{ fontSize: "0.8rem", fontWeight: 600, margin: 0, marginTop: "2px" }}>Years of Experience</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: "#0b1728" }}>
        <div className="section-glow-divider" />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "32px" }} className="stats-grid">
            {STATS.map(([val, label], i) => (
              <Reveal key={label} variant="up" delay={i * 80}>
                <div style={{ textAlign: "center" }}>
                  <div className="stat-number">{val}</div>
                  <p style={{ marginTop: "8px", fontSize: "0.875rem", color: "#64748b" }}>{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="section-glow-divider" />
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  );
}
