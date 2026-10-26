import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, ArrowUpRight, Mail, Phone, MapPin, Sparkles, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050914] text-slate-400 border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Col 1: Brand Info (span 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src="/voopify.png"
                alt="VOOPIFY"
                className="h-12 w-auto object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div className="space-y-2">
              <div className="text-sm font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-orange-400 via-pink-400 to-cyan-400">
                “Your Growth. Our Business.”
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Subscription-based creative growth partner closing the marketing gap for India&apos;s 63M+ MSMEs with agency-grade discipline, AI-accelerated velocity, and transparent ROI.
              </p>
            </div>

            <div className="pt-2 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:growth@voopify.com" className="hover:text-cyan-400 transition-colors">
                  growth@voopify.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Commercial Hubs: Mumbai · Delhi NCR · Jaunpur, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-cyan-500/10 hover:border-cyan-400/40 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: The 4 Practices */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              The 4 Practices
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center justify-between group">
                  <span>Brand Practice</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center justify-between group">
                  <span>Digital Practice (SEO & Web)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center justify-between group">
                  <span>Content Practice (Reels & AI)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center justify-between group">
                  <span>Growth Practice (Paid Ads)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-cyan-400/90 hover:text-cyan-300 font-semibold transition-colors flex items-center gap-1 text-xs pt-1">
                  <Sparkles className="w-3.5 h-3.5" /> Retainer Ladder (₹18K - ₹2L)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Operating System */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              VOOPIFY OS & Vision
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  Founder Vision & Thesis
                </Link>
              </li>
              <li>
                <Link to="/#process" className="hover:text-cyan-400 transition-colors">
                  The V-O-O-P Operating System
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-cyan-400 transition-colors">
                  SME Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  Vision 2035 & 1,000 Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Book 20-Min Discovery Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Target SME Sectors */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Target Industries
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {[
                "B2B Manufacturers",
                "Global Exporters",
                "D2C Consumer Brands",
                "Healthcare & Clinics",
                "Restaurants & Food",
                "Education & Academies",
                "Real Estate",
                "Professional Services",
              ].map((ind, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300"
                >
                  {ind}
                </span>
              ))}
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>SOP-driven 48h SLA &amp; No lock-ins</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} VOOPIFY Technologies &amp; Creative LLP. All rights reserved. Strategic Blueprint v1.0.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">“Your Growth. Our Business.”</span>
            <Link to="/contact" className="text-cyan-400 hover:underline">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
