import Footer from "../components/Footer";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Contact from "./Contact";
import Projects from "./Projects";
import UniProjects from "./UniProjects";

export default function Index() {
  return (
    <>
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <UniProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
