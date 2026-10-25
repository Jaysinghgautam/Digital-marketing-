import Reveal from "../Reveal";

const PROCESS = [
  { num: "01", title: "Diagnostic Audit", body: "We rigorously evaluate your existing marketing stack, competitor positioning, funnel leakages, and high-margin conversion opportunities." },
  { num: "02", title: "Strategic Architecture", body: "We engineer a clear 90-day growth roadmap, assembling the creative assets, ad funnels, tracking pixels, and landing pages needed for scale." },
  { num: "03", title: "Agile Optimization", body: "We relentlessly analyze live performance, A/B test ad hooks and design creatives, optimizing CAC and improving lead-to-close velocity." },
  { num: "04", title: "Compound Scaling", body: "Once cost per acquisition is proven, we systematically expand budget allocation, opening secondary channels to dominate your market." },
];

export default function ServicesProcess() {
  return (
    <section style={{ background: "#070d18", padding: "96px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        
        <Reveal>
          <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
            <div className="section-badge" style={{ marginBottom: "1rem" }}>
              How We Execute
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              From initial insight <br />
              <span className="grad-text">to compounding scale.</span>
            </h2>
            <p style={{ marginTop: "14px", color: "#94a3b8", fontSize: "1rem" }}>
              Our battle-tested operational rhythm eliminates unpredictability and guarantees measurable milestones.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "24px" }}>
          {PROCESS.map(({ num, title, body }, i) => (
            <Reveal key={num} variant="up" delay={i * 90}>
              <div
                className="glass-card"
                style={{
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    right: "-5px",
                    fontSize: "5.5rem",
                    fontWeight: 900,
                    color: "rgba(34,211,238,0.04)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {num}
                </div>

                <div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#22d3ee", padding: "4px 10px", borderRadius: "6px", background: "rgba(34,211,238,0.1)" }}>
                    Phase {num}
                  </span>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#f1f5f9", margin: "24px 0 12px" }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.75, margin: 0 }}>
                    {body}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "24px",
                    height: "3px",
                    width: "36px",
                    background: "linear-gradient(90deg, #22d3ee, #2dd4bf)",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
