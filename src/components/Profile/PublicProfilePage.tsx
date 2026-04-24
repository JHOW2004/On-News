import React, { useState, useEffect } from "react";
import { Heart, MessageCircle, ArrowLeft, Calendar, X, Grid, List, User as UserIcon, MoreHorizontal, Bookmark, Loader2 } from "lucide-react";
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
import { User, Comment, Like, OpinionPost } from "../../types";
import NewsCard from "../News/NewsCard";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { useAuth } from "../../contexts/AuthContext";
import FollowButton from "../Social/FollowButton";
import UserListModal from "../Social/UserListModal";
import { blockUser } from "../../lib/actions";
import toast from "react-hot-toast";

interface PublicProfilePageProps {
  userId: string;
  onBack: () => void;
  onUserClick: (id: string) => void;
  onLoginRequired: () => void;
  onPostClick?: (post: OpinionPost) => void;
}

const PublicProfilePage: React.FC<PublicProfilePageProps> = ({
  userId,
  onBack,
  onUserClick,
  onLoginRequired,
  onPostClick,
}) => {
  const { currentUser } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"grid" | "list">("grid");
  const [activities, setActivities] = useState<
    Array<{ type: "like" | "comment"; data: any; date: Date }>
  >([]);
  const [userPosts, setUserPosts] = useState<OpinionPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  const [hasBlockedMe, setHasBlockedMe] = useState(false);
  const [followers, setFollowers] = useState<string[]>([]);
  const [following, setFollowing] = useState<string[]>([]);
  const [showList, setShowList] = useState<{ type: 'followers' | 'following' | null, userIds: string[] }>({ type: null, userIds: [] });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);

        if (currentUser) {
           const [block1, block2] = await Promise.all([
             getDoc(doc(db, 'blocks', `${currentUser.uid}_${userId}`)),
             getDoc(doc(db, 'blocks', `${userId}_${currentUser.uid}`))
           ]);
           if (block2.exists()) {
              setHasBlockedMe(true);
              setLoading(false);
              return;
           }
           setIsBlocked(block1.exists());
        }

        const [userDoc, followersSnap, followingSnap, postsSnap] = await Promise.all([
          getDoc(doc(db, "users", userId)),
          getDocs(query(collection(db, 'follows'), where('followingId', '==', userId))),
          getDocs(query(collection(db, 'follows'), where('followerId', '==', userId))),
          getDocs(query(
            collection(db, 'opinionPosts'), 
            where('userId', '==', userId), 
            where('status', '==', 'published'),
            orderBy('publishedAt', 'desc')
          ))
        ]);

        if (userDoc.exists()) setUser(userDoc.data() as User);
        setFollowers(followersSnap.docs.map(d => d.data().followerId));
        setFollowing(followingSnap.docs.map(d => d.data().followingId));
        setUserPosts(postsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as OpinionPost)));

        // Get Activities
        const likesQuery = query(collection(db, "likes"), where("userId", "==", userId), orderBy("createdAt", "desc"));
        const commentsQuery = query(collection(db, "comments"), where("userId", "==", userId), orderBy("createdAt", "desc"));
        const [likesSnap, commentsSnap] = await Promise.all([getDocs(likesQuery), getDocs(commentsQuery)]);

        const likes = likesSnap.docs.map(d => ({
          type: "like" as const,
          data: d.data() as Like,
          date: (d.data().createdAt?.toDate ? d.data().createdAt.toDate() : new Date(d.data().createdAt))
        }));
        const comments = commentsSnap.docs.map(d => ({
          type: "comment" as const,
          data: d.data() as Comment,
          date: (d.data().createdAt?.toDate ? d.data().createdAt.toDate() : new Date(d.data().createdAt))
        }));

        setActivities([...likes, ...comments].sort((a, b) => b.date.getTime() - a.date.getTime()).filter(i => i.data.articleSnapshot));
      } catch (error) {
        console.error("Error fetching public profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [userId, currentUser]);

  if (loading) return <div className="text-center py-20"><Loader2 className="w-8 h-8 animate-spin mx-auto text-gray-400" /></div>;
  if (!user || hasBlockedMe) return (
    <div className="text-center py-20">
      <p className="text-gray-500">Usuário não encontrado.</p>
      <button onClick={onBack} className="mt-4 text-primary font-bold">Voltar</button>
    </div>
  );

  const handleBlock = async () => {
    if (!currentUser) { onLoginRequired(); return; }
    if (window.confirm("Bloquear este usuário?")) {
        await blockUser(currentUser.uid, userId);
        toast.success("Usuário bloqueado");
        onBack();
    }
  };
  
  const renderDescription = (text: string) => {
    if (!text) return null;
    const urlRegex = /((?:https?:\/\/|www\.)[^\s]+|[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}[^\s]*)/gi;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        let href = part;
        if (!href.match(/^https?:\/\//i)) {
          href = `https://${href}`;
        }
        return (
          <a 
            key={i} 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary dark:text-white font-medium hover:underline break-all"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      <button onClick={onBack} className="mb-6 flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" /> <span className="font-bold">@{user.username}</span>
      </button>

      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 mb-10">
        <div className="relative shrink-0 mx-auto md:mx-0">
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[3px]">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-[3px]">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                ) : (
                  <UserIcon className="w-12 h-12 md:w-20 md:h-20 text-gray-300" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full space-y-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h1 className="text-xl font-normal dark:text-white truncate">@{user.username}</h1>
            <div className="flex items-center gap-2">
              <FollowButton userId={userId} onLoginRequired={onLoginRequired} className="flex-1 md:flex-none px-6 py-1.5" />
              <button 
                onClick={handleBlock}
                className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                title="Bloquear"
              >
                <MoreHorizontal className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-around md:justify-start md:gap-10 py-4 md:py-0 border-y md:border-none border-gray-100 dark:border-gray-800">
            <div className="text-center md:text-left">
              <span className="block md:inline font-bold dark:text-white">{userPosts.length}</span>
              <span className="text-sm text-gray-500 md:ml-1">publicações</span>
            </div>
            <button onClick={() => setShowList({ type: 'followers', userIds: followers })} className="text-center md:text-left">
              <span className="block md:inline font-bold dark:text-white">{followers.length}</span>
              <span className="text-sm text-gray-500 md:ml-1">seguidores</span>
            </button>
            <button onClick={() => setShowList({ type: 'following', userIds: following })} className="text-center md:text-left">
              <span className="block md:inline font-bold dark:text-white">{following.length}</span>
              <span className="text-sm text-gray-500 md:ml-1">seguindo</span>
            </button>
          </div>

          <div className="hidden md:block">
            <p className="font-bold dark:text-white">{user.displayName}</p>
            <div className="text-sm dark:text-gray-300 whitespace-pre-wrap">{renderDescription(user.description)}</div>
          </div>
        </div>
      </header>

      <div className="md:hidden mb-10">
        <p className="font-bold dark:text-white">{user.displayName}</p>
        <div className="text-sm dark:text-gray-300 whitespace-pre-wrap">{renderDescription(user.description)}</div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800">
        <div className="flex justify-center gap-16 -mt-[1px]">
          <button onClick={() => setActiveTab("grid")} className={`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${activeTab === 'grid' ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'border-transparent text-gray-400'}`}>
            <Grid className="w-3 h-3" /> <span className="hidden sm:inline">Publicações</span>
          </button>
          <button onClick={() => setActiveTab("list")} className={`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${activeTab === 'list' ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'border-transparent text-gray-400'}`}>
            <List className="w-3 h-3" /> <span className="hidden sm:inline">Atividade</span>
          </button>
        </div>
      </div>

      {activeTab === "grid" ? (
        <div className="grid grid-cols-3 gap-1 md:gap-8">
          {userPosts.map(post => (
            <div 
              key={post.id} 
              onClick={() => onPostClick?.(post)}
              className={`aspect-square ${post.color} relative group cursor-pointer overflow-hidden rounded-sm md:rounded-lg`}
            >
              <div className="absolute inset-0 flex items-center justify-center p-2 text-center text-white bg-black/20 backdrop-blur-[1px]">
                <p className="text-[10px] md:text-sm font-bold line-clamp-4 px-1">{post.title}</p>
              </div>
            </div>
          ))}
          {userPosts.length === 0 && <div className="col-span-3 py-20 text-center text-gray-400">Nenhuma publicação ainda.</div>}
        </div>
      ) : (
        <div className="space-y-6">
          {activities.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
               <div className="p-3 flex items-center gap-2 text-xs text-gray-500">
                  {item.type === 'like' ? <Heart className="w-3 h-3 text-red-500 fill-current" /> : <MessageCircle className="w-3 h-3 text-blue-500" />}
                  <span>{item.type === 'like' ? 'Curtiu' : 'Comentou'} • {formatDistanceToNow(item.date, { addSuffix: true, locale: ptBR })}</span>
               </div>
               <NewsCard article={item.data.articleSnapshot} onUserClick={onUserClick} onLoginRequired={onLoginRequired} />
            </div>
          ))}
          {activities.length === 0 && <div className="text-center py-10 text-gray-400">Nenhuma atividade recente.</div>}
        </div>
      )}

      <UserListModal 
        isOpen={showList.type !== null}
        onClose={() => setShowList({ type: null, userIds: [] })}
        title={showList.type === 'followers' ? 'Seguidores' : 'Seguindo'}
        userIds={showList.userIds}
        onUserClick={onUserClick}
      />
    </section>
  );
};

export default PublicProfilePage;

