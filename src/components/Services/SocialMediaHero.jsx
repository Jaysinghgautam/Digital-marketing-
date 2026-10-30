
import React from "react";

const services = [
  "Creative",
  "Strategic",
  "High-Quality",
  "Result-Oriented",
];

const posts = [
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=300",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
];

const Arrow = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const SocialIcon = ({ children, className = "" }) => (
  <div
    className={`absolute z-20 flex h-12 w-12 items-center justify-center
    rounded-xl bg-gradient-to-br from-white/20 to-white/5
    text-2xl font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.3)]
    backdrop-blur-xl border border-white/20 ${className}`}
  >
    {children}
  </div>
);

export default function SocialMediaHero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[#191d33] text-white">

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/20 blur-[130px]" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-pink-600/20 blur-[130px]" />
      <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[650px] max-w-[1400px] items-center gap-10 px-6 py-16 md:px-12 lg:grid-cols-2 lg:py-10">

        {/* LEFT CONTENT */}
        <div className="relative z-30 max-w-[620px]">

          <span className="mb-6 inline-flex rounded-full border border-blue-400/30 px-3 py-1 text-[10px] font-bold tracking-[2px] text-gray-300">
            OUR SERVICES
          </span>

          <h1 className="mb-5 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px]">
            Complete Social Media
            Solutions for{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Your Brand
            </span>
          </h1>

          <p className="mb-7 max-w-[510px] text-sm leading-7 text-gray-300 sm:text-base">
            From strategy to creatives, Reels to reporting — we handle
            everything so you can focus on your business.
          </p>

          {/* Features */}
          <div className="mb-9 flex flex-wrap gap-x-5 gap-y-3">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 text-xs text-gray-200"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold">
                  ✓
                </span>
                {service}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">

            <a
              href="#contact"
              className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3 text-sm font-bold shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(236,72,153,0.5)]"
            >
              Book a Free Call
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                <Arrow />
              </span>
            </a>

            <a
              href="#plans"
              className="group flex items-center gap-4 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10"
            >
              Get a Custom Plan
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 transition-transform group-hover:translate-x-1">
                <Arrow />
              </span>
            </a>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto flex h-[510px] w-full max-w-[580px] items-center justify-center">

          {/* Background glow */}
          <div className="absolute h-72 w-72 rounded-full bg-purple-600/30 blur-[100px]" />
          <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-pink-500/20 blur-[100px]" />

          {/* Social Icons */}
          <SocialIcon className="left-2 top-24 bg-gradient-to-br from-pink-500 to-purple-600">
            ◎
          </SocialIcon>

          <SocialIcon className="left-0 top-[225px] bg-black">
            ♪
          </SocialIcon>

          <SocialIcon className="right-0 top-24 bg-gradient-to-br from-pink-500 to-red-500">
            ▶
          </SocialIcon>

          <SocialIcon className="right-2 top-[220px] bg-blue-600">
            f
          </SocialIcon>

          {/* Floating Labels */}
          <div className="absolute left-0 top-2 z-30 rotate-[-8deg] rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold shadow-xl backdrop-blur-xl">
            Creatives
            <br />
            <span className="text-gray-300">That Convert</span>
          </div>

          <div className="absolute right-0 top-5 z-30 rotate-[8deg] rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold shadow-xl backdrop-blur-xl">
            Reels
            <br />
            <span className="text-gray-300">That Engage</span>
          </div>

          {/* Smartphone */}
          <div className="relative z-10 h-[480px] w-[245px] rotate-[9deg] rounded-[38px] border-[5px] border-[#777] bg-black p-[7px] shadow-[0_0_50px_rgba(168,85,247,0.35)]">

            {/* Phone Screen */}
            <div className="relative h-full overflow-hidden rounded-[30px] bg-white text-black">

              {/* Status bar */}
              <div className="flex h-9 items-center justify-between px-4 text-[10px] font-bold">
                <span>9:41</span>
                <span className="h-5 w-16 rounded-full bg-black" />
                <span>●  WiFi</span>
              </div>

              {/* Profile */}
              <div className="px-3 pb-3">

                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-extrabold">voopify</span>
                  <span className="text-lg">☰</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-lg font-bold text-white">
                    V
                  </div>

                  <div className="flex flex-1 justify-around text-center">
                    <div>
                      <p className="text-sm font-bold">325</p>
                      <p className="text-[8px] text-gray-500">Posts</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold">12.6K</p>
                      <p className="text-[8px] text-gray-500">Followers</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold">230</p>
                      <p className="text-[8px] text-gray-500">Following</p>
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-[10px] font-bold">Voopify</p>
                <p className="text-[9px] text-gray-500">
                  Your Growth. Our Business.
                </p>

                <div className="mt-3 flex gap-2">
                  <button className="flex-1 rounded-md bg-blue-500 py-1.5 text-[9px] font-bold text-white">
                    Follow
                  </button>
                  <button className="flex-1 rounded-md bg-gray-200 py-1.5 text-[9px] font-bold">
                    Message
                  </button>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="grid grid-cols-3 gap-[2px]">
                {posts.map((post, index) => (
                  <div key={index} className="aspect-square overflow-hidden">
                    <img
                      src={post}
                      alt={`Social media post ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 flex h-9 w-full items-center justify-around border-t border-gray-200 bg-white text-sm">
                <span>⌂</span>
                <span>⌕</span>
                <span>＋</span>
                <span>♡</span>
                <span>◉</span>
              </div>
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -left-5 top-[245px] z-30 flex rotate-[-5deg] items-center gap-3 rounded-2xl border border-white/30 bg-white/95 px-4 py-3 text-black shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <span className="text-3xl text-purple-600">▥</span>
            <div>
              <p className="text-xl font-extrabold">+300%</p>
              <p className="text-[10px] font-semibold">Reach Growth</p>
            </div>
          </div>

          <div className="absolute -right-2 bottom-[100px] z-30 flex rotate-[-4deg] items-center gap-3 rounded-2xl border border-white/30 bg-white px-4 py-3 text-black shadow-xl">
            <span className="text-3xl text-purple-600">▥</span>
            <div>
              <p className="text-xl font-extrabold">10K+</p>
              <p className="text-[10px] font-semibold">Posts Created</p>
            </div>
          </div>

          {/* Bottom floating label */}
          <div className="absolute bottom-2 right-0 z-30 rotate-[8deg] rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold backdrop-blur-xl">
            Strategy
            <br />
            <span className="text-gray-300">That Builds Brands</span>
          </div>

        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400" />

    </section>
  );
}
