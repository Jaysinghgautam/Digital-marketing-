 import {
  Star,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  Rocket,
  BarChart3,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "../Reveal";
import { useState } from "react";

const TESTIMONIALS_DATA = [
  {
    quote:
      "Voopify has transformed our social media completely. The designs, Reels and consistent posting have brought us amazing engagement and new customers.",
    author: "Riya Sharma",
    role: "Founder",
    company: "The Organic Kitchen",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote:
      "Professional, creative and result-oriented team. They manage everything so smoothly. Our brand visibility has grown massively.",
    author: "Amit Verma",
    role: "Founder",
    company: "UrbanBite",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote:
      "Our Instagram engagement tripled within 60 days. The content quality and consistency is unmatched. Highly recommend VOOPIFY to every brand.",
    author: "Priya Mehta",
    role: "Co-Founder",
    company: "Ziva Botanicals",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    quote:
      "From zero social media presence to a thriving community — VOOPIFY made it happen in just 3 months. Our sales from Instagram have doubled!",
    author: "Rahul Goyal",
    role: "Owner",
    company: "NatureHarvest",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=51",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS_DATA.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Show 2 at a time
  const visible = [TESTIMONIALS_DATA[current], TESTIMONIALS_DATA[(current + 1) % total]];

  return (
    <section className="">
      <div className="max-w-full overflow-hidden shadow-2xl">

        {/* Top bar: Testimonials */}
        <div className="relative" style={{ background: "#160a2e" }}>
          <div className="flex flex-col lg:flex-row items-center gap-6 px-6 sm:px-10 py-8">

            {/* Left: arrow + heading */}
            <div className="flex items-center gap-4 lg:w-1/4 shrink-0">
              <button
                onClick={prev}
                className="hidden lg:flex w-9 h-9 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/15 items-center justify-center transition-colors shrink-0"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div>
                <Reveal variant="fade">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2"
                    style={{
                      color: "#fff",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}>
                    Client Testimonials
                  </span>
                </Reveal>
                <Reveal variant="up" delay={100}>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                    What Our Clients{" "}
                    <span style={{ color: "#FF6B35" }}>Say</span>
                  </h2>
                </Reveal>
              </div>
            </div>

            {/* Middle: cards */}
            <div className="flex-1 grid sm:grid-cols-2 gap-4 w-full">
              {visible.map((t, idx) => (
                <Reveal key={`${current}-${idx}`} variant="up" delay={idx * 100}>
                  <div className="p-5 rounded-2xl flex flex-col h-full"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={t.avatar}
                          alt={t.author}
                          className="w-10 h-10 rounded-full object-cover shrink-0"
                        />
                        <div>
                          <div className="font-bold text-white text-sm">{t.author}</div>
                          <div className="text-[11px] text-purple-300">
                            {t.role}, {t.company}
                          </div>
                        </div>
                      </div>
                      <div className="flex text-amber-400 gap-0.5 shrink-0">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={next}
              className="hidden lg:flex w-9 h-9 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/15 items-center justify-center transition-colors shrink-0"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Mobile arrows */}
            <div className="flex lg:hidden items-center gap-3">
              <button onClick={prev} className="w-9 h-9 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center" aria-label="Previous">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} className="w-9 h-9 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center" aria-label="Next">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar: CTA */}
        <div className="relative overflow-hidden"
          style={{ background: "linear-gradient(110deg, #FF6B35 0%, #FF4D8D 45%, #7B2FF7 100%)" }}>

          {/* decorative rocket + chart (right) */}
          <Rocket className="hidden md:block absolute -right-2 top-3 w-16 h-16 text-white/20 rotate-45" />
          <BarChart3 className="hidden md:block absolute right-10 bottom-3 w-12 h-12 text-white/20" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 px-6 sm:px-10 py-8">

            {/* Left: megaphone */}
            <div className="hidden sm:flex shrink-0">
              <Megaphone className="w-16 h-16 text-white -rotate-12 drop-shadow-lg" strokeWidth={1.5} />
            </div>

            {/* Middle: text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2"
                style={{ color: "#fff", background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}>
                Ready to Grow?
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug">
                Let&apos;s Make Your Brand Impossible to Ignore.
              </h3>
            </div>

            {/* Right: buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button className="inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full font-bold text-sm text-white bg-black/80 hover:bg-black transition-colors">
                Book a Free Call
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-gray-900 bg-white hover:bg-gray-100 transition-colors">
                <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}