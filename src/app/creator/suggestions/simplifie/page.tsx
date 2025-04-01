import React from 'react';
import Link from 'next/link';

export default function SuggestionsSimplifiePage() {
  // Données fictives des suggestions reçues (triées par popularité)
  const suggestions = [
    {
      id: 1,
      type: 'Question de micro-trottoir',
      title: 'Demander aux gens leur pire anecdote de rendez-vous amoureux',
      description: 'Je pense que ça pourrait donner des réponses hilarantes et très variées.',
      location: 'Paris, Quartier Latin',
      creaCoinBet: 250,
      submittedAt: '29 mars 2025',
      submittedBy: 'MarieD',
      userImage: 'https://randomuser.me/api/portraits/women/23.jpg',
      likes: 48,
      dislikes: 3,
      comments: 12,
      status: 'pending' // pending, approved, rejected, upcoming, done
    },
    {
      id: 2,
      type: 'Lieu à visiter',
      title: 'Café caché dans le 11ème arrondissement',
      description: 'Le Café Oberkampf est un endroit vraiment unique avec une ambiance incroyable.',
      location: 'Paris, 11ème arrondissement',
      creaCoinBet: 350,
      submittedAt: '28 mars 2025',
      submittedBy: 'ThomasL',
      userImage: 'https://randomuser.me/api/portraits/men/45.jpg',
      likes: 37,
      dislikes: 5,
      comments: 8,
      status: 'pending'
    },
    {
      id: 3,
      type: 'Défi à relever',
      title: 'Une journée sans téléphone',
      description: 'Ce serait intéressant de voir comment tu te débrouilles dans Paris sans ton téléphone pour une journée entière.',
      location: 'Paris',
      creaCoinBet: 180,
      submittedAt: '27 mars 2025',
      submittedBy: 'JulienM',
      userImage: 'https://randomuser.me/api/portraits/men/28.jpg',
      likes: 22,
      dislikes: 6,
      comments: 5,
      status: 'approved'
    },
    {
      id: 4,
      type: 'Jeu à tester',
      title: 'Star Citizen dernière mise à jour',
      description: 'La nouvelle mise à jour apporte des mécaniques de gameplay révolutionnaires.',
      location: null,
      creaCoinBet: 270,
      submittedAt: '26 mars 2025',
      submittedBy: 'AlexG',
      userImage: 'https://randomuser.me/api/portraits/men/37.jpg',
      likes: 31,
      dislikes: 7,
      comments: 9,
      status: 'rejected'
    },
    {
      id: 6,
      type: 'Tendance à essayer',
      title: 'Maquillage "No Makeup" Makeup Look',
      description: 'Cette technique donne l\'impression de ne pas porter de maquillage tout en améliorant l\'apparence naturelle.',
      location: null,
      creaCoinBet: 300,
      submittedAt: '24 mars 2025',
      submittedBy: 'LauraB',
      userImage: 'https://randomuser.me/api/portraits/women/63.jpg',
      likes: 45,
      dislikes: 4,
      comments: 15,
      status: 'upcoming'
    },
  ];

  // Fonction pour afficher le statut avec la bonne couleur
  const getStatusDisplay = (status: string) => {
    switch(status) {
      case 'pending':
        return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">En attente</span>;
      case 'approved':
        return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Approuvée</span>;
      case 'rejected':
        return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Refusée</span>;
      case 'upcoming':
        return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">À venir</span>;
      case 'done':
        return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Réalisée</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Statut inconnu</span>;
    }
  };

  return (
    <div className="container-custom py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Suggestions de la communauté</h1>
          <p className="text-gray-600 mt-1">Décidez quelles idées vous souhaitez réaliser</p>
        </div>
        
        <div className="flex space-x-3">
          <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
            <option value="popular">Trier par : Plus populaires</option>
            <option value="recent">Trier par : Plus récentes</option>
            <option value="creacoin">Trier par : Plus de CreaCoin</option>
          </select>
        </div>
      </div>
      
      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="text-gray-500 text-sm mb-1">Suggestions en attente</div>
          <div className="text-2xl font-bold">2</div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="text-gray-500 text-sm mb-1">Suggestions approuvées</div>
          <div className="text-2xl font-bold text-green-600">1</div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="text-gray-500 text-sm mb-1">CreaCoin misés</div>
          <div className="text-2xl font-bold text-secondary">1,350</div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="text-gray-500 text-sm mb-1">Interaction communauté</div>
          <div className="text-2xl font-bold text-blue-600">Élevée</div>
        </div>
      </div>

      {/* Liste des suggestions */}
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-start">
                {/* Info utilisateur et contenu */}
                <div className="flex-grow">
                  <div className="flex items-center mb-3">
                    <img src={suggestion.userImage} alt={suggestion.submittedBy} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="font-medium">{suggestion.submittedBy}</div>
                      <div className="text-xs text-gray-500">{suggestion.submittedAt}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h2 className="text-xl font-bold mb-2">{suggestion.title}</h2>
                    <p className="text-gray-600">{suggestion.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                        {suggestion.type}
                      </span>
                      {suggestion.location && (
                        <span className="bg-gray-50 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {suggestion.location}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Engagement metrics */}
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      {suggestion.likes}
                    </div>
                    <div className="flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v5.43a2 2 0 01-1.106 1.79l-.05.025A4 4 0 0111.056 18H5.64a2 2 0 01-1.962-1.608l-1.2-6A2 2 0 014.44 8H8V4a2 2 0 012-2 1 1 0 011 1v.667a4 4 0 01.8 2.4l1.4 1.866a4 4 0 01.8 2.4z" />
                      </svg>
                      {suggestion.dislikes}
                    </div>
                    <div className="flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      {suggestion.comments}
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-secondary font-medium">{suggestion.creaCoinBet}</span>
                    </div>
                  </div>
                </div>
                
                {/* Statut et actions */}
                <div className="ml-4 flex flex-col items-end space-y-4">
                  {getStatusDisplay(suggestion.status)}
                  
                  {suggestion.status === 'pending' && (
                    <div className="flex space-x-2 mt-2">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                        Approuver
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                        Refuser
                      </button>
                    </div>
                  )}
                  
                  {suggestion.status === 'approved' && (
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                      Marquer comme "À venir"
                    </button>
                  )}
                  
                  {suggestion.status === 'upcoming' && (
                    <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
                      Marquer comme réalisée
                    </button>
                  )}
                  
                  <Link 
                    href={`/creator/suggestions/simplifie/${suggestion.id}`}
                    className="text-secondary hover:underline text-sm mt-2 flex items-center"
                  >
                    <span>Voir les commentaires</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Répondre à l'utilisateur (apparaît si on clique sur un bouton) */}
              {suggestion.status === 'pending' && (
                <div className="mt-4 pt-4 border-t border-gray-100 hidden">
                  <div className="flex space-x-3">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Vous" className="w-8 h-8 rounded-full" />
                    <div className="flex-grow">
                      <input
                        type="text"
                        placeholder="Ajouter un commentaire (facultatif)..."
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-1">
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
            Précédent
          </button>
          <button className="px-3 py-1 rounded-md bg-secondary text-white hover:bg-opacity-90">
            1
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
            2
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
            3
          </button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
            7
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
