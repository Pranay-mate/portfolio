import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { CERTIFICATES } from "@/lib/site";
import { withBasePath } from "@/lib/asset-path";

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
              <div className="relative aspect-[4/3] w-full bg-muted">
                <Image
                  src={withBasePath(cert.image)}
                  alt={`${cert.name} certificate`}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition group-hover:scale-105"
                />
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
