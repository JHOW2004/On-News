import React from 'react';
import { Helmet } from 'react-helmet-async';
import { X, Heart, MessageCircle, Share, Bookmark, Calendar, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { OpinionPost } from '../../types';
import CommentSection from './CommentSection';
import { useNewsInteractions } from '../../hooks/useNewsInteractions';

interface PostDetailProps {
  post: OpinionPost;
  onClose: () => void;
  onUserClick?: (userId: string) => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onClose, onUserClick }) => {
  const { interactions, isLiked, addComment, toggleLike, shareArticle } = useNewsInteractions(post);

  const postUrl = `https://on-news-br.jhowtech.com.br/post/${post.id}`;
  const description = post.content.replace(/\s+/g, ' ').trim().slice(0, 160);
  const publishedAt = post.publishedAt instanceof Date ? post.publishedAt :
    (post.publishedAt as any)?.toDate?.() || new Date(post.publishedAt);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm md:p-4">
      <Helmet>
        <title>{post.title} | On News BR</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={postUrl} />
        <meta property="article:published_time" content={publishedAt.toISOString()} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description,
            datePublished: publishedAt.toISOString(),
            author: { "@type": "Person", name: post.authorName || post.userName },
            mainEntityOfPage: postUrl,
          })}
        </script>
      </Helmet>
      <div className="bg-white dark:bg-gray-900 w-full h-full md:h-auto md:max-h-[90vh] md:max-w-3xl md:rounded-2xl overflow-y-auto flex flex-col relative">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <button 
            onClick={() => onUserClick?.(post.userId)}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              {post.userPhoto ? (
                <img src={post.userPhoto} alt={post.userName} className="w-full h-full object-cover" />
              ) : (
                <User className="w-6 h-6 text-primary" />
              )}
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{post.userName}</p>
              <p className="text-xs text-gray-500">@{post.userName.toLowerCase().replace(/ /g, '')}</p>
            </div>
          </button>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 space-y-6">
          <div 
            className="w-full min-h-[320px] md:min-h-[400px] rounded-2xl p-8 pt-20 flex flex-col justify-end shadow-2xl relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${post.cardColor || '#10b981'} 0%, ${post.cardColor || '#10b981'}dd 100%)` 
            }}
          >
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-wider">
              Artigo de Opinião
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <Calendar className="w-4 h-4" />
              {(() => {
                const date = post.publishedAt instanceof Date ? post.publishedAt : 
                           (post.publishedAt as any)?.toDate?.() || 
                           new Date(post.publishedAt);
                return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
              })()}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold dark:text-white">Conteúdo</h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
              {post.content}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-6">
                <button
                  onClick={toggleLike}
                  className={`flex items-center gap-2 transition-all ${isLiked ? "text-red-500" : "text-gray-900 dark:text-white"}`}
                >
                  <Heart className={`w-8 h-8 ${isLiked ? "fill-current" : ""}`} strokeWidth={2.5} />
                  <span className="font-bold">{interactions.likesCount}</span>
                </button>
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <MessageCircle className="w-8 h-8" strokeWidth={2.5} />
                  <span className="font-bold">{interactions.commentsCount}</span>
                </div>
                <button
                  onClick={() => shareArticle(`${window.location.origin}/post/${post.id}`, post.title)}
                  className="text-gray-900 dark:text-white hover:text-primary transition-colors"
                >
                  <Share className="w-8 h-8" strokeWidth={2.5} />
                </button>
              </div>
              </div>
            </div>

            <CommentSection 
              articleId={post.id} 
              comments={interactions.comments}
              onUserClick={onUserClick}
              onAddComment={addComment} 
            />
          </div>
        </div>
      </div>
    );
};

export default PostDetail;
