import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Bell, User as UserIcon, Check } from 'lucide-react';
import { collection, query, where, orderBy, onSnapshot, doc, updateDoc, writeBatch } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { Comment, Like, Notification } from '../../types';
import NewsCard from '../News/NewsCard';
import OpinionCard from '../News/OpinionCard';
import LoginModal from '../Auth/LoginModal';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface MyActionsPageProps {
  onUserClick?: (userId: string) => void;
}

const MyActionsPage: React.FC<MyActionsPageProps> = ({ onUserClick }) => {
  const [activeTab, setActiveTab] = useState<'likes' | 'comments' | 'notifications'>('notifications');
  const [userLikes, setUserLikes] = useState<Like[]>([]);
  const [userComments, setUserComments] = useState<Comment[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
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

    const notificationsQuery = query(
      collection(db, 'notifications'),
      where('toUserId', '==', currentUser.uid),
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
    });

    const unsubscribeNotifications = onSnapshot(notificationsQuery, (snapshot) => {
      const notificationsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      })) as Notification[];
      setNotifications(notificationsData);
      setLoading(false);
    });

    return () => {
      unsubscribeLikes();
      unsubscribeComments();
      unsubscribeNotifications();
    };
  }, [currentUser]);

  const markAllAsRead = async () => {
    if (!currentUser) return;
    const batch = writeBatch(db);
    notifications.filter(n => !n.read).forEach(n => {
      const ref = doc(db, 'notifications', n.id);
      batch.update(ref, { read: true });
    });
    await batch.commit();
  };

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
    { id: 'notifications' as const, name: 'Notificações', icon: Bell, count: notifications.filter(n => !n.read).length },
    { id: 'likes' as const, name: 'Curtidas', icon: Heart, count: userLikes.length },
    { id: 'comments' as const, name: 'Comentários', icon: MessageCircle, count: userComments.length }
  ];

  const renderContent = () => {
    if (activeTab === 'notifications') {
      if (notifications.length === 0) {
        return (
          <div className="text-center py-12">
            <Bell className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
            <p className="text-gray-500 dark:text-gray-400">Você ainda não tem notificações</p>
          </div>
        );
      }

      return (
        <div className="space-y-4">
          <div className="flex justify-end mb-2">
            <button 
              onClick={markAllAsRead}
              className="text-xs text-primary font-bold hover:underline flex items-center gap-1"
            >
              <Check className="w-3 h-3" />
              Marcar todas como lidas
            </button>
          </div>
          {notifications.map((n) => (
            <div 
              key={n.id} 
              className={`p-4 rounded-xl border ${n.read ? 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700' : 'bg-blue-50/50 dark:bg-primary/5 border-primary/20'} transition-colors cursor-pointer`}
              onClick={() => updateDoc(doc(db, 'notifications', n.id), { read: true })}
            >
              <div className="flex gap-3">
                <div 
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onUserClick?.(n.fromUserId);
                  }}
                >
                  {n.fromUserPhoto ? <img src={n.fromUserPhoto} className="w-full h-full object-cover" /> : <UserIcon className="w-full h-full p-2 text-gray-400" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">
                    <span 
                      className="font-bold hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        onUserClick?.(n.fromUserId);
                      }}
                    >
                      @{n.fromUserName}
                    </span>{' '}
                    {n.type === 'like' && 'curtiu seu artigo'}
                    {n.type === 'comment' && 'comentou no seu artigo'}
                    {n.type === 'reply' && 'respondeu seu comentário'}
                    {n.type === 'follow' && 'começou a seguir você'}
                    {n.type === 'system' && 'enviou uma mensagem'}
                    {n.articleTitle && <span className="font-medium text-primary"> "{n.articleTitle}"</span>}
                  </p>
                  {n.commentContent && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic border-l-2 border-gray-200 dark:border-gray-700 pl-2">
                      "{n.commentContent}"
                    </p>
                  )}
                  <p className="text-[10px] text-gray-400 mt-2">
                    {format(n.createdAt, "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })}
                  </p>
                </div>
                {!n.read && <div className="w-2 h-2 bg-primary rounded-full self-center" />}
              </div>
            </div>
          ))}
        </div>
      );
    }

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
               {item.articleSnapshot.type === 'opinion' ? (
                 <OpinionCard 
                   post={item.articleSnapshot} 
                   onLoginRequired={() => setShowLoginModal(true)}
                   onUserClick={onUserClick}
                 />
               ) : (
                 <NewsCard 
                   article={item.articleSnapshot} 
                   onLoginRequired={() => setShowLoginModal(true)}
                   onUserClick={onUserClick}
                 />
               )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="max-w-4xl mx-auto">
      <div className="mb-10 px-4 md:px-0">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tight">
          {activeTab === 'notifications' ? 'Notificações' : 'Minhas Ações'}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {activeTab === 'notifications' ? 'Fique por dentro de todas as suas interações' : 'Seu histórico completo de interações na plataforma'}
        </p>
      </div>


      <div className="border-b border-gray-100 dark:border-gray-800 mb-6">
        <nav className="flex w-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                id={tab.id}
                aria-label={tab.name}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-1 border-b-2 font-bold text-xs uppercase tracking-wider transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="hidden sm:inline">{tab.name}</span>
                {tab.count > 0 && (
                  <span className={`${tab.id === 'notifications' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'} px-1.5 py-0.5 rounded-full text-[9px] font-black min-w-[18px] text-center`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {loading ? (
        <div className="text-center py-8 flex flex-col items-center gap-2 text-gray-500">
          <Bell className="w-8 h-8 animate-bounce" />
          Carregando...
        </div>
      ) : renderContent()}
      
      {/* Bottom spacer for mobile navigation */}
      <div className="h-28 md:hidden" />

      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </section>
  );
};

export default MyActionsPage;