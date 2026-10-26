import { Users, ShieldCheck, Target, Award, ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const POD_ROLES = [
  {
    role: "Founder & Growth Leadership",
    scope: "Brand Strategy & Key Accounts",
    kpi: "Client LTV & Strategic Direction",
    desc: "Translating corporate discipline and commercial focus into structured SME growth roadmaps.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    role: "Dedicated Account Managers",
    scope: "Day-to-day Partner & Briefs",
    kpi: "Retention Rate (≥80%) & 48h Response SLA",
    desc: "Single point of contact for the founder. Orchestrates all 4 practice deliverables seamlessly.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    role: "Creative Leads & Art Directors",
    scope: "Brand Identity, Packaging & Design",
    kpi: "On-Time Delivery & Zero Brand Drift",
    desc: "Guardian of visual taste and craft. Ensures every deliverable commands premium brand authority.",
    color: "from-pink-500 to-rose-600",
  },
  {
    role: "Performance Media Buyers",
    scope: "Meta & Google Ad Optimization",
    kpi: "Target CPL, ROAS & Pipeline Volume",
    desc: "Rigorous daily campaign budget tuning, multivariate copy testing, and conversion attribution.",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-20 md:py-28 bg-[#070d18] text-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20 font-mono">
              <Users className="w-3.5 h-3.5" />
              Organizational Delivery Pods
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              A Cross-Functional Squad{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                Behind Every SME.
              </span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              We operate in autonomous pods — each pod pairing senior strategy, creative craft, content production, and ad buying to deliver what would otherwise require five separate vendors.
            </p>
          </Reveal>
        </div>

        {/* Roles Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POD_ROLES.map((member, idx) => (
            <Reveal
              key={idx}
              variant="up"
              delay={idx * 120}
              className="p-6 rounded-3xl bg-[#091122] border border-white/[0.08] hover:border-cyan-400/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {member.role}
                </h3>
                <div className="text-xs font-semibold text-cyan-400 mt-1">
                  {member.scope}
                </div>
                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {member.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-slate-300">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Core KPI:</span>
                <span className="text-emerald-400">{member.kpi}</span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
