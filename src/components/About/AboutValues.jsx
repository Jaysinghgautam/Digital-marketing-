import { Eye, TrendingUp, Sparkles, Heart, Award, Globe } from "lucide-react";
import Reveal from "../Reveal";

const VALUES = [
  { icon: Eye, title: "Radical Transparency", body: "Direct reporting, unfiltered feedback, and honest metrics. If a channel isn't producing ROI, we pivot immediately." },
  { icon: TrendingUp, title: "Compounding Growth", body: "We focus on revenue, qualified pipelines, customer acquisition cost, and lifetime retention above all else." },
  { icon: Sparkles, title: "Creative Distinction", body: "High-grade visual identity and persuasive copywriting that elevates you above look-alike competitors." },
  { icon: Heart, title: "True Partnership", body: "We operate as an agile internal growth squad, holding ourselves fully accountable to your quarterly milestones." },
  { icon: Award, title: "Operational Rigor", body: "Weekly sprint cadences, QA checks on tracking pixels, and daily campaign monitoring with zero guesswork." },
  { icon: Globe, title: "Long-term Impact", body: "Sustainable SEO equity and brand authority that continue compounding value long after campaigns conclude." },
];

export default function AboutValues() {
  return (
    <section style={{ background: "#0b1728", padding: "96px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <Reveal variant="up">
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 56px" }}>
            <div className="section-badge" style={{ marginBottom: "1rem" }}>
              Core Values
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.02em" }}>
              Principles that guide <span className="grad-text">every sprint.</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1rem", marginTop: "12px" }}>
              Our work is anchored in integrity, measurable financial impact, and relentless execution standards.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "24px" }}>
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} variant="up" delay={i * 70}>
                <div
                  className="glass-card"
                  style={{
                    padding: "32px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "rgba(34,211,238,0.1)",
                        border: "1px solid rgba(34,211,238,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                        color: "#22d3ee",
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "10px" }}>
                      {v.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
