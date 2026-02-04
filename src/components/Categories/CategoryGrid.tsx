import React from "react";
import {
  DollarSign,
  Heart,
  GraduationCap,
  Trophy,
  Atom,
  Laptop,
} from "lucide-react";
import { newsCategories } from "../../lib/gnews";

interface CategoryGridProps {
  onCategorySelect: (category: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategorySelect }) => {
  const categories = [
    {
      id: "financas",
      name: "Finanças",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      description: "Economia, investimentos e mercado financeiro",
    },
    {
      id: "saude",
      name: "Saúde",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      description: "Medicina, bem-estar e saúde pública",
    },
    {
      id: "educacao",
      name: "Educação",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      description: "Ensino, pesquisa e desenvolvimento acadêmico",
    },
    {
      id: "esportes",
      name: "Esportes",
      icon: Trophy,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      description: "Futebol, olimpíadas e competições esportivas",
    },
    {
      id: "ciencias",
      name: "Ciências",
      icon: Atom,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      description: "Descobertas científicas e pesquisas",
    },
    {
      id: "tecnologia",
      name: "Tecnologia",
      icon: Laptop,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      description: "Inovação, inteligência artificial e digital",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Categorias
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore notícias por área de interesse
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              aria-label={category.name}
              onClick={() => onCategorySelect(category.id)}
              className={`${category.bgColor} rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700 hover:scale-105`}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {category.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;
