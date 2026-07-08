import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { SITE, SKILLS, PROJECTS } from "@/lib/site";
import { withBasePath } from "@/lib/asset-path";
import { CountUp } from "./count-up";
import { Section } from "./ui";

const techCount = Object.values(SKILLS).flat().length;

const KPIS = [
  { label: "YRS EXPERIENCE", to: 5, suffix: "+" },
  { label: "PROJECTS SHIPPED", to: PROJECTS.length, suffix: "" },
  { label: "LEETCODE SOLVED", to: SITE.leetcodeSolved, suffix: "+" },
  { label: "TECHNOLOGIES", to: techCount, suffix: "" },
] as const;

function KpiTile({
  label,
  to,
  suffix,
}: {
  label: string;
  to: number;
  suffix: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface/70 p-4 backdrop-blur-sm transition hover:border-border-strong">
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <CountUp
          to={to}
          suffix={suffix}
          className="font-mono text-3xl font-semibold tabular-nums text-foreground sm:text-4xl"
        />
        <span className="font-mono text-xs text-up" aria-hidden>
          ▲
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const first = SITE.name.split(" ")[0];
  const last = SITE.name.split(" ").slice(1).join(" ");

  return (
    <section id="top">
      <Section className="pt-14 sm:pt-16">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-up">➜</span>{" "}
          <span className="text-accent">~</span> whoami
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
          {first}{" "}
          <span className="text-accent caret">{last}</span>
        </h1>

        <p className="mt-4 font-mono text-base text-muted-foreground sm:text-lg">
          {SITE.role} ·{" "}
          <span className="text-foreground">fintech</span> &amp;{" "}
          <span className="text-foreground">sports-tech</span> ·{" "}
          <span className="text-foreground">{SITE.location}</span>
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {SITE.bio[0]}{" "}I care about clean code, accurate math, and
          interfaces that don&apos;t fight the user.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            ./view --projects
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={`mailto:${SITE.socials.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 font-mono text-sm transition hover:border-border-strong hover:text-foreground"
          >
            <Mail className="h-4 w-4" aria-hidden />
            hire()
          </a>
          <a
            href={withBasePath(SITE.resumeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 font-mono text-sm transition hover:border-border-strong hover:text-foreground"
          >
            <FileText className="h-4 w-4" aria-hidden />
            resume.pdf
          </a>
        </div>

        {/* KPI band */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {KPIS.map((k) => (
            <KpiTile key={k.label} label={k.label} to={k.to} suffix={k.suffix} />
          ))}
        </div>
      </Section>
    </section>
  );
}
