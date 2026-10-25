import { Linkedin, Twitter } from "lucide-react";
import Reveal from "../Reveal";

const LEADERS = [
  { name: "Sarah Jenkins", role: "Founder & Chief Strategist", image: "https://randomuser.me/api/portraits/women/44.jpg", exp: "Ex-Google, 12y Growth" },
  { name: "David Chen", role: "Head of Paid Acquisition", image: "https://randomuser.me/api/portraits/men/32.jpg", exp: "Managed ₹15Cr+ Ad Spend" },
  { name: "Elena Bradley", role: "Director of Analytics & Data", image: "https://randomuser.me/api/portraits/women/65.jpg", exp: "Full-Funnel Attribution" },
  { name: "Michael Carter", role: "Creative & Brand Director", image: "https://randomuser.me/api/portraits/men/46.jpg", exp: "Award-winning Campaigns" },
  { name: "Sophia Williams", role: "Lead SEO Strategist", image: "https://randomuser.me/api/portraits/women/68.jpg", exp: "Ranked 200+ Keywords #1" },
  { name: "James Anderson", role: "Conversion Rate Specialist", image: "https://randomuser.me/api/portraits/men/52.jpg", exp: "Avg. +48% CVR Lift" },
];

export default function AboutTeam() {
  return (
    <section style={{ background: "#070d18", padding: "96px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        
        <Reveal variant="up">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 56px" }}>
            <div className="section-badge" style={{ marginBottom: "1rem" }}>
              Leadership Squad
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.02em" }}>
              The team driving your <span className="grad-text">results.</span>
            </h2>
            <p style={{ marginTop: "12px", color: "#94a3b8", fontSize: "1rem" }}>
              Experienced practitioners obsessed with marketing craft, disciplined execution, and measurable growth.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "24px" }}>
          {LEADERS.map((person, i) => (
            <Reveal key={person.name} variant="up" delay={i * 80}>
              <div
                className="glass-card"
                style={{
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  borderRadius: "18px",
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
                <div style={{ height: "240px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={person.image}
                    alt={person.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      background: "rgba(7,13,24,0.85)",
                      backdropFilter: "blur(8px)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      color: "#22d3ee",
                      fontWeight: 600,
                      border: "1px solid rgba(34,211,238,0.2)",
                    }}
                  >
                    {person.exp}
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontWeight: 700, color: "#f1f5f9", fontSize: "1.1rem", margin: 0 }}>
                    {person.name}
                  </h3>
                  <p style={{ marginTop: "4px", fontSize: "0.85rem", color: "#64748b", margin: "4px 0 0" }}>
                    {person.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
