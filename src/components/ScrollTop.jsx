import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

/**
 * ScrollTop Component
 * 1. Resets scroll to top directly on page route change.
 * 2. Renders a modern floating "Back to Top" button when user scrolls down.
 * 3. Clicking jumps directly to top without slow reverse animation.
 */
export default function ScrollTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Instant scroll to top on route change
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    setTimeout(() => {
      html.style.scrollBehavior = prev;
    }, 50);
  }, [pathname]);

  // Track scroll position to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 280) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Direct instant jump to top without reverse scroll
  const scrollToTopDirect = () => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    setTimeout(() => {
      html.style.scrollBehavior = prev;
    }, 50);
  };

  return (
    <button
      type="button"
      onClick={scrollToTopDirect}
      aria-label="Scroll directly to top"
      title="Top pe jayein"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "rgba(11, 23, 40, 0.9)",
        border: "1px solid rgba(34, 211, 238, 0.4)",
        color: "#22d3ee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(34, 211, 238, 0.25)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
        transition: "opacity 0.25s ease, transform 0.25s ease, border-color 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px) scale(1.08)";
        e.currentTarget.style.borderColor = "#22d3ee";
        e.currentTarget.style.boxShadow = "0 12px 36px rgba(0, 0, 0, 0.6), 0 0 30px rgba(34, 211, 238, 0.55)";
        e.currentTarget.style.background = "rgba(15, 30, 52, 0.95)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)";
        e.currentTarget.style.borderColor = "rgba(34, 211, 238, 0.4)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(34, 211, 238, 0.25)";
        e.currentTarget.style.background = "rgba(11, 23, 40, 0.9)";
      }}
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}