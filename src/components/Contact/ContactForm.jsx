import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight, ShieldCheck, Send } from "lucide-react";
import Reveal from "../Reveal";

const CONTACT_INFO = [
  { icon: Mail, label: "Direct Email", value: "hello@ascenddigital.com", href: "mailto:hello@ascenddigital.com" },
  { icon: Phone, label: "Direct Phone / WhatsApp", value: "+91 (415) 555-0182", href: "tel:+14155550182" },
  { icon: MapPin, label: "Headquarters", value: "Cyber City, DLF Phase 2, Gurugram, India", href: "#" },
  { icon: Clock, label: "Operating Hours", value: "Monday – Saturday: 9:30 AM – 7:00 PM IST", href: "#" },
];

const STEPS = [
  { step: "01", title: "Discovery & Analysis", desc: "We review your brand, current campaigns, and target competitors." },
  { step: "02", title: "Growth Blueprint", desc: "A tailored strategy deck with realistic timeline and budget allocation." },
  { step: "03", title: "Rapid Execution", desc: "First sprint goes live within 14 days with full weekly transparency." },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "All-in-One Retainer",
    budget: "₹50,000 - ₹1,00,000/mo",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={{ background: "#0b1728", padding: "80px 0 100px", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "start" }}>
          
          {/* ── Left Column: Contact Details & Expectations ── */}
          <div>
            <Reveal variant="up">
              <span className="section-badge" style={{ marginBottom: "1rem" }}>
                Connect With Us
              </span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 1rem", letterSpacing: "-0.02em" }}>
                Tell us about your <br />
                <span className="grad-text">business vision.</span>
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 2rem" }}>
                Whether you need qualified B2B leads, improved conversion rates, an outsourced creative team, or full ROAS optimization, our senior strategists are ready to collaborate.
              </p>
            </Reveal>

            {/* Contact Cards */}
            <Reveal variant="up" delay={150}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "2.5rem" }}>
                {CONTACT_INFO.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "16px 20px",
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "14px",
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
                        e.currentTarget.style.background = "rgba(34,211,238,0.04)";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#22d3ee", flexShrink: 0 }}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</div>
                        <div style={{ fontSize: "0.95rem", color: "#f1f5f9", fontWeight: 600, marginTop: "2px" }}>{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Reveal>

            {/* What happens next Box */}
            <Reveal variant="up" delay={250}>
              <div style={{ padding: "24px", background: "rgba(34,211,238,0.03)", border: "1px solid rgba(34,211,238,0.18)", borderRadius: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#22d3ee", fontWeight: 700, fontSize: "1rem", marginBottom: "16px" }}>
                  <ShieldCheck size={20} />
                  What happens after submitting?
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {STEPS.map((s) => (
                    <div key={s.step} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 800, padding: "2px 8px", borderRadius: "6px", background: "rgba(34,211,238,0.12)", color: "#22d3ee", marginTop: "2px" }}>{s.step}</span>
                      <div>
                        <strong style={{ fontSize: "0.875rem", color: "#e2e8f0" }}>{s.title}: </strong>
                        <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>{s.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right Column: Modern Glassmorphic Form ── */}
          <div>
            <Reveal variant="scale" delay={150}>
              <div
                style={{
                  background: "linear-gradient(145deg, rgba(15,30,52,0.85), rgba(11,23,40,0.95))",
                  border: "1px solid rgba(34,211,238,0.2)",
                  borderRadius: "24px",
                  padding: "clamp(24px, 5vw, 40px)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 0 30px rgba(34,211,238,0.05)",
                  backdropFilter: "blur(16px)",
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(45,212,191,0.15)", border: "2px solid #2dd4bf", color: "#2dd4bf", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#f1f5f9", margin: "0 0 10px" }}>Thank You!</h3>
                    <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.6, maxWidth: "420px", margin: "0 auto 24px" }}>
                      Your project inquiry has been received. Our senior growth strategist will reach out to you within 24 hours with a custom proposal.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                      style={{ padding: "10px 20px", fontSize: "0.875rem" }}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div style={{ marginBottom: "28px" }}>
                      <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f1f5f9", margin: "0 0 6px" }}>
                        Send Us a Proposal Request
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "#94a3b8", margin: 0 }}>
                        Fill out the details below. All project inquiries are NDA-protected.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>Your Full Name *</label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Rahul Sharma"
                            className="form-input"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>Work Email *</label>
                          <input
                            required
                            type="email"
                            placeholder="rahul@company.com"
                            className="form-input"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>Phone / WhatsApp Number</label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="form-input"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>Company / Website</label>
                          <input
                            type="text"
                            placeholder="company.com"
                            className="form-input"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>Service Interest</label>
                          <select
                            className="form-input"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          >
                            <option>All-in-One Retainer (Recommended)</option>
                            <option>SEO & Organic Search</option>
                            <option>Google & Meta Performance Ads</option>
                            <option>Social Media & Short-Form Video</option>
                            <option>High-Speed Web & Landing Pages</option>
                            <option>Content & Brand Strategy</option>
                            <option>Analytics & Revenue Tracking</option>
                          </select>
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>Monthly Ad/Marketing Budget</label>
                          <select
                            className="form-input"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          >
                            <option>₹25,000 – ₹50,000 / month</option>
                            <option>₹50,000 – ₹1,00,000 / month</option>
                            <option>₹1,00,000 – ₹2,50,000 / month</option>
                            <option>₹2,50,000+ / month (Enterprise)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>Tell Us About Your Growth Goals</label>
                        <textarea
                          rows={4}
                          placeholder="What targets are you aiming for over the next 90-180 days? Any current marketing bottlenecks?"
                          className="form-input"
                          style={{ resize: "vertical" }}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary"
                        style={{ width: "100%", justifyContent: "center", padding: "16px", marginTop: "8px", fontSize: "1rem" }}
                      >
                        Submit Project Inquiry
                        <Send size={18} />
                      </button>

                      <div style={{ textAlign: "center", fontSize: "0.75rem", color: "#64748b" }}>
                        🔒 100% confidential. No spam, ever. We respond within 1 business day.
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
