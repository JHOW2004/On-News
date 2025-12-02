// src/lib/gnews.ts

const NEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY || "";
const IS_DEV = import.meta.env.DEV; // Vite injeta true se estiver rodando localmente

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

    // SEPARANDO A LÓGICA:
    // Localhost -> Chama direto a NewsAPI (Permitido no plano free para dev)
    // Produção -> Chama o Proxy da Vercel (Necessário para evitar erro 426)
    
    if (IS_DEV) {
      const endpoint = params.endpoint; // 'everything' ou 'top-headlines'
      const queryParams = new URLSearchParams({
        ...params,
        apiKey: NEWS_API_KEY // Usa a chave local do .env
      });
      // Remove o endpoint dos params para não duplicar
      queryParams.delete('endpoint');
      
      url = `https://newsapi.org/v2/${endpoint}?${queryParams.toString()}`;
    } else {
      // Em produção, chama nossa API interna
      const queryParams = new URLSearchParams(params);
      url = `/api/news?${queryParams.toString()}`;
    }

    const response = await fetch(url);
    
    if (!response.ok) {
      // Se der erro 426 em dev, avisa no console
      if (response.status === 426 && IS_DEV) {
        console.error("NewsAPI bloqueou localhost. Verifique se está usando 'localhost' na URL.");
      }
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
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