import { Code2, Dumbbell, Mountain, Tv } from "lucide-react";
import { INTERESTS } from "@/lib/site";
import { Section, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

const ICONS = { Code2, Dumbbell, Mountain, Tv } as const;

export function Interests() {
  return (
    <Section id="interests">
      <SectionHeading command="./whoami --outside-work" title="Outside work" />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {INTERESTS.map((interest, i) => {
          const Icon = ICONS[interest.icon];
          return (
            <li key={interest.title}>
              <Reveal delay={i * 70}>
                <article className="group relative h-full overflow-hidden rounded-lg border border-border bg-surface/70 p-5 backdrop-blur-sm transition hover:border-border-strong">
                  <div
                    aria-hidden
                    className={`absolute -left-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${interest.gradient} opacity-20 blur-2xl transition group-hover:opacity-35`}
                  />
                  <span className="relative grid h-10 w-10 place-items-center rounded border border-border bg-surface-2/60 text-accent transition group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="relative mt-4 font-semibold tracking-tight">
                    {interest.title}
                  </h3>
                  <p className="relative mt-1 text-sm text-muted-foreground">
                    {interest.description}
                  </p>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
