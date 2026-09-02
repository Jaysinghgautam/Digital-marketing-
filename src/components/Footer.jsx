 import { Link } from "react-router-dom";
import {
  Aperture,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      ["Home", "/"],
      ["Services", "/services"],
      ["Case Studies", "/case-studies"],
      ["About Us", "/about"],
    ],
  },
  {
    heading: "Resources",
    links: [
      ["Contact", "/contact"],
      ["Privacy Policy" ],
      ["Terms of Service" ],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#07111f] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white text-lg font-semibold"
            >
              <span className="w-9 h-9 rounded-lg bg-cyan-400 flex items-center justify-center">
                <Aperture size={20} className="text-[#07111f]" />
              </span>
              Ascend Digital
            </Link>

            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-sm">
              A performance-focused digital marketing agency helping ambitious
              brands turn strategy, creativity, and data into sustainable growth.
            </p>

            <div className="flex gap-3 mt-7">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="text-white font-semibold text-sm mb-5">
                {column.heading}
              </p>

              <ul className="space-y-3">
                {column.links.map(([label, path]) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                    >
                      {label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 items-center text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} Digital agency. All rights reserved.
          </span>
          <span>jaunpur uttar pradesh, india</span>
        </div>
      </div>
    </footer>
  );
}
