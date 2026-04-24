import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { followUser, unfollowUser } from '../../lib/actions';
import { collection, query, where, onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { sendNotification } from '../../lib/notifications';
import toast from 'react-hot-toast';

interface FollowButtonProps {
  userId: string;
  onLoginRequired?: () => void;
  className?: string;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId, onLoginRequired, className }) => {
  const { currentUser } = useAuth();
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser || !userId) {
      setLoading(false);
      return;
    }

    const followId = `${currentUser.uid}_${userId}`;
    const unsubscribe = onSnapshot(doc(db, 'follows', followId), (doc) => {
      setIsFollowing(doc.exists());
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser, userId]);

  const handleFollow = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentUser) {
      onLoginRequired?.();
      return;
    }

    try {
      if (isFollowing) {
        await unfollowUser(currentUser.uid, userId);
      } else {
        await followUser(currentUser.uid, userId);
        
        // Send notification
        await sendNotification({
          toUserId: userId,
          fromUserId: currentUser.uid,
          fromUserName: currentUser.username,
          fromUserPhoto: currentUser.photoURL || '',
          type: 'follow'
        });

        toast.success('Agora você está seguindo!');
      }
    } catch (error) {
      toast.error('Erro ao processar solicitação');
    }
  };

  if (currentUser?.uid === userId) return null;

  return (
    <button
      onClick={handleFollow}
      disabled={loading}
      className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
        isFollowing
          ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30'
          : 'bg-primary text-white hover:bg-primary/90'
      } ${className}`}
    >
      {loading ? '...' : isFollowing ? 'Seguindo' : 'Seguir'}
    </button>
  );
};

export default FollowButton;
