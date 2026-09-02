 import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function CTABanner({
  title = "Ready to scale?",
  body = "Let's talk about what a data-first growth strategy could look like for your brand.",
  buttonLabel = "Book a Call",
}) {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] bg-[size:45px_45px]" />

      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
        <Reveal variant="up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.05] text-accent text-sm font-medium">
            <Sparkles size={15} />
            Let's grow together
          </div>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            {title}
          </h2>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <p className="mt-5 text-slate-400 max-w-xl mx-auto leading-relaxed text-base sm:text-lg">
            {body}
          </p>
        </Reveal>

        <Reveal variant="up" delay={300}>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 mt-9 bg-accent text-navy font-semibold px-6 py-3.5 rounded-lg hover:bg-white transition-all"
          >
            {buttonLabel}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </Reveal>

        <Reveal variant="fade" delay={450}>
          <p className="mt-6 text-xs text-slate-500">
            No pressure. No generic pitch. Just a conversation about growth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}