import { ExternalLink, Award } from "lucide-react";
import { CERTIFICATES } from "@/lib/site";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="mb-10 max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Certificates
        </h2>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Continuous learning.
        </h3>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATES.map((cert) => (
          <li key={cert.name}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:border-foreground/20 hover:shadow-md"
            >
              <div
                className={`relative aspect-[4/3] w-full bg-gradient-to-br ${cert.gradient}`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-between p-4 text-white">
                  <Award className="h-5 w-5 opacity-80" aria-hidden />
                  <span className="font-mono text-3xl font-bold leading-none tracking-tight drop-shadow-sm">
                    {cert.short}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-start justify-between gap-2 p-4">
                <div>
                  <p className="text-sm font-semibold leading-tight">
                    {cert.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
                <ExternalLink
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground"
                  aria-hidden
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
