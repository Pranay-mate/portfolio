import Image from "next/image";
import { SITE } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
        <div className="mx-auto lg:mx-0">
          <div className="relative h-[260px] w-[260px] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
            <Image
              src="/img/mine_img.jpeg"
              alt={`Portrait of ${SITE.name}`}
              fill
              priority
              sizes="260px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            About me
          </h2>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Building useful software for 3+ years.
          </h3>

          <div className="mt-6 space-y-4 text-base text-muted-foreground sm:text-lg">
            {SITE.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border/60 pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Currently
              </dt>
              <dd className="mt-1 text-sm font-medium">Hudle, Mumbai</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Focus
              </dt>
              <dd className="mt-1 text-sm font-medium">
                Full-stack TS / Node / React
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                LeetCode
              </dt>
              <dd className="mt-1 text-sm font-medium">
                <a
                  href={SITE.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-muted-foreground/50 underline-offset-4 hover:decoration-foreground"
                >
                  {SITE.leetcodeSolved}+ solved
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
