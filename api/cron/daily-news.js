import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (error) {
    console.error('Firebase admin initialization error:', error);
  }
}

export default async function handler(req, res) {
  // Verify that the request is coming from Vercel Cron
  // In production, you should use an environment variable CRON_SECRET
  // if (req.headers['authorization'] !== `Bearer ${process.env.CRON_SECRET}`) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  try {
    const db = admin.firestore();
    const usersSnapshot = await db.collection('users').get();
    
    const allTokens = [];
    usersSnapshot.forEach(doc => {
      const userData = doc.data();
      if (userData.fcmTokens && Array.isArray(userData.fcmTokens)) {
        allTokens.push(...userData.fcmTokens);
      }
    });

    if (allTokens.length === 0) {
      return res.status(200).json({ message: 'No tokens found' });
    }

    // FCM multicast limit is 500 tokens
    const batches = [];
    for (let i = 0; i < allTokens.length; i += 500) {
      batches.push(allTokens.slice(i, i + 500));
    }

    const results = await Promise.all(batches.map(tokens => {
      const message = {
        notification: {
          title: '🗞️ Notícias Fresquinhas!',
          body: 'As principais notícias do dia já estão disponíveis. Venha conferir o que está acontecendo no Brasil e no mundo!'
        },
        data: {
          url: '/'
        },
        tokens: tokens
      };
      return admin.messaging().sendEachForMulticast(message);
    }));

    return res.status(200).json({ 
      success: true, 
      batchesSent: results.length,
      totalSuccess: results.reduce((acc, curr) => acc + curr.successCount, 0),
      totalFailure: results.reduce((acc, curr) => acc + curr.failureCount, 0)
    });
  } catch (error) {
    console.error('Cron job error:', error);
    return res.status(500).json({ error: error.message });
  }
}
