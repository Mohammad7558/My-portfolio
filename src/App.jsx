import "./App.css";
import Header from "../src/Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Skills/>
      <Project/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
