import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      {/* Soft glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,oklch(0.55_0.22_277_/_0.12),transparent_60%)]"
      />

      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="mr-2 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to opportunities
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-accent">{SITE.name.split(" ")[0]}</span>.
          </h1>

          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            {SITE.role} building thoughtful{" "}
            <span className="text-foreground">fintech</span> and{" "}
            <span className="text-foreground">sports-tech</span> products.
          </p>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            {SITE.bio[0]} I care about clean code, accurate math, and
            interfaces that don&apos;t fight the user.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              See my work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={`mailto:${SITE.socials.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-muted"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Get in touch
            </a>
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-muted"
            >
              <FileText className="h-4 w-4" aria-hidden />
              Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
