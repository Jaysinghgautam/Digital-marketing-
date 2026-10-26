import { Palette, Globe, Video, TrendingUp, CheckCircle, ArrowRight, Calendar, BarChart2 } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const STEPS = [
  {
    num: "01",
    title: "Plan",
    desc: "Understand your goals and create a strategy.",
    icon: Calendar,
    iconBg: "#F0E9FF",
    iconColor: "#7B2FF7",
    numColor: "#7B2FF7",
  },
  {
    num: "02",
    title: "Create",
    desc: "Design creatives and videos.",
    icon: Palette,
    iconBg: "#FFF4E9",
    iconColor: "#FF6B35",
    numColor: "#FF6B35",
  },
  {
    num: "03",
    title: "Approve",
    desc: "You review and suggest changes.",
    icon: CheckCircle,
    iconBg: "#E9F8FF",
    iconColor: "#0891B2",
    numColor: "#0891B2",
  },
  {
    num: "04",
    title: "Publish",
    desc: "We schedule and post automatically.",
    icon: Globe,
    iconBg: "#EDFDF8",
    iconColor: "#059669",
    numColor: "#059669",
  },
  {
    num: "05",
    title: "Report",
    desc: "Get monthly performance reports.",
    icon: BarChart2,
    iconBg: "#FFF0F5",
    iconColor: "#E11D74",
    numColor: "#E11D74",
  },
];

export default function VoopFramework() {
  return (
    <section id="process" className="py-20 md:py-28 bg-gray-50 text-gray-900 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{
                color: "#7B2FF7",
                background: "rgba(123,47,247,0.08)",
                border: "1px solid rgba(123,47,247,0.2)",
              }}>
              Our Process
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight leading-tight text-gray-900">
              Simple Steps.{" "}
              <span style={{
                background: "linear-gradient(135deg, #7B2FF7, #FF6B35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Powerful Results.
              </span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our streamlined 5-step process ensures consistent quality, timely delivery, and measurable growth every month.
            </p>
          </Reveal>
        </div>

        {/* Steps - Horizontal for desktop, vertical for mobile */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 z-0"
            style={{ background: "linear-gradient(90deg, transparent, #7B2FF7, #FF6B35, #7B2FF7, transparent)" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.num} variant="up" delay={index * 100}>
                  <div className="flex flex-col items-center text-center group">
                    {/* Icon circle */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm transition-transform group-hover:-translate-y-2 relative z-10"
                      style={{ background: step.iconBg, border: `1.5px solid ${step.iconColor}25` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.iconColor }} />
                    </div>

                    {/* Step number */}
                    <div className="text-xs font-black mb-1" style={{ color: step.numColor }}>
                      {step.num}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                      {step.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-xs text-gray-400 leading-relaxed max-w-[140px]">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <Reveal variant="fade" delay={500}>
          <div className="mt-14 p-7 rounded-3xl text-center"
            style={{
              background: "rgba(123,47,247,0.05)",
              border: "1.5px solid rgba(123,47,247,0.15)",
            }}>
            <p className="text-sm font-bold text-gray-700 mb-4">
              Ready to experience our seamless process?
              <span className="ml-2" style={{ color: "#FF6B35" }}>
                Get started today — first month at a special price!
              </span>
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #7B2FF7, #FF6B35)",
                boxShadow: "0 4px 20px rgba(123,47,247,0.3)",
              }}
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
