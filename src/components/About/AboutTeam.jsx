 
import React from "react";
import { Linkedin, Instagram, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Suchitam Pandey",
    role: "Founder & Strategy Head",
    image:
      "/suchitam.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Aman Verma",
    role: "Creative Head",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=85",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Priya Mehta",
    role: "Content Strategist",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=85",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Rohit Sharma",
    role: "Video Editor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=85",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Sneha Kapoor",
    role: "Social Media Manager",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=85",
    linkedin: "#",
    instagram: "#",
  },
];

export default function AboutTeam() {
  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:mb-9">
          <div>
            <span className="mb-3 inline-flex rounded-full bg-[#F0EDFF] px-3.5 py-1.5 text-[10px] font-bold tracking-[1.5px] text-[#7552F5]">
              MEET OUR TEAM
            </span>

            <h2 className="text-3xl font-extrabold leading-tight tracking-[-1px] text-[#11152B] sm:text-4xl lg:text-[48px]">
              The People Behind{" "}
              <span className="text-[#8A3FFC]">Voopify</span>
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#646A83] sm:text-base">
              A passionate team of creators, strategists and digital
              experts working together to grow your brand.
            </p>
          </div>

          <a
            href="#careers"
            className="group inline-flex shrink-0 items-center justify-center gap-4 self-start rounded-full border border-[#DCD2FF] bg-white px-6 py-3.5 text-sm font-bold text-[#642BEE] transition-all duration-300 hover:border-[#8A3FFC] hover:bg-[#F8F5FF] sm:self-center sm:px-7"
          >
            Join Our Team
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 xl:gap-5">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group min-w-0 overflow-hidden rounded-[22px] border border-[#E9EBF7] bg-white p-3 shadow-[0_5px_20px_rgba(32,38,85,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9D0FF] hover:shadow-[0_12px_30px_rgba(32,38,85,0.09)]"
            >
              {/* PROFESSIONAL IMAGE FRAME */}
              <div className="relative overflow-hidden rounded-[15px] bg-[#F0EFF7]">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-[280px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] sm:h-[240px] md:h-[230px] lg:h-[190px] xl:h-[250px]"
                />
              </div>

              {/* MEMBER INFO */}
              <div className="px-1 pb-2 pt-4 text-center">
                <h3 className="text-base font-extrabold tracking-tight text-[#11152B] sm:text-[15px] xl:text-base">
                  {member.name}
                </h3>

                <p className="mt-1.5 min-h-[22px] text-xs leading-5 text-[#707791] sm:text-[11px] xl:text-xs">
                  {member.role}
                </p>

                {/* SOCIAL ICONS */}
                <div className="mt-4 flex items-center justify-center gap-4">
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF4FF] text-[#0A66C2] transition-all duration-200 hover:bg-[#0A66C2] hover:text-white"
                  >
                    <Linkedin size={18} strokeWidth={2.5} />
                  </a>

                  <a
                    href={member.instagram}
                    aria-label={`${member.name} Instagram`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF0F7] text-[#E1306C] transition-all duration-200 hover:bg-[#E1306C] hover:text-white"
                  >
                    <Instagram size={18} strokeWidth={2.3} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
