import React from "react";
import {
  Megaphone,
  Palette,
  Clapperboard,
  ClipboardList,
  CalendarClock,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "01",
    icon: Megaphone,
    title: "Social Media Management",
    description:
      "Complete management of your Instagram, Facebook, LinkedIn, YouTube and more.",
    points: [
      "Profile setup & optimization",
      "Content planning & strategy",
      "Daily/weekly management",
    ],
    gradient: "from-pink-500 to-rose-500",
    image: "https://picsum.photos/seed/social-media/600/400",
  },
  {
    id: "02",
    icon: Palette,
    title: "Creative Designs",
    description:
      "Scroll-stopping designs that represent your brand and attract your audience.",
    points: [
      "Branded post designs",
      "Carousels & infographics",
      "Festival & campaign creatives",
    ],
    gradient: "from-orange-400 to-amber-500",
    image: "https://picsum.photos/seed/creative-design/600/400",
  },
  {
    id: "03",
    icon: Clapperboard,
    title: "Reels & Video Production",
    description:
      "High-quality, engaging reels and videos to grow your brand.",
    points: [
      "Short-form video production",
      "Trend-based Reels",
      "Editing, effects & subtitles",
    ],
    gradient: "from-purple-500 to-fuchsia-500",
    image: "https://picsum.photos/seed/reels-video/600/400",
  },
  {
    id: "04",
    icon: ClipboardList,
    title: "Content Strategy & Planning",
    description:
      "A result-driven strategy to keep your social media consistent and effective.",
    points: [
      "Monthly content calendar",
      "Captions & hashtag research",
      "Platform-specific strategy",
    ],
    gradient: "from-amber-400 to-orange-500",
    image: "https://picsum.photos/seed/content-strategy/600/400",
  },
  {
    id: "05",
    icon: CalendarClock,
    title: "Posting & Scheduling",
    description:
      "We schedule and publish content automatically at the best times.",
    points: [
      "Timely and consistent posting",
      "Multi-platform scheduling",
      "Content approval workflow",
    ],
    gradient: "from-pink-500 to-rose-500",
    image: "https://picsum.photos/seed/posting-scheduling/600/400",
  },
  {
    id: "06",
    icon: BarChart3,
    title: "Performance Reports",
    description:
      "Detailed insights and reports to measure growth and ROI.",
    points: [
      "Monthly performance reports",
      "Audience & engagement insights",
      "Strategy recommendations",
    ],
    gradient: "from-sky-500 to-blue-600",
    image: "https://picsum.photos/seed/performance-reports/600/400",
  },
];

export default function AboutService() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-purple-50/40 to-white py-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-pink-300/30 to-purple-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-orange-300/30 to-pink-300/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight mb-3">
              What We Do for{" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Your Brand
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              We provide end-to-end social media management services designed
              to create impact, engagement and real business growth.
            </p>
          </div>

          <button className="group inline-flex items-center gap-2 self-start lg:self-auto whitespace-nowrap rounded-full border-2 border-purple-500 px-6 py-3 text-sm font-semibold text-purple-600 transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-300/50">
            Let's Discuss Your Requirements
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, icon: Icon, title, description, points, gradient, image }) => (
            <div
              key={id}
              className="group relative flex items-stretch gap-4 overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* top accent line */}
              <div
                className={`absolute inset-x-0 top-0 z-10 h-1 rounded-t-2xl bg-gradient-to-r ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* left: content */}
              <div className="flex flex-1 flex-col min-w-0">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-md`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-gray-300">{id}</span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  {description}
                </p>

                <ul className="space-y-1.5 mb-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs text-gray-600"
                    >
                      <span
                        className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${gradient}`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-auto inline-flex items-center gap-1 text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 text-purple-500 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* right: image */}
              <div className="relative w-28 shrink-0 overflow-hidden rounded-xl sm:w-32">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-30 mix-blend-multiply`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}