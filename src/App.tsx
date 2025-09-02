import React from 'react';
import ProgressBar from './components/ProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import OtherStuff from './components/sections/OtherStuff';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen min-height: 100vh grainy-bg text-white overflow-x-hidden">
      <ProgressBar />
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Education />
        <Experience />
        <Contact />
        <OtherStuff />
      </main>

      <footer className="glass py-12 px-4 border-t border-gray-800 pb-20 md:pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                <a href="#education" className="block text-gray-400 hover:text-white transition-colors">Education</a>
                <a href="#experience" className="block text-gray-400 hover:text-white transition-colors">Experience</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="https://jpphoto.vercel.app" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">Photography</a>
                <a href="https://github.com/arrenndajo" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/arrenndajo/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Location</h4>
              <p className="text-gray-400">Mumbai, India</p>
            </div>
          </div>
          <p className="text-gray-400">
            © 2025 Jay Parmar. All rights reserved.
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

export default App;