import React, { useState, useEffect } from 'react';
import { User as UserIcon, ChevronRight } from 'lucide-react';
import { collection, query, limit, onSnapshot, getDocs, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { User } from '../../types';
import FollowButton from './FollowButton';

interface UserCarouselProps {
  onUserClick: (userId: string) => void;
  onLoginRequired: () => void;
}

const UserCarousel: React.FC<UserCarouselProps> = ({ onUserClick, onLoginRequired }) => {
  const { currentUser } = useAuth();
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const usersSnap = await getDocs(query(collection(db, 'users'), limit(50)));
        const allUsers = usersSnap.docs.map(doc => ({ uid: doc.id, ...doc.data() })) as User[];

        let filtered = allUsers.filter(u => u.uid !== currentUser?.uid);

        if (currentUser) {
          const followsSnap = await getDocs(query(collection(db, 'follows'), where('followerId', '==', currentUser.uid)));
          const followedIds = new Set(followsSnap.docs.map(doc => doc.data().followingId));
          const blocksSnap = await getDocs(query(collection(db, 'blocks'), where('blockerId', '==', currentUser.uid)));
          const blockersSnap = await getDocs(query(collection(db, 'blocks'), where('blockedId', '==', currentUser.uid)));
          const restrictedIds = new Set([
            ...blocksSnap.docs.map(doc => doc.data().blockedId),
            ...blockersSnap.docs.map(doc => doc.data().blockerId)
          ]);

          filtered = filtered.filter(u => !followedIds.has(u.uid) && !restrictedIds.has(u.uid));
        }

        setSuggestedUsers(filtered.slice(0, 15));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [currentUser]);

  if (loading || suggestedUsers.length === 0) return null;

  return (
    <div className="py-4 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between mb-4 px-4">
        <h3 className="font-bold text-sm text-gray-500 dark:text-gray-400">Sugestões para você</h3>
        <button className="text-xs font-bold text-primary hover:text-gray-900 dark:hover:text-white transition-colors">
          Ver tudo
        </button>
      </div>

      <div className="flex overflow-x-auto gap-3 pb-2 px-4 custom-scrollbar snap-x no-scrollbar">
        {suggestedUsers.map((user) => (
          <div 
            key={user.uid}
            className="flex-shrink-0 w-44 bg-white dark:bg-gray-800 rounded-lg p-5 flex flex-col items-center text-center snap-start border border-gray-100 dark:border-gray-700 shadow-sm"
          >
            <div 
              className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] cursor-pointer mb-3"
              onClick={() => onUserClick(user.uid)}
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-[2px]">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <UserIcon className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4 w-full">
              <p 
                className="text-sm font-bold text-gray-900 dark:text-white truncate cursor-pointer hover:underline"
                onClick={() => onUserClick(user.uid)}
              >
                {user.username}
              </p>
              <p className="text-xs text-gray-400 truncate">{user.displayName}</p>
            </div>

            <FollowButton 
              userId={user.uid} 
              onLoginRequired={onLoginRequired}
              className="w-full py-1 text-xs"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCarousel;
