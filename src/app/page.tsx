'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '../components/common/Logo';

export default function Home() {
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRoleSelection = (role: string) => {
    // Ici on pourrait stocker le rôle dans le localStorage ou dans un état global
    setShowRoleModal(false);
    
    if (role === 'creator') {
      router.push('/creator');
    } else {
      router.push('/community');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-primary/30 to-secondary/30">
      {/* Header avec bouton de connexion */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container-custom mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <Logo height={40} />
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/login" 
              className="px-6 py-2 text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Se connecter
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2 bg-primary text-white border-2 border-primary rounded-full hover:bg-transparent hover:text-primary transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </header>

      {/* Réserver de l'espace pour le header fixe */}
      <div className="h-20"></div>

      {/* Hero Section avec animation et design amélioré */}
      <div className="container-custom pt-16 pb-24 px-4 md:px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="mx-auto w-fit mb-8 relative animate-pulse">
            <div className="absolute -inset-6 rounded-full bg-primary/20 blur-xl"></div>
            <Logo height={100} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Créez, <span className="text-primary">connectez</span>, <span className="text-secondary">collaborez</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
            La plateforme qui connecte les créateurs de contenu avec leur communauté pour une expérience interactive et enrichissante.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={() => setShowRoleModal(true)}
              className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/50 hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1"
            >
              Commencer maintenant
            </button>
            <a 
              href="#how-it-works" 
              className="px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:border-white/80 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Comment ça marche
            </a>
          </div>
        </div>

        {/* Cartes avec design amélioré */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/20 group">
            <div className="p-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl group-hover:opacity-75 transition duration-1000 opacity-0"></div>
              <div className="flex items-center mb-6">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Espace Créateur</h2>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Impliquez directement votre communauté dans la création de votre contenu. Lancez des défis, 
                recueillez des idées et monétisez l'engagement de vos fans.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Créez des sondages et défis pour votre audience</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Générez des revenus supplémentaires</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Analysez l'engagement de votre communauté</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowRoleModal(true)}
                className="w-full bg-primary/90 text-white py-4 rounded-xl hover:bg-primary transition-colors duration-300 font-semibold group-hover:shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10">Accéder à l'Espace Créateur</span>
                <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-primary to-primary-dark transition-all duration-500 group-hover:w-full"></div>
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/20 group">
            <div className="p-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl group-hover:opacity-75 transition duration-1000 opacity-0"></div>
              <div className="flex items-center mb-6">
                <div className="bg-secondary rounded-full p-3 mr-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Espace Communauté</h2>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Participez activement au contenu de vos créateurs préférés. Proposez des idées, 
                votez sur les défis et gagnez des récompenses avec les CreaCoin.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Découvrez des créateurs de tous horizons</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Soumettez vos idées et participez aux défis</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Gagnez des CreaCoin en participant</span>
                </li>
              </ul>
              <button
                onClick={() => setShowRoleModal(true)}
                className="w-full bg-secondary/90 text-white py-4 rounded-xl hover:bg-secondary transition-colors duration-300 font-semibold group-hover:shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10">Accéder à l'Espace Communauté</span>
                <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-secondary to-secondary-dark transition-all duration-500 group-hover:w-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Comment ça fonctionne avec design moderne */}
      <div id="how-it-works" className="container-custom py-20 px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Comment ça fonctionne</span>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/30 -rotate-1"></div>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Une plateforme intuitive qui connecte créateurs et communauté
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          {/* Ligne de connexion entre les étapes */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-white to-secondary hidden md:block"></div>

          {/* Étape 1 */}
          <div className="relative group">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 transition-all duration-500 group-hover:shadow-primary/20 group-hover:border-primary/30 h-full flex flex-col">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Les créateurs lancent des défis</h3>
              <p className="text-white/80 text-center flex-grow">
                Les créateurs définissent des sondages, questions ou défis pour leur communauté et déterminent la récompense en CreaCoin
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto mt-6 rounded-full"></div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="relative group">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 transition-all duration-500 group-hover:shadow-white/20 group-hover:border-white/30 h-full flex flex-col">
              <div className="bg-white text-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">La communauté participe</h3>
              <p className="text-white/80 text-center flex-grow">
                Les fans utilisent leurs CreaCoin pour voter, proposer des idées ou parier sur les défis qu'ils trouvent intéressants
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mx-auto mt-6 rounded-full"></div>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="relative group">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 transition-all duration-500 group-hover:shadow-secondary/20 group-hover:border-secondary/30 h-full flex flex-col">
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Tout le monde gagne</h3>
              <p className="text-white/80 text-center flex-grow">
                Les créateurs obtiennent du contenu pertinent, les fans gagnent des récompenses et des tokens exclusifs
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-secondary to-transparent mx-auto mt-6 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-custom py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute -inset-10 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl rounded-full"></div>
        <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-10 md:p-16 border border-white/10 shadow-xl max-w-5xl mx-auto overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à rejoindre l'aventure ?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Créez un compte maintenant et commencez à collaborer avec des créateurs et des fans du monde entier.
            </p>
            <button
              onClick={() => setShowRoleModal(true)}
              className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
            >
              Créer un compte gratuit
            </button>
          </div>
        </div>
      </div>

      {/* Footer moderne */}
      <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-16 px-4 md:px-6">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <Link href="/" className="mb-8 md:mb-0">
              <Logo height={50} />
            </Link>
            
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">À propos</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
            <p className="text-gray-400 mb-4 md:mb-0">
              {new Date().getFullYear()} CreatorBridge. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal amélioré pour la sélection du rôle */}
      {showRoleModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div 
            className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 max-w-md w-full shadow-2xl transform transition-all relative"
            style={{animation: 'modalFadeIn 0.5s ease-out'}}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-sm -z-10"></div>
            
            <div className="text-center">
              <div className="mx-auto w-fit mb-6">
                <Logo height={60} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6">Choisissez votre rôle</h2>
              <p className="text-white/90 mb-8">
                Sélectionnez le rôle qui correspond le mieux à votre utilisation de CreatorBridge.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => handleRoleSelection('creator')}
                className="group bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-xl p-6 transition-all flex flex-col items-center"
              >
                <div className="bg-primary/20 group-hover:bg-primary/30 rounded-full p-3 mb-4 transition-colors">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">Je suis un Créateur</span>
                <span className="text-sm text-white/70 mt-2 text-center">Je crée du contenu et je veux connecter avec ma communauté</span>
              </button>
              
              <button
                onClick={() => handleRoleSelection('fan')}
                className="group bg-white/5 hover:bg-secondary/20 border border-white/10 hover:border-secondary/50 rounded-xl p-6 transition-all flex flex-col items-center"
              >
                <div className="bg-secondary/20 group-hover:bg-secondary/30 rounded-full p-3 mb-4 transition-colors">
                  <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-white">Je suis un Fan</span>
                <span className="text-sm text-white/70 mt-2 text-center">Je veux participer et contribuer aux défis de mes créateurs préférés</span>
              </button>
            </div>
            
            <div className="text-center mt-4">
              <button
                onClick={() => setShowRoleModal(false)}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
