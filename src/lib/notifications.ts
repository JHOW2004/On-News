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
    // Save to Firestore
    await addDoc(collection(db, 'notifications'), {
      ...data,
      read: false,
      createdAt: serverTimestamp()
    });

    // Trigger Push Notification
    fetch('/api/send-push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        toUserId: data.toUserId,
        title: 'On News',
        body: `${data.fromUserName} ${
          data.type === 'like' ? 'curtiu seu artigo' : 
          data.type === 'comment' ? 'comentou no seu artigo' : 
          data.type === 'reply' ? 'respondeu seu comentário' : 
          data.type === 'follow' ? 'começou a seguir você' : 
          'enviou uma mensagem'
        }${data.articleTitle ? `: "${data.articleTitle}"` : ''}`,
        data: {
          url: data.articleId ? `/post/${data.articleId}` : '/notifications'
        }
      }),
    }).catch(err => console.error('Push trigger error:', err));

  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
