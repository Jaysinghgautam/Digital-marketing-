import { Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
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
    avatar: "RS",
    avatarColor: "from-purple-500 to-pink-500",
  },
  {
    quote:
      "Professional, creative and result-oriented team. They manage everything so smoothly. Our brand visibility has grown massively.",
    author: "Amit Verma",
    role: "Founder",
    company: "UrbanBite",
    rating: 5,
    avatar: "AV",
    avatarColor: "from-orange-500 to-amber-400",
  },
  {
    quote:
      "Our Instagram engagement tripled within 60 days. The content quality and consistency is unmatched. Highly recommend VOOPIFY to every brand.",
    author: "Priya Mehta",
    role: "Co-Founder",
    company: "Ziva Botanicals",
    rating: 5,
    avatar: "PM",
    avatarColor: "from-emerald-500 to-teal-400",
  },
  {
    quote:
      "From zero social media presence to a thriving community — VOOPIFY made it happen in just 3 months. Our sales from Instagram have doubled!",
    author: "Rahul Goyal",
    role: "Owner",
    company: "NatureHarvest",
    rating: 5,
    avatar: "RG",
    avatarColor: "from-cyan-500 to-blue-500",
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
    <section className="py-20 md:py-28 text-white relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a0533 0%, #2D1065 50%, #0f0a2e 100%)" }}>

      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #7B2FF7, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #FF6B35, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* Left: Header */}
          <div className="lg:col-span-1">
            <Reveal variant="fade">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
                style={{
                  color: "#FF6B35",
                  background: "rgba(255,107,53,0.15)",
                  border: "1px solid rgba(255,107,53,0.3)",
                }}>
                <Sparkles className="w-3.5 h-3.5" />
                Client Testimonials
              </span>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                What Our{" "}
                <span style={{
                  background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Clients
                </span>{" "}
                Say
              </h2>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <p className="mt-4 text-purple-200 text-sm sm:text-base leading-relaxed">
                Real results from real brands who trusted us with their social media growth.
              </p>
            </Reveal>

            {/* Navigation arrows */}
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:-translate-x-0.5"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:translate-x-0.5"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-purple-300 text-sm font-medium ml-2">
                {current + 1} / {total}
              </span>
            </div>
          </div>

          {/* Right: Testimonial Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {visible.map((t, idx) => (
              <Reveal key={`${current}-${idx}`} variant="up" delay={idx * 100}>
                <div className="p-7 rounded-3xl flex flex-col justify-between h-full"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(16px)",
                  }}>

                  {/* Stars */}
                  <div className="flex text-amber-400 gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-white/90 leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center font-bold text-white text-sm shadow-lg shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-extrabold text-white text-sm">{t.author}</div>
                      <div className="text-xs text-purple-300">
                        {t.role},{" "}
                        <span className="text-purple-200 font-semibold">{t.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
