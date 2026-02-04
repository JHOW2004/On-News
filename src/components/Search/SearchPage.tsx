import React, { useState } from "react";
import { Search as SearchIcon, X, User } from "lucide-react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { User as UserType } from "../../types";
import NewsFeed from "../News/NewsFeed";

interface SearchPageProps {
  onUserClick: (userId: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ onUserClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [searchType, setSearchType] = useState<"news" | "users">("news");
  const [foundUsers, setFoundUsers] = useState<UserType[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setActiveSearch(searchQuery.trim());

    if (searchType === "users") {
      setLoadingUsers(true);
      try {
        // Basic username search query
        const usersRef = collection(db, "users");
        const q = query(
          usersRef,
          where("username", ">=", searchQuery),
          where("username", "<=", searchQuery + "\uf8ff"),
        );

        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map((doc) => doc.data() as UserType);
        setFoundUsers(users);
      } catch (error) {
        console.error("Error searching users", error);
      } finally {
        setLoadingUsers(false);
      }
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setActiveSearch("");
    setFoundUsers([]);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Pesquisar
        </h1>

        {/* Search Type Toggle */}
        <div className="flex space-x-4 mb-4">
          <button
            aria-label="notice"
            onClick={() => setSearchType("news")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${searchType === "news" ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`}
          >
            Notícias
          </button>
          <button
            aria-label="users"
            onClick={() => setSearchType("users")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${searchType === "users" ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`}
          >
            Usuários
          </button>
        </div>

        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                searchType === "news"
                  ? "Pesquisar notícias..."
                  : "Pesquisar usuário (username)..."
              }
              className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {searchQuery && (
              <button
                aria-label="search"
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>
      </div>

      {searchType === "news" ? (
        activeSearch ? (
          <NewsFeed searchQuery={activeSearch} onUserClick={onUserClick} />
        ) : null
      ) : (
        <div className="space-y-4">
          {loadingUsers && (
            <div className="text-center">Pesquisando usuários...</div>
          )}

          {activeSearch && !loadingUsers && foundUsers.length === 0 && (
            <div className="text-center text-gray-500">
              Nenhum usuário encontrado.
            </div>
          )}

          {foundUsers.map((user) => (
            <div
              key={user.uid}
              onClick={() => onUserClick(user.uid)}
              className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold overflow-hidden">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.username}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-6 h-6" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {user.displayName}
                </h3>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
