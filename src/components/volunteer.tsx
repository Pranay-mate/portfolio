import { HeartHandshake } from "lucide-react";
import { VOLUNTEER } from "@/lib/site";

export function Volunteer() {
  return (
    <section
      id="volunteer"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="mb-10 max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Volunteer
        </h2>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Beyond shipping code.
        </h3>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {VOLUNTEER.map((entry) => (
          <li
            key={`${entry.organisation}-${entry.period}`}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <HeartHandshake className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-base font-semibold tracking-tight">
                  {entry.role}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.organisation}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {entry.period}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {entry.summary}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
