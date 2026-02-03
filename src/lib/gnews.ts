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
      pageSize: '100'
    });
  }

  static async getCategoryNews(category: string): Promise<NewsResponse> {
    const apiCategory = newsApiCategoryMap[category] || "general";
    
    // Nota: 'top-headlines' exige 'country' ou 'category'. 
    // Não suporta 'domains' junto com 'category'.
    return smartFetch({
      endpoint: 'everything',
      language: 'pt',
      q: apiCategory,
      pageSize: '100'
    });
  }

  static async searchNews(query: string): Promise<NewsResponse> {
    return smartFetch({
      endpoint: 'everything',
      q: query,
      language: 'pt',
      sortBy: 'publishedAt',
      pageSize: '100'
    });
  }
}