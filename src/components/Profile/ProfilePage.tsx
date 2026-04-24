import React, { useState, useRef, useEffect } from "react";
import {
  Camera,
  Settings,
  Grid,
  List,
  Loader2,
  User as UserIcon,
  PlusSquare,
  LogOut,
  Sun,
  Moon,
  X,
  Save,
  FileText,
  Edit,
  Heart,
  MessageCircle,
} from "lucide-react";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { updateProfile } from "firebase/auth";
import { doc, updateDoc, collection, query, where, onSnapshot, getDoc, getDocs, orderBy } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../../lib/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import { unblockUser } from '../../lib/actions';
import UserListModal from '../Social/UserListModal';
import NewsCard from "../News/NewsCard";
import OpinionCard from "../News/OpinionCard";
import OpinionPostForm from "../News/OpinionPostForm";
import NewsFeed from "../News/NewsFeed";
import { OpinionPost, Like, Comment } from "../../types";
import toast from "react-hot-toast";

interface ProfilePageProps {
  onUserClick?: (userId: string) => void;
  onEditDraft?: (post: OpinionPost) => void;
  onPostClick?: (post: OpinionPost) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onUserClick, onEditDraft, onPostClick }) => {
  const { currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<"grid" | "list" | "drafts">("grid");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [followers, setFollowers] = useState<string[]>([]);
  const [following, setFollowing] = useState<string[]>([]);
  const [userPosts, setUserPosts] = useState<OpinionPost[]>([]);
  const [activities, setActivities] = useState<Array<{ type: "like" | "comment"; data: any; date: Date }>>([]);
  const [blockedUsers, setBlockedUsers] = useState<any[]>([]);
  const [showList, setShowList] = useState<{ type: 'followers' | 'following' | null, userIds: string[] }>({ type: null, userIds: [] });
  const [showSettings, setShowSettings] = useState(false);

  const [editData, setEditData] = useState({
    displayName: currentUser?.displayName || "",
    description: currentUser?.description || "",
  });

  useEffect(() => {
    if (!currentUser) return;

    // Followers
    const qFollowers = query(collection(db, 'follows'), where('followingId', '==', currentUser.uid));
    const unsubscribeFollowers = onSnapshot(qFollowers, (snap) => {
      setFollowers(snap.docs.map(doc => doc.data().followerId));
    });

    // Following
    const qFollowing = query(collection(db, 'follows'), where('followerId', '==', currentUser.uid));
    const unsubscribeFollowing = onSnapshot(qFollowing, (snap) => {
      setFollowing(snap.docs.map(doc => doc.data().followingId));
    });

    // Posts
    const qPosts = query(
      collection(db, 'opinionPosts'), 
      where('userId', '==', currentUser.uid), 
      where('status', '==', 'published'),
      orderBy('publishedAt', 'desc')
    );
    const unsubscribePosts = onSnapshot(qPosts, (snap) => {
      setUserPosts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as OpinionPost)));
    });

    // Blocks
    const qBlocks = query(collection(db, 'blocks'), where('blockerId', '==', currentUser.uid));
    const unsubscribeBlocks = onSnapshot(qBlocks, async (snap) => {
      const blockPromises = snap.docs.map(async (d) => {
        const userDoc = await getDoc(doc(db, 'users', d.data().blockedId));
        return { uid: d.data().blockedId, ...userDoc.data() };
      });
      const resolvedBlocks = await Promise.all(blockPromises);
      setBlockedUsers(resolvedBlocks);
    });

    // Activities (Likes & Comments)
    const qLikes = query(collection(db, 'likes'), where('userId', '==', currentUser.uid), orderBy('createdAt', 'desc'));
    const unsubscribeLikes = onSnapshot(qLikes, (snap) => {
      const likes = snap.docs.map(d => ({
        type: 'like' as const,
        data: d.data(),
        date: d.data().createdAt?.toDate() || new Date()
      }));
      setActivities(prev => {
        const nonLikes = prev.filter(a => a.type !== 'like');
        return [...nonLikes, ...likes].sort((a, b) => b.date.getTime() - a.date.getTime());
      });
    });

    const qComments = query(collection(db, 'comments'), where('userId', '==', currentUser.uid), orderBy('createdAt', 'desc'));
    const unsubscribeComments = onSnapshot(qComments, (snap) => {
      const comments = snap.docs.map(d => ({
        type: 'comment' as const,
        data: d.data(),
        date: d.data().createdAt?.toDate() || new Date()
      }));
      setActivities(prev => {
        const nonComments = prev.filter(a => a.type !== 'comment');
        return [...nonComments, ...comments].sort((a, b) => b.date.getTime() - a.date.getTime());
      });
    });

    return () => {
      unsubscribeFollowers();
      unsubscribeFollowing();
      unsubscribePosts();
      unsubscribeBlocks();
      unsubscribeLikes();
      unsubscribeComments();
    };
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Faça login para ver seu perfil.</p>
      </div>
    );
  }

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const storageRef = ref(storage, `profiles/${currentUser.uid}/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);
      if (auth.currentUser) await updateProfile(auth.currentUser, { photoURL });
      await updateDoc(doc(db, "users", currentUser.uid), { photoURL });
      window.location.reload();
    } catch (error) {
      toast.error("Erro ao atualizar foto");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    try {
      await updateDoc(doc(db, "users", currentUser.uid), {
        displayName: editData.displayName,
        description: editData.description,
      });
      if (auth.currentUser) await updateProfile(auth.currentUser, { displayName: editData.displayName });
      toast.success("Perfil atualizado!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Erro ao atualizar perfil");
    }
  };

  const renderDescription = (text: string) => {
    if (!text) return null;
    // Regex identifies links with http, www, or just domains
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
      <input type="file" ref={fileInputRef} onChange={handlePhotoChange} accept="image/*" className="hidden" />

      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 mb-10">
        {/* Avatar */}
        <div className="relative shrink-0 mx-auto md:mx-0">
          <div 
            className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[3px] cursor-pointer"
            onClick={handlePhotoClick}
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-[3px]">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                {isUploading ? (
                  <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                ) : currentUser.photoURL ? (
                  <img src={currentUser.photoURL} className="w-full h-full object-cover" />
                ) : (
                  <UserIcon className="w-12 h-12 md:w-20 md:h-20 text-gray-300" />
                )}
              </div>
            </div>
          </div>
          <button 
            onClick={handlePhotoClick}
            className="absolute bottom-1 right-1 md:bottom-3 md:right-3 bg-white dark:bg-gray-700 p-1.5 rounded-full shadow-lg border border-gray-100 dark:border-gray-600"
          >
            <Camera className="w-4 h-4 text-gray-900 dark:text-white" />
          </button>
        </div>

        {/* User Info & Stats */}
        <div className="flex-1 w-full space-y-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h1 className="text-xl font-normal dark:text-white truncate">@{currentUser.username}</h1>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsEditing(true)}
                className="flex-1 md:flex-none px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-sm font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Editar perfil
              </button>
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-1.5 text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
              >
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-around md:justify-start md:gap-10 py-4 md:py-0 border-y md:border-none border-gray-100 dark:border-gray-800">
            <div className="text-center md:text-left">
              <span className="block md:inline font-bold dark:text-white">{userPosts.length}</span>
              <span className="text-sm text-gray-500 md:ml-1">publicações</span>
            </div>
            <button 
              onClick={() => setShowList({ type: 'followers', userIds: followers })}
              className="text-center md:text-left hover:opacity-70 transition-opacity"
            >
              <span className="block md:inline font-bold dark:text-white">{followers.length}</span>
              <span className="text-sm text-gray-500 md:ml-1">seguidores</span>
            </button>
            <button 
              onClick={() => setShowList({ type: 'following', userIds: following })}
              className="text-center md:text-left hover:opacity-70 transition-opacity"
            >
              <span className="block md:inline font-bold dark:text-white">{following.length}</span>
              <span className="text-sm text-gray-500 md:ml-1">seguindo</span>
            </button>
          </div>

          <div className="hidden md:block">
            <p className="font-bold dark:text-white">{currentUser.displayName}</p>
            <div className="text-sm dark:text-gray-300 whitespace-pre-wrap">{renderDescription(currentUser.description)}</div>
          </div>
        </div>
      </header>

      {/* Bio for Mobile */}
      <div className="md:hidden mb-10">
        <p className="font-bold dark:text-white">{currentUser.displayName}</p>
        <div className="text-sm dark:text-gray-300 whitespace-pre-wrap">{renderDescription(currentUser.description)}</div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-100 dark:border-gray-800">
        <div className="flex justify-center gap-8 sm:gap-16 -mt-[1px]">
          <button 
            onClick={() => setActiveTab("grid")}
            className={`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${activeTab === 'grid' ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'border-transparent text-gray-400'}`}
          >
            <Grid className="w-3 h-3" />
            <span className="hidden sm:inline">Publicações</span>
          </button>
          <button 
            onClick={() => setActiveTab("drafts")}
            className={`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${activeTab === 'drafts' ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'border-transparent text-gray-400'}`}
          >
            <FileText className="w-3 h-3" />
            <span className="hidden sm:inline">Rascunhos</span>
          </button>
          <button 
            onClick={() => setActiveTab("list")}
            className={`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest border-t transition-colors ${activeTab === 'list' ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'border-transparent text-gray-400'}`}
          >
            <List className="w-3 h-3" />
            <span className="hidden sm:inline">Atividade</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
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
            {userPosts.length === 0 && (
              <div className="col-span-3 py-20 text-center">
                 <div className="w-16 h-16 border-2 border-gray-900 dark:border-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <PlusSquare className="w-8 h-8" />
                 </div>
                 <p className="text-xl font-bold dark:text-white">Nenhuma publicação ainda</p>
              </div>
            )}
          </div>
        ) : activeTab === "drafts" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="col-span-full">
                  <p className="text-sm text-gray-500 mb-4 italic">Seus rascunhos salvos aparecem aqui. Clique em um deles para continuar editando.</p>
               </div>
               <div className="col-span-full">
                  <NewsFeed 
                    userId={currentUser.uid} 
                    status="draft" 
                    onUserClick={onUserClick}
                    onEdit={onEditDraft}
                    onPostClick={onPostClick}
                  />
               </div>
            </div>
          </div>
        ) : (
        <div className="space-y-6">
          {activities.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
               <div className="p-3 flex items-center gap-2 text-xs text-gray-500">
                  {item.type === 'like' ? <Heart className="w-3 h-3 text-red-500 fill-current" /> : <MessageCircle className="w-3 h-3 text-blue-500" />}
                  <span>{item.type === 'like' ? 'Curtiu' : 'Comentou'} • {formatDistanceToNow(item.date, { addSuffix: true, locale: ptBR })}</span>
               </div>
               {item.data.articleSnapshot?.type === 'opinion' ? (
                 <OpinionCard 
                    post={item.data.articleSnapshot} 
                    onUserClick={onUserClick} 
                    onPostClick={onPostClick}
                 />
               ) : (
                 <NewsCard 
                    article={item.data.articleSnapshot} 
                    onUserClick={onUserClick} 
                    onPostClick={onPostClick}
                 />
               )}
            </div>
          ))}
          {activities.length === 0 && (
            <div className="py-20 text-center text-gray-500 italic">
              Nenhuma atividade recente encontrada.
            </div>
          )}
        </div>
      )}
      </div>

      {/* Settings/Edit Modal Overlays */}
      {isEditing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl p-6 space-y-6 shadow-2xl">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold dark:text-white">Editar Perfil</h3>
              <button onClick={() => setIsEditing(false)}><X className="w-6 h-6 text-gray-400" /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Nome</label>
                <input 
                  type="text" 
                  value={editData.displayName}
                  onChange={e => setEditData(prev => ({ ...prev, displayName: e.target.value }))}
                  className="w-full bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Bio</label>
                <textarea 
                  rows={4}
                  value={editData.description}
                  onChange={e => setEditData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border-none focus:ring-2 focus:ring-primary dark:text-white resize-none"
                />
              </div>
            </div>
            <button 
              onClick={handleSave}
              className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" /> Salvar Alterações
            </button>
          </div>
        </div>
      )}

      {/* Settings Overlay */}
      {showSettings && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl divide-y dark:divide-gray-800">
            <button 
              onClick={() => {
                toggleTheme();
                setShowSettings(false);
              }} 
              className="w-full py-4 text-sm font-bold dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Mudar Tema ({theme === 'light' ? 'Escuro' : 'Claro'})
            </button>
            <button 
              onClick={() => {
                setShowList({ type: 'followers', userIds: followers });
                setShowSettings(false);
              }} 
              className="w-full py-4 text-sm dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Gerenciar Seguidores
            </button>
            <button onClick={logout} className="w-full py-4 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
              Sair da Conta
            </button>
            <button onClick={() => setShowSettings(false)} className="w-full py-4 text-sm dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Cancelar
            </button>
          </div>
        </div>
      )}

      <UserListModal 
        isOpen={showList.type !== null}
        onClose={() => setShowList({ type: null, userIds: [] })}
        title={showList.type === 'followers' ? 'Seguidores' : 'Seguindo'}
        userIds={showList.userIds}
        onUserClick={onUserClick!}
      />
    </section>
  );
};

export default ProfilePage;
