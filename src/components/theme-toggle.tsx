"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/** Dark ⇄ light ("paper terminal") toggle. Persists to localStorage. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2 py-1 font-mono text-[11px] text-muted-foreground transition hover:border-border-strong hover:text-foreground"
    >
      {theme === "dark" ? (
        <Sun className="h-3.5 w-3.5" aria-hidden />
      ) : (
        <Moon className="h-3.5 w-3.5" aria-hidden />
      )}
      <span className="hidden sm:inline">{theme === "dark" ? "LIGHT" : "DARK"}</span>
    </button>
  );
}
