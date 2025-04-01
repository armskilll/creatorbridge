'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';
import useCreaCoin from '@/hooks/useCreaCoin';
import { ConditionalNavbar } from '@/components/navigation/ConditionalNavbar';

export default function RechargePage() {
  const { user } = useAuth();
  const { getCreaCoinBalance, addCreaCoin } = useCreaCoin();
  const router = useRouter();
  
  const [creaCoinBalance, setCreaCoinBalance] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  // Options de recharge prédéfinies
  const rechargeOptions = [
    { amount: 100, price: '1,00 €', bonus: 0 },
    { amount: 500, price: '5,00 €', bonus: 25 },
    { amount: 1000, price: '10,00 €', bonus: 100 },
    { amount: 2500, price: '20,00 €', bonus: 500 },
    { amount: 5000, price: '40,00 €', bonus: 1250 },
    { amount: 10000, price: '75,00 €', bonus: 3000 },
  ];
  
  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    
    const fetchBalance = async () => {
      try {
        const balance = await getCreaCoinBalance();
        setCreaCoinBalance(balance);
      } catch (error) {
        console.error('Erreur lors de la récupération du solde', error);
      }
    };
    
    fetchBalance();
  }, [user, getCreaCoinBalance, router]);
  
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseInt(value, 10));
    } else {
      setSelectedAmount(0);
    }
  };
  
  const getBonus = (amount) => {
    for (const option of rechargeOptions) {
      if (option.amount === amount) {
        return option.bonus;
      }
    }
    // Pour les montants personnalisés
    if (amount >= 10000) {
      return Math.floor(amount * 0.3); // 30% de bonus
    } else if (amount >= 5000) {
      return Math.floor(amount * 0.25); // 25% de bonus
    } else if (amount >= 2500) {
      return Math.floor(amount * 0.2); // 20% de bonus
    } else if (amount >= 1000) {
      return Math.floor(amount * 0.1); // 10% de bonus
    } else if (amount >= 500) {
      return Math.floor(amount * 0.05); // 5% de bonus
    }
    return 0;
  };
  
  const getPrice = (amount) => {
    for (const option of rechargeOptions) {
      if (option.amount === amount) {
        return option.price;
      }
    }
    // Pour les montants personnalisés, calculer le prix (1€ = 100 CreaCoin)
    const priceInEuros = amount / 100;
    return `${priceInEuros.toFixed(2).replace('.', ',')} €`;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (selectedAmount <= 0) {
      setError('Veuillez sélectionner un montant valide');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Simuler un appel à une API de paiement
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Si le paiement réussit, ajouter les CreaCoin au solde de l'utilisateur
      const bonus = getBonus(selectedAmount);
      const totalAmount = selectedAmount + bonus;
      
      await addCreaCoin(totalAmount, null, 'achat');
      
      // Mettre à jour le solde affiché
      const newBalance = await getCreaCoinBalance();
      setCreaCoinBalance(newBalance);
      
      // Afficher le succès
      setSuccess(true);
      
      // Réinitialiser le formulaire
      setSelectedAmount(500);
      setCustomAmount('');
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors du paiement', error);
      setError('Une erreur est survenue lors du traitement du paiement. Veuillez réessayer.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ConditionalNavbar />
      
      <div className="container-custom mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Recharger votre compte CreaCoin</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-green-600 mb-2">Paiement réussi !</h2>
                  <p className="text-gray-600 mb-6">
                    {selectedAmount} CreaCoin ont été ajoutés à votre compte
                    {getBonus(selectedAmount) > 0 && ` (+ ${getBonus(selectedAmount)} bonus)`}.
                  </p>
                  <p className="text-gray-800 font-medium mb-8">
                    Votre nouveau solde : <span className="text-secondary font-bold">{creaCoinBalance} CreaCoin</span>
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition-colors"
                    >
                      Effectuer un autre achat
                    </button>
                    <button
                      onClick={() => router.push('/community')}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Retour à la communauté
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-3 rounded-md mb-4">
                      {error}
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Choisissez un montant</h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      {rechargeOptions.map((option) => (
                        <div
                          key={option.amount}
                          className={`border rounded-lg p-4 text-center cursor-pointer transition-colors ${
                            selectedAmount === option.amount
                              ? 'border-secondary bg-secondary/10'
                              : 'border-gray-200 hover:border-secondary'
                          }`}
                          onClick={() => handleAmountSelect(option.amount)}
                        >
                          <div className="text-xl font-bold text-secondary mb-1">{option.amount}</div>
                          <div className="text-gray-600">{option.price}</div>
                          {option.bonus > 0 && (
                            <div className="text-green-600 text-sm mt-2">+{option.bonus} bonus</div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <label htmlFor="customAmount" className="block text-gray-700 mb-2">
                        Montant personnalisé (en CreaCoin)
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          id="customAmount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          placeholder="Entrez un montant personnalisé"
                          className="flex-grow border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                        <div className="ml-4">
                          <span className="text-gray-700">Prix: {customAmount ? getPrice(parseInt(customAmount, 10)) : '0,00 €'}</span>
                          {customAmount && parseInt(customAmount, 10) >= 500 && (
                            <div className="text-green-600 text-sm">
                              +{getBonus(parseInt(customAmount, 10))} bonus
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Méthode de paiement</h2>
                    
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border rounded-md cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="mr-3 accent-secondary"
                        />
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                          <span>Carte bancaire</span>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border rounded-md cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                          className="mr-3 accent-secondary"
                        />
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 text-blue-800 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
                          </svg>
                          <span>PayPal</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Montant sélectionné:</span>
                      <span className="font-medium">{selectedAmount} CreaCoin</span>
                    </div>
                    {getBonus(selectedAmount) > 0 && (
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">Bonus:</span>
                        <span className="font-medium text-green-600">+{getBonus(selectedAmount)} CreaCoin</span>
                      </div>
                    )}
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-700">Prix:</span>
                      <span className="font-medium">{getPrice(selectedAmount)}</span>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-secondary text-white py-3 rounded-md hover:bg-opacity-90 transition-colors"
                      disabled={loading || selectedAmount <= 0}
                    >
                      {loading ? 'Traitement...' : `Payer ${getPrice(selectedAmount)}`}
                    </button>
                    
                    <p className="text-center text-sm text-gray-500 mt-4">
                      En effectuant cet achat, vous acceptez nos{' '}
                      <a href="/terms" className="text-secondary hover:underline">
                        Conditions Générales de Vente
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Votre solde</h2>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">{creaCoinBalance}</div>
                  <div className="text-sm text-gray-500">CreaCoin disponibles</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">À quoi servent les CreaCoin ?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Proposer des idées</h3>
                    <p className="text-sm text-gray-600">Suggérez des idées aux créateurs et misez des CreaCoin pour augmenter vos chances d'être sélectionné.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Parier sur les défis</h3>
                    <p className="text-sm text-gray-600">Placez des paris sur les résultats des défis lancés par les créateurs et gagnez des récompenses.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Accéder au contenu exclusif</h3>
                    <p className="text-sm text-gray-600">Déverrouillez du contenu exclusif proposé par vos créateurs préférés.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Gagner des récompenses</h3>
                    <p className="text-sm text-gray-600">Vos suggestions acceptées vous rapportent des CreaCoin. Plus votre mise est élevée, plus vous gagnez.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
