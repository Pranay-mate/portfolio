import { ArrowUpRight } from "lucide-react";
import { CERTIFICATES } from "@/lib/site";
import { Section, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

export function Certificates() {
  return (
    <Section id="certificates">
      <SectionHeading command="cat certs/*.pem" title="Certificates" />

      <ul className="grid gap-4 sm:grid-cols-3">
        {CERTIFICATES.map((cert, i) => (
          <li key={cert.name}>
            <Reveal delay={i * 70}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface/70 backdrop-blur-sm transition hover:border-accent/50"
              >
                <div className="relative overflow-hidden border-b border-border px-5 py-8">
                  <div
                    aria-hidden
                    className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${cert.gradient} opacity-25 blur-2xl transition group-hover:opacity-40`}
                  />
                  <span className="relative font-mono text-4xl font-bold tracking-tight text-accent">
                    {cert.short}
                  </span>
                </div>
                <div className="flex flex-1 items-start justify-between gap-2 p-4">
                  <div>
                    <p className="text-sm font-semibold leading-tight">
                      {cert.name}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-accent"
                    aria-hidden
                  />
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
