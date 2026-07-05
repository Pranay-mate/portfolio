"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fire once when an element scrolls into view. Returns a ref + boolean.
 * Used to trigger reveals, count-ups, and the chart draw-in.
 */
export function useInView<T extends Element = HTMLDivElement>(opts?: {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}) {
  const once = opts?.once ?? true;
  const threshold = opts?.threshold ?? 0.15;
  const rootMargin = opts?.rootMargin ?? "0px 0px -8% 0px";

  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}

/** True if the user asked for reduced motion. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
