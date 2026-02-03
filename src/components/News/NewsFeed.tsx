import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Loader2 } from 'lucide-react';
import { GNewsService, NewsArticle } from '../../lib/gnews';
import NewsCard from './NewsCard';
import LoginModal from '../Auth/LoginModal';
import toast from 'react-hot-toast';

interface NewsFeedProps {
  category?: string;
  searchQuery?: string;
  onUserClick?: (userId: string) => void;
}

const NewsFeed: React.FC<NewsFeedProps> = ({ category, searchQuery, onUserClick }) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const ARTICLES_PER_PAGE = 100;

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      let response;
      if (searchQuery) {
        response = await GNewsService.searchNews(searchQuery);
      } else if (category) {
        response = await GNewsService.getCategoryNews(category);
      } else {
        response = await GNewsService.getFeedNews();
      }
      
      setArticles(response.articles);
      setCurrentPage(0);
      setDisplayedArticles(response.articles.slice(0, ARTICLES_PER_PAGE));
    } catch (error) {
      console.error('Error fetching news:', error);
      toast.error('Erro ao carregar notícias');
    } finally {
      setLoading(false);
    }
  }, [category, searchQuery]);

  const loadMoreArticles = useCallback(() => {
    if (loadingMore) return;
    
    setLoadingMore(true);
    const nextPage = currentPage + 1;
    const startIndex = nextPage * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    const newArticles = articles.slice(startIndex, endIndex);
    
    if (newArticles.length > 0) {
      setTimeout(() => {
        setDisplayedArticles(prev => [...prev, ...newArticles]);
        setCurrentPage(nextPage);
        setLoadingMore(false);
      }, 500);
    } else {
      setLoadingMore(false);
    }
  }, [articles, currentPage, loadingMore]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingMore) {
          loadMoreArticles();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current && displayedArticles.length > 0) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [displayedArticles.length, loadingMore, loadMoreArticles]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-2" />
          <p className="text-gray-600 dark:text-gray-400">Carregando notícias...</p>
        </div>
      </div>
    );
  }

  const hasMoreArticles = displayedArticles.length < articles.length;

  return (
    <div className="space-y-6">
      {displayedArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            {searchQuery ? 'Nenhuma notícia encontrada para sua pesquisa.' : 'Nenhuma notícia disponível no momento.'}
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-6">
            {displayedArticles.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                onLoginRequired={() => setShowLoginModal(true)}
                onUserClick={onUserClick}
              />
            ))}
          </div>

          {hasMoreArticles && (
            <div
              ref={loadMoreRef}
              className="flex items-center justify-center py-8"
            >
              {loadingMore && (
                <div className="text-center">
                  <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto mb-2" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Carregando mais notícias...</p>
                </div>
              )}
            </div>
          )}

          {!hasMoreArticles && displayedArticles.length > 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Você visualizou todas as {articles.length} notícias disponíveis.
              </p>
            </div>
          )}
        </>
      )}

      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};

export default NewsFeed;