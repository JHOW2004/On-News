// src/lib/gnews.ts

const NEWS_API_KEY = import.meta.env.VITE_GNEWS_API_KEY || "";
const BASE_URL = "https://newsapi.org/v2";

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
        image:
          article.urlToImage || "https://placehold.co/600x400?text=Sem+Imagem",
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

export class GNewsService {
  static async getFeedNews(): Promise<NewsResponse> {
    if (!NEWS_API_KEY) {
      console.warn("NewsAPI key not configured.");
      return { totalArticles: 0, articles: [] };
    }

    try {
      const url = `${BASE_URL}/everything?domains=globo.com,uol.com.br,folha.com.br,estadao.com.br,cnnbrasil.com.br,r7.com,terra.com.br,abril.com.br,g1.globo.com,poder360.com.br,metropoles.com,brasildefato.com.br,agenciabrasil.ebc.com.br,jovempan.com.br,valor.globo.com&language=pt&apiKey=${NEWS_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return transformNewsApiResponse(data);
    } catch (error) {
      console.error("Error fetching feed news:", error);
      return { totalArticles: 0, articles: [] };
    }
  }

  static async getCategoryNews(category: string): Promise<NewsResponse> {
    if (!NEWS_API_KEY) return { totalArticles: 0, articles: [] };

    try {
      const apiCategory = newsApiCategoryMap[category] || "general";
      const url =
        `${BASE_URL}/everything?language=pt` +
        `&q=${encodeURIComponent(apiCategory)}` +
        `&pageSize=100` +
        `&apiKey=${NEWS_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return transformNewsApiResponse(data);
    } catch (error) {
      console.error("Error fetching category news:", error);
      return { totalArticles: 0, articles: [] };
    }
  }

  static async searchNews(query: string): Promise<NewsResponse> {
    if (!NEWS_API_KEY) return { totalArticles: 0, articles: [] };

    try {
      const url = `${BASE_URL}/everything?q=${encodeURIComponent(
        query
      )}&language=pt&sortBy=publishedAt&pageSize=100&apiKey=${NEWS_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return transformNewsApiResponse(data);
    } catch (error) {
      console.error("Error searching news:", error);
      return { totalArticles: 0, articles: [] };
    }
  }
}