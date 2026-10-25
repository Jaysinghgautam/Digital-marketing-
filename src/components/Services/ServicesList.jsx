import { Search, Share2, MousePointerClick, PenSquare, Layout, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: Search,
    number: "01",
    title: "SEO & Search Dominance",
    subtitle: "Be discovered. Stay visible.",
    body: "Technical SEO audits, intent-based keyword architectures, and white-hat backlink acquisition designed for compounding organic visibility.",
    features: ["Technical SEO audits & Core Web Vitals", "Commercial keyword & content strategy", "Schema markup & on-page tuning", "High-authority link acquisition"],
    color: "#22d3ee",
  },
  {
    icon: Share2,
    number: "02",
    title: "Social Media & Video",
    subtitle: "Build attention into community.",
    body: "Platform-native content strategies and short-form video reels that turn your brand into a trusted market authority.",
    features: ["Short-form reels & viral video editing", "Curated monthly content calendar", "Founder LinkedIn branding & copy", "Active audience community growth"],
    color: "#818cf8",
  },
  {
    icon: MousePointerClick,
    number: "03",
    title: "Google & Meta Performance Ads",
    subtitle: "Spend smarter. Scale faster.",
    body: "Precision paid media funnels engineered around qualified leads, low acquisition costs, and verified bottom-line ROAS.",
    features: ["High-converting Meta & Instagram ad sets", "Google Search & High-Intent Shopping", "Full retargeting funnel architecture", "ROAS tracking & creative refresh sprints"],
    color: "#f472b6",
  },
  {
    icon: PenSquare,
    number: "04",
    title: "Content Marketing & Copy",
    subtitle: "Turn expertise into pipeline.",
    body: "Strategic copywriting and thought leadership assets that educate target prospects, handle objections, and generate inbound deal flow.",
    features: ["Bottom-of-funnel customer case studies", "In-depth thought leadership articles", "Email nurture sequences & drip funnels", "High-converting ad scriptwriting"],
    color: "#34d399",
  },
  {
    icon: Layout,
    number: "05",
    title: "High-Speed Web & CRO",
    subtitle: "Turn visits into customers.",
    body: "Fast, sleek landing pages engineered around buyer psychology, mobile speed optimization, and ruthless conversion rate testing.",
    features: ["Bespoke React/Next.js landing pages", "A/B testing & heat-map user recording", "Sub-second loading speed scores", "Integrated CRM & booking form flows"],
    color: "#fb923c",
  },
  {
    icon: LineChart,
    number: "06",
    title: "Analytics & Strategy Pod",
    subtitle: "Know what actually produces revenue.",
    body: "Unified revenue dashboards and multi-touch attribution that show you exactly where every marketing dollar is generated.",
    features: ["Looker Studio real-time dashboards", "Server-side GTM & Meta CAPI setup", "CAC, LTV & unit economics analysis", "Weekly strategic roadmap reviews"],
    color: "#a78bfa",
  },
];

export default function ServicesList() {
  return (
    <section id="services" style={{ background: "#0b1728", padding: "80px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        
        <Reveal>
          <div style={{ maxWidth: "600px", marginBottom: "48px" }}>
            <div className="section-badge" style={{ marginBottom: "1rem" }}>
              Our Capabilities
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Six disciplines. <br />
              <span className="grad-text">One unified engine.</span>
            </h2>
            <p style={{ marginTop: "16px", color: "#94a3b8", lineHeight: 1.7, fontSize: "1rem" }}>
              Choose the exact growth sprint your business needs right now, or deploy our full omnichannel retainer for maximum market velocity.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "24px" }}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Reveal key={svc.title} variant="up" delay={(i % 3) * 80}>
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
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = `${svc.color}40`;
                    e.currentTarget.style.boxShadow = `0 20px 48px rgba(0,0,0,0.4), 0 0 20px ${svc.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "14px",
                          background: `${svc.color}15`,
                          border: `1px solid ${svc.color}25`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={24} color={svc.color} />
                      </div>
                      <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#475569", letterSpacing: "0.05em" }}>
                        {svc.number}
                      </span>
                    </div>

                    <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: svc.color, fontWeight: 700, marginBottom: "6px" }}>
                      {svc.subtitle}
                    </p>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#f1f5f9", marginBottom: "12px" }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "24px" }}>
                      {svc.body}
                    </p>

                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {svc.features.map((f) => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "#cbd5e1" }}>
                          <CheckCircle2 size={15} color={svc.color} style={{ flexShrink: 0 }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: "28px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <Link
                      to="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: svc.color,
                        textDecoration: "none",
                      }}
                    >
                      Book this capability <ArrowRight size={15} />
                    </Link>
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
