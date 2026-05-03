import Image from "next/image";
import { INTERESTS } from "@/lib/site";
import { withBasePath } from "@/lib/asset-path";

export function Interests() {
  return (
    <section
      id="interests"
      className="border-t border-border/60 bg-muted/20"
    >
      <div className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Outside work
          </h2>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            What keeps me going.
          </h3>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INTERESTS.map((interest) => (
            <li key={interest.title}>
              <article className="group relative h-64 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <Image
                  src={withBasePath(interest.image)}
                  alt={interest.title}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h4 className="text-base font-semibold tracking-tight">
                    {interest.title}
                  </h4>
                  <p className="mt-1 text-xs text-white/80">
                    {interest.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
