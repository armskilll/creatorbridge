import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  increment, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import useAuth from './useAuth';

export default function useSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // Récupérer toutes les suggestions (avec options de filtrage)
  const getSuggestions = async ({
    creatorId = null,
    userId = null,
    status = null,
    category = null,
    sortBy = 'likes', // 'likes', 'creaCoin', 'date'
    sortDirection = 'desc',
    limit: queryLimit = 20
  } = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      // Construire la requête de base
      let suggestionsRef = collection(db, 'suggestions');
      let constraints = [];
      
      // Ajouter des contraintes en fonction des paramètres
      if (creatorId) {
        constraints.push(where('creatorId', '==', creatorId));
      }
      
      if (userId) {
        constraints.push(where('userId', '==', userId));
      }
      
      if (status) {
        constraints.push(where('status', '==', status));
      }
      
      if (category) {
        constraints.push(where('category', '==', category));
      }
      
      // Gérer le tri
      let sortField;
      switch (sortBy) {
        case 'likes':
          sortField = 'likes';
          break;
        case 'creaCoin':
          sortField = 'creaCoinBet';
          break;
        case 'date':
        default:
          sortField = 'createdAt';
      }
      
      // Construire la requête finale
      const q = query(
        suggestionsRef,
        ...constraints,
        orderBy(sortField, sortDirection),
        limit(queryLimit)
      );
      
      const querySnapshot = await getDocs(q);
      
      // Traiter les résultats
      const suggestionsData = [];
      for (const doc of querySnapshot.docs) {
        const data = doc.data();
        
        // Récupérer les informations de l'utilisateur
        const userDoc = await getDoc(doc.data().userRef);
        const userData = userDoc.exists() ? userDoc.data() : null;
        
        // Récupérer les informations du créateur
        const creatorDoc = await getDoc(doc.data().creatorRef);
        const creatorData = creatorDoc.exists() ? creatorDoc.data() : null;
        
        suggestionsData.push({
          id: doc.id,
          ...data,
          user: userData ? {
            id: userData.uid,
            displayName: userData.displayName,
            photoURL: userData.photoURL
          } : null,
          creator: creatorData ? {
            id: creatorData.uid,
            displayName: creatorData.displayName,
            photoURL: creatorData.photoURL
          } : null
        });
      }
      
      setSuggestions(suggestionsData);
      return suggestionsData;
    } catch (err) {
      console.error("Erreur lors de la récupération des suggestions:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Récupérer une suggestion spécifique par ID
  const getSuggestionById = async (suggestionId) => {
    try {
      setLoading(true);
      setError(null);
      
      const suggestionDoc = await getDoc(doc(db, 'suggestions', suggestionId));
      
      if (!suggestionDoc.exists()) {
        throw new Error('Suggestion non trouvée');
      }
      
      const data = suggestionDoc.data();
      
      // Récupérer les informations de l'utilisateur
      const userDoc = await getDoc(data.userRef);
      const userData = userDoc.exists() ? userDoc.data() : null;
      
      // Récupérer les informations du créateur
      const creatorDoc = await getDoc(data.creatorRef);
      const creatorData = creatorDoc.exists() ? creatorDoc.data() : null;
      
      const suggestion = {
        id: suggestionDoc.id,
        ...data,
        user: userData ? {
          id: userDoc.id,
          displayName: userData.displayName,
          photoURL: userData.photoURL
        } : null,
        creator: creatorData ? {
          id: creatorDoc.id,
          displayName: creatorData.displayName,
          photoURL: creatorData.photoURL
        } : null
      };
      
      return suggestion;
    } catch (err) {
      console.error("Erreur lors de la récupération de la suggestion:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Créer une nouvelle suggestion
  const createSuggestion = async (suggestionData) => {
    try {
      if (!user) {
        throw new Error('Vous devez être connecté pour créer une suggestion');
      }
      
      setLoading(true);
      setError(null);
      
      // Vérifier que l'utilisateur a suffisamment de CreaCoin
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) {
        throw new Error('Utilisateur non trouvé');
      }
      
      const userData = userDoc.data();
      
      if (userData.creaCoinBalance < suggestionData.creaCoinBet) {
        throw new Error('Solde de CreaCoin insuffisant');
      }
      
      // Références pour les relations
      const userRef = doc(db, 'users', user.uid);
      const creatorRef = doc(db, 'users', suggestionData.creatorId);
      
      // Créer la suggestion
      const newSuggestion = {
        title: suggestionData.title,
        description: suggestionData.description,
        type: suggestionData.type,
        category: suggestionData.category,
        location: suggestionData.location || null,
        creaCoinBet: suggestionData.creaCoinBet,
        status: 'pending', // pending, approved, rejected, upcoming, done
        likes: 0,
        dislikes: 0,
        commentCount: 0,
        views: 0,
        createdAt: serverTimestamp(),
        userRef,
        creatorRef,
        userId: user.uid,
        creatorId: suggestionData.creatorId,
      };
      
      // Ajouter la suggestion à Firestore
      const suggestionRef = await addDoc(collection(db, 'suggestions'), newSuggestion);
      
      // Mettre à jour le solde de CreaCoin de l'utilisateur
      await updateDoc(userDocRef, {
        creaCoinBalance: increment(-suggestionData.creaCoinBet),
        suggestionsCount: increment(1)
      });
      
      // Récupérer la suggestion nouvellement créée
      const suggestionDoc = await getDoc(suggestionRef);
      
      return {
        id: suggestionDoc.id,
        ...suggestionDoc.data(),
        user: {
          id: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        }
      };
    } catch (err) {
      console.error("Erreur lors de la création de la suggestion:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Approuver une suggestion
  const approveSuggestion = async (suggestionId, comment = null) => {
    try {
      if (!user) {
        throw new Error('Vous devez être connecté pour approuver une suggestion');
      }
      
      setLoading(true);
      setError(null);
      
      const suggestionRef = doc(db, 'suggestions', suggestionId);
      const suggestionDoc = await getDoc(suggestionRef);
      
      if (!suggestionDoc.exists()) {
        throw new Error('Suggestion non trouvée');
      }
      
      const suggestionData = suggestionDoc.data();
      
      // Vérifier que l'utilisateur connecté est bien le créateur visé par la suggestion
      if (suggestionData.creatorId !== user.uid) {
        throw new Error('Vous n\'êtes pas autorisé à approuver cette suggestion');
      }
      
      // Mettre à jour le statut de la suggestion
      await updateDoc(suggestionRef, {
        status: 'approved',
        approvedAt: serverTimestamp(),
        creatorComment: comment
      });
      
      // Mettre à jour les statistiques de l'utilisateur qui a fait la suggestion
      const userRef = suggestionData.userRef;
      await updateDoc(userRef, {
        acceptedSuggestionsCount: increment(1)
      });
      
      return {
        id: suggestionId,
        status: 'approved'
      };
    } catch (err) {
      console.error("Erreur lors de l'approbation de la suggestion:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Rejeter une suggestion
  const rejectSuggestion = async (suggestionId, comment = null) => {
    try {
      if (!user) {
        throw new Error('Vous devez être connecté pour rejeter une suggestion');
      }
      
      setLoading(true);
      setError(null);
      
      const suggestionRef = doc(db, 'suggestions', suggestionId);
      const suggestionDoc = await getDoc(suggestionRef);
      
      if (!suggestionDoc.exists()) {
        throw new Error('Suggestion non trouvée');
      }
      
      const suggestionData = suggestionDoc.data();
      
      // Vérifier que l'utilisateur connecté est bien le créateur visé par la suggestion
      if (suggestionData.creatorId !== user.uid) {
        throw new Error('Vous n\'êtes pas autorisé à rejeter cette suggestion');
      }
      
      // Mettre à jour le statut de la suggestion
      await updateDoc(suggestionRef, {
        status: 'rejected',
        rejectedAt: serverTimestamp(),
        creatorComment: comment
      });
      
      // Rembourser les CreaCoin à l'utilisateur
      const userRef = suggestionData.userRef;
      await updateDoc(userRef, {
        creaCoinBalance: increment(suggestionData.creaCoinBet)
      });
      
      return {
        id: suggestionId,
        status: 'rejected'
      };
    } catch (err) {
      console.error("Erreur lors du rejet de la suggestion:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Marquer une suggestion comme "à venir"
  const markSuggestionAsUpcoming = async (suggestionId) => {
    try {
      if (!user) {
        throw new Error('Vous devez être connecté pour mettre à jour une suggestion');
      }
      
      setLoading(true);
      setError(null);
      
      const suggestionRef = doc(db, 'suggestions', suggestionId);
      const suggestionDoc = await getDoc(suggestionRef);
      
      if (!suggestionDoc.exists()) {
        throw new Error('Suggestion non trouvée');
      }
      
      const suggestionData = suggestionDoc.data();
      
      // Vérifier que l'utilisateur connecté est bien le créateur visé par la suggestion
      if (suggestionData.creatorId !== user.uid) {
        throw new Error('Vous n\'êtes pas autorisé à mettre à jour cette suggestion');
      }
      
      // Vérifier que la suggestion est bien en état "approved"
      if (suggestionData.status !== 'approved') {
        throw new Error('La suggestion doit être approuvée avant de pouvoir être marquée comme "à venir"');
      }
      
      // Mettre à jour le statut de la suggestion
      await updateDoc(suggestionRef, {
        status: 'upcoming',
        plannedAt: serverTimestamp()
      });
      
      return {
        id: suggestionId,
        status: 'upcoming'
      };
    } catch (err) {
      console.error("Erreur lors de la mise à jour de la suggestion:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Marquer une suggestion comme réalisée
  const markSuggestionAsDone = async (suggestionId, contentUrl = null) => {
    try {
      if (!user) {
        throw new Error('Vous devez être connecté pour finaliser une suggestion');
      }
      
      setLoading(true);
      setError(null);
      
      const suggestionRef = doc(db, 'suggestions', suggestionId);
      const suggestionDoc = await getDoc(suggestionRef);
      
      if (!suggestionDoc.exists()) {
        throw new Error('Suggestion non trouvée');
      }
      
      const suggestionData = suggestionDoc.data();
      
      // Vérifier que l'utilisateur connecté est bien le créateur visé par la suggestion
      if (suggestionData.creatorId !== user.uid) {
        throw new Error('Vous n\'êtes pas autorisé à finaliser cette suggestion');
      }
      
      // Mettre à jour le statut de la suggestion
      await updateDoc(suggestionRef, {
        status: 'done',
        completedAt: serverTimestamp(),
        contentUrl: contentUrl || null
      });
      
      // Récompenser l'utilisateur avec des CreaCoin (montant de sa mise initiale)
      const userRef = suggestionData.userRef;
      await updateDoc(userRef, {
        creaCoinBalance: increment(suggestionData.creaCoinBet * 2), // Doubler la mise initiale
      });
      
      return {
        id: suggestionId,
        status: 'done'
      };
    } catch (err) {
      console.error("Erreur lors de la finalisation de la suggestion:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Like/Dislike une suggestion
  const voteSuggestion = async (suggestionId, voteType) => {
    try {
      if (!user) {
        throw new Error('Vous devez être connecté pour voter');
      }
      
      setLoading(true);
      setError(null);
      
      const suggestionRef = doc(db, 'suggestions', suggestionId);
      const userVoteRef = doc(db, 'suggestionVotes', `${user.uid}_${suggestionId}`);
      
      // Vérifier si l'utilisateur a déjà voté
      const userVoteDoc = await getDoc(userVoteRef);
      
      if (userVoteDoc.exists()) {
        const previousVote = userVoteDoc.data().voteType;
        
        if (previousVote === voteType) {
          // Annuler le vote si c'est le même type
          await deleteDoc(userVoteRef);
          
          // Mettre à jour le compteur
          if (voteType === 'like') {
            await updateDoc(suggestionRef, { likes: increment(-1) });
          } else {
            await updateDoc(suggestionRef, { dislikes: increment(-1) });
          }
          
          return { action: 'removed', voteType };
        } else {
          // Changer le type de vote
          await updateDoc(userVoteRef, { voteType });
          
          // Mettre à jour les compteurs
          if (voteType === 'like') {
            await updateDoc(suggestionRef, { 
              likes: increment(1),
              dislikes: increment(-1)
            });
          } else {
            await updateDoc(suggestionRef, {
              likes: increment(-1),
              dislikes: increment(1)
            });
          }
          
          return { action: 'changed', voteType };
        }
      } else {
        // Nouveau vote
        await setDoc(userVoteRef, {
          userId: user.uid,
          suggestionId,
          voteType,
          createdAt: serverTimestamp()
        });
        
        // Mettre à jour le compteur
        if (voteType === 'like') {
          await updateDoc(suggestionRef, { likes: increment(1) });
        } else {
          await updateDoc(suggestionRef, { dislikes: increment(1) });
        }
        
        return { action: 'added', voteType };
      }
    } catch (err) {
      console.error("Erreur lors du vote:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    suggestions,
    loading,
    error,
    getSuggestions,
    getSuggestionById,
    createSuggestion,
    approveSuggestion,
    rejectSuggestion,
    markSuggestionAsUpcoming,
    markSuggestionAsDone,
    voteSuggestion
  };
}
