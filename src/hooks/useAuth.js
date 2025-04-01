import { useState, useEffect, createContext, useContext } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';

// Contexte d'authentification
const AuthContext = createContext();

// Provider d'authentification à utiliser au niveau supérieur de l'application
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Observer les changements d'état d'authentification
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      setLoading(true);
      try {
        if (authUser) {
          // Récupérer les données supplémentaires de l'utilisateur depuis Firestore
          const userDocRef = doc(db, 'users', authUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            // Combiner les données Firebase Auth avec les données Firestore
            setUser({
              ...authUser,
              ...userDoc.data()
            });
          } else {
            // Si le document Firestore n'existe pas encore, utiliser uniquement les données Auth
            setUser(authUser);
          }
        } else {
          setUser(null);
        }
        setError(null);
      } catch (err) {
        console.error("Erreur lors de la récupération des données utilisateur:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    });

    // Nettoyer l'observer lorsque le composant est démonté
    return () => unsubscribe();
  }, []);

  // Inscription avec email/mot de passe
  const signup = async (email, password, displayName, userType = 'fan') => {
    try {
      setLoading(true);
      setError(null);
      
      // Créer l'utilisateur dans Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Mettre à jour le profil avec le nom d'affichage
      await updateProfile(userCredential.user, { displayName });
      
      // Créer un document utilisateur dans Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        displayName,
        userType, // 'creator' ou 'fan'
        createdAt: serverTimestamp(),
        creaCoinBalance: userType === 'fan' ? 500 : 0, // Solde initial pour les fans
        photoURL: userCredential.user.photoURL || '',
        suggestionsCount: 0,
        acceptedSuggestionsCount: 0
      });
      
      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Connexion avec email/mot de passe
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Connexion avec Google
  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      setError(null);
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      
      // Vérifier si c'est un nouvel utilisateur
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) {
        // Créer un document utilisateur dans Firestore pour les nouveaux utilisateurs Google
        await setDoc(userDocRef, {
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
          userType: 'fan', // Par défaut, les connexions Google créent des comptes de fans
          createdAt: serverTimestamp(),
          creaCoinBalance: 500, // Solde initial
          photoURL: userCredential.user.photoURL || '',
          suggestionsCount: 0,
          acceptedSuggestionsCount: 0
        });
      }
      
      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Déconnexion
  const logout = async () => {
    try {
      setError(null);
      await firebaseSignOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Réinitialisation du mot de passe
  const resetPassword = async (email) => {
    try {
      setLoading(true);
      setError(null);
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Vérifier si l'utilisateur est un créateur
  const isCreator = () => {
    return user?.userType === 'creator';
  };

  // Vérifier si l'utilisateur est un fan
  const isFan = () => {
    return user?.userType === 'fan';
  };

  const value = {
    user,
    loading,
    error,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    isCreator,
    isFan
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personnalisé pour utiliser le contexte d'authentification
export default function useAuth() {
  return useContext(AuthContext);
}
