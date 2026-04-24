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
  PlusSquare,
  Bell,
  Heart,
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
    { id: "feed" as NavigationItem, label: "Página Inicial", icon: Home },
    { id: "search" as NavigationItem, label: "Pesquisa", icon: Search },
    { id: "categories" as NavigationItem, label: "Explorar", icon: Grid3X3 },
    { id: "create-post" as NavigationItem, label: "Criar", icon: PlusSquare },
    {
      id: "notifications" as NavigationItem,
      label: "Notificações",
      icon: Heart,
    },
    { id: "profile" as NavigationItem, label: "Perfil", icon: User },
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col z-50">
      {/* Logo */}
      <div className="px-6 py-10 mb-2">
        <div
          className="font-serif italic text-2xl font-black text-gray-900 dark:text-white tracking-tight cursor-pointer"
          onClick={() => onItemChange("feed")}
        >
          On News
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <li key={item.id}>
                <button
                  aria-label={item.label}
                  onClick={() => onItemChange(item.id)}
                  className={`w-full flex items-center space-x-4 px-3 py-3 rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? "bg-gray-100/80 dark:bg-gray-800/80" 
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 transition-transform group-hover:scale-105 ${
                      isActive ? "text-primary dark:text-white" : "text-gray-900 dark:text-white"
                    }`} 
                    strokeWidth={isActive ? 2.5 : 1.5}
                  />
                  <span
                    className={`text-base transition-all ${
                      isActive ? "font-black text-primary dark:text-white" : "font-medium text-gray-900 dark:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 mb-4 space-y-2">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center space-x-4 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all group"
        >
          {theme === "light" ? (
            <Moon className="w-7 h-7" strokeWidth={1.5} />
          ) : (
            <Sun className="w-7 h-7" strokeWidth={1.5} />
          )}
          <span className="text-gray-900 dark:text-white">Mudar aparência</span>
        </button>

        {currentUser && (
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-4 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-red-500"
          >
            <LogOut className="w-7 h-7" strokeWidth={1.5} />
            <span>Sair</span>
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
