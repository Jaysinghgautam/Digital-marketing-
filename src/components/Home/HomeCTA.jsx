import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";

/**
 * HomeCTA Component
 * Final high-conversion call-to-action block before the footer.
 */
export default function HomeCTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0a1220] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        <Reveal variant="scale">
          <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#0e1c32] via-[#10223d] to-[#0b1626] border border-cyan-500/20 shadow-2xl overflow-hidden">
            
            {/* Background Ambient Glows */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl" />

            <div className="relative max-w-3xl mx-auto text-center">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Zero Risk • Free 30-Minute Growth Audit</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Ready to Amplify Your Brand and Scale Revenue?
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Schedule a no-obligation strategy session with our senior team. We will analyze your
                current digital presence, competitor landscape, and send you a custom growth roadmap.
              </p>

              {/* Guarantees checklist */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>30-Min Discovery Session</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Competitor &amp; Ad Audit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Zero Sales Pressure</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-[#070d18] font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Book Your Strategy Call</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/case-studies"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/15 bg-white/[0.05] hover:bg-white/10 text-white font-semibold text-base backdrop-blur-sm transition-all"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
