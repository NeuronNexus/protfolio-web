import React from 'react';

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar initials={config.personal.initials} navItems={navItems} />
      
      <main>
        <Hero name={config.personal.name} tagline={config.personal.tagline} />
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