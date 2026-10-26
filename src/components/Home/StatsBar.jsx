import Reveal from "../Reveal";
import { Users, Zap, Award, Layers } from "lucide-react";

const STATS_DATA = [
  {
    icon: Users,
    number: "500+",
    label: "Brands Managed",
    subtext: "Growing brands across 15+ industries",
    iconBg: "#F0E9FF",
    iconColor: "#7B2FF7",
    numGrad: "from-purple-600 to-violet-500",
  },
  {
    icon: Zap,
    number: "10K+",
    label: "Posts Published",
    subtext: "High-quality content delivered on time",
    iconBg: "#FFF4E9",
    iconColor: "#FF6B35",
    numGrad: "from-orange-500 to-amber-400",
  },
  {
    icon: Award,
    number: "95%",
    label: "Client Retention",
    subtext: "Long-term partnerships built on real results",
    iconBg: "#E9FDF4",
    iconColor: "#059669",
    numGrad: "from-emerald-500 to-teal-400",
  },
  {
    icon: Layers,
    number: "250%",
    label: "Avg. Engagement Boost",
    subtext: "Measurable growth within the first 90 days",
    iconBg: "#FFF0F5",
    iconColor: "#E11D74",
    numGrad: "from-pink-500 to-rose-400",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-14 lg:py-18 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(123,47,247,0.03) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STATS_DATA.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Reveal
                key={index}
                variant="up"
                delay={index * 100}
                className="relative lg:border-r last:border-r-0 border-gray-100 lg:pr-6 group text-center lg:text-left"
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:-translate-y-1 shadow-sm"
                    style={{ background: stat.iconBg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.iconColor }} />
                  </div>
                </div>

                <div className={`text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.numGrad} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="mt-2 text-sm font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-gray-400 leading-relaxed">
                  {stat.subtext}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
