import React, { useState } from 'react';
import { Heart, MessageCircle, Share, User, Calendar, MoreHorizontal, Bookmark, Edit } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { OpinionPost } from '../../types';
import { useNewsInteractions } from '../../hooks/useNewsInteractions';
import { useAuth } from '../../contexts/AuthContext';
import CommentSection from './CommentSection';

interface OpinionCardProps {
  post: OpinionPost;
  onLoginRequired?: () => void;
  onUserClick?: (userId: string) => void;
  onEdit?: (post: OpinionPost) => void;
  onPostClick?: (post: OpinionPost) => void;
}

const OpinionCard: React.FC<OpinionCardProps> = ({ post, onLoginRequired, onUserClick, onEdit, onPostClick }) => {
  const [showComments, setShowComments] = useState(false);
  const { currentUser } = useAuth();

  const { interactions, isLiked, toggleLike, shareArticle, addComment } = useNewsInteractions(post);

  const isDraft = post.status === 'draft';
  const isOwner = currentUser?.uid === post.userId;

  const handleLike = () => {
    if (isDraft) return; // Cannot like drafts
    if (!currentUser) {
      onLoginRequired?.();
      return;
    }
    toggleLike();
  };

  const handleComment = () => {
    if (isDraft) return; // Cannot comment on drafts
    if (!currentUser) {
      onLoginRequired?.();
      return;
    }
    setShowComments(!showComments);
  };

  const getTimeAgo = (date: any) => {
    try {
      const d = date instanceof Date ? date : (typeof date.toDate === 'function' ? date.toDate() : new Date(date));
      return formatDistanceToNow(d, { addSuffix: true, locale: ptBR });
    } catch {
      return "há algum tempo";
    }
  };

  return (
    <article className="bg-white dark:bg-gray-900 border-b md:border md:rounded-xl border-gray-100 dark:border-gray-800 mb-2 md:mb-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => onUserClick?.(post.userId)}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-[1.5px]">
               <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {post.userPhoto ? (
                    <img src={post.userPhoto} alt={post.userName} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-4 h-4 text-gray-500" />
                  )}
               </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
              {post.userName}
              {isDraft && <span className="ml-2 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-1.5 py-0.5 rounded uppercase font-black">Rascunho</span>}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isDraft && isOwner && onEdit && (
            <button 
              onClick={() => onEdit(post)}
              className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold hover:bg-primary/20 transition-colors"
            >
              <Edit className="w-3 h-3" /> Continuar Editando
            </button>
          )}
          <button className="text-gray-500 dark:text-gray-400">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card Preview */}
      <div 
        onClick={() => onPostClick?.(post)}
        className="aspect-[4/3] w-full rounded-2xl p-6 flex flex-col justify-end shadow-lg relative overflow-hidden cursor-pointer group"
        style={{ 
          background: `linear-gradient(135deg, ${post.cardColor || '#10b981'} 0%, ${post.cardColor || '#10b981'}dd 100%)` 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
        <h2 className="text-xl md:text-2xl font-black text-white mb-2 leading-tight drop-shadow-md">
          {post.title}
        </h2>
        <div className="w-10 h-1 bg-white/30 rounded-full mb-3" />
        <p className="text-sm font-medium text-white/90">{post.authorName}</p>
      </div>

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
              onClick={() => shareArticle(`${window.location.origin}/post/${post.id}`, post.title)}
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

        {/* Caption */}
        <div 
          onClick={() => onPostClick?.(post)}
          className="space-y-1 mb-2 cursor-pointer group"
        >
          <p className="text-sm text-gray-900 dark:text-white leading-snug">
            <span className="font-bold mr-2">{post.userName}</span>
            <span className="font-medium italic">"{post.title}"</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-snug">
            {post.content}
          </p>
          <button className="text-[11px] font-bold text-gray-400 group-hover:text-primary transition-colors">
            ver todos os detalhes...
          </button>
        </div>

        {/* Time Ago */}
        <p className="text-[10px] text-gray-400 uppercase tracking-tight mb-2">
          {getTimeAgo(post.publishedAt)}
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

      {/* View Full Article Button */}
      <div className="px-3 pb-3">
         <button 
          onClick={() => onPostClick?.(post)}
          className="block w-full text-center py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
        >
          Ler artigo na íntegra
        </button>
      </div>



      {/* Comments Section */}
      {showComments && (
        <div className="border-t border-gray-100 dark:border-gray-800 p-3">
          <CommentSection
            articleId={post.id}
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

export default OpinionCard;

