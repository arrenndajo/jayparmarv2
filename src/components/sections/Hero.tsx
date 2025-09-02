import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  Download,
} from "lucide-react";
import Reveal from "../Reveal";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-repeat bg-center"
    >
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <Reveal>
          <div className="mb-8">
            <img
              src="jp.jpg"
              alt="Jay Parmar"
              className="w-40 h-40 md:w-64 md:h-64 rounded-full mx-auto object-cover border-2 border-gray-600"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="text-3xl md:text-4xl font-medium mb-4 text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent font-bold">
              Jay Parmar
            </span>{" "}
            👨🏻‍💻
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Full Stack Software Engineer
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex items-center justify-center mb-8">
            <span className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium border border-gray-700 flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 w-full max-w-md mx-auto">
            <a href="#experience" className="w-full sm:flex-1 h-14">
              {/* <button className="hero-button w-full h-full flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors justify-center">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience</span>
              </button> */}
              <button className="hero-button w-full h-full flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors justify-center whitespace-nowrap">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience</span>
              </button>
            </a>

            <a
              href="/Jay-Parmar-Resume.pdf"
              download
              className="w-full sm:flex-1 h-14"
            >
              <button className="glass hero-button w-full h-full flex items-center space-x-2 px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors justify-center">
                <Download className="w-4 h-4" />
                <span>Résumé</span>
              </button>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/arrenndajo" target="_blank" rel="noopener noreferrer"
              className="glass p-3 bg-gray-800/50 rounded-full social-icon social-github transition-all duration-300 border border-gray-700"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/arrenndajo/" target="_blank" rel="noopener noreferrer"
              className="glass p-3 bg-gray-800/50 rounded-full social-icon social-linkedin transition-all duration-300 border border-gray-700"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="jhb9204@gmail.com" target="_blank" rel="noopener noreferrer"
              className="glass p-3 bg-gray-800/50 rounded-full social-icon social-email transition-all duration-300 border border-gray-700"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
