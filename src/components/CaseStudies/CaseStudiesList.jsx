import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const CASES = [
  {
    title: "E-Commerce D2C Brand Scale",
    category: "Paid Meta & Google Ads + CRO",
    stat: "+150%",
    label: "YoY Revenue Surge",
    body: "We completely redesigned the Shopify acquisition funnels, engineered UGC-style video reel ad creatives, and implemented dynamic retargeting, dropping customer acquisition costs by 34%.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    color: "#22d3ee",
    tags: ["Google Shopping", "Meta Ads", "Shopify CRO", "CAPI Setup"],
  },
  {
    title: "B2B Industrial SaaS Demand Gen",
    category: "SEO + Google Search + ABM",
    stat: "-40%",
    label: "Reduced Cost Per Qualified Lead",
    body: "Targeted enterprise buyers through bottom-of-funnel search intent campaigns and high-speed interactive comparison pages, producing 42 high-value enterprise demos within 90 days.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
    color: "#818cf8",
    tags: ["Technical SEO", "High-Intent PPC", "LinkedIn ABM"],
  },
  {
    title: "Omnichannel Health & Wellness Clinic",
    category: "Local SEO + Instagram Reels + Funnel",
    stat: "3.8x",
    label: "Inbound Patient Appointments",
    body: "Dominated local Google Maps rankings for high-ticket medical treatments while executing short-form educational video series with lead nurturing automation.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    color: "#f472b6",
    tags: ["Google Business Profile", "Viral Video", "WhatsApp Automation"],
  },
];

export default function CaseStudiesList() {
  return (
    <section style={{ background: "#070d18", padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        
        <Reveal variant="up">
          <div style={{ maxWidth: "580px", marginBottom: "56px" }}>
            <div className="section-badge" style={{ marginBottom: "1rem" }}>
              Selected Engagements
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Strategies that produced <br />
              <span className="grad-text">measurable market dominance.</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {CASES.map((item, i) => (
            <Reveal key={item.title} variant="up" delay={i * 80}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: `1px solid ${item.color}25`,
                  background: "#0a1929",
                  transition: "all 0.35s ease",
                }}
                className="case-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 32px 80px rgba(0,0,0,0.5), 0 0 30px ${item.color}15`;
                  e.currentTarget.style.borderColor = `${item.color}45`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = `${item.color}25`;
                }}
              >
                <div style={{ order: i % 2 === 1 ? 2 : 1, overflow: "hidden", minHeight: "340px", position: "relative" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(10,25,41,0.6) 0%, transparent 60%)",
                    }}
                  />
                </div>

                <div style={{ order: i % 2 === 1 ? 1 : 2, padding: "clamp(28px, 4vw, 48px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: "6px",
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}30`,
                          color: item.color,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: item.color, fontWeight: 700, margin: "0 0 6px" }}>
                    {item.category}
                  </p>
                  <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.02em", margin: "0 0 14px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#94a3b8", lineHeight: 1.75, fontSize: "0.92rem", margin: "0 0 24px" }}>
                    {item.body}
                  </p>

                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "24px", padding: "14px 20px", background: "rgba(255,255,255,0.02)", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: "3rem", fontWeight: 900, color: item.color, lineHeight: 1 }}>
                      {item.stat}
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "#e2e8f0", fontWeight: 600 }}>
                      {item.label}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#94a3b8" }}>
                      <CheckCircle2 size={16} color={item.color} />
                      <span>Data-backed audit verified</span>
                    </div>
                    <Link
                      to="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: item.color,
                        textDecoration: "none",
                      }}
                    >
                      Replicate This Growth <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .case-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
