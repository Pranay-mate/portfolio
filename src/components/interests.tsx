import { Code2, Dumbbell, Mountain, Tv } from "lucide-react";
import { INTERESTS } from "@/lib/site";

const ICONS = {
  Code2,
  Dumbbell,
  Mountain,
  Tv,
} as const;

export function Interests() {
  return (
    <section
      id="interests"
      className="border-t border-border/60 bg-muted/20"
    >
      <div className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Outside work
          </h2>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            What keeps me going.
          </h3>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INTERESTS.map((interest) => {
            const Icon = ICONS[interest.icon];
            return (
              <li key={interest.title}>
                <article
                  className={`group relative h-56 overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${interest.gradient} text-white shadow-sm`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <Icon
                      className="h-7 w-7 opacity-80 transition group-hover:scale-110 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div>
                      <h4 className="text-lg font-semibold tracking-tight">
                        {interest.title}
                      </h4>
                      <p className="mt-1 text-sm text-white/80">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
