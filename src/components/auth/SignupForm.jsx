'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';

export default function SignupForm() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('fan'); // 'fan' ou 'creator'
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const { signup, loginWithGoogle } = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation des champs
    if (!displayName || !email || !password || !confirmPassword) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    
    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      
      await signup(email, password, displayName, userType);
      
      // Rediriger selon le type d'utilisateur
      if (userType === 'creator') {
        router.push('/creator');
      } else {
        router.push('/community');
      }
    } catch (err) {
      console.error('Erreur d\'inscription:', err);
      
      // Messages d'erreur personnalisés
      if (err.code === 'auth/email-already-in-use') {
        setError('Cet email est déjà utilisé');
      } else if (err.code === 'auth/invalid-email') {
        setError('Email invalide');
      } else if (err.code === 'auth/weak-password') {
        setError('Mot de passe trop faible');
      } else {
        setError('Une erreur est survenue lors de l\'inscription');
      }
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleSignup = async () => {
    try {
      setError('');
      setLoading(true);
      
      await loginWithGoogle();
      
      // Par défaut, les utilisateurs Google sont des fans
      // Ils pourront changer leur type plus tard dans leur profil
      router.push('/community');
    } catch (err) {
      console.error('Erreur d\'inscription avec Google:', err);
      setError('Erreur lors de l\'inscription avec Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Créer un compte</h2>
      
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="displayName" className="block text-gray-700 mb-2">Nom d'utilisateur</label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            disabled={loading}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            disabled={loading}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            disabled={loading}
            required
          />
          <p className="text-xs text-gray-500 mt-1">Au moins 6 caractères</p>
        </div>
        
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            disabled={loading}
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Je suis un :</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="fan"
                checked={userType === 'fan'}
                onChange={() => setUserType('fan')}
                className="mr-2 accent-secondary"
                disabled={loading}
              />
              <span>Fan</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="creator"
                checked={userType === 'creator'}
                onChange={() => setUserType('creator')}
                className="mr-2 accent-secondary"
                disabled={loading}
              />
              <span>Créateur</span>
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors mb-4"
          disabled={loading}
        >
          {loading ? 'Inscription en cours...' : 'S\'inscrire'}
        </button>
      </form>
      
      <div className="relative flex items-center justify-center my-4">
        <div className="border-t border-gray-300 flex-grow"></div>
        <span className="mx-4 text-gray-500 text-sm">ou</span>
        <div className="border-t border-gray-300 flex-grow"></div>
      </div>
      
      <button
        onClick={handleGoogleSignup}
        className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition-colors mb-4"
        disabled={loading}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
            <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
            <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
            <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
          </g>
        </svg>
        S'inscrire avec Google
      </button>
      
      <div className="text-center mt-4">
        <span className="text-gray-600">Déjà un compte ?</span>
        <Link href="/login" className="text-secondary ml-1 hover:underline">
          Se connecter
        </Link>
      </div>
      
      <div className="text-xs text-gray-500 mt-6 text-center">
        En vous inscrivant, vous acceptez nos <Link href="/terms" className="text-secondary hover:underline">Conditions d'utilisation</Link> et notre <Link href="/privacy" className="text-secondary hover:underline">Politique de confidentialité</Link>.
      </div>
    </div>
  );
}
