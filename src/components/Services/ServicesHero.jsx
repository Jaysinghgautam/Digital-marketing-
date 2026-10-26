import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, Layers, Cpu, ShieldCheck } from "lucide-react";
import Reveal from "../Reveal";

const STATS = [
  ["4", "Core Practices"],
  ["40–60%", "AI Production Speedup"],
  ["48 Hours", "Default SLA Window"],
  ["98%", "Retainer Retention"],
];

export default function ServicesHero() {
  return (
    <section className="bg-[#050914] text-white relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-white/[0.08]">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>VOOPIFY Service Portfolio &amp; Practices</span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Creative That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-orange-400 via-pink-400 to-cyan-400">
                  Grows Business.
                </span>
              </h1>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                VOOPIFY packages branding, high-speed digital real estate, short-form video content, and performance marketing into predictable monthly retainers — run with agency-grade discipline at SME-friendly pricing.
              </p>
            </Reveal>

            <Reveal variant="up" delay={300}>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#practice-matrix"
                  className="px-8 py-4 rounded-xl font-black text-sm text-slate-950 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 hover:opacity-95 shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.02] flex items-center gap-2"
                >
                  <span>Explore 4 Practices</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="px-7 py-4 rounded-xl font-bold text-sm text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 backdrop-blur-md transition-all"
                >
                  Book 20-Min Growth Audit
                </Link>
              </div>
            </Reveal>

            <Reveal variant="fade" delay={400}>
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Single Accountable Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>SOP-Driven Quality Gates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>AI-Accelerated Velocity</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Metrics Panel */}
          <div className="lg:col-span-5">
            <Reveal variant="scale" delay={200}>
              <div className="p-1 rounded-3xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-cyan-500/30 shadow-2xl">
                <div className="p-6 sm:p-8 rounded-[22px] bg-[#091122] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      The VOOPIFY Operating Reality
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-400 font-bold border border-cyan-400/20">
                      SME Scalability
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {STATS.map(([num, lbl], i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                          {num}
                        </div>
                        <div className="mt-1 text-xs font-semibold text-slate-300">
                          {lbl}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-purple-950/40 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      “AI compresses drafting time by 50%, letting our creative directors focus on brand strategy, commercial positioning, and client revenue.”
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
