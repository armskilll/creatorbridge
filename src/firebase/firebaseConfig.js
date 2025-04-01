// Import des fonctions nécessaires des SDK Firebase
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import de l'analytics pour les environnements côté client uniquement
import { getAnalytics } from "firebase/analytics";

// Configuration Firebase de votre application
const firebaseConfig = {
  apiKey: "AIzaSyAlfUp28TSWr4WlyYwSBtnvpKurxwSbg74",
  authDomain: "creatorbridge-58780.firebaseapp.com",
  projectId: "creatorbridge-58780",
  storageBucket: "creatorbridge-58780.firebasestorage.app",
  messagingSenderId: "98394564557",
  appId: "1:98394564557:web:5981e8ef79806635e58684",
  measurementId: "G-D31V942ESG"
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
