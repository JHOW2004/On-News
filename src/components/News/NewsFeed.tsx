import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Loader2 } from 'lucide-react';
import { GNewsService, NewsArticle } from '../../lib/gnews';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import NewsCard from './NewsCard';
import OpinionCard from './OpinionCard';
import UserCarousel from '../Social/UserCarousel';
import { OpinionPost } from '../../types';

import LoginModal from '../Auth/LoginModal';
import toast from 'react-hot-toast';

interface NewsFeedProps {
  category?: string;
  searchQuery?: string;
  onUserClick?: (userId: string) => void;
  userId?: string; // For profile page
  status?: 'published' | 'draft';
  onEdit?: (post: OpinionPost) => void;
  onPostClick?: (post: OpinionPost) => void;
}

const NewsFeed: React.FC<NewsFeedProps> = ({ category, searchQuery, onUserClick, userId, status = 'published', onEdit, onPostClick }) => {
  const [articles, setArticles] = useState<(NewsArticle | OpinionPost)[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<(NewsArticle | OpinionPost)[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const ARTICLES_PER_PAGE = 20;

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      // Don't fetch GNews if we are looking for a specific user's posts
      if (!userId) {
        if (searchQuery) {
          await GNewsService.searchNews(searchQuery);
        } else if (category) {
          await GNewsService.getCategoryNews(category);
        } else {
          await GNewsService.getFeedNews();
        }
      }

      // We'll set up the real-time listener for Opinion Posts separately
      // but for the initial load, we'll wait for the first snapshot if needed
    } catch (error) {
      console.error('Error fetching news:', error);
      toast.error('Erro ao carregar notícias');
    } finally {
      setLoading(false);
    }
  }, [category, searchQuery, userId]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  useEffect(() => {
    // Real-time listener for Opinion Posts
    let opinionQuery;
    if (userId) {
      // User profile - show posts by this user with the specified status
      opinionQuery = query(
        collection(db, 'opinionPosts'),
        where('userId', '==', userId),
        where('status', '==', status),
        orderBy('publishedAt', 'desc')
      );
    } else {
      // Main feed - show all published opinion posts
      opinionQuery = query(
        collection(db, 'opinionPosts'),
        where('status', '==', status),
        orderBy('publishedAt', 'desc')
      );
    }

    const unsubscribe = onSnapshot(opinionQuery, (snapshot) => {
      const opinionPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        publishedAt: doc.data().publishedAt?.toDate() || new Date()
      })) as OpinionPost[];

      // Re-fetch or merge with existing articles
      const fetchAndMerge = async () => {
        let newsArticles: NewsArticle[] = [];
        if (!userId) {
          try {
            let res;
            if (searchQuery) res = await GNewsService.searchNews(searchQuery);
            else if (category) res = await GNewsService.getCategoryNews(category);
            else res = await GNewsService.getFeedNews();
            newsArticles = res.articles;
          } catch (e) {}
        }

        const merged = [...newsArticles, ...opinionPosts].sort((a, b) => {
          const dateA = new Date(a.publishedAt).getTime();
          const dateB = new Date(b.publishedAt).getTime();
          return dateB - dateA;
        });

        setArticles(merged);
        setDisplayedArticles(merged.slice(0, ARTICLES_PER_PAGE));
        setLoading(false);
      };

      fetchAndMerge();
    });

    return () => unsubscribe();
  }, [category, searchQuery, userId]);

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

  const renderSkeletonCards = () => (
    <div className="grid gap-6 w-full max-w-full overflow-hidden px-1">
      {[1, 2, 3].map((i) => (
        <article key={`skeleton-${i}`} className="bg-white dark:bg-gray-900 border-b md:border md:rounded-xl border-gray-100 dark:border-gray-800 mb-2 md:mb-6 overflow-hidden animate-pulse">
          {/* Header */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-3 w-full">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex-shrink-0" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3" />
            </div>
          </div>

          {/* Image */}
          <div className="aspect-video md:aspect-square w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-gray-300 dark:text-gray-700" />
          </div>

          {/* Action Bar */}
          <div className="p-3 space-y-3">
            <div className="flex space-x-4">
              <div className="w-7 h-7 rounded bg-gray-200 dark:bg-gray-800" />
              <div className="w-7 h-7 rounded bg-gray-200 dark:bg-gray-800" />
              <div className="w-7 h-7 rounded bg-gray-200 dark:bg-gray-800" />
            </div>
            <div className="space-y-2 pt-1">
              <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-full" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
            </div>
          </div>

          {/* Footer Button */}
          <div className="px-3 pb-3">
            <div className="h-9 bg-gray-200 dark:bg-gray-800 rounded-lg w-full" />
          </div>
        </article>
      ))}
    </div>
  );

  if (loading) {
    return (
      <section className="space-y-6">
        {renderSkeletonCards()}
      </section>
    );
  }

  const hasMoreArticles = displayedArticles.length < articles.length;

  return (
    <section className="space-y-6">
      {displayedArticles.length === 0 ? (
        <div className="space-y-6">
          <div className="text-center py-6">
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              {searchQuery ? 'Nenhuma publicação encontrada para sua pesquisa.' : 'Carregando as últimas notícias em tempo real...'}
            </p>
          </div>
          {!searchQuery && renderSkeletonCards()}
        </div>
      ) : (
        <>
          <div className="grid gap-6 w-full max-w-full overflow-hidden px-1">
            {displayedArticles.map((item, index) => {
              const isOpinion = (item as any).type === 'opinion';
              const card = (
                <div key={`card-${item.id}`} className="min-w-0 w-full">
                  {isOpinion ? (
                    <OpinionCard
                      post={item as OpinionPost}
                      onLoginRequired={() => setShowLoginModal(true)}
                      onUserClick={onUserClick}
                      onEdit={onEdit}
                      onPostClick={onPostClick}
                    />
                  ) : (
                    <NewsCard
                      article={item as NewsArticle}
                      onLoginRequired={() => setShowLoginModal(true)}
                      onUserClick={onUserClick}
                    />
                  )}
                </div>
              );

              return (
                <React.Fragment key={item.id}>
                  {card}
                  {index === 2 && !userId && !searchQuery && (
                    <div className="my-2 min-w-0 w-full">
                      <UserCarousel 
                        onUserClick={onUserClick!} 
                        onLoginRequired={() => setShowLoginModal(true)} 
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {hasMoreArticles && (
            <div
              ref={loadMoreRef}
              className="flex items-center justify-center py-8"
            >
              {loadingMore && (
                <div className="text-center">
                  <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto mb-2" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Carregando mais...</p>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Bottom spacer for mobile navigation */}
      <div className="h-28 md:hidden" />

      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </section>
  );
};

export default NewsFeed;