'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SignupForm from './SignupForm';
import useAuth from '../../hooks/useAuth';

export default function SignupContainer() {
  const { user } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (user) {
      router.push('/community');
    }
  }, [user, router]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-primary/30 to-secondary/30 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mx-auto w-fit mb-8 relative">
          <div className="absolute -inset-6 rounded-full bg-primary/20 blur-xl"></div>
          <svg width="240" height="60" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="30" r="10" fill="#4F46E5"></circle>
            <circle cx="50" cy="30" r="10" fill="#22D3EE"></circle>
            <rect x="20" y="28" width="30" height="4" fill="#4F46E5"></rect>
            <text x="70" y="36" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="600" fill="#111827" letterSpacing="0.5">Creator<tspan fill="#4F46E5">Bridge</tspan></text>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-6 text-center leading-tight">
          <span className="text-primary">Créez</span> votre compte
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 text-center">
          Rejoignez notre plateforme et connectez-vous avec votre communauté
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <SignupForm />
      </div>
    </div>
  );
}