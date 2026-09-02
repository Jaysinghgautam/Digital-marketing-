import useScrollReveal from "../hooks/useScrollReveal";

/**
 * Reveal
 * Wraps any block of content and animates it into place the first
 * time it enters the viewport.
 *
 * variant: "up" | "fade" | "scale" | "left" | "right"
 * delay:   ms, used to stagger a sequence of siblings
 */
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  duration = 700,
  threshold,
  className = "",
  ...rest
}) {
  const [ref, isVisible] = useScrollReveal(
    threshold ? { threshold } : undefined
  );

  const hidden = {
    up: "opacity-0 translate-y-8",
    fade: "opacity-0",
    scale: "opacity-0 scale-95",
    left: "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
  }[variant];

  const shown = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out ${isVisible ? shown : hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
        transitionDelay: `${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
