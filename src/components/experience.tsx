import { EXPERIENCE } from "@/lib/site";
import { Section, SectionHeading, Panel, Tag } from "./ui";
import { Reveal } from "./reveal";
import { ExperienceChart } from "./experience-chart";

const yearOf = (period: string) => period.match(/\d{4}/)?.[0] ?? "";

// Oldest → newest so the chart line climbs to "now".
const chartItems = [...EXPERIENCE]
  .reverse()
  .map((e) => ({ year: yearOf(e.period), company: e.company, current: e.current }));

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        command="git log --career"
        title="Experience"
        meta={`${EXPERIENCE.length} positions`}
      />

      <Reveal>
        <Panel title="career.chart — growth over time" bodyClassName="p-4 sm:p-6">
          <ExperienceChart items={chartItems} />
        </Panel>
      </Reveal>

      <ol className="mt-6 space-y-4">
        {EXPERIENCE.map((entry, i) => (
          <li key={`${entry.company}-${entry.period}`}>
            <Reveal delay={i * 70}>
              <div className="rounded-lg border border-border bg-surface/70 p-5 backdrop-blur-sm transition hover:border-border-strong">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold tracking-tight">
                    <span className="text-foreground">{entry.role}</span>
                    <span className="text-accent"> @ </span>
                    <span className="text-muted-foreground">{entry.company}</span>
                    {entry.current ? (
                      <span className="ml-2 inline-flex items-center gap-1 align-middle font-mono text-[10px] text-up">
                        <span className="h-1.5 w-1.5 rounded-full bg-up animate-live" />
                        LIVE
                      </span>
                    ) : null}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {entry.period}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {entry.summary}
                </p>

                {entry.tech.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {entry.tech.map((t) => (
                      <li key={t}>
                        <Tag>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
