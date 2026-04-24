import React, { useState } from "react";
import { Search as SearchIcon, X, User, ChevronRight, Loader2 } from "lucide-react";

import { collection, query, where, getDocs, getDoc, doc, limit } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { User as UserType } from "../../types";
import NewsFeed from "../News/NewsFeed";
import UserCarousel from "../Social/UserCarousel";
import { useAuth } from "../../contexts/AuthContext";

interface SearchPageProps {
  onUserClick: (userId: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ onUserClick }) => {
  const { currentUser } = useAuth();
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
        const usersRef = collection(db, "users");
        const q = query(
          usersRef,
          where("username", ">=", searchQuery.trim().toLowerCase()),
          where("username", "<=", searchQuery.trim().toLowerCase() + "\uf8ff"),
          limit(20)
        );

        const querySnapshot = await getDocs(q);
        let allUsers = querySnapshot.docs.map((doc) => ({ uid: doc.id, ...doc.data() } as UserType));
        
        let filtered = allUsers.filter(u => u.uid !== currentUser?.uid);
        if (currentUser) {
          const checkBlocks = await Promise.all(filtered.map(async (u) => {
            const block1 = await getDoc(doc(db, 'blocks', `${currentUser.uid}_${u.uid}`));
            const block2 = await getDoc(doc(db, 'blocks', `${u.uid}_${currentUser.uid}`));
            return block1.exists() || block2.exists();
          }));
          filtered = filtered.filter((_, i) => !checkBlocks[i]);
        }

        setFoundUsers(filtered);
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
    <section className="max-w-2xl mx-auto">
      {/* Search Bar Container */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 pt-2 pb-4 px-4 md:px-0">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative group">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-colors group-focus-within:text-gray-600 dark:group-focus-within:text-gray-200" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar"
              className="w-full pl-11 pr-10 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-0 transition-all placeholder:text-gray-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-600 rounded-full p-0.5 text-white dark:text-gray-300 hover:opacity-80 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </form>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 dark:border-gray-800 mt-4">
          <button
            onClick={() => { setSearchType("news"); clearSearch(); }}
            className={`flex-1 py-3 text-sm font-bold border-b-2 transition-all ${searchType === "news" ? "border-gray-900 dark:border-white text-gray-900 dark:text-white" : "border-transparent text-gray-400"}`}
          >
            Notícias
          </button>
          <button
            onClick={() => { setSearchType("users"); clearSearch(); }}
            className={`flex-1 py-3 text-sm font-bold border-b-2 transition-all ${searchType === "users" ? "border-gray-900 dark:border-white text-gray-900 dark:text-white" : "border-transparent text-gray-400"}`}
          >
            Contas
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="px-4 md:px-0">
        {searchType === "news" ? (
          activeSearch ? (
            <div className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
               <NewsFeed searchQuery={activeSearch} onUserClick={onUserClick} />
            </div>
          ) : (
            <div className="mt-20 text-center px-10">
              <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 dark:border-gray-700">
                 <SearchIcon className="w-10 h-10 text-gray-300" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold dark:text-white mb-2">Descubra Novas Histórias</h2>
              <p className="text-sm text-gray-500">Pesquise por temas, locais ou categorias de notícias.</p>
            </div>
          )
        ) : (
          <div className="mt-4 space-y-6">
            {!activeSearch && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <UserCarousel 
                   onUserClick={onUserClick} 
                   onLoginRequired={() => {}} 
                 />
              </div>
            )}

            {loadingUsers && (
              <div className="flex justify-center py-10">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
              </div>
            )}

            {activeSearch && !loadingUsers && foundUsers.length === 0 && (
              <p className="text-center text-gray-500 py-10">Nenhum usuário encontrado.</p>
            )}

            <div className="divide-y dark:divide-gray-800">
              {foundUsers.map((user) => (
                <div
                  key={user.uid}
                  onClick={() => onUserClick(user.uid)}
                  className="flex items-center gap-3 py-3 cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden shrink-0">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.username}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-6 h-6 text-gray-300" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                      {user.username}
                    </p>
                    <p className="text-sm text-gray-500 truncate">{user.displayName}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
