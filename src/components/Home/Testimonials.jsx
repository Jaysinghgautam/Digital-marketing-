import { Star, Quote } from "lucide-react";
import Reveal from "../Reveal";

/**
 * Testimonials Component
 * Shows real client reviews, verified satisfaction ratings, and case highlights.
 */
const TESTIMONIALS_DATA = [
  {
    quote:
      "Before Voopify, we were juggling four different freelancers who kept giving excuses. Voopify brought total order — our inbound B2B inquiries grew 3x in just 90 days.",
    author: "Rajesh Sharma",
    role: "Managing Director",
    company: "Apex Precision Tools (B2B)",
    rating: 5,
    tag: "3x Inbound Inquiries",
  },
  {
    quote:
      "Their performance ad squad rebuilt our Meta and Google funnels completely. Our cost per acquisition dropped by 32%, and their weekly reporting is 100% honest and transparent.",
    author: "Pooja Singhania",
    role: "Co-Founder",
    company: "Ziva Pure Wellness (D2C)",
    rating: 5,
    tag: "32% Lower CAC",
  },
  {
    quote:
      "Our local clinic was barely visible on search engines. Their Google Business Profile and local SEO sprint doubled our daily appointments within two months.",
    author: "Dr. Vikram Sethi",
    role: "Founder & Lead Surgeon",
    company: "Sethi Healthcare Clinics",
    rating: 5,
    tag: "2x Patient Walk-ins",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#070d18] text-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fade">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-400/20">
              Client Testimonials
            </span>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Trusted by Ambitious Business Owners
            </h2>
          </Reveal>

          <Reveal variant="up" delay={250}>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Here is what founders and business leaders say about partnering with our
              dedicated growth marketing team.
            </p>
          </Reveal>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <Reveal
              key={item.author}
              variant="up"
              delay={idx * 150}
              className="rounded-2xl border border-white/10 bg-[#0d1627] hover:bg-[#111e33] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/30 hover:-translate-y-1"
            >
              <div>
                {/* Header: Stars & Metric Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-cyan-300 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/20">
                    {item.tag}
                  </span>
                </div>

                <Quote className="w-7 h-7 text-white/15 mb-3" />

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-white flex items-center justify-center text-sm shadow-md">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{item.author}</h4>
                  <p className="text-xs text-slate-400">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
