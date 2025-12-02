import { db } from "./firebase";
import { 
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import type { NewsArticle } from "./gnews";

export async function saveUserArticleAction(
  userId: string,
  article: NewsArticle,
  options: { liked?: boolean; commented?: boolean } = {}
) {
  if (!userId || !article?.id) return;

  const ref = doc(db, "userArticleActions", userId, "articles", article.id);

  const { liked, commented } = options;

  await setDoc(
    ref,
    {
      articleId: article.id,
      title: article.title,
      description: article.description,
      content: article.content,
      url: article.url,
      image: article.image,
      publishedAt: article.publishedAt,
      lang: article.lang,
      source: article.source,
      liked,
      commented,
      lastInteractionAt: serverTimestamp(),
    },
    { merge: true }
  );
}
