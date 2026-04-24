import { db } from "./firebase";
import { 
  doc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  writeBatch
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

export async function followUser(followerId: string, followingId: string) {
  if (followerId === followingId) return;
  const followId = `${followerId}_${followingId}`;
  await setDoc(doc(db, "follows", followId), {
    followerId,
    followingId,
    createdAt: serverTimestamp()
  });
}

export async function unfollowUser(followerId: string, followingId: string) {
  const followId = `${followerId}_${followingId}`;
  await deleteDoc(doc(db, "follows", followId));
}

export async function blockUser(blockerId: string, blockedId: string) {
  if (blockerId === blockedId) return;
  
  const batch = writeBatch(db);
  
  // Create block record
  const blockId = `${blockerId}_${blockedId}`;
  batch.set(doc(db, "blocks", blockId), {
    blockerId,
    blockedId,
    createdAt: serverTimestamp()
  });

  // Remove follow both ways
  batch.delete(doc(db, "follows", `${blockerId}_${blockedId}`));
  batch.delete(doc(db, "follows", `${blockedId}_${blockerId}`));

  await batch.commit();
}

export async function unblockUser(blockerId: string, blockedId: string) {
  const blockId = `${blockerId}_${blockedId}`;
  await deleteDoc(doc(db, "blocks", blockId));
}
