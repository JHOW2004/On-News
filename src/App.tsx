import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
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
import LoginModal from "./components/Auth/LoginModal";
import { NavigationItem } from "./types";

const AppContent: React.FC = () => {
  const [activeItem, setActiveItem] = useState<NavigationItem>("feed");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [viewingUserId, setViewingUserId] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { currentUser } = useAuth();

  const handleItemChange = (item: NavigationItem) => {
    // Check if user needs to login for certain features
    if (!currentUser && (item === "profile" || item === "my-actions")) {
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
        return <NewsFeed onUserClick={handleUserClick} />;
      case "categories":
        return <CategoryGrid onCategorySelect={handleCategorySelect} />;
      case "search":
        return <SearchPage onUserClick={handleUserClick} />;
      case "profile":
        return <ProfilePage />;
      case "my-actions":
        return <MyActionsPage />;
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
    <header className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Mobile Header (New) */}
      <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 sticky top-0 z-30">
        <div className="flex items-center justify-center space-x-2">
          <img src="/OnNewsBr.png" alt="OnNews" className="h-8 w-auto" />
          <span className="font-bold text-xl text-primary dark:text-white">
            On News
          </span>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar activeItem={activeItem} onItemChange={handleItemChange} />
      </div>

      {/* Main Content */}
      <section className="md:ml-64 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-6">
          {/* Page Header (Categories) */}
          {(selectedCategory || activeItem === "categories") &&
            !viewingUserId && (
              <div className="mb-6">
                {selectedCategory && (
                  <div className="flex items-center space-x-4">
                    <button
                      aria-label="return"
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
          {renderContent()}
        </div>
      </section>

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

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          className: "dark:bg-gray-800 dark:text-white",
        }}
      />
    </header>
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
