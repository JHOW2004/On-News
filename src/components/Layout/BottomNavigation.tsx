import React from "react";
import { Home, Grid3x3 as Grid3X3, User, Activity, Search } from "lucide-react";
import { NavigationItem } from "../../types";

interface BottomNavigationProps {
  activeItem: NavigationItem;
  onItemChange: (item: NavigationItem) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeItem,
  onItemChange,
}) => {
  const navigationItems = [
    { id: "feed" as NavigationItem, label: "Explorar", icon: Home },
    { id: "categories" as NavigationItem, label: "Categorias", icon: Grid3X3 },
    { id: "search" as NavigationItem, label: "Pesquisar", icon: Search },
    { id: "my-actions" as NavigationItem, label: "Ações", icon: Activity },
    { id: "profile" as NavigationItem, label: "Perfil", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-2 md:hidden">
      <div className="flex justify-around">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              aria-label={item.label}
              key={item.id}
              onClick={() => onItemChange(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                isActive ? "text-primary" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
