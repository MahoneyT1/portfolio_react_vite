import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './HeroSection/HeroSection.jsx';
import About from './About/About';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects.jsx';
import Skills from './Skills/Skills.jsx';
import Experience from './Experience/Experience.jsx';
import Contact from './Contact/Contact.jsx'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Main = () => {
  const location = useLocation(); // Detects route change

  useEffect(() => {

    if (location.hash) {
      const targetId = location.hash.substring(1);
      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });  // Scrolls smoothly to section
      };
    }
  }, [location]);

  return (
    <main className="container-fluid w-100 min-vh-100 p-0">
      
      <section className="w-100 py-5" id='hero'>
        <HeroSection />
      </section>

      {/* About Section */}
      <section className="w-100 h-100" id='about'>
        <About />
      </section>

      {/* Featured Projects Section */}
      <section className="w-100 " id="projects">
        <FeaturedProjects />
      </section>

      {/* Skills Section */}
      <section className="w-100 h-50 my-3 " id='skills'>
        <Skills />
      </section>

      <section className="w-100 h-75 my-5" id='experience'>
        <Experience/>
      </section>

      <section className='w-100' id='contact'>
        <Contact/>
      </section>
    </main>
  );
};

export default Main;