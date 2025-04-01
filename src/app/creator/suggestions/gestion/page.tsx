import React from 'react';
import Link from 'next/link';

export default function SuggestionsGestionPage() {
  // Données fictives des suggestions reçues
  const suggestions = [
    {
      id: 1,
      type: 'Question de micro-trottoir',
      title: 'Demander aux gens leur pire anecdote de rendez-vous amoureux',
      description: 'Je pense que ça pourrait donner des réponses hilarantes et très variées. Les gens ont souvent des histoires incroyables à raconter sur ce sujet.',
      location: 'Paris, Quartier Latin',
      creaCoinBet: 250,
      submittedAt: '29 mars 2025',
      submittedBy: 'MarieD',
      userImage: 'https://randomuser.me/api/portraits/women/23.jpg',
      likes: 48,
      status: 'pending', // pending, accepted, rejected, published
      category: 'micro-trottoir'
    },
    {
      id: 2,
      type: 'Lieu à visiter',
      title: 'Café caché dans le 11ème arrondissement',
      description: 'Le Café Oberkampf est un endroit vraiment unique avec une ambiance incroyable et des plats délicieux. Parfait pour un vlog lifestyle!',
      location: 'Paris, 11ème arrondissement',
      creaCoinBet: 350,
      submittedAt: '28 mars 2025',
      submittedBy: 'ThomasL',
      userImage: 'https://randomuser.me/api/portraits/men/45.jpg',
      likes: 37,
      status: 'pending',
      category: 'vlog'
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
      status: 'accepted',
      category: 'vlog'
    },
    {
      id: 4,
      type: 'Jeu à tester',
      title: 'Star Citizen dernière mise à jour',
      description: 'La nouvelle mise à jour apporte des mécaniques de gameplay révolutionnaires et un nouveau système planétaire à explorer.',
      location: null,
      creaCoinBet: 270,
      submittedAt: '26 mars 2025',
      submittedBy: 'AlexG',
      userImage: 'https://randomuser.me/api/portraits/men/37.jpg',
      likes: 31,
      status: 'pending',
      category: 'gaming'
    },
    {
      id: 5,
      type: 'Cuisine du monde',
      title: 'Tester la cuisine éthiopienne',
      description: 'L\'Ethiopie a une cuisine unique avec des saveurs très différentes. Il y a un bon restaurant authentique à Paris dans le 5ème.',
      location: 'Paris, 5ème arrondissement',
      creaCoinBet: 220,
      submittedAt: '25 mars 2025',
      submittedBy: 'SophieV',
      userImage: 'https://randomuser.me/api/portraits/women/42.jpg',
      likes: 19,
      status: 'rejected',
      category: 'cuisine'
    },
    {
      id: 6,
      type: 'Tendance à essayer',
      title: 'Maquillage "No Makeup" Makeup Look',
      description: 'Cette technique donne l\'impression de ne pas porter de maquillage tout en améliorant l\'apparence naturelle. Très populaire actuellement!',
      location: null,
      creaCoinBet: 300,
      submittedAt: '24 mars 2025',
      submittedBy: 'LauraB',
      userImage: 'https://randomuser.me/api/portraits/women/63.jpg',
      likes: 45,
      status: 'published',
      category: 'beauté'
    },
  ];

  // Catégories disponibles
  const categories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'micro-trottoir', name: 'Micro-trottoir' },
    { id: 'vlog', name: 'Vlog' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'cuisine', name: 'Cuisine' },
    { id: 'beauté', name: 'Beauté' }
  ];

  // Statuts disponibles
  const statuses = [
    { id: 'all', name: 'Tous les statuts' },
    { id: 'pending', name: 'En attente' },
    { id: 'accepted', name: 'Acceptée' },
    { id: 'rejected', name: 'Refusée' },
    { id: 'published', name: 'Publiée' }
  ];

  // Fonction pour afficher le statut avec la bonne couleur
  const getStatusDisplay = (status: string) => {
    switch(status) {
      case 'pending':
        return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">En attente</span>;
      case 'accepted':
        return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Acceptée</span>;
      case 'rejected':
        return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Refusée</span>;
      case 'published':
        return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Publiée</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Statut inconnu</span>;
    }
  };

  return (
    <div className="container-custom py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Gestion des suggestions</h1>
          <p className="text-gray-600 mt-1">Gérez les idées proposées par votre communauté</p>
        </div>
        <div className="flex space-x-3">
          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-md font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            8,950 CreaCoin en jeu
          </span>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Filtrer par catégorie</label>
            <div className="relative">
              <select className="w-full appearance-none border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Filtrer par statut</label>
            <div className="relative">
              <select className="w-full appearance-none border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
                {statuses.map((status) => (
                  <option key={status.id} value={status.id}>{status.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Rechercher</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une suggestion..."
                className="w-full border rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center mt-4 text-sm">
          <span className="mr-2 text-gray-600">Trier par:</span>
          <button className="mr-4 text-secondary font-medium">Plus récent</button>
          <button className="mr-4 text-gray-600 hover:text-secondary">Plus de CreaCoin</button>
          <button className="mr-4 text-gray-600 hover:text-secondary">Plus populaire</button>
          <button className="mr-4 text-gray-600 hover:text-secondary">Tendance</button>
        </div>
      </div>
      
      {/* Liste des suggestions */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Suggestion
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Utilisateur
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CreaCoin
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Popularité
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {suggestions.map((suggestion) => (
                <tr key={suggestion.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <Link 
                        href={`/creator/suggestions/gestion/${suggestion.id}`}
                        className="text-gray-900 font-medium hover:text-secondary"
                      >
                        {suggestion.title}
                      </Link>
                    </div>
                    {suggestion.location && (
                      <div className="text-xs text-gray-500 mt-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {suggestion.location}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-blue-50 text-blue-700 px-2 py-1 text-xs rounded-full">
                      {suggestion.type}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">
                      {suggestion.category.charAt(0).toUpperCase() + suggestion.category.slice(1)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img 
                        src={suggestion.userImage} 
                        alt={suggestion.submittedBy} 
                        className="h-8 w-8 rounded-full object-cover mr-2"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{suggestion.submittedBy}</div>
                        <div className="text-xs text-gray-500">{suggestion.submittedAt}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-secondary">
                      {suggestion.creaCoinBet}
                      <span className="text-xs font-normal text-gray-500"> CreaCoin</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span className="text-sm">{suggestion.likes}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusDisplay(suggestion.status)}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="space-x-2">
                      <Link 
                        href={`/creator/suggestions/gestion/${suggestion.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Voir
                      </Link>
                      
                      {suggestion.status === 'pending' && (
                        <>
                          <button className="text-green-600 hover:text-green-900">
                            Accepter
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Refuser
                          </button>
                        </>
                      )}
                      
                      {suggestion.status === 'accepted' && (
                        <button className="text-blue-600 hover:text-blue-900">
                          Publier
                        </button>
                      )}
                      
                      {suggestion.status === 'published' && (
                        <span className="text-gray-500 text-xs">
                          Publiée le 25/03/25
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          Affichage de 1 à 6 sur 42 résultats
        </div>
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
      
      {/* Statistiques */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-xl font-bold mb-4">Performances des suggestions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">Suggestions reçues</h3>
            <p className="text-2xl font-bold">42</p>
            <p className="text-xs text-green-600 mt-1">+12% cette semaine</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">Taux d'acceptation</h3>
            <p className="text-2xl font-bold">35%</p>
            <p className="text-xs text-gray-500 mt-1">15 acceptées sur 42</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">CreaCoin en jeu</h3>
            <p className="text-2xl font-bold">8,950</p>
            <p className="text-xs text-green-600 mt-1">+2,450 cette semaine</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">Utilisateurs actifs</h3>
            <p className="text-2xl font-bold">28</p>
            <p className="text-xs text-green-600 mt-1">+5 nouveaux cette semaine</p>
          </div>
        </div>
      </div>
    </div>
  );
}
