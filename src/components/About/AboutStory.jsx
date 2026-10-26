import { ShieldAlert, CheckCircle, TrendingUp, Sparkles, Building, Rocket } from "lucide-react";
import Reveal from "../Reveal";

const ROADMAP_STEPS = [
  {
    year: "Year 1",
    target: "30–35 Recurring Clients",
    focus: "Prove the model in launch cities, founder-led sales, SOPs documented, client retention ≥ 80%.",
  },
  {
    year: "Year 2",
    target: "75–90 Recurring Clients",
    focus: "Pod structure introduced (Account Manager + Creative + Content owning 20–25 clients each), EBITDA turns positive.",
  },
  {
    year: "Year 3",
    target: "150–180+ Clients",
    focus: "Specialized vertical teams (Manufacturing, D2C, Healthcare), white-label pilots, EBITDA margin ~34%.",
  },
  {
    year: "Vision 2035",
    target: "5,000+ Businesses in 25+ Cities",
    focus: "India's premier hybrid human + AI creative growth partner recognized across all commercial hubs.",
  },
];

export default function AboutStory() {
  return (
    <section id="founder-story" className="py-20 md:py-28 bg-[#070d18] text-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <Reveal variant="fade">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
                The Founder Thesis
              </span>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                The Massive Marketing Gap in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                  India&apos;s MSME Ecosystem.
                </span>
              </h2>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  India has over <strong>63 million MSMEs</strong> contributing roughly 30% of GDP and 45% of exports. Yet fewer than 20% maintain a professionally run digital presence, and almost none run structured performance marketing.
                </p>
                <p>
                  Why? Because traditional agency models are broken for SMEs:
                </p>
                <ul className="space-y-2.5 pt-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                    <span><strong>Big Legacy Agencies</strong> charge ₹2–5L/month minimums and dump junior interns on smaller accounts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    <span><strong>Freelancer Stacks</strong> create fragmented branding, missed deadlines, and zero commercial accountability.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                    <span><strong>In-House Hiring</strong> is too expensive and complex for a business doing ₹2–50 Cr in annual turnover.</span>
                  </li>
                </ul>
                <p className="pt-2 font-medium text-white">
                  VOOPIFY is built to solve this: an outsourced, disciplined marketing department running 4 core practices on predictable monthly retainers.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Compounding Model Box */}
          <div>
            <Reveal variant="scale" delay={200}>
              <div className="p-8 rounded-3xl bg-[#091122] border border-white/10 shadow-2xl space-y-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-extrabold text-white">
                    Why the Model Compounds
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our business becomes more profitable, not less, as we scale. Fixed production infrastructure (templates, SOP checklists, and supervised AI drafting workflows) is reused across hundreds of similar-sized SME clients.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider font-mono">
                      Pricing Philosophy
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-1">
                      Transparent monthly retainers, defined deliverables, clear SLAs, and measurable business outcomes — never billing by design hours.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-xs font-bold text-pink-300 uppercase tracking-wider font-mono">
                      Compounding Assets
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-1">
                      Every brand guideline, high-converting ad angle, and SEO keyword equity gets more valuable month-over-month.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Strategic Roadmap Grid */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              The Strategic Roadmap &amp; Ambition
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Clear, disciplined milestones guiding VOOPIFY from launch to India&apos;s leading growth platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROADMAP_STEPS.map((step, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 120}>
                <div className="p-6 rounded-2xl bg-[#091224] border border-white/[0.08] hover:border-cyan-400/30 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-400/10 inline-block mb-3">
                      {step.year}
                    </div>
                    <div className="text-base font-extrabold text-white mb-2">
                      {step.target}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.focus}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
