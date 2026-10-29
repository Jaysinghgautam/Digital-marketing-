import React from "react";

const brands = [
  "NatureHarvest",
  "the organic kitchen",
  "AARYAM",
  "SANSKRITI",
  "NUTRA LIFE",
  "UrbanBite",
  "ZAYKA",
];

export default function OfficeSection() {
  return (
    <section className="w-full bg-slate-50">
      {/* Top content */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left copy */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-wide text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
            OUR OFFICE
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Where Ideas
            <br />
            Come to{" "}
            <span className="text-fuchsia-600">Life</span>
          </h2>

          <p className="mt-4 text-slate-500 max-w-md leading-relaxed">
            Our office in Gurugram is a creative space where ideas, strategy
            and execution come together. A place designed for collaboration,
            innovation and amazing results.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors text-white font-semibold px-6 py-3 rounded-full">
            Visit Our Office
            <span className="bg-white/20 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
        </div>

        {/* Right image collage */}
        <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-4 h-[380px]">
          {/* Large left image - wider now */}
          <div className="rounded-2xl overflow-hidden h-full">
            <img
              src="https://cdn.pixabay.com/photo/2024/06/26/07/02/canvas-8854180_1280.jpg"
              alt="Voopify office workspace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle stacked images */}
          <div className="flex flex-col gap-4 h-full">
            <div className="rounded-2xl overflow-hidden flex-1">
              <img
                src="/top.jpg"
                alt="Meeting room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden flex-1">
              <img
                src="/down.jpg"
                alt="Desk area"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right image */}
          <div className="rounded-2xl overflow-hidden h-full">
            <img
              src="/last.jpg"
              alt="Lounge with neon sign"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Trusted by brands */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="text-xs font-semibold tracking-wide text-violet-600 mb-6">
            TRUSTED BY GROWING BRANDS
          </p>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-slate-500 font-medium">
            {brands.map((brand) => (
              <span key={brand} className="whitespace-nowrap">
                {brand}
              </span>
            ))}
            <span className="whitespace-nowrap text-slate-400">
              and many more...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}