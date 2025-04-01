'use client';

// Import des fonctions nécessaires des SDK Firebase
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import de l'analytics pour les environnements côté client uniquement
import { getAnalytics } from "firebase/analytics";

// Configuration Firebase de votre application
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialisation de Firebase (avec vérification pour éviter les initialisations multiples en mode SSR)
let app;
let analytics;
let auth;
let db;

// Vérifie si Firebase est déjà initialisé (important pour Next.js)
if (!getApps().length) {
  // Initialise Firebase
  app = initializeApp(firebaseConfig);
  
  // Initialise Firestore
  db = getFirestore(app);
  
  // Initialise Firebase Auth
  auth = getAuth(app);
  
  // Initialise Analytics uniquement côté client (évite les erreurs côté serveur dans Next.js)
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} else {
  // Utilise l'app Firebase déjà initialisée
  app = getApps()[0];
  
  // Récupère les instances existantes
  db = getFirestore(app);
  auth = getAuth(app);
  
  // Récupère Analytics uniquement côté client
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
}

// Export des objets Firebase pour les utiliser dans toute l'application
export { app, auth, db, analytics };

// Fonctions d'aide pour l'authentification
export const signOut = () => auth.signOut();

// Export default de la configuration
export default { app, auth, db };
