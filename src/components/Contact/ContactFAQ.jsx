import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const FAQS = [
  {
    q: "How does the VOOPIFY monthly retainer model work?",
    a: "We operate as your dedicated outsourced marketing department. You choose a tiered monthly retainer (Starter, Growth, Scale, or Enterprise SME) based on your growth targets. Your retainer covers strategy, brand design, web maintenance, reels/video content, and performance ad management under a single accountable pod.",
  },
  {
    q: "What is your onboarding timeline and SLA?",
    a: "Every engagement follows our standardized 15-day onboarding SOP: Days 0–2 (Kickoff & Brand Questionnaire), Days 3–7 (Competitor & Asset Audit), Days 8–14 (First Month Calendar & Ad Angles Presented), Day 15 (Live Deliverables & Ad Sprints). Content revisions have a strict 48-hour SLA window.",
  },
  {
    q: "Why is there an initial 3-month commitment?",
    a: "Compounding marketing (SEO rank development, algorithmic ad learning, brand authority) takes 60–90 days to generate statistically meaningful ROI. After the initial 3 months, retainers roll over monthly with a transparent 30-day notice period.",
  },
  {
    q: "How does AI fit into VOOPIFY's delivery?",
    a: "We treat AI as a production accelerant (generating multivariate ad copy, visual hooks, and storyboards 40–60% faster) supervised 100% by senior human art directors and strategists. This allows us to hold SME retainer pricing steady while delivering 3x faster turnaround.",
  },
  {
    q: "Can we start with a one-time project first?",
    a: "Yes. Many clients start with a Brand Identity project, high-speed website build, or commercial photography sprint (typically ₹25,000–₹1,50,000) and naturally convert into an ongoing growth retainer within 60–90 days once they experience our quality.",
  },
  {
    q: "How do you report results to the founder?",
    a: "You receive a 24/7 live executive Looker Studio dashboard tracking qualified enquiries, cost per lead (CPL), search visibility, and ROAS. We conduct bi-weekly or monthly strategy calls to review commercial pipeline impact, not vanity metrics.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#050914] py-20 lg:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Header */}
        <Reveal variant="up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
              Everything You Need to Know
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Clear answers about our retainer structure, SLAs, delivery pods, and commercial guarantees.
            </p>
          </div>
        </Reveal>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} variant="up" delay={idx * 60}>
                <div
                  className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                    isOpen
                      ? "bg-[#091122] border-cyan-400/40 shadow-xl shadow-cyan-500/5"
                      : "bg-[#091122]/60 border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className={`text-base font-bold transition-colors ${isOpen ? "text-cyan-300" : "text-white"}`}>
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                        isOpen
                          ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-400 rotate-180"
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.05] animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Still have questions */}
        <Reveal variant="fade" delay={300}>
          <div className="mt-12 text-center text-xs text-slate-400">
            Have a custom requirement or multi-location expansion?{" "}
            <Link to="/contact" className="text-cyan-400 font-bold hover:underline">
              Speak directly with our strategy team &rarr;
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
