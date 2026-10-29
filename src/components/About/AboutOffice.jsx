
import React from "react";
import {
  Camera,
  BadgeCheck,
  ClipboardCheck,
  Headset,
  ArrowRight,
  MapPin,
} from "lucide-react";

const features = [
  {
    title: "End-to-End Management",
    description: "From strategy to posting, we handle everything.",
    icon: Camera,
    color: "#F05AA6",
    bg: "#FFE7F3",
  },
  {
    title: "Creative & Trend-Focused",
    description: "Fresh ideas, trending formats and platform-specific content.",
    icon: BadgeCheck,
    color: "#3287F5",
    bg: "#E5F1FF",
  },
  {
    title: "Data-Driven Approach",
    description: "We track, analyze and optimize for real results.",
    icon: ClipboardCheck,
    color: "#FF861C",
    bg: "#FFF0DF",
  },
  {
    title: "Dedicated Support",
    description: "A team that's always available for your brand.",
    icon: Headset,
    color: "#7C2CF5",
    bg: "#F0E5FF",
  },
];

export default function WhyChooseVoopify() {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* WHY CHOOSE VOOPIFY */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_1.05fr_0.85fr] lg:gap-5 lg:px-10 lg:py-8 xl:px-12">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <span className="mb-3 inline-flex rounded-full bg-[#F0EDFF] px-3 py-1 text-[9px] font-bold tracking-wider text-[#7952F5]">
            WHY CHOOSE VOOPIFY
          </span>

          <h2 className="mb-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-[#11152B] sm:text-4xl lg:text-[30px] xl:text-[36px]">
            Your Growth Partner
            <br />
            in the Digital World.
          </h2>

          <p className="mb-5 max-w-[390px] text-[12px] leading-[1.65] text-[#62677A] sm:text-[13px]">
            We don't just create posts — we create opportunities
            for your brand to grow, engage and stand out. With a
            mix of strategy, creativity and data-driven execution,
            we ensure your social media works as hard as you do.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#9418F5] px-5 py-2.5 text-xs font-bold text-white shadow-[0_5px_15px_rgba(148,24,245,0.15)] transition-colors hover:bg-[#7810D5]"
          >
            Book a Free Call
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <ArrowRight size={13} />
            </span>
          </a>
        </div>

        {/* CENTER FEATURES */}
        <div className="flex flex-col gap-4 lg:gap-3.5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-3"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: feature.bg }}
                >
                  <Icon
                    size={21}
                    strokeWidth={2}
                    style={{ color: feature.color }}
                  />
                </div>

                <div>
                  <h3 className="text-[12px] font-extrabold leading-tight text-[#15131F] sm:text-[13px]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 max-w-[270px] text-[10px] leading-[1.5] text-[#6B7083] sm:text-[11px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT PNG ILLUSTRATION */}
        <div className="relative mx-auto flex min-h-[290px] w-full max-w-[340px] items-end justify-center lg:min-h-[300px]">
          {/* Solid decorative shape */}
          <div className="absolute bottom-3 right-1 h-[230px] w-[210px] rounded-[48%_48%_30%_30%] bg-[#FF704D] sm:h-[260px] sm:w-[230px]" />

          {/* Purple decorative shape */}
          <div className="absolute bottom-0 left-1 h-[110px] w-[110px] rounded-full bg-[#D94FEA]" />

          {/* Transparent PNG: add your image here */}
          <img
            src="/voopify-woman.png"
            alt="Creative professional holding a tablet"
            className="relative z-10 max-h-[320px] w-full object-contain object-bottom"
          />

          {/* Handwritten-style label */}
          <div className="absolute left-0 top-3 z-20 -rotate-6 text-[12px] font-bold leading-[1.35] text-[#25213A]">
            Ideas
            <br />
            Strategy
            <br />
            Content
            <br />
            Growth
            <span className="mt-1 block text-xl">↶</span>
          </div>
        </div>
      </div>

    </section>
  );
}
