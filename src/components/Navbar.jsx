import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Layers,
  Globe,
  Video,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const SERVICES_PRACTICES = [
  {
    title: "Brand Practice",
    desc: "Positioning, logo, visual identity & packaging",
    icon: Layers,
    color: "text-purple-600 bg-purple-50 border-purple-200",
    to: "/services",
  },
  {
    title: "Digital Practice",
    desc: "High-speed web, technical SEO & Google Business Profile",
    icon: Globe,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    to: "/services",
  },
  {
    title: "Content Practice",
    desc: "Reels, LinkedIn branding, photography & AI content",
    icon: Video,
    color: "text-pink-600 bg-pink-50 border-pink-200",
    to: "/services",
  },
  {
    title: "Growth Practice",
    desc: "Meta & Google Ads, retargeting & ROI reporting",
    icon: TrendingUp,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    to: "/services",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg shadow-purple-100/60 border-b border-purple-100"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">

        {/* ── Brand Logo ── */}
        <Link
          to="/"
          onClick={closeAll}
          className="flex items-center gap-3 group shrink-0 select-none"
        >
          <div className="relative flex items-center gap-2.5">
            <img
              src="/voopify.png"
              alt="VOOPIFY"
              className="h-10 sm:h-12 w-auto max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fb = document.getElementById("logo-fallback");
                if (fb) fb.style.display = "flex";
              }}
            />
            {/* Fallback Wordmark */}
            <div
              id="logo-fallback"
              style={{ display: "none" }}
              className="items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-orange-400 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-purple-300/40">
                V
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900">
                VOOP
                <span
                  style={{
                    background: "linear-gradient(135deg,#7B2FF7,#FF6B35)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  IFY
                </span>
              </span>
            </div>
          </div>

          {/* Subtitle tag on larger screens */}
          <div className="hidden lg:flex flex-col border-l border-gray-200 pl-3">
            <span
              className="text-[10px] uppercase font-extrabold tracking-widest"
              style={{
                background: "linear-gradient(135deg,#7B2FF7,#FF6B35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Creative That Grows Business
            </span>
            <span className="text-[9px] text-gray-400 font-medium">
              SME Growth Partner
            </span>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`
            }
          >
            Home
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`
            }
          >
            About
          </NavLink>

          {/* Services with Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`
              }
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-purple-600" : "text-gray-400"
                }`}
              />
            </NavLink>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-84 sm:w-96 transition-all duration-200 ${
                dropdownOpen
                  ? "opacity-100 visible translate-y-0 pointer-events-auto"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="bg-white border border-purple-100 rounded-2xl p-3.5 shadow-2xl shadow-purple-100/80 backdrop-blur-xl">
                <div className="px-3 py-2 border-b border-gray-100 mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    VOOPIFY 4 Practices
                  </span>
                  <span className="text-[10px] text-purple-600 font-bold px-2 py-0.5 rounded-full bg-purple-50 border border-purple-200">
                    SME Focused
                  </span>
                </div>

                <div className="space-y-1">
                  {SERVICES_PRACTICES.map((p) => {
                    const Icon = p.icon;
                    return (
                      <Link
                        key={p.title}
                        to={p.to}
                        onClick={closeAll}
                        className="flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-purple-50 group"
                      >
                        <div className={`p-2 rounded-lg border ${p.color} shrink-0 mt-0.5`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                            {p.title}
                          </div>
                          <div className="text-xs text-gray-400 line-clamp-1">
                            {p.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-2 pt-2 border-t border-gray-100 px-2 flex items-center justify-between text-xs">
                  <a
                    href="/#pricing"
                    onClick={closeAll}
                    className="text-gray-400 hover:text-purple-600 transition-colors flex items-center gap-1 font-medium"
                  >
                    <span>Monthly Retainers</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <Link
                    to="/services"
                    onClick={closeAll}
                    className="text-purple-600 hover:underline font-bold"
                  >
                    View Practice Matrix &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Plans/Pricing */}
          <a
            href="/#pricing"
            className="px-3.5 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
          >
            Plans
          </a>

          {/* Case Studies */}
          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`
            }
          >
            Portfolio
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* ── Desktop CTA Button ── */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-300/40"
            style={{
              background: "linear-gradient(135deg, #7B2FF7, #FF6B35)",
              boxShadow: "0 4px 20px rgba(123,47,247,0.35)",
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Book a Free Call</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── Mobile Hamburger Button ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-xl border border-purple-200 bg-purple-50 text-purple-600 hover:text-purple-700 hover:border-purple-400 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-purple-600" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-purple-100 px-5 py-5 shadow-xl space-y-4 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1.5">
            <NavLink
              to="/"
              end
              onClick={closeAll}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "text-purple-700 bg-purple-50 border border-purple-200"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeAll}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "text-purple-700 bg-purple-50 border border-purple-200"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              About
            </NavLink>

            {/* Mobile Services Accordion */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:bg-gray-50 transition-all"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180 text-purple-600" : "text-gray-400"
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-purple-50 rounded-xl border border-purple-100">
                  {SERVICES_PRACTICES.map((p) => (
                    <Link
                      key={p.title}
                      to={p.to}
                      onClick={closeAll}
                      className="block px-3 py-2 text-xs font-semibold text-gray-600 hover:text-purple-700 transition-colors"
                    >
                      &bull; {p.title}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    className="block px-3 py-2 text-xs font-bold text-purple-600 border-t border-purple-100"
                  >
                    View All Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            <a
              href="/#pricing"
              onClick={closeAll}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:bg-gray-50 transition-all"
            >
              Plans
            </a>

            <NavLink
              to="/case-studies"
              onClick={closeAll}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "text-purple-700 bg-purple-50 border border-purple-200"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeAll}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "text-purple-700 bg-purple-50 border border-purple-200"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Quick Contact Info */}
          <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-purple-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <span>growth@voopify.com</span>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={closeAll}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white shadow-lg"
              style={{
                background: "linear-gradient(135deg, #7B2FF7, #FF6B35)",
                boxShadow: "0 4px 20px rgba(123,47,247,0.35)",
              }}
            >
              <span>Book a Free Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
