import React, { useState, useRef } from 'react';
import { Camera, PencilLine, Save, X, Sun, Moon, LogOut, Loader2 } from 'lucide-react';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import toast from 'react-hot-toast';

const ProfilePage: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [editData, setEditData] = useState({
    displayName: currentUser?.displayName || '',
    description: currentUser?.description || ''
  });

  if (!currentUser) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          Você precisa fazer login para ver seu perfil.
        </p>
      </div>
    );
  }

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast.error('A imagem deve ter no máximo 5MB');
      return;
    }

    setIsUploading(true);
    try {
      // 1. Upload to Storage
      const storageRef = ref(storage, `profiles/${currentUser.uid}/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);

      // 2. Update Auth Profile
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { photoURL });
      }

      // 3. Update Firestore User Document
      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, { photoURL });

      window.location.reload(); 
      toast.success('Foto de perfil atualizada!');
    } catch (error) {
      console.error('Erro ao atualizar foto:', error);
      toast.error('Erro ao atualizar foto de perfil');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    try {
      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, {
        displayName: editData.displayName,
        description: editData.description
      });
      
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: editData.displayName });
      }

      toast.success('Perfil atualizado!');
      setIsEditing(false);
    } catch (error) {
      toast.error('Erro ao atualizar perfil');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logout realizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao fazer logout');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handlePhotoChange}
        accept="image/*"
        className="hidden"
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative group cursor-pointer" onClick={handlePhotoClick}>
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold overflow-hidden border-2 border-white/50">
              {isUploading ? (
                <Loader2 className="w-8 h-8 animate-spin" />
              ) : currentUser.photoURL ? (
                <img 
                  src={currentUser.photoURL} 
                  alt={currentUser.displayName}
                  className="w-full h-full object-cover"
                />
              ) : (
                currentUser.displayName?.charAt(0).toUpperCase()
              )}
            </div>
            <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">
              {currentUser.displayName}
            </h1>
            <p className="text-white/80">@{currentUser.username}</p>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-white/30 transition-colors"
          >
            {isEditing ? <X className="w-5 h-5" /> : <PencilLine className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nome
              </label>
              <input
                type="text"
                value={editData.displayName}
                onChange={(e) => setEditData(prev => ({ ...prev, displayName: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Descrição
              </label>
              <textarea
                value={editData.description}
                onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Conte um pouco sobre você..."
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleSave}
                className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Salvar</span>
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Informações
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Email:</span>
                  <p className="text-gray-900 dark:text-white">{currentUser.email}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Nome de usuário:</span>
                  <p className="text-gray-900 dark:text-white">@{currentUser.username}</p>
                </div>
                {currentUser.description && (
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Descrição:</span>
                    <p className="text-gray-900 dark:text-white mt-1">{currentUser.description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Configurações
              </h3>
              <div className="space-y-3">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    <span className="text-gray-900 dark:text-white">
                      Tema {theme === 'light' ? 'Escuro' : 'Claro'}
                    </span>
                  </div>
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <LogOut className="w-5 h-5" />
                    <span>Sair da conta</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;