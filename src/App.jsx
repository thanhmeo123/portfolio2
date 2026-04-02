import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Project from "./components/Project";
import BackToTopButton from "./components/BackToTop";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-neutral-300 antialiased selection:bg-neutral-800 selection:text-white">
      {/* Sleek Minimalist Background Effect */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(0,0,0,0))] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl pb-20">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
      <BackToTopButton />
    </div>
  );
};

export default App;
