import React from 'react';
import Link from 'next/link';

type Props = {
  params: {
    id: string
  }
}

export default function PropositionDetailPage({ params }: Props) {
  // Simuler la récupération des données de la proposition basée sur l'ID
  const proposition = {
    id: parseInt(params.id),
    status: 'pending', // pending, accepted, rejected, published
    creator: 'Alex Micro',
    creatorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    creatorCategory: 'Micro-trottoir',
    type: 'Question de micro-trottoir',
    suggestion: 'Demander aux gens leur pire anecdote de rendez-vous amoureux',
    description: 'Je pense que ça pourrait donner des réponses hilarantes et très variées. Les gens ont souvent des histoires incroyables à raconter sur ce sujet.',
    location: 'Paris, Quartier Latin',
    creaCoinBet: 250,
    submittedAt: '29 mars 2025',
    submittedBy: 'MarieD',
    userImage: 'https://randomuser.me/api/portraits/women/23.jpg',
    likes: 48,
    comments: [
      {
        id: 1,
        user: 'JulienM',
        userImage: 'https://randomuser.me/api/portraits/men/28.jpg',
        text: 'Super idée ! Je suis sûr que ça va donner des réponses hilarantes.',
        time: 'il y a 1 jour',
        likes: 12
      },
      {
        id: 2,
        user: 'SophieV',
        userImage: 'https://randomuser.me/api/portraits/women/42.jpg',
        text: 'J\'ai hâte de voir ce que ça va donner ! J\'ai moi-même plusieurs histoires à raconter 😂',
        time: 'il y a 12 heures',
        likes: 8
      }
    ],
    history: [
      {
        date: '29 mars 2025',
        event: 'Proposition soumise',
        description: 'Proposition soumise avec une mise de 250 CreaCoin'
      },
      {
        date: '30 mars 2025',
        event: 'Vue par le créateur',
        description: 'Alex Micro a vu votre proposition'
      }
    ]
  };

  // Données simulées pour les suggestions similaires
  const similarPropositions = [
    {
      id: 101,
      creator: 'Alex Micro',
      creatorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      suggestion: 'Quel est votre plus grand regret dans la vie?',
      status: 'accepted',
      creaCoinBet: 200,
      submittedBy: 'ThomasL'
    },
    {
      id: 102,
      creator: 'Alex Micro',
      creatorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      suggestion: 'Quelle est la chose la plus folle que vous avez faite pour impressionner quelqu\'un?',
      status: 'pending',
      creaCoinBet: 180,
      submittedBy: 'LucasM'
    }
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
      <div className="mb-6">
        <Link href="/community/proposer" className="text-secondary hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Retour à mes propositions
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne principale */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              {/* En-tête de la proposition */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img 
                    src={proposition.creatorImage} 
                    alt={proposition.creator} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <Link href={`/community/creator/${proposition.creator}`} className="font-bold text-lg hover:text-secondary">
                      {proposition.creator}
                    </Link>
                    <p className="text-sm text-gray-500">{proposition.creatorCategory}</p>
                  </div>
                </div>
                
                <div>
                  {getStatusDisplay(proposition.status)}
                </div>
              </div>
              
              {/* Détails de la proposition */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    {proposition.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    Soumise le {proposition.submittedAt}
                  </span>
                </div>
                
                <h1 className="text-2xl font-bold mb-4">{proposition.suggestion}</h1>
                
                {proposition.description && (
                  <p className="text-gray-600 mb-4">{proposition.description}</p>
                )}
                
                {proposition.location && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Lieu suggéré: {proposition.location}</span>
                  </div>
                )}
              </div>
              
              {/* Mise et actions */}
              <div className="flex justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="block text-gray-600 text-sm">Mise:</span>
                  <span className="text-xl font-bold text-secondary">{proposition.creaCoinBet} CreaCoin</span>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex items-center text-gray-500 hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>J'aime ({proposition.likes})</span>
                  </button>
                  
                  <button className="flex items-center text-gray-500 hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>Partager</span>
                  </button>
                  
                  {proposition.status === 'pending' && (
                    <button className="bg-red-100 text-red-600 px-3 py-1 rounded-md hover:bg-red-200 transition-colors">
                      Annuler
                    </button>
                  )}
                </div>
              </div>
              
              {/* Timeline de la proposition */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Historique</h2>
                <div className="border-l-2 border-gray-200 ml-3">
                  {proposition.history.map((event, index) => (
                    <div key={index} className="relative mb-4 pl-6">
                      <div className="absolute -left-2 mt-1 w-4 h-4 rounded-full bg-secondary"></div>
                      <div>
                        <p className="font-medium">{event.event}</p>
                        <p className="text-sm text-gray-500">{event.date}</p>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                  
                  {proposition.status === 'pending' && (
                    <div className="relative mb-4 pl-6 opacity-50">
                      <div className="absolute -left-2 mt-1 w-4 h-4 rounded-full bg-gray-300"></div>
                      <div>
                        <p className="font-medium">En attente de décision</p>
                        <p className="text-sm text-gray-500">Prochaine étape</p>
                        <p className="text-sm text-gray-600 mt-1">Le créateur va examiner votre proposition</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Commentaires */}
              <div>
                <h2 className="text-xl font-bold mb-4">Discussion ({proposition.comments.length})</h2>
                
                <div className="mb-6">
                  <div className="flex items-start space-x-4">
                    <img src={proposition.userImage} alt="Votre avatar" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-grow">
                      <textarea 
                        placeholder="Ajoutez un commentaire..." 
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                        rows={3}
                      ></textarea>
                      <div className="flex justify-end mt-2">
                        <button className="bg-secondary text-white px-4 py-1 rounded-md hover:bg-opacity-90 transition-colors text-sm">
                          Commenter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {proposition.comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                      <img src={comment.userImage} alt={comment.user} className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex-grow">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{comment.user}</span>
                            <span className="text-xs text-gray-500">{comment.time}</span>
                          </div>
                          <p>{comment.text}</p>
                        </div>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <button className="flex items-center hover:text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            <span>{comment.likes}</span>
                          </button>
                          <button className="flex items-center ml-4 hover:text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>Répondre</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Colonne latérale */}
        <div>
          {/* Carte de l'auteur */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Proposé par</h2>
            <div className="flex items-center">
              <img 
                src={proposition.userImage} 
                alt={proposition.submittedBy} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-3">
                <p className="font-bold">{proposition.submittedBy}</p>
                <p className="text-sm text-gray-500">12 propositions • 3 acceptées</p>
              </div>
            </div>
          </div>
          
          {/* Calcul de récompense */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Récompense potentielle</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Mise initiale:</span>
                <span className="font-medium">{proposition.creaCoinBet} CreaCoin</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bonus (si acceptée):</span>
                <span className="font-medium">{proposition.creaCoinBet} CreaCoin</span>
              </div>
              <div className="border-t pt-2 flex justify-between">
                <span className="text-gray-800 font-bold">Total potentiel:</span>
                <span className="text-secondary font-bold">{proposition.creaCoinBet * 2} CreaCoin</span>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              <p>Si votre proposition est acceptée, vous récupérez votre mise initiale plus une récompense égale à la mise.</p>
            </div>
          </div>
          
          {/* Propositions similaires */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Propositions similaires</h2>
            <div className="space-y-4">
              {similarPropositions.map((item) => (
                <Link key={item.id} href={`/community/proposer/${item.id}`}
                      className="block hover:bg-gray-50 p-3 rounded-md transition-colors">
                  <div className="flex items-center mb-2">
                    <img 
                      src={item.creatorImage} 
                      alt={item.creator} 
                      className="w-8 h-8 rounded-full object-cover mr-2"
                    />
                    <span className="font-medium">{item.creator}</span>
                    <div className="ml-auto">
                      {getStatusDisplay(item.status)}
                    </div>
                  </div>
                  <p className="text-sm mb-2">{item.suggestion}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Par {item.submittedBy}</span>
                    <span>{item.creaCoinBet} CreaCoin</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
