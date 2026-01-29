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
                I'm a passionate frontend developer with a strong foundation in modern 
                web technologies. My approach focuses on writing clean, maintainable code 
                that delivers exceptional user experiences.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With expertise in React and Tailwind CSS, I specialize in building 
                responsive, accessible web applications that work seamlessly across all 
                devices and browsers.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe in the power of semantic HTML, component-driven architecture, 
                and mobile-first design principles to create web experiences that are 
                both beautiful and functional.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Frontend Focus Areas
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
                  Performance Optimization
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Accessibility Standards
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                  Cross-browser Compatibility
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