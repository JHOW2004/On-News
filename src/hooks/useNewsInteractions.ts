import { useState, useEffect } from 'react';
import { 
  collection, 
  doc, 
  addDoc, 
  deleteDoc, 
  query, 
  where, 
  onSnapshot,
  orderBy
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { Comment, Like, ArticleInteraction } from '../types';
import { NewsArticle } from '../lib/gnews';
import toast from 'react-hot-toast';

export const useNewsInteractions = (article: NewsArticle) => {
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

  // Função auxiliar defensiva: Garante que NENHUM campo seja undefined
  const getArticleSnapshot = () => {
    if (!article) return null;
    return {
      id: article.id || "",
      title: article.title || "Sem título",
      description: article.description || "",
      content: article.content || "",
      url: article.url || "", 
      image: article.image || "",
      publishedAt: article.publishedAt || new Date().toISOString(),
      source: {
        id: article.source?.id || null,
        name: article.source?.name || "Fonte Desconhecida"
      }
    };
  };

  const addComment = async (content: string) => {
    if (!currentUser) {
      toast.error('Você precisa fazer login para comentar');
      return;
    }

    try {
      const snapshot = getArticleSnapshot();
      
      // Se por algum motivo o snapshot for inválido, evitamos o crash
      if (!snapshot) {
         console.error("Tentativa de comentar em artigo inválido");
         return;
      }

      await addDoc(collection(db, 'comments'), {
        articleId: article.id,
        userId: currentUser.uid,
        username: currentUser.username,
        userPhoto: currentUser.photoURL || '',
        content,
        createdAt: new Date(),
        articleSnapshot: snapshot 
      });
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
        if (!snapshot) return;

        await addDoc(collection(db, 'likes'), {
          articleId: article.id,
          userId: currentUser.uid,
          username: currentUser.username,
          userPhoto: currentUser.photoURL || '',
          createdAt: new Date(),
          articleSnapshot: snapshot
        });
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