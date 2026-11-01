import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Focus from "@/components/Focus";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Focus />
        <Process />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t-2 border-ink bg-cream">
        <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-2 px-4 py-6 text-sm font-bold text-ink sm:flex-row sm:px-6">
          <p>© 2026 Gourav Murmu · Risk · Data · AI</p>
          <a href="#top" className="underline-offset-4 hover:underline">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
