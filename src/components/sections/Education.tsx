import React, { useState } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import Reveal from "../Reveal";

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science Engineering",
      institution: "K. J. Somaiya Institute of Technology",
      location: "Mumbai, India",
      duration: "2020 - 2024",
      gpa: "8.47/10",
      description:
        "Coursework: Data Structures & Algorithm, Operating Systems, Computer Architecture, DBMS, AI/ML, NLP, Software Engineering, IoT, Threat Analysis & Modeling, Data Analytics & Visualization, Data Mining, Data Warehousing, AI in Healthcare, and AI in E-Commerce.",
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  return (
    <section id="education" className="py-20 px-4 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              My academic journey and learning experiences
            </p>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Reveal key={index} delay={0.2}>
                  <div
                    onClick={() =>
                      setVisibleIndex(visibleIndex === index ? null : index)
                    }
                    className="glass rounded-xl p-6 card-hover rounded-xl border-2 border-gray-700 shadow flex flex-col md:flex-row gap-6 p-6 cursor-pointer transition-all duration-200"
                  >
                    <div className="flex-shrink-0 self-start">
                      <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center shadow-md">
                        <GraduationCap className="w-7 h-7 text-gray-300" />
                      </div>
                    </div>
                    <div className="flex-grow space-y-2">
                      {/* Minimal text layout */}
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-gray-200">{edu.field}</p>
                      <span className="block text-base text-gray-400 font-medium mb-1">
                        {edu.institution}
                      </span>

                      {/* Tags Row */}
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="inline-flex items-center px-2 py-1 bg-gray-900/30 text-gray-300 rounded-full text-xs font-medium border border-gray-700">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.duration}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 bg-gray-900/30 text-gray-300 rounded-full text-xs font-medium border border-gray-700">
                          GPA:
                          <span className="ml-1 font-semibold">{edu.gpa}</span>
                        </span>
                        <span className="inline-flex items-center px-2 py-1 bg-gray-900/30 text-gray-300 rounded-full text-xs shadow border border-gray-700">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </span>
                      </div>
                      {visibleIndex === index && (
                        <p className="mt-5 text-gray-200 text-gray-400 leading-relaxed rounded-xl bg-gray-900/60 p-4 border border-gray-800 shadow-sm">
                          {edu.description}
                        </p>
                      )}
                      <div className="text-right text-xs text-gray-500 mt-1 select-none italic">
                        {visibleIndex === index
                          ? "Click to hide details"
                          : "Click for more details"}
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

export default Education;
