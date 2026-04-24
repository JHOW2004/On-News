import React from "react";
import { Home, Grid3x3 as Grid3X3, User, Search, PlusSquare, Heart } from "lucide-react";
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
    { id: "feed" as NavigationItem, label: "Feed", icon: Home },
    { id: "search" as NavigationItem, label: "Search", icon: Search },
    { id: "create-post" as NavigationItem, label: "Create", icon: PlusSquare },
    { id: "notifications" as NavigationItem, label: "Activity", icon: Heart },
    { id: "profile" as NavigationItem, label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full max-w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-2 md:hidden z-50 overflow-hidden">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                aria-label={item.label}
                onClick={() => onItemChange(item.id)}
                className={`flex flex-col items-center justify-center flex-1 py-1 transition-all duration-200 ${
                  isActive ? "scale-110" : "opacity-80 hover:opacity-100"
                }`}
              >
                <Icon
                  className={`w-7 h-7 transition-colors ${
                    isActive ? "text-primary dark:text-white" : "text-gray-900 dark:text-white"
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;

