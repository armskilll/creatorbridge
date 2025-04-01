import React from 'react';
import Link from 'next/link';

export default function ProposerIdeePage() {
  // Données fictives pour les créateurs populaires
  const popularCreators = [
    { id: 1, name: 'Alex Micro', category: 'Micro-trottoir', followers: '124K', image: 'https://randomuser.me/api/portraits/men/32.jpg', activeDefis: 3 },
    { id: 2, name: 'GameMaster', category: 'Gaming', followers: '287K', image: 'https://randomuser.me/api/portraits/men/44.jpg', activeDefis: 2 },
    { id: 3, name: 'Laura Mode', category: 'Lifestyle', followers: '105K', image: 'https://randomuser.me/api/portraits/women/62.jpg', activeDefis: 5 },
    { id: 4, name: 'Tech Jean', category: 'Tech', followers: '72K', image: 'https://randomuser.me/api/portraits/men/68.jpg', activeDefis: 1 },
    { id: 5, name: 'Cuisine Moderne', category: 'Cuisine', followers: '94K', image: 'https://randomuser.me/api/portraits/women/33.jpg', activeDefis: 2 },
  ];

  // Types d'idées par catégorie
  const ideaTypesByCategory = {
    'Micro-trottoir': [
      { id: 1, name: 'Question de micro-trottoir', description: 'Une question à poser aux passants dans la rue' },
      { id: 2, name: 'Défi pour les passants', description: 'Un défi ou une activité à proposer aux passants' },
      { id: 3, name: 'Lieu de tournage', description: 'Suggestion d\'un lieu intéressant pour un micro-trottoir' }
    ],
    'Gaming': [
      { id: 1, name: 'Jeu à tester', description: 'Suggestion d\'un jeu à tester en stream' },
      { id: 2, name: 'Challenge de gameplay', description: 'Un défi spécifique à réaliser dans un jeu' },
      { id: 3, name: 'Idée de série', description: 'Concept pour une série de vidéos sur un jeu' }
    ],
    'Lifestyle': [
      { id: 1, name: 'Tendance à explorer', description: 'Une nouvelle tendance à présenter en vidéo' },
      { id: 2, name: 'Idée de vlog', description: 'Suggestion pour un vlog sur une activité ou un lieu' },
      { id: 3, name: 'Challenge lifestyle', description: 'Un défi à relever dans la vie quotidienne' }
    ]
  };

  // Lieux populaires pour les suggestions
  const popularLocations = [
    { id: 1, name: 'Paris, Champs-Élysées', region: 'Île-de-France' },
    { id: 2, name: 'Paris, Montmartre', region: 'Île-de-France' },
    { id: 3, name: 'Lyon, Place Bellecour', region: 'Auvergne-Rhône-Alpes' },
    { id: 4, name: 'Marseille, Vieux Port', region: 'Provence-Alpes-Côte d\'Azur' },
    { id: 5, name: 'Bordeaux, Place de la Bourse', region: 'Nouvelle-Aquitaine' },
    { id: 6, name: 'Lille, Grand Place', region: 'Hauts-de-France' },
    { id: 7, name: 'Strasbourg, Petite France', region: 'Grand Est' },
    { id: 8, name: 'Nantes, Machines de l\'Île', region: 'Pays de la Loire' }
  ];

  // Succès de propositions précédentes
  const previousSuccesses = [
    {
      creator: 'Alex Micro',
      creatorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      user: 'EmilieR',
      idea: 'Préféreriez-vous être trop grand ou trop petit pour le reste de votre vie?',
      creaCoinReward: 440,
      videoUrl: '#'
    },
    {
      creator: 'Laura Mode',
      creatorImage: 'https://randomuser.me/api/portraits/women/62.jpg',
      user: 'ThomasL',
      idea: 'Une semaine à vivre avec seulement 50€ en cash (sans carte bancaire)',
      creaCoinReward: 620,
      videoUrl: '#'
    }
  ];

  return (
    <div className="container-custom py-8">
      <div className="flex items-center mb-8">
        <Link href="/community" className="text-secondary hover:underline flex items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Retour
        </Link>
        <h1 className="text-3xl font-bold">Proposer une idée</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulaire de proposition */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Votre proposition</h2>
            
            <div className="space-y-6">
              {/* Sélection du créateur */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Créateur</label>
                <div className="relative">
                  <select className="w-full appearance-none border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option value="">Sélectionner un créateur</option>
                    {popularCreators.map((creator) => (
                      <option key={creator.id} value={creator.id}>
                        {creator.name} ({creator.category})
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Choisissez le créateur à qui vous souhaitez proposer votre idée</p>
              </div>
              
              {/* Type d'idée */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Type d'idée</label>
                <div className="relative">
                  <select className="w-full appearance-none border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option value="">Sélectionner un type d'idée</option>
                    <optgroup label="Micro-trottoir">
                      {ideaTypesByCategory['Micro-trottoir'].map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Gaming">
                      {ideaTypesByCategory['Gaming'].map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Lifestyle">
                      {ideaTypesByCategory['Lifestyle'].map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </optgroup>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Le type d'idée doit correspondre au contenu habituel du créateur</p>
              </div>
              
              {/* Description de l'idée */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Ta proposition</label>
                <textarea 
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  rows={4}
                  placeholder="Décrivez votre idée en détail..."
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">Soyez précis et original. Les idées uniques ont plus de chances d'être sélectionnées.</p>
              </div>
              
              {/* Lieu suggéré */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Lieu suggéré (optionnel)</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Commencez à taper un lieu..."
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                    list="locationsList"
                  />
                  <datalist id="locationsList">
                    {popularLocations.map((location) => (
                      <option key={location.id} value={`${location.name} (${location.region})`} />
                    ))}
                  </datalist>
                </div>
                <p className="text-sm text-gray-500 mt-1">Précisez un lieu si votre idée nécessite un endroit spécifique</p>
              </div>
              
              {/* Mise en CreaCoin */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Mise en CreaCoin</label>
                <div className="flex items-center">
                  <input 
                    type="range" 
                    min="50" 
                    max="500" 
                    step="10" 
                    defaultValue="100"
                    className="w-full mr-4 accent-secondary"
                  />
                  <div className="flex items-center bg-secondary/10 text-secondary font-bold px-3 py-1 rounded-md min-w-[100px] justify-center">
                    <span>100</span>
                    <span className="ml-1 text-xs font-normal">CreaCoin</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>50 CreaCoin</span>
                  <span>500 CreaCoin</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Plus votre mise est élevée, plus vos chances d'être sélectionné augmentent. 
                  En cas d'acceptation, vous récupérez votre mise + une récompense !
                </p>
              </div>
              
              {/* Conditions */}
              <div className="border-t pt-6">
                <div className="flex items-start mb-4">
                  <input type="checkbox" className="mt-1 mr-2" id="terms" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    J'accepte que mon idée puisse être adaptée par le créateur et j'autorise son utilisation dans le cadre d'une vidéo ou d'un contenu.
                  </label>
                </div>
                
                <div className="bg-blue-50 text-blue-700 p-3 rounded-md text-sm mb-6">
                  <p>
                    <strong>Note:</strong> Vous avez actuellement <strong>750 CreaCoin</strong> disponibles. 
                    Cette mise sera débitée de votre portefeuille si vous confirmez.
                  </p>
                </div>
                
                <div className="flex justify-end">
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-3 hover:bg-gray-300 transition-colors">
                    Annuler
                  </button>
                  <button className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                    Soumettre l'idée
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Informations latérales */}
        <div>
          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Vos statistiques</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Idées proposées</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div>
                <p className="text-gray-600">Idées acceptées</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div>
                <p className="text-gray-600">CreaCoin gagnés</p>
                <p className="text-2xl font-bold">1 240</p>
              </div>
              <div>
                <p className="text-gray-600">Taux d'acceptation</p>
                <p className="text-2xl font-bold">25%</p>
              </div>
            </div>
          </div>
          
          {/* Conseils */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Conseils pour réussir</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Proposez des idées qui correspondent au style du créateur</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Soyez original et sortez des idées habituelles</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Pensez au potentiel de réactions et d'engagement</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Une mise plus élevée attire davantage l'attention du créateur</span>
              </li>
            </ul>
          </div>
          
          {/* Propositions réussies */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Idées récemment acceptées</h2>
            <div className="space-y-4">
              {previousSuccesses.map((success, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-3 py-2">
                  <div className="flex items-center mb-2">
                    <img src={success.creatorImage} alt={success.creator} className="w-6 h-6 rounded-full object-cover" />
                    <span className="ml-2 font-medium">{success.creator}</span>
                  </div>
                  <p className="text-sm mb-1">"{success.idea}"</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Proposé par {success.user}</span>
                    <span className="text-green-600">{success.creaCoinReward} CreaCoin</span>
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
