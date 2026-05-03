import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/lib/site";

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="mb-10 max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Education
        </h2>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Foundations.
        </h3>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {EDUCATION.map((entry) => (
          <li
            key={`${entry.school}-${entry.period}`}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-base font-semibold tracking-tight">
                  {entry.degree}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.school}
                </p>
                <p className="text-sm text-muted-foreground">
                  {entry.university}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                  <span className="font-mono text-muted-foreground">
                    {entry.period}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {entry.grade}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
