import React from "react";
import {
  Home,
  Grid3x3 as Grid3X3,
  User,
  Activity,
  Search,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useAuth } from "../../contexts/AuthContext";
import { NavigationItem } from "../../types";

interface SidebarProps {
  activeItem: NavigationItem;
  onItemChange: (item: NavigationItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemChange }) => {
  const { theme, toggleTheme } = useTheme();
  const { logout, currentUser } = useAuth();

  const navigationItems = [
    { id: "feed" as NavigationItem, label: "Explorar", icon: Home },
    { id: "categories" as NavigationItem, label: "Categorias", icon: Grid3X3 },
    { id: "search" as NavigationItem, label: "Pesquisar", icon: Search },
    { id: "profile" as NavigationItem, label: "Perfil", icon: User },
    {
      id: "my-actions" as NavigationItem,
      label: "Minhas Ações",
      icon: Activity,
    },
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <img src="/logoSF.webp" alt="OnNews" className="h-10 w-auto" />
          <span className="font-bold text-xl text-primary dark:text-white">
            On News
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <li key={item.id}>
                <button
                  aria-label={item.label}
                  onClick={() => onItemChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info & Actions */}
      {currentUser && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-medium">
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt={currentUser.displayName}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                currentUser.displayName?.charAt(0).toUpperCase()
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {currentUser.displayName}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                @{currentUser.username}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              aria-label="theme"
              onClick={toggleTheme}
              className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
              <span className="text-sm">
                {theme === "light" ? "Escuro" : "Claro"}
              </span>
            </button>

            <button
              aria-label="logout"
              onClick={handleLogout}
              className="flex items-center justify-center p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
