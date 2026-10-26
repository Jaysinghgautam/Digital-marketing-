import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, Compass, Award } from "lucide-react";
import Reveal from "../Reveal";

const MILESTONES = [
  ["63M+", "Indian MSMEs"],
  ["1,000", "3-Yr Client Goal"],
  ["5,000+", "Vision 2035 Target"],
  ["25+ Cities", "Commercial Hubs"],
];

export default function AboutHero() {
  return (
    <section className="bg-[#050914] text-white relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-white/[0.08]">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Strategic Blueprint v1.0 • Vision &amp; Thesis</span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Democratizing Agency Craft for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-orange-400 via-pink-400 to-cyan-400">
                  India&apos;s Ambitious SMEs.
                </span>
              </h1>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                The name VOOPIFY signals two words: <strong>“Voice”</strong> and <strong>“Amplify.”</strong> Every SME already has a voice — a real product, a real craft, and loyal customers. Our job is to amplify that voice across modern search, social, and performance channels with agency-grade discipline.
              </p>
            </Reveal>

            <Reveal variant="up" delay={300}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl font-black text-sm text-slate-950 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 hover:opacity-95 shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.02] flex items-center gap-2"
                >
                  <span>Partner With VOOPIFY</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#founder-story"
                  className="px-7 py-4 rounded-xl font-bold text-sm text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 backdrop-blur-md transition-all"
                >
                  Read Founder Thesis
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Image / Badge card */}
          <div className="lg:col-span-5">
            <Reveal variant="scale" delay={200}>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-1 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-cyan-500/30">
                <div className="p-6 sm:p-8 rounded-[22px] bg-[#091122] space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Brand Philosophy
                    </span>
                    <span className="text-xs font-bold text-cyan-400">
                      “Your Growth. Our Business.”
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    “We kept meeting brilliant Indian manufacturers, clinics, and consumer brand owners with real products who looked invisible next to competitors with half their quality and twice their marketing budget. We built VOOPIFY to fix that permanently.”
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {MILESTONES.map(([num, lbl], i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                          {num}
                        </div>
                        <div className="mt-0.5 text-xs text-slate-400 font-medium">
                          {lbl}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
