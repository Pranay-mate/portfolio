import { SKILLS } from "@/lib/site";
import { Section, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

const CATEGORIES = Object.keys(SKILLS) as (keyof typeof SKILLS)[];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading command="skills --list" title="Skills" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category, i) => (
          <Reveal key={category} delay={i * 70}>
            <div className="h-full rounded-lg border border-border bg-surface/70 p-5 backdrop-blur-sm transition hover:border-border-strong">
              <h3 className="font-mono text-xs text-muted-foreground">
                <span className="text-accent">$</span> ls {category.toLowerCase()}/
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {SKILLS[category].map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center rounded border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[12px] text-foreground/85 transition hover:border-accent/50 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
