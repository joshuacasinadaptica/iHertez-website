import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Press from './components/Press';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArticleDetail from './components/ArticleDetail';
import { ARTICLES } from './constants';

function App() {
  const [currentArticle, setCurrentArticle] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#article/')) {
        const slug = hash.replace('#article/', '');
        setCurrentArticle(slug);
        // Scroll to top when viewing article
        window.scrollTo(0, 0);
      } else {
        setCurrentArticle(null);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToStories = () => {
    window.location.hash = '';
    setCurrentArticle(null);
    // Scroll to work section after a brief delay
    setTimeout(() => {
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Find article by slug
  const article = currentArticle ? ARTICLES.find(a => a.slug === currentArticle) : null;

  if (article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <ArticleDetail article={article} onBack={handleBackToStories} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;