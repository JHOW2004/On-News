import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
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

// Inicializa Firebase Admin
const firebaseConfig = {
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { toUserId, title, body, url } = req.body;

  if (!toUserId) {
    return res.status(400).json({ error: 'Missing toUserId' });
  }

  try {
    const subDoc = await db.collection('pushSubscriptions').doc(toUserId).get();
    
    if (!subDoc.exists) {
      return res.status(404).json({ error: 'No subscription found for user' });
    }

    const subscription = JSON.parse(subDoc.data().subscription);

    const notificationPayload = {
      title: title || 'Nova interação no On-News!',
      body: body || 'Alguém interagiu com seu post.',
      url: url || '/'
    };

    await webpush.sendNotification(subscription, JSON.stringify(notificationPayload));

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Push Send Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
