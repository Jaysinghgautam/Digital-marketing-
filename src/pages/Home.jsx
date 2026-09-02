 import { Link } from "react-router-dom";
import {
  Search,
  Target,
  Share2,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  Sparkles,
} from "lucide-react";
import Reveal from "../components/Reveal";
import CTABanner from "../components/CTABanner";

const FEATURES = [
  {
    icon: Search,
    number: "01",
    title: "Technical SEO",
    body: "Build a stronger search foundation with technical audits, site architecture, content structure, and performance optimization.",
  },
  {
    icon: Target,
    number: "02",
    title: "Paid Acquisition",
    body: "Turn advertising spend into predictable growth with data-backed campaigns across Google, Meta, LinkedIn, and more.",
  },
  {
    icon: Share2,
    number: "03",
    title: "Social Architecture",
    body: "Create a consistent social presence that builds awareness, trust, engagement, and long-term brand equity.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Advanced Analytics",
    body: "Connect your marketing data and understand exactly which channels, campaigns, and audiences drive revenue.",
  },
];

const STATS = [
  ["3.2x", "Average ROAS"],
  ["47%", "Lower CAC"],
  ["180+", "Campaigns launched"],
  ["92%", "Client retention"],
];

const PROCESS = [
  ["01", "Discover", "We understand your business, customers, competitors, funnel, and current growth challenges."],
  ["02", "Strategize", "We turn insights into a focused growth strategy with clear priorities, metrics, and execution plans."],
  ["03", "Execute", "Our team launches campaigns, improves experiences, creates content, and continuously optimizes performance."],
  ["04", "Scale", "Once we identify what works, we double down on the channels producing the strongest returns."],
];

