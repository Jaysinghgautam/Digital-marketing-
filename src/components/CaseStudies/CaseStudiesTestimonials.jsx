import { Target, BarChart3, TrendingUp, Star, Quote } from "lucide-react";
import Reveal from "../Reveal";

const WHY = [
  { icon: Target, title: "Diagnose Root Bottlenecks", text: "Before burning ad spend, we pinpoint exactly why prospective buyers bounce and fix unit economics first." },
  { icon: BarChart3, title: "Measure What Matters", text: "No vanity impressions or empty clicks. We report pipeline qualified leads, customer acquisition cost, and net return on ad spend." },
  { icon: TrendingUp, title: "Compound Winning Funnels", text: "Winning ad creatives and high-converting landing pages are turned into evergreen assets that produce results month after month." },
];

const TESTIMONIALS = [
  { name: "Rajeev Sharma", role: "CEO, TechBridge Systems", text: "Ascend Digital completely overhauled our lead funnels. Our monthly qualified B2B demos surged from 14 to 58 while ad costs decreased by 28%.", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
  { name: "Priya Nair", role: "Founder, Lumio Skincare D2C", text: "Their short-form reel video production and Meta Ads pod tripled our organic website traffic and maintained a steady 4.2x ROAS during peak season.", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Arvind Mehta", role: "CMO, SwiftCart Logistics", text: "The most transparent digital marketing squad we have ever hired. Weekly sprint reviews, honest guidance, and direct Slack communication.", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
];

export default function CaseStudiesTestimonials() {
  return (
    <>
      {/* ── Why Section ── */}
      <section style={{ background: "#0b1728", padding: "88px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          
          <Reveal variant="up">
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 56px" }}>
              <div className="section-badge" style={{ marginBottom: "1rem" }}>
                Our Methodology
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.02em" }}>
                How we approach every <span className="grad-text">client account.</span>
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
            {WHY.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} variant="up" delay={i * 80}>
                  <div className="glass-card" style={{ padding: "32px", height: "100%" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "#22d3ee" }}>
                      <Icon size={22} />
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "12px" }}>
                      {w.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.75, margin: 0 }}>
                      {w.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ background: "#070d18", padding: "96px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          
          <Reveal variant="up">
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 56px" }}>
              <div className="section-badge" style={{ marginBottom: "1rem" }}>
                Founder Voices
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.02em" }}>
                Trusted by high-growth <span className="grad-text">founders.</span>
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "24px" }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} variant="up" delay={i * 80}>
                <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                  <div>
                    <Quote size={28} color="rgba(34,211,238,0.35)" style={{ marginBottom: "16px" }} />
                    <p style={{ fontSize: "0.95rem", color: "#cbd5e1", lineHeight: 1.75, marginBottom: "24px", fontStyle: "italic" }}>
                      "{t.text}"
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "14px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "18px" }}>
                    <img src={t.avatar} alt={t.name} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(34,211,238,0.3)" }} />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "#f1f5f9", margin: 0 }}>{t.name}</p>
                      <p style={{ fontSize: "0.78rem", color: "#64748b", margin: "2px 0 0" }}>{t.role}</p>
                    </div>
                    <div style={{ marginLeft: "auto", display: "flex", gap: "2px" }}>
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
