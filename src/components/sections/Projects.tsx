import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Reveal from "../Reveal";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Expense Tracker Web App",
      description:
        "Expense Tracker web app solution built with React and Tailwind CSS. Features include analytics, detailed report of your spending.",
      tech: ["React", "Tailwind CSS"],
      image: "/ExpenseTrackerApp.png",
      github: "https://github.com/arrenndajo/ExpenseTrackerWebApp",
      live: "https://expensetrackerwebappjp.netlify.app/",
    },
    {
      title: "Donezo To-Do List",
      description:
        "A Basic To-Do List Web App using HTML, CSS & JavaScript. Featuring local storage, and buttons like add, delete, mark complete.",
      tech: ["HTML CSS JS", "Firebase"],
      image: "/DonezoToDoList.png",
      github: "https://github.com/arrenndajo/Donezo-To-Do-List",
      live: "https://donezo.web.app/",
    },
    {
      title: "Weather Dashboard",
      description:
        "A calculator app using HTML, CSS & JavaScript. Made it similar to iOS Calculator App.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/CalcifyCalculator.png",
      github: "https://github.com/arrenndajo/Calcify-calculator",
      live: "https://arrenndajo.github.io/Calcify-calculator/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Reveal key={index} delay={0.2}>
                  <div className="glass rounded-xl overflow-hidden card-hover group">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-md text-xs font-medium border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          <Github size={16} />
                          <span>GitHub Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
