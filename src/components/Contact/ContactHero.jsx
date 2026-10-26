import { Sparkles, Calendar, ShieldCheck, Clock } from "lucide-react";
import Reveal from "../Reveal";

export default function ContactHero() {
  return (
    <section className="bg-[#050914] text-white relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-white/[0.08]">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 text-center flex flex-col items-center">
        <Reveal variant="fade">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>20-Minute Growth Discovery Session</span>
          </div>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl">
            Let&apos;s Build Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-orange-400 via-pink-400 to-cyan-400">
              Growth Chapter.
            </span>
          </h1>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Tell us about your target pipeline, current marketing friction, and revenue objectives. We will review your digital footprint and share a custom 90-day growth plan.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Response within 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Sales Pressure Guarantee</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
