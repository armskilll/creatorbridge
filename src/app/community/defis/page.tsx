import React from 'react';
import Link from 'next/link';

export default function DefisPage() {
  // Données fictives pour les défis actifs
  const activeDefis = [
    {
      id: 1,
      creator: 'Alex Micro',
      creatorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      category: 'Micro-trottoir',
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
      category: 'Gaming',
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
      category: 'Lifestyle',
      question: 'Quelle destination pour mon prochain vlog voyage?',
      timeLeft: '1j',
      betOptions: [
        { option: 'Japon', participants: 523 },
        { option: 'Italie', participants: 487 },
        { option: 'Maroc', participants: 298 },
        { option: 'Canada', participants: 342 },
      ],
      totalCreaCoin: 16500
    },
    {
      id: 4,
      creator: 'Tech Jean',
      creatorImage: 'https://randomuser.me/api/portraits/men/68.jpg',
      category: 'Tech',
      question: 'Quel est le meilleur smartphone à moins de 400€?',
      timeLeft: '8h',
      betOptions: [
        { option: 'Samsung Galaxy A54', participants: 418 },
        { option: 'Xiaomi Redmi Note 12 Pro', participants: 376 },
        { option: 'Nothing Phone (1)', participants: 529 },
        { option: 'Google Pixel 6a', participants: 367 },
      ],
      totalCreaCoin: 12430
    },
    {
      id: 5,
      creator: 'Cuisine Moderne',
      creatorImage: 'https://randomuser.me/api/portraits/women/33.jpg',
      category: 'Cuisine',
      question: 'Quelle recette voulez-vous voir dans ma prochaine vidéo?',
      timeLeft: '3j',
      betOptions: [
        { option: 'Lasagnes végétariennes', participants: 278 },
        { option: 'Ramen maison', participants: 412 },
        { option: 'Gâteau au chocolat sans sucre', participants: 356 },
        { option: 'Burger gourmet', participants: 298 },
      ],
      totalCreaCoin: 9870
    },
    {
      id: 6,
      creator: 'FitCoach',
      creatorImage: 'https://randomuser.me/api/portraits/men/22.jpg',
      category: 'Fitness',
      question: 'Quel type d\'entraînement préférez-vous?',
      timeLeft: '12h',
      betOptions: [
        { option: 'HIIT', participants: 387 },
        { option: 'Musculation', participants: 423 },
        { option: 'Yoga', participants: 215 },
        { option: 'Calisthenics', participants: 293 },
      ],
      totalCreaCoin: 10250
    },
  ];

  // Catégories pour filtrer
  const categories = [
    'Tous', 'Micro-trottoir', 'Gaming', 'Lifestyle', 'Tech', 'Cuisine', 'Fitness', 'Musique', 'Mode'
  ];

  return (
    <div className="container-custom py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Défis Actifs</h1>
        
        <div className="flex space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Rechercher un défi..." 
              className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          
          <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
            <option>Trier par: Récents</option>
            <option>Trier par: CreaCoin</option>
            <option>Trier par: Participation</option>
            <option>Trier par: Temps restant</option>
          </select>
        </div>
      </div>
      
      {/* Filtres par catégorie */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === 'Tous' 
                ? 'bg-secondary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Statut portefeuille */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
            C
          </div>
          <div>
            <p className="font-bold">750 CreaCoin disponibles</p>
            <p className="text-sm text-gray-500">Utilisez vos CreaCoin pour participer aux défis</p>
          </div>
        </div>
        <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          Recharger
        </button>
      </div>
      
      {/* Grille de défis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeDefis.map((defi) => (
          <div key={defi.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={defi.creatorImage} alt={defi.creator} className="w-10 h-10 rounded-full object-cover" />
                  <div className="ml-3">
                    <p className="font-medium">{defi.creator}</p>
                    <p className="text-xs text-gray-500">{defi.category}</p>
                  </div>
                </div>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                  Termine dans {defi.timeLeft}
                </span>
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
                <Link href={`/community/defis/${defi.id}`} className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  Participer
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <nav className="flex space-x-2">
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">Précédent</button>
          <button className="px-4 py-2 rounded-md bg-secondary text-white">1</button>
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">2</button>
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">3</button>
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">Suivant</button>
        </nav>
      </div>
    </div>
  );
}
