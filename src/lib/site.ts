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
    role: "Freelance Web Developer",
    company: "Independent",
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
  {
    name: "Fitness Freak",
    description:
      "Responsive e-commerce site built on WordPress, optimised around real fitness-shopper user journeys.",
    tech: ["WordPress", "WooCommerce"],
    url: "https://explore431603904.wordpress.com/",
    period: "Jul 2020",
  },
];

export const SKILLS = {
  Frontend: [
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Tailwind CSS",
    "JavaScript",
  ],
  Backend: ["Node.js", "NestJS", "PHP", "Laravel", "Express"],
  Data: ["MySQL", "MongoDB", "Mongoose", "Oracle"],
  Tools: ["Git", "GitHub", "BitBucket", "Bootstrap", "jQuery"],
} as const;

export const CERTIFICATES = [
  {
    name: "MERN Stack Specialization",
    issuer: "Coursera",
    image: "/img/MERN.jpeg",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/6BCDW9XJBV4F",
  },
  {
    name: "Building Web Applications in PHP",
    issuer: "Coursera",
    image: "/img/PHP.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/969A53T9CP65",
  },
  {
    name: "WordPress Web Application Development",
    issuer: "Coursera",
    image: "/img/Wordpress.jpeg",
    url: "https://www.coursera.org/account/accomplishments/certificate/Y7KPJM96RDW3",
  },
  {
    name: "AngularJS",
    issuer: "Coursera",
    image: "/img/angular.jpg",
    url: "https://www.coursera.org/account/accomplishments/certificate/AT5JH4BCU5G3",
  },
] as const;

export const INTERESTS = [
  {
    title: "Code",
    description: "Most days, this is where you'll find me.",
    image: "/img/code.jpeg",
  },
  {
    title: "Fitness",
    description: "When not at the keyboard, I'm at the gym.",
    image: "/img/fitness.jpeg",
  },
  {
    title: "Trekking",
    description: "Hilltops are the best way to reset.",
    image: "/img/trek.jpg",
  },
  {
    title: "Binge-watching",
    description: "Catching up on shows that punch above their weight.",
    image: "/img/netflix.png",
  },
] as const;

export const VOLUNTEER = [
  {
    role: "Sports Coordinator",
    organisation: "Information Technology Student Association (ITSA)",
    period: "2018 — 2019",
    summary:
      "Coordinated inter-departmental sports events. Practised leadership, teamwork, and crisis decision-making at scale.",
  },
] as const;
