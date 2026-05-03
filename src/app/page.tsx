import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />

        {/* Phase 4+ sections will land here:
            <Projects />, <Skills />, <Certificates />, <Interests />, <Volunteer /> */}
        <section
          id="projects"
          className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24"
        >
          <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-10 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Coming next
            </p>
            <p className="mt-2 text-lg font-medium">
              Projects, skills, certificates and more — shipping in the next
              update.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
