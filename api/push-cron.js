import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import webpush from 'web-push';

// Configuração do Web Push (VAPID)
const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || '';
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || '';

if (VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(
    'mailto:contato@onnews.com.br',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
  );
}

// Configuração do Firebase (Client SDK funciona no Node da Vercel)
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export default async function handler(req, res) {
  try {
    const subscriptionsSnapshot = await getDocs(collection(db, 'pushSubscriptions'));
    const subscriptions = [];
    subscriptionsSnapshot.forEach(doc => {
      subscriptions.push(JSON.parse(doc.data().subscription));
    });

    const notificationPayload = {
      title: '📰 Novas Notícias no On-News!',
      body: 'Confira agora as últimas atualizações e opiniões da nossa comunidade.',
      url: '/'
    };

    const pushPromises = subscriptions.map(sub => 
      webpush.sendNotification(sub, JSON.stringify(notificationPayload))
        .catch(err => console.error('Error sending push:', err))
    );

    await Promise.all(pushPromises);

    return res.status(200).json({ 
      success: true, 
      sentCount: subscriptions.length 
    });
  } catch (error) {
    console.error('Cron Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
