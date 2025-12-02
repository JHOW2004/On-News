export default async function handler(req, res) {
  const { query } = req;
  const apiKey = process.env.VITE_GNEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API Key not configured on server' });
  }

  // Reconstrói a URL da NewsAPI com os parâmetros vindos do front
  const baseUrl = 'https://newsapi.org/v2';
  
  // Pega o endpoint (everything ou top-headlines) e remove da query
  const endpoint = query.endpoint || 'everything';
  delete query.endpoint;

  // Monta a string de query params
  const queryString = new URLSearchParams({
    ...query,
    apiKey: apiKey, // Adiciona a chave aqui no servidor (seguro)
  }).toString();

  try {
    const response = await fetch(`${baseUrl}/${endpoint}?${queryString}`);
    const data = await response.json();

    // Cache no navegador por 1 hora para economizar requisições
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch news' });
  }
}