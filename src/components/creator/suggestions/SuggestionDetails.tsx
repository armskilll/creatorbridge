import React from 'react';

interface SuggestionDetailsProps {
  suggestion: {
    type: string;
    category: string;
    description: string;
    location?: string;
    creaCoinBet: number;
    submittedAt: string;
    tags?: string[];
  };
}

const SuggestionDetails: React.FC<SuggestionDetailsProps> = ({ suggestion }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Détails de la suggestion</h2>
      
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {suggestion.type}
          </span>
          <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
            {suggestion.category}
          </span>
          {suggestion.tags && suggestion.tags.map((tag, index) => (
            <span key={index} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Description</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-800 whitespace-pre-line">{suggestion.description}</p>
          </div>
        </div>
        
        {suggestion.location && (
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Lieu suggéré</h3>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-800">{suggestion.location}</span>
            </div>
            <div className="mt-2 bg-gray-100 h-32 rounded-lg flex items-center justify-center text-gray-500">
              <span>Carte du lieu (à implémenter)</span>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Mise en CreaCoin</h3>
            <div className="flex items-center">
              <div className="h-8 w-8 bg-secondary/20 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold text-secondary">
                {suggestion.creaCoinBet}
                <span className="text-sm font-normal text-gray-500 ml-1">CreaCoin</span>
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Date de soumission</h3>
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-50 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-800">{suggestion.submittedAt}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t">
        <h3 className="text-gray-700 font-medium mb-2">Impacts potentiels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <h4 className="font-medium">Engagement</h4>
            </div>
            <p className="text-green-800 text-sm">Potentiel d'engagement élevé basé sur des idées similaires</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <h4 className="font-medium">Audience</h4>
            </div>
            <p className="text-blue-800 text-sm">Pourrait attirer un nouveau segment d'audience</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <h4 className="font-medium">Originalité</h4>
            </div>
            <p className="text-purple-800 text-sm">Idée relativement originale comparée aux suggestions précédentes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionDetails;
