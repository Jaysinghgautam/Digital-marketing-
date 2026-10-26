import { useState } from "react";
import Reveal from "../Reveal";
import { TrendingUp, Sparkles, CheckCircle2, ArrowUpRight, Zap, Target } from "lucide-react";

const TABS = [
  { id: "growth", label: "4-Pillar Pipeline" },
  { id: "retainer", label: "Retainer ROI" },
  { id: "ai", label: "AI Acceleration" },
];

const METRICS_MAP = {
  growth: [
    { label: "Pipeline Inquiries", value: "+380%", sub: "Qualified B2B & D2C", highlight: true },
    { label: "Cost Per Lead (CPL)", value: "-44%", sub: "Meta & Google Ads", highlight: false },
    { label: "Blended ROAS", value: "4.6x", sub: "Verified ad spend", highlight: true },
    { label: "Search Visibility", value: "#1 Rank", sub: "Local SEO & GBP", highlight: false },
  ],
  retainer: [
    { label: "Monthly Retainer", value: "₹40k–₹60k", sub: "Growth Tier average", highlight: false },
    { label: "Agency Replacement", value: "5-in-1", sub: "No fragmented vendors", highlight: true },
    { label: "Payback Period", value: "2–3 Mos", sub: "Fast CAC recovery", highlight: false },
    { label: "Retention Rate", value: "98.2%", sub: "12-month average", highlight: true },
  ],
  ai: [
    { label: "First-Draft Velocity", value: "60% Faster", sub: "Copy, ads & storyboards", highlight: true },
    { label: "Creative Variants", value: "24/sprint", sub: "Multivariate testing", highlight: false },
    { label: "Human Review", value: "100%", sub: "Strategist supervised", highlight: true },
    { label: "Internal Margin", value: "+34%", sub: "Reinvested in quality", highlight: false },
  ],
};

const CHART_VALS = [28, 42, 38, 56, 48, 68, 62, 79, 74, 91, 86, 100];
const MONTHS = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12"];

export default function HeroDashboard() {
  const [activeTab, setActiveTab] = useState("growth");
  const metrics = METRICS_MAP[activeTab];

  return (
    <section className="py-12 md:py-16 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(123,47,247,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <Reveal variant="scale" delay={100}>
          <div className="p-1 rounded-3xl bg-gradient-to-r from-purple-500/30 via-orange-500/30 to-cyan-500/30 shadow-2xl shadow-cyan-500/10">
            <div className="bg-[#0b1424] rounded-[22px] border border-white/10 p-5 sm:p-8 backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-2 pl-3 border-l border-white/10 text-xs text-slate-400 font-mono">
                    <span className="text-cyan-400 font-semibold">voopify-growth-os.app</span>
                    <span className="hidden sm:inline text-slate-500">/ live-sme-client-metrics</span>
                  </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1.5 bg-[#070d18] p-1 rounded-xl border border-white/10 self-start sm:self-auto">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-md shadow-cyan-500/20"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-400/30 transition-all duration-200"
                  >
                    <div className="text-xs font-medium text-slate-400">
                      {m.label}
                    </div>
                    <div
                      className={`mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight ${
                        m.highlight
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400"
                          : "text-white"
                      }`}
                    >
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs text-emerald-400 flex items-center gap-1 font-medium">
                      <TrendingUp className="w-3 h-3 shrink-0" />
                      <span>{m.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Compounding Growth Trend Graph */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Compounding Return (12-Month Retainer Trajectory)
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> +257% Annualized Lift
                  </span>
                </div>

                <div className="h-32 sm:h-40 flex items-end justify-between gap-2 sm:gap-4 pt-4 px-2 bg-gradient-to-t from-cyan-500/[0.04] to-transparent rounded-xl border border-white/[0.05]">
                  {CHART_VALS.map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <div
                        className="w-full max-w-[36px] rounded-t-lg bg-gradient-to-t from-cyan-500/40 via-purple-500/60 to-pink-500 group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300 relative shadow-sm"
                        style={{ height: `${height}%` }}
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-[#070d18] border border-cyan-400/40 text-[10px] text-cyan-400 font-mono font-bold whitespace-nowrap transition-opacity pointer-events-none">
                          {height}%
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                        {MONTHS[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom SLA banner */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-4 border-t border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Real numbers (enquiries, cost per lead, ROAS) — radical transparency</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 font-medium">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Automated weekly executive reporting &amp; live dashboards</span>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
