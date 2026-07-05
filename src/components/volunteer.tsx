import { HeartHandshake } from "lucide-react";
import { VOLUNTEER } from "@/lib/site";
import { Section, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

export function Volunteer() {
  return (
    <Section id="volunteer">
      <SectionHeading command="cat volunteer.log" title="Volunteer" />
      <ul className="grid gap-4">
        {VOLUNTEER.map((entry) => (
          <li key={`${entry.organisation}-${entry.period}`}>
            <Reveal>
              <div className="flex items-start gap-4 rounded-lg border border-border bg-surface/70 p-5 backdrop-blur-sm transition hover:border-border-strong">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-accent/40 bg-accent/10 text-accent">
                  <HeartHandshake className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold tracking-tight">{entry.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {entry.organisation}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {entry.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {entry.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
