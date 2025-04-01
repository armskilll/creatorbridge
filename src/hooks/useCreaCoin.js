import { useState } from 'react';
import { 
  doc, 
  getDoc, 
  updateDoc, 
  increment, 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import useAuth from './useAuth';

export default function useCreaCoin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // Obtenir le solde actuel de CreaCoin d'un utilisateur
  const getCreaCoinBalance = async (userId = null) => {
    try {
      setLoading(true);
      setError(null);
      
      // Si userId n'est pas fourni, utiliser l'utilisateur connecté
      const targetUserId = userId || user?.uid;
      
      if (!targetUserId) {
        throw new Error('ID utilisateur requis');
      }
      
      const userDocRef = doc(db, 'users', targetUserId);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) {
        throw new Error('Utilisateur non trouvé');
      }
      
      return userDoc.data().creaCoinBalance || 0;
    } catch (err) {
      console.error("Erreur lors de la récupération du solde:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Ajouter des CreaCoin au solde d'un utilisateur
  const addCreaCoin = async (amount, userId = null, reason = 'ajout') => {
    try {
      if (!user && !userId) {
        throw new Error('Vous devez être connecté ou fournir un ID utilisateur');
      }
      
      setLoading(true);
      setError(null);
      
      // Si userId n'est pas fourni, utiliser l'utilisateur connecté
      const targetUserId = userId || user?.uid;
      
      const userDocRef = doc(db, 'users', targetUserId);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) {
        throw new Error('Utilisateur non trouvé');
      }
      
      // Mettre à jour le solde
      await updateDoc(userDocRef, {
        creaCoinBalance: increment(amount)
      });
      
      // Enregistrer la transaction
      await addDoc(collection(db, 'creaCoinTransactions'), {
        userId: targetUserId,
        amount,
        type: 'credit',
        reason,
        createdAt: serverTimestamp()
      });
      
      return {
        success: true,
        newBalance: (userDoc.data().creaCoinBalance || 0) + amount
      };
    } catch (err) {
      console.error("Erreur lors de l'ajout de CreaCoin:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Retirer des CreaCoin du solde d'un utilisateur
  const removeCreaCoin = async (amount, userId = null, reason = 'retrait') => {
    try {
      if (!user && !userId) {
        throw new Error('Vous devez être connecté ou fournir un ID utilisateur');
      }
      
      setLoading(true);
      setError(null);
      
      // Si userId n'est pas fourni, utiliser l'utilisateur connecté
      const targetUserId = userId || user?.uid;
      
      const userDocRef = doc(db, 'users', targetUserId);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) {
        throw new Error('Utilisateur non trouvé');
      }
      
      const currentBalance = userDoc.data().creaCoinBalance || 0;
      
      // Vérifier que l'utilisateur a suffisamment de CreaCoin
      if (currentBalance < amount) {
        throw new Error('Solde de CreaCoin insuffisant');
      }
      
      // Mettre à jour le solde
      await updateDoc(userDocRef, {
        creaCoinBalance: increment(-amount)
      });
      
      // Enregistrer la transaction
      await addDoc(collection(db, 'creaCoinTransactions'), {
        userId: targetUserId,
        amount: -amount,
        type: 'debit',
        reason,
        createdAt: serverTimestamp()
      });
      
      return {
        success: true,
        newBalance: currentBalance - amount
      };
    } catch (err) {
      console.error("Erreur lors du retrait de CreaCoin:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Transférer des CreaCoin entre utilisateurs
  const transferCreaCoin = async (toUserId, amount, reason = 'transfert') => {
    try {
      if (!user) {
        throw new Error('Vous devez être connecté pour effectuer un transfert');
      }
      
      if (user.uid === toUserId) {
        throw new Error('Vous ne pouvez pas transférer de CreaCoin à vous-même');
      }
      
      setLoading(true);
      setError(null);
      
      // Vérifier le solde de l'expéditeur
      const fromUserRef = doc(db, 'users', user.uid);
      const fromUserDoc = await getDoc(fromUserRef);
      
      if (!fromUserDoc.exists()) {
        throw new Error('Utilisateur expéditeur non trouvé');
      }
      
      const fromUserBalance = fromUserDoc.data().creaCoinBalance || 0;
      
      if (fromUserBalance < amount) {
        throw new Error('Solde de CreaCoin insuffisant');
      }
      
      // Vérifier que le destinataire existe
      const toUserRef = doc(db, 'users', toUserId);
      const toUserDoc = await getDoc(toUserRef);
      
      if (!toUserDoc.exists()) {
        throw new Error('Utilisateur destinataire non trouvé');
      }
      
      // Effectuer le transfert
      await updateDoc(fromUserRef, {
        creaCoinBalance: increment(-amount)
      });
      
      await updateDoc(toUserRef, {
        creaCoinBalance: increment(amount)
      });
      
      // Enregistrer les transactions
      await addDoc(collection(db, 'creaCoinTransactions'), {
        userId: user.uid,
        toUserId,
        amount: -amount,
        type: 'transfer_out',
        reason,
        createdAt: serverTimestamp()
      });
      
      await addDoc(collection(db, 'creaCoinTransactions'), {
        userId: toUserId,
        fromUserId: user.uid,
        amount,
        type: 'transfer_in',
        reason,
        createdAt: serverTimestamp()
      });
      
      return {
        success: true,
        newSenderBalance: fromUserBalance - amount
      };
    } catch (err) {
      console.error("Erreur lors du transfert de CreaCoin:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Réclamer un bonus quotidien de CreaCoin
  const claimDailyBonus = async () => {
    try {
      if (!user) {
        throw new Error('Vous devez être connecté pour réclamer votre bonus quotidien');
      }
      
      setLoading(true);
      setError(null);
      
      const userRef = doc(db, 'users', user.uid);
      
      // Vérifier si l'utilisateur a déjà réclamé son bonus aujourd'hui
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const q = query(
        collection(db, 'creaCoinTransactions'),
        where('userId', '==', user.uid),
        where('reason', '==', 'bonus_quotidien'),
        where('createdAt', '>=', today),
        limit(1)
      );
      
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        throw new Error('Vous avez déjà réclamé votre bonus quotidien aujourd\'hui');
      }
      
      // Montant du bonus (peut être ajusté selon des règles personnalisées)
      const bonusAmount = 50;
      
      // Ajouter le bonus
      await updateDoc(userRef, {
        creaCoinBalance: increment(bonusAmount)
      });
      
      // Enregistrer la transaction
      await addDoc(collection(db, 'creaCoinTransactions'), {
        userId: user.uid,
        amount: bonusAmount,
        type: 'credit',
        reason: 'bonus_quotidien',
        createdAt: serverTimestamp()
      });
      
      return {
        success: true,
        bonusAmount
      };
    } catch (err) {
      console.error("Erreur lors de la réclamation du bonus:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Obtenir l'historique des transactions CreaCoin
  const getTransactionHistory = async (limit = 10) => {
    try {
      if (!user) {
        throw new Error('Vous devez être connecté pour voir votre historique');
      }
      
      setLoading(true);
      setError(null);
      
      const q = query(
        collection(db, 'creaCoinTransactions'),
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc'),
        limit(limit)
      );
      
      const querySnapshot = await getDocs(q);
      
      const transactions = [];
      querySnapshot.forEach((doc) => {
        transactions.push({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date()
        });
      });
      
      return transactions;
    } catch (err) {
      console.error("Erreur lors de la récupération de l'historique:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    getCreaCoinBalance,
    addCreaCoin,
    removeCreaCoin,
    transferCreaCoin,
    claimDailyBonus,
    getTransactionHistory
  };
}
