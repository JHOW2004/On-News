# OnNews - Rede Social de Notícias

<p align="center">
  <img src="public/logoSF.png" alt="OnNews Logo" width="200" />
</p>

> 🔗 **Acesse o projeto online:** [https://on-news.vercel.app/](https://on-news.vercel.app/)

> Desenvolvido por Anna, Franciele, Jonathas e João

OnNews é uma aplicação web moderna que combina o consumo de notícias em tempo real com interações sociais. Os usuários podem explorar as últimas manchetes, categorizar notícias, curtir, comentar e compartilhar artigos, além de interagir com perfis de outros usuários.

O projeto é uma **Progressive Web App (PWA)**, permitindo que seja instalado nativamente em dispositivos móveis e desktops.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com uma stack moderna focada em performance e experiência do usuário:

### Frontend
*   **Framework:** [React](https://react.dev/) (v18)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **PWA:** [Vite Plugin PWA](https://vite-pwa-org.netlify.app/) (Instalável, Cache, Offline support)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Ícones:** [Lucide React](https://lucide.dev/)
*   **Roteamento:** [React Router](https://reactrouter.com/)

### Backend & Serviços (BaaS)
*   **Firebase:** Backend serverless completo.
    *   **Auth:** Login e gestão de usuários.
    *   **Firestore:** Banco de dados em tempo real (comentários, likes, perfis).
    *   **Storage:** Armazenamento de imagens de perfil.
*   **Vercel Serverless Functions:** Proxy API para comunicação segura com provedores externos.
*   **NewsAPI:** Fonte de dados para as notícias em tempo real.

---

## 📱 Progressive Web App (PWA)

Este projeto foi configurado para funcionar como um aplicativo nativo.
*   **Instalação:** O app detecta automaticamente se pode ser instalado e exibe um prompt personalizado para o usuário.
*   **Mobile Experience:** Ícone dedicado, tela de splash, e executado em modo *standalone* (sem barra de navegador).
*   **Suporte:** Compatível com Android, iOS (via instruções manuais) e Desktop.

## 🌐 Arquitetura de API Híbrida

Para contornar as limitações do plano gratuito da **NewsAPI** (que bloqueia requisições diretas do navegador em produção), implementamos uma arquitetura inteligente:

1.  **Localhost (Desenvolvimento):** O Frontend chama diretamente a NewsAPI.
2.  **Produção (Vercel):** O Frontend chama uma **Serverless Function** (`/api/news`) hospedada na Vercel. Esta função atua como um proxy seguro, adicionando a chave de API no lado do servidor e repassando a requisição, garantindo que o app funcione perfeitamente sem expor credenciais ou sofrer bloqueios de CORS.

---

## ⚙️ Configuração do Ambiente

Para rodar este projeto, você precisará configurar as variáveis de ambiente.

1.  Crie um arquivo `.env` na raiz do projeto.
2.  **Importante para Produção:** Na Vercel (ou seu host), adicione a chave `VITE_GNEWS_API_KEY` nas configurações do projeto, pois ela será usada pela Serverless Function.

**Exemplo de `.env`:**

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

## 📦 Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/on-news.git
    cd on-news
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  O projeto estará rodando em `http://localhost:5173`.

## ✨ Funcionalidades Principais

*   **Feed de Notícias:** Notícias atualizadas em tempo real, focadas no Brasil e filtradas por grandes portais.
*   **Interações Sociais:**
    *   **Curtir:** Salve e curta notícias.
    *   **Comentar:** Debata e veja opiniões de outros usuários.
    *   **Compartilhar:** Envie links de notícias via API nativa de compartilhamento.
*   **Perfis de Usuário:**
    *   Personalize foto e biografia.
    *   **Minhas Ações:** Histórico pessoal de curtidas e comentários.
    *   **Perfil Público:** Visualize o histórico e interações de outros usuários.
*   **Busca Avançada:** Pesquise por notícias ou encontre outros usuários na plataforma.
*   **Temas:** Suporte nativo a **Modo Claro** e **Modo Escuro**.
*   **Responsividade:** Interface adaptada para Desktop (Sidebar) e Mobile (Bottom Navigation + Header).

## 📂 Estrutura do Projeto

*   `api`: Serverless Functions (Backend for Frontend) para proxy de notícias.
*   `public`: Assets estáticos e ícones do PWA.
*   `src/components`: Componentes reutilizáveis (NewsCard, Layout, Modais).
*   `src/contexts`: Gestão de estado global (Auth, Theme).
*   `src/hooks`: Lógica de negócios (useNewsInteractions).
*   `src/lib`: Configurações de serviços (firebase, gnews logic).
*   `src/types`: Definições de tipos TypeScript.

---

Desenvolvido com ❤️