import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/site";
import { Section, SectionHeading, Tag } from "./ui";
import { Reveal } from "./reveal";

/** Derive a short "ticker symbol" from a project name. */
function ticker(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length > 1) return words.map((w) => w[0]).join("").toUpperCase().slice(0, 4);
  const parts = name.replace(/([a-z])([A-Z])/g, "$1 $2").split(/\s+/);
  if (parts.length > 1) return parts.map((w) => w[0]).join("").toUpperCase().slice(0, 4);
  return name.slice(0, 4).toUpperCase();
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        command="ls -la ~/projects"
        title="Projects"
        meta={`${PROJECTS.length} shipped`}
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project, i) => {
          const inner = (
            <article className="group flex h-full flex-col rounded-lg border border-border bg-surface/70 p-5 backdrop-blur-sm transition hover:border-accent/50">
              <header className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 min-w-9 place-items-center rounded border border-accent/40 bg-accent/10 px-1.5 font-mono text-xs font-bold text-accent">
                    {ticker(project.name)}
                  </span>
                  <div>
                    <h3 className="font-semibold leading-tight tracking-tight">
                      {project.name}
                    </h3>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {project.period ?? ""}{" "}
                      <span className="text-up">▲</span>
                    </p>
                  </div>
                </div>
                {project.url ? (
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-accent"
                    aria-hidden
                  />
                ) : null}
              </header>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          );

          return (
            <li key={project.name}>
              <Reveal delay={(i % 2) * 80}>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="block h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