const CASE_STUDIES = [
  {
    category: "E-commerce",
    title: "Turning paid traffic into profitable growth",
    result: "+214%",
    resultLabel: "Revenue growth",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "SaaS",
    title: "Building a predictable B2B acquisition engine",
    result: "3.8x",
    resultLabel: "Pipeline growth",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Technology",
    title: "From scattered data to smarter decisions",
    result: "-41%",
    resultLabel: "Customer acquisition cost",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

const LOGOS = ["NIMBUS", "VERTEX", "NORTHSTAR", "ORBIT", "APEX"];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="absolute top-[40%] -left-40 w-[400px] h-[400px] rounded-full bg-sky-100/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
            <div>
              <Reveal variant="up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium">
                  <Sparkles size={15} />
                  Data-driven digital growth
                </div>
              </Reveal>

              <Reveal variant="up" delay={100}>
                <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.045em] text-navy leading-[1.02]">
                  Growth that is
                  <span className="block text-accent-dark">built to compound.</span>
                </h1>
              </Reveal>

              <Reveal variant="up" delay={200}>
                <p className="mt-7 text-lg text-slate-600 leading-relaxed max-w-xl">
                  We combine data science, creative strategy, and technology
                  to help ambitious brands acquire customers, increase revenue,
                  and build a digital presence that lasts.
                </p>
              </Reveal>

              <Reveal
                variant="up"
                delay={300}
                className="flex flex-col sm:flex-row gap-3 mt-9"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-navy font-semibold px-6 py-3.5 rounded-lg hover:bg-accent-dark hover:text-white transition-all shadow-sm hover:shadow-lg"
                >
                  Book a Strategy Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white text-navy font-semibold px-6 py-3.5 rounded-lg hover:border-navy hover:bg-slate-50 transition-all"
                >
                  Explore Our Work
                </Link>
              </Reveal>

              <Reveal variant="fade" delay={450}>
                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
                  {["Strategy-first approach", "Performance focused"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={17} className="text-accent-dark" />
                        {item}
                      </div>
                    )
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal variant="scale" delay={150}>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-cyan-100/70 to-sky-100/50 rounded-[2rem] blur-2xl" />

                <div className="relative rounded-[1.5rem] overflow-hidden border border-slate-200 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                    alt="Digital marketing team working together"
                    className="w-full aspect-[4/3] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">
                        Revenue growth
                      </p>
                      <p className="text-2xl font-semibold text-navy mt-1">
                        +128.4%
                      </p>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-cyan-50 flex items-center justify-center">
                      <TrendingUp size={21} className="text-accent-dark" />
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -right-7 top-10 bg-white rounded-xl shadow-xl border border-slate-200 px-4 py-3 items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                    <Zap size={18} className="text-accent-dark" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Performance</p>
                    <p className="text-sm font-semibold text-navy">Optimized</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/70">
        <Reveal className="max-w-7xl mx-auto px-6 py-9">
          <div className="flex flex-col md:flex-row items-center justify-between gap-7">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">
              Trusted by ambitious teams
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="text-sm font-bold tracking-[0.18em] text-slate-400"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(([value, label], i) => (
              <Reveal
                key={label}
                variant="up"
                delay={i * 100}
                className="text-center lg:text-left"
              >
                <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-navy">
                  {value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-28">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-accent-dark uppercase tracking-widest">
              What we do
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-navy leading-tight">
              Everything you need to turn attention into growth.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We bring strategy, acquisition, content, and analytics together
              so every part of your growth engine works toward the same goal.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal
                  key={feature.title}
                  variant="up"
                  delay={i * 100}
                  className="group bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 hover:border-cyan-200 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="flex justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Icon size={21} className="text-accent-dark group-hover:text-navy" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {feature.body}
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-accent-dark"
                  >
                    Learn more
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal variant="scale">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85"
                    alt="Team collaborating on digital strategy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="absolute -bottom-7 -right-5 sm:-right-8 bg-navy text-white rounded-xl p-5 shadow-2xl max-w-[210px]">
                  <p className="text-3xl font-semibold text-accent">12+</p>
                  <p className="mt-1 text-sm text-slate-300">
                    years of combined growth experience
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-sm font-semibold text-accent-dark uppercase tracking-widest">
                  Why Ascend
                </p>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-navy leading-tight">
                  We don't chase metrics that don't matter.
                </h2>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                  More impressions, clicks, and followers don't automatically
                  mean a healthier business. We focus on the numbers that
                  actually move your company forward.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-9 space-y-6">
                  {[
                    [TrendingUp, "Revenue-focused", "Every campaign connects back to a measurable business outcome."],
                    [Users, "Customer obsessed", "We study customer behavior to create experiences people actually respond to."],
                    [BarChart3, "Data informed", "Clear reporting and attribution help us make better decisions faster."],
                  ].map(([Icon, title, body]) => (
                    <div key={title} className="flex gap-4">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center">
                        <Icon size={19} className="text-accent-dark" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy">{title}</h3>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                          {body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-28">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">
              Our process
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
              Simple process.
              <span className="block text-slate-400">Serious results.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              No unnecessary complexity. We identify the opportunity, build
              the strategy, execute quickly, and scale what works.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map(([number, title, body], i) => (
              <Reveal
                key={number}
                variant="up"
                delay={i * 100}
                className="group border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] transition-all"
              >
                <span className="text-sm font-semibold text-accent">
                  {number}
                </span>
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {body}
                </p>
                <div className="mt-7 w-8 h-px bg-white/20 group-hover:w-14 group-hover:bg-accent transition-all" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-28">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-accent-dark uppercase tracking-widest">
                Selected work
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-navy">
                Results speak louder.
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                A few examples of how strategy and execution can create
                measurable business impact.
              </p>
            </div>

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-accent-dark"
            >
              View all case studies <ArrowRight size={17} />
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study, i) => (
              <Reveal key={study.title} variant="up" delay={i * 100} className="group">
                <Link to="/case-studies">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition-all">
                    <div className="relative overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 text-xs font-semibold text-navy">
                        {study.category}
                      </span>
                      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-navy group-hover:bg-accent">
                        <ArrowRight size={17} />
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-3xl font-semibold text-navy">
                        {study.result}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {study.resultLabel}
                      </p>
                      <h3 className="mt-5 text-lg font-semibold text-navy leading-snug">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Reveal className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm">
            <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="text-accent-dark text-6xl font-serif leading-none">“</div>
                <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-navy font-medium">
                  Ascend didn't just improve our marketing metrics. They
                  fundamentally changed how we think about growth.
                </p>
                <p className="mt-6 text-slate-600 leading-relaxed max-w-2xl">
                  Their data-first approach helped us identify where our
                  funnel was leaking and build a much more predictable
                  acquisition engine.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-sky-200 flex items-center justify-center text-navy font-semibold">
                    SJ
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Sarah Jenkins</p>
                    <p className="text-sm text-slate-500">
                      VP of Marketing, Nimbus Cloud
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[320px]">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85"
                  alt="Marketing leader"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}