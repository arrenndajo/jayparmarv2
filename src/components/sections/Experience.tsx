import React, { useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Reveal from "../Reveal";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Web Development Project Intern",
      company: "Prodigy InfoTech",
      location: "Mumbai, India",
      duration: "Feb 2024 - Feb 2024",
      type: "Internship",
      description:
        "Developed and maintained a weather web app using Web frameworks.",
      achievements: [
        "Developed WeatherHub, a weather app that provides real-time city-specific weather updates creating a responsive interface and improving user engagement with fast and intuitive navigation.",
        "Integrated Rapid API to fetch real-time weather data using JavaScript’s asynchronous functionality, reducing data retrieval time by 30%.",
        "Optimized website responsiveness using Bootstrap, ensuring seamless user experience across 90% of tested devices.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Exposys Data Labs",
      location: "Mumbai, India",
      duration: "Dec 2023 - Jan 2024",
      type: "Internship",
      description:
        "I worked on analyzing real-world datasets, building basic machine learning models, and visualizing insights using Python to support data-driven decisions.",
      achievements: [
        "Analyzed and preprocessed real-world datasets using Python (Pandas, NumPy) to extract meaningful insights through exploratory data analysis.",
        "Built and evaluated basic machine learning models using Scikit-learn to understand patterns and improve prediction accuracy.",
        "Created clear data visualizations and summary reports using Matplotlib and Seaborn to communicate insights effectively.",
      ],
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              My professional journey and career highlights
            </p>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Reveal key={index} delay={0.2}>
                  <div
                    onClick={() =>
                      setVisibleIndex(visibleIndex === index ? null : index)
                    }
                    className={`glass rounded-xl p-6 card-hover cursor-pointer transition-all duration-200 ${
                      visibleIndex === index ? "bg-gray-700" : ""
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-gray-300 font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-col items-start md:items-end text-sm text-gray-400 mt-2 md:mt-0">
                            <div className="flex items-center mb-1">
                              <Calendar size={14} className="mr-1" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center mb-1">
                              <MapPin size={14} className="mr-1" />
                              {exp.location}
                            </div>
                            <span className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-700">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        {visibleIndex === index && (
                          <>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                              {exp.description}
                            </p>

                            <div>
                              <h4 className="text-white font-medium mb-2">
                                Key Achievements:
                              </h4>
                              <ul className="space-y-1 list-disc list-inside text-gray-400 text-sm">
                                {exp.achievements.map(
                                  (achievement, achievementIndex) => (
                                    <li key={achievementIndex}>{achievement}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </>
                        )}
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

export default Experience;
