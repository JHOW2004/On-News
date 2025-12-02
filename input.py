import os

# 1. Criar o componente de Prompt de Instalação
install_prompt_content = """
import React, { useEffect, useState } from 'react';
import { X, Download, Share } from 'lucide-react';

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detecta se é iOS
    const isIosDevice = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    
    if (isIosDevice && !isStandalone) {
      setIsIOS(true);
      // No iOS mostramos apenas uma vez por sessão para não ser intrusivo demais, 
      // ou removemos essa checagem se quiser mostrar SEMPRE.
      const hasSeenPrompt = sessionStorage.getItem('iosPromptSeen');
      if (!hasSeenPrompt) {
        setShowPrompt(true);
        sessionStorage.setItem('iosPromptSeen', 'true');
      }
    }

    // Detecta Android/Desktop (Chrome/Edge)
    const handleBeforeInstallPrompt = (e: any) => {
      // Impede o mini-infobar padrão do Chrome
      e.preventDefault();
      // Guarda o evento para acionar depois
      setDeferredPrompt(e);
      // Mostra nosso componente
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Mostra o prompt nativo do navegador
    deferredPrompt.prompt();

    // Espera a escolha do usuário
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    
    setDeferredPrompt(null);
  };

  const handleClose = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 max-w-md mx-auto relative">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img src="/pwa-192x192.png" alt="OnNews" className="w-12 h-12 rounded-lg shadow-sm" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-white">Instalar OnNews</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {isIOS 
                ? "Instale este aplicativo na sua tela inicial para uma melhor experiência."
                : "Adicione à sua tela inicial para acessar notícias em tempo real, mesmo offline."}
            </p>

            {isIOS ? (
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <p className="flex items-center gap-2 mb-1">
                  1. Toque no botão <Share className="w-4 h-4 text-blue-500" /> Compartilhar
                </p>
                <p>2. Selecione "Adicionar à Tela de Início"</p>
              </div>
            ) : (
              <button
                onClick={handleInstallClick}
                className="mt-3 w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Instalar Agora</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
"""

# 2. Atualizar o App.tsx para incluir o componente
app_content = """
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useAuth } from './contexts/AuthContext';
import Sidebar from './components/Layout/Sidebar';
import BottomNavigation from './components/Layout/BottomNavigation';
import InstallPrompt from './components/Layout/InstallPrompt';
import NewsFeed from './components/News/NewsFeed';
import CategoryGrid from './components/Categories/CategoryGrid';
import SearchPage from './components/Search/SearchPage';
import ProfilePage from './components/Profile/ProfilePage';
import MyActionsPage from './components/Profile/MyActionsPage';
import PublicProfilePage from './components/Profile/PublicProfilePage';
import LoginModal from './components/Auth/LoginModal';
import { NavigationItem } from './types';

const AppContent: React.FC = () => {
  const [activeItem, setActiveItem] = useState<NavigationItem>('feed');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [viewingUserId, setViewingUserId] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { currentUser } = useAuth();

  const handleItemChange = (item: NavigationItem) => {
    // Check if user needs to login for certain features
    if (!currentUser && (item === 'profile' || item === 'my-actions')) {
      setShowLoginModal(true);
      return;
    }
    
    setActiveItem(item);
    setViewingUserId(null); // Reset viewing user when changing tabs
    if (item !== 'categories') {
      setSelectedCategory('');
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleUserClick = (userId: string) => {
    if (currentUser && userId === currentUser.uid) {
        handleItemChange('profile');
    } else {
        setViewingUserId(userId);
        setActiveItem('user-profile');
    }
  };

  const renderContent = () => {
    if (activeItem === 'user-profile' && viewingUserId) {
        return (
            <PublicProfilePage 
                userId={viewingUserId} 
                onBack={() => {
                    setViewingUserId(null);
                    setActiveItem('feed');
                }}
                onUserClick={handleUserClick}
                onLoginRequired={() => setShowLoginModal(true)}
            />
        );
    }

    if (activeItem === 'categories' && selectedCategory) {
      return (
        <div className="pb-16 md:pb-0">
          <NewsFeed 
            category={selectedCategory} 
            onUserClick={handleUserClick}
          />
        </div>
      );
    }

    switch (activeItem) {
      case 'feed':
        return <NewsFeed onUserClick={handleUserClick} />;
      case 'categories':
        return <CategoryGrid onCategorySelect={handleCategorySelect} />;
      case 'search':
        return <SearchPage onUserClick={handleUserClick} />;
      case 'profile':
        return <ProfilePage />;
      case 'my-actions':
        return <MyActionsPage />;
      default:
        return <NewsFeed onUserClick={handleUserClick} />;
    }
  };

  const getPageTitle = () => {
    if (activeItem === 'categories' && selectedCategory) {
      const categoryNames = {
        'financas': 'Finanças',
        'saude': 'Saúde',
        'educacao': 'Educação',
        'esportes': 'Esportes',
        'ciencias': 'Ciências',
        'tecnologia': 'Tecnologia'
      };
      return categoryNames[selectedCategory as keyof typeof categoryNames] || selectedCategory;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Mobile Header (New) */}
      <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 sticky top-0 z-30">
        <div className="flex items-center justify-center space-x-2">
            <img src="/logoSF.png" alt="OnNews" className="h-8 w-auto" />
            <span className="font-bold text-xl text-primary dark:text-white">On News</span>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar activeItem={activeItem} onItemChange={handleItemChange} />
      </div>

      {/* Main Content */}
      <main className="md:ml-64 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-6">
          {/* Page Header (Categories) */}
          {(selectedCategory || activeItem === 'categories') && !viewingUserId && (
            <div className="mb-6">
              {selectedCategory && (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setSelectedCategory('')}
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
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation activeItem={activeItem} onItemChange={handleItemChange} />

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
          className: 'dark:bg-gray-800 dark:text-white',
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
"""

files = {
    "src/components/Layout/InstallPrompt.tsx": install_prompt_content,
    "src/App.tsx": app_content
}

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip())
        print(f"Arquivo atualizado/criado: {path}")

print("\\nPrompt de instalação configurado!")