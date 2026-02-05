import React, { useState, useEffect } from "react";
import { Heart, MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { User, Comment, Like } from "../../types";
import NewsCard from "../News/NewsCard";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PublicProfilePageProps {
  userId: string;
  onBack: () => void;
  onUserClick: (id: string) => void;
  onLoginRequired: () => void;
}

// Função auxiliar para tratar datas do Firestore ou Strings
const getSafeDate = (dateValue: any): Date | null => {
  if (!dateValue) return null;

  // Se for um Timestamp do Firestore
  if (typeof dateValue.toDate === "function") {
    return dateValue.toDate();
  }

  // Se for uma string ou número
  const date = new Date(dateValue);

  // Verifica se é uma data válida
  if (isNaN(date.getTime())) {
    return null;
  }

  return date;
};

const PublicProfilePage: React.FC<PublicProfilePageProps> = ({
  userId,
  onBack,
  onUserClick,
  onLoginRequired,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"activity" | "info">("activity");
  const [activities, setActivities] = useState<
    Array<{ type: "like" | "comment"; data: any; date: Date }>
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // 1. Get User Info
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          setUser(userDoc.data() as User);
        }

        // 2. Get Activities (Likes & Comments) with Article Snapshots
        const likesQuery = query(
          collection(db, "likes"),
          where("userId", "==", userId),
          orderBy("createdAt", "desc"),
        );
        const commentsQuery = query(
          collection(db, "comments"),
          where("userId", "==", userId),
          orderBy("createdAt", "desc"),
        );

        const [likesSnap, commentsSnap] = await Promise.all([
          getDocs(likesQuery),
          getDocs(commentsQuery),
        ]);

        const likes = likesSnap.docs.map((d) => {
          const safeDate = getSafeDate(d.data().createdAt) || new Date();
          return {
            type: "like" as const,
            data: d.data() as Like,
            date: safeDate,
          };
        });

        const comments = commentsSnap.docs.map((d) => {
          const safeDate = getSafeDate(d.data().createdAt) || new Date();
          return {
            type: "comment" as const,
            data: d.data() as Comment,
            date: safeDate,
          };
        });

        // Merge and sort
        const allActivities = [...likes, ...comments]
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .filter((item) => item.data.articleSnapshot); // Only show items with snapshots

        setActivities(allActivities);
      } catch (error) {
        console.error("Error fetching public profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading)
    return <div className="text-center py-10">Carregando perfil...</div>;
  if (!user)
    return <div className="text-center py-10">Usuário não encontrado.</div>;

  // Data de criação do usuário segura
  const joinDate = getSafeDate(user.createdAt);

  return (
    <section>
      <button
        aria-label="return"
        onClick={onBack}
        className="mb-4 flex items-center text-primary hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
      </button>

      {/* Header Profile */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold overflow-hidden border-4 border-white dark:border-gray-700">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-full h-full object-cover"
              />
            ) : (
              user.displayName?.charAt(0).toUpperCase()
            )}
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {user.displayName}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">@{user.username}</p>
            {user.description && (
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {user.description}
              </p>
            )}
            <div className="mt-2 flex items-center justify-center md:justify-start text-xs text-gray-400">
              <Calendar className="w-3 h-3 mr-1" />
              {joinDate
                ? `Entrou em ${format(joinDate, "MMMM 'de' yyyy", { locale: ptBR })}`
                : "Data de entrada não disponível"}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          aria-label="active"
          onClick={() => setActiveTab("activity")}
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
            activeTab === "activity"
              ? "border-primary text-primary"
              : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"
          }`}
        >
          Atividades
        </button>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        {activities.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Este usuário ainda não interagiu com notícias.
          </div>
        ) : (
          activities.map((item, idx) => {
            const article = item.data.articleSnapshot;
            if (!article) return null;

            // Formatação de data segura para o item da lista
            let dateLabel = "";
            try {
              dateLabel = format(item.date, "dd/MM/yyyy 'às' HH:mm", {
                locale: ptBR,
              });
            } catch (e) {
              dateLabel = "Data desconhecida";
            }

            return (
              <div key={`${item.type}-${idx}`} className="relative">
                <div className="absolute -left-3 top-4 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center z-10">
                  {item.type === "like" ? (
                    <Heart className="w-3 h-3 text-red-500 fill-current" />
                  ) : (
                    <MessageCircle className="w-3 h-3 text-blue-500" />
                  )}
                </div>
                <div className="pl-6">
                  <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    {item.type === "like" ? "Curtiu" : "Comentou"} em{" "}
                    {dateLabel}
                  </div>
                  {item.type === "comment" && (
                    <div className="mb-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-sm italic border-l-4 border-primary">
                      "{item.data.content}"
                    </div>
                  )}
                  <NewsCard
                    article={article}
                    onLoginRequired={onLoginRequired}
                    onUserClick={onUserClick}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default PublicProfilePage;
