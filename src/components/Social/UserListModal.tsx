import React, { useState, useEffect } from 'react';
import { X, User as UserIcon, Loader2 } from 'lucide-react';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { User } from '../../types';
import FollowButton from './FollowButton';

interface UserListModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  userIds: string[];
  onUserClick: (userId: string) => void;
}

const UserListModal: React.FC<UserListModalProps> = ({ isOpen, onClose, title, userIds, onUserClick }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen || userIds.length === 0) {
      setUsers([]);
      setLoading(false);
      return;
    }

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const userPromises = userIds.map(async (id) => {
          const userDoc = await getDoc(doc(db, 'users', id));
          if (userDoc.exists()) {
            return { uid: userDoc.id, ...userDoc.data() } as User;
          }
          return null;
        });

        const fetchedUsers = (await Promise.all(userPromises)).filter(u => u !== null) as User[];
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users for list:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [isOpen, userIds]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]">
        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              Ninguém encontrado.
            </div>
          ) : (
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.uid} className="flex items-center justify-between group">
                  <div 
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => {
                        onUserClick(user.uid);
                        onClose();
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex-shrink-0 overflow-hidden">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                      ) : (
                        <UserIcon className="w-full h-full p-2 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900 dark:text-white group-hover:underline">
                        {user.displayName}
                      </p>
                      <p className="text-xs text-gray-500">@{user.username}</p>
                    </div>
                  </div>
                  <FollowButton userId={user.uid} className="px-3 py-1" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserListModal;
