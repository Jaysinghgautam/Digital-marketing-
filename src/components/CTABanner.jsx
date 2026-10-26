import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function CTABanner({
  title = "Ready to Turn Marketing Into Predictable Business Growth?",
  body = "Schedule a confidential 20-minute growth discovery call. We'll audit your current digital footprint, spot pipeline bottlenecks, and show you exactly what consistent social media management will unlock for your brand.",
  buttonLabel = "Book a Free Call",
}) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-white border-t border-gray-100">
      {/* Subtle purple glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #7B2FF7, transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center z-10">
        <Reveal variant="fade">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            style={{
              color: "#7B2FF7",
              background: "rgba(123,47,247,0.08)",
              border: "1px solid rgba(123,47,247,0.2)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: "#7B2FF7" }} />
            <span>VOOPIFY • &ldquo;Your Growth. Our Business.&rdquo;</span>
          </div>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            {title}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <p className="mt-5 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {body}
          </p>
        </Reveal>

        <Reveal variant="up" delay={300}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base text-white transition-all hover:-translate-y-0.5 hover:shadow-xl group"
              style={{
                background: "linear-gradient(135deg, #7B2FF7, #FF6B35)",
                boxShadow: "0 8px 30px rgba(123,47,247,0.35)",
              }}
            >
              <span>{buttonLabel}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-gray-200 bg-white hover:border-purple-300 hover:text-purple-700 text-gray-700 font-bold text-sm transition-all"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}