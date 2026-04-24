import React, { useState } from 'react';
import { Loader2, Send, Save, Palette } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

const COLORS = [
  { name: 'Blue', value: 'bg-blue-600' },
  { name: 'Red', value: 'bg-red-600' },
  { name: 'Green', value: 'bg-green-600' },
  { name: 'Purple', value: 'bg-purple-600' },
  { name: 'Orange', value: 'bg-orange-600' },
  { name: 'Pink', value: 'bg-pink-600' },
  { name: 'Slate', value: 'bg-slate-800' },
];

interface OpinionPostFormProps {
  onSuccess: () => void;
  onCancel: () => void;
  editingPost?: OpinionPost | null;
}

const OpinionPostForm: React.FC<OpinionPostFormProps> = ({ onSuccess, onCancel, editingPost }) => {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState(editingPost?.title || '');
  const [content, setContent] = useState(editingPost?.content || '');
  const [authorName, setAuthorName] = useState(editingPost?.authorName || currentUser?.displayName || '');
  const [selectedColor, setSelectedColor] = useState(editingPost?.color || COLORS[0].value);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (status: 'published' | 'draft') => {
    if (!currentUser) return;
    if (!title || !content) {
      toast.error('Preencha o título e o conteúdo');
      return;
    }

    setIsSaving(true);

    try {
      if (status === 'published') {
        setIsAnalyzing(true);
        // Call AI Analysis API
        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: `${title}\n${content}` }),
        });

        if (!response.ok) {
           toast.error('Erro na análise da IA. O post será salvo como rascunho.');
           await saveToFirestore('draft');
           onSuccess();
           return;
        }

        const result = await response.json();
        setIsAnalyzing(false);

        if (!result.safe) {
          toast.error(`Violação: ${result.reason}. O post será salvo como rascunho.`);
          await saveToFirestore('draft');
          onSuccess();
          return;
        }
      }

      await saveToFirestore(status);
      if (status === 'published') {
        toast.success('Artigo publicado!');
      } else {
        toast.success('Rascunho salvo! Você pode encontrá-lo na aba "Rascunhos" do seu perfil.');
      }
      onSuccess();
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Erro ao salvar post');
    } finally {
      setIsSaving(false);
      setIsAnalyzing(false);
    }
  };

  const saveToFirestore = async (status: 'published' | 'draft') => {
    const postData = {
      userId: currentUser?.uid,
      userName: currentUser?.displayName || 'Usuário',
      userPhoto: currentUser?.photoURL,
      title,
      content,
      authorName,
      color: selectedColor,
      status,
      publishedAt: serverTimestamp(),
      likesCount: editingPost?.likesCount || 0,
      commentsCount: editingPost?.commentsCount || 0,
      type: 'opinion'
    };

    if (editingPost?.id) {
      const { doc, updateDoc } = await import('firebase/firestore');
      await updateDoc(doc(db, 'opinionPosts', editingPost.id), postData);
    } else {
      await addDoc(collection(db, 'opinionPosts'), postData);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Criar Artigo de Opinião</h2>
        <button onClick={onCancel} className="text-gray-500 hover:text-gray-700 dark:text-gray-400">Cancelar</button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Título do Artigo</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Dê um título impactante"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Conteúdo</label>
          <textarea
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escreva seu artigo aqui..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome do Autor (Como aparecerá)</label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cor do Card</label>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full ${color.value} ${selectedColor === color.value ? 'ring-2 ring-offset-2 ring-primary' : ''} transition-all`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Preview Card */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
           <p className="text-sm font-medium text-gray-500 mb-2">Prévia do Card:</p>
           <div className={`${selectedColor} rounded-xl p-6 text-white shadow-lg min-h-[200px] flex flex-col justify-between`}>
              <h3 className="text-2xl font-bold line-clamp-3">{title || 'Título do seu Artigo'}</h3>
              <div>
                <p className="text-sm opacity-90">{authorName || 'Seu Nome'}</p>
                <p className="text-xs opacity-70">@{currentUser?.displayName || 'usuario'}</p>
              </div>
           </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-6">
          <button
            onClick={() => handleSave('draft')}
            disabled={isSaving}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            Salvar Rascunho
          </button>
          <button
            onClick={() => handleSave('published')}
            disabled={isSaving}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Analisando com IA...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Publicar Artigo
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpinionPostForm;
