import React from 'react';
import Link from 'next/link';

export default function SuggestionsPage() {
  // Données fictives pour les suggestions d'idées des fans
  const suggestions = [
    {
      id: 1,
      user: 'MarieD',
      userImage: 'https://randomuser.me/api/portraits/women/23.jpg',
      type: 'Question de micro-trottoir',
      suggestion: 'Demander aux gens leur pire anecdote de rendez-vous amoureux',
      location: 'Paris, Quartier Latin',
      creaCoinBet: 250,
      likes: 48,
      submittedAt: 'il y a 2 jours',
      status: 'pending'
    },
    {
      id: 2,
      user: 'ThomasL',
      userImage: 'https://randomuser.me/api/portraits/men/53.jpg',
      type: 'Question de micro-trottoir',
      suggestion: 'Combien payeriez-vous pour ne plus jamais avoir à faire le ménage?',
      location: 'Lyon, Place Bellecour',
      creaCoinBet: 180,
      likes: 36,
      submittedAt: 'il y a 3 jours',
      status: 'pending'
    },
    {
      id: 3,
      user: 'SophieV',
      userImage: 'https://randomuser.me/api/portraits/women/42.jpg',
      type: 'Idée de contenu',
      suggestion: 'Une série où tu interroges des couples sur leurs habitudes secrètes',
      location: 'Marseille, Vieux Port',
      creaCoinBet: 350,
      likes: 72,
      submittedAt: 'il y a 1 jour',
      status: 'pending'
    },
    {
      id: 4,
      user: 'LucasM',
      userImage: 'https://randomuser.me/api/portraits/men/34.jpg',
      type: 'Question de micro-trottoir',
      suggestion: 'Quelle est la chose la plus folle que vous avez faite pour impressionner quelqu\'un?',
      location: 'Paris, Champs-Élysées',
      creaCoinBet: 200,
      likes: 42,
      submittedAt: 'il y a 4 jours',
      status: 'pending'
    },
    {
      id: 5,
      user: 'JulieP',
      userImage: 'https://randomuser.me/api/portraits/women/56.jpg',
      type: 'Challenge',
      suggestion: 'Faire un micro-trottoir en parlant uniquement en rimes',
      location: 'Bordeaux, Place de la Bourse',
      creaCoinBet: 280,
      likes: 63,
      submittedAt: 'il y a 2 jours',
      status: 'pending'
    }
  ];

  // Suggestions acceptées
  const acceptedSuggestions = [
    {
      id: 101,
      user: 'EmilieR',
      userImage: 'https://randomuser.me/api/portraits/women/33.jpg',
      type: 'Question de micro-trottoir',
      suggestion: 'Préféreriez-vous être trop grand ou trop petit pour le reste de votre vie?',
      location: 'Nantes, Centre-ville',
      creaCoinBet: 220,
      likes: 53,
      submittedAt: 'il y a 1 semaine',
      status: 'accepted',
      acceptedAt: 'il y a 3 jours',
      videoPublished: true,
      videoUrl: 'https://example.com/video/101',
      reward: 440 // Mise doublée
    },
    {
      id: 102,
      user: 'MaximeD',
      userImage: 'https://randomuser.me/api/portraits/men/62.jpg',
      type: 'Question de micro-trottoir',
      suggestion: 'Pour 1000€, seriez-vous prêt à laisser un inconnu accéder à tout votre téléphone pendant 1 heure?',
      location: 'Paris, Montmartre',
      creaCoinBet: 310,
      likes: 78,
      submittedAt: 'il y a 10 jours',
      status: 'accepted',
      acceptedAt: 'il y a 5 jours',
      videoPublished: false,
      plannedDate: '5 avril 2025',
      reward: 620 // Mise doublée
    }
  ];

  return (
    <div className="container-custom py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Suggestions de la communauté</h1>
        
        <div className="flex space-x-3">
          <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
            <option>Tous les types</option>
            <option>Questions micro-trottoir</option>
            <option>Idées de contenu</option>
            <option>Challenges</option>
            <option>Lieux de tournage</option>
          </select>
          
          <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
            <option>Trier par: CreaCoin</option>
            <option>Trier par: Popularité</option>
            <option>Trier par: Récents</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Statistiques latérales */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Aperçu</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 text-sm">Suggestions en attente</p>
                  <p className="text-xl font-bold">{suggestions.length}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">CreaCoin total misé</p>
                  <p className="text-xl font-bold">{suggestions.reduce((acc, curr) => acc + curr.creaCoinBet, 0)}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Suggestions acceptées</p>
                  <p className="text-xl font-bold">{acceptedSuggestions.length}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Tendances</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-gray-600 text-sm">Types populaires</p>
                  <p className="font-medium">Questions micro-trottoir (73%)</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '73%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Lieux les plus suggérés</p>
                  <p className="font-medium">Paris (42%)</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Top contributeurs</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="EmilieR" className="w-8 h-8 rounded-full object-cover" />
                  <div className="ml-2">
                    <p className="font-medium">EmilieR</p>
                    <p className="text-xs text-gray-500">5 suggestions acceptées</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="MaximeD" className="w-8 h-8 rounded-full object-cover" />
                  <div className="ml-2">
                    <p className="font-medium">MaximeD</p>
                    <p className="text-xs text-gray-500">3 suggestions acceptées</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="SophieV" className="w-8 h-8 rounded-full object-cover" />
                  <div className="ml-2">
                    <p className="font-medium">SophieV</p>
                    <p className="text-xs text-gray-500">2 suggestions acceptées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Liste des suggestions */}
        <div className="lg:col-span-4">
          <div className="mb-6">
            <ul className="flex border-b">
              <li className="mr-1">
                <a href="#" className="bg-white inline-block py-2 px-4 text-secondary font-medium border-l border-t border-r rounded-t-lg">
                  En attente ({suggestions.length})
                </a>
              </li>
              <li className="mr-1">
                <a href="#" className="bg-gray-100 inline-block py-2 px-4 text-gray-600 hover:text-gray-800 font-medium rounded-t-lg">
                  Acceptées ({acceptedSuggestions.length})
                </a>
              </li>
              <li className="mr-1">
                <a href="#" className="bg-gray-100 inline-block py-2 px-4 text-gray-600 hover:text-gray-800 font-medium rounded-t-lg">
                  Refusées (12)
                </a>
              </li>
              <li className="mr-1">
                <a href="#" className="bg-gray-100 inline-block py-2 px-4 text-gray-600 hover:text-gray-800 font-medium rounded-t-lg">
                  Publiées (8)
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            {suggestions.map((suggestion) => (
              <div key={suggestion.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start">
                    <img src={suggestion.userImage} alt={suggestion.user} className="w-12 h-12 rounded-full object-cover" />
                    
                    <div className="ml-4 flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <span className="font-bold">{suggestion.user}</span>
                          <span className="text-gray-500 ml-2 text-sm">{suggestion.submittedAt}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium mr-2">
                            {suggestion.creaCoinBet} CreaCoin
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            {suggestion.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <h3 className="text-xl font-bold mb-2">{suggestion.suggestion}</h3>
                        
                        {suggestion.location && (
                          <div className="flex items-center text-gray-600 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Lieu suggéré: {suggestion.location}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-500">
                          <button className="flex items-center hover:text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            <span>{suggestion.likes}</span>
                          </button>
                        </div>
                        
                        <div className="flex space-x-3">
                          <button className="bg-red-100 text-red-600 px-3 py-1 rounded-md hover:bg-red-200 transition-colors">
                            Refuser
                          </button>
                          <button className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-md hover:bg-yellow-200 transition-colors">
                            Modifier
                          </button>
                          <button className="bg-secondary text-white px-3 py-1 rounded-md hover:bg-opacity-90 transition-colors">
                            Accepter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Suggestions acceptées */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Suggestions récemment acceptées</h2>
            
            <div className="space-y-6">
              {acceptedSuggestions.map((suggestion) => (
                <div key={suggestion.id} className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-green-500">
                  <div className="p-6">
                    <div className="flex items-start">
                      <img src={suggestion.userImage} alt={suggestion.user} className="w-12 h-12 rounded-full object-cover" />
                      
                      <div className="ml-4 flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <span className="font-bold">{suggestion.user}</span>
                            <span className="text-gray-500 ml-2 text-sm">Suggéré {suggestion.submittedAt}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                              ACCEPTÉ {suggestion.acceptedAt}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <h3 className="text-xl font-bold mb-2">{suggestion.suggestion}</h3>
                          
                          {suggestion.location && (
                            <div className="flex items-center text-gray-600 text-sm mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              <span>Lieu: {suggestion.location}</span>
                            </div>
                          )}
                          
                          <div className="flex items-center text-gray-600 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span>
                              {suggestion.videoPublished
                                ? 'Vidéo publiée'
                                : `Planifié pour le ${suggestion.plannedDate}`
                              }
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Récompense: {suggestion.reward} CreaCoin</span>
                          </div>
                          
                          <div className="flex space-x-3">
                            {suggestion.videoPublished ? (
                              <a href={suggestion.videoUrl} target="_blank" rel="noopener noreferrer" 
                                 className="bg-secondary text-white px-3 py-1 rounded-md hover:bg-opacity-90 transition-colors">
                                Voir la vidéo
                              </a>
                            ) : (
                              <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-200 transition-colors">
                                Marquer comme publié
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
