import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Star, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../Reveal";
import HeroDashboard from "./HeroDashboard";
import "./Hero.css";

/**
 * Background images for slideshow.
 * Auto-slides every 2 seconds with smooth crossfade.
 */
const BG_IMAGES = [
  "/hero_bg_1.jpg",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=1920&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&auto=format&fit=crop",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex]       = useState(null);
  const [fading, setFading]             = useState(false);
  const [paused, setPaused]             = useState(false);

  /* ── slide transition helper ── */
  const goTo = useCallback((nextIdx) => {
    setPrevIndex(currentIndex);
    setFading(true);
    setTimeout(() => {
      setCurrentIndex(nextIdx);
      setFading(false);
      setPrevIndex(null);
    }, 700);
  }, [currentIndex]);

  const goPrev = () => {
    setPaused(true);
    goTo((currentIndex - 1 + BG_IMAGES.length) % BG_IMAGES.length);
  };

  const goNext = () => {
    setPaused(true);
    goTo((currentIndex + 1) % BG_IMAGES.length);
  };

  /* ── auto-play every 2 seconds ── */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      goTo((currentIndex + 1) % BG_IMAGES.length);
    }, 2000);
    return () => clearInterval(id);
  }, [currentIndex, paused, goTo]);

  /* resume auto-play 5s after manual interaction */
  useEffect(() => {
    if (!paused) return;
    const t = setTimeout(() => setPaused(false), 5000);
    return () => clearTimeout(t);
  }, [paused]);

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — exactly 100vh, full screen cover
      ══════════════════════════════════════════════ */}
      <section className="hero-section">

        {/* ── Background Slideshow ── */}
        <div className="hero-bg-wrapper">
          {prevIndex !== null && (
            <div
              className="hero-bg-slide"
              style={{
                backgroundImage: `url(${BG_IMAGES[prevIndex]})`,
                opacity: fading ? 0 : 1,
                transition: "opacity 0.7s ease-in-out",
                zIndex: 1,
              }}
            />
          )}
          <div
            className="hero-bg-slide"
            style={{
              backgroundImage: `url(${BG_IMAGES[currentIndex]})`,
              opacity: fading ? 0.15 : 1,
              transition: "opacity 0.7s ease-in-out",
              zIndex: 2,
            }}
          />
          <div className="hero-overlay" style={{ zIndex: 3 }} />
          <div className="hero-overlay-bottom" style={{ zIndex: 4 }} />
        </div>

        {/* ── Glows & Grid ── */}
        <div className="hero-glows" style={{ zIndex: 5 }}>
          <div className="hero-glow hero-glow-top" />
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />
        </div>
        <div className="hero-grid" style={{ zIndex: 5 }} />

        {/* ── LEFT Arrow ── */}
        <button
          onClick={goPrev}
          className="hero-arrow hero-arrow-left"
          aria-label="Previous slide"
          style={{ zIndex: 20 }}
        >
          <ChevronLeft className="hero-arrow-icon" />
        </button>

        {/* ── RIGHT Arrow ── */}
        <button
          onClick={goNext}
          className="hero-arrow hero-arrow-right"
          aria-label="Next slide"
          style={{ zIndex: 20 }}
        >
          <ChevronRight className="hero-arrow-icon" />
        </button>

        {/* ── Slide Dot Indicators ── */}
        <div className="hero-indicators" style={{ zIndex: 20 }}>
          {BG_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPaused(true); goTo(i); }}
              className={`hero-dot ${i === currentIndex ? "hero-dot-active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* ── Hero Text Content ── */}
        <div className="hero-content" style={{ zIndex: 10 }}>
          <div className="hero-inner">

            {/* Badge */}
            <Reveal variant="fade" delay={100}>
              <div className="hero-badge">
                <Sparkles className="hero-badge-icon" />
                <span>Full-Stack Creative &amp; Growth Engine for Indian SMEs</span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal variant="up" delay={200}>
              <h1 className="hero-headline">
                Your Growth.{" "}
                <span className="hero-headline-gradient">Our Business.</span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal variant="up" delay={300}>
              <p className="hero-subtitle">
                We act as your dedicated outsourced marketing department — premium brand design,
                high-converting websites, ROI-driven paid ads, and viral social content,
                all on one predictable monthly retainer.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal variant="up" delay={400}>
              <div className="hero-ctas">
                <Link to="/contact" className="hero-cta-primary">
                  <span>Get Free Growth Plan</span>
                  <ArrowRight className="hero-cta-arrow" />
                </Link>
                <a href="#services" className="hero-cta-secondary">
                  <Play className="w-4 h-4" />
                  <span>Explore Services</span>
                </a>
              </div>
            </Reveal>

            {/* Trust Bar */}
            <Reveal variant="fade" delay={500}>
              <div className="hero-trust">
                <div className="hero-trust-item">
                  <ShieldCheck className="hero-trust-icon" style={{ color: "#34d399" }} />
                  <span>No Long-Term Contracts</span>
                </div>
                <span className="hero-trust-divider">•</span>
                <div className="hero-trust-item">
                  <TrendingUp className="hero-trust-icon" style={{ color: "#22d3ee" }} />
                  <span>Transparent Weekly ROI</span>
                </div>
                <span className="hero-trust-divider">•</span>
                <div className="hero-trust-item">
                  <div className="hero-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="hero-star" />
                    ))}
                  </div>
                  <span>4.9/5 Client Rating</span>
                </div>
              </div>
            </Reveal>

            {/* Scroll hint */}
            <Reveal variant="fade" delay={700}>
              <div
                className="hero-scroll-hint"
                style={{ cursor: "pointer" }}
                title="Scroll down"
                onClick={() => {
                  const html = document.documentElement;
                  const prev = html.style.scrollBehavior;
                  html.style.scrollBehavior = "auto";
                  window.scrollTo({ top: window.innerHeight, left: 0, behavior: "instant" });
                  setTimeout(() => {
                    html.style.scrollBehavior = prev;
                  }, 50);
                }}
              >
                <div className="hero-scroll-mouse">
                  <div className="hero-scroll-wheel" />
                </div>
                <span>Scroll to explore</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Dashboard Card (shows on scroll) ── */}
      <HeroDashboard />
    </>
  );
}