import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  const articleUrl = `#article/${article.slug}`;

  if (featured) {
    return (
      <a href={articleUrl} className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start block">
        <div className="overflow-hidden bg-gray-100 aspect-video lg:aspect-auto lg:h-full">
           <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center h-full space-y-4">
          <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-journal-red">
            <span>{article.category}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-400 font-medium">{article.date}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-journal-black group-hover:underline decoration-2 decoration-journal-red underline-offset-4 transition-all">
            {article.title}
          </h3>
          <p className="text-lg text-journal-gray leading-relaxed border-l-2 border-journal-red pl-4">
            {article.summary}
          </p>
          <div className="pt-4 flex items-center justify-between border-t border-gray-100 mt-4">
            <span className="flex items-center text-sm text-gray-400">
              <Clock size={14} className="mr-2" /> {article.readTime}
            </span>
            <span className="flex items-center text-sm font-bold text-journal-black group-hover:translate-x-1 transition-transform">
              Read Article <ArrowRight size={16} className="ml-2" />
            </span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a href={articleUrl} className="group cursor-pointer flex flex-col h-full border-b border-gray-200 pb-8 hover:border-journal-red transition-colors duration-300 block">
      <div className="overflow-hidden aspect-[3/2] mb-5 bg-gray-100">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-journal-red mb-3">
          <span>{article.category}</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 font-medium">{article.date}</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-journal-black mb-3 leading-tight group-hover:text-journal-red transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-journal-gray leading-relaxed mb-4 line-clamp-3">
          {article.summary}
        </p>
      </div>
    </a>
  );
};

export default ArticleCard;