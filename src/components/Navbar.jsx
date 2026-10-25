import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import "./Navbar.css";

const SERVICES_SUB = [
  { label: "SEO & Search Dominance", desc: "Organic visibility & Google rankings" },
  { label: "Google & Meta Ads", desc: "Paid customer acquisition & ROAS" },
  { label: "Social Media & Video", desc: "Short-form content & community" },
  { label: "Web & Landing Pages", desc: "Conversion-first high speed design" },
  { label: "Content Marketing", desc: "Thought leadership & inbound pipeline" },
  { label: "Analytics & Strategy", desc: "Attribution models & live metrics" },
];

const LINKS = [
  { to: "/",            label: "Home" },
  { to: "/about",       label: "About" },
  { to: "/services",    label: "Services", hasSub: true },
  { to: "/case-studies",label: "Portfolio" },
  { to: "/contact",     label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subOpen, setSubOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => { setOpen(false); setSubOpen(false); };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(7,13,24,0.97)"
          : "rgba(7,13,24,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(34,211,238,0.15)"
          : "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
      }}>

        {/* ── Logo ── */}
        <NavLink to="/" onClick={closeAll} style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <img src="/voopify.png" alt="Ascend Digital" style={{ height: "48px", width: "auto", objectFit: "contain" }} />
        </NavLink>

        {/* ── Desktop Nav ── */}
        <nav className="desktop-nav" style={{ alignItems: "center", gap: "4px" }}>
          {LINKS.map((link) =>
            link.hasSub ? (
              <div
                key={link.to}
                style={{ position: "relative" }}
                onMouseEnter={() => setSubOpen(true)}
                onMouseLeave={() => setSubOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " nav-link-active" : ""}`
                  }
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  {link.label}
                  <ChevronDown size={14} style={{
                    transition: "transform 0.2s ease",
                    transform: subOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }} />
                </NavLink>

                {/* Dropdown Menu */}
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  left: "50%",
                  width: "320px",
                  background: "#0b1e36",
                  border: "1px solid rgba(34,211,238,0.2)",
                  borderRadius: "16px",
                  padding: "10px",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                  opacity: subOpen ? 1 : 0,
                  visibility: subOpen ? "visible" : "hidden",
                  transform: subOpen
                    ? "translateX(-50%) translateY(0)"
                    : "translateX(-50%) translateY(-8px)",
                  transition: "all 0.2s ease",
                }}>
                  {SERVICES_SUB.map((s) => (
                    <Link
                      key={s.label}
                      to="/services"
                      onClick={closeAll}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        transition: "background 0.2s ease",
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = "rgba(34,211,238,0.08)"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                      <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.875rem" }}>{s.label}</span>
                      <span style={{ color: "#64748b", fontSize: "0.75rem" }}>{s.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeAll}
                className={({ isActive }) =>
                  `nav-link${isActive ? " nav-link-active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* ── Desktop CTA ── */}
        <Link
          to="/contact"
          className="nav-cta-btn"
          onClick={closeAll}
        >
          Get a Quote
          <ArrowRight size={15} />
        </Link>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div className={`mobile-drawer${open ? " mobile-drawer-open" : ""}`}>
        <nav style={{ padding: "8px 0" }}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeAll}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? " mobile-nav-link-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div style={{ padding: "12px 20px 20px" }}>
          <Link
            to="/contact"
            onClick={closeAll}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              background: "linear-gradient(135deg,#22d3ee,#2dd4bf)",
              color: "#070d18",
              fontWeight: 800,
              padding: "14px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "0.9375rem",
              boxShadow: "0 4px 16px rgba(34,211,238,0.3)",
            }}
          >
            Get a Quote <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}
