import React, { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import SignupForm from "./SignupForm";
import toast from "react-hot-toast";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = "login" | "signup" | "reset-password";

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [currentView, setCurrentView] = useState<ModalView>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login, resetPassword } = useAuth();

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    try {
      await login(email, password);
      toast.success("Login realizado com sucesso!");
      onClose();
      resetForm();
    } catch (error: any) {
      toast.error(error.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Digite seu email");
      return;
    }

    setLoading(true);
    try {
      await resetPassword(email);
      toast.success("Email de recuperação enviado!");
      setCurrentView("login");
    } catch (error: any) {
      toast.error("Erro ao enviar email de recuperação");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setCurrentView("login");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <img src="/OnNewsBr.webp" alt="OnNews" className="h-10 w-auto" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {currentView === "login" && "Entrar"}
            {currentView === "signup" && "Criar Conta"}
            {currentView === "reset-password" && "Recuperar Senha"}
          </h2>
          <button
            aria-label="closeModal"
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentView === "signup" ? (
            <SignupForm
              onSuccess={handleClose}
              onBackToLogin={() => setCurrentView("login")}
            />
          ) : (
            <form
              onSubmit={
                currentView === "login" ? handleLogin : handleResetPassword
              }
            >
              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Password (only for login) */}
                {currentView === "login" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Senha
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      <button
                        aria-label="showpassword"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  aria-label="submitbutton"
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading
                    ? "Carregando..."
                    : currentView === "login"
                      ? "Entrar"
                      : "Enviar Email"}
                </button>
              </div>
            </form>
          )}

          {/* Footer Links */}
          {currentView !== "signup" && (
            <div className="mt-6 space-y-3 text-center">
              {currentView === "login" && (
                <>
                  <button
                    aria-label="resetpassword"
                    onClick={() => setCurrentView("reset-password")}
                    className="text-sm text-primary hover:underline block w-full"
                  >
                    Esqueci minha senha
                  </button>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Não tem conta?{" "}
                    <button
                      aria-label="sigup"
                      onClick={() => setCurrentView("signup")}
                      className="text-primary hover:underline font-medium"
                    >
                      Criar conta
                    </button>
                  </div>
                </>
              )}

              {currentView === "reset-password" && (
                <button
                  aria-label="login"
                  onClick={() => setCurrentView("login")}
                  className="text-sm text-primary hover:underline"
                >
                  Voltar ao login
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
