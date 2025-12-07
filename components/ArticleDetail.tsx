import React from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Article } from '../types';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  return (
    <article className="min-h-screen bg-white pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-journal-gray hover:text-journal-black mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Stories</span>
        </button>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-journal-red mb-4">
            <span>{article.category}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-400 font-medium">{article.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-journal-black mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {article.readTime}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {article.date}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-lg">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-journal-gray leading-relaxed mb-8 font-serif border-l-4 border-journal-red pl-6 py-2">
            {article.summary}
          </div>

          <div className="space-y-6 text-lg text-journal-gray leading-relaxed">
            <p>
              {article.content || `This is a detailed report on ${article.title.toLowerCase()}. As a campus journalist covering stories from Subic Bay and Olongapo City, I had the opportunity to document this important event and share it with our community.`}
            </p>
            
            <p>
              The story highlights the vibrant life of our community and the achievements of our youth. Through accurate reporting and dedication to truth, we continue to serve the student body and the people of Olongapo City.
            </p>

            <p>
              Stay tuned for more updates and stories from Subic National High School and the surrounding community. Your support helps us continue our mission of delivering quality journalism that matters.
            </p>
          </div>
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Written by</p>
              <p className="text-lg font-serif font-bold text-journal-black">Isabelle Hertez</p>
              <p className="text-sm text-gray-500">Campus Journalist, Subic National High School</p>
            </div>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-journal-black text-white text-sm font-bold tracking-widest uppercase hover:bg-journal-red transition-colors"
            >
              Read More Stories
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetail;

