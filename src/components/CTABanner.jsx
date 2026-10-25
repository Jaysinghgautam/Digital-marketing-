import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function CTABanner({
  title = "Ready to scale?",
  body = "Let's talk about what a data-first growth strategy could look like for your brand.",
  buttonLabel = "Book a Free Call",
}) {
  return (
    <section style={{ background: "#0b1728", position: "relative", overflow: "hidden" }}>
      {/* Glows */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "600px", height: "300px",
        borderRadius: "50%",
        background: "rgba(34,211,238,0.07)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        opacity: 0.03,
        backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
        backgroundSize: "44px 44px",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        maxWidth: "860px",
        margin: "0 auto",
        padding: "80px 24px",
        textAlign: "center",
      }}>
        <Reveal variant="up">
          <div className="section-badge" style={{ marginBottom: "1.5rem" }}>
            <Sparkles size={14} />
            Let's grow together
          </div>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <h2 style={{
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 900,
            color: "#f1f5f9",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
          }}>
            {title}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <p style={{
            fontSize: "clamp(1rem,1.8vw,1.125rem)",
            color: "#94a3b8",
            lineHeight: 1.7,
            maxWidth: "540px",
            margin: "0 auto 2.25rem",
          }}>
            {body}
          </p>
        </Reveal>

        <Reveal variant="up" delay={300}>
          <Link to="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 32px" }}>
            {buttonLabel}
            <ArrowRight size={18} />
          </Link>
          <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#475569" }}>
            No pressure. No generic pitch. Just a conversation about growth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}