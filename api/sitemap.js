import admin from 'firebase-admin';

const SITE_URL = 'https://on-news-br.jhowtech.com.br';

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

function toIsoDate(value) {
  const date = value?.toDate?.() || new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function urlEntry(loc, lastmod, priority) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
}

export default async function handler(req, res) {
  const entries = [urlEntry(`${SITE_URL}/`, new Date().toISOString(), '1.0')];

  try {
    const db = admin.firestore();
    const snapshot = await db
      .collection('opinionPosts')
      .where('status', '==', 'published')
      .orderBy('publishedAt', 'desc')
      .limit(5000)
      .get();

    snapshot.forEach((doc) => {
      const data = doc.data();
      entries.push(
        urlEntry(`${SITE_URL}/post/${doc.id}`, toIsoDate(data.publishedAt), '0.8')
      );
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).send(xml);
}
