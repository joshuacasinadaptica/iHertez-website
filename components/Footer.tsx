import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif font-bold text-lg text-journal-black">
            Isabelle Hertez<span className="text-journal-red">.</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">
            © {currentYear} Isabelle Hertez. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-sm text-gray-500 hover:text-journal-red transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-journal-red transition-colors">Terms of Use</a>
          <a href="#" className="text-sm text-gray-500 hover:text-journal-red transition-colors">Twitter</a>
          <a href="#" className="text-sm text-gray-500 hover:text-journal-red transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;