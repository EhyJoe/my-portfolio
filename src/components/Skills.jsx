import React from 'react';
import { skills } from '../data/projects';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="text-gray-700 font-mono text-sm bg-gray-50 px-3 py-2 rounded-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I continuously learn and adapt to new technologies, staying current with 
              modern frontend development practices and industry standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;