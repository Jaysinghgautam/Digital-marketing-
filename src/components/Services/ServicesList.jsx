import { useState } from "react";
import {
  Palette,
  Globe,
  Video,
  TrendingUp,
  Package,
  Layers,
  Search,
  MapPin,
  Camera,
  Share2,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const PRACTICES = [
  {
    id: "brand",
    category: "Brand Practice",
    title: "Brand Strategy, Identity & Packaging",
    color: "from-purple-500 to-indigo-600",
    glow: "rgba(139, 92, 246, 0.2)",
    icon: Palette,
    summary: "Establish an unmistakable, premium brand position that separates you from commodity competitors.",
    services: [
      {
        name: "Brand Positioning & Naming",
        desc: "Core brand thesis, competitive moat, naming validation, and customer messaging playbook.",
        deliverables: "Comprehensive Brand Guidelines & Messaging Bible",
      },
      {
        name: "Logo & Visual Identity",
        desc: "High-contrast wordmark, color palette, typography hierarchy, and brand asset library.",
        deliverables: "Full vector suite, guidelines & export sets",
      },
      {
        name: "Corporate Identity & Collaterals",
        desc: "Stationery, office/factory signage, vehicle branding, pitch decks & sales templates.",
        deliverables: "Print-ready CMYK files + editable PowerPoint/Keynote",
      },
      {
        name: "Packaging Architecture",
        desc: "Structural and graphic packaging design for retail and e-commerce compliance.",
        deliverables: "Dielines, 3D mockups & production print specs",
      },
    ],
  },
  {
    id: "digital",
    category: "Digital Practice",
    title: "High-Speed Web, SEO & GBP Dominance",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(6, 182, 212, 0.2)",
    icon: Globe,
    summary: "Turn organic discovery and local intent into high-intent inbound calls and quotation requests.",
    services: [
      {
        name: "Website Development",
        desc: "Custom 5–15 page responsive website, CMS architecture, sub-second speed optimization.",
        deliverables: "Next.js / WordPress build, mobile responsive, SSL & analytics",
      },
      {
        name: "Technical & On-Page SEO",
        desc: "Core Web Vitals tuning, commercial keyword ranking, meta tags, and local search dominance.",
        deliverables: "Monthly ranking reports & continuous on-page optimization",
      },
      {
        name: "Google Business Profile (GBP)",
        desc: "Local search dominance, review generation workflows, weekly geo-tagged posts, and photo uploads.",
        deliverables: "Verified profile optimization, review management & monthly insights",
      },
    ],
  },
  {
    id: "content",
    category: "Content Practice",
    title: "Reels, LinkedIn Thought Leadership & AI Content",
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236, 72, 153, 0.2)",
    icon: Video,
    summary: "Consistent, compounding creative that captures attention and turns passive viewers into buyers.",
    services: [
      {
        name: "Social Media Engine",
        desc: "Editorial calendar, graphic design, punchy captions, automated publishing & community engagement.",
        deliverables: "12–20+ posts/month across Instagram, Facebook & LinkedIn",
      },
      {
        name: "Founder LinkedIn Branding",
        desc: "Ghostwriting, thought leadership strategy, and industry case studies for SME founders and CEOs.",
        deliverables: "3–4 curated founder posts per week + network engagement",
      },
      {
        name: "Photography & Video Production",
        desc: "Product shoots, factory/office tours, customer video testimonials, and viral short-form reels.",
        deliverables: "Raw b-roll library + 4–8 edited reels per month",
      },
      {
        name: "AI Content Acceleration",
        desc: "AI-assisted multivariate copy, ad image variants, and script storyboards supervised by human taste.",
        deliverables: "24+ testable creative variations per sprint",
      },
    ],
  },
  {
    id: "growth",
    category: "Growth Practice",
    title: "Performance Ads & Measurable ROI Engine",
    color: "from-emerald-500 to-teal-600",
    glow: "rgba(16, 185, 129, 0.2)",
    icon: TrendingUp,
    summary: "Profitable paid customer acquisition campaigns backed by transparent unit economics.",
    services: [
      {
        name: "Meta Performance Ads",
        desc: "Full-funnel Instagram and Facebook ads designed to capture qualified SME and consumer leads.",
        deliverables: "Audience targeting, creative testing & weekly CPL optimization",
      },
      {
        name: "Google Search & Shopping Ads",
        desc: "High-intent search campaigns capturing prospects actively searching for your products.",
        deliverables: "Negative keyword pruning, bid management & ROAS tracking",
      },
      {
        name: "Retargeting & Conversion Tuning",
        desc: "Re-engage website drop-offs and social visitors with high-urgency testimonials and offers.",
        deliverables: "Multi-tier retargeting funnels + landing page CRO reviews",
      },
      {
        name: "Executive ROI Dashboard",
        desc: "Real-time Looker Studio dashboard tracking spend, leads, cost-per-lead, and pipeline value.",
        deliverables: "Live dashboard link + weekly executive commentary",
      },
    ],
  },
];

export default function ServicesList() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredPractices = selectedFilter === "all"
    ? PRACTICES
    : PRACTICES.filter((p) => p.id === selectedFilter);

  return (
    <section id="practice-matrix" className="py-20 md:py-28 bg-[#070d18] text-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Practice Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === "all"
                ? "bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 text-slate-950 font-black shadow-lg shadow-cyan-500/20"
                : "bg-[#0b1424] border border-white/10 text-slate-300 hover:text-white hover:border-white/20"
            }`}
          >
            All 4 Practices
          </button>
          {PRACTICES.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedFilter(p.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedFilter === p.id
                  ? "bg-cyan-400 text-slate-950 font-black shadow-md shadow-cyan-400/25"
                  : "bg-[#0b1424] border border-white/10 text-slate-300 hover:text-white hover:border-white/20"
              }`}
            >
              {p.category}
            </button>
          ))}
        </div>

        {/* Practice Blocks */}
        <div className="space-y-16">
          {filteredPractices.map((practice, pIdx) => {
            const Icon = practice.icon;
            return (
              <Reveal key={practice.id} variant="up" delay={pIdx * 100}>
                <div className="rounded-3xl bg-[#091122] border border-white/[0.08] overflow-hidden p-8 sm:p-12 shadow-2xl relative">
                  
                  {/* Top Practice Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/[0.08] gap-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${practice.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
                          {practice.category}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                          {practice.title}
                        </h2>
                        <p className="mt-1 text-sm text-slate-300 max-w-2xl">
                          {practice.summary}
                        </p>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-cyan-300 text-xs font-bold self-start md:self-auto transition-all"
                    >
                      <span>Inquire for {practice.category}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Sub-services Grid */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {practice.services.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/30 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span>{sub.name}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            {sub.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/[0.05] text-[11px] font-mono text-cyan-300/80">
                          <span className="text-slate-400">Deliverables: </span>
                          {sub.deliverables}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
