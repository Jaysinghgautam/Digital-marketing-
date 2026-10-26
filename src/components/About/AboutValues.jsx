import { Award, Eye, Zap, Handshake, TrendingUp, BookOpen, Sparkles } from "lucide-react";
import Reveal from "../Reveal";

const VALUES = [
  {
    icon: Award,
    title: "Craft Over Noise",
    desc: "We only ship creative we are proud to put in our own portfolio. No generic template filler or useless vanity posts.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "Clients see real numbers — qualified enquiries, cost per acquisition, and ROAS — never hidden agency markups or smoke screens.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Speed With Discipline",
    desc: "SOPs, documented checklists, and pre-scheduled editorial calendars ensure nothing ever slips through the cracks or depends on one person.",
    color: "from-orange-500 to-pink-500",
  },
  {
    icon: Handshake,
    title: "Partner, Not Vendor",
    desc: "We sit close enough to your business reality and P&L to say 'no' to bad marketing ideas and push for high-ROI strategies.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: TrendingUp,
    title: "Compounding Value",
    desc: "Every asset — brand identity, video b-roll library, SEO keyword rankings — becomes more valuable over time, never reset each month.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Data-driven decisions and rapid AI tool adoption ensure your SME stays ahead of changing ad algorithms and buyer habits.",
    color: "from-blue-500 to-indigo-600",
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 md:py-28 bg-[#050914] text-white relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              VOOPIFY Tenets
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Our Six Operating Principles
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              These principles guide how our pods work, how we communicate with founders, and how we measure success on every engagement.
            </p>
          </Reveal>
        </div>

        {/* 6 Values Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Reveal
                key={idx}
                variant="up"
                delay={idx * 100}
                className="p-8 rounded-3xl bg-[#091122] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-[#0c1830] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${val.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
