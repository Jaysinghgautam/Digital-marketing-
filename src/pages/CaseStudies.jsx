 import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";
import Reveal from "../components/Reveal";
import CTABanner from "../components/CTABanner";

const CASES = [
  {
    title: "E-commerce Revenue Boost",
    category: "Paid Media + CRO",
    stat: "+150%",
    label: "YoY Revenue",
    body: "We rebuilt the acquisition funnel, improved product landing pages, and optimized paid campaigns to turn more traffic into profitable customers.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "SaaS Lead Generation",
    category: "SEO + Google Ads",
    stat: "-40%",
    label: "Cost Per Lead",
    body: "A complete demand-generation strategy combining high-intent search campaigns, landing page optimization, and conversion-focused content.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Global Brand Awareness",
    category: "Social + Content",
    stat: "5M+",
    label: "Qualified Impressions",
    body: "A social-first campaign helped a challenger brand enter a competitive market and build meaningful awareness among its ideal audience.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
];

const RESULTS = [
  { value: "3.2x", label: "Average ROAS" },
  { value: "47%", label: "Lower CAC" },
  { value: "92%", label: "Client Retention" },
  { value: "150+", label: "Campaigns Optimized" },
];

export default function CaseStudies() {
  return (
    <>
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <Reveal variant="up" className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">
              Case Studies
            </p>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Growth looks better
              <span className="block text-accent">when it's measurable.</span>
            </h1>
            <p className="mt-7 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Real strategies, real campaigns, and measurable outcomes. See
              how we help ambitious brands turn marketing investment into
              sustainable business growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {RESULTS.map((item, i) => (
            <Reveal key={item.label} variant="up" delay={i * 100} className="text-center">
              <p className="text-4xl sm:text-5xl font-semibold text-navy">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Reveal variant="up" className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-accent-dark uppercase tracking-[0.2em]">
              Selected Work
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold text-navy tracking-tight">
              Strategies that created
              <span className="block text-slate-400">real business impact.</span>
            </h2>
          </Reveal>

          <div className="space-y-8">
            {CASES.map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 100}>
                <div className="grid lg:grid-cols-2 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
                  <div className={`${i % 2 ? "lg:order-2" : ""}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full min-h-[300px] object-cover"
                    />
                  </div>

                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark">
                      {item.category}
                    </p>

                    <h3 className="mt-3 text-3xl sm:text-4xl font-semibold text-navy tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-slate-600 leading-relaxed">
                      {item.body}
                    </p>

                    <div className="mt-8 flex items-end gap-3">
                      <span className="text-5xl font-semibold text-accent-dark">
                        {item.stat}
                      </span>
                      <span className="pb-1 text-sm text-slate-500">
                        {item.label}
                      </span>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 grid sm:grid-cols-2 gap-3">
                      {["Data-led strategy", "Continuous optimization"].map(
                        (point) => (
                          <div
                            key={point}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <CheckCircle2 size={16} className="text-accent-dark" />
                            {point}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Start with the problem",
                text: "We identify the biggest growth constraint before recommending channels or campaigns.",
              },
              {
                icon: BarChart3,
                title: "Measure what matters",
                text: "Success is connected to revenue, pipeline, customers, and other meaningful business outcomes.",
              },
              {
                icon: TrendingUp,
                title: "Scale what works",
                text: "Winning campaigns are continuously improved and scaled into repeatable growth systems.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  variant="up"
                  delay={i * 100}
                  className="p-7 rounded-2xl border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center">
                    <Icon size={20} className="text-accent-dark" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to become our next success story?"
        body="Tell us about your goals, challenges, and growth targets. We'll help you find the highest-impact opportunity."
      />
    </>
  );
}