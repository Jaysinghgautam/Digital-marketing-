import { Link } from "react-router-dom";
import {
  Palette,
  Globe,
  Video,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Layers,
} from "lucide-react";
import Reveal from "../Reveal";

const SERVICES_DATA = [
  {
    id: "social",
    icon: Palette,
    tag: "Social Media",
    title: "Social Media Management",
    tagline: "Build an unmistakable brand presence across all platforms.",
    description:
      "We plan, create, schedule and manage high-performing social media content so your brand stays active, relevant and consistently growing.",
    features: [
      "Custom Monthly Content Calendar (20+ Posts)",
      "Professional Design & Copywriting",
      "Stories, Highlights & Cover Design",
      "Hashtag Strategy & Community Management",
    ],
    deliverables: "Delivered weekly on auto-publishing schedule.",
    iconBg: "from-purple-500 to-violet-600",
    iconBgLight: "#F0E9FF",
    iconColor: "#7B2FF7",
    accentColor: "#7B2FF7",
    borderHover: "hover:border-purple-300 hover:shadow-purple-100",
  },
  {
    id: "design",
    icon: Layers,
    tag: "Graphic Design",
    title: "Graphic & Creative Design",
    tagline: "Stunning visuals that stop the scroll and drive engagement.",
    description:
      "Eye-catching graphics, carousels, banners, product mockups, and brand creatives designed to make your social media stand out.",
    features: [
      "Brand-Consistent Post Templates",
      "Carousel & Infographic Design",
      "Ad Creative Variations (A/B Ready)",
      "Product & Lifestyle Mockups",
    ],
    deliverables: "Turnaround within 48 hours per creative batch.",
    iconBg: "from-blue-500 to-cyan-500",
    iconBgLight: "#E9F8FF",
    iconColor: "#0891B2",
    accentColor: "#0891B2",
    borderHover: "hover:border-cyan-300 hover:shadow-cyan-100",
  },
  {
    id: "video",
    icon: Video,
    tag: "Video Content",
    title: "Reels & Video Editing",
    tagline: "High-quality video content that drives real attention.",
    description:
      "Short-form reels, brand story videos, product showcases, and testimonial edits — optimized for Instagram, Facebook, and YouTube Shorts.",
    features: [
      "Reels & Shorts Editing (8–12/month)",
      "Motion Graphics & Text Overlays",
      "BGM, Voiceover & Subtitles",
      "Platform-Optimized Aspect Ratios",
    ],
    deliverables: "Shipped bi-weekly on content schedule.",
    iconBg: "from-pink-500 to-rose-500",
    iconBgLight: "#FFF0F5",
    iconColor: "#E11D74",
    accentColor: "#E11D74",
    borderHover: "hover:border-pink-300 hover:shadow-pink-100",
  },
  {
    id: "growth",
    icon: TrendingUp,
    tag: "Performance Ads",
    title: "Posting & Scheduling",
    tagline: "Automated, consistent posting with performance tracking.",
    description:
      "We handle all scheduling and auto-publishing with detailed analytics on engagement, reach, and growth — so you always know your ROI.",
    features: [
      "Cross-Platform Auto-Publishing",
      "Best-Time Posting Algorithm",
      "Weekly Engagement Reports",
      "Monthly Growth Analytics Dashboard",
    ],
    deliverables: "Real-time dashboard access included.",
    iconBg: "from-orange-500 to-amber-500",
    iconBgLight: "#FFF4E9",
    iconColor: "#F97316",
    accentColor: "#F97316",
    borderHover: "hover:border-orange-300 hover:shadow-orange-100",
  },
  {
    id: "analytics",
    icon: Globe,
    tag: "Analytics",
    title: "Analytics & Reporting",
    tagline: "Data-driven insights that prove your social media ROI.",
    description:
      "Detailed monthly reports covering follower growth, post performance, audience demographics, and competitor benchmarking.",
    features: [
      "Monthly Performance Reports",
      "Competitor Analysis",
      "Audience Insights & Demographics",
      "Content Performance Benchmarking",
    ],
    deliverables: "Reports delivered on the 1st of each month.",
    iconBg: "from-emerald-500 to-teal-500",
    iconBgLight: "#EDFDF8",
    iconColor: "#059669",
    accentColor: "#059669",
    borderHover: "hover:border-emerald-300 hover:shadow-emerald-100",
  },
  {
    id: "strategy",
    icon: CheckCircle2,
    tag: "Strategy",
    title: "Content Strategy & Planning",
    tagline: "A clear roadmap to hit your social media goals.",
    description:
      "We build a data-backed content strategy aligned with your brand goals, audience, and platform algorithms for maximum organic reach.",
    features: [
      "60-Day Content Roadmap",
      "Platform-Specific Strategy",
      "Trending Audio & Hashtag Research",
      "Brand Voice & Tone Guidelines",
    ],
    deliverables: "Strategy deck delivered in week 1.",
    iconBg: "from-violet-500 to-purple-600",
    iconBgLight: "#F5F0FF",
    iconColor: "#7C3AED",
    accentColor: "#7C3AED",
    borderHover: "hover:border-violet-300 hover:shadow-violet-100",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white text-gray-900 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top center, rgba(123,47,247,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Top Header */}
        <div className="text-center mb-14">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border"
              style={{
                color: "#7B2FF7",
                background: "rgba(123,47,247,0.08)",
                borderColor: "rgba(123,47,247,0.2)",
              }}>
              <Layers className="w-3.5 h-3.5" />
              Our Services
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
              Everything You Need for a{" "}
              <span style={{
                background: "linear-gradient(135deg, #7B2FF7, #FF6B35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Strong Social Media
              </span>{" "}
              Presence
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              One subscription. Everything your brand needs to dominate social media — from strategy to execution.
            </p>
          </Reveal>

          <Reveal variant="fade" delay={300}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                color: "#7B2FF7",
                background: "rgba(123,47,247,0.08)",
                border: "1.5px solid rgba(123,47,247,0.2)",
              }}
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <Reveal
                key={srv.id}
                variant="up"
                delay={index * 80}
                className={`group rounded-3xl p-7 bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl ${srv.borderHover} flex flex-col justify-between cursor-pointer`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-13 h-13 p-3 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ background: srv.iconBgLight }}
                    >
                      <Icon className="w-7 h-7" style={{ color: srv.iconColor }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        color: srv.accentColor,
                        background: srv.iconBgLight,
                      }}>
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-sm font-semibold text-gray-500 mb-3">{srv.tagline}</p>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{srv.description}</p>

                  {/* Bullet features */}
                  <div className="mt-5 space-y-2 pt-5 border-t border-gray-50">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: srv.accentColor }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-medium">{srv.deliverables}</span>
                  <Link
                    to="/services"
                    className="font-bold flex items-center gap-1 transition-colors"
                    style={{ color: srv.accentColor }}
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
