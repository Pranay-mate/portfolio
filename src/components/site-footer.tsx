import { ArrowUpRight, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { Section } from "./ui";

const COMMANDS = [
  { cmd: "mail", value: SITE.socials.email, href: `mailto:${SITE.socials.email}` },
  { cmd: "gh", value: "github.com/Pranay-mate", href: SITE.socials.github },
  { cmd: "in", value: "linkedin.com/in/pranay-mate-arvind", href: SITE.socials.linkedin },
  { cmd: "lc", value: "leetcode.com/PranayMate", href: SITE.socials.leetcode },
  { cmd: "ig", value: "instagram.com/pranay_mate", href: SITE.socials.instagram },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-border">
      <Section className="py-16 sm:py-20">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-up">➜</span>{" "}
          <span className="text-accent">~/portfolio</span> ./contact
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&apos;s build something<span className="caret" />
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Open to interesting work — fintech, sports-tech, or anything with hard
          problems worth solving. Fastest way to reach me:
        </p>

        <div className="mt-6 max-w-xl overflow-hidden rounded-lg border border-border bg-surface/70 backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-border bg-surface-2/50 px-3 py-2">
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-down/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-up/70" />
            </span>
            <span className="ml-1 font-mono text-xs text-muted-foreground">
              connect — pick a channel
            </span>
          </div>
          <ul className="divide-y divide-border font-mono text-sm">
            {COMMANDS.map(({ cmd, value, href }) => (
              <li key={cmd}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 transition hover:bg-surface-2/60"
                >
                  <span className="text-accent">$</span>
                  <span className="w-14 shrink-0 text-foreground">{cmd}</span>
                  <span className="flex-1 truncate text-muted-foreground group-hover:text-foreground">
                    {value}
                  </span>
                  {cmd === "mail" ? (
                    <Mail className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent" aria-hidden />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent" aria-hidden />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          <span>
            © {year} {SITE.name}
          </span>
          <span>
            built with next.js + tailwind ·{" "}
            <a
              href={SITE.socials.github + "/portfolio"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline decoration-border-strong underline-offset-2 transition hover:text-accent"
            >
              source
            </a>
          </span>
        </div>
      </Section>
    </footer>
  );
}
