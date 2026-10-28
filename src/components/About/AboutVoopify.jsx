
import React from "react";

export default function VoopifyHero() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-5 pt-10 sm:px-8 sm:pt-12 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-5">

          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <span className="mb-4 inline-block rounded-full bg-[#ece9fb] px-3.5 py-1 text-[10px] font-semibold tracking-wide text-[#6c4cf1]">
              ABOUT VOOPIFY
            </span>

            <h1 className="mb-4 text-[36px] font-extrabold leading-[1.08] tracking-tight text-[#15131f] sm:text-[44px] xl:text-[48px]">
              More Than a
              <br />
              <span className="text-[#8a3ffc]">
                Marketing Agency
              </span>
            </h1>

            <p className="mb-6 max-w-[440px] text-sm leading-relaxed text-[#6b6b76] sm:text-[15px]">
              We are a team of creative thinkers, content creators and
              digital strategists who are passionate about helping brands
              grow through the power of social media.
            </p>

            {/* FEATURES — original icons preserved */}
            <div className="mb-7 flex flex-wrap gap-x-5 gap-y-4 xl:gap-x-7">
              <div className="flex items-center gap-2.5">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-[#8a3ffc] text-2xl text-white shadow-sm">
                  👤
                </div>
                <span className="text-xs font-bold leading-tight text-[#15131f] sm:text-sm">
                  Creative
                  <br />
                  Minds
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-[#ff7a1a] text-2xl text-white shadow-sm">
                  ⚙️
                </div>
                <span className="text-xs font-bold leading-tight text-[#15131f] sm:text-sm">
                  Strategic
                  <br />
                  Approach
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-[#2e6bff] text-2xl text-white shadow-sm">
                  🏆
                </div>
                <span className="text-xs font-bold leading-tight text-[#15131f] sm:text-sm">
                  Result
                  <br />
                  Driven
                </span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mb-5 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#8a3ffc] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#7130e5] sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Book a Free Call
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white/25 text-xs">
                  →
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#e4e1f0] bg-white px-5 py-3 text-xs font-semibold text-[#15131f] transition-colors hover:border-[#8a3ffc] sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Our Services
                <span>→</span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative mx-auto w-full min-w-0 max-w-[650px] lg:ml-auto">
            <div className="relative px-2 pb-3 pt-8 sm:px-4 sm:pt-10">

              {/* Decorative text */}
              <div className="absolute left-2 top-0 z-10 text-xs font-bold leading-tight text-[#1a1a1a] sm:text-sm">
                Ideas
                <br />
                Creatives
                <br />
                Reels
                <br />
                Growth
              </div>

              <div className="absolute right-2 top-0 z-10 text-right text-xs font-bold leading-tight text-[#1a1a1a] sm:text-sm">
                Hour Growth
                <br />
                Our Business
              </div>

              <img
                className="block h-[300px] w-full rounded-[20px] object-cover object-center sm:h-[400px] lg:h-[430px] xl:h-[460px]"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=85"
                alt="Voopify creative team"
              />

              {/* Social Icons — original icons preserved */}
              <div className="absolute left-0 top-[24%] flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-2xl font-extrabold text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] sm:-left-1 sm:h-16 sm:w-16">
                ♪
              </div>

              <div className="absolute left-[43%] top-[5%] flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d62976] text-2xl shadow-[0_8px_18px_rgba(0,0,0,0.18)] sm:h-16 sm:w-16">
                📷
              </div>

              <div className="absolute right-[15%] top-[46%] flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1877f2] text-2xl font-extrabold text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] sm:h-16 sm:w-16 sm:text-3xl">
                f
              </div>

              <div className="absolute right-0 top-[46%] flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff0000] text-xl font-extrabold text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] sm:h-16 sm:w-16 sm:text-2xl">
                ▶
              </div>

              {/* Engagement card */}
              <div className="absolute left-0 top-[59%] flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[11px] font-bold text-[#15131f] shadow-[0_6px_20px_rgba(0,0,0,0.12)] sm:-left-2 sm:px-3.5 sm:text-[13px]">
                <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-[#ff2e87] text-[13px]">
                  📈
                </div>
                +250% Engagement
              </div>

              {/* Followers card */}
              <div className="absolute bottom-[10%] right-0 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[11px] font-bold text-[#15131f] shadow-[0_6px_20px_rgba(0,0,0,0.12)] sm:-right-1 sm:px-3.5 sm:text-[13px]">
                <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-[#ff2e87] text-[13px]">
                  📈
                </div>
                <div>
                  <p>10K</p>
                  <p className="text-[9px] font-normal">Followers</p>
                </div>
                <span className="text-[#2e6bff]">→</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR — original SVG icons preserved */}
        <div className="mt-8 mb-6 grid grid-cols-2 gap-y-6 rounded-2xl border border-[#ece9f3] bg-white px-3 py-6 shadow-[0_8px_30px_rgba(30,20,70,0.06)] sm:px-5 lg:mt-5 lg:grid-cols-4 lg:gap-y-0 lg:px-4">
          
          <div className="flex min-w-0 items-center gap-2.5 border-[#ece9f3] px-2 sm:gap-3 sm:px-4 lg:border-r">
            <div className="h-9 w-9 shrink-0 sm:h-10 sm:w-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="#8a3ffc" strokeWidth="2">
                <path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m5-9.13a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-lg font-extrabold text-[#15131f] sm:text-xl">100+</div>
              <div className="text-[10px] text-[#8a8894] sm:text-xs">Happy Clients</div>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-2.5 border-[#ece9f3] px-2 sm:gap-3 sm:px-4 lg:border-r">
            <div className="h-9 w-9 shrink-0 sm:h-10 sm:w-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ff7a1a" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-lg font-extrabold text-[#15131f] sm:text-xl">5000+</div>
              <div className="text-[10px] text-[#8a8894] sm:text-xs">Creatives Designed</div>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-2.5 border-[#ece9f3] px-2 sm:gap-3 sm:px-4 lg:border-r">
            <div className="h-9 w-9 shrink-0 sm:h-10 sm:w-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ff2e87" strokeWidth="2">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M14 7h7v7" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-lg font-extrabold text-[#15131f] sm:text-xl">3X</div>
              <div className="text-[10px] text-[#8a8894] sm:text-xs">Average Growth</div>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-2.5 px-2 sm:gap-3 sm:px-4">
            <div className="h-9 w-9 shrink-0 sm:h-10 sm:w-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2e6bff" strokeWidth="2">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-lg font-extrabold text-[#15131f] sm:text-xl">50M+</div>
              <div className="text-[10px] text-[#8a8894] sm:text-xs">Total Reach Generated</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
