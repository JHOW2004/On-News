import React, { useState } from 'react';
import { Heart, MessageCircle, Share, ExternalLink, Calendar, Building, User } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NewsArticle } from '../../lib/gnews';
import { useNewsInteractions } from '../../hooks/useNewsInteractions';
import { useAuth } from '../../contexts/AuthContext';
import CommentSection from './CommentSection';

interface NewsCardProps {
  article: NewsArticle;
  onLoginRequired?: () => void;
  onUserClick?: (userId: string) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onLoginRequired, onUserClick }) => {
  const [showComments, setShowComments] = useState(false);
  const [showLikers, setShowLikers] = useState(false);
  const { currentUser } = useAuth();
  
  if (!article) return null;

  // Extraímos também o addComment do hook
  const { interactions, isLiked, toggleLike, shareArticle, addComment } = useNewsInteractions(article);

  const handleLike = () => {
    if (!currentUser) {
      onLoginRequired?.();
      return;
    }
    toggleLike();
  };

  const handleComment = () => {
    if (!currentUser) {
      onLoginRequired?.();
      return;
    }
    setShowComments(!showComments);
  };

  const handleShare = () => {
    shareArticle(article.url, article.title);
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, "dd/MM/yyyy - HH:mm", { locale: ptBR });
    } catch {
      return 'Data não disponível';
    }
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      {article.image && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {article.title}
        </h2>

        {article.description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
            {article.description}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Building className="w-3 h-3" />
              <span>{article.source?.name || 'Fonte desconhecida'}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 relative">
            {/* Like Button & Counter */}
            <div className="flex items-center">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all ${
                  isLiked
                    ? 'text-red-600 bg-red-50 dark:bg-red-900/20'
                    : 'text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button 
                onClick={() => setShowLikers(!showLikers)}
                className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 ml-1"
              >
                {interactions.likesCount}
              </button>
              
              {/* Likers Dropdown */}
              {showLikers && interactions.likes.length > 0 && (
                <div className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-2 z-20 border border-gray-200 dark:border-gray-600 w-48 max-h-40 overflow-y-auto">
                   <h4 className="text-xs font-bold text-gray-500 mb-2 px-2">Curtido por:</h4>
                   {interactions.likes.map(like => (
                     <div 
                        key={like.id} 
                        className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
                        onClick={() => {
                          if(onUserClick) onUserClick(like.userId);
                          setShowLikers(false);
                        }}
                     >
                        <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                           {like.userPhoto ? (
                             <img src={like.userPhoto} className="w-full h-full object-cover" />
                           ) : (
                             <User className="w-3 h-3" />
                           )}
                        </div>
                        <span className="text-xs truncate">{like.username || 'Usuário'}</span>
                     </div>
                   ))}
                </div>
              )}
            </div>

            <button
              onClick={handleComment}
              className="flex items-center space-x-1 px-3 py-1 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{interactions.commentsCount}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center space-x-1 px-3 py-1 rounded-full text-gray-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all"
            >
              <Share className="w-4 h-4" />
              <span className="text-sm">Compartilhar</span>
            </button>
          </div>

          
        </div>
        <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1 px-3 py-3 mt-4 rounded-full bg-accent text-black font-bold hover:bg-warning/90 transition-colors text-sm"
          >
            <span>Ver mais</span>
            <ExternalLink className="w-3 h-3" />
          </a>

        {showComments && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <CommentSection
              articleId={article.id}
              comments={interactions.comments}
              onLoginRequired={onLoginRequired}
              onUserClick={onUserClick}
              onAddComment={addComment} // Passando a função aqui
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default NewsCard;