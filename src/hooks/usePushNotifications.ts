import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export const usePushNotifications = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;

    const registerPush = async () => {
      try {
        if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
          return;
        }

        const registration = await navigator.serviceWorker.register('/push-sw.js');
        
        let subscription = await registration.pushManager.getSubscription();
        
        if (!subscription) {
          const permission = await Notification.requestPermission();
          if (permission !== 'granted') return;

          subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BMxqvAzS_x-hWg_XeedbM9lN0EzH_5F-ZpMid_aQJCFC07mdhRya0Rw9doypEYVLEBCi69XygQucwpW6Wo9jXis'
          });
        }

        if (subscription) {
          await setDoc(doc(db, 'pushSubscriptions', currentUser.uid), {
            subscription: JSON.stringify(subscription),
            updatedAt: new Date()
          });
        }
      } catch (error) {
        console.error('Push registration error:', error);
      }
    };

    registerPush();
  }, [currentUser]);
};
