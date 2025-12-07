import React from 'react';
import ArticleCard from './ArticleCard';
import { ARTICLES } from '../constants';

const Portfolio: React.FC = () => {
  const featuredArticle = ARTICLES[0];
  const otherArticles = ARTICLES.slice(1);

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-gray-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-journal-red mb-2">Selected Reports</h2>
            <h3 className="text-4xl font-serif font-bold text-journal-black">Stories from Subic Bay & Olongapo</h3>
          </div>
          <a href="#" className="text-sm font-medium text-journal-gray hover:text-journal-black underline decoration-gray-300 hover:decoration-journal-black underline-offset-4">
            View All Broadcasts
          </a>
        </div>

        <div className="mb-20">
          <ArticleCard article={featuredArticle} featured={true} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {otherArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;