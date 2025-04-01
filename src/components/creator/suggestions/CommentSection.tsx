import React from 'react';

interface CommentSectionProps {
  suggestionId: string | number;
  comments?: {
    id: number;
    user: {
      id: number;
      name: string;
      image: string;
    };
    text: string;
    timestamp: string;
    likes: number;
    isCreator?: boolean;
    replies?: {
      id: number;
      user: {
        id: number;
        name: string;
        image: string;
      };
      text: string;
      timestamp: string;
      likes: number;
      isCreator?: boolean;
    }[];
  }[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ suggestionId, comments = [] }) => {
  // Données de test si aucun commentaire n'est fourni
  const demoComments = [
    {
      id: 1,
      user: {
        id: 1,
        name: 'JulienM',
        image: 'https://randomuser.me/api/portraits/men/28.jpg',
      },
      text: 'Super idée ! Je pense que ce serait vraiment intéressant comme contenu et ça pourrait attirer un nouveau public.',
      timestamp: 'il y a 1 jour',
      likes: 12,
      replies: [
        {
          id: 2,
          user: {
            id: 2,
            name: 'Alex Micro',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
          },
          text: 'Merci pour le feedback ! Je suis d\'accord, je pense que ça pourrait bien fonctionner.',
          timestamp: 'il y a 22 heures',
          likes: 5,
          isCreator: true,
        },
      ],
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'SophieV',
        image: 'https://randomuser.me/api/portraits/women/42.jpg',
      },
      text: 'J\'ai vraiment hâte de voir ce que ça va donner si tu acceptes cette idée ! J\'ai toujours voulu voir ce genre de contenu sur ta chaîne.',
      timestamp: 'il y a 12 heures',
      likes: 8,
    },
  ];

  const displayComments = comments.length > 0 ? comments : demoComments;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Discussion ({displayComments.length})</h2>
      
      {/* Zone de commentaire */}
      <div className="mb-6">
        <div className="flex items-start space-x-4">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Votre avatar" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-grow">
            <textarea 
              placeholder="Ajoutez un commentaire..." 
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              rows={3}
            ></textarea>
            <div className="flex justify-between mt-2">
              <div className="flex items-center text-sm text-gray-500">
                <input type="checkbox" id="isPrivate" className="mr-2" />
                <label htmlFor="isPrivate">Commentaire privé (visible uniquement par l'auteur)</label>
              </div>
              <button className="bg-secondary text-white px-4 py-1 rounded-md hover:bg-opacity-90 transition-colors text-sm">
                Commenter
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Liste des commentaires */}
      <div className="space-y-6">
        {displayComments.map((comment) => (
          <div key={comment.id} className="border-b pb-4 last:border-0 last:pb-0">
            {/* Commentaire principal */}
            <div className="flex space-x-4">
              <img 
                src={comment.user.image} 
                alt={comment.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-grow">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <span className="font-medium">{comment.user.name}</span>
                      {comment.isCreator && (
                        <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                          Créateur
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-800">{comment.text}</p>
                </div>
                
                <div className="flex items-center mt-2 text-sm">
                  <button className="flex items-center text-gray-500 hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>{comment.likes}</span>
                  </button>
                  <button className="flex items-center ml-4 text-gray-500 hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Répondre</span>
                  </button>
                  <div className="ml-auto flex space-x-2">
                    <button className="text-gray-500 hover:text-secondary text-xs">
                      Marquer comme utile
                    </button>
                    <button className="text-red-500 hover:text-red-600 text-xs">
                      Signaler
                    </button>
                  </div>
                </div>
                
                {/* Réponses aux commentaires */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 pl-6 border-l-2 border-gray-100">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex space-x-3 mb-3 last:mb-0">
                        <img 
                          src={reply.user.image} 
                          alt={reply.user.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-grow">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-1">
                              <div className="flex items-center">
                                <span className="font-medium">{reply.user.name}</span>
                                {reply.isCreator && (
                                  <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                                    Créateur
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-gray-500">{reply.timestamp}</span>
                            </div>
                            <p className="text-gray-800">{reply.text}</p>
                          </div>
                          
                          <div className="flex items-center mt-1 text-sm">
                            <button className="flex items-center text-gray-500 hover:text-secondary text-xs">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                              </svg>
                              <span>{reply.likes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Formulaire de réponse */}
                    <div className="flex space-x-3 mt-3">
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="Votre avatar" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-grow">
                        <input 
                          type="text" 
                          placeholder="Répondre à ce commentaire..." 
                          className="w-full border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination simple */}
      {displayComments.length > 5 && (
        <div className="flex justify-center mt-6">
          <button className="text-secondary hover:underline">Afficher plus de commentaires</button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
