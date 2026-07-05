"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed background: a faint terminal grid + a cyan glow that tracks the cursor.
 * Purely decorative; sits behind all content. Disabled for reduced-motion.
 */
export function TerminalBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage:
            "radial-gradient(circle at 50% 30%, black, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%, black, transparent 85%)",
        }}
      />
      {/* cursor-tracking glow */}
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx, 50%) var(--my, 15%), oklch(0.82 0.13 200 / 0.10), transparent 65%)",
        }}
      />
      {/* fixed top wash */}
      <div
        className="absolute inset-x-0 top-0 h-[440px]"
        style={{
          background:
            "radial-gradient(circle at top, oklch(0.82 0.13 200 / 0.07), transparent 62%)",
        }}
      />
    </div>
  );
}
