import React from 'react';
import Link from 'next/link';

interface SuggestionHeaderProps {
  suggestion: {
    id: number;
    title: string;
    status: string;
    submittedAt: string;
  };
}

const SuggestionHeader: React.FC<SuggestionHeaderProps> = ({ suggestion }) => {
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
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Link href="/creator/suggestions/gestion" className="text-secondary hover:underline flex items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Retour à la liste
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">{suggestion.title}</h1>
          <div className="flex items-center text-sm text-gray-500">
            <span>Suggestion #{suggestion.id}</span>
            <span className="mx-2">•</span>
            <span>Soumise le {suggestion.submittedAt}</span>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          {getStatusDisplay(suggestion.status)}
          
          <div className="dropdown relative">
            <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {suggestion.status === 'pending' && (
        <div className="flex mt-6 space-x-3">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
            Accepter la suggestion
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors">
            Refuser la suggestion
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
            Modifier et accepter
          </button>
        </div>
      )}
      
      {suggestion.status === 'accepted' && (
        <div className="flex mt-6 space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
            Publier maintenant
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors">
            Programmer la publication
          </button>
        </div>
      )}
    </div>
  );
};

export default SuggestionHeader;
