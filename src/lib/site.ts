/**
 * Single source of truth for the entire portfolio's content.
 * Update anything here — the change propagates everywhere.
 */

export const SITE = {
  name: "Pranay Mate",
  role: "Senior Full Stack Developer",
  tagline:
    "Senior Full Stack Developer building thoughtful fintech and sports-tech products.",
  bio: [
    "Senior Full Stack Developer with 5+ years building production fintech and sports-tech applications. Currently shipping at Hudle.",
    "I care about clean code, accurate math, and interfaces that don't fight the user. Most of my work lives at the intersection of TypeScript, Node, and modern React.",
  ],
  location: "Mumbai, India",
  resumeUrl:
    "https://drive.google.com/file/d/1SKijywhUb2FPOff9qOMcqB1oiIo3HZ2b/view?usp=sharing",
  socials: {
    email: "matepranay11@gmail.com",
    github: "https://github.com/Pranay-mate",
    linkedin: "https://www.linkedin.com/in/pranay-mate-arvind",
    instagram: "https://www.instagram.com/pranay_mate?r=nametag",
    leetcode: "https://leetcode.com/PranayMate/",
  },
  leetcodeSolved: 400, // shown as "400+ problems"
  url: "https://pranay-mate.github.io/portfolio",
  basePath: "/portfolio",
  ogLocale: "en_IN",
} as const;

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering, Information Technology",
    school: "Konkan Gyanpeeth College of Engineering",
    university: "Mumbai University",
    period: "2017 — 2022",
    grade: "CGPA 7.57",
  },
] as const;

type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
  tech: readonly string[];
  current: boolean;
};

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    role: "Full Stack Developer",
    company: "Hudle",
    period: "Sep 2022 — Present",
    summary:
      "Building Hudle's web and mobile platforms for the sports-tech space. Working across the stack on payments, partner tooling, and the user-facing booking experience.",
    tech: ["TypeScript", "NestJS", "VueJS", "Node.js", "MySQL"],
    current: true,
  },
  {
    role: "Web Developer",
    company: "AppInSource",
    period: "Nov 2020 — Apr 2022",
    summary:
      "Shipped fintech applications as part of a small team. Contributed to three production projects on PHP / Laravel with Oracle as the data layer.",
    tech: ["PHP", "Laravel", "Oracle"],
    current: false,
  },
  {
    role: "Web Developer",
    company: "Freelancer",
    period: "Aug 2020",
    summary:
      "Built a personal portfolio website for a client showcasing their work and credentials.",
    tech: ["HTML", "CSS", "JavaScript"],
    current: false,
  },
];

export type Project = {
  name: string;
  description: string;
  tech: readonly string[];
  url?: string;
  period?: string;
};

export const PROJECTS: readonly Project[] = [
  {
    name: "EasySplits",
    description:
      "Two-product PWA: Splitwise-style group splitter + personal finance tracker with a 5-pillar Financial Health Scorecard. Offline-first (IndexedDB sync queue, AES-256-GCM at-rest encryption), bank-statement CSV import (HDFC/SBI/ICICI), EMI amortisation projection, multi-currency, push notifications. 315 unit tests, Mumbai-region.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "tRPC v11",
      "Drizzle",
      "Supabase",
      "Tailwind v4",
      "PWA",
    ],
    url: "https://easy-split-payments.vercel.app",
    period: "2026",
  },
  {
    name: "Rupeeful",
    description:
      "Free financial calculators and long-form guides for Indian investors. 17 calculators (SIP, FIRE, tax-optimal SWP, income tax, etc.) and 11 in-depth articles. Built with Next.js, perfect Lighthouse score.",
    tech: ["Next.js", "TypeScript", "Tailwind v4", "Vercel"],
    url: "https://rupeeful.vercel.app",
    period: "2026",
  },
  {
    name: "AI Resume Builder",
    description:
      "Interactive web app that helps users build a resume and scores it. Final-year project shipped to production using the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    url: "https://pranay-mate.github.io/Final_year/index.html",
    period: "2021",
  },
  {
    name: "Easy Books",
    description:
      "Responsive book-subscription web app built in AngularJS. Clean component structure, mobile-first design.",
    tech: ["AngularJS", "HTML", "CSS"],
    url: "https://pranay-mate.github.io/easyBooks/",
    period: "Aug 2020",
  },
];

export const SKILLS = {
  Frontend: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Vue.js",
    "Tailwind CSS",
    "Bootstrap",
    "jQuery",
  ],
  Backend: ["Node.js", "NestJS", "PHP", "Laravel"],
  Data: ["MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "BitBucket"],
} as const;

type Certificate = {
  name: string;
  short: string;
  issuer: string;
  url: string;
  /** Brand gradient — Tailwind class names. Looks sharp at any size. */
  gradient: string;
};

export const CERTIFICATES: readonly Certificate[] = [
  {
    name: "MERN Stack Specialization",
    short: "MERN",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/6BCDW9XJBV4F",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    name: "Building Web Applications in PHP",
    short: "PHP",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/969A53T9CP65",
    gradient: "from-indigo-500 via-violet-500 to-purple-500",
  },
  {
    name: "AngularJS",
    short: "Angular",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/AT5JH4BCU5G3",
    gradient: "from-red-500 via-rose-500 to-pink-500",
  },
];

type Interest = {
  title: string;
  description: string;
  /** Tailwind gradient classes for the card background. */
  gradient: string;
  /** lucide-react icon name (selected from the import map in interests.tsx). */
  icon: "Code2" | "Dumbbell" | "Mountain" | "Tv";
};

export const INTERESTS: readonly Interest[] = [
  {
    title: "Code",
    description: "Most days, this is where you'll find me.",
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    icon: "Code2",
  },
  {
    title: "Fitness",
    description: "When not at the keyboard, I'm at the gym.",
    gradient: "from-orange-500 via-rose-500 to-red-500",
    icon: "Dumbbell",
  },
  {
    title: "Trekking",
    description: "Hilltops are the best way to reset.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: "Mountain",
  },
  {
    title: "Binge-watching",
    description: "Catching up on shows that punch above their weight.",
    gradient: "from-slate-700 via-slate-800 to-slate-900",
    icon: "Tv",
  },
];

export const VOLUNTEER = [
  {
    role: "Sports Coordinator",
    organisation: "Information Technology Student Association (ITSA)",
    period: "2018 — 2019",
    summary:
      "Coordinated inter-departmental sports events. Practised leadership, teamwork, and crisis decision-making at scale.",
  },
] as const;
