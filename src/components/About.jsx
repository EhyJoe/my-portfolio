import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a frontend-focused web developer with growing full-stack experience.
                My work starts with clean, responsive interfaces, but I also build the
                backend pieces that make websites useful, such as admin panels, contact
                forms, content controls, dashboards, and API-powered features.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With React, Tailwind CSS, JavaScript, and modern tooling, I create
                web applications that feel polished on the surface and practical behind
                the scenes. I care about the details users see and the data flows that
                support them.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I enjoy building systems for real organisations: churches, nonprofits,
                property teams, commerce brands, and media platforms. The goal is always
                the same: reliable tools that are easy to use, easy to manage, and ready
                to grow.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Focus Areas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Component Architecture
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Responsive Design
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  API Integration
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Admin Dashboards
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Content & Data Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
