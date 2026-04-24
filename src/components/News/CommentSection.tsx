import React, { useState, useEffect } from "react";
import { Send, User, Heart, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Comment } from "../../types";
import { useAuth } from "../../contexts/AuthContext";
import { collection, query, where, onSnapshot, addDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";
import toast from "react-hot-toast";

interface CommentSectionProps {
  articleId: string;
  comments: Comment[];
  onLoginRequired?: () => void;
  onUserClick?: (userId: string) => void;
  onAddComment: (content: string, parentCommentId?: string) => Promise<void>;
}

const CommentItem: React.FC<{
  comment: Comment;
  articleId: string;
  onUserClick?: (userId: string) => void;
  onLoginRequired?: () => void;
  onAddComment: (content: string, parentCommentId?: string) => Promise<void>;
  isReply?: boolean;
}> = ({ comment, articleId, onUserClick, onLoginRequired, onAddComment, isReply }) => {
  const { currentUser } = useAuth();
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState<Comment[]>([]);
  const [showAllReplies, setShowAllReplies] = useState(false);
  const [likes, setLikes] = useState<any[]>([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Fetch replies if this is a top-level comment
    if (!isReply) {
      const q = query(
        collection(db, 'comments'),
        where('parentCommentId', '==', comment.id),
        where('articleId', '==', articleId)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedReplies = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date()
        })) as Comment[];
        setReplies(fetchedReplies.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime()));
      });
      return unsubscribe;
    }
  }, [comment.id, articleId, isReply]);

  useEffect(() => {
    // Fetch likes for this comment
    const q = query(
      collection(db, 'commentLikes'),
      where('commentId', '==', comment.id)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedLikes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLikes(fetchedLikes);
      setIsLiked(fetchedLikes.some(like => like.userId === currentUser?.uid));
    });
    return unsubscribe;
  }, [comment.id, currentUser?.uid]);

  const handleLike = async () => {
    if (!currentUser) {
      onLoginRequired?.();
      return;
    }
    try {
      if (isLiked) {
        const userLike = likes.find(l => l.userId === currentUser.uid);
        if (userLike) await deleteDoc(doc(db, 'commentLikes', userLike.id));
      } else {
        await addDoc(collection(db, 'commentLikes'), {
          commentId: comment.id,
          userId: currentUser.uid,
          createdAt: serverTimestamp()
        });
      }
    } catch (error) {
      toast.error('Erro ao curtir comentário');
    }
  };

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      onLoginRequired?.();
      return;
    }
    if (replyText.trim()) {
      await onAddComment(replyText.trim(), comment.id);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  const displayedReplies = showAllReplies ? replies : replies.slice(-2);

  return (
    <div className={`flex flex-col ${isReply ? 'ml-8 mt-2' : 'mt-4'}`}>
      <div className="flex space-x-3">
        <div
          className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-medium cursor-pointer overflow-hidden shrink-0"
          onClick={() => onUserClick?.(comment.userId)}
        >
          {comment.userPhoto ? (
            <img src={comment.userPhoto} alt={comment.username} className="w-full h-full object-cover" />
          ) : (
            <User className="w-4 h-4" />
          )}
        </div>
        <div className="flex-1">
          <div className="bg-gray-100 dark:bg-gray-700/50 rounded-2xl px-4 py-2">
            <div className="flex items-center justify-between mb-1">
              <span
                className="text-sm font-bold text-gray-900 dark:text-white cursor-pointer hover:underline"
                onClick={() => onUserClick?.(comment.userId)}
              >
                @{comment.username}
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400">
                {comment.createdAt ? format(comment.createdAt, "dd/MM/yy HH:mm", { locale: ptBR }) : ""}
              </span>
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200">{comment.content}</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-1 ml-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
            <button 
              onClick={handleLike}
              className={`hover:text-red-500 transition-colors flex items-center gap-1 ${isLiked ? 'text-red-500' : ''}`}
            >
              <Heart className={`w-3 h-3 ${isLiked ? 'fill-current' : ''}`} />
              {likes.length > 0 && <span>{likes.length}</span>}
              Curtir
            </button>
            {!isReply && (
              <button 
                onClick={() => setShowReplyInput(!showReplyInput)}
                className="hover:text-blue-500 transition-colors flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3" />
                Responder
              </button>
            )}
          </div>

          {showReplyInput && (
            <form onSubmit={handleReply} className="mt-2 flex gap-2">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Escreva uma resposta..."
                className="flex-1 px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                autoFocus
              />
              <button type="submit" disabled={!replyText.trim()} className="text-primary disabled:opacity-50">
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Nested Replies */}
          {!isReply && replies.length > 0 && (
            <div className="mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700">
              {replies.length > 2 && !showAllReplies && (
                <button 
                  onClick={() => setShowAllReplies(true)}
                  className="text-xs text-primary font-bold ml-8 flex items-center gap-1 hover:underline mt-1"
                >
                  <ChevronDown className="w-3 h-3" />
                  Ver mais {replies.length - 2} comentários
                </button>
              )}
              
              {displayedReplies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  articleId={articleId}
                  onUserClick={onUserClick}
                  onLoginRequired={onLoginRequired}
                  onAddComment={onAddComment}
                  isReply={true}
                />
              ))}

              {showAllReplies && (
                <button 
                  onClick={() => setShowAllReplies(false)}
                  className="text-xs text-gray-500 font-bold ml-8 flex items-center gap-1 hover:underline mt-1"
                >
                  <ChevronUp className="w-3 h-3" />
                  Ver menos
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CommentSection: React.FC<CommentSectionProps> = ({
  articleId,
  comments,
  onLoginRequired,
  onUserClick,
  onAddComment,
}) => {
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      onLoginRequired?.();
      return;
    }

    if (newComment.trim()) {
      setIsSubmitting(true);
      await onAddComment(newComment.trim());
      setNewComment("");
      setIsSubmitting(false);
    }
  };

  // Only top-level comments for the main list
  const rootComments = comments.filter(c => !c.parentCommentId);

  return (
    <section className="space-y-4">
      {currentUser && (
        <form onSubmit={handleSubmit} className="flex space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-sm font-medium overflow-hidden">
            {currentUser.photoURL ? (
              <img src={currentUser.photoURL} alt={currentUser.displayName} className="w-full h-full object-cover" />
            ) : (
              currentUser.displayName?.charAt(0).toUpperCase()
            )}
          </div>
          <div className="flex-1 flex space-x-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escreva um comentário..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isSubmitting}
            />
            <button
              aria-label="submit"
              type="submit"
              disabled={!newComment.trim() || isSubmitting}
              className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {rootComments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center py-4">
            Seja o primeiro a comentar!
          </p>
        ) : (
          rootComments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              articleId={articleId}
              onUserClick={onUserClick}
              onLoginRequired={onLoginRequired}
              onAddComment={onAddComment}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default CommentSection;

