import { BackgroundFX } from "@/components/portfolio/background-fx";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Expertise } from "@/components/portfolio/expertise";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience } from "@/components/portfolio/experience";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
