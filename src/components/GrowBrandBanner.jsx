import React from "react";
import { Megaphone, ArrowUpRight, Rocket, MessageCircle } from "lucide-react";

export default function GrowBrandBanner() {
  return (
    <section className="relative w-full overflow-hidden  bg-gradient-to-r from-orange-500 via-fuchsia-600 to-purple-700">
      {/* subtle glow accents */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 right-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 md:flex-row md:justify-between md:py-10">
        {/* Left icon */}
        <div className="hidden shrink-0 md:block">
          <Megaphone
            className="h-20 w-20 -rotate-12 text-white drop-shadow-lg"
            strokeWidth={1.5}
            fill="white"
            fillOpacity={0.15}
          />
        </div>

        {/* Middle text */}
        <div className="flex-1 text-center md:text-left md:pl-4 md:border-l md:border-white/30">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
            Let&apos;s Grow Your Brand
            <br className="hidden sm:block" /> Together
          </h2>
          <p className="mt-2 max-w-md text-sm text-white/80 mx-auto md:mx-0">
            Get professional social media management, stunning creatives and
            high-performing Reels — all in one place with Voopify.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900 transition-colors">
            Book a Free Call
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </button>

          <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
            Chat on WhatsApp
            <MessageCircle className="h-4 w-4 text-green-500" fill="currentColor" fillOpacity={0.15} />
          </button>
        </div>

        {/* Right illustration: rocket + growth bars */}
        <div className="hidden items-end gap-1.5 lg:flex">
          <Rocket
            className="h-14 w-14 -rotate-45 text-white drop-shadow-lg mb-4"
            strokeWidth={1.5}
            fill="white"
            fillOpacity={0.15}
          />
          <div className="flex items-end gap-1.5">
            {[10, 16, 22, 30, 38].map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-t-sm bg-white/90"
                style={{ height: `${h * 2}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}