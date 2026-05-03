import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Certificates } from "@/components/certificates";
import { Interests } from "@/components/interests";
import { Volunteer } from "@/components/volunteer";
import { SITE } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  description: SITE.tagline,
  url: SITE.url,
  email: `mailto:${SITE.socials.email}`,
  sameAs: [
    SITE.socials.github,
    SITE.socials.linkedin,
    SITE.socials.leetcode,
    SITE.socials.instagram,
  ],
  worksFor: {
    "@type": "Organization",
    name: "Hudle",
  },
  knowsAbout: [
    "Full Stack Development",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Vue.js",
    "PHP",
    "Laravel",
    "MongoDB",
    "MySQL",
    "Fintech",
  ],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
        <Interests />
        <Volunteer />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
