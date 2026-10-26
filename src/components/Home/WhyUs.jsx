import { Check, X, ShieldCheck, Zap, Users, Sparkles, Award } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const COMPARISON_ROWS = [
  {
    feature: "Monthly Retainer Pricing",
    voopify: "₹18,000 – ₹60,000 (Tiered for SMEs)",
    bigAgency: "₹2,00,000 – ₹5,00,000+ Minimum",
    freelancers: "Unpredictable hourly billing",
    inHouse: "₹1,50,000+ (Salaries + tools + PF)",
  },
  {
    feature: "Core Team & Capabilities",
    voopify: "4 Practices: Brand, Web, Video, Ads",
    bigAgency: "Junior account team on small accounts",
    freelancers: "Fragmented (Need 4-5 vendors)",
    inHouse: "1–2 generalists lacking specialization",
  },
  {
    feature: "Quality & Brand Consistency",
    voopify: "Strict 3-Stage SOP Approval Gates",
    bigAgency: "Slow turnaround, template decks",
    freelancers: "High turnover & inconsistent quality",
    inHouse: "Depends on 1 person's bandwidth",
  },
  {
    feature: "Commercial Accountability",
    voopify: "Real Enquiries, CPL & ROAS Dashboards",
    bigAgency: "Focuses on awards & vanity reach",
    freelancers: "Zero strategic accountability",
    inHouse: "Difficult to measure true attribution",
  },
  {
    feature: "Turnaround Time (SLA)",
    voopify: "48-Hour Default Delivery Window",
    bigAgency: "2–3 weeks of bureaucratic delay",
    freelancers: "Missed deadlines & ghosting risk",
    inHouse: "Limited by daily operational fires",
  },
];

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "SOP-Driven Consistency",
    desc: "Every workflow — onboarding, content creation, ad setups, and reporting — is governed by checklists. Your brand never suffers when someone takes leave.",
  },
  {
    icon: Zap,
    title: "AI Production Velocity",
    desc: "We compress drafting costs by 40–60% with generative AI, allowing our creative directors to spend time on strategy, taste, and high-impact campaigns.",
  },
  {
    icon: Award,
    title: "Commercial Outcomes Over Noise",
    desc: "We don't sell pretty filler graphics. We connect every campaign directly to enquiries, leads, appointments, customer trust, and EBITDA growth.",
  },
  {
    icon: Users,
    title: "Single Accountable Partner",
    desc: "One dedicated Account Manager orchestrating creative directors, copywriters, video editors, and media buyers as your outsourced CMO department.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{ color: '#7B2FF7', background: 'rgba(123,47,247,0.08)', border: '1px solid rgba(123,47,247,0.2)' }}>
              <Sparkles className="w-3.5 h-3.5" style={{ color: '#7B2FF7' }} />
              Why Choose Us
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
              Why Growing Brands{" "}
              <span style={{ background: 'linear-gradient(135deg,#7B2FF7,#FF6B35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Choose VOOPIFY.
              </span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
              One subscription. Everything your brand needs — from content creation to performance reporting. No juggling vendors. No guessing.
            </p>
          </Reveal>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            const colors = [
              { bg: '#F0E9FF', color: '#7B2FF7' },
              { bg: '#FFF4E9', color: '#FF6B35' },
              { bg: '#E9FDF4', color: '#059669' },
              { bg: '#FFF0F5', color: '#E11D74' },
            ];
            const c = colors[idx % colors.length];
            return (
              <Reveal
                key={idx}
                variant="up"
                delay={idx * 100}
                className="p-6 rounded-3xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform"
                    style={{ background: c.bg }}>
                    <Icon className="w-6 h-6" style={{ color: c.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-16">
          <Reveal variant="up" delay={300}>
            <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-xl shadow-purple-50">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Criteria
                    </th>
                    <th className="p-5 text-sm font-extrabold border-x"
                      style={{ color: '#7B2FF7', background: 'rgba(123,47,247,0.06)', borderColor: 'rgba(123,47,247,0.15)' }}>
                      VOOPIFY Partner
                    </th>
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Big Agency
                    </th>
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Freelancers
                    </th>
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-400">
                      In-House
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs sm:text-sm">
                  {COMPARISON_ROWS.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-purple-50/30 transition-colors">
                      <td className="p-5 font-bold text-gray-800">
                        {row.feature}
                      </td>
                      <td className="p-5 font-bold border-x"
                        style={{ color: '#7B2FF7', background: 'rgba(123,47,247,0.04)', borderColor: 'rgba(123,47,247,0.1)' }}>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 shrink-0" style={{ color: '#059669' }} />
                          <span>{row.voopify}</span>
                        </div>
                      </td>
                      <td className="p-5 text-gray-400">{row.bigAgency}</td>
                      <td className="p-5 text-gray-400">{row.freelancers}</td>
                      <td className="p-5 text-gray-400">{row.inHouse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
