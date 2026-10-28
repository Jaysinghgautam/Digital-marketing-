import {
  Palette,
  Globe,
  Video,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  BarChart2,
} from "lucide-react";
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
    iconBg: "#F0E9FF",
    iconColor: "#7B2FF7",
    numColor: "#7B2FF7",
  },
];

export default function VoopFramework() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-gray-50 text-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <Reveal variant="fade">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{
                color: "#7B2FF7",
                background: "rgba(123,47,247,0.08)",
                border: "1px solid rgba(123,47,247,0.2)",
              }}
            >
              Our Process
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight leading-tight text-gray-900">
              Simple Steps.{" "}
              <span style={{ color: "#7B2FF7" }}>Powerful Results.</span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our streamlined 5-step process ensures consistent quality, timely
              delivery, and measurable growth every month.
            </p>
          </Reveal>
        </div>

        {/* Steps - icon left, text right, arrows between */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-2">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="flex items-center w-full lg:w-auto"
              >
                <Reveal variant="up" delay={index * 100}>
                  <div className="flex items-center gap-3 text-left group">
                    {/* Icon square */}
                    <div
                      className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center shadow-sm transition-transform group-hover:-translate-y-1"
                      style={{ background: step.iconColor }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "#fff" }} />
                    </div>

                    <div>
                      {/* Number + Title */}
                      <div className="flex items-center gap-1.5">
                        <span
                          className="text-xs font-black"
                          style={{ color: step.numColor }}
                        >
                          {step.num}
                        </span>
                        <h3 className="text-base font-extrabold text-gray-900">
                          {step.title}
                        </h3>
                      </div>

                      {/* Desc */}
                      <p className="text-xs text-gray-400 leading-snug max-w-[150px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Arrow connector */}
                {index < STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block w-5 h-5 mx-3 shrink-0 text-gray-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
