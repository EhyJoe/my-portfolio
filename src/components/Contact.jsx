import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, 
            collaborating on projects, or connecting with fellow developers.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            <a 
              href="mailto:ehyjoe@gmail.com"
              className="group p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-200">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 font-mono text-sm">ehyjoe@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://github.com"
              className="group p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-200">
                  <Github size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  View Projects <ExternalLink size={16} />
                </p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com"
              className="group p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-200">
                  <Linkedin size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  Connect <ExternalLink size={16} />
                </p>
              </div>
            </a>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 font-mono text-sm">
              Currently available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;