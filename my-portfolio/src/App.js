import React from 'react';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { SkillsComponent } from './components/SkillsComponent';


function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Projects />
      <SkillsComponent />
      <Contact />
    </main>
  );
}

export default App;
