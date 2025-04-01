import React from 'react';
import Link from 'next/link';

interface UserInfoProps {
  user: {
    id: number;
    name: string;
    image: string;
    joinedAt: string;
    suggestionsCount: number;
    acceptedCount: number;
    publishedCount: number;
    creaCoinEarned: number;
  };
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">À propos de l'auteur</h2>
      
      <div className="flex items-center mb-4">
        <img 
          src={user.image} 
          alt={user.name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <Link 
            href={`/creator/community/user/${user.id}`}
            className="text-lg font-bold hover:text-secondary"
          >
            {user.name}
          </Link>
          <p className="text-sm text-gray-500">Membre depuis {user.joinedAt}</p>
        </div>
      </div>
      
      <div className="space-y-3 mt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Suggestions soumises:</span>
          <span className="font-medium">{user.suggestionsCount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Suggestions acceptées:</span>
          <span className="font-medium text-green-600">{user.acceptedCount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Contenu publié:</span>
          <span className="font-medium text-blue-600">{user.publishedCount}</span>
        </div>
        <div className="flex justify-between pt-2 border-t">
          <span className="text-gray-600">CreaCoin gagnés:</span>
          <span className="font-bold text-secondary">{user.creaCoinEarned}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Taux d'acceptation: <span className="font-medium">{Math.round((user.acceptedCount / user.suggestionsCount) * 100)}%</span>
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div 
            className="bg-secondary h-2 rounded-full" 
            style={{ width: `${Math.round((user.acceptedCount / user.suggestionsCount) * 100)}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <h3 className="font-medium text-gray-700 mb-3">Badge utilisateur</h3>
        <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Contributeur Régulier</span>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <Link 
          href={`/creator/community/user/${user.id}`}
          className="text-secondary hover:underline text-sm"
        >
          Voir tout l'historique →
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
