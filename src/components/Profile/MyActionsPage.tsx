import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { Comment, Like } from '../../types';
import NewsCard from '../News/NewsCard';
import LoginModal from '../Auth/LoginModal';

const MyActionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'likes' | 'comments'>('likes');
  const [userLikes, setUserLikes] = useState<Like[]>([]);
  const [userComments, setUserComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;

    const likesQuery = query(
      collection(db, 'likes'),
      where('userId', '==', currentUser.uid),
      orderBy('createdAt', 'desc')
    );

    const commentsQuery = query(
      collection(db, 'comments'),
      where('userId', '==', currentUser.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribeLikes = onSnapshot(likesQuery, (snapshot) => {
      const likes = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      })) as Like[];
      setUserLikes(likes);
    });

    const unsubscribeComments = onSnapshot(commentsQuery, (snapshot) => {
      const comments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      })) as Comment[];
      setUserComments(comments);
      setLoading(false);
    });

    return () => {
      unsubscribeLikes();
      unsubscribeComments();
    };
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          Você precisa fazer login para ver suas ações.
        </p>
      </div>
    );
  }

  const tabs = [
    { id: 'likes' as const, name: 'Curtidas', icon: Heart, count: userLikes.length },
    { id: 'comments' as const, name: 'Comentários', icon: MessageCircle, count: userComments.length }
  ];

  const renderContent = () => {
    const items = activeTab === 'likes' ? userLikes : userComments;
    
    if (items.length === 0) {
      return (
        <div className="text-center py-12">
          {activeTab === 'likes' ? (
             <Heart className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          ) : (
             <MessageCircle className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          )}
          <p className="text-gray-500 dark:text-gray-400">
            {activeTab === 'likes' ? 'Você ainda não curtiu nenhuma notícia' : 'Você ainda não fez nenhum comentário'}
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {items.map((item: any) => {
          if (!item.articleSnapshot) return null;

          return (
            <div key={item.id} className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
               {activeTab === 'comments' && (
                 <div className="mb-2 p-3 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300 text-sm italic">
                   "{item.content}"
                 </div>
               )}
               <NewsCard 
                 article={item.articleSnapshot} 
                 onLoginRequired={() => setShowLoginModal(true)}
               />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Minhas Ações
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Histórico de interações
        </p>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {loading ? (
        <div className="text-center py-8">Carregando...</div>
      ) : renderContent()}
      
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};

export default MyActionsPage;