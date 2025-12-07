import React from 'react';
import isabelleImage from '../images/Gemini_Generated_Image_v7kvyzv7kvyzv7kv.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-journal-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden bg-gray-200 hover:shadow-xl transition-all duration-700 ease-in-out relative group">
              <img 
                src={isabelleImage} 
                alt="Isabelle Hertez Reporting" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-journal-red/10 z-0"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-journal-red mb-3">About Me</h2>
            <h3 className="text-4xl font-serif font-bold text-journal-black mb-8">
              "Serving the student body through truth and integrity."
            </h3>
            
            <div className="space-y-6 text-lg text-journal-gray font-sans leading-relaxed">
              <p>
                My name is Isabelle Hertez. I am a campus journalist and Grade 10 student at <strong>Subic National High School</strong> in Olongapo City.
              </p>
              <p>
                From covering the bustling events of the Division Schools Press Conference to highlighting local community initiatives in Subic Bay Freeport Zone, I am passionate about using my voice to inform and empower my fellow students. I believe that even at a young age, journalism is a powerful tool for positive change.
              </p>
              <p>
                As a broadcaster for our school publication, I strive to deliver accurate news that reflects the vibrant life of Olongapo City—from our athletes competing in Palarong Pambansa to environmental initiatives at Subic Bay, from preserving historical landmarks like the Spanish Gate to celebrating our community's achievements.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-gray-300 pt-8">
              <div>
                <span className="block text-3xl font-serif font-bold text-journal-black">3</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Years in CJ</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-journal-black">12+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Reports</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-journal-black">2</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Reg. Awards</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;