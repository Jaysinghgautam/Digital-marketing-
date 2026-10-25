import { Palette, Globe, Camera, TrendingUp } from "lucide-react";
import Reveal from "../Reveal";

/**
 * VoopFramework Component
 * Explains the 4-step proprietary VOOP methodology:
 * V - Visual Identity
 * O - Online Presence
 * O - Outreach & Engagement
 * P - Performance & Profitability
 */
const PILLARS = [
  {
    letter: "V",
    title: "Visual Identity",
    subtitle: "Brand & Creative",
    desc: "Positioning, logo design, visual style guides, packaging, and high-end creative assets that make your brand memorable.",
    icon: Palette,
    color: "from-purple-500 to-indigo-500",
    badge: "Pillar 01",
  },
  {
    letter: "O",
    title: "Online Presence",
    subtitle: "Digital Real Estate",
    desc: "Fast, conversion-focused websites, technical SEO, and Google Business Profile domination to capture high-intent searches.",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    badge: "Pillar 02",
  },
  {
    letter: "O",
    title: "Outreach & Content",
    subtitle: "Attention & Trust",
    desc: "Targeted social media reels, LinkedIn thought leadership, short-form video production, and community engagement.",
    icon: Camera,
    color: "from-pink-500 to-rose-500",
    badge: "Pillar 03",
  },
  {
    letter: "P",
    title: "Performance & Profit",
    subtitle: "Paid Acquisition & ROI",
    desc: "Laser-focused Meta & Google Ad campaigns, retargeting funnels, and transparent real-time revenue analytics.",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
    badge: "Pillar 04",
  },
];

export default function VoopFramework() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#070d18] text-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fade">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
              The VOOP Growth Operating System
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              One Framework. Complete Predictability.
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Instead of randomly trying scattered marketing tactics, we run every SME
              through our battle-tested 4-pillar system designed to scale your pipeline month over month.
            </p>
          </Reveal>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                variant="up"
                delay={index * 120}
                className="group relative rounded-2xl border border-white/10 bg-[#0d1728]/70 hover:bg-[#111e35] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between overflow-hidden"
              >
                {/* Large Background Letter Watermark */}
                <div className="pointer-events-none absolute -right-2 -bottom-4 text-8xl font-black text-white/[0.03] group-hover:text-white/[0.07] transition-all select-none">
                  {item.letter}
                </div>

                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded border border-white/10 bg-white/[0.03]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400/90 mt-0.5">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <span>Pillar {item.letter} in action</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
