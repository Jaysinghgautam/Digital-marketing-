 import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";
import Reveal from "../components/Reveal";

const FAQS = [
  {
    q: "What's your typical onboarding timeline?",
    a: "Most projects kick off within two weeks of signing. We begin with a detailed audit, goals discussion, and clear growth roadmap.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. We offer flexible engagement models for startups that need focused marketing support while validating their growth strategy.",
  },
  {
    q: "How do you report performance?",
    a: "You'll receive clear performance reporting with key metrics, insights, recommendations, and regular strategy discussions.",
  },
  {
    q: "Can you work with our existing marketing team?",
    a: "Absolutely. We can operate as an extension of your internal team or take ownership of specific marketing channels.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-medium text-navy">{q}</span>
        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm text-slate-600 leading-relaxed max-w-xl">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28">
          <Reveal variant="up" className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">
              Get In Touch
            </p>
            <h1 className="mt-5 text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
              Let's build your next
              <span className="block text-accent">growth chapter.</span>
            </h1>
            <p className="mt-7 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Tell us where you want to go, what's holding growth back, and
              what success looks like. We'll help you find the right path
              forward.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <Reveal variant="up">
              <p className="text-sm font-semibold text-accent-dark uppercase tracking-[0.2em]">
                Start a Conversation
              </p>
              <h2 className="mt-3 text-4xl font-semibold text-navy tracking-tight">
                Tell us about your business.
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Whether you need more leads, stronger brand visibility, better
                conversion rates, or a complete growth strategy, we'd love to
                hear what you're working toward.
              </p>
            </Reveal>

            <Reveal variant="up" delay={150} className="mt-8 space-y-5">
              {[
                [Mail, "hello@ascenddigital.com"],
                [Phone, "(415) 555-0182"],
                [MapPin, "San Francisco, California"],
                [Clock, "Mon – Fri, 9:00 AM – 6:00 PM"],
              ].map(([Icon, text]) => (
                <div key={text} className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                    <Icon size={17} className="text-accent-dark" />
                  </div>
                  {text}
                </div>
              ))}
            </Reveal>

            <Reveal variant="up" delay={250} className="mt-9">
              <div className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <CheckCircle2 size={17} className="text-accent-dark" />
                  What happens next?
                </div>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  We'll review your message and get back to you with the next
                  best step—usually within one business day.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal
            variant="scale"
            delay={150}
            className="bg-white rounded-2xl border border-slate-200 shadow-xl p-7 sm:p-9"
          >
            <h3 className="text-2xl font-semibold text-navy">
              Send us a message
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Fill out the form and our growth team will get in touch.
            </p>

            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <input
                type="text"
                placeholder="Company / Website"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />

              <select className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent">
                <option>What can we help with?</option>
                <option>SEO</option>
                <option>Google & Meta Ads</option>
                <option>Social Media Marketing</option>
                <option>Content Marketing</option>
                <option>Web & Landing Pages</option>
                <option>Analytics & Strategy</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your goals..."
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />

              <button
                type="submit"
                className="group w-full bg-navy text-white font-semibold px-5 py-3.5 rounded-lg hover:bg-navy-light transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <Reveal variant="up" className="text-center mb-10">
            <p className="text-sm font-semibold text-accent-dark uppercase tracking-[0.2em]">
              FAQ
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-navy">
              Questions, answered.
            </h2>
            <p className="mt-3 text-slate-500">
              A few things clients commonly ask before getting started.
            </p>
          </Reveal>

          <Reveal variant="up" delay={100}>
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <Reveal variant="up">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy">
              Have a growth challenge?
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Sometimes the best first step isn't another campaign. It's a
              conversation about what's actually holding your business back.
            </p>
            <a
              href="mailto:hello@ascenddigital.com"
              className="inline-flex items-center gap-2 mt-7 bg-navy text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              Email Our Team
              <ArrowRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}