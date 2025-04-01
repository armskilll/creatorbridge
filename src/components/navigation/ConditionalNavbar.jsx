'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import useAuth from '@/hooks/useAuth';
import useCreaCoin from '@/hooks/useCreaCoin';

export default function ConditionalNavbar() {
  const { user, isCreator, isFan, logout } = useAuth();
  const { getCreaCoinBalance } = useCreaCoin();
  const pathname = usePathname();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [creaCoinBalance, setCreaCoinBalance] = useState(0);
  
  useEffect(() => {
    const fetchBalance = async () => {
      if (user) {
        try {
          const balance = await getCreaCoinBalance();
          setCreaCoinBalance(balance);
        } catch (error) {
          console.error('Erreur lors de la récupération du solde', error);
        }
      }
    };
    
    fetchBalance();
  }, [user, getCreaCoinBalance]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };
  
  const handleLogout = async () => {
    try {
      await logout();
      setUserMenuOpen(false);
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    }
  };
  
  // Fonction pour déterminer si un lien est actif
  const isLinkActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };
  
  // Liens pour les créateurs
  const creatorLinks = [
    { name: 'Tableau de bord', path: '/creator' },
    { name: 'Suggestions', path: '/creator/suggestions/simplifie' },
    { name: 'Statistiques', path: '/creator/stats' },
    { name: 'Espace communauté', path: '/community' },
  ];
  
  // Liens pour les fans
  const fanLinks = [
    { name: 'Découvrir', path: '/community' },
    { name: 'Défis actifs', path: '/community/defis' },
    { name: 'Proposer', path: '/community/proposer' },
    { name: 'Créateurs', path: '/community/createurs' },
  ];
  
  // Liens publics (quand non connecté)
  const publicLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Fonctionnalités', path: '/features' },
    { name: 'Créateurs', path: '/creators' },
    { name: 'À propos', path: '/about' },
  ];
  
  // Sélection des liens en fonction du type d'utilisateur
  const navLinks = user 
    ? (isCreator() ? creatorLinks : fanLinks) 
    : publicLinks;

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom mx-auto">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-secondary">CreatorBridge</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isLinkActive(link.path)
                      ? 'border-secondary text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right side buttons/info */}
          <div className="flex items-center">
            {/* CreaCoin Balance for logged-in users */}
            {user && (
              <div className="hidden md:flex items-center mr-4">
                <div className="bg-secondary/10 text-secondary rounded-full px-3 py-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{creaCoinBalance}</span>
                </div>
                <Link href="/recharge" className="ml-2 text-secondary text-sm hover:underline">
                  Recharger
                </Link>
              </div>
            )}
            
            {/* Login/Signup buttons for non-logged users */}
            {!user ? (
              <div className="hidden md:flex md:items-center md:space-x-2">
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-secondary border border-secondary rounded-md hover:bg-secondary/10 transition-colors"
                >
                  Connexion
                </Link>
                <Link 
                  href="/signup" 
                  className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Inscription
                </Link>
              </div>
            ) : (
              <div className="hidden md:ml-3 md:flex md:items-center">
                {/* User dropdown */}
                <div className="relative">
                  <button
                    onClick={toggleUserMenu}
                    className="flex items-center space-x-2 focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        {user.photoURL ? (
                          <Image
                            src={user.photoURL}
                            alt={user.displayName}
                            width={32}
                            height={32}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-500 text-sm font-medium">
                            {user.displayName?.charAt(0).toUpperCase() || 'U'}
                          </span>
                        )}
                      </div>
                      <span className="ml-2 text-gray-700">{user.displayName}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* Dropdown menu */}
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Mon profil
                      </Link>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Paramètres
                      </Link>
                      {isCreator() && (
                        <Link
                          href="/creator"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Espace créateur
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isLinkActive(link.path)
                  ? 'border-secondary text-secondary bg-secondary/10'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile user section */}
        {user ? (
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm font-medium">
                      {user.displayName?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  )}
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{user.displayName}</div>
                <div className="text-sm font-medium text-gray-500">{user.email}</div>
              </div>
              <div className="ml-auto flex items-center">
                <div className="flex items-center bg-secondary/10 text-secondary rounded-full px-3 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{creaCoinBalance}</span>
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                href="/profile"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mon profil
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Paramètres
              </Link>
              <Link
                href="/recharge"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Recharger CreaCoin
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-base font-medium text-red-600 hover:bg-gray-100"
              >
                Déconnexion
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="space-y-1 px-4">
              <Link
                href="/login"
                className="block px-4 py-2 text-base font-medium text-secondary hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connexion
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 text-base font-medium bg-secondary text-white hover:bg-opacity-90 rounded-md text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inscription
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
