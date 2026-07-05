import type { ReactNode } from "react";

/** A page section with consistent max-width, padding, and scroll offset. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 ${className}`}
    >
      {children}
    </section>
  );
}

/** Shell-prompt style section heading: `➜ ~/portfolio  <command>`. */
export function SectionHeading({
  command,
  title,
  meta,
}: {
  command: string;
  title: string;
  meta?: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-b border-border pb-4">
      <div>
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-up">➜</span>{" "}
          <span className="text-accent">~/portfolio</span>{" "}
          <span className="text-foreground">{command}</span>
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      {meta ? (
        <span className="font-mono text-xs text-muted-foreground">{meta}</span>
      ) : null}
    </div>
  );
}

/** Terminal "window" panel with traffic-light chrome and an optional titlebar. */
export function Panel({
  title,
  children,
  className = "",
  bodyClassName = "p-4 sm:p-5",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-border bg-surface/70 backdrop-blur-sm transition hover:border-border-strong ${className}`}
    >
      {title ? (
        <div className="flex items-center gap-2 border-b border-border bg-surface-2/50 px-3 py-2">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-down/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-up/70" />
          </span>
          <span className="ml-1 font-mono text-xs text-muted-foreground">{title}</span>
        </div>
      ) : null}
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

/** Small monospace tag/chip for tech stacks. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-border bg-surface-2/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}
