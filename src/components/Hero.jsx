import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="container">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Joseph Obeata
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Frontend Developer with Backend Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
            I build modern, responsive web applications with React and Tailwind CSS,
            and I also work with backend features like APIs, admin dashboards, content
            management, authentication flows, and data-driven user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
              View Projects <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
              Get In Touch
            </a>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:ehyjoe@gmail.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
