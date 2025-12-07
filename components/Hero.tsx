import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 fade-in-up">
          <h2 className="text-journal-red font-medium tracking-widest text-sm uppercase mb-4">
            Campus Journalist • Subic National High School
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-journal-black tracking-tight leading-none mb-6">
            The Voice of <br/>
            <span className="font-light italic text-gray-400">the</span> Campus
          </h1>
          <p className="text-xl md:text-2xl text-journal-gray font-light max-w-2xl mx-auto leading-relaxed font-serif delay-100 fade-in-up">
            Reporting on the stories that matter to Olongapo City, from the hallways of Subic National High to the heart of our community.
          </p>
          
          <div className="pt-12 delay-200 fade-in-up">
            <a 
              href="#work"
              className="inline-flex items-center gap-2 text-journal-dark border-b-2 border-journal-black pb-1 hover:text-journal-red hover:border-journal-red transition-all duration-300"
            >
              Read Latest Reports <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-16 w-px bg-gray-200"></div>
    </section>
  );
};

export default Hero;