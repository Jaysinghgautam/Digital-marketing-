import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight, ShieldCheck, Send, Sparkles } from "lucide-react";
import Reveal from "../Reveal";

const CONTACT_INFO = [
  { icon: Mail, label: "Direct Email", value: "growth@voopify.com", href: "mailto:growth@voopify.com" },
  { icon: Phone, label: "Direct Line / WhatsApp", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Commercial Hubs", value: "Mumbai · Delhi NCR · Jaunpur, Uttar Pradesh", href: "#" },
  { icon: Clock, label: "SLA Response", value: "Guaranteed response within 24 hours", href: "#" },
];

const DISCOVERY_STEPS = [
  { num: "01", title: "Current State & Bottlenecks", desc: "We review your brand, existing customer acquisition channels, and ad spend." },
  { num: "02", title: "90-Day Action Roadmap", desc: "A tailored proposal mapping your goals to the right retainer package." },
  { num: "03", title: "15-Day Live Launch", desc: "Your dedicated pod sets up tracking, produces assets, and launches campaigns." },
];

const INDUSTRY_OPTIONS = [
  "B2B Manufacturing & Exports",
  "D2C Consumer Brand / E-Commerce",
  "Healthcare / Clinics / Wellness",
  "Restaurants / Hospitality / Food",
  "Education / Academies",
  "Real Estate / Infrastructure",
  "Legacy Retailer / Trader",
  "Professional Services Firm",
  "Other Industry",
];

const TIER_OPTIONS = [
  "Starter Retainer (₹18,000 – ₹25,000/mo)",
  "Growth Retainer (₹40,000 – ₹60,000/mo) - Most Popular",
  "Scale Retainer (₹80,000 – ₹1,50,000/mo)",
  "Enterprise SME Custom (₹2,00,000+/mo)",
  "One-Time Project (Brand / Web / Video)",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: INDUSTRY_OPTIONS[0],
    tier: TIER_OPTIONS[1],
    currentState: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#070d18] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details & expectations */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal variant="up">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Outsourced Growth Partner
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 leading-tight">
                Tell Us About Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                  Business Vision.
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you need qualified B2B enquiries, high-converting video reels, an outsourced marketing pod, or multi-platform ROAS scale — our strategists are ready to collaborate.
              </p>
            </Reveal>

            {/* Contact details */}
            <Reveal variant="up" delay={150}>
              <div className="space-y-4">
                {CONTACT_INFO.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#091122] border border-white/[0.08] flex items-center gap-4 group hover:border-cyan-400/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                          {item.label}
                        </div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Discovery Steps */}
            <Reveal variant="up" delay={250}>
              <div className="p-6 rounded-3xl bg-[#091122] border border-white/[0.08] space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  What Happens Next:
                </div>
                {DISCOVERY_STEPS.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 shrink-0">
                      {s.num}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white">
                        {s.title}
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <Reveal variant="scale" delay={200}>
              <div className="rounded-3xl p-8 sm:p-10 bg-[#091122] border border-white/10 shadow-2xl relative">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white">
                      Growth Audit Request Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-cyan-400">{formData.name}</strong>. A dedicated VOOPIFY growth strategist will review your business footprint and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Book Strategy Call
                      </span>
                      <span className="text-xs text-cyan-400 font-mono">
                        Confidential &bull; No Obligation
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Singhal"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rajesh@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Company / Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Apex Precision Castings"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Target Industry *
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#070d18] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          {INDUSTRY_OPTIONS.map((opt, i) => (
                            <option key={i} value={opt} className="bg-[#070d18]">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Preferred Retainer Tier *
                        </label>
                        <select
                          value={formData.tier}
                          onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#070d18] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          {TIER_OPTIONS.map((opt, i) => (
                            <option key={i} value={opt} className="bg-[#070d18]">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Biggest Marketing Bottleneck / Current State
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Inconsistent freelancers, ad costs too high, need a B2B export website and weekly reels..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-black text-base text-slate-950 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 hover:opacity-95 shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 group"
                    >
                      <Sparkles className="w-5 h-5 text-slate-900" />
                      <span>Request Free 20-Min Growth Audit</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>SOP-driven 48h SLA &bull; No spam &bull; Strict confidentiality</span>
                    </div>
                  </form>
                )}

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
