import React, { useState, useEffect } from 'react';
import { Home, FolderOpen, GraduationCap, Briefcase, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: Home, id: 'home' },
    { label: 'Projects', href: '#projects', icon: FolderOpen, id: 'projects' },
    { label: 'Education', href: '#education', icon: GraduationCap, id: 'education' },
    { label: 'Experience', href: '#experience', icon: Briefcase, id: 'experience' },
    { label: 'Contact', href: '#contact', icon: Mail, id: 'contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navbar - Top */}
      <nav className={`hidden md:block fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-14">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center space-x-2 ${
                    activeSection === item.id 
                      ? 'text-orange-400 bg-orange-500/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Bottom Fixed */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
        <div className="flex items-center justify-around py-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`p-2 text-xs font-medium transition-all duration-300 flex-1 text-center flex flex-col items-center space-y-1 ${
                activeSection === item.id 
                  ? 'text-orange-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <item.icon size={16} />
              <span className="text-[11px]">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;