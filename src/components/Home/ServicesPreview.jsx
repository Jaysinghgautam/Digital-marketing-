import { Link } from "react-router-dom";
import { 
  Palette, 
  Globe, 
  Camera, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import Reveal from "../Reveal";

/**
 * ServicesPreview Component
 * Displays a clean showcase of the 4 core marketing capabilities
 * with bullet points and direct links to the Services page.
 */
const SERVICES_DATA = [
  {
    icon: Palette,
    title: "Brand Strategy & Design",
    description: "Build an unmistakable brand presence that sets you apart and commands premium pricing.",
    features: [
      "Brand Positioning & Guidelines",
      "Logo & Complete Visual Identity",
      "Corporate Decks & Collaterals",
      "Packaging & Print Assets",
    ],
    tag: "Branding",
  },
  {
    icon: Globe,
    title: "Web & Technical SEO",
    description: "High-speed, conversion-centric websites and search engine dominance to capture inbound leads.",
    features: [
      "Custom High-Speed Website Design",
      "Local & Technical SEO Audits",
      "Google Business Profile Setup",
      "Conversion Funnel Optimization",
    ],
    tag: "Digital",
  },
  {
    icon: Camera,
    title: "Content & Social Media",
    description: "Creative storytelling, video reels, and founder LinkedIn branding that turn visitors into fans.",
    features: [
      "Short-Form Video & Reels Production",
      "LinkedIn Founder Personal Branding",
      "Monthly Curated Social Calendars",
      "High-Fidelity Ad Creatives & Copy",
    ],
    tag: "Content",
  },
  {
    icon: BarChart3,
    title: "Paid Ads & ROI Marketing",
    description: "Profitable client acquisition campaigns on Meta and Google with transparent reporting.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Search & Display Ads",
      "Full Retargeting Funnel Architecture",
      "Live Revenue & ROAS Dashboard",
    ],
    tag: "Performance",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0a1220] text-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <Reveal variant="fade">
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
                What We Do
              </span>
            </Reveal>

            <Reveal variant="up" delay={150}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Four Practices. One Accountable Team.
              </h2>
            </Reveal>

            <Reveal variant="up" delay={250}>
              <p className="mt-4 text-slate-300 text-base sm:text-lg">
                No need to manage 5 different freelancers or siloed agencies. We handle your entire
                growth engine under one roof with synchronized execution.
              </p>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={300}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group"
            >
              <span>Explore All Detailed Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                variant="up"
                delay={idx * 150}
                className="group rounded-2xl border border-white/10 bg-[#0e192c] hover:bg-[#12213a] p-7 sm:p-9 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-[#0b1424] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="text-xs font-medium text-slate-400 hover:text-slate-200"
                  >
                    Request Proposal →
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
