import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Reveal from "../Reveal";

/**
 * PricingSection Component
 * Transparent monthly retainers tailored for Indian SMEs with clear deliverables.
 */
const PRICING_PLANS = [
  {
    name: "Starter Retainer",
    price: "₹24,999",
    period: "/month",
    description: "Ideal for growing businesses looking to establish solid digital consistency and generate local leads.",
    features: [
      "Social Media Management (2 Platforms)",
      "12 High-Quality Posts & 4 Video Reels",
      "Google Business Profile Optimization",
      "Basic SEO & Citation Building",
      "Bi-Weekly Analytics & Strategy Report",
      "Dedicated Account Manager",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Growth Retainer",
    price: "₹49,999",
    period: "/month",
    description: "Our most popular tier. Full-funnel content engine plus targeted performance ad management.",
    features: [
      "Multi-Platform Social Media (3 Platforms)",
      "20 Custom Posts + 8 Reels / Shorts",
      "Meta & Google Ad Campaign Management",
      "Ad Spend Management up to ₹1,00,000",
      "Landing Page Audit & Conversion Tuning",
      "Full On-Page & Technical SEO Setup",
      "Weekly Performance Reviews & Live Dashboard",
    ],
    highlighted: true,
    cta: "Scale Your Business",
  },
  {
    name: "Scale Retainer",
    price: "₹99,999",
    period: "/month",
    description: "Complete outsourced CMO & creative production squad for aggressive market expansion.",
    features: [
      "Full 360° Omnichannel Digital Marketing",
      "Unlimited Ad Creatives & Video Scripts",
      "Meta, Google & LinkedIn Ads Handling",
      "Full Website Maintenance & Speed Tuning",
      "Founder Personal Branding Strategy",
      "Custom Lead Scraping & Funnel Automation",
      "Dedicated Senior Growth Strategist",
    ],
    highlighted: false,
    cta: "Hire Growth Engine",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0a1220] text-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fade">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
              Transparent Retainers
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Predictable Investment. Measurable ROI.
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              No hidden hourly surprises. Defined deliverables, strict SLAs, and transparent outcomes —
              priced for Indian SMEs who want serious growth.
            </p>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <Reveal
              key={plan.name}
              variant="up"
              delay={index * 150}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted
                  ? "bg-[#0e1c32] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/15 lg:-translate-y-3"
                  : "bg-[#0d1627] border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Popular Pill */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-[#070d18] text-xs font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5 pb-6 border-b border-white/10">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">
                    {plan.period}
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">
                    What's Included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <Link
                  to="/contact"
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-[#070d18] hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-[1.02]"
                      : "bg-white/[0.06] text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Custom / Enterprise note */}
        <div className="mt-12 text-center text-sm text-slate-400">
          Need custom multi-location scope or custom ad spend?{" "}
          <Link to="/contact" className="text-cyan-400 hover:underline font-semibold">
            Talk to us about Enterprise Custom Retainers →
          </Link>
        </div>

      </div>
    </section>
  );
}
