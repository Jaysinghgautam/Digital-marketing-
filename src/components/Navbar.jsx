import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  }, [location.pathname, location.hash]);

  const closeAll = () => {
    setMobileOpen(false);
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
          <div className="relative flex items-center">
            <img
              src="/voopify.png"
              alt="VOOPIFY"
              className="h-10 sm:h-12 w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
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

          {/* Services */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`
            }
          >
            Services
          </NavLink>

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

            <NavLink
              to="/services"
              onClick={closeAll}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "text-purple-700 bg-purple-50 border border-purple-200"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              Services
            </NavLink>

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
