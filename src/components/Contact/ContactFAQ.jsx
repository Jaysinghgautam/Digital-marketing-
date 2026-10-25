import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const FAQS = [
  {
    q: "What is your typical onboarding timeline?",
    a: "Most engagements kick off within 7 to 10 days of signing. We start with an extensive audit of your existing accounts, competitor reconnaissance, and establish tracking pixels and shared Slack channels before launching creative sprints.",
  },
  {
    q: "Do you offer month-to-month contracts or lock-ins?",
    a: "We work on flexible 3-month initial commitments to allow sufficient time for data validation and testing funnels, after which retainers transition into rolling month-to-month agreements with a simple 30-day notice period.",
  },
  {
    q: "How do you track and report campaign ROI?",
    a: "You get access to a 24/7 live Looker Studio dashboard tracking real-time ad spend, leads generated, cost-per-acquisition (CPA), and pipeline revenue. We also conduct weekly or bi-weekly video syncs to review strategic progress.",
  },
  {
    q: "Can you collaborate with our existing in-house team?",
    a: "Yes. Many of our clients have in-house designers or sales teams. We frequently act as the specialized performance arm or SEO specialist, integrating seamlessly with your internal workflow.",
  },
  {
    q: "What industries do you specialize in?",
    a: "Our core expertise is in B2B Services, Manufacturing & Export MSMEs, Healthcare & Clinics, Real Estate, and D2C brands looking for predictable customer acquisition channels.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      style={{
        background: isOpen ? "rgba(34,211,238,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${isOpen ? "rgba(34,211,238,0.25)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "14px",
        overflow: "hidden",
        transition: "all 0.25s ease",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          gap: "16px",
        }}
      >
        <span style={{ fontSize: "1.05rem", fontWeight: 600, color: isOpen ? "#22d3ee" : "#f1f5f9" }}>
          {q}
        </span>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: isOpen ? "rgba(34,211,238,0.15)" : "rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isOpen ? "#22d3ee" : "#94a3b8",
            flexShrink: 0,
            transition: "all 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDown size={18} />
        </div>
      </button>

      {isOpen && (
        <div style={{ padding: "0 24px 22px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "16px" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ background: "#070d18", padding: "80px 0 100px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        
        <Reveal variant="up" className="text-center" style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-badge" style={{ marginBottom: "1rem" }}>
            <HelpCircle size={14} />
            Frequently Asked Questions
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 1rem", letterSpacing: "-0.02em" }}>
            Common questions, <span className="grad-text">answered.</span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", maxWidth: "520px", margin: "0 auto" }}>
            Everything you need to know about working with Ascend Digital as your growth marketing partner.
          </p>
        </Reveal>

        <Reveal variant="up" delay={150}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FAQS.map((faq, idx) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal variant="up" delay={250}>
          <div
            style={{
              marginTop: "56px",
              padding: "32px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, rgba(34,211,238,0.06), rgba(45,212,191,0.02))",
              border: "1px solid rgba(34,211,238,0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "16px",
            }}
          >
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#f1f5f9", margin: 0 }}>
              Have a unique requirement or custom project?
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", maxWidth: "480px", margin: 0, lineHeight: 1.6 }}>
              Feel free to email us directly or book a consultation call with our team. We're happy to answer any specific technical questions.
            </p>
            <a
              href="mailto:hello@ascenddigital.com"
              className="btn-secondary"
              style={{ padding: "12px 24px", fontSize: "0.9rem" }}
            >
              Direct Email: hello@ascenddigital.com
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
