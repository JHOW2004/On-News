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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { toUserId, title, body, data } = req.body;

  if (!toUserId || !title || !body) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Get user tokens from Firestore
    const userDoc = await admin.firestore().collection('users').doc(toUserId).get();
    
    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = userDoc.data();
    const tokens = userData.fcmTokens || [];

    if (tokens.length === 0) {
      return res.status(200).json({ message: 'No tokens registered for user' });
    }

    const message = {
      notification: {
        title,
        body
      },
      data: data || {},
      tokens: tokens
    };

    const response = await admin.messaging().sendEachForMulticast(message);
    
    // Clean up invalid tokens
    if (response.failureCount > 0) {
      const failedTokens = [];
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          failedTokens.push(tokens[idx]);
        }
      });
      
      if (failedTokens.length > 0) {
        await admin.firestore().collection('users').doc(toUserId).update({
          fcmTokens: admin.firestore.FieldValue.arrayRemove(...failedTokens)
        });
      }
    }

    return res.status(200).json({ 
      success: true, 
      successCount: response.successCount,
      failureCount: response.failureCount 
    });
  } catch (error) {
    console.error('Error sending push notification:', error);
    return res.status(500).json({ error: error.message });
  }
}
