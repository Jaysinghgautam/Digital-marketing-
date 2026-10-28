
import React from "react";

export default function OurStory() {
  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">

          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <span className="mb-4 inline-flex rounded-full bg-[#F0EDFF] px-3 py-1 text-[10px] font-bold tracking-widest text-[#7552F5]">
              OUR STORY
            </span>

            <h2 className="mb-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-[#11152B] sm:text-4xl xl:text-[42px]">
              A Brand Built on
              <br />
              Creativity, Strategy
              <br />
              and{" "}
              <span className="text-[#F02D83]">
                Real Results.
              </span>
            </h2>

            <p className="mb-4 max-w-[490px] text-[13px] leading-[1.65] text-[#62677A] sm:text-sm">
              Voopify was founded with a simple belief — every brand,
              no matter the size, deserves powerful and consistent
              social media presence. We saw businesses struggling
              to keep up with the fast-changing digital world, so we
              decided to build a solution that handles everything
              from strategy to content to publishing.
            </p>

            <p className="max-w-[490px] text-[13px] leading-[1.65] text-[#62677A] sm:text-sm">
              Today, we help brands across industries create impactful
              content, engage their audience and achieve real business
              growth through social media.
            </p>
          </div>

          {/* RIGHT IMAGE COMPOSITION */}
          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">

            {/* Decorative shapes */}
            <div className="absolute left-[12%] top-[5%] h-20 w-24 rounded-tl-[30px] rounded-br-[24px] bg-[#B45AF5] sm:h-28 sm:w-32" />

            <div className="absolute right-[2%] top-[18%] h-40 w-20 rounded-full bg-[#FFD36B] sm:h-52 sm:w-24" />

            {/* Main office image */}
            <div className="relative ml-[19%] w-[77%] overflow-hidden rounded-[20px] border-[3px] border-white shadow-[0_10px_30px_rgba(31,24,74,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&auto=format&fit=crop&q=85"
                alt="Voopify creative office"
                className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[340px]"
              />
            </div>

            {/* Team meeting image */}
            <div className="absolute left-[1%] top-[22%] z-10 w-[43%] rotate-[-3deg] overflow-hidden rounded-[16px] border-[4px] border-white shadow-[0_8px_24px_rgba(31,24,74,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=85"
                alt="Team planning and collaboration"
                className="h-[105px] w-full object-cover sm:h-[145px] lg:h-[150px]"
              />
            </div>

            {/* Content creation image */}
   <div className="absolute bottom-[1%] left-[9%] z-20 w-[46%] rotate-[3deg] overflow-hidden rounded-[16px] border-[4px] border-white shadow-[0_8px_24px_rgba(31,24,74,0.15)]">
  <img
    src="https://media.istockphoto.com/id/2156387160/photo/hispanic-latin-american-couple-software-engineer-developer-use-computer-work-on-program.webp?a=1&b=1&s=612x612&w=0&k=20&c=MwCwZmlsa6rhG5ppvCCN-OR67mdcx2WkD5SUouSzSrE="
    alt="Creative content production"
    className="h-[110px] w-full object-cover sm:h-[150px] lg:h-[155px]"
  />
</div>

            {/* Ideas into Impact card */}
            <div className="absolute bottom-[17%] right-0 z-30 flex items-center gap-3 rounded-xl border border-[#F1EFF8] bg-white px-3 py-3 shadow-[0_8px_24px_rgba(31,24,74,0.12)] sm:right-[-1%] sm:px-4 sm:py-4">
              <span className="text-3xl">💡</span>
              <div>
                <p className="text-xs font-extrabold text-[#15131F] sm:text-sm">
                  Ideas
                </p>
                <p className="text-[10px] font-semibold text-[#62677A] sm:text-xs">
                  into Impact
                </p>
              </div>
            </div>

            {/* Decorative dots */}
            <span className="absolute left-[5%] bottom-[23%] text-xl font-bold text-[#8A3FFC]">
              ✣
            </span>
            <span className="absolute right-[1%] top-[12%] text-xl font-bold text-[#FF9D25]">
              ✣
            </span>
          </div>
        </div>

        {/* MISSION / VISION / VALUES */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">

          {/* OUR MISSION */}
          <div className="flex gap-4 rounded-2xl border border-[#F0EFF9] bg-[#F8F8FE] p-5 sm:p-6">
            <div className="shrink-0 text-[38px] leading-none text-[#8A3FFC]">
              ◎
            </div>

            <div>
              <h3 className="mb-3 text-base font-extrabold text-[#15131F]">
                Our Mission
              </h3>
              <p className="text-xs leading-[1.7] text-[#62677A] sm:text-[13px]">
                To empower brands with creative, result-driven social media
                solutions that build visibility, engagement and long-term
                growth.
              </p>
            </div>
          </div>

          {/* OUR VISION */}
          <div className="flex gap-4 rounded-2xl border border-[#F0EFF9] bg-[#F8F8FE] p-5 sm:p-6">
            <div className="shrink-0 text-[38px] leading-none text-[#1769E8]">
              ◎
            </div>

            <div>
              <h3 className="mb-3 text-base font-extrabold text-[#15131F]">
                Our Vision
              </h3>
              <p className="text-xs leading-[1.7] text-[#62677A] sm:text-[13px]">
                To be a leading digital marketing partner known for
                creativity, trust and measurable results across global
                markets.
              </p>
            </div>
          </div>

          {/* OUR VALUES */}
          <div className="flex gap-4 rounded-2xl border border-[#F0EFF9] bg-[#F8F8FE] p-5 sm:p-6 sm:col-span-2 lg:col-span-1">
            <div className="shrink-0 text-[38px] leading-none text-[#FF922E]">
              ♢
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 text-base font-extrabold text-[#15131F]">
                Our Values
              </h3>

              <ul className="space-y-2 text-[11px] leading-relaxed text-[#62677A] sm:text-xs">
                {[
                  "Creativity in Everything We Do",
                  "Transparency & Honest Communication",
                  "Client Success is Our Success",
                  "Continuous Learning & Innovation",
                ].map((value) => (
                  <li key={value} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#8A3FFC] text-[9px] text-white">
                      ✓
                    </span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
