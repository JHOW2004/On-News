import React, { useState } from "react";
import { Send, User } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Comment } from "../../types";
import { useAuth } from "../../contexts/AuthContext";

interface CommentSectionProps {
  articleId: string;
  comments: Comment[];
  onLoginRequired?: () => void;
  onUserClick?: (userId: string) => void;
  onAddComment: (content: string) => Promise<void>; // Nova prop
}

const CommentSection: React.FC<CommentSectionProps> = ({
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

  return (
    <div className="space-y-4">
      {currentUser && (
        <form onSubmit={handleSubmit} className="flex space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-sm font-medium">
            {currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt={currentUser.displayName}
                className="w-full h-full rounded-full object-cover"
              />
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
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isSubmitting}
            />
            <button
              aria-label="submit"
              type="submit"
              disabled={!newComment.trim() || isSubmitting}
              className="px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {comments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center py-4">
            Seja o primeiro a comentar!
          </p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex space-x-3">
              <div
                className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-medium cursor-pointer overflow-hidden"
                onClick={() => onUserClick?.(comment.userId)}
              >
                {comment.userPhoto ? (
                  <img
                    src={comment.userPhoto}
                    alt={comment.username}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-4 h-4" />
                )}
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <span
                      className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer hover:underline"
                      onClick={() => onUserClick?.(comment.userId)}
                    >
                      @{comment.username}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {comment.createdAt
                        ? format(comment.createdAt, "dd/MM/yyyy 'às' HH:mm", {
                            locale: ptBR,
                          })
                        : ""}
                    </span>
                  </div>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    {comment.content}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
