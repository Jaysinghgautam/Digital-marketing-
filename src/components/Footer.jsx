 
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import GrowBrandBanner from "./GrowBrandBanner.jsx";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const ourServices = [
  { label: "Social Media Management", to: "/services" },
  { label: "Creative Designs", to: "/services" },
  { label: "Reels & Video Editing", to: "/services" },
  { label: "Content Strategy", to: "/services" },
  { label: "Posting & Scheduling", to: "/services" },
  { label: "Performance Reports", to: "/services" },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
];

export default function Footer() {
  return (
    <>
      <GrowBrandBanner />

      <footer className="bg-gradient-to-br from-[#241046] via-[#1a0d33] to-[#140a28] text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

            {/* Brand + socials */}

            <div>
              <Link to="/" className="inline-flex items-center">
                <img
                  src="/voop.png"
                  alt="Voopify Logo"
                  className="h-20 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[180px] object-contain"
                />
              </Link>

              <div className="mt-5 flex items-center gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;

                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 shrink-0 items-center justify-center
                                 rounded-full border border-white/10
                                 bg-white/5 text-white
                                 transition-all duration-300
                                 hover:-translate-y-1
                                 hover:border-transparent
                                 hover:bg-gradient-to-br
                                 hover:from-indigo-500 hover:to-fuchsia-500
                                 focus-visible:outline-none
                                 focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                Quick Links
              </h4>

              <ul className="space-y-2.5 text-sm">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-slate-400 transition-colors hover:text-pink-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                Our Services
              </h4>

              <ul className="space-y-2.5 text-sm">
                {ourServices.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-slate-400 transition-colors hover:text-pink-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                Contact Us
              </h4>

              <ul className="space-y-3 text-sm text-slate-400">

                <li className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-pink-400">
                    &#9742;
                  </span>

                  <a
                    href="tel:+917930190851"
                    className="hover:text-pink-400"
                  >
                    +91 7930190851
                  </a>
                </li>

                <li className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-pink-400">
                    <Mail className="h-3.5 w-3.5" />
                  </span>

                  <a
                    href="mailto:info@voopify.com"
                    className="hover:text-pink-400"
                  >
                    info@voopify.com
                  </a>
                </li>

                <li className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-pink-400">
                    &#127760;
                  </span>

                  <a
                    href="https://www.voopify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pink-400"
                  >
                    www.voopify.com
                  </a>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-pink-400">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>

                  <span>
                    Pioneer Urban Square, Sector 62, Gurgaon, Haryana 122001,
                    India
                  </span>
                </li>

              </ul>
            </div>
          </div>

          {/* Bottom bar */}

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Voopify. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/privacy-policy"
                className="hover:text-pink-400"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="hover:text-pink-400"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
