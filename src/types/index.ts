import { NewsArticle } from '../lib/gnews';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  username: string;
  photoURL?: string;
  description?: string;
  createdAt: Date;
}

export interface Comment {
  id: string;
  articleId: string;
  userId: string;
  username: string;
  userPhoto?: string;
  content: string;
  createdAt: Date;
  articleSnapshot?: NewsArticle;
}

export interface Like {
  id: string;
  articleId: string;
  userId: string;
  username?: string;
  userPhoto?: string;
  createdAt: Date;
  articleSnapshot?: NewsArticle;
}

export interface ArticleInteraction {
  articleId: string;
  comments: Comment[];
  likes: Like[];
  likesCount: number;
  commentsCount: number;
}

export type Theme = 'light' | 'dark';

export type NavigationItem = 'feed' | 'categories' | 'profile' | 'my-actions' | 'search' | 'user-profile';