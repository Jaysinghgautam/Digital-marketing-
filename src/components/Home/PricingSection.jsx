import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, ShieldCheck, HelpCircle, Layers, Calendar } from "lucide-react";
import Reveal from "../Reveal";

const TIERS = [
  {
    id: "starter",
    name: "Starter Retainer",
    priceMonthly: 22000,
    priceRange: "₹18,000 – ₹25,000",
    period: "/month",
    internalMapping: "Bronze / Silver Delivery",
    description: "Designed for SMEs establishing digital consistency, brand credibility, and local search visibility.",
    features: [
      "Social Media Management (2 Target Platforms)",
      "12 Custom Designed Posts + 4 Short-Form Reels",
      "Google Business Profile Setup & Weekly Updates",
      "Local SEO Optimization & Keyword Tracking",
      "Bi-Weekly Analytics & Monthly Strategy Call",
      "Dedicated Account Manager (48h Turnaround SLA)",
    ],
    highlighted: false,
    badge: "Foundation",
    cta: "Start Starter Plan",
  },
  {
    id: "growth",
    name: "Growth Retainer",
    priceMonthly: 49000,
    priceRange: "₹40,000 – ₹60,000",
    period: "/month",
    internalMapping: "Gold Delivery Tier",
    description: "Our flagship package. Full-funnel content engine plus targeted performance ad management to drive customer acquisition.",
    features: [
      "Everything in Starter Tier, plus:",
      "3 Platforms (Instagram, LinkedIn, FB / YouTube)",
      "20 High-Quality Posts + 8 Reels / Shorts",
      "Meta & Google Ad Management (Up to ₹75k Ad Spend)",
      "Quarterly Content Shoot or Product Photography",
      "Landing Page Audit & Conversion Tuning",
      "Weekly Performance Reviews & Real-Time Dashboard",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Scale Your Business",
  },
  {
    id: "scale",
    name: "Scale Retainer",
    priceMonthly: 98000,
    priceRange: "₹80,000 – ₹1,50,000",
    period: "/month",
    internalMapping: "Platinum / Full Department",
    description: "Complete outsourced creative and growth department for ambitious SMEs and multi-location businesses.",
    features: [
      "Everything in Growth Tier, plus:",
      "Dedicated Senior Growth Strategist & Creative Lead",
      "Monthly On-Site Photography & Video Production",
      "Founder LinkedIn Personal Branding & Ghostwriting",
      "Website Maintenance, Speed Tuning & Tech SEO",
      "Meta, Google & LinkedIn Ads (Ad Spend ₹1.5L+)",
      "Custom Lead Scraping & Multivariate AI Creative Testing",
    ],
    highlighted: false,
    badge: "Aggressive Growth",
    cta: "Hire Full Growth Engine",
  },
];

const ONE_TIME_PROJECTS = [
  {
    title: "Complete Brand Identity",
    price: "₹25,000 – ₹1,20,000",
    timeline: "2–3 Weeks",
    desc: "Positioning, logo, brand guidelines, stationery & packaging mockups. Converts into ongoing retainer.",
  },
  {
    title: "High-Speed Website Build",
    price: "₹35,000 – ₹1,80,000",
    timeline: "3–4 Weeks",
    desc: "5–15 page conversion-tuned website, CMS setup, mobile speed optimization & Google Analytics.",
  },
  {
    title: "Commercial Photo / Video Sprint",
    price: "₹25,000 – ₹90,000",
    timeline: "1 Day Shoot + 5d Edit",
    desc: "Product shoots, factory tours, founder interviews, testimonials & raw video library for repurposing.",
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("quarterly"); // monthly or quarterly (10% off)

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(123,47,247,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full"
              style={{ color: '#7B2FF7', background: 'rgba(123,47,247,0.08)', border: '1px solid rgba(123,47,247,0.2)' }}>
              <Sparkles className="w-3.5 h-3.5" style={{ color: '#7B2FF7' }} />
              Simple, Transparent Pricing
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
              Plans for Every Brand.{" "}
              <span style={{ background: 'linear-gradient(135deg,#7B2FF7,#FF6B35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                All Inclusive.
              </span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
              No hidden charges. Defined deliverables, strict SLAs, and transparent outcomes — designed for growing brands.
            </p>
          </Reveal>

          {/* Billing Cycle Switcher */}
          <Reveal variant="fade" delay={300}>
            <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  billingCycle === "monthly"
                    ? "text-white shadow"
                    : "text-gray-400 hover:text-gray-700"
                }`}
                style={billingCycle === "monthly" ? { background: 'linear-gradient(135deg,#7B2FF7,#FF6B35)' } : {}}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  billingCycle === "quarterly"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-700"
                }`}
                style={billingCycle === "quarterly" ? { background: 'linear-gradient(135deg,#7B2FF7,#FF6B35)' } : {}}
              >
                <span>Quarterly</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600 font-mono">
                  Save 10%
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((plan, index) => {
            const displayPrice = billingCycle === "quarterly"
              ? `₹${Math.round(plan.priceMonthly * 0.9).toLocaleString("en-IN")}`
              : `₹${plan.priceMonthly.toLocaleString("en-IN")}`;

            return (
              <Reveal
                key={plan.id}
                variant="up"
                delay={index * 150}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlighted
                    ? "bg-white border-2 shadow-2xl lg:-translate-y-3"
                    : "bg-white border border-gray-100 hover:border-purple-200 hover:shadow-xl"
                }`}
                style={plan.highlighted ? { borderColor: '#7B2FF7', boxShadow: '0 20px 60px rgba(123,47,247,0.2)' } : {}}
              >
                {/* Popular Pill */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1"
                    style={{ background: 'linear-gradient(135deg, #7B2FF7, #FF6B35)', boxShadow: '0 4px 20px rgba(123,47,247,0.4)' }}>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-white">
                      {plan.name}
                    </h3>
                    {!plan.highlighted && (
                      <span className="text-[11px] font-mono font-bold text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-gray-900">
                        {displayPrice}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold">
                        {plan.period}
                      </span>
                    </div>
                    <div className="mt-1 text-xs font-mono" style={{ color: '#7B2FF7' }}>
                      Band: {plan.priceRange} (Scope tailored)
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="mt-6 space-y-3">
                    <div className="text-[11px] uppercase font-bold tracking-wider text-gray-400">
                      Included:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                        <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#7B2FF7' }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    to="/contact"
                    className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                      plan.highlighted
                        ? "text-white hover:opacity-95 shadow-lg"
                        : "border-2 hover:-translate-y-0.5"
                    }`}
                    style={plan.highlighted
                      ? { background: 'linear-gradient(135deg,#7B2FF7,#FF6B35)', boxShadow: '0 8px 25px rgba(123,47,247,0.35)' }
                      : { color: '#7B2FF7', borderColor: 'rgba(123,47,247,0.3)', background: 'rgba(123,47,247,0.05)' }}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Enterprise SME Custom Tier Banner */}
        <Reveal variant="fade" delay={450}>
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg font-extrabold text-gray-900">Enterprise Tier</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold"
                  style={{ background: 'rgba(123,47,247,0.1)', color: '#7B2FF7', border: '1px solid rgba(123,47,247,0.2)' }}>
                  Custom ₹2,00,000+ / mo
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 max-w-2xl leading-relaxed">
                For multi-location brands, manufacturing groups, or high-growth D2C brands needing a full-stack squad: Senior Creative Director, dedicated ad buyers, weekly video crew, and custom executive attribution.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl font-bold text-xs text-white transition-colors shrink-0 flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg,#7B2FF7,#FF6B35)', boxShadow: '0 4px 20px rgba(123,47,247,0.3)' }}
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        {/* One-Time Projects Strip */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">
              Need a One-Time Project?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-400">
              Over 70% of our project clients roll into monthly growth plans within 60–90 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ONE_TIME_PROJECTS.map((proj, pIdx) => (
              <div
                key={pIdx}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                    <span className="font-mono" style={{ color: '#7B2FF7' }}>{proj.timeline}</span>
                    <span className="font-bold text-gray-900">{proj.price}</span>
                  </div>
                  <h4 className="text-base font-extrabold text-gray-900 mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold hover:underline transition-colors"
                  style={{ color: '#7B2FF7' }}
                >
                  <span>Inquire for Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
