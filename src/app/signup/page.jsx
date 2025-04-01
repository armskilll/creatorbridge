'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SignupForm from '@/components/auth/SignupForm';
import useAuth from '@/hooks/useAuth';

export default function SignupPage() {
  const { user } = useAuth();
  const router = useRouter();
  
  // Rediriger si l'utilisateur est déjà connecté
  useEffect(() => {
    if (user) {
      router.push('/community');
    }
  }, [user, router]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-6">CreatorBridge</h1>
        <h2 className="mt-6 text-center text-xl font-bold text-gray-900">
          Créez votre compte
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <SignupForm />
      </div>
    </div>
  );
}
