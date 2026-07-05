import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/lib/site";
import { Section, SectionHeading, Tag } from "./ui";
import { Reveal } from "./reveal";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading command="cat education.log" title="Education" />
      <ul className="grid gap-4">
        {EDUCATION.map((entry) => (
          <li key={`${entry.school}-${entry.period}`}>
            <Reveal>
              <div className="flex items-start gap-4 rounded-lg border border-border bg-surface/70 p-5 backdrop-blur-sm transition hover:border-border-strong">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-accent/40 bg-accent/10 text-accent">
                  <GraduationCap className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold tracking-tight">{entry.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {entry.school} · {entry.university}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-xs text-muted-foreground">
                      {entry.period}
                    </span>
                    <Tag>{entry.grade}</Tag>
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
