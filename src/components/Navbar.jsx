 import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Aperture, ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative sticky top-0 z-50 bg-[#0b1728]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 text-white font-semibold text-lg"
        >
          <span className="w-9 h-9 rounded-lg bg-cyan-400 flex items-center justify-center">
            <Aperture size={20} className="text-[#0b1728]" />
          </span>

          <span>
            Ascend<span className="text-cyan-300"> Digital</span>
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full p-1">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-cyan-400 text-[#0b1728]"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <NavLink
          to="/contact"
          className="hidden md:flex items-center gap-2 bg-cyan-400 text-[#0b1728] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white transition-all"
        >
          Book a Call
          <ArrowRight size={16} />
        </NavLink>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-lg border border-white/10 bg-white/[0.05] text-white flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`absolute top-[72px] left-0 w-full md:hidden bg-[#0b1728] border-t border-white/10 shadow-2xl transition-all duration-300 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-5 py-5">
          <nav className="space-y-1">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-cyan-400 text-[#0b1728]"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 w-full bg-cyan-400 text-[#0b1728] font-semibold px-5 py-3.5 rounded-xl hover:bg-white transition-all"
          >
            Book a Call
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}