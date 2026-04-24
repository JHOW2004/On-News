import React, { useEffect } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging, db } from "../lib/firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { User } from "../types";
import toast from "react-hot-toast";

export const usePushNotifications = (currentUser: User | null) => {
  useEffect(() => {
    if (!currentUser || !messaging) return;

    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          const token = await getToken(messaging, {
            vapidKey: import.meta.env.VITE_VAPID_PUBLIC_KEY,
          });

          if (token) {
            // Save token to user document
            const userRef = doc(db, "users", currentUser.uid);
            await updateDoc(userRef, {
              fcmTokens: arrayUnion(token),
            });
          }
        }
      } catch (error) {
        console.error("Error getting push token:", error);
      }
    };

    requestPermission();

    // Listen for foreground messages
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Foreground message received:", payload);
      if (payload.notification) {
        toast(
          (t) => (
            <div className="flex flex-col gap-1">
              <span className="font-bold">{payload.notification?.title}</span>
              <span className="text-sm">{payload.notification?.body}</span>
            </div>
          ),
          {
            icon: "🔔",
            duration: 5000,
          },
        );
      }
    });

    return () => unsubscribe();
  }, [currentUser]);
};
