import Reveal from "../Reveal";

/**
 * StatsBar Component
 * Highlights key impact numbers, proving credibility and market reality.
 */
const STATS_DATA = [
  {
    number: "63M+",
    label: "Indian MSMEs",
    subtext: "underserved by generic agencies",
  },
  {
    number: "3.8x",
    label: "Average ROAS",
    subtext: "on performance ad campaigns",
  },
  {
    number: "14 Days",
    label: "Rapid Onboarding",
    subtext: "to first live sprint & creatives",
  },
  {
    number: "98%",
    label: "Retention Rate",
    subtext: "founders stay on monthly retainer",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0b1424] border-y border-white/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {STATS_DATA.map((stat, index) => (
            <Reveal
              key={index}
              variant="up"
              delay={index * 120}
              className="text-center sm:text-left relative lg:border-r last:border-r-0 border-white/10 lg:pr-6"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-white">
                {stat.label}
              </div>
              <div className="mt-0.5 text-xs text-slate-400">
                {stat.subtext}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
