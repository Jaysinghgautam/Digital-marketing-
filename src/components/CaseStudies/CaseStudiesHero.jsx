import { Sparkles, TrendingUp, ShieldCheck, Target, Award } from "lucide-react";
import Reveal from "../Reveal";

const RESULTS = [
  { value: "3.8x", label: "Average Client ROAS", sub: "On Meta & Google campaigns" },
  { value: "-38%", label: "Lower Cost Per Lead", sub: "From funnel optimization" },
  { value: "≥ 80%", label: "12-Month Retention", sub: "Compounding monthly retainers" },
  { value: "15 Days", label: "Onboarding SLA", sub: "From signing to live ads" },
];

export default function CaseStudiesHero() {
  return (
    <>
      <section className="bg-[#050914] text-white relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-white/[0.08]">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 text-center flex flex-col items-center">
          <Reveal variant="fade">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>SME Impact &amp; Case Studies</span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl">
              Growth Looks Better When{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-orange-400 via-pink-400 to-cyan-400">
                It&apos;s Honest &amp; Measurable.
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Real Indian MSME founders across manufacturing, exports, healthcare, retail, and D2C who partnered with VOOPIFY to turn fragmented marketing into a compounding business engine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#091122] border-b border-white/[0.08] py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {RESULTS.map((r, i) => (
              <Reveal key={r.label} variant="up" delay={i * 80}>
                <div className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                    {r.value}
                  </div>
                  <div className="mt-1 text-sm font-bold text-white">
                    {r.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {r.sub}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
