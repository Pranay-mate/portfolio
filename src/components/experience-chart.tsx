"use client";

import { useInView } from "@/lib/hooks";

type Item = { year: string; company: string; current?: boolean };

/** An upward "career" line chart that draws itself in when scrolled into view. */
export function ExperienceChart({ items }: { items: Item[] }) {
  const { ref, inView } = useInView<SVGSVGElement>({ threshold: 0.35 });

  const W = 640;
  const H = 240;
  const padX = 52;
  const padTop = 40;
  const padBottom = 48;
  const n = items.length;
  const span = Math.max(1, n - 1);

  const x = (i: number) => padX + (i * (W - padX * 2)) / span;
  const y = (i: number) => H - padBottom - (i * (H - padTop - padBottom)) / span;
  const pts = items.map((it, i) => ({ ...it, x: x(i), y: y(i) }));

  const line = pts
    .map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");
  const area =
    `M${pts[0].x},${H - padBottom} ` +
    pts.map((p) => `L${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") +
    ` L${pts[n - 1].x},${H - padBottom} Z`;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      role="img"
      aria-label="Career progression over time"
    >
      <defs>
        <linearGradient id="exp-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.26" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* horizontal guide lines */}
      {[0.25, 0.5, 0.75].map((f) => {
        const gy = padTop + f * (H - padTop - padBottom);
        return (
          <line
            key={f}
            x1={padX}
            x2={W - padX}
            y1={gy}
            y2={gy}
            stroke="var(--border)"
            strokeDasharray="3 6"
            strokeWidth="1"
          />
        );
      })}

      {/* area fill */}
      <path
        d={area}
        fill="url(#exp-area)"
        style={{ opacity: inView ? 1 : 0, transition: "opacity .8s .7s ease" }}
      />

      {/* the line — normalized pathLength lets us draw it regardless of length */}
      <path
        d={line}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: inView ? 0 : 1,
          transition: "stroke-dashoffset 1.6s cubic-bezier(.16,1,.3,1)",
        }}
      />

      {/* nodes + labels */}
      {pts.map((p, i) => (
        <g
          key={`${p.company}-${i}`}
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity .45s ${(0.9 + i * 0.22).toFixed(2)}s ease`,
          }}
        >
          {p.current ? (
            <circle cx={p.x} cy={p.y} r="11" fill="var(--accent)" opacity="0.18" />
          ) : null}
          <circle
            cx={p.x}
            cy={p.y}
            r="5"
            fill="var(--background)"
            stroke="var(--accent)"
            strokeWidth="2.5"
          />
          <text
            x={p.x}
            y={p.y - 15}
            textAnchor="middle"
            className="font-mono"
            fontSize="12.5"
            fontWeight="600"
            style={{ fill: "var(--foreground)" }}
          >
            {p.company}
          </text>
          <text
            x={p.x}
            y={H - padBottom + 22}
            textAnchor="middle"
            className="font-mono"
            fontSize="11"
            style={{ fill: "var(--muted-foreground)" }}
          >
            {p.year}
          </text>
        </g>
      ))}
    </svg>
  );
}
