import React, { useEffect, useState } from "react";
import { X, Download, Share, MoreVertical, Menu } from "lucide-react";

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    // 1. Verifica se já está instalado (Modo Standalone)
    const checkStandalone = () => {
      const isStandaloneMode =
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as any).standalone === true;
      setIsStandalone(isStandaloneMode);

      // Só mostra o prompt se NÃO estiver instalado
      if (!isStandaloneMode) {
        setShowPrompt(true);
      }
    };

    checkStandalone();

    // 2. Detecta se é iOS
    const isIosDevice = /iphone|ipad|ipod/.test(
      window.navigator.userAgent.toLowerCase(),
    );
    setIsIOS(isIosDevice);

    // 3. Escuta o evento do Chrome/Android para instalação automática
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Garante que o prompt apareça quando o evento disparar
      if (!isStandalone) setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, [isStandalone]);

  const handleInstallClick = async () => {
    // Se o navegador permitiu a instalação automática (evento disparou)
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    } else {
      // Se o navegador não permitiu (ou é iOS, ou usuário já recusou antes), mostramos instruções manuais
      setShowInstructions(!showInstructions);
    }
  };

  // Se já estiver instalado, não renderiza nada
  if (isStandalone || !showPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-slide-up">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 max-w-md mx-auto relative">
        {/* Botão Fechar (Opcional: O usuário pediu para sempre aparecer, mas é bom ter um fechar para a sessão atual) */}
        <button
          aria-label="close"
          onClick={() => setShowPrompt(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-3">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                src="/pwa-192x192.png"
                alt="OnNews"
                className="w-12 h-12 rounded-lg shadow-sm"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white">
                Instalar App
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Tenha a melhor experiência lendo notícias direto da sua tela
                inicial.
              </p>
            </div>
          </div>

          {/* Área de Ação */}
          <div className="mt-1">
            {showInstructions ? (
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 animate-fade-in">
                <p className="font-semibold mb-2">Como instalar manualmente:</p>
                {isIOS ? (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      1. Toque em <Share className="w-4 h-4 text-blue-500" />{" "}
                      <strong>Compartilhar</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      2. Selecione{" "}
                      <span className="font-bold">
                        "Adicionar à Tela de Início"
                      </span>
                    </li>
                  </ul>
                ) : (
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      1. Toque no menu <MoreVertical className="w-4 h-4" />{" "}
                      (três pontos)
                    </li>
                    <li className="flex items-center gap-2">
                      2. Selecione{" "}
                      <span className="font-bold">"Instalar aplicativo"</span>{" "}
                      ou{" "}
                      <span className="font-bold">
                        "Adicionar à tela inicial"
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <button
                aria-label="download"
                onClick={handleInstallClick}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-sm"
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
