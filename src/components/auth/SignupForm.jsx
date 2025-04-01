'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'fan'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { signUpWithEmail, signInWithGoogle, signInWithGithub } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    
    try {
      setLoading(true);
      await signUpWithEmail(formData.email, formData.password, formData.displayName, formData.userType);
      router.push('/community');
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de l\'inscription');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      router.push('/community');
    } catch (err) {
      setError(err.message || 'Erreur de connexion avec Google');
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGithub();
      router.push('/community');
    } catch (err) {
      setError(err.message || 'Erreur de connexion avec GitHub');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Créer un compte</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-100 text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="displayName" className="block text-white mb-2">
            Nom d'utilisateur
          </label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary bg-white/80"
            required
            value={formData.displayName}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary bg-white/80"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-white mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary bg-white/80"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <p className="text-xs text-gray-300 mt-1">Au moins 6 caractères</p>
        </div>
        
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-white mb-2">
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary bg-white/80"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-white mb-2">
            Je suis un :
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="fan"
                className="mr-2 accent-secondary"
                checked={formData.userType === 'fan'}
                onChange={handleChange}
              />
              <span className="text-white">Fan</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="creator"
                className="mr-2 accent-secondary"
                checked={formData.userType === 'creator'}
                onChange={handleChange}
              />
              <span className="text-white">Créateur</span>
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors mb-4"
          disabled={loading}
        >
          {loading ? 'Chargement...' : 'S\'inscrire'}
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
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300/30 rounded-md shadow-sm bg-white/10 text-white hover:bg-white/20"
          disabled={loading}
        >
          <FaGoogle className="mr-2" />
          Continuer avec Google
        </button>
        
        <button
          type="button"
          onClick={handleGithubSignIn}
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300/30 rounded-md shadow-sm bg-white/10 text-white hover:bg-white/20"
          disabled={loading}
        >
          <FaGithub className="mr-2" />
          Continuer avec GitHub
        </button>
      </div>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-300">Vous avez déjà un compte?</span>{' '}
        <Link href="/login" className="text-secondary hover:underline font-medium">
          Se connecter
        </Link>
      </div>
    </div>
  );
}