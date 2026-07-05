import Image from "next/image";
import { SITE, EDUCATION } from "@/lib/site";
import { withBasePath } from "@/lib/asset-path";
import { Section, SectionHeading, Panel } from "./ui";
import { Reveal } from "./reveal";

const FACTS: [string, string][] = [
  ["role", SITE.role],
  ["location", SITE.location],
  ["focus", "fintech · sports-tech"],
  ["degree", EDUCATION[0].degree.replace("Bachelor of Engineering, ", "B.E. ")],
  ["email", SITE.socials.email],
  ["status", "open to work"],
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading command="cat about.md" title="About" />
      <div className="grid gap-6 md:grid-cols-[200px_1fr] md:items-start">
        <Reveal>
          <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-lg border border-border sm:w-48 md:w-full">
            <Image
              src={withBasePath("/img/mine_img.jpeg")}
              alt={`Portrait of ${SITE.name}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 12rem, 200px"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/15" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Panel title="~/profile.json">
            <p className="leading-relaxed text-muted-foreground">{SITE.bio[1]}</p>
            <dl className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 font-mono text-sm sm:grid-cols-2">
              {FACTS.map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <dt className="shrink-0 text-accent">{k}:</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}
