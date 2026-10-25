import { ShieldCheck, Zap, Star, CheckCircle, XCircle } from "lucide-react";
import Reveal from "../Reveal";

/**
 * WhyUs Component
 * Compares the Voopify model vs Hiring Freelancers vs Big Traditional Agencies,
 * showing why our dedicated SME retainer is the superior choice.
 */
const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    desc: "We report actual qualified leads, acquisition costs, and revenue impact — never vanity metrics like empty impressions.",
  },
  {
    icon: Zap,
    title: "SOP-Driven Consistency",
    desc: "No missed deadlines. Every calendar, creative shoot, ad variation, and sprint is executed on a rigid weekly cadence.",
  },
  {
    icon: Star,
    title: "Growth Partner Mentality",
    desc: "We don't just blindly execute tasks; we challenge assumptions, test offers, and optimize your unit economics.",
  },
];

const COMPARISON = [
  {
    feature: "Accountability & Speed",
    freelancer: "Unpredictable & ghosting risk",
    agency: "Slow bureaucratic approvals",
    voopify: "Dedicated pod & fast 24h turnaround",
  },
  {
    feature: "Cost & Billing",
    freelancer: "Hourly billing shocks",
    agency: "High ₹2L+ retainers",
    voopify: "Predictable flat monthly fee",
  },
  {
    feature: "Skill Coverage",
    freelancer: "Single domain only",
    agency: "Junior staff handling accounts",
    voopify: "Senior specialists in all 4 pillars",
  },
  {
    feature: "Reporting Focus",
    freelancer: "Rarely any reports",
    agency: "Confusing vanity charts",
    voopify: "Live dashboard tracking pipeline & ROI",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#070d18] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fade">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
              Why Choose Us
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Built for SME Budgets. Run with Agency Discipline.
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Big agencies charge enterprise prices and hand your account to interns.
              Freelancers are cheap but lack consistency. Voopify is the sweet spot:
              elite agency execution at SME-friendly retainer rates.
            </p>
          </Reveal>
        </div>

        {/* 3 Advantage Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <Reveal
                key={adv.title}
                variant="up"
                delay={idx * 150}
                className="rounded-2xl border border-white/10 bg-[#0d1627] p-7 transition-all hover:border-cyan-400/30 hover:bg-[#101b30]"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{adv.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{adv.desc}</p>
              </Reveal>
            );
          })}
        </div>

        {/* Comparison Table / Matrix */}
        <Reveal variant="up" delay={300} className="mt-16">
          <div className="rounded-2xl border border-white/10 bg-[#0b1424] overflow-hidden shadow-xl">
            <div className="p-6 sm:p-8 border-b border-white/10">
              <h3 className="text-xl font-bold text-white">How Voopify Compares</h3>
              <p className="text-sm text-slate-400 mt-1">
                See why businesses prefer our all-in-one monthly subscription.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02] text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <th className="py-4 px-6">Criteria</th>
                    <th className="py-4 px-6 text-slate-400">Freelancers</th>
                    <th className="py-4 px-6 text-slate-400">Traditional Agency</th>
                    <th className="py-4 px-6 text-cyan-400 bg-cyan-400/10">Voopify Partner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-white whitespace-nowrap">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <XCircle className="w-4 h-4 text-red-400/70 shrink-0" />
                          <span>{row.freelancer}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <XCircle className="w-4 h-4 text-amber-400/70 shrink-0" />
                          <span>{row.agency}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-medium text-cyan-300 bg-cyan-400/[0.04]">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{row.voopify}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
