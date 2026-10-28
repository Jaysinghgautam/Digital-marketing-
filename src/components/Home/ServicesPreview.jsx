import React from "react";

const services = [
  {
    icon: "📣",
    title: "Social Media Management",
    desc: "Complete management of your Instagram, Facebook and more.",
  },
  {
    icon: "🎨",
    title: "Graphic & Creative Design",
    desc: "Eye-catching posts, carousels and brand creatives.",
  },
  {
    icon: "🎬",
    title: "Reels & Video Editing",
    desc: "High-quality reels, shorts, videos and editing.",
  },
  {
    icon: "🗓️",
    title: "Content Strategy & Planning",
    desc: "Monthly plans, content ideas, routines and hashtags.",
  },
  {
    icon: "⏰",
    title: "Posting & Scheduling",
    desc: "Automated publishing with timely updates.",
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    desc: "Detailed reports with growth insights.",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-xs font-semibold text-indigo-600">
              OUR SERVICES
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Everything You Need for a{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                Strong Social Media Presence
              </span>
            </h2>
          </div>
          <button className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            View All Services
            <span>&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group flex flex-col items-center rounded-2xl bg-slate-50 p-5 text-center shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl text-white shadow-md ${
                  gradientByIndex(idx)
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-xs text-slate-500">{service.desc}</p>
              <span className="mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-white text-indigo-500 shadow ring-1 ring-slate-100">
                &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function gradientByIndex(idx) {
  const gradients = [
    "bg-gradient-to-br from-pink-500 to-fuchsia-500",
    "bg-gradient-to-br from-indigo-500 to-blue-500",
    "bg-gradient-to-br from-purple-500 to-indigo-500",
    "bg-gradient-to-br from-orange-500 to-amber-500",
    "bg-gradient-to-br from-sky-500 to-cyan-500",
    "bg-gradient-to-br from-fuchsia-500 to-purple-500",
  ];
  return gradients[idx % gradients.length];
}