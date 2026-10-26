import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  CheckCircle,
  Instagram,
  BarChart2,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Reveal from "../Reveal";

const HERO_BACKGROUNDS = [
  {
    url: "/hero_bg_1.jpg",
    alt: "Voopify Creative Agency",
    caption: "Creative Agency & Strategic Growth",
  },
  {
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80",
    alt: "Digital Marketing Agency Team",
    caption: "Strategic Marketing & Content",
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
    alt: "Performance Marketing Analytics",
    caption: "Data-Driven ROI & Growth",
  },
  {
    url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80",
    alt: "Creative Agency Strategy Session",
    caption: "Engaging Social Media Presence",
  },
  {
    url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1920&q=80",
    alt: "Social Media Campaign Planning",
    caption: "Automated Publishing & Reach",
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    alt: "Creative Tech Collaboration",
    caption: "Scale Your Digital Brand",
  },
];

const TARGET_SECTORS = [
  "Social Media Management",
  "Content Creation",
  "Performance Marketing",
  "Brand Strategy",
  "Graphic Design",
  "Reels & Video Editing",
];

const BRAND_LOGOS = [
  "NatureHarvest",
  "ZAYKA",
  "NUTRA LIFE",
  "organic kitchen",
  "UrbanBite",
  "AARYAM",
];

