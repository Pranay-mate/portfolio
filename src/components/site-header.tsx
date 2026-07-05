"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, SKILLS } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
] as const;

const TICKER = Object.values(SKILLS).flat();

export function SiteHeader() {
  const [time, setTime] = useState("");
  const [active, setActive] = useState("about");

  // Live IST clock
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.href.slice(1));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      {/* status strip */}
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-accent font-mono text-sm font-bold text-accent-foreground">
              P
            </span>
            <span className="hidden font-mono text-sm font-semibold tracking-tight sm:inline">
              {SITE.name.replace(" ", "_").toLowerCase()}
            </span>
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-up/40 bg-up/10 px-2 py-0.5 font-mono text-[10px] font-medium text-up">
            <span className="h-1.5 w-1.5 rounded-full bg-up animate-live" />
            OPEN TO WORK
          </span>
        </div>

        <nav className="hidden items-center gap-0.5 font-mono text-[13px] md:flex">
          {NAV.map((item) => {
            const on = active === item.href.slice(1);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-2.5 py-1.5 transition ${
                  on
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={on ? "text-accent" : "text-border-strong"}>/</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span
            className="hidden font-mono text-xs tabular-nums text-muted-foreground sm:inline"
            aria-label="Current time in India"
            suppressHydrationWarning
          >
            {time}
            <span className="ml-1 text-border-strong">IST</span>
          </span>
          <ThemeToggle />
        </div>
      </div>

      {/* skills ticker band */}
      <div className="overflow-hidden border-t border-border bg-surface/60">
        <div className="flex w-max animate-ticker items-center py-1.5 font-mono text-[11px] text-muted-foreground">
          {[...TICKER, ...TICKER].map((skill, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="mx-3 text-accent">◇</span>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
