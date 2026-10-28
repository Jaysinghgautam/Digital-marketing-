import React, { useRef, useState } from "react";

const filters = ["All", "Food & Beverage", "Fashion", "Beauty", "Travel", "Lifestyle"];

const works = [
  {
    title: "Delicious Healthy Always",
    category: "Food & Beverage",
    image: "https://picsum.photos/seed/voopify-food/400/533",
  },
  {
    title: "Style Your Store",
    category: "Fashion",
    image: "https://picsum.photos/seed/voopify-fashion/400/533",
  },
  {
    title: "Natural Skincare",
    category: "Beauty",
    image: "https://picsum.photos/seed/voopify-beauty/400/533",
  },
  {
    title: "Explode More",
    category: "Travel",
    image: "https://picsum.photos/seed/voopify-travel/400/533",
  },
  {
    title: "Fitness For A Better You",
    category: "Lifestyle",
    image: "https://picsum.photos/seed/voopify-fitness/400/533",
  },
  {
    title: "Fresh Bites Daily",
    category: "Food & Beverage",
    image: "https://picsum.photos/seed/voopify-bites/400/533",
  },
  {
    title: "Summer Getaway Looks",
    category: "Fashion",
    image: "https://picsum.photos/seed/voopify-summer/400/533",
  },
];

export default function FeaturedWork() {
  const [active, setActive] = useState("All");
  const scrollRef = useRef(null);

  const visibleWorks =
    active === "All" ? works : works.filter((w) => w.category === active);

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold text-indigo-600 shadow-sm ring-1 ring-indigo-100">
          FEATURED WORK
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Real Brands.{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Real Growth.
          </span>
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active === filter
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-slate-500 ring-1 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Left / Right scroll controls */}
          <div className="flex gap-2">
            <button
              onClick={() => scrollByAmount("left")}
              aria-label="Scroll left"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow ring-1 ring-slate-200 transition hover:bg-slate-50"
            >
              &#8592;
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              aria-label="Scroll right"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white shadow transition hover:bg-indigo-700"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-8 flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {visibleWorks.map((work) => (
            <div
              key={work.title}
              className="group relative aspect-[3/4] w-[160px] shrink-0 overflow-hidden rounded-2xl bg-slate-200 shadow-sm sm:w-[200px]"
            >
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {work.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}