'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useAuth from '../../hooks/useAuth';

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();
  
  // Rediriger si l'utilisateur est déjà connecté
  useEffect(() => {
    if (user) {
      router.push('/community');
    }
  }, [user, router]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-primary/30 to-secondary/30 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-white mb-6">CreatorBridge</h1>
        <h2 className="mt-6 text-center text-xl font-bold text-white">
          Connectez-vous à votre compte
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        {/* Formulaire de connexion intégré directement */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 p-8">
          {/* Contenu du formulaire */}
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <div className="mt-1">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  required 
                  className="w-full px-4 py-3 border border-white/20 bg-white/5 backdrop-blur-md rounded-xl text-white shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-white">Mot de passe</label>
                <div className="text-sm">
                  <Link href="/reset-password" className="text-primary hover:text-primary-light">
                    Mot de passe oublié?
                  </Link>
                </div>
              </div>
              <div className="mt-1">
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  autoComplete="current-password" 
                  required 
                  className="w-full px-4 py-3 border border-white/20 bg-white/5 backdrop-blur-md rounded-xl text-white shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Se connecter
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/5 backdrop-blur-md text-white/80">Ou continuer avec</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                className="w-full flex justify-center items-center py-3 px-4 border border-white/20 rounded-full shadow-sm bg-white/5 backdrop-blur-md text-lg font-medium text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continuer avec Google
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-white/70">
              Vous n'avez pas de compte?{' '}
              <Link href="/signup" className="text-primary hover:text-primary-light font-medium">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
