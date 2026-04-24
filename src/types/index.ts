import { NewsArticle } from '../lib/gnews';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  username: string;
  photoURL?: string;
  description?: string;
  createdAt: Date;
  followersCount?: number;
  followingCount?: number;
}

export interface Follow {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
}

export interface Block {
  id: string;
  blockerId: string;
  blockedId: string;
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
  parentCommentId?: string;
  repliesCount?: number;
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

export interface OpinionPost {
  id: string;
  userId: string;
  userName: string;
  userPhoto?: string;
  title: string;
  content: string;
  color: string;
  authorName: string;
  publishedAt: Date;
  status: 'published' | 'draft';
  likesCount: number;
  commentsCount: number;
  type: 'opinion';
}

export interface Notification {
  id: string;
  toUserId: string;
  fromUserId: string;
  fromUserName: string;
  fromUserPhoto?: string;
  type: 'like' | 'comment' | 'reply' | 'follow' | 'system';
  articleId?: string;
  articleTitle?: string;
  commentContent?: string;
  read: boolean;
  createdAt: Date;
}

export type Theme = 'light' | 'dark';

export type NavigationItem = 'feed' | 'categories' | 'profile' | 'my-actions' | 'search' | 'user-profile' | 'create-post' | 'notifications';