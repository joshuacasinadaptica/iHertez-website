import React, { useState } from 'react';
import { Send, Mail, MapPin, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-journal-light border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-journal-red mb-3">Get in Touch</h2>
          <h3 className="text-4xl font-serif font-bold text-journal-black">Connect for a Story</h3>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="md:col-span-1 space-y-8 border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:pr-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-journal-gray mb-4">Location</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-journal-dark">
                    <MapPin size={18} className="text-journal-red" />
                    <span className="text-sm">Subic National High School<br/>Olongapo City, Zambales</span>
                  </div>
                  <div className="flex items-center space-x-3 text-journal-dark">
                    <Mail size={18} className="text-journal-red" />
                    <span className="text-sm">isabelle.h@student.deped.gov.ph</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-journal-gray mb-4">Follow</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gray-50 text-journal-black hover:bg-journal-black hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="p-2 bg-gray-50 text-journal-black hover:bg-journal-black hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                    <Send size={24} />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-journal-black">Message Sent</h4>
                  <p className="text-gray-500">Thank you for reaching out. I'll get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-bold text-journal-red hover:underline mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-gray-500">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 px-3 py-3 text-journal-dark focus:ring-0 focus:border-journal-red transition-colors placeholder-gray-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-gray-500">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 px-3 py-3 text-journal-dark focus:ring-0 focus:border-journal-red transition-colors placeholder-gray-300"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-gray-500">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 px-3 py-3 text-journal-dark focus:ring-0 focus:border-journal-red transition-colors placeholder-gray-300 resize-none"
                      placeholder="Share a story tip or inquiry..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-journal-black text-white text-sm font-bold tracking-widest uppercase hover:bg-journal-red transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;