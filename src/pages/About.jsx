import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  TrendingUp,
  Sparkles,
  Users,
  Target,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import Reveal from "../components/Reveal";

const LEADERS = [
  {
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Chen",
    role: "Head of Strategy",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Elena Bradley",
    role: "Head of Analytics",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Carter",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sophia Williams",
    role: "Head of Growth",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Anderson",
    role: "Performance Marketing Lead",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const VALUES = [
  {
    icon: Eye,
    title: "Transparency",
    body: "Clear reporting, honest communication, and marketing decisions backed by real data.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    body: "We focus on revenue, pipeline, customers, and measurable business outcomes.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    body: "We test new ideas, channels, and technologies before they become crowded.",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal variant="up">
              <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">
                About Ascend Digital
              </p>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <h1 className="mt-5 text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
                We turn ambitious
                <span className="block text-accent">
                  brands into growth stories.
                </span>
              </h1>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <p className="mt-7 text-lg text-slate-300 leading-relaxed max-w-xl">
                We're a performance-focused digital marketing team combining
                strategy, creativity, technology, and analytics to build
                marketing engines that actually move businesses forward.
              </p>
            </Reveal>

            <Reveal variant="up" delay={300}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 mt-8 bg-accent text-navy font-semibold px-6 py-3.5 rounded-lg hover:bg-white transition-all"
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={150}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Digital marketing team"
                className="w-full aspect-[4/3] object-cover rounded-2xl border border-white/10"
              />
              <div className="absolute -bottom-5 -left-5 bg-white text-navy rounded-xl p-5 shadow-2xl">
                <p className="text-3xl font-semibold">10+</p>
                <p className="text-sm text-slate-500">Years of experience</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["10+", "Years Experience"],
            ["150+", "Projects Delivered"],
            ["3.2x", "Average ROAS"],
            ["92%", "Client Retention"],
          ].map(([value, label], i) => (
            <Reveal
              key={label}
              variant="up"
              delay={i * 100}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-semibold text-navy">
                {value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal variant="scale">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85"
              alt="Marketing strategy meeting"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
            />
          </Reveal>

          <div>
            <Reveal variant="up">
              <p className="text-sm font-semibold text-accent-dark uppercase tracking-[0.2em]">
                Our Story
              </p>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <h2 className="mt-3 text-4xl sm:text-5xl font-semibold text-navy tracking-tight">
                Marketing should create
                <span className="block text-slate-400">
                  momentum, not noise.
                </span>
              </h2>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <p className="mt-6 text-slate-600 leading-relaxed">
                We started Ascend Digital with one simple belief: businesses
                shouldn't have to choose between great creative and measurable
                performance.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Today, our strategists, creatives, media specialists, and
                analysts work together to connect every campaign with a clear
                business objective.
              </p>
            </Reveal>

            <Reveal variant="up" delay={300}>
              <div className="mt-7 space-y-3">
                {[
                  "Strategy before execution",
                  "Creative backed by data",
                  "Long-term partnerships over quick wins",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <CheckCircle2 size={17} className="text-accent-dark" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Reveal variant="up" className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-accent-dark uppercase tracking-[0.2em]">
              Our People
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-navy">
              The team behind the strategy.
            </h2>
            <p className="mt-4 text-slate-600">
              Specialists across strategy, performance, creative, and analytics
              working toward the same growth goal.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {LEADERS.map((person, i) => (
              <Reveal
                key={person.name}
                variant="up"
                delay={i * 100}
                className="group rounded-2xl border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="h-52 overflow-hidden bg-slate-100">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-navy">{person.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{person.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Reveal variant="up" className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">
              What We Believe
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">
              Principles that guide
              <span className="block text-slate-400">every decision.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon;

              return (
                <Reveal
                  key={value.title}
                  variant="up"
                  delay={i * 100}
                  className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {value.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <Reveal variant="up">
            <Users size={30} className="mx-auto text-accent-dark" />
            <h2 className="mt-5 text-3xl sm:text-4xl font-semibold text-navy">
              Better marketing starts with a better partnership.
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you're launching a new brand, scaling acquisition, or
              fixing a funnel that isn't converting, we're here to build the
              next stage of growth with you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-7 bg-navy text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              Let's Work Together
              <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
