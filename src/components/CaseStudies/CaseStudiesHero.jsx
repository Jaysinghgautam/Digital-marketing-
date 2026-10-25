import Reveal from "../Reveal";

const RESULTS = [
  { value: "3.2x", label: "Average Client ROAS" },
  { value: "47%", label: "Lower Cost Per Lead" },
  { value: "92%", label: "Retainer Retention Rate" },
  { value: "150+", label: "SME Sprints Delivered" },
];

export default function CaseStudiesHero() {
  return (
    <>
      <section style={{ background: "#070d18", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "480px", height: "480px", borderRadius: "50%", background: "rgba(34,211,238,0.07)", filter: "blur(90px)" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(45,212,191,0.05)", filter: "blur(80px)" }} />

        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "96px 24px 80px" }}>
          <Reveal variant="up">
            <div className="section-badge" style={{ marginBottom: "1.25rem" }}>
              Case Studies & Proven ROI
            </div>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 900, color: "#f1f5f9", lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: "840px", marginBottom: "1.25rem" }}>
              Growth looks better <br />
              <span className="grad-text">when it's measurable.</span>
            </h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.75, maxWidth: "620px" }}>
              Real campaigns, transparent dashboards, and undeniable business outcomes. Explore how our growth squads turn digital spend into compounding revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: "#0b1728" }}>
        <div className="section-glow-divider" />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "32px" }} className="stats-grid">
            {RESULTS.map((r, i) => (
              <Reveal key={r.label} variant="up" delay={i * 80}>
                <div style={{ textAlign: "center" }}>
                  <div className="stat-number">{r.value}</div>
                  <p style={{ marginTop: "8px", fontSize: "0.875rem", color: "#64748b" }}>{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="section-glow-divider" />
      </section>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  );
}
