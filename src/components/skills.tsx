import { SKILLS } from "@/lib/site";

const CATEGORIES = Object.keys(SKILLS) as (keyof typeof SKILLS)[];

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border/60 bg-muted/20"
    >
      <div className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Skills
          </h2>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            What I work with.
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {category}
              </h4>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {SKILLS[category].map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[12px] text-foreground/85"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
