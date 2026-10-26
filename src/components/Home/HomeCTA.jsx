import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Reveal from "../Reveal";

export default function HomeCTA() {
  return (
    <section
      id="contact"
      className="py-0 relative overflow-hidden"
    >
      <Reveal variant="scale">
        <div
          className="relative px-8 py-14 sm:py-20 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 30%, #7B2FF7 70%, #5B17D4 100%)",
          }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-20"
            style={{ background: "rgba(255,255,255,0.3)", filter: "blur(80px)", transform: "translate(-30%, -30%)" }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-15"
            style={{ background: "rgba(255,255,255,0.2)", filter: "blur(80px)", transform: "translate(30%, 30%)" }} />

          {/* Megaphone / Rocket decorative icon */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-8xl opacity-20 hidden lg:block select-none pointer-events-none">
            📣
          </div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-7xl opacity-20 hidden lg:block select-none pointer-events-none">
            🚀
          </div>

          <div className="relative max-w-4xl mx-auto text-center z-10">

            <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
              Ready to Grow?
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Let&apos;s Make Your Brand{" "}
              <span className="block sm:inline">Impossible to Ignore.</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              Join 500+ growing brands that trust VOOPIFY for their social media success. Start your journey today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
                style={{
                  background: "#1a1a2e",
                  color: "#ffffff",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                }}
              >
                <span>Book a Free Call</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  border: "2px solid rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
