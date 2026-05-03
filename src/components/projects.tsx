import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/site";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="mb-10 max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Projects
        </h2>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Selected work.
        </h3>
        <p className="mt-3 text-base text-muted-foreground">
          A mix of personal projects, client work, and tools shipped to
          production.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <li key={project.name}>
            <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-foreground/20 hover:shadow-md">
              <header className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-lg font-semibold tracking-tight">
                    {project.name}
                  </h4>
                  {project.period && (
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                      {project.period}
                    </p>
                  )}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition hover:border-foreground/30 hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                )}
              </header>

              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
