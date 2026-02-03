export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const apiKey = process.env.VITE_GNEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API Key not configured on server' });
  }

  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host}`);
    const params = new URLSearchParams(requestUrl.searchParams);

    const endpoint = params.get('endpoint') || 'everything';
    params.delete('endpoint');

    params.append('apiKey', apiKey);

    const externalUrl = `https://newsapi.org/v2/${endpoint}?${params.toString()}`;

    const response = await fetch(externalUrl);
    const data = await response.json();

    if (!response.ok) {
        return res.status(response.status).json(data);
    }

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    
    return res.status(200).json(data);
  } catch (error) {
    console.error("Serverless Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}