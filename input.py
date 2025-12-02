import os

# 1. Backend (api/news.js)
# Correção: Usa a API URL moderna (remove o aviso de Deprecation) e garante limpeza dos parametros
api_news_content = """
export default async function handler(req, res) {
  // Configuração de CORS para permitir que seu front acesse
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Trata pre-flight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const apiKey = process.env.VITE_GNEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API Key not configured on server' });
  }

  try {
    // Usa a API URL moderna para parsear a requisição (Evita o aviso DEP0169)
    // req.url vem apenas como o path relativo na Vercel (ex: /?category=business)
    const requestUrl = new URL(req.url, `http://${req.headers.host}`);
    const params = new URLSearchParams(requestUrl.searchParams);

    // Extrai o endpoint e remove ele dos parametros que irão para a NewsAPI
    const endpoint = params.get('endpoint') || 'everything';
    params.delete('endpoint');

    // Adiciona a API Key
    params.append('apiKey', apiKey);

    // URL final para a NewsAPI
    const externalUrl = `https://newsapi.org/v2/${endpoint}?${params.toString()}`;

    const response = await fetch(externalUrl);
    const data = await response.json();

    if (!response.ok) {
        // Repassa o erro da NewsAPI para o frontend entender o que houve
        return res.status(response.status).json(data);
    }

    // Cache de 1 hora na Vercel
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    
    return res.status(200).json(data);
  } catch (error) {
    console.error("Serverless Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
"""

# 2. Frontend (src/lib/gnews.ts)
# Correção: Garante que 'endpoint' seja removido corretamente do objeto antes de virar string
gnews_frontend_content = """
// src/lib/gnews.ts

const NEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY || "";
const IS_DEV = import.meta.env.DEV;

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  lang?: string;
  source: {
    id: string | null;
    name: string;
  };
}

export interface NewsResponse {
  totalArticles: number;
  articles: NewsArticle[];
}

const newsApiCategoryMap: Record<string, string> = {
  financas: "business",
  saude: "health",
  educacao: "general",
  esportes: "sports",
  ciencias: "science",
  tecnologia: "technology",
};

// ---- Helper de Transformação ----
function transformNewsApiResponse(data: any): NewsResponse {
  if (!data || !Array.isArray(data.articles)) {
    // Se a API retornar erro, logamos para debug
    if (data?.status === 'error') {
        console.error("NewsAPI Error:", data.message);
    }
    return { totalArticles: 0, articles: [] };
  }

  const articles: NewsArticle[] = data.articles
    .filter((article: any) => article.title && article.url)
    .map((article: any, index: number): NewsArticle => {
      const urlBase64 = article.url ? btoa(article.url) : `news-${Date.now()}`;
      const id = `${urlBase64}-${index}`;

      return {
        id: id,
        title: article.title || "Sem título",
        description: article.description || "",
        content: article.content || "",
        url: article.url,
        image: article.urlToImage || "https://placehold.co/600x400?text=Sem+Imagem",
        publishedAt: article.publishedAt || new Date().toISOString(),
        lang: "pt",
        source: {
          id: article.source?.id || null,
          name: article.source?.name || "Fonte Desconhecida",
        },
      };
    });

  return {
    totalArticles: data.totalResults || articles.length,
    articles,
  };
}

// ---- Função Inteligente de Fetch ----
async function smartFetch(params: Record<string, string>): Promise<NewsResponse> {
  try {
    let url = '';
    
    // Separa o endpoint dos outros parâmetros
    // 'endpoint' não pode ir na query string final para a NewsAPI
    const { endpoint, ...restParams } = params;

    if (IS_DEV) {
      // Localhost: Chama direto a NewsAPI
      const queryParams = new URLSearchParams({
        ...restParams,
        apiKey: NEWS_API_KEY
      });
      
      url = `https://newsapi.org/v2/${endpoint}?${queryParams.toString()}`;
    } else {
      // Produção: Chama o Proxy da Vercel
      // Aqui enviamos o endpoint como query param para o NOSSO servidor saber o que fazer
      const queryParams = new URLSearchParams({
        ...restParams,
        endpoint: endpoint // O backend vai ler isso e remover depois
      });
      url = `/api/news?${queryParams.toString()}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    
    if (!response.ok) {
      console.error(`Erro na requisição (${response.status}):`, data);
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    return transformNewsApiResponse(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    return { totalArticles: 0, articles: [] };
  }
}

export class GNewsService {
  static async getFeedNews(): Promise<NewsResponse> {
    return smartFetch({
      endpoint: 'everything',
      domains: 'globo.com,uol.com.br,folha.com.br,estadao.com.br,cnnbrasil.com.br,r7.com,terra.com.br,abril.com.br,g1.globo.com,poder360.com.br,metropoles.com,brasildefato.com.br,agenciabrasil.ebc.com.br,jovempan.com.br,valor.globo.com',
      language: 'pt',
      pageSize: '50'
    });
  }

  static async getCategoryNews(category: string): Promise<NewsResponse> {
    const apiCategory = newsApiCategoryMap[category] || "general";
    
    // Nota: 'top-headlines' exige 'country' ou 'category'. 
    // Não suporta 'domains' junto com 'category'.
    return smartFetch({
      endpoint: 'top-headlines',
      country: 'br',
      category: apiCategory,
      pageSize: '50'
    });
  }

  static async searchNews(query: string): Promise<NewsResponse> {
    return smartFetch({
      endpoint: 'everything',
      q: query,
      language: 'pt',
      sortBy: 'publishedAt',
      pageSize: '50'
    });
  }
}
"""

files = {
    "api/news.js": api_news_content,
    "src/lib/gnews.ts": gnews_frontend_content
}

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip())
        print(f"Corrigido: {path}")

print("\\nArquivos atualizados. Commit para a Vercel para testar.")