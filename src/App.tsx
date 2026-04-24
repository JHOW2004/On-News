import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Bell, Activity, Plus, PlusSquare, Heart } from "lucide-react";

import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useAuth } from "./contexts/AuthContext";
import Sidebar from "./components/Layout/Sidebar";
import BottomNavigation from "./components/Layout/BottomNavigation";
import InstallPrompt from "./components/Layout/InstallPrompt";
import NewsFeed from "./components/News/NewsFeed";
import CategoryGrid from "./components/Categories/CategoryGrid";
import SearchPage from "./components/Search/SearchPage";
import ProfilePage from "./components/Profile/ProfilePage";
import MyActionsPage from "./components/Profile/MyActionsPage";
import PublicProfilePage from "./components/Profile/PublicProfilePage";
import OpinionPostForm from "./components/News/OpinionPostForm";
import PostDetail from "./components/News/PostDetail";
import LoginModal from "./components/Auth/LoginModal";
import { NavigationItem, OpinionPost } from "./types";
import { db } from "./lib/firebase";
import { subscribeToNotifications } from "./lib/notifications";
import { usePushNotifications } from "./hooks/usePushNotifications";

const AppContent: React.FC = () => {
  const [activeItem, setActiveItem] = useState<NavigationItem>("feed");
  const [editingPost, setEditingPost] = useState<any>(null);
  const [selectedPost, setSelectedPost] = useState<OpinionPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [viewingUserId, setViewingUserId] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const { currentUser } = useAuth();
  
  // Initialize Push Notifications
  usePushNotifications(currentUser);

  useEffect(() => {
    const checkRoute = async () => {
      const path = window.location.pathname;
      const postMatch = path.match(/^\/post\/([^/]+)/);
      
      if (postMatch) {
        const postId = postMatch[1];
        if (selectedPost?.id === postId) return;

        try {
          const { doc, getDoc } = await import('firebase/firestore');
          const postDoc = await getDoc(doc(db, 'opinionPosts', postId));
          if (postDoc.exists()) {
            const data = postDoc.data();
            setSelectedPost({ 
              id: postDoc.id, 
              ...data,
              publishedAt: data.publishedAt?.toDate() || new Date()
            } as OpinionPost);
          }
        } catch (error) {
          console.error("Error loading deep-linked post:", error);
        }
      } else {
        setSelectedPost(null);
      }
    };

    checkRoute();
    
    window.addEventListener('popstate', checkRoute);
    return () => window.removeEventListener('popstate', checkRoute);
  }, [selectedPost?.id]);

  const handlePostClick = (post: OpinionPost) => {
    setSelectedPost(post);
    window.history.pushState({ postId: post.id }, '', `/post/${post.id}`);
  };

  const handleEditDraft = (post: any) => {
    setEditingPost(post);
    setActiveItem("create-post");
  };


  useEffect(() => {
    if (currentUser) {
      const unsubscribe = subscribeToNotifications(currentUser.uid, (count) => {
        setUnreadNotifications(count);
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  const handleItemChange = (item: NavigationItem) => {
    // Check if user needs to login for certain features
    if (
      !currentUser &&
      (item === "profile" ||
        item === "my-actions" ||
        item === "create-post" ||
        item === "notifications")
    ) {
      setShowLoginModal(true);
      return;
    }

    setActiveItem(item);
    setViewingUserId(null); // Reset viewing user when changing tabs
    if (item !== "categories") {
      setSelectedCategory("");
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleUserClick = (userId: string) => {
    if (currentUser && userId === currentUser.uid) {
      handleItemChange("profile");
    } else {
      setViewingUserId(userId);
      setActiveItem("user-profile");
    }
  };

  const renderContent = () => {
    if (activeItem === "user-profile" && viewingUserId) {
      return (
        <PublicProfilePage
          userId={viewingUserId}
          onBack={() => {
            setViewingUserId(null);
            setActiveItem("feed");
          }}
          onUserClick={handleUserClick}
          onLoginRequired={() => setShowLoginModal(true)}
        />
      );
    }

    if (activeItem === "categories" && selectedCategory) {
      return (
        <div className="pb-16 md:pb-0">
          <NewsFeed category={selectedCategory} onUserClick={handleUserClick} />
        </div>
      );
    }

    switch (activeItem) {
      case "feed":
        return <NewsFeed onUserClick={handleUserClick} onPostClick={handlePostClick} />;
      case "categories":
        return <CategoryGrid onCategorySelect={handleCategorySelect} />;
      case "search":
        return <SearchPage onUserClick={handleUserClick} onPostClick={handlePostClick} />;
      case "profile":
        return <ProfilePage onUserClick={handleUserClick} onEditDraft={handleEditDraft} onPostClick={handlePostClick} />;
      case "my-actions":
      case "notifications":
        return <MyActionsPage onUserClick={handleUserClick} onPostClick={handlePostClick} />;
      case "create-post":
        return (
          <div className="max-w-2xl mx-auto py-4">
            <OpinionPostForm
              editingPost={editingPost}
              onSuccess={() => {
                setEditingPost(null);
                setActiveItem("feed");
              }}
              onCancel={() => {
                setEditingPost(null);
                setActiveItem("feed");
              }}
            />
          </div>
        );
      default:
        return <NewsFeed onUserClick={handleUserClick} />;
    }
  };

  const getPageTitle = () => {
    if (activeItem === "categories" && selectedCategory) {
      const categoryNames = {
        financas: "Finanças",
        saude: "Saúde",
        educacao: "Educação",
        esportes: "Esportes",
        ciencias: "Ciências",
        tecnologia: "Tecnologia",
      };
      return (
        categoryNames[selectedCategory as keyof typeof categoryNames] ||
        selectedCategory
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors flex flex-col">
      {/* Mobile Header (Instagram Style) */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 glass border-b border-gray-100 dark:border-gray-800 w-full max-w-full overflow-hidden">
        <div className="flex items-center justify-between px-4 h-14 w-full">
          <div
            className="flex items-center space-x-1 cursor-pointer select-none"
            onClick={() => handleItemChange("feed")}
          >
            <span className="font-serif italic text-xl font-black text-gray-900 dark:text-white tracking-tight">
              On News
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <button
              onClick={() => handleItemChange("create-post")}
              className="text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity"
            >
              <PlusSquare className="w-6 h-6" strokeWidth={2} />
            </button>
            <button
              onClick={() => handleItemChange("notifications")}
              className="relative text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity"
            >
              <Heart className="w-6 h-6" strokeWidth={2} />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 w-full mt-14 md:mt-0">
        {/* Desktop Sidebar (Fixed in component) */}
        <div className="hidden md:block">
          <Sidebar activeItem={activeItem} onItemChange={handleItemChange} />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 pb-24 md:pb-0 md:pl-64">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-6 md:py-10 pb-32 md:pb-10">
            {/* Page Header (Categories) */}
            {(selectedCategory || activeItem === "categories") &&
              !viewingUserId && (
                <div className="mb-6">
                  {selectedCategory && (
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setSelectedCategory("")}
                        className="text-primary dark:text-white hover:underline text-sm"
                      >
                        ← Voltar
                      </button>
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {getPageTitle()}
                      </h1>
                    </div>
                  )}
                </div>
              )}

            {/* Content */}
            <div className="animate-in fade-in duration-500">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation
        activeItem={activeItem}
        onItemChange={handleItemChange}
      />

      {/* PWA Install Prompt */}
      <InstallPrompt />

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />

      {/* Post Detail Modal */}
      {selectedPost && (
        <PostDetail 
          post={selectedPost} 
          onClose={() => {
            setSelectedPost(null);
            window.history.pushState({}, "", "/");
          }}
          onUserClick={(uid) => {
            setSelectedPost(null);
            window.history.pushState({}, "", "/");
            handleUserClick(uid);
          }}
        />
      )}

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          className: "dark:bg-gray-800 dark:text-white",
        }}
      />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
