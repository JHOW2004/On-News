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