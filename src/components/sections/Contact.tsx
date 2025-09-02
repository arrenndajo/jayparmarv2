import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Reveal from "../Reveal";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jhb9204@gmail.com",
      href: "mailto:jhb9204@gmail.com"
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 pb-40 md:pb-20">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Let's discuss some projects or just say hello. I'm open to new opportunities!
            </p>

            <div className="max-w-2xl mx-auto">
              {/* Contact Information */}
              <Reveal delay={0.2}>
                <div className="space-y-8 text-center">
                  
                  <div className="space-y-6 max-w-md mx-auto">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-lg">{info.label}</p>
                          <a 
                            href={info.href}
                            className="text-white hover:text-orange-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;