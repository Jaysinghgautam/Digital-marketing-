import { Target, BarChart3, TrendingUp, Star, Quote, Sparkles } from "lucide-react";
import Reveal from "../Reveal";

const METHODOLOGY = [
  {
    icon: Target,
    title: "Diagnose Root Bottlenecks",
    text: "Before running a single rupee of ad spend, we audit why prospective customers leave and optimize your digital real estate first.",
  },
  {
    icon: BarChart3,
    title: "Commercial Outcomes Over Noise",
    text: "No vanity impressions or useless social metrics. We measure qualified pipeline enquiries, cost per acquisition, and net EBITDA return.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Brand Assets",
    text: "Winning video hooks, customer reviews, and high-ranking SEO pages become permanent company assets that work month after month.",
  },
];

const REVIEWS = [
  {
    name: "Rajesh Singhal",
    role: "Managing Director, Apex Castings",
    text: "VOOPIFY gave us an agency-grade corporate identity and global export leads without the absurd ₹4L/month agency quotes.",
  },
  {
    name: "Ananya Mehta",
    role: "Founder, Ziva Botanicals",
    text: "The hybrid human + AI workflow is real. We get 20+ creative reels and ad variants every sprint and our CAC dropped by 38%.",
  },
  {
    name: "Dr. Vikram Sethi",
    role: "Founder, Sethi Healthcare Clinics",
    text: "The most transparent partner we've worked with. Weekly Looker Studio reviews, fast 48h turnaround, and no lock-in pressure.",
  },
];

export default function CaseStudiesTestimonials() {
  return (
    <>
      {/* Methodology Section */}
      <section className="bg-[#050914] py-20 md:py-28 border-t border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          
          <Reveal variant="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                The VOOPIFY Method
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
                How We Approach Every SME Account
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {METHODOLOGY.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.title} variant="up" delay={i * 100}>
                  <div className="p-8 rounded-3xl bg-[#091122] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="bg-[#070d18] py-20 border-t border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, rIdx) => (
              <div key={rIdx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05]">
                  <div className="text-xs font-bold text-white">
                    {rev.name}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {rev.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
