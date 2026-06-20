import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tippsy } from "@/components/Tippsy";
import { FUH } from "@/components/FUH";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Tippsy />
        <FUH />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
