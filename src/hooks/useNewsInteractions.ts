import { useState, useEffect } from 'react';
import { 
  collection, 
  doc, 
  addDoc, 
  deleteDoc, 
  query, 
  where, 
  onSnapshot,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { sendNotification } from '../lib/notifications';
import { useAuth } from '../contexts/AuthContext';
import { Comment, Like, ArticleInteraction, OpinionPost, Notification } from '../types';
import { NewsArticle } from '../lib/gnews';
import toast from 'react-hot-toast';

export const useNewsInteractions = (article: NewsArticle | OpinionPost) => {
  const [interactions, setInteractions] = useState<ArticleInteraction>({
    articleId: article?.id || '',
    comments: [],
    likes: [],
    likesCount: 0,
    commentsCount: 0
  });
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const { currentUser } = useAuth();

  const isOpinion = (article as any).type === 'opinion';

  useEffect(() => {
    if (!article?.id) return;

    const commentsQuery = query(
      collection(db, 'comments'),
      where('articleId', '==', article.id),
      orderBy('createdAt', 'desc')
    );

    const likesQuery = query(
      collection(db, 'likes'),
      where('articleId', '==', article.id)
    );

    const unsubscribeComments = onSnapshot(commentsQuery, (snapshot) => {
      const comments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      })) as Comment[];

      setInteractions(prev => ({
        ...prev,
        comments,
        commentsCount: comments.length
      }));
    });

    const unsubscribeLikes = onSnapshot(likesQuery, (snapshot) => {
      const likes = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      })) as Like[];

      const userLike = likes.find(like => like.userId === currentUser?.uid);
      setIsLiked(!!userLike);

      setInteractions(prev => ({
        ...prev,
        likes,
        likesCount: likes.length
      }));
      
      setLoading(false);
    });

    return () => {
      unsubscribeComments();
      unsubscribeLikes();
    };
  }, [article?.id, currentUser?.uid]);

  const getArticleSnapshot = () => {
    if (!article) return null;
    
    if (isOpinion) {
      const post = article as OpinionPost;
      return {
        id: post.id,
        title: post.title,
        content: post.content,
        authorName: post.authorName,
        userName: post.userName,
        userPhoto: post.userPhoto,
        color: post.color,
        publishedAt: post.publishedAt instanceof Date ? post.publishedAt.toISOString() : post.publishedAt,
        type: 'opinion'
      };
    }

    const news = article as NewsArticle;
    return {
      id: news.id || "",
      title: news.title || "Sem título",
      description: news.description || "",
      content: news.content || "",
      url: news.url || "", 
      image: news.image || "",
      publishedAt: news.publishedAt || new Date().toISOString(),
      source: {
        id: news.source?.id || null,
        name: news.source?.name || "Fonte Desconhecida"
      },
      type: 'news'
    };
  };

  const createNotification = async (type: 'like' | 'comment' | 'reply', toUserId: string, commentContent?: string) => {
    if (!currentUser) return;
    
    await sendNotification({
      toUserId,
      fromUserId: currentUser.uid,
      fromUserName: currentUser.username,
      fromUserPhoto: currentUser.photoURL || '',
      type,
      articleId: article.id,
      articleTitle: article.title,
      commentContent
    });
  };

  const addComment = async (content: string, parentCommentId?: string) => {
    if (!currentUser) {
      toast.error('Você precisa fazer login para comentar');
      return;
    }

    try {
      const snapshot = getArticleSnapshot();
      
      await addDoc(collection(db, 'comments'), {
        articleId: article.id,
        userId: currentUser.uid,
        username: currentUser.username,
        userPhoto: currentUser.photoURL || '',
        content,
        createdAt: serverTimestamp(),
        articleSnapshot: snapshot,
        parentCommentId: parentCommentId || null
      });

      // Notify post owner
      if (isOpinion) {
        await createNotification('comment', (article as OpinionPost).userId, content);
      }
      
      // If it's a reply, notify the owner of the parent comment
      if (parentCommentId) {
        const parentComment = interactions.comments.find(c => c.id === parentCommentId);
        if (parentComment && parentComment.userId !== currentUser.uid) {
          await createNotification('reply', parentComment.userId, content);
        }
      }

      toast.success('Comentário adicionado!');
    } catch (error) {
      toast.error('Erro ao adicionar comentário');
      console.error('Error adding comment:', error);
    }
  };

  const toggleLike = async () => {
    if (!currentUser) {
      toast.error('Você precisa fazer login para curtir');
      return;
    }

    try {
      if (isLiked) {
        const userLike = interactions.likes.find(like => like.userId === currentUser.uid);
        if (userLike) {
          await deleteDoc(doc(db, 'likes', userLike.id));
        }
      } else {
        const snapshot = getArticleSnapshot();

        await addDoc(collection(db, 'likes'), {
          articleId: article.id,
          userId: currentUser.uid,
          username: currentUser.username,
          userPhoto: currentUser.photoURL || '',
          createdAt: serverTimestamp(),
          articleSnapshot: snapshot
        });

        // Notify post owner
        if (isOpinion) {
          await createNotification('like', (article as OpinionPost).userId);
        }
      }
    } catch (error) {
      toast.error('Erro ao curtir notícia');
      console.error('Error toggling like:', error);
    }
  };

  const shareArticle = (articleUrl: string, title: string) => {
    if (navigator.share) {
      navigator.share({
        title,
        url: articleUrl
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(articleUrl).then(() => {
        toast.success('Link copiado para a área de transferência!');
      }).catch(() => {
        toast.error('Erro ao copiar link');
      });
    }
  };

  return {
    interactions,
    isLiked,
    loading,
    addComment,
    toggleLike,
    shareArticle
  };
};