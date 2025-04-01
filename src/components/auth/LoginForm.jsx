'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [typeSelected, setTypeSelected] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const { login, loginWithGoogle } = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    
    try {
      setLoading(true);
      await login(email, password, userType);
      
      // Rediriger vers la page appropriée selon le type
      if (userType === 'creator') {
        router.push('/creator-dashboard');
      } else {
        router.push('/community');
      }
    } catch (err) {
      setError('Impossible de se connecter. Vérifiez vos identifiants.');
    } finally {
      setLoading(false);
    }
  };

  // Connexion avec services externes
  const handleExternalSignIn = async (provider) => {
    try {
      setLoading(true);
      if (provider === 'google') {
        await loginWithGoogle(userType);
      }
      
      // Rediriger selon le type
      if (userType === 'creator') {
        router.push('/creator-dashboard');
      } else {
        router.push('/community');
      }
    } catch (err) {
      setError(`Erreur de connexion avec ${provider}`);
    } finally {
      setLoading(false);
    }
  };

  // Première étape : Sélection du type d'utilisateur
  if (!typeSelected) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Comment souhaitez-vous vous connecter ?</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-100 text-sm">
            {error}
          </div>
        )}
        
        <div className="mb-6">
          <p className="text-white mb-4">Choisissez votre rôle sur la plateforme :</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="p-4 rounded-lg border-2 border-white/20 hover:border-primary hover:bg-primary/20 flex flex-col items-center justify-center transition-all"
              onClick={() => {
                setUserType('communauté');
                setTypeSelected(true);
              }}
            >
              <span className="text-3xl mb-2">👥</span>
              <span className="text-white font-medium">Communauté</span>
              <span className="text-xs text-white/70 mt-1 text-center">Découvrez et soutenez vos créateurs préférés</span>
            </button>
            
            <button
              className="p-4 rounded-lg border-2 border-white/20 hover:border-secondary hover:bg-secondary/20 flex flex-col items-center justify-center transition-all"
              onClick={() => {
                setUserType('creator');
                setTypeSelected(true);
              }}
            >
              <span className="text-3xl mb-2">🎨</span>
              <span className="text-white font-medium">Créateur</span>
              <span className="text-xs text-white/70 mt-1 text-center">Partagez votre contenu et engagez votre communauté</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Deuxième étape : Formulaire de connexion
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-center text-white">Connexion</h2>
      <p className="text-center text-white/70 mb-6">
        En tant que {userType === 'creator' ? 'créateur' : 'membre de la communauté'}
        <button 
          onClick={() => setTypeSelected(false)}
          className="ml-2 text-secondary hover:underline"
        >
          Changer
        </button>
      </p>
      
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-100 text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary bg-white/80"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-white mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary bg-white/80"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-secondary hover:underline mt-1">
              Mot de passe oublié?
            </Link>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors mb-4"
          disabled={loading}
        >
          {loading ? 'Chargement...' : 'Se connecter'}
        </button>
      </form>
      
      <div className="relative flex items-center justify-center my-4">
        <div className="border-t border-gray-300/30 flex-grow"></div>
        <span className="mx-4 text-gray-300 text-sm">ou</span>
        <div className="border-t border-gray-300/30 flex-grow"></div>
      </div>
      
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => handleExternalSignIn('google')}
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300/30 rounded-md shadow-sm bg-white/10 text-white hover:bg-white/20"
          disabled={loading}
        >
          Continuer avec Google
        </button>
      </div>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-300">Vous n'avez pas de compte?</span>{' '}
        <Link href="/signup" className="text-secondary hover:underline font-medium">
          S'inscrire
        </Link>
      </div>
    </div>
  );
}