 import React from "react";

const weeklyContent = [
  { day: "Mon", label: "Product Post" },
  { day: "Tue", label: "Reel Video" },
  { day: "Wed", label: "Carousel Post" },
  { day: "Thu", label: "Offer Post" },
  { day: "Fri", label: "Community Post" },
  { day: "Sat", label: "Brand Story" },
  { day: "Sun", label: "Testimonial" },
];

const quickLinks = [
  { label: "Content Strategy", icon: "📋" },
  { label: "Creative Designs", icon: "🎨" },
  { label: "Reels & Videos", icon: "🎬" },
  { label: "Auto Posting", icon: "⏰" },
  { label: "Growth Reports", icon: "📊" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-indigo-50 px-6 py-16 md:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left copy */}
        <div>
          <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold tracking-wide text-indigo-600 shadow-sm ring-1 ring-indigo-100">
            CREATIVE &middot; STRATEGIC &middot; RESULT-DRIVEN
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Social Media
            <br />
            Management
            <br />
            <span className="text-indigo-600">Made Simple.</span>
          </h1>

          <p className="mt-5 max-w-md text-slate-500">
            We plan, create, schedule and manage high-performing content so
            your brand stays active, relevant and growing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700">
              Get Started Now
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                &rarr;
              </span>
            </button>
            <button className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-slate-800">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                &#9658;
              </span>
              Watch Our Video
            </button>
          </div>

          {/* Quick link pills: icon on top, text below */}
          <div className="mt-10 flex flex-wrap gap-3">
            {quickLinks.map((item) => (
              <div
                key={item.label}
                className="flex w-24 flex-col items-center gap-2 rounded-xl bg-white px-3 py-4 text-center text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-100"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-lg">
                  {item.icon}
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-indigo-100 p-2 shadow-xl">
            <div className="aspect-[3/4] overflow-hidden rounded-[2rem] bg-slate-200">
              <img
                src="/girl.png"
                alt="Creator managing social media on phone"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Floating icons */}
          <div className="absolute -left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
            📸
          </div>
          <div className="absolute -right-4 top-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
            📘
          </div>
          <div className="absolute -left-4 bottom-24 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
            🎵
          </div>

          {/* Engagement badge */}
          {/* <div className="absolute right-0 top-1/3 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <span className="text-indigo-500">📈</span>
            <div className="text-xs">
              <p className="font-bold text-slate-900">+250%</p>
              <p className="text-slate-400">Engagement</p>
            </div>
          </div> */}

          {/* Just posted badge */}
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white">
              ❤
            </span>
            <div className="text-xs">
              <p className="font-semibold text-slate-900">Your Brand</p>
              <p className="text-slate-400">Just Posted</p>
            </div>
          </div>

          {/* Weekly content card */}
          <div className="absolute -bottom-16 right-[-2rem] w-56 rounded-2xl bg-white p-4 text-xs shadow-xl ring-1 ring-slate-100 sm:right-[-3rem]">
            <p className="mb-2 font-semibold text-slate-900">Weekly Content</p>
            <ul className="space-y-1.5">
              {weeklyContent.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between text-slate-500"
                >
                  <span className="w-8 font-medium text-slate-400">
                    {item.day}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  <span className="text-emerald-500">✔</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}