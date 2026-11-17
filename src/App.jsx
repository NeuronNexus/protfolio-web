import React from 'react';
import { TypeAnimation } from 'react-type-animation'; // <-- ADDED THIS IMPORT

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contacts';

// Data
import { config } from './data/config';
import { education } from './data/education';
import { projects } from './data/projects';
import { skills } from './data/skills';

export default function App() {
  const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

  // --- ANIMATED TAGLINE ---
  // We create the animation component here
  const animatedTagline = (
    <TypeAnimation
      sequence={[
        'Full Stack Developer',
        1000, // wait 1s
        'ML Enthusiast',
        1000, // wait 1s
        'DevOps Engineer',
        1000, // wait 1s
        'Software Generalist with Full Stack Expertise & a Data Science Core',
        3000, // wait 3s before repeating
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
  // --- END OF ANIMATED TAGLINE ---

  return (
    <div className="min-h-screen bg-white">
      <Navbar initials={config.personal.initials} navItems={navItems} />
      
      <main>
        {/* --- MODIFIED THIS LINE --- */}
        <Hero name={config.personal.name} tagline={animatedTagline} />
        {/* --- END OF MODIFICATION --- */}
        
        <About bio={config.personal.bio} />
        <Education educationData={education} />
        <Skills skillsData={skills} />
        <Projects projectsData={projects} />
        <Contact 
          email={config.personal.email} 
          linkedin={config.social.linkedin} 
          github={config.social.github}
        />
      </main>

      <Footer name={config.personal.name} />
    </div>
  );
}