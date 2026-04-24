import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share,
  ExternalLink,
  MoreHorizontal,
  Bookmark,
  Building,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { NewsArticle } from "../../lib/gnews";
import { useNewsInteractions } from "../../hooks/useNewsInteractions";
import { useAuth } from "../../contexts/AuthContext";
import CommentSection from "./CommentSection";

interface NewsCardProps {
  article: NewsArticle;
  onLoginRequired?: () => void;
  onUserClick?: (userId: string) => void;
  onPostClick?: (post: any) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  article,
  onLoginRequired,
  onUserClick,
  onPostClick,
}) => {
  const [showComments, setShowComments] = useState(false);
  const { currentUser } = useAuth();

  if (!article) return null;

  const { interactions, isLiked, toggleLike, shareArticle, addComment } =
    useNewsInteractions(article);

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

  const getTimeAgo = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
    } catch {
      return "há algum tempo";
    }
  };

  return (
    <article className="bg-white dark:bg-gray-900 border-b md:border md:rounded-xl border-gray-100 dark:border-gray-800 mb-2 md:mb-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden">
             <Building className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
              {article.source?.name || "Fonte desconhecida"}
            </p>
          </div>
        </div>
        <button className="text-gray-500 dark:text-gray-400">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Image */}
      {article.image && (
        <div 
          className="relative aspect-square w-full bg-gray-100 dark:bg-gray-800 overflow-hidden cursor-pointer"
          onDoubleClick={handleLike}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

      {/* Action Bar */}
      <div className="p-3 pb-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <button
              aria-label="like"
              onClick={handleLike}
              className={`transition-all ${isLiked ? "text-red-500" : "text-gray-900 dark:text-white"}`}
            >
              <Heart className={`w-7 h-7 ${isLiked ? "fill-current" : ""}`} strokeWidth={2} />
            </button>
            <button
              aria-label="comment"
              onClick={handleComment}
              className="text-gray-900 dark:text-white"
            >
              <MessageCircle className="w-7 h-7" strokeWidth={2} />
            </button>
            <button
              aria-label="share"
              onClick={handleShare}
              className="text-gray-900 dark:text-white"
            >
              <Share className="w-7 h-7" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Likes Count */}
        {interactions.likesCount > 0 && (
          <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">
            {interactions.likesCount.toLocaleString()} curtidas
          </p>
        )}

        {/* Caption (Title & Description) */}
        <div className="space-y-1 mb-2">
          <p className="text-sm text-gray-900 dark:text-white leading-snug">
            <span className="font-bold mr-2">{article.source?.name}</span>
            {article.title}
          </p>
          {article.description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-snug">
              {article.description}
            </p>
          )}
        </div>

        {/* Time Ago */}
        <p className="text-[10px] text-gray-400 uppercase tracking-tight mb-2">
          {getTimeAgo(article.publishedAt)}
        </p>

        {/* View Comments Toggle */}
        {interactions.commentsCount > 0 && !showComments && (
           <button 
             onClick={handleComment}
             className="text-sm text-gray-500 dark:text-gray-400 mb-2 hover:underline"
           >
             Ver todos os {interactions.commentsCount} comentários
           </button>
        )}
      </div>

      {/* External Link Button */}
      <div className="px-3 pb-3">
         <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
        >
          Ler matéria completa
        </a>
      </div>



      {/* Comments Section */}
      {showComments && (
        <div className="border-t border-gray-100 dark:border-gray-800 p-3">
          <CommentSection
            articleId={article.id}
            comments={interactions.comments}
            onLoginRequired={onLoginRequired}
            onUserClick={onUserClick}
            onAddComment={addComment}
          />
        </div>
      )}
    </article>
  );
};

export default NewsCard;

