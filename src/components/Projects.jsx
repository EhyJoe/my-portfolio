import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            A selection of recent work showcasing frontend development skills 
            across different industries and use cases.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-mono text-gray-500 bg-gray-100 px-3 py-1 rounded-sm">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-sm font-mono bg-gray-900 text-white px-3 py-1 rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a 
                      href={project.demoUrl}
                      className="inline-flex items-center gap-2 text-gray-600 font-medium hover:text-gray-900 transition-colors duration-200"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;