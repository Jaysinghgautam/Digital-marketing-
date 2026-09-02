 import {
  Search,
  Share2,
  MousePointerClick,
  PenSquare,
  Layout,
  LineChart,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Zap,
  Sparkles,
  BarChart3,
} from "lucide-react";
import Reveal from "../components/Reveal";
import CTABanner from "../components/CTABanner";

const SERVICES = [
  {
    icon: Search,
    number: "01",
    title: "SEO",
    subtitle: "Be discovered. Stay visible.",
    body: "Technical SEO, content optimization, keyword strategy, and authority building designed to create sustainable organic growth.",
    features: ["Technical SEO audits", "Keyword & content strategy", "On-page optimization", "Authority & link building"],
  },
  {
    icon: Share2,
    number: "02",
    title: "Social Media Marketing",
    subtitle: "Build attention into community.",
    body: "Channel-native social strategies that turn your brand into something people recognize, trust, and want to engage with.",
    features: ["Social media strategy", "Content calendars", "Community management", "Performance reporting"],
  },
  {
    icon: MousePointerClick,
    number: "03",
    title: "Google & Meta Ads",
    subtitle: "Spend smarter. Grow faster.",
    body: "Full-funnel paid acquisition focused on qualified customers, profitable growth, and measurable return on ad spend.",
    features: ["Google Ads management", "Meta Ads campaigns", "Retargeting funnels", "Conversion optimization"],
  },
  {
    icon: PenSquare,
    number: "04",
    title: "Content Marketing",
    subtitle: "Turn expertise into demand.",
    body: "Strategic content systems that educate your audience, strengthen your authority, and consistently generate qualified demand.",
    features: ["Content strategy", "Blog & SEO content", "Thought leadership", "Creative campaigns"],
  },
  {
    icon: Layout,
    number: "05",
    title: "Web & Landing Pages",
    subtitle: "Turn visits into customers.",
    body: "High-performance websites and landing pages designed around user experience, conversion psychology, and business objectives.",
    features: ["Landing page design", "Conversion optimization", "UX strategy", "Performance optimization"],
  },
  {
    icon: LineChart,
    number: "06",
    title: "Analytics & Strategy",
    subtitle: "Know what actually works.",
    body: "Advanced analytics and strategic consulting that connects your marketing activity to the metrics that matter most.",
    features: ["Marketing dashboards", "Attribution modeling", "Funnel analysis", "Growth strategy"],
  },
];

const STATS = [
  ["6", "Growth disciplines"],
  ["3.2x", "Average ROAS"],
  ["47%", "Average CAC reduction"],
  ["92%", "Client retention"],
];

const PROCESS = [
  ["01", "Audit", "We start by understanding your current marketing engine, competitors, customers, and biggest growth opportunities."],
  ["02", "Build", "We create a focused strategy and build the campaigns, content, experiences, and measurement systems needed to execute it."],
  ["03", "Optimize", "We continuously analyze performance, test new ideas, and remove friction from every stage of your customer journey."],
  ["04", "Scale", "Once we find the channels and messages that work, we increase investment and build systems around repeatable growth."],
];