const SERVICE_ICONS = [
  { label: "Content Strategy", icon: Calendar, color: "#7B2FF7" },
  { label: "Creative Designs", icon: BarChart2, color: "#FF6B35" },
  { label: "Reels & Videos", icon: Play, color: "#EC4899" },
  { label: "Auto Posting", icon: Instagram, color: "#06B6D4" },
  { label: "Growth Reports", icon: TrendingUp, color: "#10B981" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sectorIndex, setSectorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef(null);

  // Auto change image every 3 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeSlide]);

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveSlide((prev) => (prev === 0 ? HERO_BACKGROUNDS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveSlide((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
  };

  // Sector ticker every 2.4s
  useEffect(() => {
    const secId = setInterval(() => {
      setSectorIndex((prev) => (prev + 1) % TARGET_SECTORS.length);
    }, 2400);
    return () => clearInterval(secId);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

        {/* ── Background Image Slider (3s auto-transition) ── */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {HERO_BACKGROUNDS.map((bg, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                idx === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <img
                src={bg.url}
                alt={bg.alt}
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://picsum.photos/seed/digitalmarketing${idx + 1}/1920/1080`;
                }}
                className="w-full h-full object-cover object-center"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}

          {/* Light modern overlay: Keeps background image CLEARLY VISIBLE while ensuring text is readable */}
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />

          {/* Subtle colorful brand glow accents */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #7B2FF7 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
            style={{ background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)" }}
          />
        </div>

        {/* ── Left & Right Navigation Arrows ── */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-gray-800 hover:text-purple-600 shadow-2xl border border-gray-200/90 hover:border-purple-400 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-md cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-gray-800 hover:text-purple-600 shadow-2xl border border-gray-200/90 hover:border-purple-400 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-md cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* ── Bottom Slide Dots Indicators ── */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-lg">
          {HERO_BACKGROUNDS.map((bg, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (timerRef.current) clearInterval(timerRef.current);
                setActiveSlide(idx);
              }}
              title={bg.caption}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeSlide
                  ? "w-8 bg-gradient-to-r from-[#7B2FF7] to-[#FF6B35]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
          <span className="text-[11px] font-bold text-gray-700 ml-2 select-none">
            {activeSlide + 1} / {HERO_BACKGROUNDS.length}
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── Left Content ── */}
            <div className="flex flex-col items-start">

              {/* Top Badge */}
              <Reveal variant="fade" delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: "rgba(123,47,247,0.08)",
                    border: "1px solid rgba(123,47,247,0.2)",
                    color: "#7B2FF7",
                  }}>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: "#7B2FF7" }} />
                    <span className="relative inline-flex rounded-full h-2 w-2"
                      style={{ background: "#7B2FF7" }} />
                  </span>
                  Creative. Strategic. Result-Driven
                </div>
              </Reveal>

              {/* Main Headline */}
              <Reveal variant="up" delay={150}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-gray-900 mb-2">
                  Social Media
                  <br />
                  <span className="text-gray-900">Management</span>
                  <br />
                  <span style={{
                    background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    Made Simple.
                  </span>
                </h1>
              </Reveal>

              {/* Subtitle */}
              <Reveal variant="up" delay={250}>
                <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-lg leading-relaxed">
                  We plan, create, schedule and manage high-performing content so your brand stays active, relevant and growing.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal variant="up" delay={350}>
                <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-base text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
                    style={{
                      background: "linear-gradient(135deg, #7B2FF7, #FF6B35)",
                      boxShadow: "0 8px 30px rgba(123,47,247,0.4)",
                    }}
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#services"
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold text-base text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:text-purple-700 transition-all duration-200 group bg-white"
                  >
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                      <Play className="w-4 h-4 fill-current text-gray-600 group-hover:text-purple-600 ml-0.5" />
                    </div>
                    <span>Watch Our Video</span>
                  </a>
                </div>
              </Reveal>

              {/* Service Tags Row */}
              <Reveal variant="fade" delay={450}>
                <div className="mt-10 flex flex-wrap gap-4">
                  {SERVICE_ICONS.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <div key={svc.label} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:-translate-y-1 shadow-sm"
                          style={{ background: `${svc.color}15`, border: `1.5px solid ${svc.color}30` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: svc.color }} />
                        </div>
                        <span className="text-[10px] text-gray-500 font-medium text-center leading-tight">
                          {svc.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            {/* ── Right: Hero Visual ── */}
            <div className="relative hidden lg:flex items-center justify-center">

              {/* Main phone/person mockup area */}
              <div className="relative w-full max-w-md">

                {/* Gradient blob behind */}
                <div className="absolute inset-0 rounded-[40px] scale-95 opacity-30"
                  style={{
                    background: "linear-gradient(135deg, #F0E9FF 0%, #FFE8DE 50%, #E9F3FF 100%)",
                    filter: "blur(40px)",
                  }} />

                {/* Main hero image placeholder with social media mockup */}
                <div className="relative z-10 flex flex-col items-center">

                  {/* Top floating engagement badge */}
                  <div className="absolute -top-4 -left-6 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white shadow-xl border border-gray-100 z-20 animate-float">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#7B2FF7,#FF6B35)" }}>
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-gray-900">+250%</div>
                      <div className="text-[9px] text-gray-400 font-medium">Engagement</div>
                    </div>
                  </div>

                  {/* Central illustrative card */}
                  <div className="w-80 bg-gradient-to-br from-purple-50 via-white to-orange-50 rounded-3xl p-6 shadow-2xl border border-purple-100 relative overflow-hidden">

                    {/* Social icons floating */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center shadow-lg shadow-pink-200">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center shadow-lg">
                        <span className="text-white font-black text-sm">T</span>
                      </div>
                    </div>

                    {/* Brand post preview */}
                    <div className="mt-8 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full" style={{ background: "linear-gradient(135deg,#7B2FF7,#FF6B35)" }} />
                        <div>
                          <div className="text-xs font-bold text-gray-800">Your Brand</div>
                          <div className="text-[9px] text-gray-400">Just Posted ✓</div>
                        </div>
                      </div>
                      <div className="h-20 rounded-xl bg-gradient-to-br from-purple-100 to-orange-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-purple-600">📸 New Creative</span>
                      </div>
                    </div>

                    {/* Weekly content plan */}
                    <div className="mt-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-gray-700">Weekly Content</span>
                        <span className="text-[9px] text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded-full">Auto</span>
                      </div>
                      {["Product Post", "Real Video", "Carousel Post", "Offer Post", "Community Post"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-1">
                          <span className="text-[10px] text-gray-500">{item}</span>
                          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom right floating stat */}
                  <div className="absolute -bottom-4 -right-6 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white shadow-xl border border-gray-100 z-20">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-black text-gray-900">4.9/5</div>
                      <div className="text-[9px] text-gray-400 font-medium">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Trusted By Brands ── */}
          <Reveal variant="fade" delay={500}>
            <div className="mt-16 pt-10 border-t border-gray-100">
              <p className="text-center text-sm text-gray-400 font-semibold mb-7 uppercase tracking-widest">
                Trusted by Growing Brands
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                {BRAND_LOGOS.map((brand) => (
                  <div
                    key={brand}
                    className="px-5 py-2.5 rounded-xl text-sm font-bold text-gray-400 bg-gray-50 border border-gray-100 hover:border-purple-200 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 cursor-pointer"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}