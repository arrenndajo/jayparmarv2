import React from "react";
import { Camera, Book } from "lucide-react";
import Reveal from "../Reveal";
import { link } from "framer-motion/client";

const OtherStuff: React.FC = () => {
  const activities = [
    {
      title: "Photography Website",
      description: "Capturing moments and telling stories through my lens.",
      icon: Camera,
      highlights: [
        "Travel Photography",
        "Street Photography",
      ],
      link: "https://jpphoto.vercel.app",
    },
    // {
    //   title: "Current Reads",
    //   description: "I love reading self-improvement books thru which I can change my life for the better.",
    //   icon: Book,
    //   highlights: ["48 Laws of Power", "Principles by Ray Dalio", "Atomic Habits"]
    // }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Other Stuff
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              My life beyond coding, and what makes me Me.
            </p>

            <div
              className={`grid ${
                activities.length === 1
                  ? "grid-cols-1 justify-items-center"
                  : "grid-cols-1 md:grid-cols-2"
              } gap-8`}
            >
              {activities.map((activity, index) => (
                <Reveal key={index} delay={0.2}>
                  <div className="glass rounded-xl p-6 card-hover max-w-md w-full">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                          <activity.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-3">
                          {activity.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {activity.description}
                        </p>
                        {activity.link && (
                          <a
                            href={activity.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium mb-4 transition-colors"
                          >
                            Visit my Photography Website →
                          </a>
                        )}
                        <div className="space-y-1">
                          {activity.highlights.map(
                            (highlight, highlightIndex) => (
                              <div
                                key={highlightIndex}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0"></span>
                                {highlight}
                              </div>
                            )
                          )}
                        </div>
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

export default OtherStuff;
