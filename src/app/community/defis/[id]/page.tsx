import React from 'react';
import Link from 'next/link';

type Props = {
  params: {
    id: string
  }
}

export default function DefiDetailPage({ params }: Props) {
  // Simuler la récupération des données du défi basé sur l'ID
  const defi = {
    id: parseInt(params.id),
    creator: 'Alex Micro',
    creatorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    category: 'Micro-trottoir',
    question: 'Combien de gifles accepterais-tu pour gagner 100€?',
    description: 'Je vais réaliser un micro-trottoir sur ce sujet dans le centre de Paris. Votez pour donner votre avis et je poserai la question aux passants !',
    timeLeft: '2h 15m',
    date: '31 mars 2025',
    location: 'Paris, France',
    betOptions: [
      { id: 1, option: '0-3 gifles', participants: 245, creaCoin: 2450 },
      { id: 2, option: '4-7 gifles', participants: 418, creaCoin: 4180 },
      { id: 3, option: '8+ gifles', participants: 173, creaCoin: 1730 },
    ],
    totalCreaCoin: 8360,
    totalParticipants: 836,
    comments: [
      { id: 1, user: 'MarieD', userImage: 'https://randomuser.me/api/portraits/women/23.jpg', text: 'Je serais curieuse de voir les réponses des gens en vrai !', time: 'il y a 1 heure', likes: 12 },
      { id: 2, user: 'ThomasL', userImage: 'https://randomuser.me/api/portraits/men/53.jpg', text: 'Pour 100€, je dirais maximum 3 gifles, mais c\'est déjà beaucoup !', time: 'il y a 45 minutes', likes: 8 },
      { id: 3, user: 'SophieV', userImage: 'https://randomuser.me/api/portraits/women/42.jpg', text: 'J\'ai voté pour 4-7 gifles. Avec une bonne technique, ça peut valoir le coup !', time: 'il y a 20 minutes', likes: 15 },
    ]
  };

  return (
    <div className="container-custom py-8">
      <div className="mb-6">
        <Link href="/community/defis" className="text-secondary hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Retour aux défis
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne principale - Détails du défi */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              {/* En-tête du défi */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <img src={defi.creatorImage} alt={defi.creator} className="w-12 h-12 rounded-full object-cover" />
                  <div className="ml-3">
                    <Link href={`/community/creator/${defi.creator}`} className="font-bold text-lg hover:text-secondary">
                      {defi.creator}
                    </Link>
                    <p className="text-sm text-gray-500">{defi.category}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-1">
                    Termine dans {defi.timeLeft}
                  </span>
                  <span className="text-sm text-gray-500">
                    Lancé le {defi.date}
                  </span>
                </div>
              </div>
              
              {/* Question et description */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-4">{defi.question}</h1>
                <p className="text-gray-600">{defi.description}</p>
                
                {defi.location && (
                  <div className="mt-4 flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{defi.location}</span>
                  </div>
                )}
              </div>
              
              {/* Options de paris */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Placez votre pari</h2>
                
                <div className="space-y-4">
                  {defi.betOptions.map((option) => (
                    <div key={option.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="flex">
                        <div 
                          className="bg-secondary text-white font-bold text-center py-4 px-2"
                          style={{ width: `${(option.participants / defi.totalParticipants) * 100}%` }}
                        >
                          {Math.round((option.participants / defi.totalParticipants) * 100)}%
                        </div>
                        <div 
                          className="bg-gray-100 py-4 px-2 text-center flex-grow"
                        >
                          &nbsp;
                        </div>
                      </div>
                      
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{option.option}</h3>
                          <p className="text-sm text-gray-500">{option.participants} paris • {option.creaCoin} CreaCoin</p>
                        </div>
                        <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                          Parier
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Formulaire de pari */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Personnalisez votre pari</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2 font-medium">Choisissez une option</label>
                    <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
                      {defi.betOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.option}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Montant (CreaCoin)</label>
                    <input 
                      type="number" 
                      min="10" 
                      defaultValue="50" 
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Vous avez <span className="font-bold">750</span> CreaCoin disponibles</p>
                    <p className="text-xs text-gray-500">Mise minimum: 10 CreaCoin</p>
                  </div>
                  <button className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                    Confirmer le pari
                  </button>
                </div>
              </div>
              
              {/* Commentaires */}
              <div>
                <h2 className="text-xl font-bold mb-4">Discussion ({defi.comments.length})</h2>
                
                <div className="mb-6">
                  <div className="flex items-start space-x-4">
                    <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Votre avatar" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-grow">
                      <textarea 
                        placeholder="Partagez votre avis..." 
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
                  {defi.comments.map((comment) => (
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
          {/* Carte du créateur */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <img src={defi.creatorImage} alt={defi.creator} className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-4">
                <h3 className="font-bold text-lg">{defi.creator}</h3>
                <p className="text-sm text-gray-500">{defi.category}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">Créateur de micro-trottoirs originaux et questions provocantes depuis 2023. Plus de 500K abonnés sur TikTok et YouTube.</p>
            <button className="w-full bg-secondary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors mb-3">
              S'abonner
            </button>
            <Link href={`/community/creator/${defi.creator}`} className="w-full block text-center text-secondary border border-secondary py-2 rounded-md hover:bg-secondary/5 transition-colors">
              Voir le profil
            </Link>
          </div>
          
          {/* Autres défis du créateur */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">Autres défis de {defi.creator}</h3>
            <div className="space-y-4">
              {[
                {
                  id: 2,
                  question: 'Accepteriez-vous de ne pas utiliser votre téléphone pendant une semaine pour 500€?',
                  timeLeft: '1j 8h',
                  participants: 1248
                },
                {
                  id: 3,
                  question: 'Quelle est la chose la plus folle que vous feriez pour 1000€?',
                  timeLeft: '3j',
                  participants: 2157
                },
              ].map((otherDefi) => (
                <Link href={`/community/defis/${otherDefi.id}`} key={otherDefi.id}
                      className="block border-l-4 border-secondary pl-3 py-2 hover:bg-gray-50 transition-colors">
                  <h4 className="font-medium">{otherDefi.question}</h4>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>Termine dans {otherDefi.timeLeft}</span>
                    <span>{otherDefi.participants} participants</span>
                  </div>
                </Link>
              ))}
              <div className="text-center mt-2">
                <Link href={`/community/creator/${defi.creator}/defis`} className="text-secondary hover:underline text-sm">
                  Voir tous les défis
                </Link>
              </div>
            </div>
          </div>
          
          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-4">Statistiques du défi</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Total des participants</p>
                <p className="text-2xl font-bold">{defi.totalParticipants}</p>
              </div>
              <div>
                <p className="text-gray-600">CreaCoin en jeu</p>
                <p className="text-2xl font-bold">{defi.totalCreaCoin}</p>
              </div>
              <div>
                <p className="text-gray-600">Temps restant</p>
                <p className="text-2xl font-bold">{defi.timeLeft}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
