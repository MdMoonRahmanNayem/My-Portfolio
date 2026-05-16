import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Education />

      <Experience />

      <Contact />

      <Footer />

    </div>
  )
}

export default App