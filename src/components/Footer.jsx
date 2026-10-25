import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const NAV_COLS = [
  {
    heading: "Company",
    links: [
      ["Home", "/"],
      ["About Us", "/about"],
      ["Services", "/services"],
      ["Portfolio", "/case-studies"],
      ["Contact", "/contact"],
    ],
  },
  {
    heading: "Services",
    links: [
      ["SEO & Organic", "/services"],
      ["Google & Meta Ads", "/services"],
      ["Social Media", "/services"],
      ["Content Marketing", "/services"],
      ["Web & Landing Pages", "/services"],
    ],
  },
  {
    heading: "Legal",
    links: [
      ["Privacy Policy", "#"],
      ["Terms of Service", "#"],
      ["Cookie Policy", "#"],
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#060d1a", color: "#94a3b8", borderTop: "1px solid rgba(34,211,238,0.08)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 32px" }}>

        {/* Top Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "48px",
          marginBottom: "48px",
        }}>
          {/* Brand col */}
          <div style={{ gridColumn: "span 1" }}>
            <Link to="/" style={{ display: "inline-block" }}>
              <img src="/voopify.png" alt="Ascend Digital" style={{ height: "48px", width: "auto", objectFit: "contain" }} />
            </Link>
            <p style={{ marginTop: "16px", fontSize: "0.875rem", lineHeight: 1.7, color: "#64748b", maxWidth: "260px" }}>
              A performance-focused digital marketing agency helping Indian SMEs turn strategy,
              creativity, and data into sustainable business growth.
            </p>

            {/* Contact */}
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                [Mail, "hello@ascenddigital.com"],
                [Phone, "+91 98765 43210"],
                [MapPin, "Jaunpur, Uttar Pradesh, India"],
              ].map(([Icon, text]) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem", color: "#64748b" }}>
                  <Icon size={14} color="#22d3ee" />
                  {text}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: "36px", height: "36px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#64748b",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "#22d3ee";
                    e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
                    e.currentTarget.style.background = "rgba(34,211,238,0.07)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {NAV_COLS.map((col) => (
            <div key={col.heading}>
              <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "0.875rem", marginBottom: "16px", letterSpacing: "0.04em" }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map(([label, path]) => (
                  <li key={label}>
                    <Link to={path} style={{
                      display: "inline-flex", alignItems: "center", gap: "4px",
                      fontSize: "0.85rem", color: "#64748b", textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = "#22d3ee"}
                      onMouseLeave={e => e.currentTarget.style.color = "#64748b"}
                    >
                      {label}
                      <ArrowUpRight size={11} style={{ opacity: 0.5 }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-glow-divider" style={{ marginBottom: "24px" }} />

        {/* Bottom Bar */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          fontSize: "0.78rem",
          color: "#334155",
        }}>
          <span>© {new Date().getFullYear()} Ascend Digital. All rights reserved.</span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#22d3ee", fontSize: "10px" }}>●</span>
            Jaunpur, Uttar Pradesh, India
          </span>
        </div>
      </div>
    </footer>
  );
}
