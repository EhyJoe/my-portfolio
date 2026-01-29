import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-mono text-sm text-gray-400">
              © 2026 Joseph Obeata. Built with React & Tailwind CSS.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#hero" 
              className="text-gray-400 hover:text-white font-medium transition-colors duration-200"
            >
              Back to Top
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;