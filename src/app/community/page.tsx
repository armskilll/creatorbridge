'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CommunityDiscover() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCreator, setSelectedCreator] = useState('');
  const [ideaType, setIdeaType] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [betAmount, setBetAmount] = useState(50);

  // Données fictives pour les créateurs populaires
  const popularCreators = [
    { id: 1, name: 'Alex Micro', category: 'Micro-trottoir', followers: '124K', image: 'https://randomuser.me/api/portraits/men/32.jpg', activeDefis: 3 },
    { id: 2, name: 'GameMaster', category: 'Gaming', followers: '287K', image: 'https://randomuser.me/api/portraits/men/44.jpg', activeDefis: 2 },
    { id: 3, name: 'Laura Mode', category: 'Lifestyle', followers: '105K', image: 'https://randomuser.me/api/portraits/women/62.jpg', activeDefis: 5 },
    { id: 4, name: 'Tech Jean', category: 'Tech', followers: '72K', image: 'https://randomuser.me/api/portraits/men/68.jpg', activeDefis: 1 },
  ];

  // Données fictives pour les défis à proximité
  const nearbyDefis = [
    {
      id: 1,
      creator: 'Alex Micro',
      creatorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      question: 'Combien de gifles accepterais-tu pour gagner 100€?',
      timeLeft: '2h',
      betOptions: [
        { option: '0-3 gifles', participants: 245 },
        { option: '4-7 gifles', participants: 418 },
        { option: '8+ gifles', participants: 173 },
      ],
      totalCreaCoin: 8360
    },
    {
      id: 2,
      creator: 'GameMaster',
      creatorImage: 'https://randomuser.me/api/portraits/men/44.jpg',
      question: 'Quel jeu dois-je streamer ce weekend?',
      timeLeft: '5h',
      betOptions: [
        { option: 'Fortnite', participants: 312 },
        { option: 'Minecraft', participants: 289 },
        { option: 'Call of Duty', participants: 357 },
        { option: 'League of Legends', participants: 198 },
      ],
      totalCreaCoin: 11625
    },
    {
      id: 3,
      creator: 'Laura Mode',
      creatorImage: 'https://randomuser.me/api/portraits/women/62.jpg',
      question: 'Quelle destination pour mon prochain vlog voyage?',
      timeLeft: '1j',
      betOptions: [
        { option: 'Japon', participants: 523 },
        { option: 'Italie', participants: 487 },
        { option: 'Maroc', participants: 298 },
        { option: 'Canada', participants: 342 },
      ],
      totalCreaCoin: 16500
    }
  ];

  return (
    <div className="container-custom py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Colonne principale */}
        <div className="md:w-2/3">
          <section className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Découvrir des Défis</h1>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Rechercher un créateur..." 
                  className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Votre portefeuille CreaCoin</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    C
                  </div>
                  <div>
                    <p className="text-2xl font-bold">750</p>
                    <p className="text-sm text-gray-500">CreaCoin disponibles</p>
                  </div>
                </div>
                <div className="space-x-3">
                  <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                    Acheter des CreaCoin
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                    Historique
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">N'oubliez pas de récupérer votre bonus quotidien!</p>
                <button className="mt-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors">
                  +50 CreaCoin gratuits
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Défis populaires à proximité</h2>
            <div className="space-y-6">
              {nearbyDefis.map((defi) => (
                <div key={defi.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img src={defi.creatorImage} alt={defi.creator} className="w-10 h-10 rounded-full object-cover" />
                      <div className="ml-3">
                        <p className="font-medium">{defi.creator}</p>
                        <p className="text-xs text-gray-500">il y a {defi.timeLeft}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">{defi.question}</h3>
                    
                    <div className="space-y-3 mb-6">
                      {defi.betOptions.map((option, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                          <div className="flex justify-between mb-1">
                            <span>{option.option}</span>
                            <span className="text-gray-600 text-sm">{option.participants} paris</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-secondary h-2 rounded-full" 
                              style={{ width: `${(option.participants / defi.betOptions.reduce((acc, curr) => acc + curr.participants, 0)) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{defi.totalCreaCoin.toLocaleString()} CreaCoin en jeu</span>
                      <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                        Parier des CreaCoin
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/community/defis" className="text-secondary hover:underline">
                Voir tous les défis actifs →
              </Link>
            </div>
          </section>
        </div>

        {/* Colonne latérale */}
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Créateurs populaires</h2>
            <div className="space-y-4">
              {popularCreators.map((creator) => (
                <div key={creator.id} className="flex items-center">
                  <img src={creator.image} alt={creator.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="ml-3 flex-grow">
                    <p className="font-medium">{creator.name}</p>
                    <p className="text-xs text-gray-500">{creator.category} • {creator.followers} abonnés</p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    {creator.activeDefis} défis
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/community/creators" className="text-secondary hover:underline">
                Voir plus de créateurs
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Proposer une idée</h2>
            <p className="text-gray-600 mb-4">
              Vous avez une idée de défi ou de contenu ? Proposez-la directement aux créateurs !
            </p>
            <select 
              className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary"
              value={selectedCreator}
              onChange={(e) => setSelectedCreator(e.target.value)}
            >
              <option value="">Sélectionner un créateur</option>
              {popularCreators.map((creator) => (
                <option key={creator.id} value={creator.id}>{creator.name}</option>
              ))}
            </select>
            <select 
              className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary"
              value={ideaType}
              onChange={(e) => setIdeaType(e.target.value)}
            >
              <option value="">Type d'idée</option>
              <option value="question">Question micro-trottoir</option>
              <option value="challenge">Challenge</option>
              <option value="content">Idée de contenu</option>
              <option value="collab">Collaboration</option>
            </select>
            <textarea 
              placeholder="Décrivez votre idée..." 
              className="w-full border rounded-md px-3 py-2 h-24 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary"
              value={ideaDescription}
              onChange={(e) => setIdeaDescription(e.target.value)}
            ></textarea>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Mise en CreaCoin (min. 50)</p>
              <input 
                type="number" 
                min="50" 
                value={betAmount}
                onChange={(e) => setBetAmount(Number(e.target.value))}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <p className="text-xs text-gray-500 mt-1">Les CreaCoin seront remboursés si votre idée est retenue</p>
            </div>
            <button className="w-full bg-secondary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
              Soumettre l'idée
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
