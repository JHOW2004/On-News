import { collection, query, where, onSnapshot, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface NotificationData {
  toUserId: string;
  fromUserId: string;
  fromUserName: string;
  fromUserPhoto?: string;
  type: 'like' | 'comment' | 'reply' | 'follow' | 'system';
  articleId?: string;
  articleTitle?: string;
  commentContent?: string;
}

export const subscribeToNotifications = (userId: string, callback: (count: number) => void) => {
  if (!userId) return () => {};

  const q = query(
    collection(db, 'notifications'),
    where('toUserId', '==', userId),
    where('read', '==', false),
    orderBy('createdAt', 'desc')
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    callback(snapshot.size);
  });

  return unsubscribe;
};

export const sendNotification = async (data: NotificationData) => {
  if (data.fromUserId === data.toUserId) return;

  try {
    await addDoc(collection(db, 'notifications'), {
      ...data,
      read: false,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
