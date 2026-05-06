import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./utils/BackToTop";
import Skills from "./Components/Skills";
import Tech from "./Components/Tech";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