const CHECKS = ["Strategy first", "Data backed", "Results focused"];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.06] text-cyan-300 text-sm font-medium">
                  <Sparkles size={15} />
                  Digital growth, engineered
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.045em] leading-[1.02]">
                  Marketing that
                  <span className="block text-accent">moves business.</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-7 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
                  From organic discovery to paid acquisition, content,
                  conversion, and analytics—we build the complete growth
                  engine around your business.
                </p>
              </Reveal>

              <Reveal
                delay={300}
                className="flex flex-col sm:flex-row gap-3 mt-9"
              >
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-navy font-semibold px-6 py-3.5 rounded-lg hover:bg-white transition-all"
                >
                  Explore Services
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/20 px-6 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Talk to an Expert
                </a>
              </Reveal>

              <Reveal delay={450}>
                <div className="mt-10 flex flex-wrap gap-7 text-sm text-slate-400">
                  {CHECKS.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal variant="scale" delay={150}>
              <div className="relative">
                <div className="absolute -inset-5 bg-cyan-400/10 rounded-[2rem] blur-2xl" />

                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                    alt="Digital marketing team working together"
                    className="w-full aspect-[4/3] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-5 text-navy">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">Campaign performance</p>
                        <p className="mt-1 text-3xl font-semibold">+128.4%</p>
                      </div>
                      <div className="w-11 h-11 rounded-full bg-cyan-50 flex items-center justify-center">
                        <TrendingUp size={20} className="text-accent-dark" />
                      </div>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full w-[82%] bg-accent rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -right-6 top-10 bg-white text-navy rounded-xl shadow-2xl px-4 py-3 items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                    <Zap size={18} className="text-accent-dark" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Growth engine</p>
                    <p className="text-sm font-semibold">Optimized</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <Reveal className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-sm font-semibold text-accent-dark uppercase tracking-[0.2em]">
            One partner. Every growth lever.
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-navy leading-tight">
            Your marketing shouldn't feel like six different companies.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Search, social, paid media, content, web, and analytics work
            better when they work together. Our specialists operate as one
            team around one growth strategy.
          </p>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(([value, label], i) => (
            <Reveal key={label} delay={i * 100} className="text-center">
              <p className="text-4xl sm:text-5xl font-semibold text-navy tracking-tight">
                {value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-28">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-accent-dark uppercase tracking-[0.2em]">
              Our capabilities
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-navy leading-tight">
              Six disciplines.
              <span className="block text-slate-400">One growth model.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Choose the capabilities your business needs today—or let us
              build the right combination around your goals.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;

              return (
                <Reveal
                  key={service.title}
                  delay={(i % 3) * 100}
                  className="group"
                >
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 hover:border-cyan-200 hover:shadow-2xl hover:-translate-y-1 transition-all">
                    <div className="flex justify-between">
                      <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center group-hover:bg-accent transition-colors">
                        <Icon size={21} className="text-accent-dark group-hover:text-navy" />
                      </div>
                      <span className="text-xs font-semibold text-slate-300">
                        {service.number}
                      </span>
                    </div>

                    <p className="mt-7 text-xs uppercase tracking-widest text-accent-dark font-semibold">
                      {service.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                      {service.body}
                    </p>

                    <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-slate-600"
                        >
                          <CheckCircle2 size={15} className="text-accent-dark" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-accent-dark">
                      Explore service
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal variant="scale">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85"
                  alt="Marketing strategy meeting"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-5 sm:-right-8 bg-navy text-white rounded-xl p-5 shadow-2xl flex items-center gap-3">
                <BarChart3 size={19} className="text-accent" />
                <div>
                  <p className="text-2xl font-semibold">3.2x</p>
                  <p className="text-xs text-slate-400">Average ROAS</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-semibold text-accent-dark uppercase tracking-[0.2em]">
                Strategy over tactics
              </p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-navy leading-tight">
                We don't just run campaigns.
                <span className="block text-slate-400">We build growth systems.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Great marketing isn't about doing more things. It's about
                knowing which things matter, doing them exceptionally well,
                and connecting every activity to a larger business goal.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 grid sm:grid-cols-2 gap-5">
                {[
                  [Target, "Clear objectives", "Every initiative starts with a measurable business outcome."],
                  [TrendingUp, "Continuous growth", "We optimize continuously instead of waiting for the next quarter."],
                ].map(([Icon, title, body]) => (
                  <div key={title} className="p-5 bg-white border border-slate-200 rounded-xl">
                    <Icon size={20} className="text-accent-dark" />
                    <h3 className="mt-4 font-semibold text-navy">{title}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-28">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">
              How we work
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
              From first insight
              <span className="block text-slate-400">to scalable growth.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map(([number, title, body], i) => (
              <Reveal
                key={number}
                delay={i * 100}
                className="group p-6 rounded-2xl border border-white/10 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-accent">{number}</span>
                  {i < 3 && (
                    <ArrowRight
                      size={17}
                      className="hidden lg:block text-white/20 group-hover:text-accent"
                    />
                  )}
                </div>

                <h3 className="mt-9 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {body}
                </p>
                <div className="mt-7 h-px w-8 bg-white/20 group-hover:w-14 group-hover:bg-accent transition-all" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to turn marketing into growth?"
        body="Tell us where growth is stalling and we'll help identify the highest-impact lever to pull next."
      />
    </>
  );
}