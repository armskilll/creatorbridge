import React from 'react';

interface EngagementStatsProps {
  suggestion: {
    id: number;
    likes: number;
    commentCount: number;
    views: number;
    creaCoinBet: number;
    similarSuggestions?: {
      id: number;
      title: string;
      likes: number;
      status: string;
    }[];
  };
}

const EngagementStats: React.FC<EngagementStatsProps> = ({ suggestion }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Statistiques d'engagement</h2>
      
      {/* Métriques principales */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center bg-gray-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-secondary">{suggestion.likes}</div>
          <div className="text-sm text-gray-500">J'aime</div>
        </div>
        <div className="text-center bg-gray-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-secondary">{suggestion.commentCount}</div>
          <div className="text-sm text-gray-500">Commentaires</div>
        </div>
        <div className="text-center bg-gray-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-secondary">{suggestion.views}</div>
          <div className="text-sm text-gray-500">Vues</div>
        </div>
        <div className="text-center bg-gray-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-secondary">{suggestion.creaCoinBet}</div>
          <div className="text-sm text-gray-500">CreaCoin</div>
        </div>
      </div>
      
      {/* Jauge d'intérêt de la communauté */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-gray-700">Intérêt de la communauté</h3>
          <span className="text-sm text-gray-600">Élevé</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-green-500 to-secondary h-3 rounded-full" 
            style={{ width: '75%' }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Basé sur les interactions et la mise en CreaCoin par rapport aux autres suggestions
        </p>
      </div>
      
      {/* Tendances similaires */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-3">Tendances similaires</h3>
        <div className="flex h-14">
          <div className="h-full w-1/4 bg-blue-400 rounded-l-md flex items-center justify-center text-white text-xs font-medium p-1 text-center">
            Gaming
          </div>
          <div className="h-full w-2/4 bg-secondary flex items-center justify-center text-white text-xs font-medium p-1 text-center">
            Défis
          </div>
          <div className="h-full w-1/4 bg-purple-400 rounded-r-md flex items-center justify-center text-white text-xs font-medium p-1 text-center">
            Montage
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Les contenus de défis/challenges sont très demandés actuellement
        </p>
      </div>
      
      {/* Suggestions similaires */}
      {suggestion.similarSuggestions && suggestion.similarSuggestions.length > 0 && (
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Suggestions similaires</h3>
          <div className="space-y-3">
            {suggestion.similarSuggestions.map((similar) => (
              <div key={similar.id} className="p-3 bg-gray-50 rounded-md">
                <a href={`/creator/suggestions/gestion/${similar.id}`} className="text-sm font-medium hover:text-secondary">
                  {similar.title}
                </a>
                <div className="flex justify-between items-center mt-1 text-xs text-gray-500">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    {similar.likes}
                  </div>
                  {similar.status === 'pending' && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">En attente</span>
                  )}
                  {similar.status === 'accepted' && (
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">Acceptée</span>
                  )}
                  {similar.status === 'rejected' && (
                    <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">Refusée</span>
                  )}
                  {similar.status === 'published' && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">Publiée</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Aperçu des récompenses */}
      <div className="bg-gray-50 p-4 rounded-lg mt-6">
        <h3 className="font-medium text-gray-700 mb-2">Aperçu des récompenses</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Mise de l'utilisateur:</p>
            <p className="text-sm mt-1">Récompense proposée:</p>
            <p className="font-medium mt-2">Total pour l'utilisateur:</p>
          </div>
          <div className="text-right">
            <p className="text-sm">{suggestion.creaCoinBet} CreaCoin</p>
            <p className="text-sm mt-1">{suggestion.creaCoinBet} CreaCoin</p>
            <p className="font-medium text-secondary mt-2">{suggestion.creaCoinBet * 2} CreaCoin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementStats;
