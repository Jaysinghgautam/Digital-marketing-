// import { useEffect, useRef, useState } from "react";

// /**
//  * useScrollReveal
//  * Fires `true` once an element scrolls into the viewport, then stops
//  * observing (reveal happens once, not on every scroll pass).
//  * Falls back to already-visible when the user prefers reduced motion.
//  *
//  * @param {Object} options
//  * @param {number} options.threshold - 0–1, how much of the element must be visible
//  * @param {string} options.rootMargin - shrinks/grows the trigger area
//  */
// export default function useScrollReveal({
//   threshold = 0.15,
//   rootMargin = "0px 0px -10% 0px",
// } = {}) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;

//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (prefersReducedMotion) {
//       setIsVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             observer.unobserve(node);
//           }
//         });
//       },
//       { threshold, rootMargin }
//     );

//     observer.observe(node);
//     return () => observer.disconnect();
//   }, [threshold, rootMargin]);

//   return [ref, isVisible];
// }



import { useEffect, useRef, useState } from "react";

export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}