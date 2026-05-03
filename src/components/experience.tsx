import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/site";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border/60 bg-muted/20"
    >
      <div className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </h2>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Where I&apos;ve shipped.
          </h3>
        </div>

        <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
          {EXPERIENCE.map((entry) => (
            <li key={`${entry.company}-${entry.period}`} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[34px] grid h-7 w-7 place-items-center rounded-full border bg-background sm:-left-[42px] ${
                  entry.current
                    ? "border-accent text-accent"
                    : "border-border text-muted-foreground"
                }`}
              >
                <Briefcase className="h-3.5 w-3.5" aria-hidden />
              </span>

              <article className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-foreground/20">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-lg font-semibold tracking-tight">
                    {entry.role}
                    <span className="text-muted-foreground"> · {entry.company}</span>
                  </h4>
                  <span className="font-mono text-xs text-muted-foreground">
                    {entry.period}
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  {entry.summary}
                </p>

                {entry.tech.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {entry.tech.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
