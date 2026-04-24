import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import webpush from 'web-push';

// Configuração do Web Push (VAPID)
// Em produção, use variáveis de ambiente: VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY
const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || '';
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || '';

if (VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(
    'mailto:contato@onnews.com.br',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
  );
}

// Inicializa Firebase Admin
const firebaseConfig = {
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  // Para Firebase Admin na Vercel, o ideal é usar uma Service Account JSON
  // Mas para simplificar aqui, vamos usar o mínimo
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();

export default async function handler(req, res) {
  // Proteção simples: Vercel envia um cabeçalho específico para Crons
  // if (req.headers['x-vercel-cron'] !== '1') {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  try {
    const subscriptionsSnapshot = await db.collection('pushSubscriptions').get();
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
