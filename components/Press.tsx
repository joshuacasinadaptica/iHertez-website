import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { PRESS_ITEMS } from '../constants';

const Press: React.FC = () => {
  return (
    <section id="press" className="py-20 bg-journal-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-sm font-bold uppercase tracking-widest text-journal-red mb-3">Recognition</h2>
              <h3 className="text-3xl font-serif font-bold mb-6">Press & Awards</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Featured work, interviews, and accolades from across the journalism industry.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            {PRESS_ITEMS.map((item) => (
              <div key={item.id} className="group border-b border-gray-800 pb-8 last:border-0 hover:pl-4 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                      <Award size={14} className="text-journal-red" />
                      <span className="uppercase tracking-wide">{item.publication}</span>
                    </div>
                    <h4 className="text-xl font-serif font-medium text-white group-hover:text-gray-200">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 whitespace-nowrap">
                    <span className="mr-4">{item.date}</span>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
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

export default Press;