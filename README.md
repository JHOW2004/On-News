# OnNews - Rede Social de Notícias

<p align="center">
  <img src="public/logoSF.png" alt="OnNews Logo" width="200" />
</p>

OnNews é uma aplicação web moderna que combina o consumo de notícias em tempo real com interações sociais. Os usuários podem explorar as últimas manchetes, categorizar notícias, curtir, comentar e compartilhar artigos, além de interagir com perfis de outros usuários.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com uma stack moderna focada em performance e experiência do usuário:

*   **Frontend Framework:** [React](https://react.dev/) (v18)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Ícones:** [Lucide React](https://lucide.dev/)
*   **Gerenciamento de Datas:** [date-fns](https://date-fns.org/)
*   **Roteamento:** [React Router](https://reactrouter.com/)
*   **Notificações:** [React Hot Toast](https://react-hot-toast.com/)

### Backend & Serviços (BaaS)

*   **Firebase:** Utilizado para todo o backend serverless.
    *   **Authentication:** Gerenciamento de usuários, login e cadastro.
    *   **Firestore:** Banco de dados NoSQL em tempo real para armazenar usuários, curtidas, comentários e snapshots de notícias.
    *   **Storage:** Armazenamento de arquivos para fotos de perfil dos usuários.
*   **NewsAPI:** API externa utilizada para buscar as notícias em tempo real do Brasil.

## ⚙️ Configuração do Ambiente

Para rodar este projeto localmente, você precisará configurar as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e preencha com as suas chaves.

```env
# Chave da API de Notícias (NewsAPI.org)
VITE_GNEWS_API_KEY=XXXXXXXXXXXX

# Configurações do Firebase
VITE_FIREBASE_API_KEY=XXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=XXXXXXXXXXXX
VITE_FIREBASE_PROJECT_ID=XXXXXXXXXXXX
VITE_FIREBASE_STORAGE_BUCKET=XXXXXXXXXXXX
VITE_FIREBASE_MESSAGING_SENDER_ID=XXXXXXXXXXXX
VITE_FIREBASE_APP_ID=XXXXXXXXXXXX
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXXXX
```

## ✨ Funcionalidades Principais

*   **Feed de Notícias:** Notícias atualizadas em tempo real, focadas no Brasil.
*   **Interações Sociais:**
    *   **Curtir:** Marque as notícias que você achou interessantes.
    *   **Comentar:** Discuta sobre as notícias com outros usuários.
    *   **Compartilhar:** Envie links de notícias para outras redes.
*   **Perfis de Usuário:**
    *   Personalize seu perfil com foto e descrição.
    *   Visualize perfis públicos de outros usuários.
    *   Veja o histórico de atividades (curtidas e comentários) de qualquer pessoa.
*   **Busca:** Encontre notícias por palavras-chave ou pesquise por outros usuários da plataforma.
*   **Temas:** Suporte nativo a **Modo Claro** e **Modo Escuro**.
*   **Responsividade:** Interface totalmente adaptada para Desktop (com Sidebar) e Mobile (com Bottom Navigation).

## 📂 Estrutura do Projeto

*   `src/components`: Componentes reutilizáveis (NewsCard, Sidebar, Modais, etc).
*   `src/contexts`: Contextos globais do React (AuthContext, ThemeContext).
*   `src/hooks`: Custom hooks para lógica de negócios (useNewsInteractions).
*   `src/lib`: Configurações de serviços externos (firebase.ts, gnews.ts).
*   `src/types`: Definições de tipos TypeScript.

---

Desenvolvido com ❤️
```