import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from './firebase';

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
