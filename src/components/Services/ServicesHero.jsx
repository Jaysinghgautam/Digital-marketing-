import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, Zap } from "lucide-react";
import Reveal from "../Reveal";

const STATS = [
  ["6", "Growth Disciplines"],
  ["3.2x", "Average ROAS"],
  ["47%", "Avg CAC Reduction"],
  ["92%", "Client Retention"],
];

export default function ServicesHero() {
  return (
    <>
      <section style={{ background: "#070d18", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "560px", height: "560px", borderRadius: "50%", background: "rgba(34,211,238,0.07)", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(96,165,250,0.05)", filter: "blur(80px)" }} />

        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "96px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="services-hero-grid">
          <div>
            <Reveal>
              <div className="section-badge" style={{ marginBottom: "1.25rem" }}>
                <Sparkles size={13} /> Digital Growth, Engineered
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 900, color: "#f1f5f9", lineHeight: 1.08, letterSpacing: "-0.03em", margin: "0 0 1.25rem" }}>
                Marketing that <span className="grad-text">moves business.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.75, maxWidth: "480px", marginBottom: "2rem" }}>
                From organic discovery to paid acquisition, content, conversion, and analytics — we build the complete growth engine around your business.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="#services" className="btn-primary">
                  Explore Services <ArrowRight size={18} />
                </a>
                <Link to="/contact" className="btn-secondary">
                  Talk to an Expert
                </Link>
              </div>
            </Reveal>
            <Reveal delay={450}>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {["Strategy First", "Data Backed", "Results Focused"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#94a3b8" }}>
                    <CheckCircle2 size={15} color="#22d3ee" /> {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={150}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: "-16px", background: "rgba(34,211,238,0.07)", borderRadius: "28px", filter: "blur(24px)" }} />
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                  alt="Marketing team"
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,13,24,0.7) 0%, transparent 60%)" }} />
                
                {/* Float metric */}
                <div style={{
                  position: "absolute", bottom: "20px", left: "20px", right: "20px",
                  background: "rgba(11,23,40,0.9)", backdropFilter: "blur(16px)",
                  borderRadius: "14px", padding: "16px 20px", border: "1px solid rgba(34,211,238,0.15)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <p style={{ fontSize: "0.75rem", color: "#64748b", margin: "0 0 4px" }}>Campaign Performance</p>
                      <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "#22d3ee", margin: 0, lineHeight: 1 }}>+128.4%</p>
                    </div>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(34,211,238,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <TrendingUp size={20} color="#22d3ee" />
                    </div>
                  </div>
                  <div style={{ marginTop: "12px", height: "6px", borderRadius: "4px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                    <div style={{ width: "82%", height: "100%", background: "linear-gradient(90deg,#22d3ee,#2dd4bf)", borderRadius: "4px" }} />
                  </div>
                </div>
              </div>

              {/* Side badge */}
              <div style={{
                position: "absolute", right: "-20px", top: "24px",
                background: "#0b1728", borderRadius: "12px", padding: "12px 16px",
                border: "1px solid rgba(34,211,238,0.15)",
                display: "flex", alignItems: "center", gap: "10px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
              }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(34,211,238,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Zap size={17} color="#22d3ee" />
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", color: "#64748b", margin: 0 }}>Growth Engine</p>
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#f1f5f9", margin: 0 }}>Optimized</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: "#0b1728" }}>
        <div className="section-glow-divider" />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 24px" }}>
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
          .services-hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  );
}
