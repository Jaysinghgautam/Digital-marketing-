import { useState } from "react";
import { CheckCircle2, ArrowRight, TrendingUp, Sparkles, Globe, Factory, ShoppingBag, Stethoscope, Briefcase } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const CASES = [
  {
    persona: "The Scaling Manufacturer & Exporter",
    title: "Apex Precision Castings",
    sector: "B2B Manufacturing & Global Exports (₹28 Cr Turnover)",
    stat: "+320%",
    label: "Global B2B Enquiries in 90 Days",
    challenge: "Weak online presence, zero LinkedIn authority, relied entirely on physical trade exhibitions and word-of-mouth.",
    solution: "Full Corporate Identity rebrand, high-speed engineering catalog website, founder LinkedIn thought leadership, and targeted European export lead generation.",
    results: [
      "Secured 14 qualified international quotation requests in Q1",
      "Ranked #1 for 18 commercial export keyword clusters",
      "Tripled LinkedIn executive network with global procurement heads",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
    tags: ["Brand Identity", "Website Dev", "LinkedIn Ghostwriting", "Export SEO"],
    badgeColor: "from-purple-500 to-indigo-600",
  },
  {
    persona: "The D2C Consumer Brand Founder",
    title: "Ziva Botanicals",
    sector: "E-Commerce Consumer Brand (₹3.5 Cr GMV)",
    stat: "-38%",
    label: "Blended Customer Acquisition Cost (CAC)",
    challenge: "Unprofitable Meta ad spend, creative burnout, slow freelancer turnaround, high churn on product launches.",
    solution: "Rebuilt the brand visual system, deployed weekly short-form video reel sprints, and implemented full-funnel Meta and Google retargeting architectures.",
    results: [
      "Scaled monthly GMV from ₹28 Lakh to ₹1.15 Crore",
      "Delivered 24+ multivariate creative video variants per month",
      "ROAS improved from 1.8x to a stable 4.4x on direct e-comm spend",
    ],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85",
    tags: ["Packaging Design", "Viral Video Reels", "Meta Ads", "Funnel CRO"],
    badgeColor: "from-pink-500 to-rose-600",
  },
  {
    persona: "The Local Multi-Location Clinic",
    title: "Sethi Specialty Healthcare",
    sector: "Healthcare Clinics (3 Locations)",
    stat: "2.4x",
    label: "Monthly Patient Inpatient Bookings",
    challenge: "Low local search visibility, zero online patient reviews, losing walk-ins to competing hospital chains.",
    solution: "Complete Google Business Profile domination, localized SEO sprints, doctor authority video explainers, and automated review collection.",
    results: [
      "Top 3 rank in Google Local 3-Pack across all 3 clinic pin-codes",
      "Over 450+ five-star verified patient reviews generated in 6 months",
      "Consultation appointment pipeline doubled with ₹0 spent on ad bloat",
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    tags: ["Local SEO", "Google Business Profile", "Video Content", "Reputation"],
    badgeColor: "from-cyan-500 to-blue-600",
  },
  {
    persona: "The Legacy Retailer Modernizing",
    title: "Godhwani Industrial Supplies",
    sector: "Family Trading Business (40-Year Legacy)",
    stat: "+180%",
    label: "Direct B2B Contractor Accounts",
    challenge: "Lacked digital catalogs, generational shift in customer procurement habits toward WhatsApp and web discovery.",
    solution: "Modernized corporate branding without losing heritage trust, digital product catalog website, and WhatsApp Business API funnel integration.",
    results: [
      "Transitioned 60% of recurring orders to streamlined digital catalog",
      "Expanded regional reach into 4 new tier-2 industrial clusters",
      "Smooth next-generation leadership positioning on LinkedIn",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    tags: ["Corporate Rebrand", "Digital Catalog", "WhatsApp Funnel", "Content"],
    badgeColor: "from-amber-500 to-orange-600",
  },
];

export default function CaseStudiesList() {
  return (
    <section className="py-20 md:py-28 bg-[#070d18] text-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Reveal variant="fade">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
              Documented Transformations
            </span>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Four Personas.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                Compounding Commercial Results.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-16">
          {CASES.map((item, idx) => (
            <Reveal key={item.title} variant="up" delay={idx * 100}>
              <div className="rounded-3xl bg-[#091122] border border-white/[0.08] overflow-hidden p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-cyan-400/40 transition-all duration-300">
                
                {/* Left Text */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400">
                      {item.persona}
                    </span>
                    <span className="text-xs text-slate-400">
                      {item.sector}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Impact Number Highlight */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-4">
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                      {item.stat}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-200">
                      {item.label}
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong className="text-rose-400">Challenge: </strong>
                      {item.challenge}
                    </p>
                    <p>
                      <strong className="text-cyan-400">VOOPIFY Solution: </strong>
                      {item.solution}
                    </p>
                  </div>

                  {/* Results list */}
                  <div className="space-y-2 pt-2">
                    {item.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {item.tags.map((t, tIdx) => (
                      <span key={tIdx} className="text-[11px] px-2.5 py-1 rounded-lg bg-[#070d18] border border-white/10 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091122]/90 via-transparent to-transparent" />
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
