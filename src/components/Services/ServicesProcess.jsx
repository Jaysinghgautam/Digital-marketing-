import { Clock, ShieldCheck, CheckCircle2, ArrowRight, Zap, Target } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const ONBOARDING_STEPS = [
  {
    day: "Day 0 – 2",
    title: "Kickoff & Brand Intake",
    desc: "Signed agreement, kickoff onboarding call, and our structured SME brand/business questionnaire.",
    badge: "Stage 01",
  },
  {
    day: "Day 3 – 7",
    title: "Audit & Architecture Setup",
    desc: "Deep-dive brand & competitor audit, ad account access, analytics tracking, and tool stack setup.",
    badge: "Stage 02",
  },
  {
    day: "Day 8 – 14",
    title: "Calendar & Strategy Sign-Off",
    desc: "First month's editorial calendar, creative concepts, and paid ad strategy presented for approval.",
    badge: "Stage 03",
  },
  {
    day: "Day 15 Onwards",
    title: "Live Sprints & Weekly ROI",
    desc: "All campaigns go live. Weekly executive reporting cadence starts with 48-hour revision SLAs.",
    badge: "Stage 04",
  },
];

const APPROVAL_GATES = [
  {
    role: "Gate 1: Creative Lead",
    desc: "Rigorous quality check against brand guidelines, typography, color harmony, and visual craft.",
  },
  {
    role: "Gate 2: Account Manager",
    desc: "Strategic review for commercial accuracy, CTA clarity, client tone-of-voice, and business intent.",
  },
  {
    role: "Gate 3: Client Approval",
    desc: "Transparent preview in shared workspace with a 48-hour review window and max 2 revision rounds.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="py-20 md:py-28 bg-[#050914] text-white relative border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20 font-mono">
              <Clock className="w-3.5 h-3.5" />
              SOP-Driven Onboarding
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              From Agreement to Live Campaigns{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                in Exactly 15 Days.
              </span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              No endless delays or disorganized handoffs. We run every new client through a standardized, checklist-driven onboarding procedure.
            </p>
          </Reveal>
        </div>

        {/* 15-Day Onboarding Timeline */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ONBOARDING_STEPS.map((step, idx) => (
            <Reveal
              key={idx}
              variant="up"
              delay={idx * 120}
              className="p-6 rounded-3xl bg-[#091122] border border-white/[0.08] hover:border-cyan-400/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-400/10 border border-cyan-400/20">
                    {step.day}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Documented SOP Checklist</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 3-Stage Approval Gates Strip */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/20 via-pink-950/20 to-cyan-950/20 border border-white/10">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              The 3-Stage Quality Gate
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Nothing goes live to your customers without passing through our multi-tier review process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPROVAL_GATES.map((gate, gIdx) => (
              <div key={gIdx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                <div className="text-sm font-bold text-cyan-300 mb-1">
                  {gate.role}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {gate.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
