import { Mail, Code2 } from "lucide-react";
import { SITE } from "@/lib/site";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.99 10.99 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const LINKS = [
  { Icon: Mail, href: `mailto:${SITE.socials.email}`, label: "Email" },
  { Icon: GithubIcon, href: SITE.socials.github, label: "GitHub" },
  { Icon: LinkedinIcon, href: SITE.socials.linkedin, label: "LinkedIn" },
  { Icon: Code2, href: SITE.socials.leetcode, label: "LeetCode" },
] as const;

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t border-border/60 bg-muted/20"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              Let&apos;s talk.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Open to interesting work. Reach out at{" "}
              <a
                href={`mailto:${SITE.socials.email}`}
                className="font-medium text-foreground underline decoration-muted-foreground/50 underline-offset-4 transition hover:decoration-foreground"
              >
                {SITE.socials.email}
              </a>
              .
            </p>
          </div>

          <ul className="flex items-center gap-2">
            {LINKS.map(({ Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition hover:border-foreground/30 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SITE.name}. Built with Next.js +
          Tailwind. Source on{" "}
          <a
            href={SITE.socials.github + "/portfolio"}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
